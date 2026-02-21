
import React from 'react';

export default function comingsoonPage() {
  return (
    <>
      <div>
  <div className="page-loader" id="page-loader">
    <div className="loader"><span className="loader-item" /><span className="loader-item" /><span className="loader-item" /><span className="loader-item" /><span className="loader-item" /><span className="loader-item" /><span className="loader-item" /><span className="loader-item" /><span className="loader-item" /><span className="loader-item" /></div>
  </div>{/* page loader */}
  <div className="theme-layout">
    <div className="coming-page">
      <div id="container-inside">
        <div id="circle-small" />
        <div id="circle-medium" />
        <div id="circle-large" />
        <div id="circle-xlarge" />
        <div id="circle-xxlarge" />
      </div>
      <div className="comesoon-wraper">
        <div className="logo top-left"><img src="images/logo.png" alt /><span>Socimo</span></div>
        <div className="top-right">
          <a href="#" title>Get In Touch</a>
        </div>
        <div className="come-soon">
          <h1>Coming Soon</h1>
          <span>WE ARE CURRENTLY UNDER CONSTRUCTION!</span>
          <p>
            Our website is currently undergoing scheduled maintenance. We Should be back shortly. Thank you for your patience. Sign up now to get early notification of our lauch date!
          </p>
        </div>
        <div className="left-bottom">
          <span>launching in</span>
          <ul className="countdown">
            <li><span className="days">00</span><p className="days_ref">days</p></li>
            <li> <span className="hours">00</span><p className="hours_ref">hrs</p></li>
            <li> <span className="minutes">00</span><p className="minutes_ref">min</p></li>
            <li> <span className="seconds">00</span><p className="seconds_ref">sec</p></li>
          </ul>
        </div>
        <div className="right-bottom">
          <span>Follow Us</span>
          <ul>
            <li><a href="#" title><i className="icofont-facebook" /></a></li>
            <li><a href="#" title><i className="icofont-twitter" /></a></li>
            <li><a href="#" title><i className="icofont-instagram" /></a></li>
            <li><a href="#" title><i className="icofont-whatsapp" /></a></li>
          </ul>
        </div>
      </div>
    </div>	
  </div>
</div>
 
    </>
  );
}
