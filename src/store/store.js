import { createStore } from "redux";
import reducer from "./reducer";

//reducer should be an argument
// reducer - function where 2 things come in (state and action) and 1 come out (state)

//The place where we keep our state - the "store"

// Method createStore() creates a store

const store = createStore( reducer );

export default store;


