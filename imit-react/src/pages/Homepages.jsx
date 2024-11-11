import About from "../components/About"
import Carousel from "../components/Carousel"
import Event from "../components/Event"
import Gallery from "../components/Gallery"
import Navbar from "../components/Navbar"
import Program from "../components/Program"
import Quote from "../components/Quote"


export const Homepages = () => {
  return (
  <>
        <Carousel/>
        <About/>
        <Program/>
        <Quote/>
        <Gallery/>
        <Event/>
  </>
  )
}
