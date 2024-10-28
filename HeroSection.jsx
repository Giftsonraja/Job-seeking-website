import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="Seconddiv">
       <section className="hero-section">
      <h1 className="hero-title">
        The <span className="highlight">Easiest Way</span><br></br> to Get Your New Job
      </h1>
      <p className="hero-description">
        Each month, more than 3 million job seekers turn to website in their search for work, making over 140,000 applications every single day.
      </p>
      {/* <div className="hero-images">
        <img src="" alt="Team Working" className="image-left" />
        <img src="" alt="Business Meeting" className="image-right" />
      </div> */}
    </section>
    </div>
   
  );
};
export default HeroSection;