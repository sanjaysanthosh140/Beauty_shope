// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

//import InputDesign from "./components/InputDesign"
//import NavBar from './components/NavBar'
import Header from "./components/Header";
//import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Details from "./components/Details";
import About from "./components/About";
import Blog from "./components/Blog";
import Service from "./components/Service";
import Footer from "./components/Footer";
import backgroundImg from "./assets/Images/people-2583493_1280.jpg"
import Gents from "./components/Gents";
import Subdetail from "./components/Subdetail";
import Hair from "./components/Hair";
import Haircut from "./components/Haircut";
import Subhairtreat from "./components/Subhairtreat";
import LadysSrv from "./components/ladiesSev/LadysSrv";
import Ladyhaircut from "./components/ladiesSev/Ladyhaircut";
import Ladysubdetal from "./components/ladiesSev/Ladysubdetal";
import Ladyhairtreat from "./components/ladiesSev/Ladyhairtreat";
import Ladyartistry from "./components/ladiesSev/Ladyartistry";
import Ladyhairstyil from "./components/ladiesSev/Ladyhairstyil";
import Ladyhaircolor from "./components/ladiesSev/Ladyhaircolor";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="Services" element={<Service />} />
          <Route path="About" element={<About backgroundImage={backgroundImg}/>} />
          <Route path="Blog" element={<Blog />} />
          <Route path="Details" element={<Details/>} />
          <Route path="Gents" element={<Gents/>} />
          <Route path="skin" element={<Subdetail/>} />
          <Route path="hairTreatment" element={<Subhairtreat/>} />
          <Route path="haircuts" element={<Haircut/>} />
          <Route path="color" element={<Hair/>} />
         {/* ladyes service Routs */}
          <Route path="LadysSrv" element={<LadysSrv/>} />
          <Route path="Ladyhaircut" element={<Ladyhaircut/>} />
          <Route path="Ladyskin" element={<Ladysubdetal/>} />
          <Route path="Ladyhairtreatment" element={<Ladyhairtreat/>} />
          <Route path="Artistry" element={<Ladyartistry/>} />
          <Route path="Ladystyilhair" element={<Ladyhairstyil/>} />
          <Route path="Ladyshaircolor" element={<Ladyhaircolor/>} />
        </Routes>
         <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
