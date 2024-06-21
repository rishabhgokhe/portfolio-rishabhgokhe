import React from 'react'
import { Route,BrowserRouter as Router, Routes } from 'react-router-dom'

import "./index.scss"
import NavBar from './components/Layout/NavBar'
// import IntroSec from './components/IntroSec'
import Footer from './components/Layout/Footer'
// import Features from './components/Features/Features'
import Home from './components/Home/Home'


function App() {
  return (
    <Router>
      <div style={{textAlign: "center", background: "#DC143C", color: "white", padding: "2px"}} ><p>New Project Section Comming Soon !!! (React Version under development)</p></div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;