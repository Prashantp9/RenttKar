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

const App = () => {
  return (
    <Router>
      <Routes>
          <Route index element={<Home />} />
          <Route path='/' element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path='/otp' element={<Otp />} />
          <Route path='/registeration' element={<Registeration />} />
      </Routes>
    </Router>
  )
}

export default App;
