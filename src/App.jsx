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
