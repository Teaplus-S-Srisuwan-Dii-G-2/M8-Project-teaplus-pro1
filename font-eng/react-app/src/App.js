import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import { fetchmenus } from './features/menu/actions';
import Navbar from './features/Navbar';
import Footer from './features/Footer';
import Allmenu from './features/Allmenu';

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
      <Navbar/>
      {menus.length > 0 ? (
        
        <Switch>
          <Route path="/">
            <Allmenu/>
          </Route>
        </Switch>
      ) : (
        <div>Loading menus....</div>
      )}
      <Footer/>
    </>
  )
}

export default App;
