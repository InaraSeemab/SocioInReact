
import React from 'react';

export default function signupPage() {
  return (
    <>
      <div>
  <div className="page-loader" id="page-loader">
    <div className="loader"><span className="loader-item" /><span className="loader-item" /><span className="loader-item" /><span className="loader-item" /><span className="loader-item" /><span className="loader-item" /><span className="loader-item" /><span className="loader-item" /><span className="loader-item" /><span className="loader-item" /></div>
  </div>{/* page loader */}
  <div className="theme-layout">
    <div className="authtication bluesh high-opacity">
      <div className="verticle-center">
        <div className="welcome-note">
          <div className="logo"><img src="images/logo.png" alt /><span>Socimo</span></div>
          <h1>Welcome to Socimo</h1>
          <p>
            Socimo is a one and only plateform for the researcheres, students, and Acdamic people. Every one can join this plateform free and share his ideas and research with seniors and juniours comments and openions. 
          </p>
        </div>
        <div className="bg-image" style={{backgroundImage: 'url(https://wpkixx.com/html/socimo/images/resources/login-bg.png)'}} />
      </div>
    </div>
    <div className="auth-login">
      <div className="verticle-center">
        <div className="signup-form">
          <h4><i className="icofont-lock" /> Singup</h4>
          <form method="post" className="c-form">
            <div className="row merged-10">
              <div className="col-lg-12"><h4>What type of researcher are you?</h4></div>
              <div className="col-lg-6 col-sm-6 col-md-6">
                <div className="fileds">
                  <label className="input-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx={12} cy={7} r={4} /></svg></label>
                  <input type="text" placeholder="First Name" />
                </div>
              </div>
              <div className="col-lg-6 col-sm-6 col-md-6">
                <div className="fileds">
                  <label className="input-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx={12} cy={7} r={4} /></svg></label>
                  <input type="text" placeholder="Last Name" />
                </div>
              </div>
              <div className="col-lg-6 col-sm-6 col-md-6">
                <div className="fileds">
                  <label className="input-icon"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-at-sign"><circle cx={12} cy={12} r={4} /><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94" /></svg></label>
                  <input type="text" placeholder="Email @" />
                </div>
              </div>
              <div className="col-lg-6 col-sm-6 col-md-6">
                <div className="fileds">
                  <label className="input-icon"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-lock"><rect x={3} y={11} width={18} height={11} rx={2} ry={2} /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg></label>
                  <input type="text" placeholder="Password" />
                </div>
              </div>
              <div className="col-lg-6 col-sm-6 col-md-6">
                <input type="radio" id="student" name="acdamic" defaultValue="student" />
                <label htmlFor="student">Academic Or Student</label>
              </div>
              <div className="col-lg-6 col-sm-6 col-md-6">
                <input type="radio" id="ngo" name="acdamic" defaultValue="ngo" />
                <label htmlFor="ngo">Corporate, Govt, Or NGO Person</label>
              </div>
              <div className="col-lg-6 col-sm-6 col-md-6">
                <input type="radio" id="medical" name="acdamic" defaultValue="medical" />
                <label htmlFor="medical">Medical</label>
              </div>
              <div className="col-lg-6 col-sm-6 col-md-6">
                <input type="radio" id="other" name="acdamic" defaultValue="other" />
                <label htmlFor="other">Not a Rsearcher</label>
              </div>
              <div className="col-lg-6 col-sm-6 col-md-6">
                <div className="fileds">
                  <label className="input-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-server"><rect x={2} y={2} width={20} height={8} rx={2} ry={2} /><rect x={2} y={14} width={20} height={8} rx={2} ry={2} /><line x1={6} y1={6} x2="6.01" y2={6} /><line x1={6} y1={18} x2="6.01" y2={18} /></svg></label>
                  <input type="text" placeholder="Institute, Company" />
                </div>
              </div>
              <div className="col-lg-6 col-sm-6 col-md-6">
                <div className="fileds">
                  <label className="input-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-layers"><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></svg></label>
                  <input type="text" placeholder="Department" />
                </div>
              </div>
              <div className="col-lg-12 col-sm-6 col-md-6">
                <div className="fileds">
                  <label className="input-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-user-check"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy={7} r={4} /><polyline points="17 11 19 13 23 9" /></svg></label>
                  <input type="text" placeholder="Your Position" />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="gender">
                  <input type="radio" id="male" name="gender" defaultValue="male" />
                  <label htmlFor="male">Male</label>
                  <input type="radio" id="female" name="gender" defaultValue="female" />
                  <label htmlFor="female">Female</label>
                </div>	
              </div>
              <div className="col-lg-12">
                <div className="checkbox">
                  <input type="checkbox" id="checkbox" defaultChecked />
                  <label htmlFor="checkbox"><span>I agree the terms of Services and acknowledge the privacy policy</span></label>
                </div>
                <button className="main-btn" type="submit"><i className="icofont-key" /> Signup</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
 
    </>
  );
}
