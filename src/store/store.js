import { createStore } from "redux";
import reducer from "./reducer";

//reducer should be an argument
// reducer - function where 2 things come in (state and action) and 1 come out (state)

const store = createStore( reducer );

export default store;


