
import React from 'react';
import './App.css';

import SmurfDepot from './SmurfDepot'
import SmurfForm from './SmurfForm'
import SmurfEditor from './SmurfEditor'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Smurfs!</h1>
      </header>
      <SmurfDepot/>
      <SmurfForm/>
      <SmurfEditor/>
    </div>
  );
}

export default App;

