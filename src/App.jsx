import React from 'react';
import Header from './Pages/Header/Header';
import Banner from './Pages/Banner/Banner';
import About from './Pages/About/About';
import Experience from './Pages/Experience/Experience';
import Projects from './Pages/Projects/Projects';
import Contact from './Pages/Contact/Contact';
import Footer from './Pages/Footer/Footer';


const App = () => {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <About></About>
      <Experience></Experience>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default App;