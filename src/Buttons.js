import React from "react";

function Buttons(props) {
  function handleClick(event) {
    props.selectCategory(event.target.textContent);
    document
      .querySelectorAll(".btn-primary")
      .forEach((el) => (el.className = "btn btn-secondary"));
    event.target.className = "btn btn-primary";
  }
  return (
    <div className="buttons">
      <button type="button" className="btn btn-secondary" onClick={handleClick}>
        pharmacies
      </button>
      <button type="button" className="btn btn-secondary" onClick={handleClick}>
        colleges
      </button>
      <button type="button" className="btn btn-secondary" onClick={handleClick}>
        hospitals
      </button>
      <button type="button" className="btn btn-secondary" onClick={handleClick}>
        doctors
      </button>
    </div>
  );
}

export default Buttons;
