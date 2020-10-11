import React from "react";

function City(props) {
  function handleChange(event) {
    props.selectCity(event.target.value);
  }

  return (
    <div className="custom-select">
      <select onChange={handleChange}>
        <option value="">Select a city:</option>
        <option value="harrow">Harrow</option>
        <option value="heathrow">Heathrow</option>
        <option value="stratford">Stratford</option>
      </select>
    </div>
  );
}

export default City;
