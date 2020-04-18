import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutComponent from './component/AboutComponent';
import ProductComponent from './component/ProductComponent';
import KeranjangComponent from './component/KeranjangComponent';

export default function Tugas() {
  return (
    <Router>
        <div>
          <h1 className="title">Nisa Electronic</h1>

          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/product">Product</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/keranjang">Keranjang</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route exact path="/product" component={ProductComponent}/>
            <Route path="/about" component={AboutComponent}/>
            <Route path="/keranjang" component={KeranjangComponent}/>
          </div>
        </div>
      </Router>
  );
}

function Home() {
  return (
    <div>
      <center>
      <h2>Selamat Datang di Nisa Eletronic!</h2>
      <h2>Silahkan dipilih Kulkasnya!</h2>
      <br></br>
      <button><NavLink to="/product">Click to Product</NavLink></button>
      </center>
    </div>
  );
}