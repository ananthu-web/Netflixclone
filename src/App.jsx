import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar.jsx'
import { action, comedy, documentories, horror, originals, romance } from "./urls.jsx"
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
    <RowPost url={comedy} title='Comedy' isSmall/>
    <RowPost url={horror} title='Horror' isSmall/>
    <RowPost url={romance} title='Romance' isSmall/>
    <RowPost url={documentories} title='Documentaries' isSmall/>
      
    </>
  )
}

export default App
