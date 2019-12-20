import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

import Home from './home'

const { useState } = React;

const open = {
  width: '250px'
}
const close = {
  width: '0px'
}

function App() {
  const [sideBarShow, setSideBarShow] = useState(false);

  /*
  let haa = ()=> {
    if (data === 'Yoooo') {
      setData('Hello')
    } else {
      setData('Yoooo')
    }
  }
  */

  let closeNav = ()=> {
    setSideBarShow(false)
  }

  let openOrCloseNav = ()=> {
    if (sideBarShow) {
      setSideBarShow(false)
    } else {
      setSideBarShow(true)
    }
  } 
  
  let d = [];
  /*
  for (let i = 0; i < arrayData.length; i++) {
    d.push(<div>id = { arrayData[i]} </div>)
  }*/

  return (
    <Router>
      <div className="App">
        <div
          className="sidebar" 
          style={{
            width: sideBarShow && '250px'
          }}>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Clients</a>
          <a href="#">Contact</a>
        </div>
        <div className="openbtn" onClick={ ()=>{ openOrCloseNav() } }>☰</div>  
        <div 
          className="main"
          style={{
            marginLeft: sideBarShow && '250px'
          }}
        >
          <Route path="/" component={Home} />
        </div>
      </div>
     </Router>
  );
}

export default App;
