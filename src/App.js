import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import Content from './components/Content/Content';
import Navigation from './components/Navigation/Navigation';


function App() {
  return (
    <BrowserRouter>
    <div className="app">
      <div className="container">
        <Navigation/>
        <Content/>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
