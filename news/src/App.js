import './App.css';
import Footer from './Components/Footer';
import Login from './Components/Login';
import Register from './Components/Register';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Navbar from './Components/navbar';
import Home from './Components/Home';
import Business from './Components/Business';
import About from './Components/About';
import Contact from './Components/Contact';
// import Sport from './Components/Sport';
// import Ads from './Components/UserAds';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/Register' element={<Register />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/' element={<Home />} />
          <Route path='/Business' element={<Business />} />
          {/* <Route path='/Sport' element={<Sport />} /> */}
          <Route path='/About' element={<About/>} />
          <Route path='/Contact' element={<Contact/>} />
        </Routes>
      </BrowserRouter>
      {/* <Ads/> */}
      <Footer />
    </>
  );
}
export default App;
