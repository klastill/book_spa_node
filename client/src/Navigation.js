import React from 'react';
import {Link} from "react-router-dom"
import "./Navigation.css";

function Navigation() {
  return <div className="nav">
    <div>
      <Link to="/">Home</Link>
      <Link to="/Bestseller?max=20&page=1">Bestseller</Link>
      <Link to="/BrandNew?max=20&page=1">BrandNew</Link>
      <Link to="/Wise">Wise</Link>
    </div>
  </div>
}

export default Navigation;