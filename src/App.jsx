import React, { useEffect, useRef, useState } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackTop from "./components/BackTop";
import Header from "./components/Header";

function App() {
  return (
    <>
      {/* Header Section Start */}
      <Header/>
      {/* Header Section End */}

      {/* Hero Section Start */}
      <Hero/>
      {/* Hero Section End */}

      {/* About Section Start */}
      <About/>
      {/* About Section End */}

      {/* Portfolio Section Start */}
      <Portfolio/>
      {/* Portfolio Section End */}

      {/* Clients Section Start */}
      <Clients/>
      {/* Clients Section End */}

      {/* Contact Section Start */}
      <Contact/>
      {/* Contact Section End */}

      {/* Footer Start */}
      <Footer/>
      {/* Footer End */}

      {/* Back to Top Start */}
      <BackTop/>
      {/* Back to Top End */}
    </>
  );
}

export default App;
