import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteToDos } from "../../Redux/actions/deleteToDos";

const DisplayToDos = () => {
  const displayToDos = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  console.log("DisplayToDos", displayToDos);
  return (
    <>
      <h4> Display todos</h4>
      {displayToDos.map((data) => {
        return (
          <div key={data.id}>
            <span>
              {data.text} &nbsp; &nbsp; &nbsp;{" "}
              <button
                type="button"
                onClick={() => dispatch(deleteToDos(data.id))}
              >
                deleteToDos
              </button>
            </span>
          </div>
        );
      })}
    </>
  );
};

export default DisplayToDos;
