export const PersonDisplay = ({
  image,
  name,
  title,
  description,
  id,
  dispatch,
  showDescription = false,
}: {
  image: string;
  name: string;
  title: string;
  description: string;
  id: string;
  dispatch: React.Dispatch<any>;
  showDescription: boolean;
}) => (
  <li
    onClick={() =>
      dispatch({
        type: "SELECT_PERSON",
        id: id,
      })
    }
  >
    <img src={image} />
    <div className="index-person__text-container">
      <h2>{name}</h2>
      <p>{title}</p>
      {showDescription ? <p className="description">{description}</p> : <></>}
    </div>
  </li>
);
