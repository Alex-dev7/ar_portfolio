import React, { useState } from 'react';
import Nav from './components/Nav/Nav'
import Header from './components/Header/Header'
import Bio from './components/Bio/Bio'
import Projects from './components/Projects/Projects'
import './index.scss'
import Footer from './components/Footer/Footer'
import { ToggleProvider } from './context/ToggleContext';




function App({pageProps, router}) {
  const [hoveredElement, setHoveredElement] = useState(null)

  return (
    <ToggleProvider>
      <div className="App"> 
        <div className='stars'></div>
        <section className='falling-stars'>
          <span className='falling-star'></span>
          <span className='falling-star'></span>
          <span className='falling-star'></span>
          <span className='falling-star'></span>
        </section>
        <div className='content-container'>
          <Nav setElementHovered={setHoveredElement} />
          <Header />
          <Bio />
          <Projects  />
          <Footer />        
        </div>
      </div>
    </ToggleProvider>
  )
}

export default App
