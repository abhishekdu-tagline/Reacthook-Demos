import { createStore } from "redux"
import toDosReducer from "./reducers/Reducer";

const store = createStore( toDosReducer , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;