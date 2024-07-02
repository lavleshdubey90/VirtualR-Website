import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Workflow from './components/Workflow';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const App = () => {
  return (
    <React.Fragment>
      <Navbar />

      <section className='max-w-7xl mx-auto pt-20 px-6'>
        <Hero />
        <Features />
        <Workflow />
        <Pricing />
        <Testimonials />
      </section>
      
      <Footer />
    </React.Fragment>
  )
}

export default App;
