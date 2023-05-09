import './App.css';
import React from 'react'

import SlotMachine from './SlotMachine';

const App = () => {
  return (
    <>
      <h1 className='heading_style'> 🎰 Welcome to <span style={{ fontWeight: 'bold' }}> Slot Machine Game </span> 🎰 </h1>

      <div className="slotmachine">
        <SlotMachine x='😁 ' y='😁' z='😁' />
        <hr />
        <SlotMachine x='😁' y='😒' z='😁' />
        <hr />
        <SlotMachine x='🍎' y='🍌' z='🍎' />
        <hr />
        <SlotMachine x='💏' y='💏' z='💏' />
        <hr /> 

      </div>
    </>
  )
}

export default App;
