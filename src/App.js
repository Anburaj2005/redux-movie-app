import React from "react";
//import './App.scss';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import Header from './components/Header/Header';
import MovieDetail from'./components/MovieDetail/MovieDetail';
import Pagenotfound from './components/Pagenotfound/Pagenotfound';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';

function App() {
  return (
  <div className="app">

    <Router>
    <Header></Header>

      <Switch>
      <Route path="/" excat component={Home}/>
      <Route path="/movie/:imdbiD" component={MovieDetail}/>

      <Route  component={Pagenotfound}/>
      </Switch>
    </Router>
    <Footer/>
  </div>
  );
}

export default App;
