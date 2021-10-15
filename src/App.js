import { useState, useEffect } from "react";
import Home from "./components/Home";

function App() {
  const [allLocations, setAllLocations] = useState([]);

  useEffect(() => {
    const tours = fetch("https://course-api.com/react-tours-project");
    tours
      .then((res) => res.json())
      .then((data) => setAllLocations(data))
      .catch((err) => console.log(err));
  }, allLocations);

  return (
    <div className="app">
      <h1>Our Tours</h1>
      <Home allLocations={allLocations} setAllLocations={setAllLocations} />
    </div>
  );
}

export default App;
