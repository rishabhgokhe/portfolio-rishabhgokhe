import NavBar from '../Components/Layout/NavBar.tsx';
import Footer from '../Components/Layout/Footer.tsx';
import LandingPage from '../Components/Home/Home.tsx';

export default function Home() {

  return (
    <>
    <div style={{textAlign: "center", background: "#DC143C", color: "white", padding: "2px"}} ><p>New Project Section Comming Soon !!! (React Version under development)</p></div>
    <NavBar/>
    <LandingPage />
    <Footer />
    </>
  );
}
