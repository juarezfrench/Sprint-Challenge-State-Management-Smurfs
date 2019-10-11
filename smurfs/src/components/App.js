
import React from 'react';
import './App.css';
import Smurf from './Smurf';
import SmurfDepot from './SmurfDepot'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Smurfs!</h1>
      </header>
      <SmurfDepot/>
      <Smurf/>
    </div>
  );
}

export default App;

