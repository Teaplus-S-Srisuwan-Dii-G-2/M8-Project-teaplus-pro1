import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import PropTypes from 'prop-types';


const Detail = ({ className }) => {

    

    const { id } = useParams();
    const menus = useSelector((state) => state.menus)
    const menu = menus.find((menu) => menu.menuID === Number(id));
    const [ingredients, setingredients] = useState([]);

    
    useEffect(() => {
        async function getingredients() {
            const res = await axios.get(
                'http://localhost:8080/ingredients/'+id
            );
            console.log(res.data)
            setingredients(res.data)
        }
        getingredients();

    }, []);
   
    return (

        <>
        <div className={className}>
            <div className="top">
                <img className="menu-image" src={menu.menu_img} />
                <div className="menu_detail">
                    <div className="Products__name ">{menu.menu_name_EN}</div>
                    <small className="Products__type ">{menu.menu_name_TH}</small>

                </div>
            </div>
            <div className="midder">
                <div className="Products__name ">Ingredients</div>
                <div className="menu_detail">
                    <ul>
                        {ingredients.map((ingredient) => (
                            <li className=" ">
                                {ingredient.ingredients_name}
                            </li>
                            ))}
                    </ul>
                </div>
                <div className="Products__name ">Cooking Method</div>
                <div className="method">{menu.cooking_method}</div>
            </div>
        </div>
        </>
    )
}

Detail.propTypes = {
    className: PropTypes.string.isRequired,
    ingredients: PropTypes.array.isRequired
};

export default styled(Detail)`
padding-right: 12px;
padding-bottom: 36px;
padding-left: 12px;
width:100%;
position: relative;

.menu_detail{
display: flex;
margin: 50px 3% 0 3%;
display: inline-block;
}

.Products__name {
    color: #333;
    font-size: xx-large;
    font-family: Georgia, serif;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 100%;
    display: inline-block;
  }

  small.Products__type {
    color: #767676;
  }
  
img.menu-image {
    width: 50%;
    height: Auto;
    object-fit: cover;
    border-radius: 8px;
    margin: 0 auto 0 auto;
}

.midder{
    margin-right: 1%;
    margin-left: 1%;
}

.method{
    margin-left: 3%;
}

`
