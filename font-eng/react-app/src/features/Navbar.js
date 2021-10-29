import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';



function Navbar() {
    return (
        <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"><h3 className="logo_navbar">Avo</h3></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link Link to="/"><a class="nav-link active" aria-current="page">Home</a></Link>
              </li>
              <li class="nav-item">
              <Link Link to="/"><a class="nav-link">Menu</a></Link>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Calorie calculator</a>
              </li>
              <li class="nav-item">
              <Link Link to="/Newmenu"><a class="nav-link " href="#">Insert new menu</a></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav> 
      </div>  
    )
}

export default styled(Navbar)`
h3 .logo_navbar{
  font-size: large;
  margin-left: 2.5%;
}
`
