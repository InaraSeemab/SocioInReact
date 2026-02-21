
import React from 'react';

export default function thankyouPage() {
  return (
    <>
      <div>
  <div className="page-loader" id="page-loader">
    <div className="loader"><span className="loader-item" /><span className="loader-item" /><span className="loader-item" /><span className="loader-item" /><span className="loader-item" /><span className="loader-item" /><span className="loader-item" /><span className="loader-item" /><span className="loader-item" /><span className="loader-item" /></div>
  </div>{/* page loader */}
  <div className="theme-layout">
    <div className="error-page">
      <div id="container-inside">
        <div id="circle-small" />
        <div id="circle-medium" />
        <div id="circle-large" />
        <div id="circle-xlarge" />
        <div id="circle-xxlarge" />
      </div>
      <div className="thanks-purchase">
        <div className="logo"><img src="images/logo.png" alt /><span>Socimo</span></div>
        <h1>Thank You</h1>
        <span>Your Order is Confirmed!</span>
        <p>Top Print Your Booking Order No. <span>BC-AME-004564530</span> <a className="button dark circle" href="#" title>See Your Invoice</a></p>
      </div>
    </div>	
  </div>
</div>
 
    </>
  );
}
