//Array-based approach
import {EDIT_STREAM} from "./actions/types";

const streamReducer = (state=[], action) => {
  switch(action.type){
    case EDIT_STREAM:
      return state.map(stream => {
        if (stream.id === action.payload.id) {
          return action.payload;
        } else {
          return stream
        }
      })
    default:
      return state
  }
}

// Object based approach
const streamObjectReducer = (state, action) => {
  switch (action.type){
    case EDIT_STREAM:
      // const newState = { ...state }
      // newState[action.payload.id] = action.payload
      // return newState
      
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
}