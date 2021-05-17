import React from 'react'
import './App.css';
import Cards from './components/Cards';


function App() {
  return (
    <>
    <div className="app">
      <h1 className="title" >Tarjetas Tiendeo</h1>
    </div>
    
    <div className="modal-background">
      
    
    <Cards/>
    </div>
    
    </>
  );
}

export default App;
