import { createReducer } from '@reduxjs/toolkit';
import { fetchmenus,addmenu } from './actions';

let currentProductId = 9;

export default createReducer([], {
    [fetchmenus]: (state, action) => {
        return action.payload;
      },
      [addmenu]: (state, action) => {
        state.push({ id: ++currentProductId, ...action.payload });
      }
});