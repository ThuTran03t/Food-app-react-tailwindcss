import Navbar from './components/Navbar';
import React from 'react';
import Hero from './components/Hero';
import HeadlineCards from './components/HeadlineCards';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <HeadlineCards/>
    </div>
  );
}

export default App;
