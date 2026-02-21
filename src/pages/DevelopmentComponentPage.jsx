
import React from 'react';

export default function developmentcomponentPage() {
  return (
    <>
      <div>
  <div className="page-loader" id="page-loader">
    <div className="loader"><span className="loader-item" /><span className="loader-item" /><span className="loader-item" /><span className="loader-item" /><span className="loader-item" /><span className="loader-item" /><span className="loader-item" /><span className="loader-item" /><span className="loader-item" /><span className="loader-item" /></div>
  </div>{/* page loader */}
  <div className="theme-layout">
    <div className="responsive-header">
      <div className="logo res"><img src="images/logo.png" alt /><span>Socimo</span></div>
      <div className="user-avatar mobile">
        <a href="profile.html" title="View Profile"><img alt src="images/resources/user.jpg" /></a>
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
    <header className>
      <div className="topbar stick">
        <div className="logo"><img src="images/logo.png" alt /><span>Socimo</span></div>
        <div className="searches">
          <form method="post">
            <input type="text" placeholder="Search..." />
            <button type="submit"><i className="icofont-search" /></button>
            <span className="cancel-search"><i className="icofont-close" /></span>
            <div className="recent-search">
              <h4 className="recent-searches">Your's Recent Search</h4>
              <ul className="so-history">
                <li>
                  <div className="searched-user">
                    <figure><img src="images/resources/user1.jpg" alt /></figure>
                    <span>Danial Carabal</span>
                  </div>
                  <span className="trash"><i className="icofont-close-circled" /></span>
                </li>
                <li>
                  <div className="searched-user">
                    <figure><img src="images/resources/user2.jpg" alt /></figure>
                    <span>Maria K</span>
                  </div>
                  <span className="trash"><i className="icofont-close-circled" /></span>
                </li>
                <li>
                  <div className="searched-user">
                    <figure><img src="images/resources/user3.jpg" alt /></figure>
                    <span>Fawad Khan</span>
                  </div>
                  <span className="trash"><i className="icofont-close-circled" /></span>
                </li>
                <li>
                  <div className="searched-user">
                    <figure><img src="images/resources/user4.jpg" alt /></figure>
                    <span>Danial Sandos</span>
                  </div>
                  <span className="trash"><i className="icofont-close-circled" /></span>
                </li>
                <li>
                  <div className="searched-user">
                    <figure><img src="images/resources/user5.jpg" alt /></figure>
                    <span>Jack Carter</span>
                  </div>
                  <span className="trash"><i className="icofont-close-circled" /></span>
                </li>
              </ul>
            </div>
          </form>
        </div>
        <ul className="web-elements">
          <li>
            <div className="user-dp">
              <a href="profile-page2.html" title>
                <img alt src="images/resources/user.jpg" />
                <div className="name">
                  <h4>Danial Cardos</h4>
                </div>
              </a>	
            </div>
          </li>
          <li className="go-live">
            <a href="live-stream.html" title="Go Live" data-toggle="tooltip">
              <i>
                <svg fill="#f00" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="18px" height="18px"><path d="M 6.1015625 6.1015625 C 3.5675625 8.6345625 2 12.134 2 16 C 2 19.866 3.5675625 23.365437 6.1015625 25.898438 L 7.5195312 24.480469 C 5.3465312 22.307469 4 19.308 4 16 C 4 12.692 5.3465312 9.6925313 7.5195312 7.5195312 L 6.1015625 6.1015625 z M 25.898438 6.1015625 L 24.480469 7.5195312 C 26.653469 9.6925312 28 12.692 28 16 C 28 19.308 26.653469 22.307469 24.480469 24.480469 L 25.898438 25.898438 C 28.432437 23.365437 30 19.866 30 16 C 30 12.134 28.432437 8.6345625 25.898438 6.1015625 z M 9.6367188 9.6367188 C 8.0077188 11.265719 7 13.515 7 16 C 7 18.485 8.0077187 20.734281 9.6367188 22.363281 L 11.052734 20.947266 C 9.7847344 19.680266 9 17.93 9 16 C 9 14.07 9.7847344 12.319734 11.052734 11.052734 L 9.6367188 9.6367188 z M 22.363281 9.6367188 L 20.947266 11.052734 C 22.215266 12.319734 23 14.07 23 16 C 23 17.93 22.215266 19.680266 20.947266 20.947266 L 22.363281 22.363281 C 23.992281 20.734281 25 18.485 25 16 C 25 13.515 23.992281 11.265719 22.363281 9.6367188 z M 16 12 A 4 4 0 0 0 16 20 A 4 4 0 0 0 16 12 z" /></svg></i>
            </a>
          </li>
          <li>
            <a href="index.html" title="Home" data-toggle="tooltip">
              <i>
                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg></i>
            </a>
          </li>
          <li>
            <a className="mesg-notif" href="#" title="Messages" data-toggle="tooltip">
              <i>
                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-square"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg></i>
            </a>
            <span />
          </li>
          <li>
            <a className="mesg-notif" href="#" title="Notifications" data-toggle="tooltip">
              <i>
                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-bell"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg></i>
            </a>
            <span />
          </li>
          <li>
            <a className="create" href="#" title="Add New" data-toggle="tooltip">
              <i>
                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus"><line x1={12} y1={5} x2={12} y2={19} /><line x1={5} y1={12} x2={19} y2={12} /></svg></i>
            </a>
          </li>
          <li>
            <a href="#" title>
              <i>
                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-grid"><rect x={3} y={3} width={7} height={7} /><rect x={14} y={3} width={7} height={7} /><rect x={14} y={14} width={7} height={7} /><rect x={3} y={14} width={7} height={7} /></svg>
              </i>
            </a>
            <ul className="dropdown">
              <li><a href="profile.html" title><i className="icofont-user-alt-3" /> Your Profile</a></li>
              <li><a href="add-new-course.html" title><i className="icofont-plus" /> New Course</a></li>
              <li><a className="invite-new" href="#" title><i className="icofont-brand-slideshare" /> Invite Collegue</a></li>
              <li><a href="pay-out.html" title><i className="icofont-price" /> Payout</a></li>
              <li><a href="price-plan.html" title><i className="icofont-flash" /> Upgrade</a></li>
              <li><a href="help-faq.html" title><i className="icofont-question-circle" /> Help</a></li>
              <li><a href="settings.html" title><i className="icofont-gear" /> Setting</a></li>
              <li><a href="privacy-n-policy.html" title><i className="icofont-notepad" /> Privacy</a></li>
              <li><a className="dark-mod" href="#" title><i className="icofont-moon" /> Dark Mode</a></li>
              <li className="logout"><a href="sign-in.html" title><i className="icofont-power" /> Logout</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </header>{/* header */}
    <nav className="sidebar">
      <ul className="menu-slide">
        <li className="active">
          <a href="index.html" title>
            <i><svg id="icon-home" className="feather feather-home" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="currentColor" fill="none" viewBox="0 0 24 24" height={14} width={14} xmlns="http://www.w3.org/2000/svg"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg></i> Home
          </a>
        </li>
        <li className>
          <a className href="https://wpkixx.com/html/socimo/analytics.html" title>
            <i className><svg id="ab7" className="feather feather-zap" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="currentColor" fill="none" viewBox="0 0 24 24" height={14} width={14} xmlns="http://www.w3.org/2000/svg"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg></i>Analytics
          </a>
        </li>
        <li className>
          <a className href="profile.html" title>
            <i><svg id="ab1" className="feather feather-users" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="currentColor" fill="none" viewBox="0 0 24 24" height={14} width={14} xmlns="http://www.w3.org/2000/svg"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle r={4} cy={7} cx={9} /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg></i>
            Profile
          </a>
        </li>
        <li className>
          <a className href="https://wpkixx.com/html/socimo/reviews.html" title>
            <i className>
              <svg id="ab3" xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg></i>Reviews
          </a>
        </li>
        <li className>
          <a className href="https://wpkixx.com/html/socimo/events.html" title><i className>
              <svg id="ab4" xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-airplay"><path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1" /><polygon points="12 15 17 21 7 21 12 15" /></svg></i>Events
          </a>
        </li>
        <li className>
          <a className href="https://wpkixx.com/html/socimo/products.html" title>
            <i className>
              <svg id="ab5" xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-shopping-bag"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1={3} y1={6} x2={21} y2={6} /><path d="M16 10a4 4 0 0 1-8 0" /></svg></i>Products
          </a>
        </li>
        <li className>
          <a className href="blog.html" title>
            <i className>						
              <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-coffee"><path d="M18 8h1a4 4 0 0 1 0 8h-1" /><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" /><line x1={6} y1={1} x2={6} y2={4} /><line x1={10} y1={1} x2={10} y2={4} /><line x1={14} y1={1} x2={14} y2={4} /></svg>
            </i>Blogs
          </a>
        </li>
        <li className>
          <a className href="https://wpkixx.com/html/socimo/messages-inbox.html" title>
            <i className>
              <svg id="ab2" xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-square"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg></i>Messages
          </a>
        </li>
        <li className>
          <a className href="https://wpkixx.com/html/socimo/team.html" title>
            <i className>
              <svg id="team" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-smile"><circle cx={12} cy={12} r={10} /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1={9} y1={9} x2="9.01" y2={9} /><line x1={15} y1={9} x2="15.01" y2={9} /></svg></i>Team
          </a>
        </li>
        <li className>
          <a className href="https://wpkixx.com/html/socimo/login-register.html" title>
            <i className>
              <svg id="ab9" xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-lock"><rect x={3} y={11} width={18} height={11} rx={2} ry={2} /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg></i>Login/Register
          </a>
        </li>
        <li className="menu-item-has-children">
          <a className href="#" title>
            <i><svg id="ab8" className="feather feather-file" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="currentColor" fill="none" viewBox="0 0 24 24" height={14} width={14} xmlns="http://www.w3.org/2000/svg"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" /><polyline points="13 2 13 9 20 9" /></svg></i>Pages
          </a>
          <ul className="submenu">
            <li><a href="404.html" title>Error 404</a></li>
            <li><a href="forgot-password.html" title>Forgot Password</a></li>
            <li><a href="https://wpkixx.com/html/socimo/loaders.html" title>Loaders/spiners</a></li>
            <li><a href="https://wpkixx.com/html/socimo/invoice-edit.html" title>Invoice</a></li>
            <li><a href="https://wpkixx.com/html/socimo/maps.html" title>Google Maps</a></li>
            <li><a href="development-elements.html" title>Elements</a></li>
            <li><a href="development-component.html" title>Components</a></li>
          </ul>
        </li>
      </ul>
    </nav>{/* nav sidebar */}
    <section>
      <div className="gap no-gap bluesh high-opacity">
        <div style={{backgroundImage: 'url(https://wpkixx.com/html/socimo/images/resources/top-bg.jpg)'}} className="bg-image" />
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="post-subject">
                <h1>Developing Components</h1>
                <p> Advanced multi-part components with lots of possibilities . </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3">
              <nav className="responsive-tab style-4">
                <ul data-submenu-title="compounents" uk-switcher="connect: #components-nav ;animation: uk-animation-slide-left-medium, uk-animation-slide-right-medium" className="uk-list docs-list" uk-sticky="offset:50;media : @m">
                  <li><a href="#">Accordion</a></li>
                  <li><a href="#">Alert</a></li>
                  <li><a href="#">Dropdown</a></li>
                  <li><a href="#">Filter</a></li>
                  <li><a href="#">Lightbox</a></li>
                  <li><a href="#">Modal</a></li>
                  <li><a href="#">Notification</a></li>
                  <li><a href="#">Off canvas</a></li>
                  <li><a href="#">Scrollspy</a></li>
                  <li><a href="#">Tooltip</a></li>
                  <li><a href="#">slider</a></li>
                  <li><a href="#">Slideshow</a></li>
                  <li><a href="#">Progress Bars</a></li>
                </ul>
              </nav>
            </div>
            <div className="col-lg-9 col-md-9">
              <div className="main-wraper">
                <ul className="uk-switcher pl-lg-3" id="components-nav">
                  {/* Accordion */}
                  <li>
                    <div className="mt-4 uk-grid-large" uk-grid>
                      <div className="uk-width-3-4@s">
                        <h2> Accordion</h2>
                        <p className="mb-4">Create a list of items that can be shown individually by clicking an
                          item's header. </p>
                        <h6 id="Introduction"> Usage</h6>
                        <p>The Accordion component consists of a parent container with the <code>uk-accordion</code> attribute, and a title and content part for each accordion item.</p>
                        <h6>PREVIEW</h6>
                        <ul uk-accordion>
                          <li className="uk-open"> <a className="uk-accordion-title" href="#">Item 1</a>
                            <div className="uk-accordion-content">
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor
                                incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                          </li>
                          <li> <a className="uk-accordion-title" href="#">Item 2</a>
                            <div className="uk-accordion-content">
                              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit. </p>
                            </div>
                          </li>
                          <li> <a className="uk-accordion-title" href="#">Item 3</a>
                            <div className="uk-accordion-content">
                              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                dolore eu
                                fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.</p>
                            </div>
                          </li>
                        </ul>
                        <div>
                          <button className="button Markup-botton" uk-toggle="target: #Accordion"> MARKUP</button>
                          <div id="Accordion" aria-hidden="true" className=" uk-margin-small-top" hidden>
                            <pre><code id="code-k0ov83w7" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">ul</span> <span className="hljs-attr">uk-accordion</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-open"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-accordion-title"</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Item 1<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-accordion-content"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-accordion-title"</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Item 2<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-accordion-content"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span>&gt;</span>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit.<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-accordion-title"</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Item 3<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-accordion-content"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span>&gt;</span>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;/<span className="hljs-name">ul</span>&gt;</span></code></pre>
                          </div>
                        </div>
                        <h3 className="uk-margin-medium-top" id="Multiple-open-items"> Multiple open items </h3>
                        <p>To display multiple content sections at the same time without one collapsing when the
                          other
                          one is opened, add the <code>multiple: true</code> option to the <code>uk-accordion</code> attribute.</p>
                        <h6> PREVIEW</h6>
                        <ul uk-accordion="multiple: true">
                          <li className="uk-open"> <a className="uk-accordion-title" href="#">Item 1</a>
                            <div className="uk-accordion-content">
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor
                                incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                          </li>
                          <li> <a className="uk-accordion-title" href="#">Item 2</a>
                            <div className="uk-accordion-content">
                              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit. </p>
                            </div>
                          </li>
                          <li> <a className="uk-accordion-title" href="#">Item 3</a>
                            <div className="uk-accordion-content">
                              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                dolore eu
                                fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.</p>
                            </div>
                          </li>
                        </ul>
                        <div>
                          <button className="button Markup-botton  uk-margin-small-top" type="button" uk-toggle="target: #Accordion-Multiple"> MARKUP</button>
                          <div id="Accordion-Multiple" aria-hidden="true" className=" uk-margin-small-top" hidden>
                            <pre><code id="code-k0ov83w8" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">ul</span> <span className="hljs-attr">uk-accordion</span>=<span className="hljs-string">"collapsible: false"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-accordion-title"</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Item 1<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-accordion-content"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-accordion-title"</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Item 2<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-accordion-content"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span>&gt;</span>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit.<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-accordion-title"</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Item 3<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-accordion-content"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span>&gt;</span>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;/<span className="hljs-name">ul</span>&gt;</span></code></pre>
                          </div>
                        </div>
                        <h3 className="uk-margin-medium-top" id="Advance"> Advance Multiple open </h3>
                        <h6> PREVIEW</h6>
                        <article className="uk-card-default p-4 rounded">
                          <ul className="uk-list-divider uk-list-large uk-accordion" uk-accordion>
                            <li> <a className="uk-accordion-title" href="#">Lorem ipsum dolor sit amet,
                                consectetur
                                adipiscing elit?</a>
                              <div className="uk-accordion-content">
                                <p>Vivamus imperdiet venenatis est. Phasellus vitae mauris imperdiet,
                                  condimentum
                                  eros vel, ullamcorper turpis. Maecenas sed libero quis orci egestas
                                  vehicula
                                  fermentum id diam. In sodales quam quis mi mollis eleifend id sit
                                  amet
                                  velit.
                                  Sed ultricies condimentum magna, vel commodo dolor luctus in.
                                  Aliquam et
                                  orci
                                  nibh. Nunc purus metus, aliquam vitae venenatis sit amet, porta non
                                  est.
                                  Proin
                                  vehicula nisi eu molestie varius. Pellentesque semper ex diam, at
                                  tristique
                                  ipsum varius sed. Pellentesque non metus ullamcorper, iaculis nibh
                                  quis,
                                  facilisis lorem. Sed malesuada eu lacus sit amet feugiat. Aenean
                                  iaculis dui
                                  sed
                                  quam consectetur elementum.</p>
                              </div>
                            </li>
                            <li> <a className="uk-accordion-title" href="#">Nullam massa sem, mollis ut luctus
                                at,
                                tincidunt
                                a lorem?</a>
                              <div className="uk-accordion-content" hidden aria-hidden="true">
                                <p>Aliquam sed dictum elit, quis consequat metus. Proin in mauris
                                  finibus urna
                                  lacinia laoreet sed id orci. Pellentesque volutpat tellus sit amet
                                  enim
                                  rutrum,
                                  vel eleifend metus consectetur. Sed lacinia urna a neque maximus
                                  placerat.
                                  Praesent blandit hendrerit dui non placerat. Sed malesuada sem sit
                                  amet arcu
                                  faucibus, sit amet accumsan nisl laoreet. Quisque auctor sit amet
                                  nisl
                                  rhoncus
                                  interdum. Nullam euismod odio sem, quis pulvinar purus gravida eget.
                                  Nullam
                                  molestie, lacus vel vehicula elementum, massa arcu bibendum lacus,
                                  vitae
                                  tempus
                                  justo orci id lectus. Duis justo neque, elementum eget ante in,
                                  condimentum
                                  condimentum ante. Maecenas quis eleifend risus. In hac habitasse
                                  platea
                                  dictumst. Nunc posuere ultrices dolor, at auctor lacus dignissim ut.
                                  Donec viverra imperdiet nisi, sit amet mattis massa pellentesque ac.</p>
                              </div>
                            </li>
                            <li> <a className="uk-accordion-title" href="#">Aliquam pretium diam et ullamcorper
                                malesuada?</a>
                              <div className="uk-accordion-content" hidden aria-hidden="true">
                                <p>Praesent feugiat lectus faucibus tellus congue pharetra. In viverra
                                  vehicula
                                  pellentesque. Etiam consectetur ultricies magna at bibendum. Sed
                                  posuere
                                  libero
                                  ut nulla ornare, faucibus pellentesque odio pulvinar. Vestibulum
                                  feugiat ex
                                  id
                                  ex elementum egestas. Integer laoreet mollis risus, id efficitur
                                  neque.
                                  Pellentesque quis dolor faucibus, ultrices tellus id, vestibulum
                                  neque. Sed
                                  eros
                                  purus, dignissim id fermentum ut, lacinia laoreet odio. Sed mi erat,
                                  aliquet
                                  at
                                  facilisis quis, laoreet in massa. Pellentesque eu massa accumsan,
                                  iaculis
                                  erat
                                  eu, tincidunt sem. Quisque id orci id dui congue pretium.
                                  Pellentesque iaculis,
                                  dolor aliquet tempor laoreet, enim metus tincidunt massa, ut porttitor sem dui
                                  sit amet arcu. Vestibulum sodales laoreet enim, sit amet vestibulum
                                  nisl
                                  porttitor a.</p>
                              </div>
                            </li>
                            <li> <a className="uk-accordion-title" href="#">Etiam suscipit at nisi eget
                                auctor?</a>
                              <div className="uk-accordion-content" hidden aria-hidden="true">
                                <p>Mauris id pellentesque metus. In quis arcu sed enim maximus
                                  pellentesque et
                                  eget
                                  velit. Etiam euismod enim vitae condimentum tristique.</p>
                              </div>
                            </li>
                            <li> <a className="uk-accordion-title" href="#">Sed porta diam eget enim bibendum
                                laoreet?</a>
                              <div className="uk-accordion-content" hidden aria-hidden="true">
                                <p>Donec molestie sem et tellus vestibulum venenatis. Quisque iaculis
                                  ornare
                                  luctus.
                                  Orci varius natoque penatibus et magnis dis parturient montes,
                                  nascetur
                                  ridiculus mus. Morbi velit nibh, ullamcorper eu imperdiet id, rutrum
                                  quis
                                  mi.
                                  Donec eu aliquet lorem. Nulla at lectus turpis. Sed et diam ac lorem
                                  iaculis
                                  lacinia.</p>
                              </div>
                            </li>
                          </ul>
                        </article>
                        <div>
                          <button className="button Markup-botton uk-margin-small-top" type="button" uk-toggle="target: #Accordion-Multiple-advance"> MARKUP</button>
                          <div id="Accordion-Multiple-advance" aria-hidden="true" className=" uk-margin-small-top" hidden>
                            <pre><code id="code-k0ovw8xb" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">article</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card-default p-4 rounded"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">ul</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-list-divider uk-list-large uk-accordion"</span> <span className="hljs-attr">uk-accordion</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-accordion-title"</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}adipiscing elit?<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-accordion-content"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span>&gt;</span>Vivamus imperdiet venenatis est. Phasellus vitae mauris imperdiet,{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                    "}condimentum{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                    "}eros vel, ullamcorper turpis. Maecenas sed libero quis orci egestas vehicula{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                    "}fermentum id diam. In sodales quam quis mi mollis eleifend id sit amet{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                    "}velit.{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                    "}Sed ultricies condimentum magna, vel commodo dolor luctus in. Aliquam et{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                    "}orci{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                    "}nibh. Nunc purus metus, aliquam vitae venenatis sit amet, porta non est.{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                    "}Proin{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                    "}vehicula nisi eu molestie varius. Pellentesque semper ex diam, at tristique{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                    "}ipsum varius sed. Pellentesque non metus ullamcorper, iaculis nibh quis,{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                    "}facilisis lorem. Sed malesuada eu lacus sit amet feugiat. Aenean iaculis dui{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                    "}sed{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                    "}quam consectetur elementum.<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-accordion-title"</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Nullam massa sem, mollis ut luctus at,{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}tincidunt{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}a lorem?<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-accordion-content"</span> <span className="hljs-attr">hidden</span>=<span className="hljs-string">""</span> <span className="hljs-attr">aria-hidden</span>=<span className="hljs-string">"true"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span>&gt;</span>Aliquam sed dictum elit, quis consequat metus. Proin in mauris finibus urna{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                    "}lacinia laoreet sed id orci. Pellentesque volutpat tellus sit amet enim{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                    "}rutrum,{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                    "}vel eleifend metus consectetur. Sed lacinia urna a neque maximus placerat.{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                    "}Praesent blandit hendrerit dui non placerat. Sed malesuada sem sit amet arcu{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                    "}faucibus, sit amet accumsan nisl laoreet. Quisque auctor sit amet nisl{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                    "}rhoncus{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                    "}interdum. Nullam euismod odio sem, quis pulvinar purus gravida eget. Nullam{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                    "}molestie, lacus vel vehicula elementum, massa arcu bibendum lacus, vitae{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                    "}tempus{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                    "}justo orci id lectus. Duis justo neque, elementum eget ante in, condimentum{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                    "}condimentum ante. Maecenas quis eleifend risus. In hac habitasse platea{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                    "}dictumst. Nunc posuere ultrices dolor, at auctor lacus dignissim ut. Donec{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                    "}viverra imperdiet nisi, sit amet mattis massa pellentesque ac.<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-accordion-title"</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Aliquam pretium diam et ullamcorper{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}malesuada?<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-accordion-content"</span> <span className="hljs-attr">hidden</span>=<span className="hljs-string">""</span> <span className="hljs-attr">aria-hidden</span>=<span className="hljs-string">"true"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span>&gt;</span>Praesent feugiat lectus faucibus tellus congue pharetra. In viverra vehicula{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                    "}pellentesque. Etiam consectetur ultricies magna at bibendum. Sed posuere{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                    "}libero{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                    "}ut nulla ornare, faucibus pellentesque odio pulvinar. Vestibulum feugiat ex{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                    "}id{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                    "}ex elementum egestas. Integer laoreet mollis risus, id efficitur neque.{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                    "}Pellentesque quis dolor faucibus, ultrices tellus id, vestibulum neque. Sed{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                    "}eros{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                    "}purus, dignissim id fermentum ut, lacinia laoreet odio. Sed mi erat, aliquet{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                    "}at{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                    "}facilisis quis, laoreet in massa. Pellentesque eu massa accumsan, iaculis{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                    "}erat{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                    "}eu, tincidunt sem. Quisque id orci id dui congue pretium. Pellentesque{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                    "}iaculis,{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                    "}dolor aliquet tempor laoreet, enim metus tincidunt massa, ut porttitor sem{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                    "}dui{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                    "}sit amet arcu. Vestibulum sodales laoreet enim, sit amet vestibulum nisl{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                    "}porttitor a.<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-accordion-title"</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Etiam suscipit at nisi eget auctor?<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-accordion-content"</span> <span className="hljs-attr">hidden</span>=<span className="hljs-string">""</span> <span className="hljs-attr">aria-hidden</span>=<span className="hljs-string">"true"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span>&gt;</span>Mauris id pellentesque metus. In quis arcu sed enim maximus pellentesque et{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                    "}eget{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                    "}velit. Etiam euismod enim vitae condimentum tristique.<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-accordion-title"</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Sed porta diam eget enim bibendum{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}laoreet?<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-accordion-content"</span> <span className="hljs-attr">hidden</span>=<span className="hljs-string">""</span> <span className="hljs-attr">aria-hidden</span>=<span className="hljs-string">"true"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span>&gt;</span>Donec molestie sem et tellus vestibulum venenatis. Quisque iaculis ornare{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                    "}luctus.{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                    "}Orci varius natoque penatibus et magnis dis parturient montes, nascetur{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                    "}ridiculus mus. Morbi velit nibh, ullamcorper eu imperdiet id, rutrum quis{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                    "}mi.{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                    "}Donec eu aliquet lorem. Nulla at lectus turpis. Sed et diam ac lorem iaculis{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                    "}lacinia.<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">ul</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;/<span className="hljs-name">article</span>&gt;</span></code></pre>
                          </div>
                        </div>
                      </div>
                      <div className="uk-width-1-4@s uk-visible@s">
                        <ul className="uk-list docs-list" uk-sticky="offset:100;media : @m">
                          <li> <a href="#Introduction" uk-scroll> Introduction </a></li>
                          <li> <a href="#Multiple-open-items" uk-scroll> Multiple open items </a></li>
                          <li> <a href="#Advance" uk-scroll> Advance </a></li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  {/* Alert */}
                  <li>
                    <div className="mt-4 uk-grid-large" uk-grid>
                      <div className="uk-width-3-4@s">
                        <h2> Alert</h2>
                        <p className="mb-4">Display success, primary and error messages.</p>
                        <h6 id="alert-Introduction"> Basic alert </h6>
                        <p> To apply this component, add the <code>uk-alert</code> attribute to a block element. </p>
                        <h6> PREVIEW </h6>
                        <div uk-alert>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                          tempor
                          incididunt ut labore et dolore magna aliqua.</div>
                        <div>
                          <button className="Markup-botton button  uk-margin-small-top" type="button" uk-toggle="target: #Basic"> MARKUP</button>
                          <div id="Basic" aria-hidden="true" className=" uk-margin-small-top" hidden>
                            <pre><code id="code-k0ow5jza" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">uk-alert</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span></code></pre>
                          </div>
                        </div>
                        <h6 id="Close-button"> Close button </h6>
                        <p> To create a close button and enable its functionality, add
                          the <code>.uk-alert-close</code> class to a <code>&lt;button&gt;</code> or <code>&lt;a&gt;</code> element inside the alert box. To apply a close icon, add the <code>uk-close</code> attribute . </p>
                        <h6> PREVIEW </h6>
                        <div uk-alert> <a className="uk-alert-close" uk-close />
                          <h4>Notice</h4>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt
                            ut
                            labore et dolore magna aliqua.</p>
                        </div>
                        <div>
                          <button className="Markup-botton button  uk-margin-small-top" type="button" uk-toggle="target: #Close-btnz"> MARKUP
                          </button>
                          <div id="Close-btnz" aria-hidden="true" className=" uk-margin-small-top" hidden>
                            <pre>{"                                                    "}{"\t"}<code id="code-k0ow5jzc" className="lang-html hljs xml">{"\n"}{"                                                    "}{"\t"}{"\t"}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> {"\n"}{"                                                    "}{"\t"}{"\t"}<span className="hljs-attr">uk-alert</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-alert-close"</span> <span className="hljs-attr">uk-close</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">h3</span>&gt;</span>Notice<span className="hljs-tag">&lt;/<span className="hljs-name">h3</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}</code>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}</pre>
                          </div>
                        </div>
                        <h6 id="Style-modifiers"> Style modifiers </h6>
                        <p> There are several style modifiers available <br />
                          <code>.uk-alert-primary</code> <code>.uk-alert-success</code> <code>.uk-alert-danger</code></p>
                        <h6> PREVIEW </h6>
                        <div className="uk-alert-primary" uk-alert> <a className="uk-alert-close" uk-close />
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt. </p>
                        </div>
                        <div className="uk-alert-success" uk-alert> <a className="uk-alert-close" uk-close />
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt. </p>
                        </div>
                        <div className="uk-alert-danger" uk-alert> <a className="uk-alert-close" uk-close />
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt. </p>
                        </div>
                        <div>
                          <button className="Markup-botton button  uk-margin-small-top" type="button" uk-toggle="target: #Style-modifier"> MARKUP</button>
                          <div id="Style-modifier" aria-hidden="true" className=" uk-margin-small-top" hidden>
                            <pre><code id="code-k0owe56e" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-alert-primary"</span> <span className="hljs-attr">uk-alert</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-alert-close"</span> <span className="hljs-attr">uk-close</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}incididunt.{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-alert-success"</span> <span className="hljs-attr">uk-alert</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-alert-close"</span> <span className="hljs-attr">uk-close</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}incididunt.{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-alert-primary"</span> <span className="hljs-attr">uk-alert</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-alert-close"</span> <span className="hljs-attr">uk-close</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}incididunt.{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-alert-danger"</span> <span className="hljs-attr">uk-alert</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-alert-close"</span> <span className="hljs-attr">uk-close</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}incididunt.{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span></code></pre>
                          </div>
                        </div>
                        <h6 id="Backgrounds-Gradient"> Backgrounds Gradient </h6>
                        <p> apply background Gradient color <a href="https://wpkixx.com/html/socimo/colors.html"> backgrounds
                            Gradient </a> <code>.uk-light </code> change text color to Light</p>
                        <h6> PREVIEW </h6>
                        <div className="bg-gradient-primary uk-light" uk-alert> <a className="uk-alert-close" uk-close />
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt. </p>
                        </div>
                        <div className="bg-gradient-success uk-light" uk-alert> <a className="uk-alert-close" uk-close />
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt. </p>
                        </div>
                        <div className="bg-gradient-danger uk-light" uk-alert> <a className="uk-alert-close" uk-close />
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt. </p>
                        </div>
                        <div>
                          <button className="Markup-botton button  uk-margin-small-top" type="button" uk-toggle="target: #Background-Gradient"> MARKUP</button>
                          <div id="Background-Gradient" aria-hidden="true" className=" uk-margin-small-top" hidden>
                            <pre><code id="code-k0owkxvl" className="lang-html hljs xml"> <span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"bg-gradient-primary uk-light"</span> <span className="hljs-attr">uk-alert</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-alert-close"</span> <span className="hljs-attr">uk-close</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}incididunt.{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"bg-gradient-success uk-light"</span> <span className="hljs-attr">uk-alert</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-alert-close"</span> <span className="hljs-attr">uk-close</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}incididunt.{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"bg-gradient-primary uk-light"</span> <span className="hljs-attr">uk-alert</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-alert-close"</span> <span className="hljs-attr">uk-close</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}incididunt.{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"bg-gradient-danger uk-light"</span> <span className="hljs-attr">uk-alert</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-alert-close"</span> <span className="hljs-attr">uk-close</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}incididunt.{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}</code></pre>
                          </div>
                        </div>
                      </div>
                      <div className="uk-width-1-4@s uk-visible@s">
                        <ul className="uk-list docs-list" uk-sticky="offset:100;media : @m; top:20">
                          <li> <a href="#alert-Introduction" uk-scroll> Introduction </a></li>
                          <li> <a href="#Close-button" uk-scroll> Close Button </a></li>
                          <li> <a href="#Style-modifiers" uk-scroll> Style modifiers</a></li>
                          <li> <a href="#Backgrounds-Gradient" uk-scroll> Backgrounds gradient </a></li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  {/* Dropdown */}
                  <li>
                    <div className="mt-4 uk-grid-large" uk-grid>
                      <div className="uk-width-3-4@s">
                        <h2> Dropdown</h2>
                        <p className="mb-4">Defines different styles for a toggleable dropdown. </p>
                        <p id="drop-intro">Basically, a dropdown is a specific case of the <a href="https://getuikit.com/docs/drop">drop</a> that provides its own styling. Any
                          content, like a button, can toggle a dropdown. Just add the <code>uk-dropdown</code> attribute to a block element following the toggle.</p>
                        <pre><code className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">button</span> <span className="hljs-attr">type</span>=<span className="hljs-string">"button"</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">button</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">uk-dropdown</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}</code></pre>
                        <h6> PREVIEW </h6>
                        <div className="uk-inline uk-display-inline-block">
                          <button className="button uk-button-default dropdown-arrow dropdown-arrow" type="button">Hover</button>
                          <div uk-dropdown>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor
                            incididunt.</div>
                          <button className="button uk-button-default dropdown-arrow" type="button">Click</button>
                          <div uk-dropdown="mode: click">Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do
                            eiusmod tempor incididunt.</div>
                        </div>
                        <div>
                          <button className="Markup-botton button  uk-margin-small-top" type="button" uk-toggle="target: #basic"> MARKUP</button>
                          <div id="basic" aria-hidden="true" className="uk-margin-small-top" hidden>
                            <pre><code id="code-jw0fhw06" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-inline uk-display-inline-block"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">button</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"button uk-button-default"</span> <span className="hljs-attr">type</span>=<span className="hljs-string">"button"</span>&gt;</span>Hover<span className="hljs-tag">&lt;/<span className="hljs-name">button</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">uk-dropdown</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-inline uk-display-inline-block"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">button</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"button uk-button-default"</span> <span className="hljs-attr">type</span>=<span className="hljs-string">"button"</span>&gt;</span>Click<span className="hljs-tag">&lt;/<span className="hljs-name">button</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">uk-dropdown</span>=<span className="hljs-string">"mode: click"</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span></code></pre>
                          </div>
                        </div>
                        <h3 className="uk-margin-medium-top" id="Nav-in-dropdown"> Nav in dropdown </h3>
                        <p> </p>
                        <h6> PREVIEW </h6>
                        <button className="button uk-button-default dropdown-arrow" type="button">Hover</button>
                        <div uk-dropdown>
                          <ul className="uk-nav uk-dropdown-nav">
                            <li className="uk-nav-header">Header</li>
                            <li><a href="#">list Item</a></li>
                            <li className="uk-active"><a href="#">Active</a></li>
                            <li><a href="#">list Item</a></li>
                            <li><a href="#">list Item</a></li>
                            <li className="uk-nav-divider" />
                            <li><a href="#">list Item</a></li>
                          </ul>
                        </div>
                        <div>
                          <button className="Markup-botton button  uk-margin-small-top" type="button" uk-toggle="target: #Nav"> MARKUP</button>
                          <div id="Nav" aria-hidden="true" className="uk-margin-small-top" hidden>
                            <pre><code id="code-jw0fhw07" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">button</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"button uk-button-default dropdown-arrow"</span> <span className="hljs-attr">type</span>=<span className="hljs-string">"button"</span>&gt;</span>Hover<span className="hljs-tag">&lt;/<span className="hljs-name">button</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">uk-dropdown</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">ul</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-nav uk-dropdown-nav"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-active"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Active<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-nav-header"</span>&gt;</span>Header<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-nav-divider"</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">ul</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span></code></pre>
                          </div>
                        </div>
                        <h3 className="uk-margin-medium-top" id="Grid-in-dropdown"> Grid in
                          dropdown </h3>
                        <p> You can place a grid from the <a href="https://wpkixx.com/html/socimo/elements-grid.html"> Grid
                            page </a> inside a dropdown, which can hold a navigation or any other
                          content.
                          Just wrap
                          the content with a <code>&lt;div&gt;</code> element and add the <code>uk-grid</code> attribute. If the grid should stack automatically, whenever the dropdown no
                          longer
                          fits its
                          container, just add the <code>.uk-dropdown-grid</code> class. </p>
                        <h6> PREVIEW </h6>
                        <div className="uk-width-1-3@m">
                          <button className="button uk-button-default dropdown-arrow" type="button">Hover</button>
                          <div className="uk-width-large" uk-dropdown>
                            <div className="uk-dropdown-grid uk-child-width-1-2@m" uk-grid>
                              <div>
                                <ul className="uk-nav uk-dropdown-nav">
                                  <li className="uk-nav-header">Header</li>
                                  <li><a href="#">list Item</a></li>
                                  <li className="uk-active"><a href="#">Active</a></li>
                                  <li><a href="#">list Item</a></li>
                                  <li><a href="#">list Item</a></li>
                                  <li className="uk-nav-divider" />
                                  <li><a href="#">list Item</a></li>
                                </ul>
                              </div>
                              <div>
                                <ul className="uk-nav uk-dropdown-nav">
                                  <li className="uk-nav-header">Header</li>
                                  <li><a href="#">list Item</a></li>
                                  <li className="uk-active"><a href="#">Active</a></li>
                                  <li><a href="#">list Item</a></li>
                                  <li><a href="#">list Item</a></li>
                                  <li className="uk-nav-divider" />
                                  <li><a href="#">list Item</a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <button className="Markup-botton button  uk-margin-small-top" type="button" uk-toggle="target: #Grid"> MARKUP</button>
                          <div id="Grid" aria-hidden="true" className="uk-margin-small-top" hidden>
                            <pre><code id="code-jw0fhw08" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">button</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"button uk-button-default"</span> <span className="hljs-attr">type</span>=<span className="hljs-string">"button"</span>&gt;</span>Hover<span className="hljs-tag">&lt;/<span className="hljs-name">button</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-width-large"</span> <span className="hljs-attr">uk-dropdown</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-dropdown-grid uk-child-width-1-2@m"</span> <span className="hljs-attr">uk-grid</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">ul</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-nav uk-dropdown-nav"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-active"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Active<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-nav-header"</span>&gt;</span>Header<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-nav-divider"</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;/<span className="hljs-name">ul</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">ul</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-nav uk-dropdown-nav"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-active"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Active<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-nav-header"</span>&gt;</span>Header<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-nav-divider"</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;/<span className="hljs-name">ul</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span></code></pre>
                          </div>
                        </div>
                        <h3 className="uk-margin-medium-top" id="dropdown-Position"> Position </h3>
                        <p> Add one of the following options to the <code> uk-dropdown</code> attribute to adjust the dropdown's alignment. </p>
                        <h6> PREVIEW </h6>
                        <div className="uk-inline">
                          <button className="button uk-button-default dropdown-arrow" type="button">Top
                            Right</button>
                          <div uk-dropdown="pos: top-right">
                            <ul className="uk-nav uk-dropdown-nav">
                              <li className="uk-nav-header">Header</li>
                              <li><a href="#">list Item</a></li>
                              <li className="uk-active"><a href="#">Active</a></li>
                              <li><a href="#">list Item</a></li>
                              <li><a href="#">list Item</a></li>
                              <li className="uk-nav-divider" />
                              <li><a href="#">list Item</a></li>
                            </ul>
                          </div>
                        </div>
                        <div className="uk-inline">
                          <button className="button uk-button-default dropdown-arrow" type="button">Bottom
                            Justify</button>
                          <div uk-dropdown="pos: bottom-justify">
                            <ul className="uk-nav uk-dropdown-nav">
                              <li className="uk-nav-header">Header</li>
                              <li><a href="#">list Item</a></li>
                              <li className="uk-active"><a href="#">Active</a></li>
                              <li><a href="#">list Item</a></li>
                              <li><a href="#">list Item</a></li>
                              <li className="uk-nav-divider" />
                              <li><a href="#">list Item</a></li>
                            </ul>
                          </div>
                        </div>
                        <div className="uk-inline">
                          <button className="button uk-button-default dropdown-arrow-right" type="button">Right
                            Center</button>
                          <div uk-dropdown="pos: right-center">
                            <ul className="uk-nav uk-dropdown-nav">
                              <li className="uk-nav-header">Header</li>
                              <li><a href="#">list Item</a></li>
                              <li className="uk-active"><a href="#">Active</a></li>
                              <li><a href="#">list Item</a></li>
                              <li><a href="#">list Item</a></li>
                              <li className="uk-nav-divider" />
                              <li><a href="#">list Item</a></li>
                            </ul>
                          </div>
                        </div>
                        <div>
                          <button className="Markup-botton button  uk-margin-small-top" type="button" uk-toggle="target: #Position"> MARKUP</button>
                          <div id="Position" aria-hidden="true" className="uk-margin-small-top" hidden>
                            <pre><code id="code-jw0fhw09" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-inline"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">button</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"button uk-button-default"</span> <span className="hljs-attr">type</span>=<span className="hljs-string">"button"</span>&gt;</span>Top Right<span className="hljs-tag">&lt;/<span className="hljs-name">button</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">uk-dropdown</span>=<span className="hljs-string">"pos: top-right"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">ul</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-nav uk-dropdown-nav"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-active"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Active<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-nav-header"</span>&gt;</span>Header<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-nav-divider"</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">ul</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-inline"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">button</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"button uk-button-default"</span> <span className="hljs-attr">type</span>=<span className="hljs-string">"button"</span>&gt;</span>Bottom Justify<span className="hljs-tag">&lt;/<span className="hljs-name">button</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">uk-dropdown</span>=<span className="hljs-string">"pos: bottom-justify"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">ul</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-nav uk-dropdown-nav"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-active"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Active<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-nav-header"</span>&gt;</span>Header<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-nav-divider"</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">ul</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-inline"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">button</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"button uk-button-default"</span> <span className="hljs-attr">type</span>=<span className="hljs-string">"button"</span>&gt;</span>Right Center<span className="hljs-tag">&lt;/<span className="hljs-name">button</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">uk-dropdown</span>=<span className="hljs-string">"pos: right-center"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">ul</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-nav uk-dropdown-nav"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-active"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Active<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-nav-header"</span>&gt;</span>Header<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-nav-divider"</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">ul</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span></code></pre>
                          </div>
                        </div>
                        <div className="uk-overflow-auto uk-margin-large-top">
                          <table className="uk-table uk-table-divider">
                            <thead>
                              <tr>
                                <th align="left">Position</th>
                                <th align="left">Description</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td align="left"><code>bottom-left</code></td>
                                <td align="left">Aligns the dropdown to the bottom left.</td>
                              </tr>
                              <tr>
                                <td align="left"><code>bottom-center</code></td>
                                <td align="left">Aligns the dropdown to the bottom center.</td>
                              </tr>
                              <tr>
                                <td align="left"><code>bottom-right</code></td>
                                <td align="left">Aligns the dropdown to the bottom right.</td>
                              </tr>
                              <tr>
                                <td align="left"><code>bottom-justify</code></td>
                                <td align="left">Aligns the dropdown to the bottom and justifies its
                                  width to
                                  the
                                  related element.</td>
                              </tr>
                              <tr>
                                <td align="left"><code>top-left</code></td>
                                <td align="left">Aligns the dropdown to the top left.</td>
                              </tr>
                              <tr>
                                <td align="left"><code>top-center</code></td>
                                <td align="left">Aligns the dropdown to the top center.</td>
                              </tr>
                              <tr>
                                <td align="left"><code>top-right</code></td>
                                <td align="left">Aligns the dropdown to the top right.</td>
                              </tr>
                              <tr>
                                <td align="left"><code>top-justify</code></td>
                                <td align="left">Aligns the dropdown to the top and justifies its width
                                  to the
                                  related element.</td>
                              </tr>
                              <tr>
                                <td align="left"><code>left-top</code></td>
                                <td align="left">Aligns the dropdown to the left top.</td>
                              </tr>
                              <tr>
                                <td align="left"><code>left-center</code></td>
                                <td align="left">Aligns the dropdown to the left center.</td>
                              </tr>
                              <tr>
                                <td align="left"><code>left-bottom</code></td>
                                <td align="left">Aligns the dropdown to the left bottom.</td>
                              </tr>
                              <tr>
                                <td align="left"><code>right-top</code></td>
                                <td align="left">Aligns the dropdown to the right top.</td>
                              </tr>
                              <tr>
                                <td align="left"><code>right-center</code></td>
                                <td align="left">Aligns the dropdown to the right center.</td>
                              </tr>
                              <tr>
                                <td align="left"><code>right-bottom</code></td>
                                <td align="left">Aligns the dropdown to the right bottom.</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <h3 className="uk-margin-medium-top" id="Offset"> Offset </h3>
                        <p> To define a custom offset between the dropdown container and the
                          toggle, add the <code>offset</code> option with a value for the offset, measured in
                          pixels. </p>
                        <pre><code className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">uk-dropdown</span>=<span className="hljs-string">"offset: 80"</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span></code></pre>
                        <h6> PREVIEW </h6>
                        <button className="button uk-button-default dropdown-arrow" type="button">Hover</button>
                        <div uk-dropdown="offset: 40">
                          <ul className="uk-nav uk-dropdown-nav">
                            <li className="uk-nav-header">Header</li>
                            <li><a href="#">list Item</a></li>
                            <li className="uk-active"><a href="#">Active</a></li>
                            <li><a href="#">list Item</a></li>
                            <li><a href="#">list Item</a></li>
                            <li className="uk-nav-divider" />
                            <li><a href="#">list Item</a></li>
                          </ul>
                        </div>
                        <div>
                          <button className="Markup-botton button  uk-margin-small-top" type="button" uk-toggle="target: #Ofset"> MARKUP</button>
                          <div id="Ofset" aria-hidden="true" className="uk-margin-small-top" hidden>
                            <pre><code id="code-jw0fhw0c" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">button</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"button uk-button-default"</span> <span className="hljs-attr">type</span>=<span className="hljs-string">"button"</span>&gt;</span>Hover<span className="hljs-tag">&lt;/<span className="hljs-name">button</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">uk-dropdown</span>=<span className="hljs-string">"offset: 80"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">ul</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-nav uk-dropdown-nav"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-active"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Active<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-nav-header"</span>&gt;</span>Header<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-nav-divider"</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">ul</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span></code></pre>
                          </div>
                        </div>
                        <h3 className="uk-margin-medium-top" id="Animation"> Animation </h3>
                        <p> Apply one or more animations to the dropdown by adding the <code>animation:
                            uk-animation-*</code> option with one of the classes from the <a href="https://getuikit.com/docs/animation">Animation component</a>. You can also
                          determine
                          the animation's duration. Just add the <code>duration</code> option with your value. </p>
                        <h6> PREVIEW </h6>
                        <button className="button uk-button-default" type="button">Hover</button>
                        <div uk-dropdown="animation: uk-animation-slide-top-small; duration: 1000">
                          <ul className="uk-nav uk-dropdown-nav">
                            <li className="uk-active"><a href="#">Active</a></li>
                            <li><a href="#">Item</a></li>
                            <li className="uk-nav-header">Header</li>
                            <li><a href="#">Item</a></li>
                            <li><a href="#">Item</a></li>
                            <li className="uk-nav-divider" />
                            <li><a href="#">Item</a></li>
                          </ul>
                        </div>
                        <div>
                          <button className="Markup-botton button  uk-margin-small-top" type="button" uk-toggle="target: #Animations"> MARKUP</button>
                          <div id="Animations" aria-hidden="true" className="uk-margin-small-top" hidden>
                            <pre><code id="code-jw0fhw0d" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">button</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"button uk-button-default"</span> <span className="hljs-attr">type</span>=<span className="hljs-string">"button"</span>&gt;</span>Hover<span className="hljs-tag">&lt;/<span className="hljs-name">button</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">uk-dropdown</span>=<span className="hljs-string">"animation: uk-animation-slide-top-small; duration: 1000"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">ul</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-nav uk-dropdown-nav"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-active"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Active<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-nav-header"</span>&gt;</span>Header<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-nav-divider"</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">ul</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span></code></pre>
                          </div>
                        </div>
                      </div>
                      <div className="uk-width-1-4@s uk-visible@s">
                        <ul className="uk-list docs-list" uk-sticky="offset:100;media : @m; top:20">
                          <li> <a href="#drop-intro" uk-scroll> Introduction </a></li>
                          <li> <a href="#Nav-in-dropdown" uk-scroll> Nav in dropdown </a></li>
                          <li> <a href="#Grid-in-dropdown" uk-scroll>Grid-in-dropdown </a></li>
                          <li> <a href="#dropdown-Position" uk-scroll> dropdown-Position </a></li>
                          <li> <a href="#Offset" uk-scroll> Offset </a></li>
                          <li> <a href="#Animation" uk-scroll> Animation </a></li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  {/* Filter  */}
                  <li>
                    <div className="mt-4 uk-grid-large" uk-grid>
                      <div className="uk-width-3-4@s">
                        <h2> Filter</h2>
                        <p className="mb-4">Filter or sort items in any given layout by meta data. </p>
                        <h6 id="filter-introductions"> Usage</h6>
                        <p> To apply this component, you need a container element
                          with
                          the <code>uk-filter="target: SELECTOR"</code> attribute. Inside this container create a
                          list of
                          filter controls as well as the layout items you want to filter. Use the <code>target:
                            SELECTOR</code> option to select the element containing the layout items.</p>
                        <p>To apply a filter control, add the <code>uk-filter-control</code> attribute. To
                          define
                          the meta
                          data that should be filtered, use the <code>filter: SELECTOR</code> option. The
                          selector
                          can be
                          any CSS selector like a HTML class or an attribute you define for the layout items. </p>
                        <p>If <code>target</code> is the only option in the <code>uk-filter</code> attribute
                          value,
                          you can
                          also use <code>uk-filter="SELECTOR"</code>. The same applies to the filter control.
                          If <code>filter</code> is the only option in the <code>uk-filter-control</code> attribute
                          value,
                          you can also use <code>uk-filter-control="SELECTOR"</code>.</p>
                        <h6>PREVIEW</h6>
                        <div uk-filter="target: .js-filter">
                          <ul className="uk-subnav uk-subnav-pill">
                            <li uk-filter-control=".tag-white"><a href="#">White</a></li>
                            <li uk-filter-control=".tag-blue"><a href="#">Blue</a></li>
                            <li uk-filter-control=".tag-black"><a href="#">Black</a></li>
                          </ul>
                          <ul className="js-filter uk-child-width-1-2 uk-child-width-1-3@m uk-text-center" uk-grid>
                            <li className="tag-white">
                              <div className="uk-card uk-card-default uk-card-body">Item</div>
                            </li>
                            <li className="tag-blue">
                              <div className="uk-card uk-card-primary uk-card-body">Item</div>
                            </li>
                            <li className="tag-white">
                              <div className="uk-card uk-card-default uk-card-body">Item</div>
                            </li>
                            <li className="tag-white">
                              <div className="uk-card uk-card-default uk-card-body">Item</div>
                            </li>
                            <li className="tag-black">
                              <div className="uk-card uk-card-secondary uk-card-body">Item</div>
                            </li>
                            <li className="tag-black">
                              <div className="uk-card uk-card-secondary uk-card-body">Item</div>
                            </li>
                            <li className="tag-blue">
                              <div className="uk-card uk-card-primary uk-card-body">Item</div>
                            </li>
                            <li className="tag-black">
                              <div className="uk-card uk-card-secondary uk-card-body">Item</div>
                            </li>
                            <li className="tag-blue">
                              <div className="uk-card uk-card-primary uk-card-body">Item</div>
                            </li>
                            <li className="tag-white">
                              <div className="uk-card uk-card-default uk-card-body">Item</div>
                            </li>
                            <li className="tag-blue">
                              <div className="uk-card uk-card-primary uk-card-body">Item</div>
                            </li>
                            <li className="tag-black">
                              <div className="uk-card uk-card-secondary uk-card-body">Item</div>
                            </li>
                          </ul>
                        </div>
                        <div className="mt-lg-4">
                          <button className="Markup-botton button  uk-margin-small-top" type="button" uk-toggle="target: #basics"> MARKUP</button>
                          <div id="basics" aria-hidden="true" className="uk-margin-small-top" hidden>
                            <pre><code id="code-jw0fi9wu" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">uk-filter</span>=<span className="hljs-string">"target: .js-filter"</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">ul</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-subnav uk-subnav-pill"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">uk-filter-control</span>=<span className="hljs-string">".tag-white"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>White<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">uk-filter-control</span>=<span className="hljs-string">".tag-blue"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Blue<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">uk-filter-control</span>=<span className="hljs-string">".tag-black"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Black<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">ul</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">ul</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"js-filter uk-child-width-1-2 uk-child-width-1-3@m uk-text-center"</span> <span className="hljs-attr">uk-grid</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"tag-white"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-default uk-card-body"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"tag-blue"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-primary uk-card-body"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"tag-white"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-default uk-card-body"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"tag-white"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-default uk-card-body"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"tag-black"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-secondary uk-card-body"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"tag-black"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-secondary uk-card-body"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"tag-blue"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-primary uk-card-body"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"tag-black"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-secondary uk-card-body"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"tag-blue"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-primary uk-card-body"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"tag-white"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-default uk-card-body"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"tag-blue"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-primary uk-card-body"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"tag-black"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-secondary uk-card-body"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">ul</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span></code></pre>
                          </div>
                        </div>
                        <br />
                        <p>The Filter component comes unstyled, which allows you to use any of the other UIkit
                          components to create the filter controls and layout items. For example, the <a href="https://wpkixx.com/html/socimo/tabs.html">Tab</a> components can
                          be used to style the filter controls. Usually, the <a href="https://wpkixx.com/html/socimo/grid.html">Grid
                            component</a> is used
                          to create the item layout.</p>
                        <h3 className="uk-margin-medium-top" id="Active-state"> Active state </h3>
                        <p> Add the <code>.uk-active</code> class to a filter
                          control, and
                          the filter will be applied initially. </p>
                        <h6> PREVIEW </h6>
                        <div uk-filter="target: .js-filter">
                          <ul className="uk-subnav uk-subnav-pill">
                            <li className="uk-active" uk-filter-control="[data-color='white']"><a href="#">White</a> </li>
                            <li uk-filter-control="[data-color='blue']"><a href="#">Blue</a></li>
                            <li uk-filter-control="[data-color='black']"><a href="#">Black</a></li>
                          </ul>
                          <ul className="js-filter uk-child-width-1-2 uk-child-width-1-3@m uk-text-center" uk-grid>
                            <li data-color="white">
                              <div className="uk-card uk-card-default uk-card-body">Item</div>
                            </li>
                            <li data-color="blue">
                              <div className="uk-card uk-card-primary uk-card-body">Item</div>
                            </li>
                            <li data-color="white">
                              <div className="uk-card uk-card-default uk-card-body">Item</div>
                            </li>
                            <li data-color="white">
                              <div className="uk-card uk-card-default uk-card-body">Item</div>
                            </li>
                            <li data-color="black">
                              <div className="uk-card uk-card-secondary uk-card-body">Item</div>
                            </li>
                            <li data-color="black">
                              <div className="uk-card uk-card-secondary uk-card-body">Item</div>
                            </li>
                            <li data-color="blue">
                              <div className="uk-card uk-card-primary uk-card-body">Item</div>
                            </li>
                            <li data-color="black">
                              <div className="uk-card uk-card-secondary uk-card-body">Item</div>
                            </li>
                            <li data-color="blue">
                              <div className="uk-card uk-card-primary uk-card-body">Item</div>
                            </li>
                            <li data-color="white">
                              <div className="uk-card uk-card-default uk-card-body">Item</div>
                            </li>
                            <li data-color="blue">
                              <div className="uk-card uk-card-primary uk-card-body">Item</div>
                            </li>
                            <li data-color="black">
                              <div className="uk-card uk-card-secondary uk-card-body">Item</div>
                            </li>
                          </ul>
                        </div>
                        <div className="mt-lg-4">
                          <button className="Markup-botton button  uk-margin-small-top" type="button" uk-toggle="target: #state"> MARKUP</button>
                          <div id="state" aria-hidden="true" className="uk-margin-small-top" hidden>
                            <pre><code id="code-jw0fi9wv" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">uk-filter</span>=<span className="hljs-string">"target: .js-filter"</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">ul</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-subnav uk-subnav-pill"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-active"</span> <span className="hljs-attr">uk-filter-control</span>=<span className="hljs-string">"[data-color='white']"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>White<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">uk-filter-control</span>=<span className="hljs-string">"[data-color='blue']"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Blue<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">uk-filter-control</span>=<span className="hljs-string">"[data-color='black']"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Black<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">ul</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">ul</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"js-filter uk-child-width-1-2 uk-child-width-1-3@m uk-text-center"</span> <span className="hljs-attr">uk-grid</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">data-color</span>=<span className="hljs-string">"white"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-default uk-card-body"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">data-color</span>=<span className="hljs-string">"blue"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-primary uk-card-body"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">data-color</span>=<span className="hljs-string">"white"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-default uk-card-body"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">data-color</span>=<span className="hljs-string">"white"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-default uk-card-body"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">data-color</span>=<span className="hljs-string">"black"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-secondary uk-card-body"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">data-color</span>=<span className="hljs-string">"black"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-secondary uk-card-body"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">data-color</span>=<span className="hljs-string">"blue"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-primary uk-card-body"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">data-color</span>=<span className="hljs-string">"black"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-secondary uk-card-body"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">data-color</span>=<span className="hljs-string">"blue"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-primary uk-card-body"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">data-color</span>=<span className="hljs-string">"white"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-default uk-card-body"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">data-color</span>=<span className="hljs-string">"blue"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-primary uk-card-body"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">data-color</span>=<span className="hljs-string">"black"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-secondary uk-card-body"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">ul</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span></code></pre>
                          </div>
                        </div>
                        <h3 className="uk-margin-medium-top" id="Reset-filter"> Reset filter</h3>
                        <p>To reset the filter and target all items, use the <code>uk-filter-control</code> attribute without any specified selector.</p>
                        <div uk-filter="target: .js-filter">
                          <ul className="uk-subnav uk-subnav-pill">
                            <li className="uk-active" uk-filter-control><a href="#">All</a></li>
                            <li uk-filter-control="[data-color='white']"><a href="#">White</a></li>
                            <li uk-filter-control="[data-color='blue']"><a href="#">Blue</a></li>
                            <li uk-filter-control="[data-color='black']"><a href="#">Black</a></li>
                          </ul>
                          <ul className="js-filter uk-child-width-1-2 uk-child-width-1-3@m uk-text-center" uk-grid>
                            <li data-color="white">
                              <div className="uk-card uk-card-default uk-card-body">Item</div>
                            </li>
                            <li data-color="blue">
                              <div className="uk-card uk-card-primary uk-card-body">Item</div>
                            </li>
                            <li data-color="white">
                              <div className="uk-card uk-card-default uk-card-body">Item</div>
                            </li>
                            <li data-color="white">
                              <div className="uk-card uk-card-default uk-card-body">Item</div>
                            </li>
                            <li data-color="black">
                              <div className="uk-card uk-card-secondary uk-card-body">Item</div>
                            </li>
                            <li data-color="black">
                              <div className="uk-card uk-card-secondary uk-card-body">Item</div>
                            </li>
                            <li data-color="blue">
                              <div className="uk-card uk-card-primary uk-card-body">Item</div>
                            </li>
                            <li data-color="black">
                              <div className="uk-card uk-card-secondary uk-card-body">Item</div>
                            </li>
                            <li data-color="blue">
                              <div className="uk-card uk-card-primary uk-card-body">Item</div>
                            </li>
                            <li data-color="white">
                              <div className="uk-card uk-card-default uk-card-body">Item</div>
                            </li>
                            <li data-color="blue">
                              <div className="uk-card uk-card-primary uk-card-body">Item</div>
                            </li>
                            <li data-color="black">
                              <div className="uk-card uk-card-secondary uk-card-body">Item</div>
                            </li>
                          </ul>
                        </div>
                        <div className="mt-lg-4">
                          <button className="Markup-botton button  uk-margin-small-top" type="button" uk-toggle="target: #Reset"> MARKUP</button>
                          <div id="Reset" aria-hidden="true" className="uk-margin-small-top" hidden>
                            <pre><code id="code-jw0fi9ww" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">uk-filter</span>=<span className="hljs-string">"target: .js-filter"</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">ul</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-subnav uk-subnav-pill"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-active"</span> <span className="hljs-attr">uk-filter-control</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>All<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">uk-filter-control</span>=<span className="hljs-string">"[data-color='white']"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>White<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">uk-filter-control</span>=<span className="hljs-string">"[data-color='blue']"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Blue<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">uk-filter-control</span>=<span className="hljs-string">"[data-color='black']"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Black<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">ul</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">ul</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"js-filter uk-child-width-1-2 uk-child-width-1-3@m uk-text-center"</span> <span className="hljs-attr">uk-grid</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">data-color</span>=<span className="hljs-string">"white"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-default uk-card-body"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">data-color</span>=<span className="hljs-string">"blue"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-primary uk-card-body"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">data-color</span>=<span className="hljs-string">"white"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-default uk-card-body"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">data-color</span>=<span className="hljs-string">"white"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-default uk-card-body"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">data-color</span>=<span className="hljs-string">"black"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-secondary uk-card-body"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">data-color</span>=<span className="hljs-string">"black"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-secondary uk-card-body"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">data-color</span>=<span className="hljs-string">"blue"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-primary uk-card-body"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">data-color</span>=<span className="hljs-string">"black"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-secondary uk-card-body"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">data-color</span>=<span className="hljs-string">"blue"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-primary uk-card-body"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">data-color</span>=<span className="hljs-string">"white"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-default uk-card-body"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">data-color</span>=<span className="hljs-string">"blue"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-primary uk-card-body"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">data-color</span>=<span className="hljs-string">"black"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-secondary uk-card-body"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">ul</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span></code></pre>
                          </div>
                        </div>
                        <h3 className="uk-margin-medium-top" id="Meta-Data"> Meta Data </h3>
                        <p> Items can have different meta data for filtering. You
                          just need
                          to define the HTML classes or <code>data</code> attributes and create the
                          corresponding CSS
                          selectors for the filter controls. This example uses <code>data</code> attributes
                          for the
                          filter instead of HTML classes. </p>
                        <h6> PREVIEW </h6>
                        <div uk-filter="target: .js-filter">
                          <ul className="uk-subnav uk-subnav-pill">
                            <li uk-filter-control="[data-tags*='white']"><a href="#">White</a></li>
                            <li uk-filter-control="[data-tags*='blue']"><a href="#">Blue</a></li>
                            <li uk-filter-control="[data-tags*='black']"><a href="#">Black</a></li>
                            <li uk-filter-control="[data-tags*='dark']"><a href="#">Dark Colors</a></li>
                          </ul>
                          <ul className="js-filter uk-child-width-1-2 uk-child-width-1-3@m uk-text-center" uk-grid>
                            <li data-tags="white">
                              <div className="uk-card uk-card-default uk-card-body">Item</div>
                            </li>
                            <li data-tags="blue dark">
                              <div className="uk-card uk-card-primary uk-card-body">Item</div>
                            </li>
                            <li data-tags="white">
                              <div className="uk-card uk-card-default uk-card-body">Item</div>
                            </li>
                            <li data-tags="white">
                              <div className="uk-card uk-card-default uk-card-body">Item</div>
                            </li>
                            <li data-tags="black dark">
                              <div className="uk-card uk-card-secondary uk-card-body">Item</div>
                            </li>
                            <li data-tags="black dark">
                              <div className="uk-card uk-card-secondary uk-card-body">Item</div>
                            </li>
                            <li data-tags="blue dark">
                              <div className="uk-card uk-card-primary uk-card-body">Item</div>
                            </li>
                            <li data-tags="black dark">
                              <div className="uk-card uk-card-secondary uk-card-body">Item</div>
                            </li>
                            <li data-tags="blue dark">
                              <div className="uk-card uk-card-primary uk-card-body">Item</div>
                            </li>
                            <li data-tags="white">
                              <div className="uk-card uk-card-default uk-card-body">Item</div>
                            </li>
                            <li data-tags="blue dark">
                              <div className="uk-card uk-card-primary uk-card-body">Item</div>
                            </li>
                            <li data-tags="black dark">
                              <div className="uk-card uk-card-secondary uk-card-body">Item</div>
                            </li>
                          </ul>
                        </div>
                        <div className="mt-lg-4">
                          <button className="Markup-botton button  uk-margin-small-top" type="button" uk-toggle="target: #Meta"> MARKUP</button>
                          <div id="Meta" aria-hidden="true" className="uk-margin-small-top" hidden>
                            <pre><code id="code-jw0fi9wx" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">uk-filter</span>=<span className="hljs-string">"target: .js-filter"</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">ul</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-subnav uk-subnav-pill"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">uk-filter-control</span>=<span className="hljs-string">"[data-tags*='white']"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>White<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">uk-filter-control</span>=<span className="hljs-string">"[data-tags*='blue']"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Blue<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">uk-filter-control</span>=<span className="hljs-string">"[data-tags*='black']"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Black<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">uk-filter-control</span>=<span className="hljs-string">"[data-tags*='dark']"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Dark Colors<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">ul</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">ul</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"js-filter uk-child-width-1-2 uk-child-width-1-3@m uk-text-center"</span> <span className="hljs-attr">uk-grid</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">data-tags</span>=<span className="hljs-string">"white"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-default uk-card-body"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">data-tags</span>=<span className="hljs-string">"blue dark"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-primary uk-card-body"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">data-tags</span>=<span className="hljs-string">"white"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-default uk-card-body"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">data-tags</span>=<span className="hljs-string">"white"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-default uk-card-body"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">data-tags</span>=<span className="hljs-string">"black dark"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-secondary uk-card-body"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">data-tags</span>=<span className="hljs-string">"black dark"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-secondary uk-card-body"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">data-tags</span>=<span className="hljs-string">"blue dark"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-primary uk-card-body"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">data-tags</span>=<span className="hljs-string">"black dark"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-secondary uk-card-body"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">data-tags</span>=<span className="hljs-string">"blue dark"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-primary uk-card-body"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">data-tags</span>=<span className="hljs-string">"white"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-default uk-card-body"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">data-tags</span>=<span className="hljs-string">"blue dark"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-primary uk-card-body"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">data-tags</span>=<span className="hljs-string">"black dark"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-secondary uk-card-body"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">ul</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span></code></pre>
                          </div>
                        </div>
                        <h3 className="uk-margin-medium-top" id="Multiple-Filters"> Multiple Filters </h3>
                        <p> Define different types of meta data and add any number of
                          controls to filter them. The filter controls are exclusive, meaning just one
                          criteria is
                          filtered at a time. </p>
                        <h6> PREVIEW </h6>
                        <div uk-filter="target: .js-filter">
                          <div className="uk-grid-small uk-grid-divider uk-child-width-auto" uk-grid>
                            <div>
                              <ul className="uk-subnav uk-subnav-pill" uk-margin>
                                <li className="uk-active" uk-filter-control><a href="#">All</a></li>
                              </ul>
                            </div>
                            <div>
                              <ul className="uk-subnav uk-subnav-pill" uk-margin>
                                <li uk-filter-control="[data-color='white']"><a href="#">White</a></li>
                                <li uk-filter-control="[data-color='blue']"><a href="#">Blue</a></li>
                                <li uk-filter-control="[data-color='black']"><a href="#">Black</a></li>
                              </ul>
                            </div>
                            <div>
                              <ul className="uk-subnav uk-subnav-pill" uk-margin>
                                <li uk-filter-control="[data-size='small']"><a href="#">Small</a></li>
                                <li uk-filter-control="[data-size='medium']"><a href="#">Medium</a></li>
                                <li uk-filter-control="[data-size='large']"><a href="#">Large</a></li>
                              </ul>
                            </div>
                          </div>
                          <ul className="js-filter uk-child-width-1-2 uk-child-width-1-3@m uk-text-center" uk-grid="masonry: true">
                            <li data-color="white" data-size="large">
                              <div className="uk-card uk-card-default uk-card-body">
                                <canvas width={600} height={800} />
                                <div className="uk-position-center">Item</div>
                              </div>
                            </li>
                            <li data-color="blue" data-size="small">
                              <div className="uk-card uk-card-primary uk-card-body">
                                <canvas width={600} height={400} />
                                <div className="uk-position-center">Item</div>
                              </div>
                            </li>
                            <li data-color="white" data-size="medium">
                              <div className="uk-card uk-card-default uk-card-body">
                                <canvas width={600} height={600} />
                                <div className="uk-position-center">Item</div>
                              </div>
                            </li>
                            <li data-color="white" data-size="small">
                              <div className="uk-card uk-card-default uk-card-body">
                                <canvas width={600} height={400} />
                                <div className="uk-position-center">Item</div>
                              </div>
                            </li>
                            <li data-color="black" data-size="medium">
                              <div className="uk-card uk-card-secondary uk-card-body">
                                <canvas width={600} height={600} />
                                <div className="uk-position-center">Item</div>
                              </div>
                            </li>
                            <li data-color="black" data-size="small">
                              <div className="uk-card uk-card-secondary uk-card-body">
                                <canvas width={600} height={400} />
                                <div className="uk-position-center">Item</div>
                              </div>
                            </li>
                            <li data-color="blue" data-size="medium">
                              <div className="uk-card uk-card-primary uk-card-body">
                                <canvas width={600} height={600} />
                                <div className="uk-position-center">Item</div>
                              </div>
                            </li>
                            <li data-color="black" data-size="large">
                              <div className="uk-card uk-card-secondary uk-card-body">
                                <canvas width={600} height={800} />
                                <div className="uk-position-center">Item</div>
                              </div>
                            </li>
                            <li data-color="blue" data-size="large">
                              <div className="uk-card uk-card-primary uk-card-body">
                                <canvas width={600} height={800} />
                                <div className="uk-position-center">Item</div>
                              </div>
                            </li>
                            <li data-color="white" data-size="large">
                              <div className="uk-card uk-card-default uk-card-body">
                                <canvas width={600} height={800} />
                                <div className="uk-position-center">Item</div>
                              </div>
                            </li>
                            <li data-color="blue" data-size="medium">
                              <div className="uk-card uk-card-primary uk-card-body">
                                <canvas width={600} height={600} />
                                <div className="uk-position-center">Item</div>
                              </div>
                            </li>
                            <li data-color="black" data-size="small">
                              <div className="uk-card uk-card-secondary uk-card-body">
                                <canvas width={600} height={400} />
                                <div className="uk-position-center">Item</div>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="mt-lg-4">
                          <button className="Markup-botton button  uk-margin-small-top" type="button" uk-toggle="target: #Multiple"> MARKUP</button>
                          <div id="Multiple" aria-hidden="true" className="uk-margin-small-top" hidden>
                            <pre><code id="code-jw0fi9wy" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">uk-filter</span>=<span className="hljs-string">"target: .js-filter"</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-grid-small uk-grid-divider uk-child-width-auto"</span> <span className="hljs-attr">uk-grid</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">ul</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-subnav uk-subnav-pill"</span> <span className="hljs-attr">uk-margin</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-active"</span> <span className="hljs-attr">uk-filter-control</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>All<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;/<span className="hljs-name">ul</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">ul</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-subnav uk-subnav-pill"</span> <span className="hljs-attr">uk-margin</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">uk-filter-control</span>=<span className="hljs-string">"[data-color='white']"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>White<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">uk-filter-control</span>=<span className="hljs-string">"[data-color='blue']"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Blue<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">uk-filter-control</span>=<span className="hljs-string">"[data-color='black']"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Black<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;/<span className="hljs-name">ul</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">ul</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-subnav uk-subnav-pill"</span> <span className="hljs-attr">uk-margin</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">uk-filter-control</span>=<span className="hljs-string">"[data-size='small']"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Small<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">uk-filter-control</span>=<span className="hljs-string">"[data-size='medium']"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Medium<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">uk-filter-control</span>=<span className="hljs-string">"[data-size='large']"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Large<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;/<span className="hljs-name">ul</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">ul</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"js-filter uk-child-width-1-2 uk-child-width-1-3@m uk-text-center"</span> <span className="hljs-attr">uk-grid</span>=<span className="hljs-string">"masonry: true"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">data-color</span>=<span className="hljs-string">"white"</span> <span className="hljs-attr">data-size</span>=<span className="hljs-string">"large"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-default uk-card-body"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">canvas</span> <span className="hljs-attr">width</span>=<span className="hljs-string">"600"</span> <span className="hljs-attr">height</span>=<span className="hljs-string">"800"</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">canvas</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-center"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">data-color</span>=<span className="hljs-string">"blue"</span> <span className="hljs-attr">data-size</span>=<span className="hljs-string">"small"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-primary uk-card-body"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">canvas</span> <span className="hljs-attr">width</span>=<span className="hljs-string">"600"</span> <span className="hljs-attr">height</span>=<span className="hljs-string">"400"</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">canvas</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-center"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">data-color</span>=<span className="hljs-string">"white"</span> <span className="hljs-attr">data-size</span>=<span className="hljs-string">"medium"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-default uk-card-body"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">canvas</span> <span className="hljs-attr">width</span>=<span className="hljs-string">"600"</span> <span className="hljs-attr">height</span>=<span className="hljs-string">"600"</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">canvas</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-center"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">data-color</span>=<span className="hljs-string">"white"</span> <span className="hljs-attr">data-size</span>=<span className="hljs-string">"small"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-default uk-card-body"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">canvas</span> <span className="hljs-attr">width</span>=<span className="hljs-string">"600"</span> <span className="hljs-attr">height</span>=<span className="hljs-string">"400"</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">canvas</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-center"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">data-color</span>=<span className="hljs-string">"black"</span> <span className="hljs-attr">data-size</span>=<span className="hljs-string">"medium"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-secondary uk-card-body"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">canvas</span> <span className="hljs-attr">width</span>=<span className="hljs-string">"600"</span> <span className="hljs-attr">height</span>=<span className="hljs-string">"600"</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">canvas</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-center"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">data-color</span>=<span className="hljs-string">"black"</span> <span className="hljs-attr">data-size</span>=<span className="hljs-string">"small"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-secondary uk-card-body"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">canvas</span> <span className="hljs-attr">width</span>=<span className="hljs-string">"600"</span> <span className="hljs-attr">height</span>=<span className="hljs-string">"400"</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">canvas</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-center"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">data-color</span>=<span className="hljs-string">"blue"</span> <span className="hljs-attr">data-size</span>=<span className="hljs-string">"medium"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-primary uk-card-body"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">canvas</span> <span className="hljs-attr">width</span>=<span className="hljs-string">"600"</span> <span className="hljs-attr">height</span>=<span className="hljs-string">"600"</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">canvas</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-center"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">data-color</span>=<span className="hljs-string">"black"</span> <span className="hljs-attr">data-size</span>=<span className="hljs-string">"large"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-secondary uk-card-body"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">canvas</span> <span className="hljs-attr">width</span>=<span className="hljs-string">"600"</span> <span className="hljs-attr">height</span>=<span className="hljs-string">"800"</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">canvas</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-center"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">data-color</span>=<span className="hljs-string">"blue"</span> <span className="hljs-attr">data-size</span>=<span className="hljs-string">"large"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-primary uk-card-body"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">canvas</span> <span className="hljs-attr">width</span>=<span className="hljs-string">"600"</span> <span className="hljs-attr">height</span>=<span className="hljs-string">"800"</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">canvas</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-center"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">data-color</span>=<span className="hljs-string">"white"</span> <span className="hljs-attr">data-size</span>=<span className="hljs-string">"large"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-default uk-card-body"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">canvas</span> <span className="hljs-attr">width</span>=<span className="hljs-string">"600"</span> <span className="hljs-attr">height</span>=<span className="hljs-string">"800"</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">canvas</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-center"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">data-color</span>=<span className="hljs-string">"blue"</span> <span className="hljs-attr">data-size</span>=<span className="hljs-string">"medium"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-primary uk-card-body"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">canvas</span> <span className="hljs-attr">width</span>=<span className="hljs-string">"600"</span> <span className="hljs-attr">height</span>=<span className="hljs-string">"600"</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">canvas</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-center"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">data-color</span>=<span className="hljs-string">"black"</span> <span className="hljs-attr">data-size</span>=<span className="hljs-string">"small"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-secondary uk-card-body"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">canvas</span> <span className="hljs-attr">width</span>=<span className="hljs-string">"600"</span> <span className="hljs-attr">height</span>=<span className="hljs-string">"400"</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">canvas</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-center"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">ul</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span></code></pre>
                          </div>
                        </div>
                        <h3 className="uk-margin-medium-top" id="Groups">Groups</h3>
                        <p>To filter items by multiple criteria at the same time, the
                          filter
                          controls need to be grouped. Just add the <code>group: NAME</code> option to the <code>uk-filter-control</code> attribute and define group names for the meta data. </p>
                        <h6> PREVIEW </h6>
                        <div uk-filter="target: .js-filter">
                          <div className="uk-grid-small uk-grid-divider uk-child-width-auto" uk-grid>
                            <div>
                              <ul className="uk-subnav uk-subnav-pill" uk-margin>
                                <li className="uk-active" uk-filter-control><a href="#">All</a></li>
                              </ul>
                            </div>
                            <div>
                              <ul className="uk-subnav uk-subnav-pill" uk-margin>
                                <li uk-filter-control="filter: [data-color='white']; group: data-color"> <a href="#">White</a></li>
                                <li uk-filter-control="filter: [data-color='blue']; group: data-color"> <a href="#">Blue</a></li>
                                <li uk-filter-control="filter: [data-color='black']; group: data-color"> <a href="#">Black</a></li>
                              </ul>
                            </div>
                            <div>
                              <ul className="uk-subnav uk-subnav-pill" uk-margin>
                                <li uk-filter-control="filter: [data-size='small']; group: size"><a href="#">Small</a> </li>
                                <li uk-filter-control="filter: [data-size='medium']; group: size"><a href="#">Medium</a> </li>
                                <li uk-filter-control="filter: [data-size='large']; group: size"><a href="#">Large</a> </li>
                              </ul>
                            </div>
                          </div>
                          <ul className="js-filter uk-child-width-1-2 uk-child-width-1-3@m uk-text-center" uk-grid="masonry: true">
                            <li data-color="white" data-size="large">
                              <div className="uk-card uk-card-default uk-card-body">
                                <canvas width={600} height={800} />
                                <div className="uk-position-center">Item</div>
                              </div>
                            </li>
                            <li data-color="blue" data-size="small">
                              <div className="uk-card uk-card-primary uk-card-body">
                                <canvas width={600} height={400} />
                                <div className="uk-position-center">Item</div>
                              </div>
                            </li>
                            <li data-color="white" data-size="medium">
                              <div className="uk-card uk-card-default uk-card-body">
                                <canvas width={600} height={600} />
                                <div className="uk-position-center">Item</div>
                              </div>
                            </li>
                            <li data-color="white" data-size="small">
                              <div className="uk-card uk-card-default uk-card-body">
                                <canvas width={600} height={400} />
                                <div className="uk-position-center">Item</div>
                              </div>
                            </li>
                            <li data-color="black" data-size="medium">
                              <div className="uk-card uk-card-secondary uk-card-body">
                                <canvas width={600} height={600} />
                                <div className="uk-position-center">Item</div>
                              </div>
                            </li>
                            <li data-color="black" data-size="small">
                              <div className="uk-card uk-card-secondary uk-card-body">
                                <canvas width={600} height={400} />
                                <div className="uk-position-center">Item</div>
                              </div>
                            </li>
                            <li data-color="blue" data-size="medium">
                              <div className="uk-card uk-card-primary uk-card-body">
                                <canvas width={600} height={600} />
                                <div className="uk-position-center">Item</div>
                              </div>
                            </li>
                            <li data-color="black" data-size="large">
                              <div className="uk-card uk-card-secondary uk-card-body">
                                <canvas width={600} height={800} />
                                <div className="uk-position-center">Item</div>
                              </div>
                            </li>
                            <li data-color="blue" data-size="large">
                              <div className="uk-card uk-card-primary uk-card-body">
                                <canvas width={600} height={800} />
                                <div className="uk-position-center">Item</div>
                              </div>
                            </li>
                            <li data-color="white" data-size="large">
                              <div className="uk-card uk-card-default uk-card-body">
                                <canvas width={600} height={800} />
                                <div className="uk-position-center">Item</div>
                              </div>
                            </li>
                            <li data-color="blue" data-size="medium">
                              <div className="uk-card uk-card-primary uk-card-body">
                                <canvas width={600} height={600} />
                                <div className="uk-position-center">Item</div>
                              </div>
                            </li>
                            <li data-color="black" data-size="small">
                              <div className="uk-card uk-card-secondary uk-card-body">
                                <canvas width={600} height={400} />
                                <div className="uk-position-center">Item</div>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="mt-lg-4">
                          <button className="Markup-botton button  uk-margin-small-top" type="button" uk-toggle="target: #Groupz"> MARKUP</button>
                          <div id="Groupz" aria-hidden="true" className="uk-margin-small-top" hidden>
                            <pre><code id="code-jw0fi9wz" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">uk-filter</span>=<span className="hljs-string">"target: .js-filter"</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-grid-small uk-grid-divider uk-child-width-auto"</span> <span className="hljs-attr">uk-grid</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">ul</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-subnav uk-subnav-pill"</span> <span className="hljs-attr">uk-margin</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-active"</span> <span className="hljs-attr">uk-filter-control</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>All<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;/<span className="hljs-name">ul</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">ul</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-subnav uk-subnav-pill"</span> <span className="hljs-attr">uk-margin</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">uk-filter-control</span>=<span className="hljs-string">"filter: [data-color='white']; group: data-color"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>White<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">uk-filter-control</span>=<span className="hljs-string">"filter: [data-color='blue']; group: data-color"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Blue<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">uk-filter-control</span>=<span className="hljs-string">"filter: [data-color='black']; group: data-color"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Black<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;/<span className="hljs-name">ul</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">ul</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-subnav uk-subnav-pill"</span> <span className="hljs-attr">uk-margin</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">uk-filter-control</span>=<span className="hljs-string">"filter: [data-size='small']; group: size"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Small<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">uk-filter-control</span>=<span className="hljs-string">"filter: [data-size='medium']; group: size"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Medium<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">uk-filter-control</span>=<span className="hljs-string">"filter: [data-size='large']; group: size"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Large<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;/<span className="hljs-name">ul</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">ul</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"js-filter uk-child-width-1-2 uk-child-width-1-3@m uk-text-center"</span> <span className="hljs-attr">uk-grid</span>=<span className="hljs-string">"masonry: true"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">data-color</span>=<span className="hljs-string">"white"</span> <span className="hljs-attr">data-size</span>=<span className="hljs-string">"large"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-default uk-card-body"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">canvas</span> <span className="hljs-attr">width</span>=<span className="hljs-string">"600"</span> <span className="hljs-attr">height</span>=<span className="hljs-string">"800"</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">canvas</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-center"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">data-color</span>=<span className="hljs-string">"blue"</span> <span className="hljs-attr">data-size</span>=<span className="hljs-string">"small"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-primary uk-card-body"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">canvas</span> <span className="hljs-attr">width</span>=<span className="hljs-string">"600"</span> <span className="hljs-attr">height</span>=<span className="hljs-string">"400"</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">canvas</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-center"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">data-color</span>=<span className="hljs-string">"white"</span> <span className="hljs-attr">data-size</span>=<span className="hljs-string">"medium"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-default uk-card-body"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">canvas</span> <span className="hljs-attr">width</span>=<span className="hljs-string">"600"</span> <span className="hljs-attr">height</span>=<span className="hljs-string">"600"</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">canvas</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-center"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">data-color</span>=<span className="hljs-string">"white"</span> <span className="hljs-attr">data-size</span>=<span className="hljs-string">"small"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-default uk-card-body"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">canvas</span> <span className="hljs-attr">width</span>=<span className="hljs-string">"600"</span> <span className="hljs-attr">height</span>=<span className="hljs-string">"400"</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">canvas</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-center"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">data-color</span>=<span className="hljs-string">"black"</span> <span className="hljs-attr">data-size</span>=<span className="hljs-string">"medium"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-secondary uk-card-body"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">canvas</span> <span className="hljs-attr">width</span>=<span className="hljs-string">"600"</span> <span className="hljs-attr">height</span>=<span className="hljs-string">"600"</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">canvas</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-center"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">data-color</span>=<span className="hljs-string">"black"</span> <span className="hljs-attr">data-size</span>=<span className="hljs-string">"small"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-secondary uk-card-body"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">canvas</span> <span className="hljs-attr">width</span>=<span className="hljs-string">"600"</span> <span className="hljs-attr">height</span>=<span className="hljs-string">"400"</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">canvas</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-center"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">data-color</span>=<span className="hljs-string">"blue"</span> <span className="hljs-attr">data-size</span>=<span className="hljs-string">"medium"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-primary uk-card-body"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">canvas</span> <span className="hljs-attr">width</span>=<span className="hljs-string">"600"</span> <span className="hljs-attr">height</span>=<span className="hljs-string">"600"</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">canvas</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-center"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">data-color</span>=<span className="hljs-string">"black"</span> <span className="hljs-attr">data-size</span>=<span className="hljs-string">"large"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-secondary uk-card-body"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">canvas</span> <span className="hljs-attr">width</span>=<span className="hljs-string">"600"</span> <span className="hljs-attr">height</span>=<span className="hljs-string">"800"</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">canvas</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-center"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">data-color</span>=<span className="hljs-string">"blue"</span> <span className="hljs-attr">data-size</span>=<span className="hljs-string">"large"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-primary uk-card-body"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">canvas</span> <span className="hljs-attr">width</span>=<span className="hljs-string">"600"</span> <span className="hljs-attr">height</span>=<span className="hljs-string">"800"</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">canvas</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-center"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">data-color</span>=<span className="hljs-string">"white"</span> <span className="hljs-attr">data-size</span>=<span className="hljs-string">"large"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-default uk-card-body"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">canvas</span> <span className="hljs-attr">width</span>=<span className="hljs-string">"600"</span> <span className="hljs-attr">height</span>=<span className="hljs-string">"800"</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">canvas</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-center"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">data-color</span>=<span className="hljs-string">"blue"</span> <span className="hljs-attr">data-size</span>=<span className="hljs-string">"medium"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-primary uk-card-body"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">canvas</span> <span className="hljs-attr">width</span>=<span className="hljs-string">"600"</span> <span className="hljs-attr">height</span>=<span className="hljs-string">"600"</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">canvas</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-center"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">data-color</span>=<span className="hljs-string">"black"</span> <span className="hljs-attr">data-size</span>=<span className="hljs-string">"small"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-secondary uk-card-body"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">canvas</span> <span className="hljs-attr">width</span>=<span className="hljs-string">"600"</span> <span className="hljs-attr">height</span>=<span className="hljs-string">"400"</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">canvas</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-center"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">ul</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span></code></pre>
                          </div>
                        </div>
                      </div>
                      <div className="uk-width-1-4@s  uk-visible@s">
                        <ul className="uk-list docs-list" uk-sticky="offset:100;media : @m; top:20">
                          <li> <a href="#filter-introductions" uk-scroll> Introduction </a></li>
                          <li> <a href="#Active-state" uk-scroll> Active state </a></li>
                          <li> <a href="#Reset-filter" uk-scroll> Reset filter </a></li>
                          <li> <a href="#Meta-Data" uk-scroll> Meta Data </a></li>
                          <li> <a href="#Multiple-Filters" uk-scroll> Multiple-Filters </a></li>
                          <li> <a href="#Groups" uk-scroll> Groups </a></li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  {/* Lightbox  */}
                  <li>
                    <div className="mt-4 uk-grid-large" uk-grid>
                      <div className="uk-width-3-4@s">
                        <h2> Lightbox</h2>
                        <p className="mb-4"> Create a responsive lightbox gallery with images and videos. </p>
                        <p id="Introd"> The lightbox component is fully responsive and supports touch and
                          swipe navigation, as well as
                          mouse drag for desktops. When swiping between slides the animation literally sticks
                          at your
                          fingertip or mouse cursor. Clicking fast on the previous and next navigation, will
                          make
                          animations even accelerate to keep up with your pace. All animations are hardware
                          accelerated
                          for a smoother performance</p>
                        <h6> Usage</h6>
                        <p> To apply this component, add the <code> uk-lightbox</code> attribute to a container
                          to turn all
                          anchors inside that container into lightbox links. </p>
                        <h6> PREVIEW</h6>
                        <div uk-lightbox> <a className="button uk-button-default" href="https://wpkixx.com/html/socimo/images/elements/dark.jpg">Open
                            Lightbox</a> </div>
                        <div>
                          <button className="Markup-botton button uk-margin-small-top" type="button" uk-toggle="target: #Lightbox"> MARKUP</button>
                          <div id="Lightbox" aria-hidden="true" className=" uk-margin-small-top" hidden>
                            <pre><code id="code-k0p3ae71" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">uk-lightbox</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"button uk-button-default"</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"images/photo.jpg"</span>&gt;</span>Open Lightbox<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span></code></pre>
                          </div>
                        </div>
                        <h3 className="uk-margin-medium-top" id="Caption">Caption</h3>
                        <p>To display a caption at the bottom of the lightbox, set the <code> data-caption</code> attribute
                          on an anchor.</p>
                        <h6> PREVIEW</h6>
                        <div uk-lightbox> <a className="button uk-button-default" href="https://wpkixx.com/html/socimo/images/elements/light.jpg" data-caption="Caption">Open Lightbox </a> </div>
                        <div>
                          <button className="Markup-botton button uk-margin-small-top" type="button" uk-toggle="target: #Lightbox-caption"> MARKUP</button>
                          <div id="Lightbox-caption" aria-hidden="true" className=" uk-margin-small-top" hidden>
                            <pre><code id="code-k0p3ae72" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">uk-lightbox</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"button uk-button-default"</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"images/photo.jpg"</span> <span className="hljs-attr">data-alt</span>=<span className="hljs-string">"Image"</span>&gt;</span>Open Lightbox<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span></code></pre>
                          </div>
                        </div>
                        <h3 className="uk-margin-medium-top" id="Content-sources">Content sources . </h3>
                        <p> A lightbox is not restricted to images. Other media, like videos, can be displayed
                          as well. The
                          video will pause whenever it's not visible and resume once it becomes visible again.
                          To display
                          a poster image for a video, set the data-poster attribute.</p>
                        <h6> PREVIEW</h6>
                        <div uk-lightbox> <a className="button uk-button-default" href="https://wpkixx.com/html/socimo/images/elements/dark.jpg" data-caption="Image">Image</a> <a className="button uk-button-default" href="https://www.youtube.com/watch?v=YE7VzlLtp-4" data-caption="Video">Video</a> <a className="button uk-button-default" href="https://www.youtube.com/watch?v=YE7VzlLtp-4" data-caption="YouTube">YouTube</a> <a className="button uk-button-default" href="https://vimeo.com/1084537" data-caption="Vimeo">Vimeo</a> <a className="button uk-button-default" href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4740.819266853735!2d9.99008871708242!3d53.550454675412404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3f9d24afe84a0263!2sRathaus!5e0!3m2!1sde!2sde!4v1499675200938" data-caption="Google Maps" data-type="iframe">Google Maps</a> </div>
                        <div>
                          <button className="Markup-botton button uk-margin-small-top" type="button" uk-toggle="target: #Lightbox-content"> MARKUP</button>
                          <div id="Lightbox-content" aria-hidden="true" className=" uk-margin-small-top" hidden>
                            <pre><code id="code-k0p3ae75" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">uk-lightbox</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"button uk-button-default"</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"images/photo.jpg"</span> <span className="hljs-attr">data-caption</span>=<span className="hljs-string">"Image"</span>&gt;</span>Image<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"button uk-button-default"</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"https://www.youtube.com/watch?v=YE7VzlLtp-4"</span> <span className="hljs-attr">data-caption</span>=<span className="hljs-string">"Video"</span>&gt;</span>Video<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"button uk-button-default"</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"https://www.youtube.com/watch?v=YE7VzlLtp-4"</span> <span className="hljs-attr">data-caption</span>=<span className="hljs-string">"YouTube"</span>&gt;</span>YouTube<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"button uk-button-default"</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"https://vimeo.com/1084537"</span> <span className="hljs-attr">data-caption</span>=<span className="hljs-string">"Vimeo"</span>&gt;</span>Vimeo<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"button uk-button-default"</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4740.819266853735!2d9.99008871708242!3d53.550454675412404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3f9d24afe84a0263!2sRathaus!5e0!3m2!1sde!2sde!4v1499675200938"</span> <span className="hljs-attr">data-caption</span>=<span className="hljs-string">"Google Maps"</span> <span className="hljs-attr">data-type</span>=<span className="hljs-string">"iframe"</span>&gt;</span>Google Maps<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span></code></pre>
                          </div>
                        </div>
                        <p><span className="uk-label">Note</span> Use <code>youtube-nocookie.com</code> within the
                          YouTube link and the lightbox will use the domain to embed the YouTube video.</p>
                        <h3 className="uk-margin-medium-top" id="animtn">Animation. </h3>
                        <p> By default, the Lightbox gallery uses a slide animation. You
                          can set the <code> animation </code> option to use a different one. Possible values
                          are <code> slide </code>, <code> fade </code> and <code> scale </code>.</p>
                        <div className="uk-h3">Slide</div>
                        <div className="uk-child-width-1-3@m" uk-grid uk-lightbox="animation: slide">
                          <div> <a className="uk-inline" href="https://wpkixx.com/html/socimo/images/elements/light.jpg" data-caption="Caption 1"> <img src="https://wpkixx.com/html/socimo/images/elements/light.jpg" alt /> </a> </div>
                          <div> <a className="uk-inline" href="https://wpkixx.com/html/socimo/images/elements/dark.jpg" data-caption="Caption 2"> <img src="https://wpkixx.com/html/socimo/images/elements/dark.jpg" alt /> </a> </div>
                          <div> <a className="uk-inline" href="https://wpkixx.com/html/socimo/images/elements/image.jpg" data-caption="Caption 3"> <img src="https://wpkixx.com/html/socimo/images/elements/image.jpg" alt /> </a> </div>
                        </div>
                        <div className="uk-h3">Fade</div>
                        <div className="uk-child-width-1-3@m" uk-grid uk-lightbox="animation: fade">
                          <div> <a className="uk-inline" href="https://wpkixx.com/html/socimo/images/elements/light.jpg" data-caption="Caption 1"> <img src="https://wpkixx.com/html/socimo/images/elements/light.jpg" alt /> </a> </div>
                          <div> <a className="uk-inline" href="https://wpkixx.com/html/socimo/images/elements/dark.jpg" data-caption="Caption 2"> <img src="https://wpkixx.com/html/socimo/images/elements/dark.jpg" alt /> </a> </div>
                          <div> <a className="uk-inline" href="https://wpkixx.com/html/socimo/images/elements/image.jpg" data-caption="Caption 3"> <img src="https://wpkixx.com/html/socimo/images/elements/image.jpg" alt /> </a> </div>
                        </div>
                        <div className="uk-h3">Scale</div>
                        <div className="uk-child-width-1-3@m" uk-grid uk-lightbox="animation: scale">
                          <div> <a className="uk-inline" href="https://wpkixx.com/html/socimo/images/elements/light.jpg" data-caption="Caption 1"> <img src="https://wpkixx.com/html/socimo/images/elements/light.jpg" alt /> </a> </div>
                          <div> <a className="uk-inline" href="https://wpkixx.com/html/socimo/images/elements/dark.jpg" data-caption="Caption 2"> <img src="https://wpkixx.com/html/socimo/images/elements/dark.jpg" alt /> </a> </div>
                          <div> <a className="uk-inline" href="https://wpkixx.com/html/socimo/images/elements/image.jpg" data-caption="Caption 3"> <img src="https://wpkixx.com/html/socimo/images/elements/image.jpg" alt /> </a> </div>
                        </div>
                        <div>
                          <button className="Markup-botton button uk-margin-small-top" type="button" uk-toggle="target: #Gridz"> MARKUP</button>
                          <div id="Gridz" aria-hidden="true" className=" uk-margin-small-top" hidden>
                            <pre><code id="code-k0p3ae74" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-h3"</span>&gt;</span>Slide<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-child-width-1-3@m"</span> <span className="hljs-attr">uk-grid</span> <span className="hljs-attr">uk-lightbox</span>=<span className="hljs-string">"animation: slide"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-inline"</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"images/photo.jpg"</span> <span className="hljs-attr">data-caption</span>=<span className="hljs-string">"Caption 1"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">img</span> <span className="hljs-attr">src</span>=<span className="hljs-string">"images/photo.jpg"</span> <span className="hljs-attr">alt</span>=<span className="hljs-string">""</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-inline"</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"images/dark.jpg"</span> <span className="hljs-attr">data-caption</span>=<span className="hljs-string">"Caption 2"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">img</span> <span className="hljs-attr">src</span>=<span className="hljs-string">"images/dark.jpg"</span> <span className="hljs-attr">alt</span>=<span className="hljs-string">""</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-inline"</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"images/light.jpg"</span> <span className="hljs-attr">data-caption</span>=<span className="hljs-string">"Caption 3"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">img</span> <span className="hljs-attr">src</span>=<span className="hljs-string">"images/light.jpg"</span> <span className="hljs-attr">alt</span>=<span className="hljs-string">""</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-h3"</span>&gt;</span>Fade<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-child-width-1-3@m"</span> <span className="hljs-attr">uk-grid</span> <span className="hljs-attr">uk-lightbox</span>=<span className="hljs-string">"animation: fade"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-inline"</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"images/photo.jpg"</span> <span className="hljs-attr">data-caption</span>=<span className="hljs-string">"Caption 1"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">img</span> <span className="hljs-attr">src</span>=<span className="hljs-string">"images/photo.jpg"</span> <span className="hljs-attr">alt</span>=<span className="hljs-string">""</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-inline"</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"images/dark.jpg"</span> <span className="hljs-attr">data-caption</span>=<span className="hljs-string">"Caption 2"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">img</span> <span className="hljs-attr">src</span>=<span className="hljs-string">"images/dark.jpg"</span> <span className="hljs-attr">alt</span>=<span className="hljs-string">""</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-inline"</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"images/light.jpg"</span> <span className="hljs-attr">data-caption</span>=<span className="hljs-string">"Caption 3"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">img</span> <span className="hljs-attr">src</span>=<span className="hljs-string">"images/light.jpg"</span> <span className="hljs-attr">alt</span>=<span className="hljs-string">""</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-h3"</span>&gt;</span>Scale<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-child-width-1-3@m"</span> <span className="hljs-attr">uk-grid</span> <span className="hljs-attr">uk-lightbox</span>=<span className="hljs-string">"animation: scale"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-inline"</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"images/photo.jpg"</span> <span className="hljs-attr">data-caption</span>=<span className="hljs-string">"Caption 1"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">img</span> <span className="hljs-attr">src</span>=<span className="hljs-string">"images/photo.jpg"</span> <span className="hljs-attr">alt</span>=<span className="hljs-string">""</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-inline"</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"images/dark.jpg"</span> <span className="hljs-attr">data-caption</span>=<span className="hljs-string">"Caption 2"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">img</span> <span className="hljs-attr">src</span>=<span className="hljs-string">"images/dark.jpg"</span> <span className="hljs-attr">alt</span>=<span className="hljs-string">""</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-inline"</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"images/light.jpg"</span> <span className="hljs-attr">data-caption</span>=<span className="hljs-string">"Caption 3"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">img</span> <span className="hljs-attr">src</span>=<span className="hljs-string">"images/light.jpg"</span> <span className="hljs-attr">alt</span>=<span className="hljs-string">""</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span></code></pre>
                          </div>
                        </div>
                      </div>
                      <div className="uk-width-1-4@s uk-visible@s">
                        <ul className="uk-list docs-list" uk-sticky="offset:100;media : @m; top:20">
                          <li> <a href="#Introd" uk-scroll> Introduction </a></li>
                          <li> <a href="#Caption" uk-scroll> Caption </a></li>
                          <li> <a href="#Content-sources" uk-scroll> Content sources </a></li>
                          <li> <a href="#animtn" uk-scroll> Animation </a></li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  {/* Modal  */}
                  <li>
                    <div className="mt-4 uk-grid-large" uk-grid>
                      <div className="uk-width-3-4@s">
                        <h2> Modal</h2>
                        <p className="mb-4"> Create modal dialogs with different styles and transitions.</p>
                        <p id="modal-intro">The Modal component consists of an overlay, a dialog and an
                          optional close button. You can use any element to toggle a modal dialog. To enable
                          the necessary JavaScript, add the <code>uk-toggle</code> attribute. An <code>&lt;a&gt;</code> element needs to be linked to the modal's id. If you are
                          using another element, like a button, just add the <code>uk-toggle="target:
                            #ID"</code> attribute to target the id of the modal container.</p>
                        <p>Add the <code>uk-modal</code> attribute to a <code>&lt;div&gt;</code> element to
                          create the modal container and an overlay that blanks out the page. It is important
                          to add an <code>id</code> to indicate the element for toggling. Use the following
                          classes to define the modal's sections.</p>
                        <h6> PREVIEW</h6>
                        {/* This is a button toggling the modal */}
                        <button className="button uk-button-default uk-margin-small-right" type="button" uk-toggle="target: #modal-example">Open</button>
                        {/* This is an anchor toggling the modal */} 
                        <a href="#modal-example" uk-toggle>Open</a> 
                        {/* This is the modal */}
                        <div id="modal-example" uk-modal>
                          <div className="uk-modal-dialog uk-modal-body">
                            <h2 className="uk-modal-title">Headline</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                              non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                            <p className="uk-text-right">
                              <button className="button uk-button-default uk-modal-close" type="button">Cancel</button>
                              <button className="button uk-button-primary" type="button">Save</button>
                            </p>
                          </div>
                        </div>
                        <div>
                          <button className="Markup-botton button uk-margin-small-top" type="button" uk-toggle="target: #Modal"> MARKUP</button>
                          <div id="Modal" aria-hidden="true" className=" uk-margin-small-top" hidden>
                            <pre><code id="code-jw0ful8e" className="lang-html hljs xml"><span className="hljs-comment">&lt;!-- This is a button toggling the modal --&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;<span className="hljs-name">button</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"button uk-button-default uk-margin-small-right"</span> <span className="hljs-attr">type</span>=<span className="hljs-string">"button"</span> <span className="hljs-attr">uk-toggle</span>=<span className="hljs-string">"target: #modal-example"</span>&gt;</span>Open<span className="hljs-tag">&lt;/<span className="hljs-name">button</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-comment">&lt;!-- This is an anchor toggling the modal --&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#modal-example"</span> <span className="hljs-attr">uk-toggle</span>&gt;</span>Open<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-comment">&lt;!-- This is the modal --&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">id</span>=<span className="hljs-string">"modal-example"</span> <span className="hljs-attr">uk-modal</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-modal-dialog uk-modal-body"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">h2</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-modal-title"</span>&gt;</span>Headline<span className="hljs-tag">&lt;/<span className="hljs-name">h2</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-text-right"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">button</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"button uk-button-default uk-modal-close"</span> <span className="hljs-attr">type</span>=<span className="hljs-string">"button"</span>&gt;</span>Cancel<span className="hljs-tag">&lt;/<span className="hljs-name">button</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">button</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"button uk-button-primary"</span> <span className="hljs-attr">type</span>=<span className="hljs-string">"button"</span>&gt;</span>Save<span className="hljs-tag">&lt;/<span className="hljs-name">button</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span></code></pre>
                          </div>
                        </div>
                        <h3 className="uk-margin-medium-top" id="Close-btn"> Close button </h3>
                        <p>To create a close button, enable its functionality and add proper styling and
                          positioning, add the <code>.uk-modal-close-default</code> class to an <code>&lt;a&gt;</code> or <code>&lt;button&gt;</code> element. To place the close
                          button outside the modal, add the <code>.uk-modal-close-outside</code> class.</p>
                        <p>Add the <code>uk-close</code> attribute from the Close component to apply a close
                          icon.</p>
                        <h6> PREVIEW</h6>
                        {/* This is a button toggling the modal with the default close button */}
                        <button className="button uk-button-default uk-margin-small-right" type="button" uk-toggle="target: #modal-close-default">Default</button>
                        {/* This is the modal with the default close button */}
                        <div id="modal-close-default" uk-modal>
                          <div className="uk-modal-dialog uk-modal-body">
                            <button className="uk-modal-close-default" type="button" uk-close />
                            <h2 className="uk-modal-title">Default</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                              non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                          </div>
                        </div>
                        {/* This is a button toggling the modal with the outside close button */}
                        <button className="button uk-button-default uk-margin-small-right" type="button" uk-toggle="target: #modal-close-outside">Outside</button>
                        {/* This is the modal with the outside close button */}
                        <div id="modal-close-outside" uk-modal>
                          <div className="uk-modal-dialog uk-modal-body">
                            <button className="uk-modal-close-outside" type="button" uk-close />
                            <h2 className="uk-modal-title">Outside</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                              non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                          </div>
                        </div>
                        <div>
                          <button className="Markup-botton button uk-margin-small-top" type="button" uk-toggle="target: #Modal-Close"> MARKUP</button>
                          <div id="Modal-Close" aria-hidden="true" className=" uk-margin-small-top" hidden>
                            <pre><code id="code-jw0ful8f" className="lang-html hljs xml"><span className="hljs-comment">&lt;!-- This is a button toggling the modal with the default close button --&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;<span className="hljs-name">button</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"button uk-button-default uk-margin-small-right"</span> <span className="hljs-attr">type</span>=<span className="hljs-string">"button"</span> <span className="hljs-attr">uk-toggle</span>=<span className="hljs-string">"target: #modal-close-default"</span>&gt;</span>Default<span className="hljs-tag">&lt;/<span className="hljs-name">button</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-comment">&lt;!-- This is the modal with the default close button --&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">id</span>=<span className="hljs-string">"modal-close-default"</span> <span className="hljs-attr">uk-modal</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-modal-dialog uk-modal-body"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">button</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-modal-close-default"</span> <span className="hljs-attr">type</span>=<span className="hljs-string">"button"</span> <span className="hljs-attr">uk-close</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">button</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">h2</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-modal-title"</span>&gt;</span>Default<span className="hljs-tag">&lt;/<span className="hljs-name">h2</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-comment">&lt;!-- This is a button toggling the modal with the outside close button --&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;<span className="hljs-name">button</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"button uk-button-default uk-margin-small-right"</span> <span className="hljs-attr">type</span>=<span className="hljs-string">"button"</span> <span className="hljs-attr">uk-toggle</span>=<span className="hljs-string">"target: #modal-close-outside"</span>&gt;</span>Outside<span className="hljs-tag">&lt;/<span className="hljs-name">button</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-comment">&lt;!-- This is the modal with the outside close button --&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">id</span>=<span className="hljs-string">"modal-close-outside"</span> <span className="hljs-attr">uk-modal</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-modal-dialog uk-modal-body"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">button</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-modal-close-outside"</span> <span className="hljs-attr">type</span>=<span className="hljs-string">"button"</span> <span className="hljs-attr">uk-close</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">button</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">h2</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-modal-title"</span>&gt;</span>Outside<span className="hljs-tag">&lt;/<span className="hljs-name">h2</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span></code></pre>
                          </div>
                        </div>
                        <h3 className="uk-margin-medium-top" id="Center-modal"> Center modal </h3>
                        <p>To vertically center the modal dialog, you can use the <code> .uk-margin-auto-vertical </code> class from the Margin component. </p>
                        <a className="button uk-button-default" href="#modal-center" uk-toggle>Open</a>
                        <div id="modal-center" className="uk-flex-top" uk-modal>
                          <div className="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
                            <button className="uk-modal-close-default" type="button" uk-close />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                              tempor
                              incididunt
                              ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                              exercitation
                              ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                              dolor in
                              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                              pariatur.
                              Excepteur
                              sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                              mollit anim
                              id
                              est laborum.</p>
                          </div>
                        </div>
                        <div>
                          <button className="Markup-botton button uk-margin-small-top" type="button" uk-toggle="target: #Center-model"> MARKUP</button>
                          <div id="Center-model" aria-hidden="true" className=" uk-margin-small-top" hidden>
                            <pre><code id="code-jw0ful8g" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"button uk-button-default"</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#modal-center"</span> <span className="hljs-attr">uk-toggle</span>&gt;</span>Open<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">id</span>=<span className="hljs-string">"modal-center"</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-flex-top"</span> <span className="hljs-attr">uk-modal</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-modal-dialog uk-modal-body uk-margin-auto-vertical"</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">button</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-modal-close-default"</span> <span className="hljs-attr">type</span>=<span className="hljs-string">"button"</span> <span className="hljs-attr">uk-close</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">button</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span></code></pre>
                          </div>
                        </div>
                        <h3 className="uk-margin-medium-top" id="Header-and-footer"> Header and footer </h3>
                        <p> To divide the modal into different content sections, use the
                          following classes. </p>
                        <a className="button uk-button-default" href="#modal-sections" uk-toggle>Open</a>
                        <div id="modal-sections" uk-modal>
                          <div className="uk-modal-dialog">
                            <button className="uk-modal-close-default" type="button" uk-close />
                            <div className="uk-modal-header">
                              <h2 className="uk-modal-title">Modal Title</h2>
                            </div>
                            <div className="uk-modal-body">
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor
                                incididunt
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                dolor
                                in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur.
                                Excepteur
                                sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                mollit
                                anim
                                id
                                est laborum.</p>
                            </div>
                            <div className="uk-modal-footer uk-text-right">
                              <button className="button uk-button-default small uk-modal-close" type="button">Cancel</button>
                              <button className="button uk-button-primary small" type="button">Save</button>
                            </div>
                          </div>
                        </div>
                        <div>
                          <button className="Markup-botton button uk-margin-small-top" type="button" uk-toggle="target: #Header-n-footer"> MARKUP</button>
                          <div id="Header-n-footer" aria-hidden="true" className="uk-margin-small-top" hidden>
                            <pre><code id="code-jw0ful8h" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"button uk-button-default"</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#modal-sections"</span> <span className="hljs-attr">uk-toggle</span>&gt;</span>Open<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">id</span>=<span className="hljs-string">"modal-sections"</span> <span className="hljs-attr">uk-modal</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-modal-dialog"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">button</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-modal-close-default"</span> <span className="hljs-attr">type</span>=<span className="hljs-string">"button"</span> <span className="hljs-attr">uk-close</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">button</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-modal-header"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">h2</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-modal-title"</span>&gt;</span>Modal Title<span className="hljs-tag">&lt;/<span className="hljs-name">h2</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-modal-body"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-modal-footer uk-text-right"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">button</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"button uk-button-default uk-modal-close"</span> <span className="hljs-attr">type</span>=<span className="hljs-string">"button"</span>&gt;</span>Cancel<span className="hljs-tag">&lt;/<span className="hljs-name">button</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">button</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"button uk-button-primary"</span> <span className="hljs-attr">type</span>=<span className="hljs-string">"button"</span>&gt;</span>Save<span className="hljs-tag">&lt;/<span className="hljs-name">button</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span></code></pre>
                          </div>
                        </div>
                        <h3 className="uk-margin-medium-top" id="Group-modifiers"> Group modifiers. </h3>
                        <p> You can group multiple modals by linking from one to the other and back. Use this to
                          create multistep wizards inside your modals.</p>
                        <h6> PREVIEW</h6>
                        <p uk-margin> <a className="button uk-button-default" href="#modal-group-1" uk-toggle>Modal 1</a> <a className="button uk-button-default" href="#modal-group-2" uk-toggle>Modal 2</a> </p>
                        <div id="modal-group-1" uk-modal>
                          <div className="uk-modal-dialog">
                            <button className="uk-modal-close-default" type="button" uk-close />
                            <div className="uk-modal-header">
                              <h2 className="uk-modal-title">Headline 1</h2>
                            </div>
                            <div className="uk-modal-body">
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                mollit anim id est laborum.</p>
                            </div>
                            <div className="uk-modal-footer uk-text-right">
                              <button className="button uk-button-default uk-modal-close" type="button">Cancel</button>
                              <a href="#modal-group-2" className="button uk-button-primary" uk-toggle>Next</a> </div>
                          </div>
                        </div>
                        <div id="modal-group-2" uk-modal>
                          <div className="uk-modal-dialog">
                            <button className="uk-modal-close-default" type="button" uk-close />
                            <div className="uk-modal-header">
                              <h2 className="uk-modal-title">Headline 2</h2>
                            </div>
                            <div className="uk-modal-body">
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                mollit anim id est laborum.</p>
                            </div>
                            <div className="uk-modal-footer uk-text-right">
                              <button className="button uk-button-default uk-modal-close" type="button">Cancel</button>
                              <a href="#modal-group-1" className="button uk-button-primary" uk-toggle>Previous</a> </div>
                          </div>
                        </div>
                        <div>
                          <button className="Markup-botton button uk-margin-small-top" type="button" uk-toggle="target: #Modal-group"> MARKUP</button>
                          <div id="Modal-group" aria-hidden="true" className=" uk-margin-small-top" hidden>
                            <pre><code id="code-jw0ful8m" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">p</span> <span className="hljs-attr">uk-margin</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"button uk-button-default"</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#modal-group-1"</span> <span className="hljs-attr">uk-toggle</span>&gt;</span>Modal 1<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"button uk-button-default"</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#modal-group-2"</span> <span className="hljs-attr">uk-toggle</span>&gt;</span>Modal 2<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">id</span>=<span className="hljs-string">"modal-group-1"</span> <span className="hljs-attr">uk-modal</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-modal-dialog"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">button</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-modal-close-default"</span> <span className="hljs-attr">type</span>=<span className="hljs-string">"button"</span> <span className="hljs-attr">uk-close</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">button</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-modal-header"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">h2</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-modal-title"</span>&gt;</span>Headline 1<span className="hljs-tag">&lt;/<span className="hljs-name">h2</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-modal-body"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-modal-footer uk-text-right"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">button</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"button uk-button-default uk-modal-close"</span> <span className="hljs-attr">type</span>=<span className="hljs-string">"button"</span>&gt;</span>Cancel<span className="hljs-tag">&lt;/<span className="hljs-name">button</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#modal-group-2"</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"button uk-button-primary"</span> <span className="hljs-attr">uk-toggle</span>&gt;</span>Next<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">id</span>=<span className="hljs-string">"modal-group-2"</span> <span className="hljs-attr">uk-modal</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-modal-dialog"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">button</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-modal-close-default"</span> <span className="hljs-attr">type</span>=<span className="hljs-string">"button"</span> <span className="hljs-attr">uk-close</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">button</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-modal-header"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">h2</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-modal-title"</span>&gt;</span>Headline 2<span className="hljs-tag">&lt;/<span className="hljs-name">h2</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-modal-body"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-modal-footer uk-text-right"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">button</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"button uk-button-default uk-modal-close"</span> <span className="hljs-attr">type</span>=<span className="hljs-string">"button"</span>&gt;</span>Cancel<span className="hljs-tag">&lt;/<span className="hljs-name">button</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#modal-group-1"</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"button uk-button-primary"</span> <span className="hljs-attr">uk-toggle</span>&gt;</span>Previous<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span></code></pre>
                          </div>
                        </div>
                        <h3 className="uk-margin-medium-top" id="Media"> Media. </h3>
                        <p> If you want to display media, you should first check, if the Lightbox component
                          doesn't already offer everything you need. However, you can also use the modal to
                          have more control over the markup to wrap your media in.</p>
                        <p><span className="uk-label">Note</span> Use the <code>uk-video</code> attribute from the <a href="https://getuikit.com/docs/video">Video component</a> to make sure videos
                          are stopped when the modal is closed.</p>
                        <h6> PREVIEW</h6>
                        <p uk-margin> <a className="button uk-button-default" href="#modal-media-image" uk-toggle>Image</a> <a className="button uk-button-default" href="#modal-media-video" uk-toggle>Video</a> <a className="button uk-button-default" href="#modal-media-youtube" uk-toggle>YouTube</a> <a className="button uk-button-default" href="#modal-media-vimeo" uk-toggle>Vimeo</a> </p>
                        <div id="modal-media-image" className="uk-flex-top" uk-modal>
                          <div className="uk-modal-dialog uk-width-auto uk-margin-auto-vertical">
                            <button className="uk-modal-close-outside" type="button" uk-close />
                            <img src="https://wpkixx.com/html/socimo/images/elements/dark.jpg" alt /> </div>
                        </div>
                        <div id="modal-media-video" className="uk-flex-top" uk-modal>
                          <div className="uk-modal-dialog uk-width-auto uk-margin-auto-vertical">
                            <button className="uk-modal-close-outside" type="button" uk-close />
                            <video controls playsInline uk-video>
                              <source src="https://www.youtube.com/watch?v=YE7VzlLtp-4" type="video/mp4" />
                              <source src="https://www.youtube.com/watch?v=YE7VzlLtp-4" type="video/ogg" />
                            </video>
                          </div>
                        </div>
                        <div id="modal-media-youtube" className="uk-flex-top" uk-modal>
                          <div className="uk-modal-dialog uk-width-auto uk-margin-auto-vertical">
                            <button className="uk-modal-close-outside" type="button" uk-close />
                            <iframe src="https://www.youtube-nocookie.com/embed/YE7VzlLtp-4" width={560} height={315} frameBorder={0} uk-video />
                          </div>
                        </div>
                        <div id="modal-media-vimeo" className="uk-flex-top" uk-modal>
                          <div className="uk-modal-dialog uk-width-auto uk-margin-auto-vertical">
                            <button className="uk-modal-close-outside" type="button" uk-close />
                            <iframe src="https://player.vimeo.com/video/1084537" width={500} height={281} frameBorder={0} uk-video />
                          </div>
                        </div>
                        <div>
                          <button className="Markup-botton button uk-margin-small-top" type="button" uk-toggle="target: #Modal-media"> MARKUP</button>
                          <div id="Modal-media" aria-hidden="true" className=" uk-margin-small-top" hidden>
                            <pre><code id="code-jw0ful8l" className="lang-html hljs xml"> <span className="hljs-tag">&lt;<span className="hljs-name">p</span> <span className="hljs-attr">uk-margin</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"button uk-button-default"</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#modal-media-image"</span> <span className="hljs-attr">uk-toggle</span>&gt;</span>Image<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"button uk-button-default"</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#modal-media-video"</span> <span className="hljs-attr">uk-toggle</span>&gt;</span>Video<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"button uk-button-default"</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#modal-media-youtube"</span> <span className="hljs-attr">uk-toggle</span>&gt;</span>YouTube<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"button uk-button-default"</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#modal-media-vimeo"</span> <span className="hljs-attr">uk-toggle</span>&gt;</span>Vimeo<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">id</span>=<span className="hljs-string">"modal-media-image"</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-flex-top"</span> <span className="hljs-attr">uk-modal</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-modal-dialog uk-width-auto uk-margin-auto-vertical"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">button</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-modal-close-outside"</span> <span className="hljs-attr">type</span>=<span className="hljs-string">"button"</span> <span className="hljs-attr">uk-close</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">button</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">img</span> <span className="hljs-attr">src</span>=<span className="hljs-string">"images/photo.jpg"</span> <span className="hljs-attr">alt</span>=<span className="hljs-string">""</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">id</span>=<span className="hljs-string">"modal-media-video"</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-flex-top"</span> <span className="hljs-attr">uk-modal</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-modal-dialog uk-width-auto uk-margin-auto-vertical"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">button</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-modal-close-outside"</span> <span className="hljs-attr">type</span>=<span className="hljs-string">"button"</span> <span className="hljs-attr">uk-close</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">button</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">video</span> <span className="hljs-attr">controls</span> <span className="hljs-attr">playsinline</span> <span className="hljs-attr">uk-video</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">source</span> <span className="hljs-attr">src</span>=<span className="hljs-string">"https://www.youtube.com/watch?v=YE7VzlLtp-4"</span> <span className="hljs-attr">type</span>=<span className="hljs-string">"video/mp4"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">source</span> <span className="hljs-attr">src</span>=<span className="hljs-string">"https://quirksmode.org/html5/videos/big_buck_bunny.ogv"</span> <span className="hljs-attr">type</span>=<span className="hljs-string">"video/ogg"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">video</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">id</span>=<span className="hljs-string">"modal-media-youtube"</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-flex-top"</span> <span className="hljs-attr">uk-modal</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-modal-dialog uk-width-auto uk-margin-auto-vertical"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">button</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-modal-close-outside"</span> <span className="hljs-attr">type</span>=<span className="hljs-string">"button"</span> <span className="hljs-attr">uk-close</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">button</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">iframe</span> <span className="hljs-attr">src</span>=<span className="hljs-string">"https://www.youtube-nocookie.com/embed/YE7VzlLtp-4"</span> <span className="hljs-attr">width</span>=<span className="hljs-string">"560"</span> <span className="hljs-attr">height</span>=<span className="hljs-string">"315"</span> <span className="hljs-attr">frameborder</span>=<span className="hljs-string">"0"</span> <span className="hljs-attr">uk-video</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">iframe</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">id</span>=<span className="hljs-string">"modal-media-vimeo"</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-flex-top"</span> <span className="hljs-attr">uk-modal</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-modal-dialog uk-width-auto uk-margin-auto-vertical"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">button</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-modal-close-outside"</span> <span className="hljs-attr">type</span>=<span className="hljs-string">"button"</span> <span className="hljs-attr">uk-close</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">button</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">iframe</span> <span className="hljs-attr">src</span>=<span className="hljs-string">"https://player.vimeo.com/video/1084537"</span> <span className="hljs-attr">width</span>=<span className="hljs-string">"500"</span> <span className="hljs-attr">height</span>=<span className="hljs-string">"281"</span> <span className="hljs-attr">frameborder</span>=<span className="hljs-string">"0"</span> <span className="hljs-attr">uk-video</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">iframe</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span></code></pre>
                          </div>
                        </div>
                        <h3 className="uk-margin-medium-top" id="Full-modifier">Full modifier </h3>
                        <p> To create a modal, that fills the entire page, add the <code> .uk-modal-full </code> class.
                          It is also recommended to add the <code> .uk-modal-close-full </code> class to the
                          close
                          button, so that it adapts its styling. </p>
                        <p>Using the <a href="https://wpkixx.com/html/socimo/grid.html">grid</a> and width classes, you can create a nice,
                          split fullscreen modal.</p>
                        <a className="button uk-button-default" href="#modal-full" uk-toggle>Open</a>
                        <div id="modal-full" className="uk-modal-full" uk-modal>
                          <div className="uk-modal-dialog">
                            <button className="uk-modal-close-full uk-close-large" type="button" uk-close />
                            <div className="uk-grid-collapse uk-child-width-1-2@s uk-flex-middle" uk-grid>
                              <div className="uk-background-cover" style={{backgroundImage: 'url("https://wpkixx.com/html/socimo/images/elements/image.jpg")'}} uk-height-viewport />
                              <div className="uk-padding-large">
                                <h1>Headline</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                  eiusmod
                                  tempor
                                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                  veniam, quis
                                  nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                  consequat.
                                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                                  cillum dolore
                                  eu
                                  fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                  proident, sunt
                                  in
                                  culpa qui officia deserunt mollit anim id est laborum.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <button className="Markup-botton button uk-margin-small-top" type="button" uk-toggle="target: #Full-modifiers"> MARKUP</button>
                          <div id="Full-modifiers" aria-hidden="true" className="uk-margin-small-top" hidden>
                            <pre><code id="code-jw0ful8j" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"button uk-button-default"</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#modal-full"</span> <span className="hljs-attr">uk-toggle</span>&gt;</span>Open<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">id</span>=<span className="hljs-string">"modal-full"</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-modal-full"</span> <span className="hljs-attr">uk-modal</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-modal-dialog"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">button</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-modal-close-full uk-close-large"</span> <span className="hljs-attr">type</span>=<span className="hljs-string">"button"</span> <span className="hljs-attr">uk-close</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">button</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-grid-collapse uk-child-width-1-2@s uk-flex-middle"</span> <span className="hljs-attr">uk-grid</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-background-cover"</span> <span className="hljs-attr">style</span>=<span className="hljs-string">"background-image: url('images/photo.jpg');"</span> <span className="hljs-attr">uk-height-viewport</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-padding-large"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">h1</span>&gt;</span>Headline<span className="hljs-tag">&lt;/<span className="hljs-name">h1</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span></code></pre>
                          </div>
                        </div>
                        <h3 className="uk-margin-medium-top" id="Overflow"> Overflow</h3>
                        <p> By default, the page will scroll with the modal, if its content exceeds the window
                          height.
                          To apply a scrollbar inside the modal, add the <code> .uk-overflow-auto </code> attribute
                          from the Utility
                          component to the modal body. </p>
                        <a className="button uk-button-default" href="#modal-overflow" uk-toggle>Open</a>
                        <div id="modal-overflow" uk-modal>
                          <div className="uk-modal-dialog">
                            <button className="uk-modal-close-default" type="button" uk-close />
                            <div className="uk-modal-header">
                              <h2 className="uk-modal-title">Headline</h2>
                            </div>
                            <div className="uk-modal-body" uk-overflow-auto>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis
                                nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute
                                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                fugiat
                                nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                                qui
                                officia
                                deserunt mollit anim id est laborum.</p>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis
                                nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute
                                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                fugiat
                                nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                                qui
                                officia
                                deserunt mollit anim id est laborum.</p>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis
                                nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute
                                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                fugiat
                                nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                                qui
                                officia
                                deserunt mollit anim id est laborum.</p>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis
                                nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute
                                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                fugiat
                                nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                                qui
                                officia
                                deserunt mollit anim id est laborum.</p>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis
                                nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute
                                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                fugiat
                                nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                                qui
                                officia
                                deserunt mollit anim id est laborum.</p>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis
                                nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute
                                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                fugiat
                                nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                                qui
                                officia
                                deserunt mollit anim id est laborum.</p>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis
                                nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute
                                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                fugiat
                                nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                                qui
                                officia
                                deserunt mollit anim id est laborum.</p>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis
                                nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute
                                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                fugiat
                                nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                                qui
                                officia
                                deserunt mollit anim id est laborum.</p>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis
                                nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute
                                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                fugiat
                                nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                                qui
                                officia
                                deserunt mollit anim id est laborum.</p>
                            </div>
                            <div className="uk-modal-footer uk-text-right">
                              <button className="button uk-button-default uk-modal-close" type="button">Cancel</button>
                              <button className="button uk-button-primary" type="button">Save</button>
                            </div>
                          </div>
                        </div>
                        <div>
                          <button className="Markup-botton button uk-margin-small-top" type="button" uk-toggle="target: #overflow"> MARKUP</button>
                          <div id="overflow" aria-hidden="true" className="uk-margin-small-top" hidden>
                            <pre><code id="code-jw0ful8k" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"button uk-button-default"</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#modal-overflow"</span> <span className="hljs-attr">uk-toggle</span>&gt;</span>Open<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">id</span>=<span className="hljs-string">"modal-overflow"</span> <span className="hljs-attr">uk-modal</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-modal-dialog"</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">button</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-modal-close-default"</span> <span className="hljs-attr">type</span>=<span className="hljs-string">"button"</span> <span className="hljs-attr">uk-close</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">button</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-modal-header"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">h2</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-modal-title"</span>&gt;</span>Headline<span className="hljs-tag">&lt;/<span className="hljs-name">h2</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-modal-body"</span> <span className="hljs-attr">uk-overflow-auto</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-modal-footer uk-text-right"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">button</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"button uk-button-default uk-modal-close"</span> <span className="hljs-attr">type</span>=<span className="hljs-string">"button"</span>&gt;</span>Cancel<span className="hljs-tag">&lt;/<span className="hljs-name">button</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">button</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"button uk-button-primary"</span> <span className="hljs-attr">type</span>=<span className="hljs-string">"button"</span>&gt;</span>Save<span className="hljs-tag">&lt;/<span className="hljs-name">button</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span></code></pre>
                          </div>
                        </div>
                      </div>
                      <div className="uk-width-1-4@s uk-visible@s">
                        <ul className="uk-list docs-list" uk-sticky="offset:100;media : @m; top:20">
                          <li> <a href="#modal-intro" uk-scroll> Introduction </a></li>
                          <li> <a href="#Close-btn" uk-scroll> Close button </a></li>
                          <li> <a href="#Center-modal" uk-scroll> Center modal </a></li>
                          <li> <a href="#Header-and-footer" uk-scroll> Header and footer </a></li>
                          <li> <a href="#Group-modifiers" uk-scroll> Group modifiers </a></li>
                          <li> <a href="#Media" uk-scroll> Media </a></li>
                          <li> <a href="#Full-modifier" uk-scroll> Full modifier </a></li>
                          <li> <a href="#Overflow" uk-scroll> Overflow </a></li>
                          <li> <a href="#Position" uk-scroll> Position content </a></li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  {/* Notification */}
                  <li>
                    <div className="mt-4 uk-grid-large" uk-grid>
                      <div className="uk-width-3-4@s">
                        <h2> Notification</h2>
                        <p className="mb-4"> Create toggleable notifications that fade out automatically</p>
                        <p id="noti-intro">The notification will not fade out but remain visible when you
                          hover
                          the message until you stop hovering. You can also close the notification by clicking
                          it.</p>
                        <div className="uk-margin-medium">
                          <pre><code className="lang-js hljs javascript">UIkit.notification({"{"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-attr">message</span>: <span className="hljs-string">'my-message!'</span>,{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-attr">status</span>: <span className="hljs-string">'primary'</span>,{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-attr">pos</span>: <span className="hljs-string">'top-right'</span>,{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-attr">timeout</span>: <span className="hljs-number">5000</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"}"});{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-comment">// Shortcuts</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}UIkit.notification(<span className="hljs-string">'My message'</span>);{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}UIkit.notification(<span className="hljs-string">'My message'</span>, status);{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}UIkit.notification(<span className="hljs-string">'My message'</span>, {"{"} <span className="hljs-comment">/* options */</span> {"}"});</code></pre>
                        </div>
                        <button className="button uk-button-default" type="button" onclick="UIkit.notification({message: '<span uk-icon=\'icon: check\'></span> Message with an icon'})"> Click me </button>
                        <h3 className="uk-margin-medium-top" id="HTML-message"> HTML message </h3>
                        <p> You can use HTML inside your notification message, like
                          an icon
                          from the Icon component. </p>
                        <div className="uk-margin-medium">
                          <pre><code className="lang-js hljs javascript">UIkit.notification(<span className="hljs-string">"&lt;span uk-icon='icon: check'&gt;&lt;/span&gt; Message"</span>);</code></pre>
                        </div>
                        <button className="button uk-button-default" type="button" onclick="UIkit.notification({message: '<span uk-icon=\'icon: check\'></span> Message with an icon'})">With
                          icon</button>
                        <h3 className="uk-margin-medium-top" id="HTML-message-with-image">HTML message with image </h3>
                        <button className="button uk-button-default" type="button" onclick="UIkit.notification({message: '<div class=\'uk-text-small uk-grid-small\' uk-grid><div class=\'uk-width-auto\'><img src=https://placehold.it/300x300' class=\'uk-avatar\'></div><div class=\'uk-width-expand\'><h5 class=\'uk-margin-remove-adjacent uk-margin-small-bottom\'> Hey there </h5><p> Hey there I-am Mandy, the notification master. You clicked ...  </p></div></div>'})"> Click me </button>
                        <button className="button uk-button-default" type="button" onclick="UIkit.notification({message: '<div class=\'uk-text-small uk-grid-small bg-gradient-primary uk-light round shadow-primary uk-padding-small\' style=\'margin: -15px ; padding-left:0px \' uk-grid><div class=\'uk-width-auto\'><img src=https://placehold.it/150x150' class=\'uk-avatar\'></div><div class=\'uk-width-expand\'><h5 class=\'uk-margin-remove-adjacent uk-margin-small-bottom\'> Hey there </h5><p> Hey there I-am Mandy, the notification master. You clicked ...  </p></div></div>', pos: 'bottom-right'})"> Click me </button>
                        <h3 className="uk-margin-medium-top" id="noti-position">Position </h3>
                        <p>Add one of the following parameters to adjust the
                          notification's
                          position to different corners. </p>
                        <div className="uk-overflow-auto">
                          <table className="uk-table uk-table-divider">
                            <thead>
                              <tr>
                                <th align="left">Position</th>
                                <th align="left">Code</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td align="left"><code>top-left</code></td>
                                <td align="left"><code>UIkit.notification("...", {'{'}pos:
                                    'top-left'{'}'})</code></td>
                              </tr>
                              <tr>
                                <td align="left"><code>top-center</code></td>
                                <td align="left"><code>UIkit.notification("...", {'{'}pos:
                                    'top-center'{'}'})</code></td>
                              </tr>
                              <tr>
                                <td align="left"><code>top-right</code></td>
                                <td align="left"><code>UIkit.notification("...", {'{'}pos:
                                    'top-right'{'}'})</code></td>
                              </tr>
                              <tr>
                                <td align="left"><code>bottom-left</code></td>
                                <td align="left"><code>UIkit.notification("...", {'{'}pos:
                                    'bottom-left'{'}'})</code></td>
                              </tr>
                              <tr>
                                <td align="left"><code>bottom-center</code></td>
                                <td align="left"><code>UIkit.notification("...", {'{'}pos:
                                    'bottom-center'{'}'})</code></td>
                              </tr>
                              <tr>
                                <td align="left"><code>bottom-right</code></td>
                                <td align="left"><code>UIkit.notification("...", {'{'}pos:
                                    'bottom-right'{'}'})</code></td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <p uk-margin>
                          <button className="button uk-button-default" type="button" onclick="UIkit.notification({message: 'Top Left...', pos: 'top-left'})">Top
                            Left</button>
                          <button className="button uk-button-default" type="button" onclick="UIkit.notification({message: 'Top Center...', pos: 'top-center'})">Top
                            Center</button>
                          <button className="button uk-button-default" type="button" onclick="UIkit.notification({message: 'Top Right...', pos: 'top-right'})">Top
                            Right</button>
                          <br />
                          <button className="button uk-button-default" type="button" onclick="UIkit.notification({message: 'Bottom Left...', pos: 'bottom-left'})">Bottom
                            Left</button>
                          <button className="button uk-button-default" type="button" onclick="UIkit.notification({message: 'Bottom Center...', pos: 'bottom-center'})">Bottom
                            Center</button>
                          <button className="button uk-button-default" type="button" onclick="UIkit.notification({message: 'Bottom Right...', pos: 'bottom-right'})">Bottom
                            Right</button>
                        </p>
                        <h3 className="uk-margin-medium-top" id="style">style </h3>
                        <p> A notification can be styled by adding a status to the
                          message to
                          indicate a primary, success, primary or a danger status. </p>
                        <div className="uk-overflow-auto uk-margin-medium-bottom">
                          <table className="uk-table uk-table-divider">
                            <thead>
                              <tr>
                                <th align="left">Style</th>
                                <th align="left">Code</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td align="left"><code>primary</code></td>
                                <td align="left"><code>UIkit.notification("...",
                                    {'{'}status:'primary'{'}'})</code></td>
                              </tr>
                              <tr>
                                <td align="left"><code>success</code></td>
                                <td align="left"><code>UIkit.notification("...",
                                    {'{'}status:'success'{'}'})</code></td>
                              </tr>
                              <tr>
                                <td align="left"><code>primary</code></td>
                                <td align="left"><code>UIkit.notification("...",
                                    {'{'}status:'primary'{'}'})</code></td>
                              </tr>
                              <tr>
                                <td align="left"><code>danger</code></td>
                                <td align="left"><code>UIkit.notification("...",
                                    {'{'}status:'danger'{'}'})</code></td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <p uk-margin>
                          <button className="button uk-button-default demo" type="button" onclick="UIkit.notification({message: 'Primary message...', status: 'primary'})">Primary</button>
                          <button className="button uk-button-default demo" type="button" onclick="UIkit.notification({message: 'Success message...', status: 'success'})">Success</button>
                          <button className="button uk-button-default demo" type="button" onclick="UIkit.notification({message: 'primary message...', status: 'primary'})">primary</button>
                          <button className="button uk-button-default demo" type="button" onclick="UIkit.notification({message: 'Danger message...', status: 'danger'})">Danger</button>
                        </p>
                        <h3 className="uk-margin-medium-top" id="Close-all"> Close all </h3>
                        <p>You can close all open notifications by calling <code>UIkit.notification.closeAll()</code>.</p>
                        <button className="button uk-button-default close" onclick="UIkit.notification.closeAll()">Close
                          All</button>
                      </div>
                      <div className="uk-width-1-4@s uk-visible@s">
                        <ul className="uk-list docs-list" uk-sticky="offset:100;media : @m; top:20">
                          <li> <a href="#noti-intro" uk-scroll> Introduction </a></li>
                          <li> <a href="#HTML-message" uk-scroll> HTML message </a></li>
                          <li> <a href="#HTML-message-with-image" uk-scroll> Message with image </a></li>
                          <li> <a href="#noti-position" uk-scroll> Position </a></li>
                          <li> <a href="#style" uk-scroll> style </a></li>
                          <li> <a href="#Close-all" uk-scroll> Close-all </a></li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  {/* Off canvas */}
                  <li>
                    <div className="mt-4 uk-grid-large" uk-grid>
                      <div className="uk-width-3-4@s" id="offcanvas-intro">
                        <h2> Off canvas</h2>
                        <p className="mb-4"> Create an off-canvas sidebar that slides in and out of the page, which
                          is perfect for creating mobile navigations.</p>
                        <p> You can use any element to toggle an off-canvas sidebar.
                          To
                          enable the necessary JavaScript, add the <code>uk-toggle</code> attribute. An <code>&lt;a&gt;</code> element needs to be linked to the id of the off-canvas
                          container. If
                          you are using another element, like a button, just add the <code>uk-toggle="target:
                            #ID"</code> attribute to target the id of the off-canvas container. </p>
                        <button className="button uk-button-default uk-margin-small-right" type="button" uk-toggle="target: #offcanvas-usage">Open</button>
                        <a href="#offcanvas-usage" uk-toggle>Open</a>
                        <div id="offcanvas-usage" uk-offcanvas>
                          <div className="uk-offcanvas-bar bg-primary">
                            <button className="uk-offcanvas-close" type="button" uk-close />
                            <h3>Title</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                              tempor
                              incididunt
                              ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                              exercitation
                              ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                          </div>
                        </div>
                        <div>
                          <button className="Markup-botton button uk-margin-small-top" type="button" uk-toggle="target: #basico"> MARKUP</button>
                          <div id="basico" aria-hidden="true" className="uk-margin-small-top" hidden>
                            <pre><code id="code-jw0fwyfg" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">button</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"button uk-button-default uk-margin-small-right"</span> <span className="hljs-attr">type</span>=<span className="hljs-string">"button"</span> <span className="hljs-attr">uk-toggle</span>=<span className="hljs-string">"target: #offcanvas-usage"</span>&gt;</span>Open<span className="hljs-tag">&lt;/<span className="hljs-name">button</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#offcanvas-usage"</span> <span className="hljs-attr">uk-toggle</span>&gt;</span>Open<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">id</span>=<span className="hljs-string">"offcanvas-usage"</span> <span className="hljs-attr">uk-offcanvas</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-offcanvas-bar"</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">button</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-offcanvas-close"</span> <span className="hljs-attr">type</span>=<span className="hljs-string">"button"</span> <span className="hljs-attr">uk-close</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">button</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">h3</span>&gt;</span>Title<span className="hljs-tag">&lt;/<span className="hljs-name">h3</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span></code></pre>
                          </div>
                        </div>
                        <h3 className="uk-margin-medium-top" id="Overlay">Overlay</h3>
                        <p> To add an overlay, blanking out the page, add the <code className="bg-white">overlay:
                            true</code> parameter to the <code className="bg-white">uk-offcanvas</code> attribute.</p>
                        <button className="button uk-button-default" type="button" uk-toggle="target: #offcanvas-overlay">Open</button>
                        <div id="offcanvas-overlay" uk-offcanvas="overlay: true">
                          <div className="uk-offcanvas-bar">
                            <button className="uk-offcanvas-close" type="button" uk-close />
                            <h3>Title</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                              tempor
                              incididunt
                              ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                              exercitation
                              ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                          </div>
                        </div>
                        <div>
                          <button className="Markup-botton button uk-margin-small-top" type="button" uk-toggle="target: #overlay"> MARKUP</button>
                          <div id="overlay" aria-hidden="true" className="uk-margin-small-top" hidden>
                            <pre><code id="code-jw0fwyfh" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">button</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"button uk-button-default"</span> <span className="hljs-attr">type</span>=<span className="hljs-string">"button"</span> <span className="hljs-attr">uk-toggle</span>=<span className="hljs-string">"target: #offcanvas-overlay"</span>&gt;</span>Open<span className="hljs-tag">&lt;/<span className="hljs-name">button</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">id</span>=<span className="hljs-string">"offcanvas-overlay"</span> <span className="hljs-attr">uk-offcanvas</span>=<span className="hljs-string">"overlay: true"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-offcanvas-bar"</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">button</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-offcanvas-close"</span> <span className="hljs-attr">type</span>=<span className="hljs-string">"button"</span> <span className="hljs-attr">uk-close</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">button</span>&gt;</span>{"\n"}{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">h3</span>&gt;</span>Title<span className="hljs-tag">&lt;/<span className="hljs-name">h3</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span></code></pre>
                          </div>
                        </div>
                        <h3 className="uk-margin-medium-top" id="Flip-modifier">Flip modifier</h3>
                        <p> Add the <code>flip: true</code> parameter to the <code>uk-offcanvas</code> attribute to adjust its alignment, so that it slides in
                          from the
                          right.</p>
                        <button className="button uk-button-default" type="button" uk-toggle="target: #offcanvas-flip">Open</button>
                        <div id="offcanvas-flip" uk-offcanvas="flip: true; overlay: true">
                          <div className="uk-offcanvas-bar">
                            <button className="uk-offcanvas-close" type="button" uk-close />
                            <h3>Title</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                              tempor
                              incididunt
                              ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                              exercitation
                              ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                          </div>
                        </div>
                        <div>
                          <button className="Markup-botton button uk-margin-small-top" type="button" uk-toggle="target: #Flip"> MARKUP</button>
                          <div id="Flip" aria-hidden="true" className="uk-margin-small-top" hidden>
                            <pre><code id="code-jw0fwyfi" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">button</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"button uk-button-default"</span> <span className="hljs-attr">type</span>=<span className="hljs-string">"button"</span> <span className="hljs-attr">uk-toggle</span>=<span className="hljs-string">"target: #offcanvas-flip"</span>&gt;</span>Open<span className="hljs-tag">&lt;/<span className="hljs-name">button</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">id</span>=<span className="hljs-string">"offcanvas-flip"</span> <span className="hljs-attr">uk-offcanvas</span>=<span className="hljs-string">"flip: true; overlay: true"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-offcanvas-bar"</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">button</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-offcanvas-close"</span> <span className="hljs-attr">type</span>=<span className="hljs-string">"button"</span> <span className="hljs-attr">uk-close</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">button</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">h3</span>&gt;</span>Title<span className="hljs-tag">&lt;/<span className="hljs-name">h3</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span></code></pre>
                          </div>
                        </div>
                        <h3 className="uk-margin-medium-top" id="Animation-modes"> Animation modes</h3>
                        <p> By default, the off-canvas slides in. But you can
                          actually choose
                          between different animation modes for the off-canvas' entrance. Just add one of the
                          following attributes</p>
                        <div className="uk-margin-medium">
                          <pre><code className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">id</span>=<span className="hljs-string">"my-id"</span> <span className="hljs-attr">uk-offcanvas</span>=<span className="hljs-string">"mode: push"</span>&gt;</span>...<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span></code></pre>
                        </div>
                        <div className="uk-overflow-auto uk-margin-medium-bottom">
                          <table className="uk-table uk-table-divider">
                            <thead>
                              <tr>
                                <th align="left">Parameter</th>
                                <th align="left">Description</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td align="left"><code>mode: slide</code></td>
                                <td align="left">The off-canvas slides out and overlays the content.
                                  This is
                                  the
                                  default mode.</td>
                              </tr>
                              <tr>
                                <td align="left"><code>mode: push</code></td>
                                <td align="left">The off-canvas slides out and pushes the site.</td>
                              </tr>
                              <tr>
                                <td align="left"><code>mode: reveal</code></td>
                                <td align="left">The off-canvas slides out and reveals its content while
                                  pushing the
                                  site.</td>
                              </tr>
                              <tr>
                                <td align="left"><code>mode: none</code></td>
                                <td align="left">The off-canvas appears and overlays the content without
                                  an
                                  animation.</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <button className="button uk-button-default uk-margin-small-right" type="button" uk-toggle="target: #offcanvas-slide">Slide</button>
                        <button className="button uk-button-default uk-margin-small-right" type="button" uk-toggle="target: #offcanvas-push">Push</button>
                        <button className="button uk-button-default uk-margin-small-right" type="button" uk-toggle="target: #offcanvas-reveal">Reveal</button>
                        <button className="button uk-button-default uk-margin-small-right" type="button" uk-toggle="target: #offcanvas-none">None</button>
                        <div id="offcanvas-slide" uk-offcanvas="overlay: true">
                          <div className="uk-offcanvas-bar">
                            <button className="uk-offcanvas-close" type="button" uk-close />
                            <h3>Title</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                              tempor
                              incididunt
                              ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                              exercitation
                              ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                          </div>
                        </div>
                        <div id="offcanvas-push" uk-offcanvas="mode: push; overlay: true">
                          <div className="uk-offcanvas-bar">
                            <button className="uk-offcanvas-close" type="button" uk-close />
                            <h3>Title</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                              tempor
                              incididunt
                              ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                              exercitation
                              ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                          </div>
                        </div>
                        <div id="offcanvas-reveal" uk-offcanvas="mode: reveal; overlay: true">
                          <div className="uk-offcanvas-bar">
                            <button className="uk-offcanvas-close" type="button" uk-close />
                            <h3>Title</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                              tempor
                              incididunt
                              ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                              exercitation
                              ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                          </div>
                        </div>
                        <div id="offcanvas-none" uk-offcanvas="mode: none; overlay: true">
                          <div className="uk-offcanvas-bar">
                            <button className="uk-offcanvas-close" type="button" uk-close />
                            <h3>Title</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                              tempor
                              incididunt
                              ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                              exercitation
                              ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                          </div>
                        </div>
                        <div>
                          <button className="Markup-botton button uk-margin-small-top" type="button" uk-toggle="target: #Animate"> MARKUP</button>
                          <div id="Animate" aria-hidden="true" className="uk-margin-small-top" hidden>
                            <pre><code id="code-jw0fwyfj" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">button</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"button uk-button-default uk-margin-small-right"</span> <span className="hljs-attr">type</span>=<span className="hljs-string">"button"</span> <span className="hljs-attr">uk-toggle</span>=<span className="hljs-string">"target: #offcanvas-slide"</span>&gt;</span>Slide<span className="hljs-tag">&lt;/<span className="hljs-name">button</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;<span className="hljs-name">button</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"button uk-button-default uk-margin-small-right"</span> <span className="hljs-attr">type</span>=<span className="hljs-string">"button"</span> <span className="hljs-attr">uk-toggle</span>=<span className="hljs-string">"target: #offcanvas-push"</span>&gt;</span>Push<span className="hljs-tag">&lt;/<span className="hljs-name">button</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;<span className="hljs-name">button</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"button uk-button-default uk-margin-small-right"</span> <span className="hljs-attr">type</span>=<span className="hljs-string">"button"</span> <span className="hljs-attr">uk-toggle</span>=<span className="hljs-string">"target: #offcanvas-reveal"</span>&gt;</span>Reveal<span className="hljs-tag">&lt;/<span className="hljs-name">button</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;<span className="hljs-name">button</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"button uk-button-default uk-margin-small-right"</span> <span className="hljs-attr">type</span>=<span className="hljs-string">"button"</span> <span className="hljs-attr">uk-toggle</span>=<span className="hljs-string">"target: #offcanvas-none"</span>&gt;</span>None<span className="hljs-tag">&lt;/<span className="hljs-name">button</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">id</span>=<span className="hljs-string">"offcanvas-slide"</span> <span className="hljs-attr">uk-offcanvas</span>=<span className="hljs-string">"overlay: true"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-offcanvas-bar"</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">button</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-offcanvas-close"</span> <span className="hljs-attr">type</span>=<span className="hljs-string">"button"</span> <span className="hljs-attr">uk-close</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">button</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">h3</span>&gt;</span>Title<span className="hljs-tag">&lt;/<span className="hljs-name">h3</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">id</span>=<span className="hljs-string">"offcanvas-push"</span> <span className="hljs-attr">uk-offcanvas</span>=<span className="hljs-string">"mode: push; overlay: true"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-offcanvas-bar"</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">button</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-offcanvas-close"</span> <span className="hljs-attr">type</span>=<span className="hljs-string">"button"</span> <span className="hljs-attr">uk-close</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">button</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">h3</span>&gt;</span>Title<span className="hljs-tag">&lt;/<span className="hljs-name">h3</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">id</span>=<span className="hljs-string">"offcanvas-reveal"</span> <span className="hljs-attr">uk-offcanvas</span>=<span className="hljs-string">"mode: reveal; overlay: true"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-offcanvas-bar"</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">button</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-offcanvas-close"</span> <span className="hljs-attr">type</span>=<span className="hljs-string">"button"</span> <span className="hljs-attr">uk-close</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">button</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">h3</span>&gt;</span>Title<span className="hljs-tag">&lt;/<span className="hljs-name">h3</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">id</span>=<span className="hljs-string">"offcanvas-none"</span> <span className="hljs-attr">uk-offcanvas</span>=<span className="hljs-string">"mode: none; overlay: true"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-offcanvas-bar"</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">button</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-offcanvas-close"</span> <span className="hljs-attr">type</span>=<span className="hljs-string">"button"</span> <span className="hljs-attr">uk-close</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">button</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">h3</span>&gt;</span>Title<span className="hljs-tag">&lt;/<span className="hljs-name">h3</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span></code></pre>
                          </div>
                        </div>
                        <h3 className="uk-margin-medium-top" id="side-nav"> Side nav </h3>
                        <p> You can use the Side nav inside an off-canvas to create a mobile navigation or
                          Custom navigation</p>
                        <button className="button uk-button-default uk-margin-small-right" type="button" uk-toggle="target: #offcanvas-navigation">Open</button>
                        <a href="#offcanvas-navigation" uk-toggle>Open</a>
                        <div id="offcanvas-navigation" uk-offcanvas>
                          <div className="uk-offcanvas-bar bg-primary">
                            <button className="uk-offcanvas-close uk-icon-button" type="button" uk-close />
                            <div className="side-nav">
                              <div className="side-nav-title"> Main Navigation </div>
                              <ul>
                                <li> <a href="#"> <i className="far fa-home" /> Homepage</a></li>
                                <li> <a href="#"> <i className="far fa-shopping-cart" /> Shop</a></li>
                                <li> <a href="#"> <i className="far fa-file" /> Pages</a></li>
                                <li> <a href="#"> <i className="far fa-file-alt" /> Blog</a></li>
                                <li> <a href="#"> <i className="far fa-map" /> Contact</a></li>
                                <li> <a href="#"> <i className="far fa-comment-alt" /> help</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div>
                          <button className="Markup-botton button uk-margin-small-top" type="button" uk-toggle="target: #side-navs"> MARKUP</button>
                          <div id="side-navs" aria-hidden="true" className="uk-margin-small-top" hidden>
                            <pre><code id="code-k0rqc7a2" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-child-width-1-3@s uk-text-center"</span> <span className="hljs-attr">uk-grid</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#offcanvas-navigation"</span> <span className="hljs-attr">uk-toggle</span>&gt;</span>Open<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">id</span>=<span className="hljs-string">"offcanvas-navigation"</span> <span className="hljs-attr">uk-offcanvas</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-offcanvas-bar bg-primary uk-padding-remove"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">button</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-offcanvas-close uk-icon-button"</span> <span className="hljs-attr">type</span>=<span className="hljs-string">"button"</span> <span className="hljs-attr">uk-close</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">button</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"side-nav"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"side-nav-title"</span>&gt;</span> Main Navigation <span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">ul</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span> <span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span> <span className="hljs-tag">&lt;<span className="hljs-name">i</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"far fa-home"</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">i</span>&gt;</span> Homepage<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span> <span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span> <span className="hljs-tag">&lt;<span className="hljs-name">i</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"far fa-shopping-cart"</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">i</span>&gt;</span> Shop<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span> <span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span> <span className="hljs-tag">&lt;<span className="hljs-name">i</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"far fa-file"</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">i</span>&gt;</span> Pages<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span> <span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span> <span className="hljs-tag">&lt;<span className="hljs-name">i</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"far fa-file-alt"</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">i</span>&gt;</span> Blog<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span> <span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span> <span className="hljs-tag">&lt;<span className="hljs-name">i</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"far fa-map"</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">i</span>&gt;</span> Contact<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span> <span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span> <span className="hljs-tag">&lt;<span className="hljs-name">i</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"far fa-comment-alt"</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">i</span>&gt;</span> help<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;/<span className="hljs-name">ul</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span></code></pre>
                          </div>
                        </div>
                      </div>
                      <div className="uk-width-1-4@s uk-visible@s">
                        <ul className="uk-list docs-list" uk-sticky="offset:100;media : @m; top:20">
                          <li> <a href="#offcanvas-intro" uk-scroll> Introduction </a></li>
                          <li> <a href="#Overlay" uk-scroll> Overlay </a></li>
                          <li> <a href="#Flip-modifier" uk-scroll> Flip modifier </a></li>
                          <li> <a href="#Animation-modes" uk-scroll> Animation modes </a></li>
                          <li> <a href="#side-nav" uk-scroll> Side nav </a></li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  {/* Scrollspy  */}
                  <li>
                    <div className="mt-4 uk-grid-large" uk-grid>
                      <div className="uk-width-3-4@s">
                        <h2> Scrollspy </h2>
                        <p className="mb-4"> Trigger events and animations while scrolling your page. </p>
                        <p id="scroll-basic">The Scrollspy component listens to page scrolling and
                          trigger
                          events based on the scroll position. For example, if you scroll down a page, and an
                          element
                          appears in the viewport for the first time, you can trigger a smooth animation to
                          fade in
                          the element. Just add the uk-scrollspy attribute which takes the following options. </p>
                        <div className="uk-child-width-1-2@m uk-grid-match  uk-margin-large" uk-grid>
                          <div>
                            <div className="uk-card uk-card-default uk-card-body" uk-scrollspy="cls: uk-animation-slide-left; repeat: true">
                              <h4 className="uk-card-title">Left</h4>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                          </div>
                          <div>
                            <div className="uk-card uk-card-default uk-card-body" uk-scrollspy="cls: uk-animation-slide-right; repeat: true">
                              <h4 className="uk-card-title">Right</h4>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                          </div>
                        </div>
                        <div>
                          <button className="Markup-botton button uk-margin-small-top" type="button" uk-toggle="target: #basicz"> MARKUP</button>
                          <div id="basicz" aria-hidden="true" className="uk-margin-small-top" hidden>
                            <pre><code id="code-jw0g13hv" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-child-width-1-2@m uk-grid-match"</span> <span className="hljs-attr">uk-grid</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-default uk-card-body"</span> <span className="hljs-attr">uk-scrollspy</span>=<span className="hljs-string">"cls: uk-animation-slide-left; repeat: true"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">h3</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card-title"</span>&gt;</span>Left<span className="hljs-tag">&lt;/<span className="hljs-name">h3</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-default uk-card-body"</span> <span className="hljs-attr">uk-scrollspy</span>=<span className="hljs-string">"cls: uk-animation-slide-right; repeat: true"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">h3</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card-title"</span>&gt;</span>Right<span className="hljs-tag">&lt;/<span className="hljs-name">h3</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span></code></pre>
                          </div>
                        </div>
                        <br />
                        <p>This example uses the <code>repeat: true</code> option. Scroll up and down to see the
                          triggered
                          animations. The layout is made with the <a href="http://demo.foxthemes.net/elements/card.html">Card
                            component</a>. </p>
                        <h3 className="uk-margin-medium-top" id="scroll-groups">Groups </h3>
                        <pre><code className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">uk-scrollspy</span>=<span className="hljs-string">"target: &gt; div; cls: uk-animation-fade; delay: 500"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span></code></pre>
                        <p>You can also group scrollspy elements, so you won't have
                          to apply
                          the attribute to each of them. Just add the <code>uk-scrollspy="target:
                            SELECTOR"</code> attribute to a container element, targeting the selector of the items you want
                          to
                          animate
                          inside the container. When using a delay, it will be applied cumulatively to the
                          items that
                          scroll into view.. </p>
                        <div className="uk-child-width-1-2@m uk-margin-large" uk-grid uk-scrollspy="cls: uk-animation-fade; target: .uk-card; delay: 500; repeat: true">
                          <div>
                            <div className="uk-card uk-card-default uk-card-body">
                              <h4 className="uk-card-title">Fade</h4>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                          </div>
                          <div>
                            <div className="uk-card uk-card-default uk-card-body">
                              <h4 className="uk-card-title">Fade</h4>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                          </div>
                          <div>
                            <div className="uk-card uk-card-default uk-card-body">
                              <h4 className="uk-card-title">Fade</h4>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                          </div>
                          <div>
                            <div className="uk-card uk-card-default uk-card-body">
                              <h4 className="uk-card-title">Fade</h4>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                          </div>
                          <div>
                            <div className="uk-card uk-card-default uk-card-body">
                              <h4 className="uk-card-title">Fade</h4>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                          </div>
                          <div>
                            <div className="uk-card uk-card-default uk-card-body">
                              <h4 className="uk-card-title">Fade</h4>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                          </div>
                        </div>
                        <div>
                          <button className="Markup-botton button uk-margin-small-top" type="button" uk-toggle="target: #Groups"> MARKUP</button>
                          <div aria-hidden="true" className="uk-margin-small-top" hidden>
                            <pre><code id="code-jw0g13hw" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-child-width-1-3@m"</span> <span className="hljs-attr">uk-grid</span> <span className="hljs-attr">uk-scrollspy</span>=<span className="hljs-string">"cls: uk-animation-fade; target: .uk-card; delay: 500; repeat: true"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-default uk-card-body"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">h3</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card-title"</span>&gt;</span>Fade<span className="hljs-tag">&lt;/<span className="hljs-name">h3</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-default uk-card-body"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">h3</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card-title"</span>&gt;</span>Fade<span className="hljs-tag">&lt;/<span className="hljs-name">h3</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-default uk-card-body"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">h3</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card-title"</span>&gt;</span>Fade<span className="hljs-tag">&lt;/<span className="hljs-name">h3</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-default uk-card-body"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">h3</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card-title"</span>&gt;</span>Fade<span className="hljs-tag">&lt;/<span className="hljs-name">h3</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-default uk-card-body"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">h3</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card-title"</span>&gt;</span>Fade<span className="hljs-tag">&lt;/<span className="hljs-name">h3</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-default uk-card-body"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">h3</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card-title"</span>&gt;</span>Fade<span className="hljs-tag">&lt;/<span className="hljs-name">h3</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span></code></pre>
                          </div>
                        </div>
                        <br />
                        <p>This example uses the <code>repeat: true</code> option. Scroll up and down to see
                          the
                          triggered
                          animations. The layout is made with the <a href="http://demo.foxthemes.net/elements/card.html">Card
                            component</a>. </p>
                        <h3 className="uk-margin-medium-top" id="target-element">Set <code>cls</code> option per
                          target </h3>
                        <pre><code className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">uk-scrollspy</span>=<span className="hljs-string">"target: &gt; div; cls: uk-animation-fade; delay: 500"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">uk-scrollspy-class</span>=<span className="hljs-string">"uk-animation-slide-top"</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">uk-scrollspy-class</span>=<span className="hljs-string">"uk-animation-slide-bottom"</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span></code></pre>
                        <p>You can also give each target a separate <code>cls</code> option.
                          Just add the <code>uk-scrollspy-class="CLASS"</code> attribute to a target
                          element.
                          It will
                          override the <code>cls</code> option set on the component </p>
                        <div className="uk-child-width-1-2@m  uk-margin-medium" uk-grid uk-scrollspy="cls: uk-animation-slide-bottom; target: .uk-card; delay: 300; repeat: true">
                          <div>
                            <div className="uk-card uk-card-default uk-card-body">
                              <h4 className="uk-card-title">Bottom</h4>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                          </div>
                          <div>
                            <div className="uk-card uk-card-default uk-card-body" uk-scrollspy-class="uk-animation-slide-top">
                              <h4 className="uk-card-title">Top</h4>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                          </div>
                          <div>
                            <div className="uk-card uk-card-default uk-card-body">
                              <h4 className="uk-card-title">Bottom</h4>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                          </div>
                        </div>
                        <div>
                          <button className="Markup-botton button uk-margin-small-top" type="button" uk-toggle="target: #target-element"> MARKUP</button>
                          <div id="scroll-element" aria-hidden="true" className="uk-margin-small-top" hidden>
                            <pre><code id="code-jw0g13hx" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-child-width-1-3@m"</span> <span className="hljs-attr">uk-grid</span> <span className="hljs-attr">uk-scrollspy</span>=<span className="hljs-string">"cls: uk-animation-slide-bottom; target: .uk-card; delay: 300; repeat: true"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-default uk-card-body"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">h3</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card-title"</span>&gt;</span>Bottom<span className="hljs-tag">&lt;/<span className="hljs-name">h3</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-default uk-card-body"</span> <span className="hljs-attr">uk-scrollspy-class</span>=<span className="hljs-string">"uk-animation-slide-top"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">h3</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card-title"</span>&gt;</span>Top<span className="hljs-tag">&lt;/<span className="hljs-name">h3</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-default uk-card-body"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">h3</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card-title"</span>&gt;</span>Bottom<span className="hljs-tag">&lt;/<span className="hljs-name">h3</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span></code></pre>
                          </div>
                        </div>
                      </div>
                      <div className="uk-width-1-4@s uk-visible@s">
                        <ul className="uk-list docs-list" uk-sticky="offset:100;media : @m; top:20">
                          <li> <a href="#scroll-basic" uk-scroll>Basic Scrollspy </a></li>
                          <li> <a href="#scroll-groups" uk-scroll> Groups </a></li>
                          <li> <a href="#scroll-element" uk-scroll> target element </a></li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  {/*  Tooltip */}
                  <li>
                    <div className="mt-4 uk-grid-large" uk-grid>
                      <div className="uk-width-3-4@s">
                        <h2> Tooltip</h2>
                        <p className="mb-4" id="bg"> Easily create a nice looking tooltip. </p>
                        <p> To apply this component, add the <code>uk-tooltip</code> attribute to an element. You also need to add the <code>title: TEXT</code> option to
                          the
                          attribute, whose value will represent your tooltip's text </p>
                        <div className="uk-margin-medium">
                          <pre><code className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">uk-tooltip</span>=<span className="hljs-string">"title: Hello World"</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span></code></pre>
                        </div>
                        <div uk-margin>
                          <button className="button uk-button-default" uk-tooltip="Hello World">Hover</button>
                        </div>
                        <div>
                          <button className="Markup-botton button uk-margin-small-top" type="button" uk-toggle="target: #Alignment"> MARKUP</button>
                          <div id="Alignment" aria-hidden="true" className="uk-margin-small-top" hidden>
                            <pre><code id="code-jyd3npuh" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">button</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"button uk-button-default"</span> <span className="hljs-attr">uk-tooltip</span>=<span className="hljs-string">"Hello World"</span>&gt;</span>Hover<span className="hljs-tag">&lt;/<span className="hljs-name">button</span>&gt;</span></code></pre>
                          </div>
                        </div>
                        <h3 className="el-title" id="tooltip-alignment"> Alignment</h3>
                        <p> Add one of the following options to the <code> uk-tooltip </code> attribute to adjust the tooltip's alignment. </p>
                        <div className="uk-overflow-auto uk-margin-large">
                          <table className="uk-table uk-table-divider">
                            <thead>
                              <tr>
                                <th align="left">Attribute</th>
                                <th align="left">Description</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td align="left"><code>pos: top</code></td>
                                <td align="left">Aligns the tooltip to the top.</td>
                              </tr>
                              <tr>
                                <td align="left"><code>pos: top-left</code></td>
                                <td align="left">Aligns the tooltip to the top left.</td>
                              </tr>
                              <tr>
                                <td align="left"><code>pos: top-right</code></td>
                                <td align="left">Aligns the tooltip to the top right.</td>
                              </tr>
                              <tr>
                                <td align="left"><code>pos: bottom</code></td>
                                <td align="left">Aligns the tooltip to the bottom.</td>
                              </tr>
                              <tr>
                                <td align="left"><code>pos: bottom-left</code></td>
                                <td align="left">Aligns the tooltip to the bottom left.</td>
                              </tr>
                              <tr>
                                <td align="left"><code>pos: bottom-right</code></td>
                                <td align="left">Aligns the tooltip to the bottom right.</td>
                              </tr>
                              <tr>
                                <td align="left"><code>pos: left</code></td>
                                <td align="left">Aligns the tooltip to the left.</td>
                              </tr>
                              <tr>
                                <td align="left"><code>pos: right</code></td>
                                <td align="left">Aligns the tooltip to the right.</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <p uk-margin>
                          <button className="button uk-button-default" uk-tooltip="Hello World">Top</button>
                          <button className="button uk-button-default" uk-tooltip="title: Hello World; pos: top-left">Top
                            Left</button>
                          <button className="button uk-button-default" uk-tooltip="title: Hello World; pos: top-right">Top
                            Right</button>
                          <button className="button uk-button-default" uk-tooltip="title: Hello World; pos: bottom">Bottom</button>
                          <button className="button uk-button-default" uk-tooltip="title: Hello World; pos: bottom-left">Bottom
                            Left</button>
                          <button className="button uk-button-default" uk-tooltip="title: Hello World; pos: bottom-right">Bottom
                            Right</button>
                          <button className="button uk-button-default" uk-tooltip="title: Hello World; pos: left">Left</button>
                          <button className="button uk-button-default" uk-tooltip="title: Hello World; pos: right">Right</button>
                        </p>
                        <div>
                          <button className="Markup-botton button uk-margin-small-top" type="button" uk-toggle="target: #Alignmentz"> MARKUP</button>
                          <div id="Alignmentz" aria-hidden="true" className="uk-margin-small-top" hidden>
                            <pre><code id="code-jyd3npui" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">p</span> <span className="hljs-attr">uk-margin</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">button</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"button uk-button-default"</span> <span className="hljs-attr">uk-tooltip</span>=<span className="hljs-string">"Hello World"</span>&gt;</span>Top<span className="hljs-tag">&lt;/<span className="hljs-name">button</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">button</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"button uk-button-default"</span> <span className="hljs-attr">uk-tooltip</span>=<span className="hljs-string">"title: Hello World; pos: top-left"</span>&gt;</span>Top Left<span className="hljs-tag">&lt;/<span className="hljs-name">button</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">button</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"button uk-button-default"</span> <span className="hljs-attr">uk-tooltip</span>=<span className="hljs-string">"title: Hello World; pos: top-right"</span>&gt;</span>Top Right<span className="hljs-tag">&lt;/<span className="hljs-name">button</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">button</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"button uk-button-default"</span> <span className="hljs-attr">uk-tooltip</span>=<span className="hljs-string">"title: Hello World; pos: bottom"</span>&gt;</span>Bottom<span className="hljs-tag">&lt;/<span className="hljs-name">button</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">button</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"button uk-button-default"</span> <span className="hljs-attr">uk-tooltip</span>=<span className="hljs-string">"title: Hello World; pos: bottom-left"</span>&gt;</span>Bottom Left<span className="hljs-tag">&lt;/<span className="hljs-name">button</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">button</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"button uk-button-default"</span> <span className="hljs-attr">uk-tooltip</span>=<span className="hljs-string">"title: Hello World; pos: bottom-right"</span>&gt;</span>Bottom Right<span className="hljs-tag">&lt;/<span className="hljs-name">button</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">button</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"button uk-button-default"</span> <span className="hljs-attr">uk-tooltip</span>=<span className="hljs-string">"title: Hello World; pos: left"</span>&gt;</span>Left<span className="hljs-tag">&lt;/<span className="hljs-name">button</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">button</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"button uk-button-default"</span> <span className="hljs-attr">uk-tooltip</span>=<span className="hljs-string">"title: Hello World; pos: right"</span>&gt;</span>Right<span className="hljs-tag">&lt;/<span className="hljs-name">button</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span></code></pre>
                          </div>
                        </div>
                        <h3 className="el-title" id="Delay"> Delay</h3>
                        <p> To apply this component, add the <code>uk-tooltip</code> attribute to an element. You also need to add the <code>title: TEXT</code> option to
                          the
                          attribute, whose value will represent your tooltip's text </p>
                        <div uk-margin>
                          <button className="button uk-button-default" uk-tooltip="title: Hello World; delay: 500">Hover</button>
                        </div>
                        <pre><code id="code-jyd3npuj" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">button</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"button uk-button-default"</span> <span className="hljs-attr">uk-tooltip</span>=<span className="hljs-string">"title: Hello World; delay: 500"</span>&gt;</span>Hover<span className="hljs-tag">&lt;/<span className="hljs-name">button</span>&gt;</span></code></pre>
                      </div>
                      <div className="uk-width-1-4@s uk-visible@s">
                        <ul className="uk-list docs-list" uk-sticky="offset:100;media : @m; top:20">
                          <li> <a href="#bg" uk-scroll> backgrounds </a></li>
                          <li> <a href="#tooltip-alignment" uk-scroll> Alignment </a></li>
                          <li> <a href="#Delay" uk-scroll> Delay </a></li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  {/*  slider */}
                  <li>
                    <div className="mt-4 uk-grid-large" uk-grid>
                      <div className="uk-width-3-4@s">
                        <h2> slider</h2>
                        <p className="mb-4"> Create a responsive carousel slider. </p>
                        <p id="slider-intro">The Slider component is fully responsive and supports touch
                          and swipe navigation as well as mouse drag for desktops. It even accelerates to keep
                          up
                          with your pace when you click through previous and next navigation. All animations
                          are
                          hardware accelerated for a smoother performance.</p>
                        <div className="uk-position-relative uk-visible-toggle uk-light" tabIndex={-1} uk-slider>
                          <ul className="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m">
                            <li> <img src="https://wpkixx.com/html/socimo/images/elements/slider4.jpg" alt />
                              <div className="uk-position-center uk-panel">
                                <h1>1</h1>
                              </div>
                            </li>
                            <li> <img src="https://wpkixx.com/html/socimo/images/elements/slider3.jpg" alt />
                              <div className="uk-position-center uk-panel">
                                <h1>2</h1>
                              </div>
                            </li>
                            <li> <img src="https://wpkixx.com/html/socimo/images/elements/slider2.jpg" alt />
                              <div className="uk-position-center uk-panel">
                                <h1>3</h1>
                              </div>
                            </li>
                            <li> <img src="https://wpkixx.com/html/socimo/images/elements/slider1.jpg" alt />
                              <div className="uk-position-center uk-panel">
                                <h1>4</h1>
                              </div>
                            </li>
                            <li> <img src="https://wpkixx.com/html/socimo/images/elements/slider4.jpg" alt />
                              <div className="uk-position-center uk-panel">
                                <h1>5</h1>
                              </div>
                            </li>
                            <li> <img src="https://wpkixx.com/html/socimo/images/elements/slider3.jpg" alt />
                              <div className="uk-position-center uk-panel">
                                <h1>6</h1>
                              </div>
                            </li>
                            <li> <img src="https://wpkixx.com/html/socimo/images/elements/slider2.jpg" alt />
                              <div className="uk-position-center uk-panel">
                                <h1>7</h1>
                              </div>
                            </li>
                            <li> <img src="https://wpkixx.com/html/socimo/images/elements/slider1.jpg" alt />
                              <div className="uk-position-center uk-panel">
                                <h1>8</h1>
                              </div>
                            </li>
                            <li> <img src="https://wpkixx.com/html/socimo/images/elements/slider4.jpg" alt />
                              <div className="uk-position-center uk-panel">
                                <h1>9</h1>
                              </div>
                            </li>
                            <li> <img src="https://wpkixx.com/html/socimo/images/elements/slider3.jpg" alt />
                              <div className="uk-position-center uk-panel">
                                <h1>10</h1>
                              </div>
                            </li>
                          </ul>
                          <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous" /> <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next" /> </div>
                        <div>
                          <button className="Markup-botton button uk-margin-small-top" type="button" uk-toggle="target: #basicse"> MARKUP</button>
                          <div id="basicse" aria-hidden="true" className="uk-margin-small-top" hidden>
                            <pre><code id="code-jw0g3fnv" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-relative uk-visible-toggle uk-light"</span> <span className="hljs-attr">tabindex</span>=<span className="hljs-string">"-1"</span> <span className="hljs-attr">uk-slider</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">ul</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">img</span> <span className="hljs-attr">src</span>=<span className="hljs-string">"images/slider1.jpg"</span> <span className="hljs-attr">alt</span>=<span className="hljs-string">""</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-center uk-panel"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">h1</span>&gt;</span>1<span className="hljs-tag">&lt;/<span className="hljs-name">h1</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">img</span> <span className="hljs-attr">src</span>=<span className="hljs-string">"images/slider2.jpg"</span> <span className="hljs-attr">alt</span>=<span className="hljs-string">""</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-center uk-panel"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">h1</span>&gt;</span>2<span className="hljs-tag">&lt;/<span className="hljs-name">h1</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">img</span> <span className="hljs-attr">src</span>=<span className="hljs-string">"images/slider3.jpg"</span> <span className="hljs-attr">alt</span>=<span className="hljs-string">""</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-center uk-panel"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">h1</span>&gt;</span>3<span className="hljs-tag">&lt;/<span className="hljs-name">h1</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">img</span> <span className="hljs-attr">src</span>=<span className="hljs-string">"images/slider4.jpg"</span> <span className="hljs-attr">alt</span>=<span className="hljs-string">""</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-center uk-panel"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">h1</span>&gt;</span>4<span className="hljs-tag">&lt;/<span className="hljs-name">h1</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">img</span> <span className="hljs-attr">src</span>=<span className="hljs-string">"images/slider5.jpg"</span> <span className="hljs-attr">alt</span>=<span className="hljs-string">""</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-center uk-panel"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">h1</span>&gt;</span>5<span className="hljs-tag">&lt;/<span className="hljs-name">h1</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">img</span> <span className="hljs-attr">src</span>=<span className="hljs-string">"images/slider1.jpg"</span> <span className="hljs-attr">alt</span>=<span className="hljs-string">""</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-center uk-panel"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">h1</span>&gt;</span>6<span className="hljs-tag">&lt;/<span className="hljs-name">h1</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">img</span> <span className="hljs-attr">src</span>=<span className="hljs-string">"images/slider2.jpg"</span> <span className="hljs-attr">alt</span>=<span className="hljs-string">""</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-center uk-panel"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">h1</span>&gt;</span>7<span className="hljs-tag">&lt;/<span className="hljs-name">h1</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">img</span> <span className="hljs-attr">src</span>=<span className="hljs-string">"images/slider3.jpg"</span> <span className="hljs-attr">alt</span>=<span className="hljs-string">""</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-center uk-panel"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">h1</span>&gt;</span>8<span className="hljs-tag">&lt;/<span className="hljs-name">h1</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">img</span> <span className="hljs-attr">src</span>=<span className="hljs-string">"images/slider4.jpg"</span> <span className="hljs-attr">alt</span>=<span className="hljs-string">""</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-center uk-panel"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">h1</span>&gt;</span>9<span className="hljs-tag">&lt;/<span className="hljs-name">h1</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">img</span> <span className="hljs-attr">src</span>=<span className="hljs-string">"images/slider5.jpg"</span> <span className="hljs-attr">alt</span>=<span className="hljs-string">""</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-center uk-panel"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">h1</span>&gt;</span>10<span className="hljs-tag">&lt;/<span className="hljs-name">h1</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">ul</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-center-left uk-position-small uk-hidden-hover"</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span> <span className="hljs-attr">uk-slidenav-previous</span> <span className="hljs-attr">uk-slider-item</span>=<span className="hljs-string">"previous"</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-center-right uk-position-small uk-hidden-hover"</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span> <span className="hljs-attr">uk-slidenav-next</span> <span className="hljs-attr">uk-slider-item</span>=<span className="hljs-string">"next"</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span></code></pre>
                          </div>
                        </div>
                        <h3 className="el-title" id="Gutter"> Gutter </h3>
                        <p>To apply a gutter to the slider items, use the <a href="http://demo.foxthemes.net/elements/grid.html">Grid
                            component</a> and add the <code>.uk-grid</code> class to the
                          slider. The elements will then be spaced according to the grid gutter. You can use
                          the
                          modifiers like <code>.uk-grid-small</code> to change the gutter.</p>
                        <div className="uk-position-relative uk-visible-toggle uk-light" tabIndex={-1} uk-slider>
                          <ul className="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@m uk-grid">
                            <li> <img src="https://wpkixx.com/html/socimo/images/elements/slider4.jpg" alt />
                              <div className="uk-position-center uk-panel">
                                <h1>1</h1>
                              </div>
                            </li>
                            <li> <img src="https://wpkixx.com/html/socimo/images/elements/slider3.jpg" alt />
                              <div className="uk-position-center uk-panel">
                                <h1>2</h1>
                              </div>
                            </li>
                            <li> <img src="https://wpkixx.com/html/socimo/images/elements/slider2.jpg" alt />
                              <div className="uk-position-center uk-panel">
                                <h1>3</h1>
                              </div>
                            </li>
                            <li> <img src="https://wpkixx.com/html/socimo/images/elements/slider1.jpg" alt />
                              <div className="uk-position-center uk-panel">
                                <h1>4</h1>
                              </div>
                            </li>
                            <li> <img src="https://wpkixx.com/html/socimo/images/elements/slider4.jpg" alt />
                              <div className="uk-position-center uk-panel">
                                <h1>5</h1>
                              </div>
                            </li>
                            <li> <img src="https://wpkixx.com/html/socimo/images/elements/slider3.jpg" alt />
                              <div className="uk-position-center uk-panel">
                                <h1>6</h1>
                              </div>
                            </li>
                            <li> <img src="https://wpkixx.com/html/socimo/images/elements/slider2.jpg" alt />
                              <div className="uk-position-center uk-panel">
                                <h1>7</h1>
                              </div>
                            </li>
                            <li> <img src="https://wpkixx.com/html/socimo/images/elements/slider1.jpg" alt />
                              <div className="uk-position-center uk-panel">
                                <h1>8</h1>
                              </div>
                            </li>
                            <li> <img src="https://wpkixx.com/html/socimo/images/elements/slider4.jpg" alt />
                              <div className="uk-position-center uk-panel">
                                <h1>9</h1>
                              </div>
                            </li>
                            <li> <img src="https://wpkixx.com/html/socimo/images/elements/slider3.jpg" alt />
                              <div className="uk-position-center uk-panel">
                                <h1>10</h1>
                              </div>
                            </li>
                          </ul>
                          <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous" /> <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next" /> </div>
                        <div>
                          <button className="Markup-botton button uk-margin-small-top" type="button" uk-toggle="target: #Guttere"> MARKUP</button>
                          <div id="Guttere" aria-hidden="true" className="uk-margin-small-top" hidden>
                            <pre><code id="code-jw0g3fnw" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-relative uk-visible-toggle uk-light"</span> <span className="hljs-attr">tabindex</span>=<span className="hljs-string">"-1"</span> <span className="hljs-attr">uk-slider</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">ul</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-slider-items uk-child-width-1-2 uk-child-width-1-3@m uk-grid"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-panel"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">img</span> <span className="hljs-attr">src</span>=<span className="hljs-string">"images/slider1.jpg"</span> <span className="hljs-attr">alt</span>=<span className="hljs-string">""</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-center uk-panel"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">h1</span>&gt;</span>1<span className="hljs-tag">&lt;/<span className="hljs-name">h1</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-panel"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">img</span> <span className="hljs-attr">src</span>=<span className="hljs-string">"images/slider2.jpg"</span> <span className="hljs-attr">alt</span>=<span className="hljs-string">""</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-center uk-panel"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">h1</span>&gt;</span>2<span className="hljs-tag">&lt;/<span className="hljs-name">h1</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-panel"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">img</span> <span className="hljs-attr">src</span>=<span className="hljs-string">"images/slider3.jpg"</span> <span className="hljs-attr">alt</span>=<span className="hljs-string">""</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-center uk-panel"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">h1</span>&gt;</span>3<span className="hljs-tag">&lt;/<span className="hljs-name">h1</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-panel"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">img</span> <span className="hljs-attr">src</span>=<span className="hljs-string">"images/slider4.jpg"</span> <span className="hljs-attr">alt</span>=<span className="hljs-string">""</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-center uk-panel"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">h1</span>&gt;</span>4<span className="hljs-tag">&lt;/<span className="hljs-name">h1</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-panel"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">img</span> <span className="hljs-attr">src</span>=<span className="hljs-string">"images/slider5.jpg"</span> <span className="hljs-attr">alt</span>=<span className="hljs-string">""</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-center uk-panel"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">h1</span>&gt;</span>5<span className="hljs-tag">&lt;/<span className="hljs-name">h1</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-panel"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">img</span> <span className="hljs-attr">src</span>=<span className="hljs-string">"images/slider1.jpg"</span> <span className="hljs-attr">alt</span>=<span className="hljs-string">""</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-center uk-panel"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">h1</span>&gt;</span>6<span className="hljs-tag">&lt;/<span className="hljs-name">h1</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-panel"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">img</span> <span className="hljs-attr">src</span>=<span className="hljs-string">"images/slider2.jpg"</span> <span className="hljs-attr">alt</span>=<span className="hljs-string">""</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-center uk-panel"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">h1</span>&gt;</span>7<span className="hljs-tag">&lt;/<span className="hljs-name">h1</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-panel"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">img</span> <span className="hljs-attr">src</span>=<span className="hljs-string">"images/slider3.jpg"</span> <span className="hljs-attr">alt</span>=<span className="hljs-string">""</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-center uk-panel"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">h1</span>&gt;</span>8<span className="hljs-tag">&lt;/<span className="hljs-name">h1</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-panel"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">img</span> <span className="hljs-attr">src</span>=<span className="hljs-string">"images/slider4.jpg"</span> <span className="hljs-attr">alt</span>=<span className="hljs-string">""</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-center uk-panel"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">h1</span>&gt;</span>9<span className="hljs-tag">&lt;/<span className="hljs-name">h1</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-panel"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">img</span> <span className="hljs-attr">src</span>=<span className="hljs-string">"images/slider5.jpg"</span> <span className="hljs-attr">alt</span>=<span className="hljs-string">""</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-center uk-panel"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">h1</span>&gt;</span>10<span className="hljs-tag">&lt;/<span className="hljs-name">h1</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">ul</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-center-left uk-position-small uk-hidden-hover"</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span> <span className="hljs-attr">uk-slidenav-previous</span> <span className="hljs-attr">uk-slider-item</span>=<span className="hljs-string">"previous"</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-center-right uk-position-small uk-hidden-hover"</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span> <span className="hljs-attr">uk-slidenav-next</span> <span className="hljs-attr">uk-slider-item</span>=<span className="hljs-string">"next"</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span></code></pre>
                          </div>
                        </div>
                        <h3 className="el-title" id="Center"> Slider Center </h3>
                        <p> By default, items of the slider always are aligned to the
                          left. To center the list items, just add center: true to the attribute . <code> uk-slider="center: true" </code></p>
                        <div className="uk-position-relative uk-visible-toggle uk-light" tabIndex={-1} uk-slider="center: true">
                          <ul className="uk-slider-items uk-grid">
                            <li className="uk-width-1-2">
                              <div className="uk-panel"> <img src="https://wpkixx.com/html/socimo/images/elements/image.jpg" alt />
                                <div className="uk-position-center uk-panel">
                                  <h1>1</h1>
                                </div>
                              </div>
                            </li>
                            <li className="uk-width-1-2">
                              <div className="uk-panel"> <img src="https://wpkixx.com/html/socimo/images/elements/image2.jpg" alt />
                                <div className="uk-position-center uk-panel">
                                  <h1>2</h1>
                                </div>
                              </div>
                            </li>
                            <li className="uk-width-1-2">
                              <div className="uk-panel"> <img src="https://wpkixx.com/html/socimo/images/elements/image3.jpg" alt />
                                <div className="uk-position-center uk-panel">
                                  <h1>3</h1>
                                </div>
                              </div>
                            </li>
                            <li className="uk-width-1-2">
                              <div className="uk-panel"> <img src="https://wpkixx.com/html/socimo/images/elements/image4.jpg" alt />
                                <div className="uk-position-center uk-panel">
                                  <h1>4</h1>
                                </div>
                              </div>
                            </li>
                          </ul>
                          <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous" /> <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next" /> </div>
                        <div>
                          <button className="Markup-botton button uk-margin-small-top" type="button" uk-toggle="target: #Centero"> MARKUP</button>
                          <div id="Centero" aria-hidden="true" className="uk-margin-small-top" hidden>
                            <pre><code id="code-jw0g3fnx" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-relative uk-visible-toggle uk-light"</span> <span className="hljs-attr">tabindex</span>=<span className="hljs-string">"-1"</span> <span className="hljs-attr">uk-slider</span>=<span className="hljs-string">"center: true"</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">ul</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-slider-items uk-grid"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-width-3-4"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-panel"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">img</span> <span className="hljs-attr">src</span>=<span className="hljs-string">"images/photo.jpg"</span> <span className="hljs-attr">alt</span>=<span className="hljs-string">""</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-center uk-panel"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">h1</span>&gt;</span>1<span className="hljs-tag">&lt;/<span className="hljs-name">h1</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-width-3-4"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-panel"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">img</span> <span className="hljs-attr">src</span>=<span className="hljs-string">"images/dark.jpg"</span> <span className="hljs-attr">alt</span>=<span className="hljs-string">""</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-center uk-panel"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">h1</span>&gt;</span>2<span className="hljs-tag">&lt;/<span className="hljs-name">h1</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-width-3-4"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-panel"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">img</span> <span className="hljs-attr">src</span>=<span className="hljs-string">"images/light.jpg"</span> <span className="hljs-attr">alt</span>=<span className="hljs-string">""</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-center uk-panel"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">h1</span>&gt;</span>3<span className="hljs-tag">&lt;/<span className="hljs-name">h1</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-width-3-4"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-panel"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">img</span> <span className="hljs-attr">src</span>=<span className="hljs-string">"images/photo2.jpg"</span> <span className="hljs-attr">alt</span>=<span className="hljs-string">""</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-center uk-panel"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">h1</span>&gt;</span>4<span className="hljs-tag">&lt;/<span className="hljs-name">h1</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-width-3-4"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-panel"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">img</span> <span className="hljs-attr">src</span>=<span className="hljs-string">"images/photo3.jpg"</span> <span className="hljs-attr">alt</span>=<span className="hljs-string">""</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-center uk-panel"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">h1</span>&gt;</span>5<span className="hljs-tag">&lt;/<span className="hljs-name">h1</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">ul</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-center-left uk-position-small uk-hidden-hover"</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span> <span className="hljs-attr">uk-slidenav-previous</span> <span className="hljs-attr">uk-slider-item</span>=<span className="hljs-string">"previous"</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-center-right uk-position-small uk-hidden-hover"</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span> <span className="hljs-attr">uk-slidenav-next</span> <span className="hljs-attr">uk-slider-item</span>=<span className="hljs-string">"next"</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span></code></pre>
                          </div>
                        </div>
                        <p><span className="uk-label">Note</span> In this example, we add the <code> .uk-width-1-2</code> or <code>.uk-width-3-4</code> class to each item, which makes the slider look very similar to a slideshow.</p>
                        <h3 className="el-title" id="slider-Set"> Slide Sets </h3>
                        <p> To loop through a set of slides instead of single items, just
                          add <code>sets: true</code> to the attribute.</p>
                        <div className="uk-position-relative uk-visible-toggle uk-light" tabIndex={-1} uk-slider="sets: true">
                          <ul className="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@m">
                            <li> <img src="https://wpkixx.com/html/socimo/images/elements/slider4.jpg" alt />
                              <div className="uk-position-center uk-panel">
                                <h1>1</h1>
                              </div>
                            </li>
                            <li> <img src="https://wpkixx.com/html/socimo/images/elements/slider3.jpg" alt />
                              <div className="uk-position-center uk-panel">
                                <h1>2</h1>
                              </div>
                            </li>
                            <li> <img src="https://wpkixx.com/html/socimo/images/elements/slider2.jpg" alt />
                              <div className="uk-position-center uk-panel">
                                <h1>3</h1>
                              </div>
                            </li>
                            <li> <img src="https://wpkixx.com/html/socimo/images/elements/slider1.jpg" alt />
                              <div className="uk-position-center uk-panel">
                                <h1>4</h1>
                              </div>
                            </li>
                            <li> <img src="https://wpkixx.com/html/socimo/images/elements/slider4.jpg" alt />
                              <div className="uk-position-center uk-panel">
                                <h1>5</h1>
                              </div>
                            </li>
                            <li> <img src="https://wpkixx.com/html/socimo/images/elements/slider3.jpg" alt />
                              <div className="uk-position-center uk-panel">
                                <h1>6</h1>
                              </div>
                            </li>
                            <li> <img src="https://wpkixx.com/html/socimo/images/elements/slider2.jpg" alt />
                              <div className="uk-position-center uk-panel">
                                <h1>7</h1>
                              </div>
                            </li>
                            <li> <img src="https://wpkixx.com/html/socimo/images/elements/slider1.jpg" alt />
                              <div className="uk-position-center uk-panel">
                                <h1>8</h1>
                              </div>
                            </li>
                            <li> <img src="https://wpkixx.com/html/socimo/images/elements/slider4.jpg" alt />
                              <div className="uk-position-center uk-panel">
                                <h1>9</h1>
                              </div>
                            </li>
                            <li> <img src="https://wpkixx.com/html/socimo/images/elements/slider3.jpg" alt />
                              <div className="uk-position-center uk-panel">
                                <h1>10</h1>
                              </div>
                            </li>
                          </ul>
                          <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous" /> <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next" /> </div>
                        <div>
                          <button className="Markup-botton button uk-margin-small-top" type="button" uk-toggle="target: #Slide-Sets"> MARKUP</button>
                          <div aria-hidden="true" className="uk-margin-small-top" hidden>
                            <pre><code id="code-jw0g3fny" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-relative uk-visible-toggle uk-light"</span> <span className="hljs-attr">tabindex</span>=<span className="hljs-string">"-1"</span> <span className="hljs-attr">uk-slider</span>=<span className="hljs-string">"sets: true"</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">ul</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-slider-items uk-child-width-1-2 uk-child-width-1-3@m"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">img</span> <span className="hljs-attr">src</span>=<span className="hljs-string">"images/slider1.jpg"</span> <span className="hljs-attr">alt</span>=<span className="hljs-string">""</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-center uk-panel"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">h1</span>&gt;</span>1<span className="hljs-tag">&lt;/<span className="hljs-name">h1</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">img</span> <span className="hljs-attr">src</span>=<span className="hljs-string">"images/slider2.jpg"</span> <span className="hljs-attr">alt</span>=<span className="hljs-string">""</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-center uk-panel"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">h1</span>&gt;</span>2<span className="hljs-tag">&lt;/<span className="hljs-name">h1</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">img</span> <span className="hljs-attr">src</span>=<span className="hljs-string">"images/slider3.jpg"</span> <span className="hljs-attr">alt</span>=<span className="hljs-string">""</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-center uk-panel"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">h1</span>&gt;</span>3<span className="hljs-tag">&lt;/<span className="hljs-name">h1</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">img</span> <span className="hljs-attr">src</span>=<span className="hljs-string">"images/slider4.jpg"</span> <span className="hljs-attr">alt</span>=<span className="hljs-string">""</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-center uk-panel"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">h1</span>&gt;</span>4<span className="hljs-tag">&lt;/<span className="hljs-name">h1</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">img</span> <span className="hljs-attr">src</span>=<span className="hljs-string">"images/slider5.jpg"</span> <span className="hljs-attr">alt</span>=<span className="hljs-string">""</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-center uk-panel"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">h1</span>&gt;</span>5<span className="hljs-tag">&lt;/<span className="hljs-name">h1</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">img</span> <span className="hljs-attr">src</span>=<span className="hljs-string">"images/slider1.jpg"</span> <span className="hljs-attr">alt</span>=<span className="hljs-string">""</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-center uk-panel"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">h1</span>&gt;</span>6<span className="hljs-tag">&lt;/<span className="hljs-name">h1</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">img</span> <span className="hljs-attr">src</span>=<span className="hljs-string">"images/slider2.jpg"</span> <span className="hljs-attr">alt</span>=<span className="hljs-string">""</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-center uk-panel"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">h1</span>&gt;</span>7<span className="hljs-tag">&lt;/<span className="hljs-name">h1</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">img</span> <span className="hljs-attr">src</span>=<span className="hljs-string">"images/slider3.jpg"</span> <span className="hljs-attr">alt</span>=<span className="hljs-string">""</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-center uk-panel"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">h1</span>&gt;</span>8<span className="hljs-tag">&lt;/<span className="hljs-name">h1</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">img</span> <span className="hljs-attr">src</span>=<span className="hljs-string">"images/slider4.jpg"</span> <span className="hljs-attr">alt</span>=<span className="hljs-string">""</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-center uk-panel"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">h1</span>&gt;</span>9<span className="hljs-tag">&lt;/<span className="hljs-name">h1</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">img</span> <span className="hljs-attr">src</span>=<span className="hljs-string">"images/slider5.jpg"</span> <span className="hljs-attr">alt</span>=<span className="hljs-string">""</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-center uk-panel"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">h1</span>&gt;</span>10<span className="hljs-tag">&lt;/<span className="hljs-name">h1</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">ul</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-center-left uk-position-small uk-hidden-hover"</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span> <span className="hljs-attr">uk-slidenav-previous</span> <span className="hljs-attr">uk-slider-item</span>=<span className="hljs-string">"previous"</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-center-right uk-position-small uk-hidden-hover"</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span> <span className="hljs-attr">uk-slidenav-next</span> <span className="hljs-attr">uk-slider-item</span>=<span className="hljs-string">"next"</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span></code></pre>
                          </div>
                        </div>
                        <h3 className="el-title" id="slide-nav"> Navigation </h3>
                        <p>To navigate through your slides, just use the <code>uk-slider-item</code> attribute. To target the slides, set the attribute
                          of every
                          nav item to the index number of the respective slider item. The elements with
                          the <code>uk-slider-item</code> attribute need to be inside the <code>uk-slider</code> container. Setting the attribute to <code>next</code> and <code>previous</code> will
                          switch to the adjacent slides.</p>
                        <div uk-slider>
                          <div className="uk-position-relative uk-visible-toggle uk-light" tabIndex={-1}>
                            <ul className="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m">
                              <li> <img src="https://wpkixx.com/html/socimo/images/elements/slider4.jpg" alt />
                                <div className="uk-position-center uk-panel">
                                  <h1>1</h1>
                                </div>
                              </li>
                              <li> <img src="https://wpkixx.com/html/socimo/images/elements/slider3.jpg" alt />
                                <div className="uk-position-center uk-panel">
                                  <h1>2</h1>
                                </div>
                              </li>
                              <li> <img src="https://wpkixx.com/html/socimo/images/elements/slider2.jpg" alt />
                                <div className="uk-position-center uk-panel">
                                  <h1>3</h1>
                                </div>
                              </li>
                              <li> <img src="https://wpkixx.com/html/socimo/images/elements/slider1.jpg" alt />
                                <div className="uk-position-center uk-panel">
                                  <h1>4</h1>
                                </div>
                              </li>
                              <li> <img src="https://wpkixx.com/html/socimo/images/elements/slider4.jpg" alt />
                                <div className="uk-position-center uk-panel">
                                  <h1>5</h1>
                                </div>
                              </li>
                              <li> <img src="https://wpkixx.com/html/socimo/images/elements/slider3.jpg" alt />
                                <div className="uk-position-center uk-panel">
                                  <h1>6</h1>
                                </div>
                              </li>
                              <li> <img src="https://wpkixx.com/html/socimo/images/elements/slider2.jpg" alt />
                                <div className="uk-position-center uk-panel">
                                  <h1>7</h1>
                                </div>
                              </li>
                              <li> <img src="https://wpkixx.com/html/socimo/images/elements/slider1.jpg" alt />
                                <div className="uk-position-center uk-panel">
                                  <h1>8</h1>
                                </div>
                              </li>
                              <li> <img src="https://wpkixx.com/html/socimo/images/elements/slider4.jpg" alt />
                                <div className="uk-position-center uk-panel">
                                  <h1>9</h1>
                                </div>
                              </li>
                              <li> <img src="https://wpkixx.com/html/socimo/images/elements/slider3.jpg" alt />
                                <div className="uk-position-center uk-panel">
                                  <h1>10</h1>
                                </div>
                              </li>
                            </ul>
                            <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous" /> <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next" /> </div>
                          <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin">
                          </ul>
                        </div>
                        <div>
                          <button className="Markup-botton button uk-margin-small-top" type="button" uk-toggle="target: #Navigation"> MARKUP</button>
                          <div id="Navigation" aria-hidden="true" className="uk-margin-small-top" hidden>
                            <pre><code id="code-jw0g3fnz" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">uk-slider</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-relative uk-visible-toggle uk-light"</span> <span className="hljs-attr">tabindex</span>=<span className="hljs-string">"-1"</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">ul</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">img</span> <span className="hljs-attr">src</span>=<span className="hljs-string">"images/slider1.jpg"</span> <span className="hljs-attr">alt</span>=<span className="hljs-string">""</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-center uk-panel"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">h1</span>&gt;</span>1<span className="hljs-tag">&lt;/<span className="hljs-name">h1</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">img</span> <span className="hljs-attr">src</span>=<span className="hljs-string">"images/slider2.jpg"</span> <span className="hljs-attr">alt</span>=<span className="hljs-string">""</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-center uk-panel"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">h1</span>&gt;</span>2<span className="hljs-tag">&lt;/<span className="hljs-name">h1</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">img</span> <span className="hljs-attr">src</span>=<span className="hljs-string">"images/slider3.jpg"</span> <span className="hljs-attr">alt</span>=<span className="hljs-string">""</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-center uk-panel"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">h1</span>&gt;</span>3<span className="hljs-tag">&lt;/<span className="hljs-name">h1</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">img</span> <span className="hljs-attr">src</span>=<span className="hljs-string">"images/slider4.jpg"</span> <span className="hljs-attr">alt</span>=<span className="hljs-string">""</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-center uk-panel"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">h1</span>&gt;</span>4<span className="hljs-tag">&lt;/<span className="hljs-name">h1</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">img</span> <span className="hljs-attr">src</span>=<span className="hljs-string">"images/slider5.jpg"</span> <span className="hljs-attr">alt</span>=<span className="hljs-string">""</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-center uk-panel"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">h1</span>&gt;</span>5<span className="hljs-tag">&lt;/<span className="hljs-name">h1</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">img</span> <span className="hljs-attr">src</span>=<span className="hljs-string">"images/slider1.jpg"</span> <span className="hljs-attr">alt</span>=<span className="hljs-string">""</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-center uk-panel"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">h1</span>&gt;</span>6<span className="hljs-tag">&lt;/<span className="hljs-name">h1</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">img</span> <span className="hljs-attr">src</span>=<span className="hljs-string">"images/slider2.jpg"</span> <span className="hljs-attr">alt</span>=<span className="hljs-string">""</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-center uk-panel"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">h1</span>&gt;</span>7<span className="hljs-tag">&lt;/<span className="hljs-name">h1</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">img</span> <span className="hljs-attr">src</span>=<span className="hljs-string">"images/slider3.jpg"</span> <span className="hljs-attr">alt</span>=<span className="hljs-string">""</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-center uk-panel"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">h1</span>&gt;</span>8<span className="hljs-tag">&lt;/<span className="hljs-name">h1</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">img</span> <span className="hljs-attr">src</span>=<span className="hljs-string">"images/slider4.jpg"</span> <span className="hljs-attr">alt</span>=<span className="hljs-string">""</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-center uk-panel"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">h1</span>&gt;</span>9<span className="hljs-tag">&lt;/<span className="hljs-name">h1</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">img</span> <span className="hljs-attr">src</span>=<span className="hljs-string">"images/slider5.jpg"</span> <span className="hljs-attr">alt</span>=<span className="hljs-string">""</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-center uk-panel"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">h1</span>&gt;</span>10<span className="hljs-tag">&lt;/<span className="hljs-name">h1</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">ul</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-center-left uk-position-small uk-hidden-hover"</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span> <span className="hljs-attr">uk-slidenav-previous</span> <span className="hljs-attr">uk-slider-item</span>=<span className="hljs-string">"previous"</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-center-right uk-position-small uk-hidden-hover"</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span> <span className="hljs-attr">uk-slidenav-next</span> <span className="hljs-attr">uk-slider-item</span>=<span className="hljs-string">"next"</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">ul</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-slider-nav uk-dotnav uk-flex-center uk-margin"</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">ul</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span></code></pre>
                          </div>
                        </div>
                        <p><span className="uk-label">Note</span> Since the slider effect needs a clipping
                          container, box
                          shadows of content items are also clipped. To get the best visual result, it's
                          recommended
                          to use the <code>uk-slider="center: true"</code> mode if your content items have
                          a box
                          shadow.</p>
                        <h3 className="el-title" id="Toggle-on-hover"> Toggle on hover </h3>
                        <p>To toggle transitions on hover, use the <code>.uk-transition-toggle</code> class from the <a href="https://wpkixx.com/html/socimo/transition.html">Transition
                            component</a> and <code>tabindex="0"</code>. This will trigger the
                          transition when
                          the element is hovered or focused.</p>
                        <div uk-slider>
                          <ul className="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m uk-light">
                            <li className="uk-transition-toggle" tabIndex={0}> <img src="https://wpkixx.com/html/socimo/images/elements/slider4.jpg" alt />
                              <div className="uk-position-center uk-panel">
                                <h1 className="uk-transition-slide-bottom-small">1</h1>
                              </div>
                            </li>
                            <li className="uk-transition-toggle" tabIndex={0}> <img src="https://wpkixx.com/html/socimo/images/elements/slider3.jpg" alt />
                              <div className="uk-position-center uk-panel">
                                <h1 className="uk-transition-slide-bottom-small">2</h1>
                              </div>
                            </li>
                            <li className="uk-transition-toggle" tabIndex={0}> <img src="https://wpkixx.com/html/socimo/images/elements/slider2.jpg" alt />
                              <div className="uk-position-center uk-panel">
                                <h1 className="uk-transition-slide-bottom-small">3</h1>
                              </div>
                            </li>
                            <li className="uk-transition-toggle" tabIndex={0}> <img src="https://wpkixx.com/html/socimo/images/elements/slider1.jpg" alt />
                              <div className="uk-position-center uk-panel">
                                <h1 className="uk-transition-slide-bottom-small">4</h1>
                              </div>
                            </li>
                            <li className="uk-transition-toggle" tabIndex={0}> <img src="https://wpkixx.com/html/socimo/images/elements/slider4.jpg" alt />
                              <div className="uk-position-center uk-panel">
                                <h1 className="uk-transition-slide-bottom-small">5</h1>
                              </div>
                            </li>
                            <li className="uk-transition-toggle" tabIndex={0}> <img src="https://wpkixx.com/html/socimo/images/elements/slider3.jpg" alt />
                              <div className="uk-position-center uk-panel">
                                <h1 className="uk-transition-slide-bottom-small">6</h1>
                              </div>
                            </li>
                            <li className="uk-transition-toggle" tabIndex={0}> <img src="https://wpkixx.com/html/socimo/images/elements/slider2.jpg" alt />
                              <div className="uk-position-center uk-panel">
                                <h1 className="uk-transition-slide-bottom-small">7</h1>
                              </div>
                            </li>
                            <li className="uk-transition-toggle" tabIndex={0}> <img src="https://wpkixx.com/html/socimo/images/elements/slider1.jpg" alt />
                              <div className="uk-position-center uk-panel">
                                <h1 className="uk-transition-slide-bottom-small">8</h1>
                              </div>
                            </li>
                            <li className="uk-transition-toggle" tabIndex={0}> <img src="https://wpkixx.com/html/socimo/images/elements/slider4.jpg" alt />
                              <div className="uk-position-center uk-panel">
                                <h1 className="uk-transition-slide-bottom-small">9</h1>
                              </div>
                            </li>
                            <li className="uk-transition-toggle" tabIndex={0}> <img src="https://wpkixx.com/html/socimo/images/elements/slider3.jpg" alt />
                              <div className="uk-position-center uk-panel">
                                <h1 className="uk-transition-slide-bottom-small">10</h1>
                              </div>
                            </li>
                          </ul>
                          <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin">
                          </ul>
                        </div>
                        <div>
                          <button className="Markup-botton button uk-margin-small-top" type="button" uk-toggle="target: #Toggle"> MARKUP</button>
                          <div id="Toggle" aria-hidden="true" className="uk-margin-small-top" hidden>
                            <pre><code id="code-jw0g3fo6" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">uk-slider</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">ul</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m uk-light"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-transition-toggle"</span> <span className="hljs-attr">tabindex</span>=<span className="hljs-string">"0"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">img</span> <span className="hljs-attr">src</span>=<span className="hljs-string">"images/slider1.jpg"</span> <span className="hljs-attr">alt</span>=<span className="hljs-string">""</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-center uk-panel"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">h1</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-transition-slide-bottom-small"</span>&gt;</span>1<span className="hljs-tag">&lt;/<span className="hljs-name">h1</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-transition-toggle"</span> <span className="hljs-attr">tabindex</span>=<span className="hljs-string">"0"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">img</span> <span className="hljs-attr">src</span>=<span className="hljs-string">"images/slider2.jpg"</span> <span className="hljs-attr">alt</span>=<span className="hljs-string">""</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-center uk-panel"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">h1</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-transition-slide-bottom-small"</span>&gt;</span>2<span className="hljs-tag">&lt;/<span className="hljs-name">h1</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-transition-toggle"</span> <span className="hljs-attr">tabindex</span>=<span className="hljs-string">"0"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">img</span> <span className="hljs-attr">src</span>=<span className="hljs-string">"images/slider3.jpg"</span> <span className="hljs-attr">alt</span>=<span className="hljs-string">""</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-center uk-panel"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">h1</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-transition-slide-bottom-small"</span>&gt;</span>3<span className="hljs-tag">&lt;/<span className="hljs-name">h1</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-transition-toggle"</span> <span className="hljs-attr">tabindex</span>=<span className="hljs-string">"0"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">img</span> <span className="hljs-attr">src</span>=<span className="hljs-string">"images/slider4.jpg"</span> <span className="hljs-attr">alt</span>=<span className="hljs-string">""</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-center uk-panel"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">h1</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-transition-slide-bottom-small"</span>&gt;</span>4<span className="hljs-tag">&lt;/<span className="hljs-name">h1</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-transition-toggle"</span> <span className="hljs-attr">tabindex</span>=<span className="hljs-string">"0"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">img</span> <span className="hljs-attr">src</span>=<span className="hljs-string">"images/slider5.jpg"</span> <span className="hljs-attr">alt</span>=<span className="hljs-string">""</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-center uk-panel"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">h1</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-transition-slide-bottom-small"</span>&gt;</span>5<span className="hljs-tag">&lt;/<span className="hljs-name">h1</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-transition-toggle"</span> <span className="hljs-attr">tabindex</span>=<span className="hljs-string">"0"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">img</span> <span className="hljs-attr">src</span>=<span className="hljs-string">"images/slider1.jpg"</span> <span className="hljs-attr">alt</span>=<span className="hljs-string">""</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-center uk-panel"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">h1</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-transition-slide-bottom-small"</span>&gt;</span>6<span className="hljs-tag">&lt;/<span className="hljs-name">h1</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-transition-toggle"</span> <span className="hljs-attr">tabindex</span>=<span className="hljs-string">"0"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">img</span> <span className="hljs-attr">src</span>=<span className="hljs-string">"images/slider2.jpg"</span> <span className="hljs-attr">alt</span>=<span className="hljs-string">""</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-center uk-panel"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">h1</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-transition-slide-bottom-small"</span>&gt;</span>7<span className="hljs-tag">&lt;/<span className="hljs-name">h1</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-transition-toggle"</span> <span className="hljs-attr">tabindex</span>=<span className="hljs-string">"0"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">img</span> <span className="hljs-attr">src</span>=<span className="hljs-string">"images/slider3.jpg"</span> <span className="hljs-attr">alt</span>=<span className="hljs-string">""</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-center uk-panel"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">h1</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-transition-slide-bottom-small"</span>&gt;</span>8<span className="hljs-tag">&lt;/<span className="hljs-name">h1</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-transition-toggle"</span> <span className="hljs-attr">tabindex</span>=<span className="hljs-string">"0"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">img</span> <span className="hljs-attr">src</span>=<span className="hljs-string">"images/slider4.jpg"</span> <span className="hljs-attr">alt</span>=<span className="hljs-string">""</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-center uk-panel"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">h1</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-transition-slide-bottom-small"</span>&gt;</span>9<span className="hljs-tag">&lt;/<span className="hljs-name">h1</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-transition-toggle"</span> <span className="hljs-attr">tabindex</span>=<span className="hljs-string">"0"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">img</span> <span className="hljs-attr">src</span>=<span className="hljs-string">"images/slider5.jpg"</span> <span className="hljs-attr">alt</span>=<span className="hljs-string">""</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-center uk-panel"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">h1</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-transition-slide-bottom-small"</span>&gt;</span>10<span className="hljs-tag">&lt;/<span className="hljs-name">h1</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">ul</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">ul</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-slider-nav uk-dotnav uk-flex-center uk-margin"</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">ul</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span></code></pre>
                          </div>
                        </div>
                      </div>
                      <div className="uk-width-1-4@s uk-visible@s">
                        <ul className="uk-list docs-list" uk-sticky="offset:100;media : @m; top:20">
                          <li> <a href="#slider-intro" uk-scroll> Basic </a></li>
                          <li> <a href="#Gutter" uk-scroll> Gutter </a></li>
                          <li> <a href="#Center" uk-scroll> Center </a></li>
                          <li> <a href="#slider-Set" uk-scroll> Slide-Sets </a></li>
                          <li> <a href="#slide-nav" uk-scroll> Navigation </a></li>
                          <li> <a href="#Toggle" uk-scroll> Toggle </a></li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  {/* Slideshow */}
                  <li>
                    <div className="mt-4 uk-grid-large" uk-grid>
                      <div className="uk-width-3-4@s">
                        <h2> Slideshow </h2>
                        <p className="mb-4"> Create a responsive slideshow with images and videos.</p>
                        <p id="slide-show-basic">To apply this component, add the <code>uk-slideshow</code> attribute to a container element and create a list of slides with the <code>.uk-slideshow-items</code> class. <br />
                          Add an image in the background of each slide using the <code>uk-cover</code> attribute
                          from the <a href="https://wpkixx.com/html/socimo/cover.html">Cover component</a> </p>
                        <div className="uk-position-relative uk-visible-toggle uk-light" tabIndex={-1} uk-slideshow>
                          <ul className="uk-slideshow-items">
                            <li> <img src="https://wpkixx.com/html/socimo/images/elements/image.jpg" alt uk-cover /> </li>
                            <li> <img src="https://wpkixx.com/html/socimo/images/elements/dark.jpg" alt uk-cover /> </li>
                            <li> <img src="https://wpkixx.com/html/socimo/images/elements/light.jpg" alt uk-cover /> </li>
                          </ul>
                          <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous" /> <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next" /> </div>
                        <div>
                          <button className="Markup-botton button uk-margin-small-top" type="button" uk-toggle="target: #slideshow"> MARKUP</button>
                          <div id="slideshow" aria-hidden="true" className="uk-margin-small-top" hidden>
                            <pre><code id="code-jw0g3ybl" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-relative uk-visible-toggle uk-light"</span> <span className="hljs-attr">tabindex</span>=<span className="hljs-string">"-1"</span> <span className="hljs-attr">uk-slideshow</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">ul</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-slideshow-items"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">img</span> <span className="hljs-attr">src</span>=<span className="hljs-string">"images/photo.jpg"</span> <span className="hljs-attr">alt</span>=<span className="hljs-string">""</span> <span className="hljs-attr">uk-cover</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">img</span> <span className="hljs-attr">src</span>=<span className="hljs-string">"images/dark.jpg"</span> <span className="hljs-attr">alt</span>=<span className="hljs-string">""</span> <span className="hljs-attr">uk-cover</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">img</span> <span className="hljs-attr">src</span>=<span className="hljs-string">"images/light.jpg"</span> <span className="hljs-attr">alt</span>=<span className="hljs-string">""</span> <span className="hljs-attr">uk-cover</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">ul</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-center-left uk-position-small uk-hidden-hover"</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span> <span className="hljs-attr">uk-slidenav-previous</span> <span className="hljs-attr">uk-slideshow-item</span>=<span className="hljs-string">"previous"</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-center-right uk-position-small uk-hidden-hover"</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span> <span className="hljs-attr">uk-slidenav-next</span> <span className="hljs-attr">uk-slideshow-item</span>=<span className="hljs-string">"next"</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span></code></pre>
                          </div>
                        </div>
                        <h3 className="el-title" id="slide-animate"> Animations</h3>
                        <p> By default, the slideshow uses a <code>slide</code> animation. You can set the <code>animation</code> option to use a different
                          animation.
                          Possible values are as follows: </p>
                        <div className="uk-overflow-auto uk-width-2-3@m mb-4">
                          <table className="uk-table uk-table-divider">
                            <thead>
                              <tr>
                                <th align="left">Animation</th>
                                <th align="left">Description</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td align="left"><code>slide</code></td>
                                <td align="left">Slides slide in side by side.</td>
                              </tr>
                              <tr>
                                <td align="left"><code>fade</code></td>
                                <td align="left">Slides fade in.</td>
                              </tr>
                              <tr>
                                <td align="left"><code>scale</code></td>
                                <td align="left">Slides are scaled up and fade out.</td>
                              </tr>
                              <tr>
                                <td align="left"><code>pull</code></td>
                                <td align="left">Slides are pulled from the deck.</td>
                              </tr>
                              <tr>
                                <td align="left"><code>push</code></td>
                                <td align="left">Slides are pushed to the deck.</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="uk-child-width-1-2@m" uk-grid>
                          <div>
                            <div className="uk-h5">Slide</div>
                            <div className="uk-position-relative uk-visible-toggle uk-light" tabIndex={-1} uk-slideshow>
                              <ul className="uk-slideshow-items">
                                <li> <img src="https://wpkixx.com/html/socimo/images/elements/image.jpg" alt uk-cover /> </li>
                                <li> <img src="https://wpkixx.com/html/socimo/images/elements/dark.jpg" alt uk-cover /> </li>
                                <li> <img src="https://wpkixx.com/html/socimo/images/elements/light.jpg" alt uk-cover /> </li>
                              </ul>
                              <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous" /> <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next" /> </div>
                          </div>
                          <div>
                            <div className="uk-h5">Fade</div>
                            <div className="uk-position-relative uk-visible-toggle uk-light" tabIndex={-1} uk-slideshow="animation: fade">
                              <ul className="uk-slideshow-items">
                                <li> <img src="https://wpkixx.com/html/socimo/images/elements/image.jpg" alt uk-cover /> </li>
                                <li> <img src="https://wpkixx.com/html/socimo/images/elements/dark.jpg" alt uk-cover /> </li>
                                <li> <img src="https://wpkixx.com/html/socimo/images/elements/light.jpg" alt uk-cover /> </li>
                              </ul>
                              <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous" /> <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next" /> </div>
                          </div>
                          <div>
                            <div className="uk-h5">Scale</div>
                            <div className="uk-position-relative uk-visible-toggle uk-light" tabIndex={-1} uk-slideshow="animation: scale">
                              <ul className="uk-slideshow-items">
                                <li> <img src="https://wpkixx.com/html/socimo/images/elements/image.jpg" alt uk-cover /> </li>
                                <li> <img src="https://wpkixx.com/html/socimo/images/elements/dark.jpg" alt uk-cover /> </li>
                                <li> <img src="https://wpkixx.com/html/socimo/images/elements/light.jpg" alt uk-cover /> </li>
                              </ul>
                              <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous" /> <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next" /> </div>
                          </div>
                          <div>
                            <div className="uk-h5">Pull</div>
                            <div className="uk-position-relative uk-visible-toggle uk-light" tabIndex={-1} uk-slideshow="animation: pull">
                              <ul className="uk-slideshow-items">
                                <li> <img src="https://wpkixx.com/html/socimo/images/elements/image.jpg" alt uk-cover /> </li>
                                <li> <img src="https://wpkixx.com/html/socimo/images/elements/dark.jpg" alt uk-cover /> </li>
                                <li> <img src="https://wpkixx.com/html/socimo/images/elements/light.jpg" alt uk-cover /> </li>
                              </ul>
                              <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous" /> <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next" /> </div>
                          </div>
                          <div>
                            <div className="uk-h5">Push</div>
                            <div className="uk-position-relative uk-visible-toggle uk-light" tabIndex={-1} uk-slideshow="animation: push">
                              <ul className="uk-slideshow-items">
                                <li> <img src="https://wpkixx.com/html/socimo/images/elements/image.jpg" alt uk-cover /> </li>
                                <li> <img src="https://wpkixx.com/html/socimo/images/elements/dark.jpg" alt uk-cover /> </li>
                                <li> <img src="https://wpkixx.com/html/socimo/images/elements/light.jpg" alt uk-cover /> </li>
                              </ul>
                              <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous" /> <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next" /> </div>
                          </div>
                        </div>
                        <h3 className="el-title" id="Autoplay"> Autoplay</h3>
                        <p> To activate autoplay, just add the <code>autoplay:
                            true</code> option to the attribute. You can also set the interval in
                          milliseconds
                          between switching slides using <code>autoplay-interval: 6000</code>. To pause
                          autoplay
                          when hovering the slideshow, use <code>pause-on-hover: true</code> </p>
                        <pre className="bg-soft-primary"><code className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">uk-slideshow</span>=<span className="hljs-string">"autoplay: true"</span>&gt;</span>...<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span></code></pre>
                        <h3 className="el-title" id="slideshow-nav"> Navigation</h3>
                        <p>To navigate through your slides, just use the <code>uk-slideshow-item</code> attribute. To target the slides, set the attribute of
                          every nav item to the index number of the respective slideshow item. The elements
                          with
                          the <code>uk-slideshow-item</code> attribute need to be inside the <code>uk-slideshow</code> container. Setting the attribute to <code>next</code> and <code>previous</code> will switch to the adjacent slides. </p>
                        <div uk-slideshow="animation: push">
                          <div className="uk-position-relative uk-visible-toggle uk-light" tabIndex={-1}>
                            <ul className="uk-slideshow-items">
                              <li> <img src="https://wpkixx.com/html/socimo/images/elements/image.jpg" alt uk-cover /> </li>
                              <li> <img src="https://wpkixx.com/html/socimo/images/elements/light.jpg" alt uk-cover /> </li>
                              <li> <img src="https://wpkixx.com/html/socimo/images/elements/dark.jpg" alt uk-cover /> </li>
                            </ul>
                            <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous" /> <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next" /> </div>
                          <ul className="uk-slideshow-nav uk-dotnav uk-flex-center uk-margin">
                          </ul>
                        </div>
                        <div>
                          <button className="Markup-botton button uk-margin-small-top" type="button" uk-toggle="target: #Navigations"> MARKUP</button>
                          <div id="Navigations" aria-hidden="true" className="uk-margin-small-top" hidden>
                            <pre><code id="code-jw0g3ybq" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">uk-slideshow</span>=<span className="hljs-string">"animation: push"</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-relative uk-visible-toggle uk-light"</span> <span className="hljs-attr">tabindex</span>=<span className="hljs-string">"-1"</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">ul</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-slideshow-items"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">img</span> <span className="hljs-attr">src</span>=<span className="hljs-string">"images/photo.jpg"</span> <span className="hljs-attr">alt</span>=<span className="hljs-string">""</span> <span className="hljs-attr">uk-cover</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">img</span> <span className="hljs-attr">src</span>=<span className="hljs-string">"images/dark.jpg"</span> <span className="hljs-attr">alt</span>=<span className="hljs-string">""</span> <span className="hljs-attr">uk-cover</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">img</span> <span className="hljs-attr">src</span>=<span className="hljs-string">"images/light.jpg"</span> <span className="hljs-attr">alt</span>=<span className="hljs-string">""</span> <span className="hljs-attr">uk-cover</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">ul</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-center-left uk-position-small uk-hidden-hover"</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span> <span className="hljs-attr">uk-slidenav-previous</span> <span className="hljs-attr">uk-slideshow-item</span>=<span className="hljs-string">"previous"</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-center-right uk-position-small uk-hidden-hover"</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span> <span className="hljs-attr">uk-slidenav-next</span> <span className="hljs-attr">uk-slideshow-item</span>=<span className="hljs-string">"next"</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">ul</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-slideshow-nav uk-dotnav uk-flex-center uk-margin"</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">ul</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span></code></pre>
                          </div>
                        </div>
                        <br />
                        <p><span className="uk-label">Note</span> For better visibility of overlaying navigations,
                          add the <code>.uk-light</code> or <code>.uk-dark</code> class from the <a href="https://wpkixx.com/html/socimo/inverse.html">Inverse
                            component</a>.</p>
                        <h3 className="el-title" id="slideshow-effect"> Ken Burns effect </h3>
                        <p>To add a simple Ken Burns effect, wrap the image with a <code>div</code> and add the <code>.uk-position-cover</code> and <code>.uk-animation-kenburns</code> classes. You can also apply the <code>.uk-animation-reverse</code> or one of the <code>.uk-transform-origin-*</code> classes from the <a href="https://wpkixx.com/html/socimo/utility.html#transform-origin">Utility component</a> to modify
                          the
                          effect. </p>
                        <div className="uk-position-relative uk-visible-toggle uk-light" tabIndex={-1} uk-slideshow="animation: push">
                          <ul className="uk-slideshow-items">
                            <li>
                              <div className="uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-center-left"> <img src="https://wpkixx.com/html/socimo/images/elements/image.jpg" alt uk-cover /> </div>
                            </li>
                            <li>
                              <div className="uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-top-right"> <img src="https://wpkixx.com/html/socimo/images/elements/light.jpg" alt uk-cover /> </div>
                            </li>
                            <li>
                              <div className="uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-bottom-left"> <img src="https://wpkixx.com/html/socimo/images/elements/dark.jpg" alt uk-cover /> </div>
                            </li>
                          </ul>
                          <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous" /> <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next" /> </div>
                        <div>
                          <button className="Markup-botton button uk-margin-small-top" type="button" uk-toggle="target: #effect"> MARKUP</button>
                          <div id="effect" aria-hidden="true" className="uk-margin-small-top" hidden>
                            <pre><code id="code-jw0g3ybs" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-relative uk-visible-toggle uk-light"</span> <span className="hljs-attr">tabindex</span>=<span className="hljs-string">"-1"</span> <span className="hljs-attr">uk-slideshow</span>=<span className="hljs-string">"animation: push"</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">ul</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-slideshow-items"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-center-left"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">img</span> <span className="hljs-attr">src</span>=<span className="hljs-string">"images/photo.jpg"</span> <span className="hljs-attr">alt</span>=<span className="hljs-string">""</span> <span className="hljs-attr">uk-cover</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-top-right"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">img</span> <span className="hljs-attr">src</span>=<span className="hljs-string">"images/dark.jpg"</span> <span className="hljs-attr">alt</span>=<span className="hljs-string">""</span> <span className="hljs-attr">uk-cover</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-bottom-left"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">img</span> <span className="hljs-attr">src</span>=<span className="hljs-string">"images/light.jpg"</span> <span className="hljs-attr">alt</span>=<span className="hljs-string">""</span> <span className="hljs-attr">uk-cover</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">ul</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-center-left uk-position-small uk-hidden-hover"</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span> <span className="hljs-attr">uk-slidenav-previous</span> <span className="hljs-attr">uk-slideshow-item</span>=<span className="hljs-string">"previous"</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-center-right uk-position-small uk-hidden-hover"</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span> <span className="hljs-attr">uk-slidenav-next</span> <span className="hljs-attr">uk-slideshow-item</span>=<span className="hljs-string">"next"</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span></code></pre>
                          </div>
                        </div>
                        <h3 className="el-title" id="slideshow-parallax"> Content parallax</h3>
                        <p> Add the <code>uk-slideshow-parallax</code> attribute to any
                          element inside the slides to animate it together with the slideshow animation. Add
                          an
                          option with the desired animation values for each CSS property you want to animate.
                          Define at least one start and end value. It can be done by passing two values
                          separated
                          by a comma. <br />
                          The parallax attribute can be used to add additional effects to the slideshow
                          animations. In the following example the <code>push</code> animation is extended by
                          dimming out and scaling down the image when it's sliding out. </p>
                        <div className="uk-position-relative uk-visible-toggle uk-light" tabIndex={-1} uk-slideshow="animation: push">
                          <ul className="uk-slideshow-items">
                            <li>
                              <div className="uk-position-cover" uk-slideshow-parallax="scale: 1.2,1.2,1"> <img src="https://wpkixx.com/html/socimo/images/elements/image.jpg" alt uk-cover /> </div>
                              <div className="uk-position-cover" uk-slideshow-parallax="opacity: 0,0,0.2; backgroundColor: #000,#000"> </div>
                              <div className="uk-position-center uk-position-medium uk-text-center">
                                <div uk-slideshow-parallax="scale: 1,1,0.8">
                                  <h2 uk-slideshow-parallax="x: 200,0,0">Heading</h2>
                                  <p uk-slideshow-parallax="x: 400,0,0;">Lorem ipsum dolor sit amet. </p>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="uk-position-cover" uk-slideshow-parallax="scale: 1.2,1.2,1"> <img src="https://wpkixx.com/html/socimo/images/elements/light.jpg" alt uk-cover /> </div>
                              <div className="uk-position-cover" uk-slideshow-parallax="opacity: 0,0,0.2; backgroundColor: #000,#000"> </div>
                              <div className="uk-position-center uk-position-medium uk-text-center">
                                <div uk-slideshow-parallax="scale: 1,1,0.8">
                                  <h2 uk-slideshow-parallax="x: 200,0,0">Heading</h2>
                                  <p uk-slideshow-parallax="x: 400,0,0;">Lorem ipsum dolor sit amet. </p>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="uk-position-cover" uk-slideshow-parallax="scale: 1.2,1.2,1"> <img src="https://wpkixx.com/html/socimo/images/elements/dark.jpg" alt uk-cover /> </div>
                              <div className="uk-position-cover" uk-slideshow-parallax="opacity: 0,0,0.2; backgroundColor: #000,#000"> </div>
                              <div className="uk-position-center uk-position-medium uk-text-center">
                                <div uk-slideshow-parallax="scale: 1,1,0.8">
                                  <h2 uk-slideshow-parallax="x: 200,0,0">Heading</h2>
                                  <p uk-slideshow-parallax="x: 400,0,0;">Lorem ipsum dolor sit amet. </p>
                                </div>
                              </div>
                            </li>
                          </ul>
                          <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous" /> <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next" /> </div>
                        <div>
                          <button className="Markup-botton button uk-margin-small-top" type="button" uk-toggle="target: #parallax"> MARKUP</button>
                          <div id="parallax" aria-hidden="true" className="uk-margin-small-top" hidden>
                            <pre><code id="code-jw0g3ybu" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-relative uk-visible-toggle uk-light"</span> <span className="hljs-attr">tabindex</span>=<span className="hljs-string">"-1"</span> <span className="hljs-attr">uk-slideshow</span>=<span className="hljs-string">"animation: push"</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">ul</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-slideshow-items"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">img</span> <span className="hljs-attr">src</span>=<span className="hljs-string">"images/photo.jpg"</span> <span className="hljs-attr">alt</span>=<span className="hljs-string">""</span> <span className="hljs-attr">uk-cover</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-center uk-position-small uk-text-center"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">h2</span> <span className="hljs-attr">uk-slideshow-parallax</span>=<span className="hljs-string">"x: 100,-100"</span>&gt;</span>Heading<span className="hljs-tag">&lt;/<span className="hljs-name">h2</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span> <span className="hljs-attr">uk-slideshow-parallax</span>=<span className="hljs-string">"x: 200,-200"</span>&gt;</span>Lorem ipsum dolor sit amet.<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">img</span> <span className="hljs-attr">src</span>=<span className="hljs-string">"images/dark.jpg"</span> <span className="hljs-attr">alt</span>=<span className="hljs-string">""</span> <span className="hljs-attr">uk-cover</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-center uk-position-small uk-text-center"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">h2</span> <span className="hljs-attr">uk-slideshow-parallax</span>=<span className="hljs-string">"x: 100,-100"</span>&gt;</span>Heading<span className="hljs-tag">&lt;/<span className="hljs-name">h2</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span> <span className="hljs-attr">uk-slideshow-parallax</span>=<span className="hljs-string">"x: 200,-200"</span>&gt;</span>Lorem ipsum dolor sit amet.<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">img</span> <span className="hljs-attr">src</span>=<span className="hljs-string">"images/light.jpg"</span> <span className="hljs-attr">alt</span>=<span className="hljs-string">""</span> <span className="hljs-attr">uk-cover</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-center uk-position-small uk-text-center"</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">h2</span> <span className="hljs-attr">uk-slideshow-parallax</span>=<span className="hljs-string">"y: -50,0,0; opacity: 1,1,0"</span>&gt;</span>Heading<span className="hljs-tag">&lt;/<span className="hljs-name">h2</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span> <span className="hljs-attr">uk-slideshow-parallax</span>=<span className="hljs-string">"y: 50,0,0; opacity: 1,1,0"</span>&gt;</span>Lorem ipsum dolor sit amet.<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"            "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">ul</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-center-left uk-position-small uk-hidden-hover"</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span> <span className="hljs-attr">uk-slidenav-previous</span> <span className="hljs-attr">uk-slideshow-item</span>=<span className="hljs-string">"previous"</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span>{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-center-right uk-position-small uk-hidden-hover"</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span> <span className="hljs-attr">uk-slidenav-next</span> <span className="hljs-attr">uk-slideshow-item</span>=<span className="hljs-string">"next"</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span>{"\n"}{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span></code></pre>
                          </div>
                        </div>
                      </div>
                      <div className="uk-width-1-4@s uk-visible@s">
                        <ul className="uk-list docs-list" uk-sticky="offset:100;media : @m; top:20">
                          <li> <a href="#slide-show-basic" uk-scroll> Basic </a></li>
                          <li> <a href="#slide-animate" uk-scroll> Animations </a></li>
                          <li> <a href="#Autoplay" uk-scroll> Autoplay </a></li>
                          <li> <a href="#slideshow-nav" uk-scroll> Navigation </a></li>
                          <li> <a href="#slideshow-effect" uk-scroll> Ken Burns effect </a></li>
                          <li> <a href="#slideshow-parallax" uk-scroll> Content parallax </a></li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  {/* Progress */}
                  <li>
                    <div className="mt-4 uk-grid-large" uk-grid>
                      <div className="uk-width-3-4@s">
                        <div className="tm-main uk-width-medium-3-4">
                          <article className="uk-article">
                            <h2 className="uk-article-title">Progress bars</h2>
                            <p className="uk-article-lead">Defines different styles for progress bars.</p>
                            <h2 id="prog-basic"><a href="#usage" className="uk-link-reset">Usage</a></h2>
                            <p>The progress bar consists of a background bar and the progress bar itself, indicating the increase.</p>
                            <div className="uk-overflow-container">
                              <table className="uk-table uk-text-nowrap">
                                <thead>
                                  <tr>
                                    <th>Class</th>
                                    <th>Description</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td><code>.uk-progress</code></td>
                                    <td>This class is used on the parent container to create the background of the progress bar.</td>
                                  </tr>
                                  <tr>
                                    <td><code>.uk-progress-bar</code></td>
                                    <td>This class needs to be added to the child element to create the actual progress bar.</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                            <h3 className="tm-article-subtitle">Example</h3>
                            <div className="uk-progress">
                              <div className="uk-progress-bar" style={{width: '40%'}}>40%</div>
                            </div>
                            <h3 className="tm-article-subtitle">Markup</h3>
                            <pre><code>&lt;div class="uk-progress"&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;div class="uk-progress-bar" style="width: 40%;"&gt;40%&lt;/div&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;/div&gt;</code></pre>
                            <hr className="uk-article-divider" />
                            <h2 id="size-mod"><a href="#size-modifiers" className="uk-link-reset">Size modifiers</a></h2>
                            <p>Add the <code>.uk-progress-mini</code> or <code>.uk-progress-small</code> class to change the size of the bar.</p>
                            <h3 className="tm-article-subtitle">Example</h3>
                            <div className="uk-progress uk-progress-mini">
                              <div className="uk-progress-bar" style={{width: '50%'}} />
                            </div>
                            <div className="uk-progress uk-progress-small">
                              <div className="uk-progress-bar" style={{width: '55%'}} />
                            </div>
                            <div className="uk-progress">
                              <div className="uk-progress-bar" style={{width: '60%'}} />
                            </div>
                            <h3 className="tm-article-subtitle">Markup</h3>
                            <pre><code>&lt;div class="uk-progress uk-progress-mini"&gt;...&lt;/div&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;div class="uk-progress uk-progress-small"&gt;...&lt;/div&gt;</code></pre>
                            <hr className="uk-article-divider" />
                            <h2 id="color-mod"><a href="#color-modifiers" className="uk-link-reset">Color modifiers</a></h2>
                            <p>To apply different colors to your progress bars, just add the <code>.uk-progress-success</code>, <code>.uk-progress-warning</code> or <code>.uk-progress-danger</code> class.</p>
                            <h4 className="tm-article-subtitle">Example</h4>
                            <div className="uk-progress uk-progress-success">
                              <div className="uk-progress-bar" style={{width: '75%'}} />
                            </div>
                            <div className="uk-progress uk-progress-warning">
                              <div className="uk-progress-bar" style={{width: '55%'}} />
                            </div>
                            <div className="uk-progress uk-progress-danger">
                              <div className="uk-progress-bar" style={{width: '35%'}} />
                            </div>
                            <h3 className="tm-article-subtitle">Markup</h3>
                            <pre><code>&lt;div class="uk-progress uk-progress-success"&gt;...&lt;/div&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;div class="uk-progress uk-progress-warning"&gt;...&lt;/div&gt;{"\n"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}{"\t"}&lt;div class="uk-progress uk-progress-danger"&gt;...&lt;/div&gt;</code></pre>
                            <hr className="uk-article-divider" />
                            <h3>Striped</h3>
                            <p>To create a striped progress bar, use the <code>.uk-progress-striped</code> class.</p>
                            <h4 className="tm-article-subtitle">Example</h4>
                            <div className="uk-progress uk-progress-striped">
                              <div className="uk-progress-bar" style={{width: '65%'}} />
                            </div>
                            <h3 className="tm-article-subtitle">Markup</h3>
                            <pre><code>&lt;div class="uk-progress uk-progress-striped"&gt;...&lt;/div&gt;</code></pre>
                            <p>You can even animate the striped bar. To do so, just add the <code>.uk-active</code> class.</p>
                            <h4 className="tm-article-subtitle">Example</h4>
                            <div className="uk-progress uk-progress-striped uk-active">
                              <div className="uk-progress-bar" style={{width: '85%'}} />
                            </div>
                            <h3 className="tm-article-subtitle">Markup</h3>
                            <pre><code>&lt;div class="uk-progress uk-progress-striped uk-active"&gt;...&lt;/div&gt;</code></pre>
                            <hr className="uk-article-divider" />
                            <h3>Combinable</h3>
                            <p>All modifiers of the Progress component can be combined with each other.</p>
                            <h4 className="tm-article-subtitle">Example</h4>
                            <div className="uk-progress uk-progress-small uk-progress-danger uk-progress-striped uk-active">
                              <div className="uk-progress-bar" style={{width: '55%'}} />
                            </div>
                            <h3 className="tm-article-subtitle">Markup</h3>
                            <pre><code>&lt;div class="uk-progress uk-progress-small uk-progress-danger uk-progress-striped uk-active"&gt;...&lt;/div&gt;</code></pre>
                          </article>
                        </div>
                      </div>
                      <div className="uk-width-1-4@s uk-visible@s">
                        <ul className="uk-list docs-list" uk-sticky="offset:100;media : @m; top:20">
                          <li> <a href="#prog-basic" uk-scroll> Usage </a></li>
                          <li> <a href="#size-mod" uk-scroll> Size Modifier </a></li>
                          <li> <a href="#color-mod" uk-scroll> color-modifier </a></li>
                        </ul>
                      </div>
                    </div>
                  </li>
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
    <div className="wraper-invite">
      <div className="popup">
        <span className="popup-closed"><i className="icofont-close" /></span>
        <div className="popup-meta">
          <div className="popup-head">
            <h5><i className="icofont-envelope" /> Invite Colleagues</h5>
          </div>
          <div className="invitation-meta">
            <p>
              Enter an email address to invite a colleague or co-author to join you on Socimo. They will receive an email and, in some cases, up to two reminders.
            </p>
            <form method="post" className="c-form">
              <input type="text" placeholder="Enter Email" />
              <button type="submit" className="main-btn">Invite</button>
            </form>
          </div>
        </div>
      </div>
    </div>{/* invite colleague popup */}
    <div className="popup-wraper">
      <div className="popup"> <span className="popup-closed"><i className="icofont-close" /></span>
        <div className="popup-meta">
          <div className="popup-head">
            <h5><i className="icofont-envelope" /> Send Message</h5>
          </div>
          <div className="send-message">
            <form method="post" className="c-form">
              <input type="text" placeholder="Enter Name.." />
              <input type="text" placeholder="Subject" />
              <textarea placeholder="Write Message" defaultValue={""} />
              <div className="uploadimage"> <i className="icofont-file-jpg" />
                <label className="fileContainer">
                  <input type="file" />
                  Attach file </label>
              </div>
              <button type="submit" className="main-btn">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    {/* send message popup */}
    <div className="side-slide"> <span className="popup-closed"><i className="icofont-close" /></span>
      <div className="slide-meta">
        <ul className="nav nav-tabs slide-btns">
          <li className="nav-item"><a className="active" href="#messages" data-toggle="tab">Messages</a></li>
          <li className="nav-item"><a className href="#notifications" data-toggle="tab">Notifications</a></li>
        </ul>
        {/* Tab panes */}
        <div className="tab-content">
          <div className="tab-pane active fade show" id="messages">
            <h4><i className="icofont-envelope" /> messages</h4>
            <a href="#" className="send-mesg" title="New Message" data-toggle="tooltip"><i className="icofont-edit" /></a>
            <ul className="new-messages">
              <li>
                <figure><img src="images/resources/user1.jpg" alt /></figure>
                <div className="mesg-info"> <span>Ibrahim Ahmed</span> <a href="#" title>Helo dear i wanna talk to you</a> </div>
              </li>
              <li>
                <figure><img src="images/resources/user2.jpg" alt /></figure>
                <div className="mesg-info"> <span>Fatima J.</span> <a href="#" title>Helo dear i wanna talk to you</a> </div>
              </li>
              <li>
                <figure><img src="images/resources/user3.jpg" alt /></figure>
                <div className="mesg-info"> <span>Fawad Ahmed</span> <a href="#" title>Helo dear i wanna talk to you</a> </div>
              </li>
              <li>
                <figure><img src="images/resources/user4.jpg" alt /></figure>
                <div className="mesg-info"> <span>Saim Turan</span> <a href="#" title>Helo dear i wanna talk to you</a> </div>
              </li>
              <li>
                <figure><img src="images/resources/user5.jpg" alt /></figure>
                <div className="mesg-info"> <span>Alis wells</span> <a href="#" title>Helo dear i wanna talk to you</a> </div>
              </li>
            </ul>
            <a href="#" title className="main-btn" data-ripple>view all</a> </div>
          <div className="tab-pane fade" id="notifications">
            <h4><i className="icofont-bell-alt" /> notifications</h4>
            <ul className="notificationz">
              <li>
                <figure><img src="images/resources/user5.jpg" alt /></figure>
                <div className="mesg-info"> <span>Alis wells</span> <a href="#" title>recommend your post</a> </div>
              </li>
              <li>
                <figure><img src="images/resources/user4.jpg" alt /></figure>
                <div className="mesg-info"> <span>Alis wells</span> <a href="#" title>share your post <strong>a good time today!</strong></a> </div>
              </li>
              <li>
                <figure><img src="images/resources/user2.jpg" alt /></figure>
                <div className="mesg-info"> <span>Alis wells</span> <a href="#" title>recommend your post</a> </div>
              </li>
              <li>
                <figure><img src="images/resources/user1.jpg" alt /></figure>
                <div className="mesg-info"> <span>Alis wells</span> <a href="#" title>share your post <strong>a good time today!</strong></a> </div>
              </li>
              <li>
                <figure><img src="images/resources/user3.jpg" alt /></figure>
                <div className="mesg-info"> <span>Alis wells</span> <a href="#" title>recommend your post</a> </div>
              </li>
            </ul>
            <a href="#" title className="main-btn" data-ripple>view all</a> </div>
        </div>
      </div>
    </div>
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
    <div className="new-question-popup">
      <div className="popup"> <span className="popup-closed"><i className="icofont-close" /></span>
        <div className="popup-meta">
          <div className="popup-head">
            <h5><i className="icofont-question-circle" /> Ask Question</h5>
          </div>
          <div className="post-new">
            <form method="post" className="c-form">
              <input type="text" placeholder="Question Title" />
              <textarea placeholder="Write Question" defaultValue={""} />
              <select>
                <option>Select Your Question Type</option>
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
    {/* ask question */} 
  </div>
</div>
 
    </>
  );
}
