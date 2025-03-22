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

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        {/* <Home /> */}
        {/* <Details /> */}
        {/* <About/> */}
        {/* <Blog/> */}
        {/* <Service/> */}
        {/* <Footer/> */}
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="Services" element={<Service />} />
          <Route path="About" element={<About backgroundImage={backgroundImg}/>} />
          <Route path="Blog" element={<Blog />} />
          <Route path="Details" element={<Details/>} />
        </Routes>
         <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
