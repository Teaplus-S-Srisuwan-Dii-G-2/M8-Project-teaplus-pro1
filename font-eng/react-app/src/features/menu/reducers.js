import { createReducer } from '@reduxjs/toolkit';
import { fetchmenus } from './actions';


export default createReducer([], {
    [fetchmenus]: (state, action) => {
        return action.payload;
      }
});