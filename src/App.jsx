import Nav from './components/Nav/Nav'
import Header from './components/Header/Header'
// import Bio from './components/Bio/Bio'
import Projects from './components/Projects/Projects'
import './index.scss'

function App() {
  

  return (
    <div className="App">
      <Nav />
      <Header />
      {/* <Bio /> */}
      <Projects />
    </div>
  )
}

export default App


// <header style={{height: "100vh",width: "100%", background: "#000", display: "flex",justifyContent: "center", alignItems: "center"}}>
// <p style={{color: "whitesmoke", fontSize: "4rem", letterSpacing: "-10px", position: "absolute", left: "1%", top: "0%"}}>AR</p>
// <p style={{color: "whitesmoke", fontSize: "5rem", letterSpacing: "2rem"}}>ALE<span style={{color: "red"}}>X</span>EI RUSU</p><br/>

// </header>