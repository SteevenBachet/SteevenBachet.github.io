import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home';
import Nav from './components/nav';
import './styles/index/index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Nav/>
    <div className="container">
      <Home/>
    </div>
  </React.StrictMode>
);