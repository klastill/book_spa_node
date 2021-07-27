import React from 'react';
import {HashRouter, Route} from "react-router-dom";
import Navigation from './Navigation';
import Home from "./routes/Home";
import Bestseller from './routes/Bestseller';
import BrandNew from './routes/BrandNew';
import Wise from './routes/Wise';
import './App.css';

function App() {
  return <HashRouter>
      <div className="nav_box">
      <Navigation />
      </div>
      <Route path="/" exact={true} component={Home}/>
      <Route path="/Bestseller" component={Bestseller}/>
      <Route path="/BrandNew" component={BrandNew}/>
      <Route path="/Wise" component={Wise}/>
    </HashRouter>
}

export default App;
