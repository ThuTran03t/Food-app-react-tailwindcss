import Navbar from './components/Navbar';
import React from 'react';
import Hero from './components/Hero';
import HeadlineCards from './components/HeadlineCards';
import Food from './components/Food';
import Category from './components/Category';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App bg-gradient-to-r from-blue-200  to-orange-300 " >
      <Navbar/>
      
      <Hero/>
      <HeadlineCards/>
      <Food/>
      <Category/>
      <Footer/>
    </div>
  );
}

export default App;
