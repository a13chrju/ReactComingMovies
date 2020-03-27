import React from 'react';
import logo from './logo.svg';
import './App.css';
import Mainpage from './components/main-page/main-page';
import Modalpopup from './components/main-page/Modalpopup';

//07ac3ec05d3f7f7c855f9e4befb6bed6
function App() {
  return (
    <div className="App container">
      <Mainpage></Mainpage>
      <Modalpopup/>

    </div>
  );
}

export default App;
