import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import Brands from './components/sections/Brands';
import CallToAction from './components/sections/CallToAction';
import Contactanos from './components/sections/Contactanos';
import Hero from './components/sections/Hero';
import Products from './components/sections/Productos';
import Servicios from './components/sections/Servicios';
import Testimoniales from './components/sections/Testimoniales';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Brands />
      <Servicios />
      <CallToAction />
      <Products />
      <Testimoniales />
      <Contactanos />
      <Footer />
    </>
  )
}
