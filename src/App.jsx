import React from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Features from './components/Features';
import Work from './components/Work';
import Thumbnail from './components/Thumbnail';
import Footer from './components/Footer';

// Initialize Lenis
const lenis = new Lenis();

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Highlights/>
      <Features/>
      <Work/>
      <Thumbnail/>
      <Footer/>
    </div>
  )
}

export default App