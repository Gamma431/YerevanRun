import { HashRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Footer from "./components/Footer"
import Nav from "./components/Nav"
import Programs from "./pages/Programs"
import Comunity from "./pages/Comunity"
import Events from "./pages/Events"
import Contacts from "./pages/Contacts"

function App() {

  return (
    <div className="bg-[#dae6f6] pb-[2%]">
      <HashRouter>
        <Nav />        
      
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/programs" element={<Programs />}/>
          <Route path="/comunity" element={<Comunity />}/>
          <Route path="/events" element={<Events />}/>
          <Route path="/contactus" element={<Contacts />}/>
        </Routes>
      
        <Footer />
      </HashRouter>
    </div>
  )
}

export default App
