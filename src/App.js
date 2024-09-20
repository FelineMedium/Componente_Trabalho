import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <div className='container'>
        <Nav />
        <Main />
      </div>
      <Footer />
    </div>
  );
};

export default App;