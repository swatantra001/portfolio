import Navbar from "./components/Navbar"
import About from "./sections/about"
import Contact from "./sections/Contact"
import Experience from "./sections/Experience"
import Footer from "./sections/Footer"
import Home from "./sections/Home"
import Skills from "./sections/Skills"
import Projects from "./sections/Projects"
import Testimonials from "./sections/Testimonials"
import ParticlesBackground from "./components/ParticlesBackground"
import CustomCursor from "./components/CustomCursor"
import { useState } from "react"
import IntroAnimation from "./components/IntroAnimation"

function App() {
    const [introDone, setIntroDone] = useState(false);
  return (
    <>
      {!introDone && <IntroAnimation onFinish={() => setIntroDone(true)} />}
      {introDone && 
        <div className="relative gradient text-white">
          <CustomCursor />
          {/* <ParticlesBackground/> */}
          <Navbar />
          <Home />
          <About />
          <Skills />
          <Projects />
          <Experience/>
          <Testimonials />
          <Contact/>
          <Footer/>
        </div>
      }
    </>
  )
}

export default App
