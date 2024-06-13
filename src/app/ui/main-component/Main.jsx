

import { Routes, Route } from 'react-router-dom';

import Navigation from '../navigation-component/Navigation'
import Home from '../home-component/Home';
import About from '../about-component/About';
import Services from '../services-component/Services';
import Contact from '../contact-component/Contact';
import Cart from '../cart-component/Cart';
import Footer from '../footer-component/Fooeter';

const Main = () => {

  return (
    <Routes>
      <Route path='/' element={<Navigation />} >
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cart' element={<Cart />} />
      </ Route>
      <Footer />
    </Routes>
  );
}

export default Main;
