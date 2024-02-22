import Nav from './components/Nav/Nav'
import Header from './components/Header/Header'
import Bio from './components/Bio/Bio'
import Projects from './components/Projects/Projects'
import './index.scss'
import Footer from './components/Footer/Footer'


function App({pageProps, router}) {
  

  return (
    <div className="App"> 
      <div className='stars'></div>
      <section className='falling-stars'>
        <span className='falling-star'></span>
        <span className='falling-star'></span>
        <span className='falling-star'></span>
        <span className='falling-star'></span>
      </section>
      {/* <div class="svg-container">
      <svg class="svg-line">
          <line x1="50%" y1="0" x2="50%" y2="100vh" stroke="black" stroke-width="2"/>
      </svg>
      <svg class="svg-carrot" viewBox="0 0 50 50">
          <polygon points="25,0 50,50 0,50" fill="black"/>
      </svg>
      </div> */}
      <div className='content-container'>
        <Nav />
        <Header />
        <Bio />
        <Projects  />
        <Footer />        
      </div>

    </div>
  )
}

export default App
