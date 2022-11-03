import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import ViewBudget from "./ViewBudget";
import EditBudget from "./EditBudget";

const Budget = () => {
  const { budget, dispatch } = useContext(AppContext);
  const [isEditing, setIsEditing] = useState(false);

  const editingHandler = () => {
    setIsEditing(true);
  };

  const saveClickHandler = (value) => {
    dispatch({
      type: "SET_BUDGET",
      payload: value,
    });
    setIsEditing(false);
  };

  return (
    <div className="alert alert-secondary p-3 d-flex align-items-center justify-content-between">
      {isEditing ? (
        <EditBudget budget={budget} saveClickHandler={saveClickHandler} />
      ) : (
        <ViewBudget editingHandler={editingHandler} budget={budget} />
      )}
    </div>
  );
};

export default Budget;
