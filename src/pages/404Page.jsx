
import React from 'react';

export default function Page404() {
  return (
    <>
      <div>
        <div className="page-loader" id="page-loader">
          <div className="loader"><span className="loader-item" /><span className="loader-item" /><span className="loader-item" /><span className="loader-item" /><span className="loader-item" /><span className="loader-item" /><span className="loader-item" /><span className="loader-item" /><span className="loader-item" /><span className="loader-item" /></div>
        </div>{/* page loader */}
        <div className="theme-layout">
          <div className="error-page">
            <div className="logo top-left"><img src="images/logo.png" alt /><span>Socimo</span></div>
            <div id="container-inside">
              <div id="circle-small" />
              <div id="circle-medium" />
              <div id="circle-large" />
              <div id="circle-xlarge" />
              <div id="circle-xxlarge" />
            </div>
            <div className="error-data">
              <figure><img src="https://wpkixx.com/html/socimo/images/resources/error.png" alt /></figure>
              <h1>Page Not Found</h1>
              <a className="main-btn" href="index.html" title>Go Back to Home</a>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
