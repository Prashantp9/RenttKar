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
import Mobileredeemcoupon from './pages/Mobileredeemcoupon/mobileredeemcoupon';
import Mycart from './pages/Mycart/mycart';
import Deliveryaddress from './pages/Deliveryaddress/deliveryaddress';
import Payment from './pages/Payment/payment';
import Agreement from './pages/Agreement/agreement';
import Individualpurchase from './pages/Individualpurchase/individualpurchase';
import Companypurchase from './pages/Companypurchase/companypurchase';
import Mobileordersummary from './pages/Mobileordersummary/mobileordersummary';
import Myorder from './pages/Myorder/myorder';
import Mobilemyorderextend from './pages/Mobilemyorderextend/mobilemyorderextend';
import Mobilemyorderproductsupp from './pages/Mobilemyorderproductsupp/mobilemyorderproductsupp';
import Mobilemyorderproductcancel from './pages/Mobilemyorderproductcancel/mobilemyorderproductcancel';
import Listinghome from './pages/Listinghome/listinghome';
import Mylisting from './pages/Mylisting/mylisting';
import Mobilemynewlisting from './pages/Mobilemynewlisting/mobilemynewlisting';
import Mobilemynewlistingagreement from './pages/Mobilemynewlistingagreement/mobilemynewlistingagreement';
import Mobilemynewlistingpayment from './pages/Mobilemynewlistingpayment/mobilemynewlistingpayment';
import Mobilemylistingcancellation from './pages/Mobilemylistingcancellation/mobilemylistingcancellation';
import Faqs from './pages/FAQs/faqs';
import Contactus from './pages/Contactus/contactus';
import Myprofile from './pages/Myprofile/myprofile';



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
          <Route path='/redeemcoupon' element={<Mobileredeemcoupon />} />
          <Route path='/mycart' element={<Mycart />} />
          <Route path='/deliveryaddress' element={<Deliveryaddress />} />
          <Route path='/payment' element={<Payment />} />
          <Route path='/agreement' element={<Agreement />} />
          <Route path='/individualpurchase' element={<Individualpurchase />} />
          <Route path='/companypurchase' element={<Companypurchase />} />
          <Route path='/ordersummary' element={<Mobileordersummary/>} />
          <Route path='/ordersummary' element={<Mobileordersummary/>} />
          <Route path='/myorder' element={<Myorder />} />
          <Route path='/mobilemyorderextend' element={<Mobilemyorderextend />} />
          <Route path='/mobilemyorderproductsupp' element={<Mobilemyorderproductsupp />} />
          <Route path='/mobilemyorderproductcancel' element={<Mobilemyorderproductcancel />} />
          <Route path='/listinghome' element={<Listinghome />} />
          <Route path='/mylisting' element={<Mylisting />} />
          <Route path='/mobilemynewlisting' element={<Mobilemynewlisting />} />
          <Route path='/mobilemynewlistingagreement' element={<Mobilemynewlistingagreement />} />
          <Route path='/mobilemynewlistingpayment' element={<Mobilemynewlistingpayment />} />
          <Route path='/mobilemynewlistingcancellation' element={<Mobilemylistingcancellation />} />
          <Route path='/Faqs' element={<Faqs />} />
          <Route path='/contactus' element={<Contactus/>} />
          <Route path='/myprofile' element={<Myprofile/>} />
      </Routes>
    </Router>
  )
}

export default App;
