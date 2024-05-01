import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/nav-bar'
import IntroSec from './components/intro-sec'
import Features from './components/features'
import Footer from './components/footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <NavBar />
      <IntroSec />
      <Features />
      <Footer />
    </div>
  )
}

export default App
