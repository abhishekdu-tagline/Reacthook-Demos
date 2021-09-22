import { ADD_TODOS } from "../constaints/Constaint";

//// Create Action Creators
export const addToDos = (toDos) => {

  return {
    type: ADD_TODOS,
    payload: toDos,
  };
};
