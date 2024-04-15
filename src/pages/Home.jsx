import Hero from '../components/sections/Hero'
import NavBar from '../components/sections/Navbar'
import Footer from '../components/sections/Footer'
import Apropos from '../components/sections/Apropos'
import Localisation from '../components/sections/Localisation'
import Formations from '../components/sections/Formations'


const Home = () => {
  return (
    <div>
    <NavBar/>
    <Hero/>
    <hr/>
    <Formations/>
    <hr/>
    <Apropos/>
    <hr/>
    <Localisation/>
    <Footer/>
    </div>
  )
}

export default Home
