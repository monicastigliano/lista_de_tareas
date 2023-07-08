import React from 'react';
import logo from './img/logo.png';

function Cabecera() {
  return (
    <header className='App-header'>
        <img src={logo} alt="logo"  className='App-logo'/>
        <h1>Lista de tareas</h1>
      </header>
  )
}

export default Cabecera