import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import '../src/css/App.css'
import Home from './pages/Home'
import Favourate from './pages/Favourate'
import { Routes,Route } from 'react-router-dom'
import NavBar from './components/NavBar'


function App() {

  
  return(
   <div>
      <NavBar/>
     <main className='main-content'>
      <Routes>
        <Route path ="/" element = {<Home/>}></Route>
        <Route path ="/favourate" element = {<Favourate/>}></Route>
      </Routes>
    </main>
   </div>
  )
}

export default App
