import { HashRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Footer from "./components/Footer"
import Nav from "./components/Nav"

function App() {

  return (
    <>
      <HashRouter>
        <Nav />        
      
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
      
        <Footer />
      </HashRouter>
    </>
  )
}

export default App
