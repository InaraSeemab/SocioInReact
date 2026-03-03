
import React from 'react';
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import CarouselMenu from '../components/carouselmenu';
import { Link } from 'react-router-dom';
import topSection from '../components/developmentComponentpage/topSection';
import sideNavbar from '../components/developmentComponentpage/sideNavbar';
import askQuestions from '../components/developmentComponentpage/askQuestions';
import sendMsgPopup from '../components/developmentComponentpage/sendMsgPopup';
import Accordion from '../components/developmentComponentpage/Accordion';
import Alert from '../components/developmentComponentpage/Alert';
import Dropdown from '../components/developmentComponentpage/Dropdown';
import Filter from '../components/developmentComponentpage/Filter';
import Lightbox from '../components/developmentComponentpage/Lightbox';
import Modal from '../components/developmentComponentpage/Modal';
import Notification from '../components/developmentComponentpage/Notifications';
import Offcanvas from '../components/developmentComponentpage/Offcanvas';
import SideSlideMsgPopup from '../components/developmentComponentpage/sideSlideMsgPopup';
import InviteColleaguePopup from '../components/developmentComponentpage/inviteColleaguePopup';
import Scrollspy from '../components/developmentComponentpage/Scrollspy';
import Tooltip from '../components/developmentComponentpage/Tooltip';
import Slide from '../components/developmentComponentpage/Slide';
import Slideshow from '../components/developmentComponentpage/Slideshow';
import Progress from '../components/developmentComponentpage/Progress';

// import CarouselMenu from "../components/carouselmenu";
export default function developmentcomponentPage() {
  return (
    <>
      <Header />
      <Sidebar />
      <CarouselMenu />
      <div>
        <div className="theme-layout">
          <div className="responsive-header">
            <div className="logo res"><img src="images/logo.png" alt /><span>Socimo</span></div>
            <div className="user-avatar mobile">
              <Link to="/profile" title="View Profile"><img alt src="images/resources/user.jpg" /></Link>
              <div className="name">
                <h4>Danial Cardos</h4>
                <span>Ontario, Canada</span>
              </div>
            </div>
            <div className="right-compact">
              <div className="sidemenu">
                <i>
                  <svg id="side-menu2" xmlns="http://www.w3.org/2000/svg" width={26} height={26} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu"><line x1={3} y1={12} x2={21} y2={12} /><line x1={3} y1={6} x2={21} y2={6} /><line x1={3} y1={18} x2={21} y2={18} /></svg></i>
              </div>
              <div className="res-search">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-search"><circle cx={11} cy={11} r={8} /><line x1={21} y1={21} x2="16.65" y2="16.65" /></svg></span>
              </div>
            </div>
            <div className="restop-search">
              <span className="hide-search"><i className="icofont-close-circled" /></span>
              <form method="post">
                <input type="text" placeholder="Search..." />
              </form>
            </div>
          </div>{/* responsive header */}

          <topSection />
          <section>
            <div className="gap">
              <div className="container">
                <div className="row">
                  {<sideNavbar />}
                  <div className="col-lg-9 col-md-9">
                    <div className="main-wraper">
                      <ul className="uk-switcher pl-lg-3" id="components-nav">
                        {/* Accordion */}
                        <Accordion />
                        {/* Alert */}
                        <Alert />
                        {/* Dropdown */}
                        <Dropdown />
                        {/* Filter  */}
                        <Filter />
                        {/* Lightbox  */}
                        <Lightbox />
                        {/* Modal  */}
                        <Modal />
                        {/* Notification */}
                        <Notification />
                        {/* Off canvas */}
                        < Offcanvas />
                        {/* Scrollspy  */}
                        <Scrollspy />
                        {/*  Tooltip */}
                        < Tooltip />
                        {/*  slider */}
                        <Slide />
                        {/* Slideshow */}
                        <Slideshow />
                        {/* Progress */}
                        <Progress />
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <figure className="bottom-mockup"><img src="https://wpkixx.com/html/socimo/images/footer.png" alt /></figure>
          <div className="bottombar">
            <div className="container">
              <div className="row">
                <div className="col-lg-12"> <span className>© copyright All rights reserved by Socimo 2020</span> </div>
              </div>
            </div>
          </div>
          {/* bottombar */}
          <InviteColleaguePopup />
          {/* invite colleague popup */}
          <sendMsgPopup />


          {/* send message popup */}
          <SideSlideMsgPopup />
          {/* side slide message & popup */}
          <div className="post-new-popup">
            <div className="popup"> <span className="popup-closed"><i className="icofont-close" /></span>
              <div className="popup-meta">
                <div className="popup-head">
                  <h5><i className="icofont-envelope" /> Post New</h5>
                </div>
                <div className="post-new">
                  <form method="post" className="c-form">
                    <input type="text" placeholder="Title" />
                    <textarea placeholder="Post Something" defaultValue={""} />
                    <select>
                      <option>Select Your Publication Type</option>
                      <option>Article</option>
                      <option>Book</option>
                      <option>Chapter</option>
                      <option>Code</option>
                      <option>conference Paper</option>
                      <option>Cover Page</option>
                      <option>Data</option>
                      <option>Exprement Finding</option>
                      <option>Method</option>
                      <option>Poster</option>
                      <option>Preprint</option>
                      <option>Technicial Report</option>
                      <option>Thesis</option>
                      <option>Research</option>
                    </select>
                    <div className="uploadimage"> <i className="icofont-eye-alt" />
                      <label className="fileContainer">
                        <input type="file" />
                        Upload File </label>
                    </div>
                    <button type="submit" className="main-btn">Post</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* send message popup */}
          <askQuestions />
          {/* ask question */}
        </div>
      </div>


    </>
  );
}
