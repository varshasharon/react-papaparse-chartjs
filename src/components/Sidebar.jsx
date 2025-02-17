import React from "react";
import { Home, User, Info } from "lucide-react";
import Logo from "../assets/logo.png";
import { Link, useLocation } from "react-router-dom"; 
import "./sidebar.css";

const Sidebar = () => {
  const location = useLocation(); // Get the current route path

  return (
    <div className="sidebar">
      <div className="logo">
        <img src={Logo} alt="logo" className="logo-img" />
        <h1>healthlytic</h1>
      </div>
      <nav className="nav-list">
        <Link to="/" className={location.pathname === "/" ? "nav-item active" : "nav-item"}>
          <Home size={20} />
          <span>Dashboard</span>
        </Link>
        
        <Link to="/patients" className={location.pathname === "/patients" ? "nav-item active" : "nav-item"}>
          <User size={20} />
          <span>Patient Data</span>
        </Link>
        
        <Link to="/about" className={location.pathname === "/about" ? "nav-item active" : "nav-item"}>
          <Info size={20} />
          <span>About</span>
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
