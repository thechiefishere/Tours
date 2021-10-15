import Card from "./Card";
import Button from "./Button";

const Home = ({ allLocations, setAllLocations }) => {
  const loc = allLocations.map((location) => {
    return (
      <div className="home-child">
        <Card key={location.id} location={location} />
        <Button
          location={location}
          allLocations={allLocations}
          setAllLocations={setAllLocations}
        />
      </div>
    );
  });

  return <div className="home">{loc}</div>;
};

export default Home;
