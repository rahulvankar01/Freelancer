import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './component/Nav'
import Header from './component/Header'
import Portfolio from './component/Portfolio'
import About from './component/About'
import Contact from './component/Contact '
import Footer from './component/Footer'
import End from './component/End'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Nav></Nav>
    <Routes>
      <Route path='Portfolio' Component={Header}/>
      <Route path='About' Component={About}/>
      <Route path='Contact' Component={Contact}/>
    </Routes>
    </BrowserRouter>
     
     {/* <Header></Header>
     <Portfolio></Portfolio>
     <About></About>
     <Contact></Contact>
     <Footer></Footer>
     <End></End> */}
    </>
  )
}

export default App
