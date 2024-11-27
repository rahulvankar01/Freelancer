import React from 'react'
import {NavLink} from "react-router-dom"

const Nav = () => {
  return (
    <div>
       <div class="header">
            <div class="main">
                <div class="left">
                    <h1>Star bootstrap</h1>
                    </div>
                  <div class="right">
                    <NavLink to="Portfolio" id="submenu">Portfolio</NavLink>
                    <NavLink to="About" id="submenu">About</NavLink>
                    <NavLink to="Contact" id="submenu">Contact</NavLink>
                   
                </div>
            </div>
        </div>
    </div>
  )
}

export default Nav
