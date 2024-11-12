import React from 'react'
import LogoType from '../assets/images/logo/solid.svg'

const Header = () => {
  return (
    <div className="container">
        <a href="index.html"><img src={LogoType} /></a>
<nav id="mani-menu" className="navbar">
    <a className="nav-link" href="#">Features</a>
</nav>
<div id="darkmode-toggle-switch" className="btn-toggle-switch">
    <span className="label">Dark mode</span>
    <label for="darkmode-switch" className="toggle-switch">
        <input id="darkmode-switch" type="checkbox"/>
        <span className="slider round"></span>
    </label>
</div>
<a id="auth-signin" href="#" className="btn-primary">
    <i class="fa-thin fa-user-large"></i>
    <span>sign in / up</span>
</a>
<button className="btn-mobile">
    <i className="fa-regular fa-bars"></i>
</button>
        </div>
  )
}

export default Header