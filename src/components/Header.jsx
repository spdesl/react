import React, { useEffect, useState } from 'react'
import LogoType from '../assets/images/solid.svg'


const Header = () => {
const [isDarkMode,setIsDarkMode ] = useState(false)

useEffect(() => {
const storedThemeMode = localStorage.getItem('themeMode')

if (storedThemeMode === 'dark' || (!storedThemeMode && window.matchMedia('(prefers-color-scheme: light)').matches)) {
    setIsDarkMode(true)
    document.documentElement.classList.add('dark')
} else {
    setIsDarkMode(false)
    document.documentElement.classList.remove('dark')
}
}, [])

const handleThemeToggle = () => {
    if (isDarkMode) {
        setIsDarkMode(false)
        localStorage.setItem('themeMode', 'light')
        document.documentElement.classList.remove('dark')
    } else {
        setIsDarkMode(true)
        localStorage.setItem('themeMode', 'dark')
        document.documentElement.classList.add('dark')
    }

}

  return (
    <div className="container">
                <a id="logo" href="index.html"><img src={LogoType}/></a>
                <nav id="main-menu" className="navbar">
                <a className="nav-link" href="#">Features</a>
                
            </nav>
            <div id="darkmode-toggle-switch" className="btn-toggle-switch">
                <span className="label">Dark mode</span>
                <label htmlFor="darkmode-switch" className="toggle-switch">
                    <input id="darkmode-switch" type="checkbox" checked={isDarkMode} onChange={handleThemeToggle}/>
                    <span className="slider round"></span>
                </label>
            </div>
            <a id="auth-signin" className="btn-primary" href="#">
                <i className="fa-thin fa-user-large"></i>
                <span>sign in / up</span>
            </a>

            <button className="btn-mobile">
                <i className="fa-regular fa-bars"></i>
            </button>
            </div>
  )
}

export default Header