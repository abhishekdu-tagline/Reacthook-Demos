import { DELETE_TODOS } from "../constaints/Constaint";

export const deleteToDos = (id) => {
  console.log("id is " + id);
  return {
    type: DELETE_TODOS,
    id,
  };
};
