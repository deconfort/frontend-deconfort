import { createReducer } from "@reduxjs/toolkit";
import reactionsActions from "../actions/reactionsActions";
// eslint-disable-next-line
const { createReaction, getReactions, updateReactions, } = reactionsActions;

const initialState = {
 
};

const reactionsReducers = createReducer(initialState, (builder) => {

  
});

export default reactionsReducers;
