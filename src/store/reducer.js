import {ADD_COUNTER, ADD_DEC_COUNTER, ADD_NUMBER_COUNTER} from "./actions";

//initial state value 0

const initialState = {
    count: 0,
}
// Reducer - Logic how changes a state of our data. Returns current state
// Function where 2 things (state and action) come in and 1 come out (state)

//Reducer is just a JavaScript function

//The actions, the events that occur in the app based on user input, and trigger updates in the state

// action should have the type. Action types should be all UPPER CASE (convention)
// payload can be an object with many properties

const reducer = (state = initialState, action) => {

    switch (action.type) {

        //ADD_COUNTER returns new state (previous value +1)

        case ADD_COUNTER:
            return { ...state, count: state.count + 1 }

        case ADD_DEC_COUNTER:
            return { ...state, count: state.count + 10}

        case ADD_NUMBER_COUNTER:
            return { ...state, count: state.count + action.payload }

        default:
            return state;
    }

}

export default reducer