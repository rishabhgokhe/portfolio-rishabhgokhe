import "./index.scss"
import NavBar from './components/Layout/NavBar'
import IntroSec from './components/IntroSec'
import Footer from './components/Layout/Footer'
import Features from './components/Features/Features'

function App() {
  return (
    <div>
      <div style={{textAlign: "center", background: "#DC143C", color: "white", padding: "2px"}} ><p>New Project Section Comming Soon !!! (React Version under development)</p></div>
      <NavBar />
      <IntroSec />
      <Features />
      <Footer />
    </div>
  )
}

export default App;