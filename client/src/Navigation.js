import React from 'react';
import {Link} from "react-router-dom"
import "./Navigation.css";

function Navigation() {
  return <div className="nav">
    <div>
      <Link to="/">Home</Link>
      <Link to="/Bestseller">Bestseller</Link>
      <Link to="/BrandNew">BrandNew</Link>
      <Link to="/Wise">Wise</Link>
    </div>
  </div>
}

export default Navigation;