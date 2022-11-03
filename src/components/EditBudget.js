import React, { useState } from "react";

const EditBudget = (props) => {
  const [budget, setBudget] = useState(props.budget);

  const inputHandler = (event) => {
    setBudget(event.target.value);
  };

  const buttonHandler = () => {
    props.saveClickHandler(budget);
  };

  return (
    <>
      <input
        required="required"
        type="number"
        id="name"
        value={budget}
        className="form-control mr-3"
        onChange={inputHandler}
      ></input>
      <button
        className="btn btn-primary"
        type="button"
        onClick={buttonHandler}
      >
        Edit
      </button>
    </>
  );
};

export default EditBudget;
