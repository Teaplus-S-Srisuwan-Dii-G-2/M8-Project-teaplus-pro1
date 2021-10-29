import React from 'react'
import styled from 'styled-components';
import Swal from 'sweetalert2'


import PropTypes from 'prop-types';

function Card({item,className}) {
    
    function showdetail(item_name,item_img,item_description,menuID) {
        Swal.fire({
            title: item_name,
            text: item_description,
            imageUrl: item_img,
            imageWidth: 800,
            imageHeight: 300,
            imageAlt: item_name,
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, let do it!'
          }).then(function(result) {
            if (result.isConfirmed){
            window.location = '/Detail/'+menuID;
            }
        });
    }


    return (
        <li className={className}>
        <a onClick={()=>showdetail(item.menu_name_TH,item.menu_img,item.description,item.menuID)}>
        <img className="Products__image" src={item.menu_img} alt={item.menu_name_TH} />
        <div className="Products__name">{item.menu_name_EN}</div>
        <small className="Products__type">{item.menu_name_TH}</small>
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
    font-size: xx-large;
    font-family: Georgia, serif;
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
