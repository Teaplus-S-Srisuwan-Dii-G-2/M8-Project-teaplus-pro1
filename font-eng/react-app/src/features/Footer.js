import React from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';



function Footer({ className }) {
    return (
        <div className={className}>
            <div className="main-footer">
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" />
                <div className="container">
                    <div className="row">
                        {/* Column1 */}
                        <div className="col">
                            <h4>COMPANY</h4>
                            <ui className="list-unstyled">
                                <li>RSV Team x Professional Computer co. ltd</li>
                                <li>Chiang Mai CNX, 50200,TH</li>
                            </ui>
                        </div>
                        {/* Column2 */}
                        <div className="col">
                            <h4></h4>
                            <ui className="list-unstyled">
                                <li><Link to="#"></Link></li>
                                <li><Link to="#"></Link></li>
                                <li><a href="#"></a></li>
                            </ui>
                        </div>
                        {/* Column3 */}
                        <div className="col">
                            <h4>OFTEN LINKS</h4>
                            <ui className="list-unstyled">
                                <li><Link to="/"><i class="fa fa-home" aria-hidden="true"></i> Home</Link></li>
                                <li><Link to="/topanime"><i class="fa fa-list-ul" aria-hidden="true"></i>Menu</Link></li>
                                <li><Link to="/search"><i class="fa fa-search" aria-hidden="true"></i>Calorie calculator</Link></li>
                                {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                                {/* <button onClick={() => firebaseConfig.auth().signOut()} class="btn btn-danger">Sign Out</button> */}
                                <li><Link to="/user"><i class="fa fa-user-circle-o " aria-hidden="true"></i>Insert new menu</Link></li>
                                <li><Link to="/login"><i class="fa fa-sign-in" aria-hidden="true"></i>Profile</Link></li>
                                {/* <i class="fa fa-sign-out" aria-hidden="true" onClick={() => firebaseConfig.auth().signOut()}></i>Sign Out */}
                                {/* <li>Anime List</li>
                            <li>Search Anime</li>
                            <li>Login</li> */}
                            </ui>
                        </div>
                        {/* Column3 */}
                        <div className="col">
                            <h4>CONTACT</h4>
                            <ui className=" list-unstyled">
                                <li className="footer-iconx"><i class="bi bi-facebook"></i> RSV_Open_sources</li>
                                <li className="footer-iconx"><i class="bi bi-instagram"></i> RSV_Open_sources</li>
                                <li className="footer-iconx"><i class="bi bi-twitter"></i> RSV_Open_sources</li>
                                <li className="footer-iconx"><i class="bi bi-envelope"></i> rsvOpensourcesinfo@gmail.com</li>
                                <li className="footer-iconx"><i class="bi bi-telephone-fill"></i>+66 473 589 7404</li>
                            </ui>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <p className="col-sm">
                            &copy;{new Date().getFullYear()} THICC MEMES | All rights reserved |
                            Terms Of Service | Privacy
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default styled(Footer)`
    
.main-footer {
    color: white;
    background-color: #3b3b3b;
    padding-top: 3em;
    position: relative;
    bottom: 0;
    width: 100%;
    margin-top: 10%;
  }
.list-unstyled .footer-iconx{
    margin: 10px 0;
}

`
