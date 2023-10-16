import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { peopleReducer } from "../reducers/people-reducer";
import { peopleMock } from "../mocks/people";
import { Person } from "../types/person";

const defaultState = {
  people: [],
};

const PeopleContext = createContext<PeopleReducer>(defaultState);
// should be typed to the reducer
const DispatchContext = createContext<React.Dispatch<any>>(() => {});

export function PeopleProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(peopleReducer, defaultState);

  const [fetched, setFetched] = useState(false);

  useEffect(() => {
    // SIMULATE API
    dispatch({
      type: "ADD_INITIAL_STATE",
      state: {
        people: peopleMock,
      },
    });
    setFetched(true);
  }, []);

  if (!fetched) return <h1>LOADING.....</h1>;
  return (
    <PeopleContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </PeopleContext.Provider>
  );
}

type PeopleReducer = {
  people: Person[];
  selectedPerson: string | undefined;
};

export function usePeopleContext() {
  return useContext(PeopleContext) as PeopleReducer;
}

export function useDispatchContext() {
  return useContext(DispatchContext) as React.Dispatch<any>;
}
