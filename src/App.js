import React from 'react';
import logo from './logo.svg';
import './App.css';
import Mainpage from './components/main-page/main-page';
import Modaafisk from './components/main-page/Modaafisk';

//07ac3ec05d3f7f7c855f9e4befb6bed6
function App() {
  return (
    <div className="App container">
      <Mainpage></Mainpage>
      <Modaafisk/>

    </div>
  );
}

export default App;
