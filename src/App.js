import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from '../src/pages/Home/home';
import Login from '../src/pages/Login/login';

const App = () => {
  return (
    <Router>
      <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App;
