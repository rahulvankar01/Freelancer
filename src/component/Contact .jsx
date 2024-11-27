import React from 'react'
import Footer from './Footer'
import End from './End'

const Contact  = () => {
  return (
    <div>
       <div class="content">
            <div class="main">
               
                <div class="contenth1">
                    <h1>Contact Me</h1>
                </div>
                <hr class="Contacthr"></hr>

                <hr class="Contacthr1"></hr>
                <input class="name" type="text" placeholder="NAME"/>

                <hr class="Contacthr1"></hr>
                <input class="name" type="text" placeholder="Email Address"/>

                <hr class="Contacthr1"></hr>
                <textarea class="name" type="text" placeholder="Message"></textarea>
                <hr class="Contacthr1"></hr>

                <button class="send">Send</button>
            </div>
        </div>
        <Footer></Footer>
        <End></End>
    </div>
  )
}

export default Contact 
