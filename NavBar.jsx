import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './NavBar.css'; 
import logo from '../images/logo.png'; 
import MenuIcon from '../images/menu.png'; 
import Arrow from '../images/arrow.png'

const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="navbar navbar-expand-xl navbar-light ">
        <div className="container-fluid">
          {/* Logo */}
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img className="logoImg" src={logo} alt="Job logo" width="50" />
            <span className="ms-2 logoName">JobBox</span>
          </a>

          {/* Menu toggle button for mobile view */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleMenu}
          >
            <img src={MenuIcon} alt="Menu" width="30px" />
          </button>

          {/* Navbar links for larger screens */}
          <div className="collapse navbar-collapse d-xl-flex justify-content-between">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <select className="form-select">
                  <option value="Home">Home <img src={Arrow} alt="Arrow" height="10px" width="20px"/></option>
                  <option value="Home 1">Home 1 </option>
                  <option value="Home 2">Home 2</option>
                  <option value="Home 3">Home 3</option>
                </select>
              </li>
              <li className="nav-item dropdown">
                <select className="form-select">
                  <option value="Find a Job">Find a Job</option>
                  <option value="All Jobs">All Jobs</option>
                  <option value="Job Details">Job Details</option>
                </select>
              </li>
              <li className="nav-item dropdown">
                <select className="form-select">
                  <option value="Recruiters">Recruiters</option>
                  <option value="Recruiter Details">Recruiter Details</option>
                </select>
              </li>
              <li className="nav-item dropdown">
                <select className="form-select">
                  <option value="Candidates">Candidates</option>
                  <option value="Candidate Details">Candidate Details</option>
                </select>
              </li>
              <li className="nav-item dropdown">
                <select className="form-select">
                  <option value="Blog">Blog</option>
                  <option value="Blog Grid">Blog Grid</option>
                  <option value="Blog Single">Blog Single</option>
                </select>
              </li>
              <li className="nav-item dropdown">
                <select className="form-select">
                  <option value="Pages">Pages</option>
                  <option value="About">About</option>
                  <option value="Contact">Contact</option>
                  <option value="Pricing Plan">Pricing Plan</option>
                </select>
              </li>
            </ul>

            {/* Right-side buttons */}
            <div className="navbar-actions d-flex">
              <a href="#" className="btn btn-link">Register</a>
              <a href="#" className="btn signinbtn">Sign In</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar for mobile view */}
      <div className={`sidebar ${isMenuOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={toggleMenu}>X</button>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
        </div>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Find A Job</a>
          </li>
          <li>
            <a href="#">Recruiters</a>
          </li>
          <li>
            <a href="#">Candidates</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Pages</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
