import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';

import { addmenu } from './actions';


function Newmenu() {

    const [menuID, setmenuID] = useState('');
    const [menu_name_TH, setmenu_name_TH] = useState('');
    const [menu_img, setmenu_img] = useState('');
    const [description, setdescription] = useState('');
    const [cooking_method, setcooking_method] = useState('');
    const [menu_name_EN, setmenu_name_EN] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    async function onSubmit(event) {
        event.preventDefault();
        try {
            const res = await axios.post('http://localhost:8080/menu', {
                menuID: menuID,
                menu_name_TH: menu_name_TH,
                menu_img: menu_img,
                description: description,
                cooking_method: cooking_method,
                menu_name_EN: menu_name_EN,
            })
            if (res.status === 200 ){
                dispatch(addmenu({ menuID, menu_name_TH, menu_img, description, cooking_method, menu_name_EN }));
                history.push('/');
            }
        } catch (error) {
            console.log(error);

        }
        
    }


    return (
        <>
            <h1>Add Menu</h1>
            <form id="create-form" onSubmit={onSubmit}>
                <div className=" input-group">
                    <label htmlFor="menu_name_TH">menu_name_TH</label>
                    <input
                        name="menu_name_TH"
                        type="text"
                        id="menu_name_TH"
                        value={menu_name_TH}
                        onChange={(event) => setmenu_name_TH(event.target.value)}
                    />
                </div>
                <div className=" input-group">
                    <label htmlFor="type">menu_name_EN</label>
                    <input
                        name="menu_name_EN"
                        type="text"
                        id="menu_name_EN"
                        value={menu_name_EN}
                        onChange={(event) => setmenu_name_EN(event.target.value)}
                    />
                </div>
                <div className=" input-group">
                    <label htmlFor="type">menu_img</label>
                    <input
                        name="menu_img"
                        type="text"
                        id="menu_img"
                        value={menu_img}
                        onChange={(event) => setmenu_img(event.target.value)}
                    />
                </div>
                <div className=" input-group">
                    <label htmlFor="type">description</label>
                    <input
                        name="description"
                        type="text"
                        id="description"
                        value={description}
                        onChange={(event) => setdescription(event.target.value)}
                    />
                </div>
                <div className=" input-group">
                    <label htmlFor="type">cooking_method</label>
                    <input
                        name="cooking_method"
                        type="text"
                        id="cooking_method"
                        value={cooking_method}
                        onChange={(event) => setcooking_method(event.target.value)}
                    />
                </div>
                <button type="submit">Add Menu</button>
            </form>
        </>
    )
}

export default Newmenu
