const Button = ({ location, allLocations, setAllLocations }) => {
  const locationDeleted = allLocations.filter((loc) => {
    return loc.id != location.id;
  });

  return (
    <button className="btn" onClick={() => setAllLocations(locationDeleted)}>
      Not interested
    </button>
  );
};

export default Button;
