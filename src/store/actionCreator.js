import {ADD_COUNTER, ADD_DEC_COUNTER, ADD_NUMBER_COUNTER} from "./actions";

//https://redux-toolkit.js.org/api/createAction

// payload can be an object with many properties

//function that increase our value +1, returns object that we send to reducer

export const addCounterValue = () => {
    return {
        type: ADD_COUNTER
    }
}

// function that increases our value +10

export const addDecToCounter = () => {
    return {
        type: ADD_DEC_COUNTER
    }
}

// function that increases our value + any number
export const addNumberToCount = (number) => {
    return {
        type: ADD_NUMBER_COUNTER,
        payload: number
    }
}


