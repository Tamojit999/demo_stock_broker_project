import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home_page from './landing_page/home/Home_page';
import SignUp from './landing_page/signup/SignUp';
import About_page from './landing_page/about/About_page';
import Product_page from './landing_page/products/Product_page';
import Pricing_page from './landing_page/pricing/Pricing_page';
import Support_page from './landing_page/support/Support_page';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import NoPageFound from './landing_page/NoPageFound';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
   <Navbar />
    <Routes>
      
      <Route path='/' element={<Home_page />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/about' element={<About_page />} />
      <Route path='/products' element={<Product_page />} />
      <Route path='/pricing' element={<Pricing_page />} />
      <Route path='/support' element={<Support_page />} />
      <Route path='*' element={<NoPageFound />} />

    </Routes>
       <Footer />
  </BrowserRouter>
);
