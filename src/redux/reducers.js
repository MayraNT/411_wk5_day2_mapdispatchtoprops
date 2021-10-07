import { combineReducers } from 'redux'

const user = (state = null) => state

const cars = (state = [], action) => {
    switch(action.type) {
        case 'ADD_CAR':
            console.log(action.value);
            return [...state, action.value];
        case 'REMOVE_CAR':
            console.log(action.value);
            const newState = [...state];
            newState.splice(action.value, 1);
            return newState;    
        default:
            return state;
    }
}

export default combineReducers({ user, cars })