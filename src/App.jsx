import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar.jsx'
import { action, originals } from "./urls.jsx"
import Banner from './Components/Banner/Banner.jsx'
import RowPost from './Components/RowPost/RowPost.jsx'
import "./App.css"


function App() {

  return (
    <>
    <Navbar/>
    <Banner/>
    <RowPost url={originals} title='Netflix Originals'/>
    <RowPost url={action} title='Action' isSmall/>
      
    </>
  )
}

export default App
