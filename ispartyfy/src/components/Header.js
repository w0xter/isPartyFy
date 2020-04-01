import React from 'react'
import {Link} from 'react-router-dom'
import ispLogo from '../assets/logos/ispartyfy.logo.png'
export default  function Header(){
    return(
        <nav class="navbar navbar-expand-lg navbar-dark secBg" >
            <div className="d-flex flex-grow-1">
            <a className="navbar-brand d-none d-lg-inline-block" href="#">
                <img src={ispLogo} className="img-fluid d-inline-block align-top" alt=""/>
            </a>
            <a className="navbar-brand-two mx-auto d-lg-none d-inline-block" href="#">
                <img src={ispLogo} alt="" className="img-fluid"/>
            </a>                
            </div>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
                <Link href="#">
                    <a class="nav-link prin">Home <span class="sr-only">(current)</span></a>
                </Link>
            </li>
            <li class="nav-item">
                <Link href="#">
                    <a class="nav-link prin">Discover</a>
                </Link>
            </li>
            <li class="nav-item">
                <Link href="#">
                    <a class="nav-link prin">Launch a Party</a>
                </Link>
            </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2 secBg prin" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn ispButtonOutline my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
        </nav>        
    )
}