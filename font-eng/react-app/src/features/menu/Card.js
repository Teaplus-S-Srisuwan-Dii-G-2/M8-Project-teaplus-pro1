import React from 'react'
import styled from 'styled-components';
import Swal from 'sweetalert2'


import PropTypes from 'prop-types';

function Card({item,className}) {
    
    function showdetail(item_name,item_img,item_method) {
        Swal.fire({
            title: item_name,
            text: item_method,
            imageUrl: item_img,
            imageWidth: 800,
            imageHeight: 400,
            imageAlt: item_name,
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, let do it!'
          })
    }


    return (
        <li className={className}>
        <a onClick={()=>showdetail(item.menu_name,item.menu_img,item.cooking_method)}>
        <img className="Products__image" src={item.menu_img} alt={item.menu_name} />
        <div className="Products__name">{item.menu_name}</div>
        <small className="Products__type">{item.description}</small>
      </a>
        </li>
    )
}

Card.propTypes = {
    item: PropTypes.object.isRequired,
    className: PropTypes.string.isRequired
  };

export default styled(Card)`
padding-right: 12px;
  padding-bottom: 36px;
  padding-left: 12px;
  width: 33%;
  position: relative;

  .Products__name {
    color: #333;

    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 100%;
    display: block;
  }

  .Products__type {
    color: #767676;
  }

  .Products__image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 8px;
  }
`
