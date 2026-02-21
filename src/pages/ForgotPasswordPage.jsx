
import React from 'react';

export default function forgotpasswordPage() {
  return (
    <>
      <div>
  <div className="theme-layout gray-bg">
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col-lg-8">
          <div className="forget-password">
            <figure className="logo"><img src="images/logo.png" alt /><span>Socimo</span></figure>
            <div className="pass-form">
              <h4>Request a Password Reset</h4>
              <form method="post">
                <label><i className="icofont-envelope" /></label>
                <input type="text" placeholder="Email Address" />
                <button className="main-btn" type="submit">Reset Password</button>
              </form>
              <span>Go Back To <a href="sign-in.html" title>Sign In</a></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <figure className="bottom-mockup"><img alt src="https://wpkixx.com/html/socimo/images/footer.png" /></figure>
    <div className="bottombar">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <span className>© Copyright All rights reserved by Socimo 2020</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
 
    </>
  );
}
