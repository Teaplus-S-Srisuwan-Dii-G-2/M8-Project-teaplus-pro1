import { configureStore } from '@reduxjs/toolkit';
import menuReducers from '../features/menu/reducers';

export default configureStore({
  reducer: { 
    menus: menuReducers
  }

});