import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import { fetchmenus } from './features/menu/actions';


function App() {
  const menus = useSelector((state) => state.menus);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getmenus() {
      const menus = await axios.get(
        'http://localhost:8080/menu'
      );
      console.log(menus.data)
      dispatch(fetchmenus(menus.data));
    }

    getmenus();
  }, []);

  return (
    <>
      {menus.length > 0 ? (
        <Switch>
          <Route path="/">

          </Route>
        </Switch>
      ) : (
        <div>Loading menus....</div>
      )}
    </>
  )
}

export default App;
