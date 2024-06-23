"use client"
import { useRouter } from 'next/navigation';
import NavBar from '../Components/Layout/NavBar.jsx'
import Footer from "../Components/Layout/Footer.jsx"
import LandingPage from "../Components/Home/Home.jsx"

export default function Home() {

  const router = useRouter();

  return (
    <>
    <div style={{textAlign: "center", background: "#DC143C", color: "white", padding: "2px"}} ><p>New Project Section Comming Soon !!! (React Version under development)</p></div>
    <NavBar/>
    <LandingPage />
    <Footer />
    
    </>
  );
}
