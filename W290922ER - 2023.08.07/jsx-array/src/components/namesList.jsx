const NamesList = ({ names = [] }) => {
  if (!names.length) {
    return <div>No names yet..</div>;
  }

  return (
    <ul>
      {names.map((name) => {
        return <li key={name}>{name}</li>;
      })}
    </ul>
  );
};

export default NamesList;
