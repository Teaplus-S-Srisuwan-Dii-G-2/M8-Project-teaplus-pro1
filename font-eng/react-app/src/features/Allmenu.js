import React from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux'


import Card from './menu/Card';

function Allmenu({className}) {
const menus = useSelector ((state) => state.menus)

    return (
        <div className={className}>
            <h1 className="page_tital">All Menu</h1>
            <ul className="Home__products">{console.log(menus)}
                    {menus.map((product) => {
                        return(
                            <Card key={product.id} item={product} />
                        )
                    })}
                </ul>
        </div>
    )
}

Allmenu.propTypes = {
    className: PropTypes.string.isRequired,
    menu: PropTypes.array.isRequired
};


export default styled(Allmenu)`
 .Home__products {
    display: flex;
    flex-wrap: wrap;

    list-style-type: none;
    padding: 0;
    margin: 30px 4% 0 4%;
  }

  .page_tital{
      font-size: 500%;
      margin: 50px 0 0 3%;
      font-family: 'Brush Script MT', cursive;

  }

`
