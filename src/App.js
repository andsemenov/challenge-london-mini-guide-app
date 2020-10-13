import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import City from "./City";
import Buttons from "./Buttons";
import Guide from "./Guide";
import Warning from "./Warning";

function App() {
  ///////////////////////////////////////////////////
  const [city, setCity] = useState("");
  const [category, setCategory] = useState("");

  const selectCity = (item) => {
    setCity(item);
  };

  const selectCategory = (item) => {
    setCategory(item);
  };

  ///////////////

  return (
    <div className="App">
      <Header />
      <City selectCity={selectCity} />
      {!city && category && <Warning />}
      <Buttons selectCategory={selectCategory} />
      {city && category ? <Guide city={city} category={category} /> : null}
    </div>
  );
}

export default App;
