import React from 'react'
import Portfolio from './Portfolio'

const Header = () => {
  return (
    <div>
        <div class="container">
            <div class="main">
                <div class="pics"></div>
                <div class="start">
                    <h1>Start Bootstrap</h1>
                    <hr class="line"></hr>
                    <p>Web Developer - Graphic Artist - User Experience Designer</p>
                </div>
            
            </div>
        </div>
        <Portfolio></Portfolio>
    </div>
  )
}

export default Header
