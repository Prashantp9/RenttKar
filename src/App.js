import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from '../src/pages/Home/home';
import Login from '../src/pages/Login/login';
import Otp from './pages/Otp/otp';
import Registeration from './pages/Registeration/registeration';
import Catogery from './pages/Catogery/catogery';
import Searchfound from './pages/Searchfound/searchfound';
import Searchnotfound from './pages/Searchnotfound/searchnotfound';
import Productdetails from './pages/Productdetails/productdetails';
import Mobileaddons from './pages/Mobileaddons/mobileaddons';
import Mobilepaidaddons from './pages/Mobilepaidaddons/mobilepaidaddons';

const App = () => {
  return (
    <Router>
      <Routes>
          <Route index element={<Home />} />
          <Route path='/' element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path='/otp' element={<Otp />} />
          <Route path='/registeration' element={<Registeration />} />
          <Route path='/catogeries' element={<Catogery />} />
          <Route path='/searchresultfound' element={<Searchfound />} />
          <Route path='/searchresultnotfound' element={<Searchnotfound />} />
          <Route path='/productdetails' element={<Productdetails />} />
          <Route path='/freeaddons' element={<Mobileaddons />} />
          <Route path='/paidaddons' element={<Mobilepaidaddons />} />
      </Routes>
    </Router>
  )
}

export default App;
