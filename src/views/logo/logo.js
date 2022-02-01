import React from 'react';
import './logo.css';
import Logocat from './assets/catlogo.png';

function logo() {
  return <div className="logobox"><img className="logo" alt="logo" src={Logocat}/></div>
}

export default logo;
