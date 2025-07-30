import React from 'react';
import Loader from './components/Loader';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Work from './components/Work';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Loader />
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Work />
      </main>
      <Footer />
    </div>
  );
}

export default App;