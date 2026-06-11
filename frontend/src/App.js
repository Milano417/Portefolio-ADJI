import React from "react";
import "./App.css";
import { Toaster } from "./components/ui/sonner";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Filieres from "./components/Filieres";
import Administration from "./components/Administration";
import Admissions from "./components/Admissions";
import Gallery from "./components/Gallery";
import Equipments from "./components/Equipments";
import Statistics from "./components/Statistics";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <About />
      <Filieres />
      <Administration />
      <Admissions />
      <Gallery />
      <Equipments />
      <Statistics />
      <Testimonials />
      <Contact />
      <Footer />
      <ScrollToTop />
      <Toaster position="top-right" richColors />
    </div>
  );
}

export default App;
