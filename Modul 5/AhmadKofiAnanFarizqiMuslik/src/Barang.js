import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch,
    Redirect,
    useHistory,
    useLocation
  } from "react-router-dom";
 
  export default function Barang() {
      return (
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/adidas">Adidas</Link>
              </li>
              <li>
                <Link to="/nike">Nike</Link>
              </li>
              <li>
                <Link to="/diadora">Diadora</Link>
              </li>
              <li>
                <Link to="/reebok">Reebok</Link>
              </li>
            </ul>
            <hr />
    
            <Switch>
              <Route path="/adidas">
                <Adidas />
              </Route>
              <Route path="/nike">
                <Nike />
              </Route>
              <Route path="/diadora">
                <Diadora />
              </Route>
              <Route path="/reebok">
                <Reebok />
              </Route>
            </Switch>
          </div>
        </Router>
      );
    }
    
    function Adidas() {
      
      let {path, url} = useRouteMatch();
      return (
        <div>
          <h2>Adidas</h2>
          <ul>
            <li>
              <Link to={`${url}/Adidas Spezial, Adidas L.A. Trainer, Adidas Topanga`}>Sneakers</Link>
            </li>
            <li>
              <Link to={`${url}/Adidas ZX150`}>Running</Link>
            </li>
          </ul>
    
          <Switch>
            <Route exact path={path}>
              <h3>Please select an item.</h3>
            </Route>
            <Route path={`${path}/:topicId`}>
              <Topic />
            </Route>
          </Switch>
        </div>
      );
    }

    function Nike() {
      
        let {path, url} = useRouteMatch();
        return (
          <div>
            <h2>Nike</h2>
            <ul>
              <li>
                <Link to={`${url}/Nike Air Force One, Nike Cortez`}>Sneakers</Link>
              </li>
              <li>
                <Link to={`${url}/Nike Airmax`}>Running</Link>
              </li>
            </ul>
      
            <Switch>
              <Route exact path={path}>
                <h3>Please select an item.</h3>
              </Route>
              <Route path={`${path}/:topicId`}>
                <Topic />
              </Route>
            </Switch>
          </div>
        );
      }

      function Diadora() {
      
        let {path, url} = useRouteMatch();
        return (
          <div>
            <h2>Diadora</h2>
            <ul>
              <li>
                <Link to={`${url}/Diadora Full Leather, Diadora Classic`}>Sneakers</Link>
              </li>
              <li>
                <Link to={`${url}/Diadora Running`}>Running</Link>
              </li>
            </ul>
      
            <Switch>
              <Route exact path={path}>
                <h3>Please select an item.</h3>
              </Route>
              <Route path={`${path}/:topicId`}>
                <Topic />
              </Route>
            </Switch>
          </div>
        );
      }

      function Reebok() {
      
        let {path, url} = useRouteMatch();
        return (
          <div>
            <h2>Reebok</h2>
            <ul>
              <li>
                <Link to={`${url}/Reebok Classic`}>Sneakers</Link>
              </li>
              <li>
                <Link to={`${url}/Reebok Running`}>Running</Link>
              </li>
            </ul>
      
            <Switch>
              <Route exact path={path}>
                <h3>Please select an item.</h3>
              </Route>
              <Route path={`${path}/:topicId`}>
                <Topic />
              </Route>
            </Switch>
          </div>
        );
      }
    
    function Topic() {
      let {topicId} = useParams();
    
      return (
        <div>
          <h3>{topicId}</h3>
        </div>
      );
    }