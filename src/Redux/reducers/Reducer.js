import { ADD_TODOS, DELETE_TODOS } from "../constaints/Constaint";

const initialState = {
  todo: [],
};

export default function toDosReducer(state = initialState, action) {
  // console.log("Action send Data to reducer: " + JSON.stringify(action.payload));
  console.log("Action send id is :-", action.id);
  switch (action.type) {
    case ADD_TODOS:
      return { ...state, todo: [...state.todo, action.payload] };

    case DELETE_TODOS:
      const filltredToDos = state.todo.filter((todo) => {
        return todo.id !== action.id;
      });
      return { ...state, todo: filltredToDos };
    default:
      return state;
  }
}
