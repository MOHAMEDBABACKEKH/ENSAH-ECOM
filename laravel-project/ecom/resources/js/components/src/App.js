import React , { Component } from 'react';
import './App.css';
import Header from "./Header";
import Covid from "./Covid";
import Product from "./Product";
import Categorie from "./Categorie";
import Footer from "./Footer";
import Login from "./Login";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { render } from 'react-dom';


class App extends Component {
  render(){
  return (
    <div className="App__container">
      <Router>
        <Header />
        <Covid />
        <Route exact path="/home">
          <Categorie />
          <Product/>
        </Route> 
        <Route exact path="/login">
        <Login />
        </Route>
        <Footer/>
      </Router>
    </div>
  );
}
}

export default App;
if (document.getElementById('app')) {
  ReactDOM.render(<App />, document.getElementById('app'));
}