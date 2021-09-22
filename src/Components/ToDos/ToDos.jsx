import React, { useState } from "react";
import { connect } from "react-redux";
import useToDos from "./useToDos";
import DisplayToDos from "./DisplayToDos";
import { addToDos } from "../../Redux/actions/addToDosAction";
const ToDos = (props) => {
  const [handleToDos, toDosData, setToDosData] = useToDos();
  const { addToDos, toDoState } = props;
  console.log("State data is", toDoState);
  // console.log("Redux Store Data", props);
  // console.log("Props Data is destructuring " , addToDos, toDoState);
  // console.log("Enter ToDos Text is" , toDosData);

  return (
    <>
      <h4> ToDo List</h4>
      <input
        type="text"
        name="text"
        value={toDosData.text || ""}
        placeholder="Enter ToDos..."
        onChange={handleToDos}
      />
      <button
        type="button"
        onClick={() => {
          addToDos(toDosData);
          setToDosData({});
        }}
      >
        {" "}
        Add ToDos
      </button>

      <DisplayToDos />
    </>
  );
};

const mapStateToProps = (state) => ({
  toDoState: state,
});

const mapDispatchToProps = (dispatch) => ({
  addToDos: (toDos) => {
    dispatch(addToDos(toDos));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDos);
