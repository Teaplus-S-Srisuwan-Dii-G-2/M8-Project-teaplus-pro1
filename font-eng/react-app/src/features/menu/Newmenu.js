import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import styled from 'styled-components';

import { addmenu } from './actions';


function Newmenu({ className }) {

    const [menuID, setmenuID] = useState('');
    const [menu_name_TH, setmenu_name_TH] = useState('');
    const [menu_img, setmenu_img] = useState('');
    const [description, setdescription] = useState('');
    const [menu_name_EN, setmenu_name_EN] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    async function onSubmit(event) {
        event.preventDefault();
        console.log(5555);
        try {
            const res = await axios.post('http://localhost:8080/menu', {
                menuID: menuID,
                menu_name_TH: menu_name_TH,
                menu_img: menu_img,
                description: description,
                menu_name_EN: menu_name_EN,
            })
            if (res.status === 200) {
                dispatch(addmenu({ menuID, menu_name_TH, menu_img, description, menu_name_EN }));
                history.push('');
                // window.location = '/';
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className={className}>
                <div className="contana">
                    <h1 className="haed_tad">Add Menu</h1>
                    <form id="create-form" onSubmit={onSubmit}>
                        <div className=" input-group">
                            <label htmlFor="menu_name_TH">Name fo menu (Thai)</label>
                            <input
                                name="menu_name_TH"
                                type="text"
                                id="menu_name_TH"
                                value={menu_name_TH}
                                onChange={(event) => setmenu_name_TH(event.target.value)}
                            />
                        </div>
                        <div className=" input-group">
                            <label htmlFor="type">Name fo menu  (English)</label>
                            <input
                                name="menu_name_EN"
                                type="text"
                                id="menu_name_EN"
                                value={menu_name_EN}
                                onChange={(event) => setmenu_name_EN(event.target.value)}
                            />
                        </div>
                        <div className=" input-group">
                            <label htmlFor="type">Menu image  (Link)</label>
                            <input
                                name="menu_img"
                                type="text"
                                id="menu_img"
                                value={menu_img}
                                onChange={(event) => setmenu_img(event.target.value)}
                            />
                        </div>
                        <div className=" input-group">
                            <label htmlFor="type">Menu description</label>
                            <input
                                name="description"
                                type="text"
                                id="description"
                                value={description}
                                onChange={(event) => setdescription(event.target.value)}
                            />
                        </div>
                        <button className="sub_but" type="submit">Add Menu</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default styled(Newmenu)`
 form label {
    display: inline-block;
    margin-bottom: 0.5rem;
  }
  
  form input {
    padding: 0.3rem 0.7rem;
  
    font-size: 1rem;
    line-height: 1.5;
  
    outline: none;
  
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
  
    width: 100%;
  }
  
  form button {
    margin-bottom: 50px;
    font-size: 1rem;
    line-height: 1.5;
    padding: 0.5rem 0.7rem;
    cursor: pointer;
    float: right;
    color: #ffffff;
    background-color: #28a745;
    border-radius: 0.25rem;
    border: none;
  }
  

  
  form .input-group {
    margin-bottom: 10px;
  }

  .contana{
      margin: 25px 5% 150px 5%;
  }

  .haed_tad{
      margin-bottom: 50px;
  }

  .sub_but{
      margin-top: 20px;
  }

`
