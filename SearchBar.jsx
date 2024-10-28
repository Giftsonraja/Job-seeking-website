import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <section className="search-bar">
      <div className="search-fields">
        <select>
          <option value="Industry">Industry</option>
          <option value="A">Finance</option>
          <option value="B">Human Resource</option>
          <option value="C">Management</option>
          <option value="D">Market Research</option>
          <option value="E">Marketing & Sale</option>
          <option value="F">Retail & Products</option>
          <option value="G">Software</option>
        </select>
        <select>
          <option value="Location">Location</option>
          <option value="New York">New York, America</option>
          <option value="France">Paris, France</option>
          <option value="USA">USA</option>
          <option value="Australia">Australia</option>
          <option value="London">London</option>
          <option value="Holland">Holland</option>
          <option value="Chicago">Chicago</option>
          <option value="Germany">Germany</option>
        </select>
        <input type="text" placeholder="Keyword" />
        <button className="search-btn">Search</button>
      </div>
      <div className="popular-searches">
        <span>Popular Searches: </span>
        <a href="#">Content Writer</a>, <a href="#">Finance</a>, <a href="#">Human Resource</a>, <a href="#">Management</a>
      </div>
    </section>
  );
};

export default SearchBar;