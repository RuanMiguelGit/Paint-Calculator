import React from 'react'
import Footer from '../components/Footer';
import Header from '../components/Header';
import MainCard from '../components/MainCard';
import '../Styles/Main.css'

function Main() {
  return (
    <div className='overlay'>
      <Header Style='header' />
      <MainCard Style='main-card'/>
      <Footer Style='footer'/>
    </div>
  );
}

export default Main;
