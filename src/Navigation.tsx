import React from 'react';
import './NavBar.css'

function NavBar(){
    return(
    <div className="NavBar">
        <h1>W.</h1>
        <div className="nav-content">
        <span><a className="links">Home</a></span>
        <span><a className="links">New</a></span>
        <span><a className="links">Popular</a></span>
        <span><a className="links">Trending</a></span>
        <span><a className="links">Categories</a></span>
        </div>
    </div>
    )
}
export default NavBar;