import './App.css';
import { ContactComponent } from './contact-component/ContactComponent';
import { HomeComponent } from './Home-Component/HomeComponent';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import React from 'react';
// import { Navbar, Container, nav } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact-us">About</Link>
            </li>
          </ul>



       <Route exact path="/" component= {HomeComponent}></Route>
       <Route path="/contact-us" component= {ContactComponent}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
