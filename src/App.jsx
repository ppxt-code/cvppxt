import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Presentation from "./pages/Presentation";
import Skills from "./pages/Skills";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Error from "./pages/Error";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/presentation" element={<Presentation />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/error" element={<Error />} />
      <Route path="*" element={<Error/>}/>
    </Routes>
  )
}

export default App
