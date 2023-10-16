import {
  useDispatchContext,
  usePeopleContext,
} from "../contexts/peopleContext";
import "../css/peopleList.css";
import { PersonDisplay } from "./person";

export const PeopleList = () => {
  const { people, selectedPerson } = usePeopleContext();
  const dispatch = useDispatchContext();

  // hacky solution, but time limit
  const peopleList = selectedPerson
    ? people.filter((person) => person.id === selectedPerson)
    : people;

  return (
    <section className="people-list">
      <ol>
        {peopleList.map((person, index) => (
          <PersonDisplay
            key={`person-${index}`}
            {...person}
            dispatch={dispatch}
            showDescription={!!selectedPerson}
          ></PersonDisplay>
        ))}
      </ol>
    </section>
  );
};
