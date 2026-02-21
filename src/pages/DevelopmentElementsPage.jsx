
import React from 'react';

export default function developmentelementsPage() {
  return (
    <>
      <div>
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
                <h1>Developing Elements</h1>
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
                  <li><a href="#">Button</a></li>
                  <li><a href="#">Card</a></li>
                  <li><a href="#">Colors</a></li>
                  <li><a href="#">Flex</a></li>
                  <li><a href="#">Form</a></li>
                  <li><a href="#">Grid</a></li>
                  <li><a href="#">Heading</a></li>
                  <li><a href="#">List</a></li>
                  <li><a href="#">Pagination</a></li>
                  <li><a href="#">Position</a></li>
                  <li><a href="#">Table</a></li>
                  <li><a href="#">Tab</a></li>
                  <li><a href="#">Text</a></li>
                </ul>
              </nav>
            </div>
            <div className="col-lg-9 col-md-9">
              <div className="main-wraper">
                <ul className="uk-switcher pl-lg-3" id="components-nav">
                  {/* Button */}
                  <li>
                    <div className="mt-4 uk-grid-large" uk-grid>
                      <div className="uk-width-3-4@s">
                        <h2 id="btn-introduction"> Button</h2>
                        <p className="mb-4"> Easily create nice looking .buttons, which come in different styles
                        </p>
                        <h4> Basic </h4>
                        <button className="button primary">default </button>
                        <button className="button primary circle">default </button>
                        <h4 className="uk-margin-medium-top"> Basic Size </h4>
                        <p uk-margin>
                          <button className="button primary small">small </button>
                          <button className="button primary">default </button>
                          <button className="button primary large">Large </button>
                          <button className="button primary xlarge">Large </button>
                        </p>
                        <pre className="bg-light"><span className="hljs-tag">&lt;<span className="hljs-name">button</span>{"  "}<span className="hljs-attr">class</span>=<span className="hljs-string">"button small"</span>&gt;</span>Xsmall<span className="hljs-tag">&lt;/<span className="hljs-name">button</span>&gt;</span> {"\n"}<span className="hljs-tag">&lt;<span className="hljs-name">button</span>{"  "}<span className="hljs-attr">class</span>=<span className="hljs-string">"button"</span>&gt;</span>Default<span className="hljs-tag">&lt;/<span className="hljs-name">button</span>&gt;</span> {"\n"}<span className="hljs-tag">&lt;<span className="hljs-name">button</span>{"  "}<span className="hljs-attr">class</span>=<span className="hljs-string">"button Large"</span>&gt;</span>Large<span className="hljs-tag">&lt;/<span className="hljs-name">button</span>&gt;</span> {"\n"}<span className="hljs-tag">&lt;<span className="hljs-name">button</span>{"  "}<span className="hljs-attr">class</span>=<span className="hljs-string">"button xlarge"</span>&gt;</span>xlarge<span className="hljs-tag">&lt;/<span className="hljs-name">button</span>&gt;</span></pre>
                        <br /> <br />
                        <h4 id="Button-colors" className="uk-margin-medium-top"> Button Colors </h4>
                        <p>There are several style modifiers available. Just add one of the following
                          classes to
                          apply a
                          different look.</p>
                        <code>.primary</code> <code>.secondary</code> <code>.danger</code>
                        <code>.success</code>
                        <code>.info</code>
                        <code>.dark</code> <code>.grey</code> <code>.white </code>
                        <code>.light</code>
                        <div className="uk-margin">
                          <button type="button" className="button primary">primary</button>
                          <button type="button" className="button secondary ">secondary</button>
                          <button type="button" className="button primary disabled">disabled</button>
                        </div>
                        <div className="uk-margin">
                          <button type="button" className="button danger">danger</button>
                          <button type="button" className="button primary">primary</button>
                          <button type="button" className="button success">success</button>
                          <button type="button" className="button info">info</button>
                        </div>
                        <div className="uk-margin">
                          <button type="button" className="button grey">grey</button>
                          <button type="button" className="button white">white</button>
                          <button type="button" className="button dark">dark</button>
                          <button type="button" className="button light">light</button>
                        </div>
                        <br />
                        <pre className="bg-light"><span className="hljs-tag">&lt;<span className="hljs-name">button</span>{"  "}<span className="hljs-attr">class</span>=<span className="hljs-string">"button danger"</span>&gt;</span>danger<span className="hljs-tag">&lt;/<span className="hljs-name">button</span>&gt;</span></pre>
                        <h4 id="Button-outline" className="uk-margin-medium-top"> Outline Button</h4>
                        <div className="uk-margin">
                          <button type="button" className="button outline-primary">primary</button>
                          <button type="button" className="button outline-secondary">Secondary</button>
                          <button type="button" className="button outline-success">Success</button>
                          <button type="button" className="button outline-info">Info</button>
                          <button type="button" className="button outline-danger">Danger</button>
                          <button type="button" className="button outline-light">light</button>
                          <button type="button" className="button outline-dark">Dark</button>
                        </div>
                        <br />
                        <pre className="bg-light"> <span className="hljs-tag">&lt;<span className="hljs-name">button</span>{"  "}<span className="hljs-attr">class</span>=<span className="hljs-string">"button outline-primary"</span>&gt;</span>primary<span className="hljs-tag">&lt;/<span className="hljs-name">button</span>&gt;</span></pre>
                        <h4 id="Button-soft" className="uk-margin-medium-top"> Soft color</h4>
                        <div className="uk-margin">
                          <button type="button" className="button soft-primary">primary</button>
                          <button type="button" className="button soft-secondary">Secondary</button>
                          <button type="button" className="button soft-success">Success</button>
                          <button type="button" className="button soft-info">info</button>
                          <button type="button" className="button soft-danger">Danger</button>
                          <button type="button" className="button soft-light">Light</button>
                          <button type="button" className="button soft-dark">Dark</button>
                        </div>
                        <br />
                        <pre className="bg-light"> <span className="hljs-tag">&lt;<span className="hljs-name">button</span>{"  "}<span className="hljs-attr">class</span>=<span className="hljs-string">"button{"  "}soft-primary"</span>&gt;</span>primary<span className="hljs-tag">&lt;/<span className="hljs-name">button</span>&gt;</span></pre>
                        <p className="mt-md">add <code>.disabled</code>to make disable </p>
                        <div className="uk-margin">
                          <button type="button" className="button soft-primary disabled">primary</button>
                          <button type="button" className="button soft-secondary disabled">Secondary</button>
                          <button type="button" className="button soft-success disabled">Success</button>
                          <button type="button" className="button soft-info disabled">info</button>
                          <button type="button" className="button soft-danger disabled">Danger</button>
                          <button type="button" className="button soft-light disabled">Light</button>
                          <button type="button" className="button soft-dark disabled">Dark</button>
                        </div>
                        <br />
                        <pre className="bg-light"> <span className="hljs-tag">&lt;<span className="hljs-name">button</span>{"  "}<span className="hljs-attr">class</span>=<span className="hljs-string">"button soft-primary disabled"</span>&gt;</span>Soft primary<span className="hljs-tag">&lt;/<span className="hljs-name">button</span>&gt;</span></pre>
                        <h4 id="transtion" className="uk-margin-medium-top">Button transition 3d hover</h4>
                        <div className="uk-margin">
                          <button type="button" className="button primary transition-3d-hover">primary</button>
                          <button type="button" className="button secondary transition-3d-hover">Secondary</button>
                          <button type="button" className="button success transition-3d-hover">Success</button>
                          <button type="button" className="button info transition-3d-hover">info</button>
                        </div>
                        <div className="uk-margin">
                          <button type="button" className="button danger transition-3d-hover">Danger</button>
                          <button type="button" className="button primary transition-3d-hover">primary</button>
                          <button type="button" className="button light transition-3d-hover">Light</button>
                          <button type="button" className="button dark transition-3d-hover">Dark</button>
                        </div>
                        <br />
                        <pre className="bg-light"> <span className="hljs-tag">&lt;<span className="hljs-name">button</span>{"  "}<span className="hljs-attr">class</span>=<span className="hljs-string">"button primary transition-3d-hover"</span>&gt;</span>Soft primary<span className="hljs-tag">&lt;/<span className="hljs-name">button</span>&gt;</span></pre>
                        <h4 id="Button-Social" className="uk-margin-medium-top">Button Social</h4>
                        <div className="uk-margin">
                          <button type="button" className="button primary">Twitter</button>
                          <button type="button" className="button soft-primary">Twitter</button>
                          <button type="button" className="button danger">Google+</button>
                          <button type="button" className="button soft-danger">Google+</button>
                        </div>
                        <div className="uk-margin">
                          <button type="button" className="button facebook">facebook</button>
                          <button type="button" className="button soft-facebook">facebook</button>
                          <button type="button" className="button linkedin">linkedin</button>
                          <button type="button" className="button soft-linkedin">linkedin</button>
                        </div>
                        <div className="uk-margin">
                          <button type="button" className="button dark">Github</button>
                          <button type="button" className="button soft-dark">Github</button>
                        </div>
                        <h4 id="btn-with-icon" className="uk-margin-medium-top" aria-hidden="false">Button with icon </h4>
                        <div className="uk-margin">
                          <button type="button" className="button primary icon-label">
                            <span className="inner-icon"><i className="icofont-ui-play" /></span>
                            <span className="inner-text">Play now</span>
                          </button>
                          <button type="button" className="button primary icon-label bg-facebook">
                            <span className="inner-icon"><i className="icofont-facebook" /></span>
                            <span className="inner-text">Facebook</span>
                          </button>
                          <button type="button" className="button success icon-label">
                            <span className="inner-icon"><i className="icofont-cart-alt" /></span>
                            <span className="inner-text">Add to cart</span>
                          </button>
                          <button type="button" className="button danger icon-label">
                            <span className="inner-icon"><i className="icofont-trash" /></span>
                            <span className="inner-text">Delete item</span>
                          </button>
                        </div>
                        <div className="uk-margin">
                          <button type="button" className="button dark icon-label">
                            <span className="inner-text">Next step</span>
                            <span className="inner-icon"> <i className="icofont-simple-right" />
                            </span>
                          </button>
                          <button type="button" className="button secondary icon-label">
                            <span className="inner-text">Add to cart</span>
                            <span className="inner-icon"> <i className="icofont-ui-cart" />
                            </span>
                          </button>
                          <button type="button" className="button danger icon-label">
                            <span className="inner-text">Delete item</span>
                            <span className="inner-icon"> <i className="icofont-ui-delete" />
                            </span>
                          </button>
                        </div>
                        <div className="uk-margin">
                          <button className="button outline-primary transition-3d-hover">
                            <i className="icofont-cash-on-delivery-alt" /> Buy
                            now
                          </button>
                          <button className="button primary transition-3d-hover">
                            <i className="icofont-close-line" /> Delete
                          </button>
                        </div>
                        <h4 id="btn-animation" className="uk-margin-medium-top">Button with icon animation</h4>
                        <div className="uk-margin">
                          <button type="button" className="button primary animated-x">
                            <span className="inner-visible">Next step</span>
                            <span className="inner-hidden"><i className="icofont-arrow-right" />
                            </span>
                          </button>
                          <button type="button" className="button secondary animated-y">
                            <span className="inner-hidden">Buy</span>
                            <span className="inner-visible"><i className="icofont-shopping-cart" /></span>
                          </button>
                        </div>
                        <div>
                          <button className="button button-default Markup-botton  uk-margin-small-top" type="button" uk-toggle="target: #Button-with-icon">
                            MARKUP</button>
                          <div id="Button-with-icon" aria-hidden="true" className="uk-margin-small-top" hidden>
                            <pre><code id="code-k0rq7kbr" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">button</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"button primary transition-3d-hover"</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">i</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"icon-feather-shopping-cart mr-2"</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">i</span>&gt;</span> Buy now{"\n"}<span className="hljs-tag">&lt;/<span className="hljs-name">button</span>&gt;</span>{"\n"}{"\n"}<span className="hljs-tag">&lt;<span className="hljs-name">button</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"button outline-primary transition-3d-hover"</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">i</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"icon-feather-shopping-cart mr-2"</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">i</span>&gt;</span> Buy now{"\n"}<span className="hljs-tag">&lt;/<span className="hljs-name">button</span>&gt;</span>{"\n"}{"\n"}<span className="hljs-tag">&lt;<span className="hljs-name">button</span>{"  "}<span className="hljs-attr">class</span>=<span className="hljs-string">"button danger icon-label bg-facebook"</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">span</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"inner-icon"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">i</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"fas fa-play"</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">i</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">span</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">span</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"inner-text"</span>&gt;</span>Watch now <span className="hljs-tag">&lt;/<span className="hljs-name">span</span>&gt;</span>{"\n"}<span className="hljs-tag">&lt;/<span className="hljs-name">button</span>&gt;</span></code></pre>
                          </div>
                        </div>
                        <div className="uk-margin-medium-top" id="iconbox" uk-grid>
                          <div className="uk-margin">
                            <h4 className="mb-6">iconbox with button styles</h4>
                            <span className="iconbox button danger">
                              <i className="icofont-cart-alt" />
                            </span>
                            <span className="iconbox button primary">
                              <i className="icofont-diamond" />
                            </span>
                            <span className="iconbox button danger circle">
                              <i className="icofont-dice" />
                            </span>
                            <span className="iconbox button primary circle">
                              <i className="icofont-favourite" />
                            </span>
                            <span className="iconbox button soft-danger">
                              <i className="icofont-heart" />
                            </span>
                            <span className="iconbox button soft-primary">
                              <i className="icofont-horn" />
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="uk-width-1-4@s uk-visible@s">
                        <ul className="uk-list docs-list" uk-scrollspy-nav="closest: li; scroll: true" uk-sticky="offset:100;media : @m; top:20">
                          <li> <a href="#btn-introduction" uk-scroll> Basic </a></li>
                          <li> <a href="#Button-colors" uk-scroll> Colours </a></li>
                          <li> <a href="#Button-outline" uk-scroll> outline </a></li>
                          <li> <a href="#Button-soft" uk-scroll> Soft colour </a></li>
                          <li> <a href="#transtion" uk-scroll> transition 3D </a></li>
                          <li> <a href="#Button-Social" uk-scroll> Social </a></li>
                          <li> <a href="#btn-with-icon" uk-scroll> With Icon </a></li>
                          <li> <a href="#btn-animation" uk-scroll> animation </a></li>
                          <li> <a href="#iconbox" uk-scroll> iconbox </a></li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  {/* Card */}
                  <li>
                    <div className="mt-4 uk-grid-large" uk-grid>
                      <div className="uk-width-3-4@s">
                        <h2> Card</h2>
                        <p className="mb-4"> Create layout boxes with different styles. </p>
                        <h6 id="card-intro"> Usage : </h6>
                        <p>By default, a card is blank. That is why it is important to add a modifier class for
                          styling. In our example we are using the <code>.uk-card-default</code> class.</p>
                        <h6> PREVIEW</h6>
                        <div className="uk-card uk-card-default uk-card-body uk-width-1-2@m">
                          <h4 className="uk-card-title">Default</h4>
                          <p>Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipiscing elit, sed
                            do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div>
                          <button className="Markup-botton button uk-margin-small-top" type="button" uk-toggle="target: #card"> MARKUP</button>
                          <div id="card" aria-hidden="true" className=" uk-margin-small-top" hidden>
                            <pre><code id="code-jnpra2wc" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-default uk-card-body uk-width-1-2@m"</span>&gt;</span>{"\n"}<span className="hljs-tag">&lt;<span className="hljs-name">h3</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card-title"</span>&gt;</span>Default<span className="hljs-tag">&lt;/<span className="hljs-name">h3</span>&gt;</span>{"\n"}<span className="hljs-tag">&lt;<span className="hljs-name">p</span>&gt;</span>Lorem ipsum <span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>dolor<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span> sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span></code></pre>
                          </div>
                        </div>
                        <h3 className="uk-margin uk-margin-medium-top" id="Style-modifiers"> Style modifiers</h3>
                        <p> UIkit includes a number of modifiers that can be used to add a
                          specific style to cards. <br />
                          <code>.uk-card-default</code> <code> .uk-card-primary </code> <code>
                            .uk-card-secondary
                          </code> or you can use <a href="http://demo.foxthemes.net/elements/colors.html">Background</a> compounents
                          .
                          and <code>.uk-light</code> </p>
                        <h6> PREVIEW</h6>
                        <div className="uk-child-width-1-2@m uk-grid-small uk-grid-match" uk-grid>
                          <div>
                            <div className="uk-card uk-card-default uk-card-body">
                              <h4 className="uk-card-title">Default</h4>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            </div>
                          </div>
                          <div>
                            <div className="uk-card uk-card-primary uk-card-body">
                              <h4 className="uk-card-title">Primary</h4>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            </div>
                          </div>
                          <div>
                            <div className="uk-card uk-card-secondary uk-card-body">
                              <h4 className="uk-card-title">Secondary</h4>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            </div>
                          </div>
                          <div>
                            <div className="uk-card-default uk-card-body bg-danger uk-light">
                              <h5> Default </h5>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            </div>
                          </div>
                          <div>
                            <div className="uk-card-default uk-card-body bg-primary uk-light">
                              <h5> Default </h5>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            </div>
                          </div>
                          <div>
                            <div className="uk-card-default uk-card-body bg-info uk-light">
                              <h5> Default </h5>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            </div>
                          </div>
                        </div>
                        <div>
                          <button className="Markup-botton button uk-margin-small-top" type="button" uk-toggle="target: #Card-Style"> MARKUP</button>
                          <div id="Card-Style" aria-hidden="true" className=" uk-margin-small-top" hidden>
                            <pre><code id="code-k0oydzq1" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-child-width-1-3@m uk-grid-small uk-grid-match"</span> <span className="hljs-attr">uk-grid</span>&gt;</span>{"\n"}{"     "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span>&gt;</span>{"\n"}{"         "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-default uk-card-body"</span>&gt;</span>{"\n"}{"             "}<span className="hljs-tag">&lt;<span className="hljs-name">h4</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card-title"</span>&gt;</span>Default<span className="hljs-tag">&lt;/<span className="hljs-name">h4</span>&gt;</span>{"\n"}{"             "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"         "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"     "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"     "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span>&gt;</span>{"\n"}{"         "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-primary uk-card-body"</span>&gt;</span>{"\n"}{"             "}<span className="hljs-tag">&lt;<span className="hljs-name">h4</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card-title"</span>&gt;</span>Primary<span className="hljs-tag">&lt;/<span className="hljs-name">h4</span>&gt;</span>{"\n"}{"             "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"         "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"     "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"     "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span>&gt;</span>{"\n"}{"         "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-secondary uk-card-body"</span>&gt;</span>{"\n"}{"             "}<span className="hljs-tag">&lt;<span className="hljs-name">h4</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card-title"</span>&gt;</span>Secondary<span className="hljs-tag">&lt;/<span className="hljs-name">h4</span>&gt;</span>{"\n"}{"             "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"         "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"     "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\n"}{"     "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span>&gt;</span>{"\n"}{"         "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card-default uk-card-body bg-danger uk-light"</span>&gt;</span>{"\n"}{"             "}<span className="hljs-tag">&lt;<span className="hljs-name">h5</span>&gt;</span> Default <span className="hljs-tag">&lt;/<span className="hljs-name">h5</span>&gt;</span>{"\n"}{"             "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"         "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"     "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"     "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span>&gt;</span>{"\n"}{"         "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card-default uk-card-body bg-primary uk-light"</span>&gt;</span>{"\n"}{"             "}<span className="hljs-tag">&lt;<span className="hljs-name">h5</span>&gt;</span> Default <span className="hljs-tag">&lt;/<span className="hljs-name">h5</span>&gt;</span>{"\n"}{"             "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"         "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"     "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"     "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span>&gt;</span>{"\n"}{"         "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card-default uk-card-body bg-info uk-light"</span>&gt;</span>{"\n"}{"             "}<span className="hljs-tag">&lt;<span className="hljs-name">h5</span>&gt;</span> Default <span className="hljs-tag">&lt;/<span className="hljs-name">h5</span>&gt;</span>{"\n"}{"             "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"         "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"     "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"} <span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span></code></pre>
                          </div>
                        </div>
                        <h3 className="uk-margin uk-margin-medium-top" id="Hover-modifier"> Hover modifier</h3>
                        <p>To create a hover effect on the card, add the <code>.uk-card-hover</code> class. This
                          comes in handy when working with anchors and can be combined with the other card
                          modifiers.</p>
                        <h6> PREVIEW</h6>
                        <div className="uk-child-width-1-2@s uk-grid-match" uk-grid>
                          <div>
                            <div className="uk-card uk-card-hover uk-card-body">
                              <h4 className="uk-card-title">Hover</h4>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            </div>
                          </div>
                          <div>
                            <div className="uk-card uk-card-default uk-card-hover uk-card-body">
                              <h4 className="uk-card-title">Default</h4>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            </div>
                          </div>
                          <div>
                            <div className="uk-card uk-card-primary uk-card-hover uk-card-body uk-light">
                              <h4 className="uk-card-title">Primary</h4>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            </div>
                          </div>
                          <div>
                            <div className="uk-card uk-card-secondary uk-card-hover uk-card-body uk-light">
                              <h4 className="uk-card-title">Secondary</h4>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            </div>
                          </div>
                        </div>
                        <div>
                          <button className="Markup-botton button uk-margin-small-top" type="button" uk-toggle="target: #Card-hover"> MARKUP</button>
                          <div id="Card-hover" aria-hidden="true" className=" uk-margin-small-top" hidden>
                            <pre><code id="code-k0oyhqyu" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-child-width-1-2@s uk-grid-match"</span> <span className="hljs-attr">uk-grid</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-hover uk-card-body"</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">h3</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card-title"</span>&gt;</span>Hover<span className="hljs-tag">&lt;/<span className="hljs-name">h3</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-default uk-card-hover uk-card-body"</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">h3</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card-title"</span>&gt;</span>Default<span className="hljs-tag">&lt;/<span className="hljs-name">h3</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-primary uk-card-hover uk-card-body uk-light"</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">h3</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card-title"</span>&gt;</span>Primary<span className="hljs-tag">&lt;/<span className="hljs-name">h3</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-secondary uk-card-hover uk-card-body uk-light"</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">h3</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card-title"</span>&gt;</span>Secondary<span className="hljs-tag">&lt;/<span className="hljs-name">h3</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span></code></pre>
                          </div>
                        </div>
                        <h3 className="uk-margin-medium-top uk-margin" id="Size-modifier"> Size modifier</h3>
                        <p>You can apply different size modifiers to cards that will decrease or increase their
                          padding.</p>
                        <h6> PREVIEW</h6>
                        <div className="uk-child-width-1-2@s" uk-grid>
                          <div>
                            <div className="uk-card uk-card-default uk-card-small uk-card-body">
                              <h4 className="uk-card-title">Small</h4>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                          </div>
                          <div>
                            <div className="uk-card uk-card-default uk-card-large uk-card-body">
                              <h4 className="uk-card-title">Large</h4>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                          </div>
                        </div>
                        <div>
                          <button className="Markup-botton button uk-margin-small-top" type="button" uk-toggle="target: #Card-size"> MARKUP</button>
                          <div id="Card-size" aria-hidden="true" className=" uk-margin-small-top" hidden>
                            <pre><code id="code-k0oyhqyv" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-child-width-1-2@s"</span> <span className="hljs-attr">uk-grid</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-default uk-card-small uk-card-body"</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">h3</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card-title"</span>&gt;</span>Small<span className="hljs-tag">&lt;/<span className="hljs-name">h3</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-default uk-card-large uk-card-body"</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">h3</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card-title"</span>&gt;</span>Large<span className="hljs-tag">&lt;/<span className="hljs-name">h3</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span></code></pre>
                          </div>
                        </div>
                        <h3 className="uk-margin-medium-top" id="card-header-and-footer"> Header &amp; footer </h3>
                        <p>You can also divide a card into header and footer — around the default body. Just add
                          the <code>.uk-card-header</code> or <code>.uk-card-footer</code> class to a
                          <code>&lt;div&gt;</code> element inside the card.</p>
                        <h6> PREVIEW</h6>
                        <div className="uk-card uk-card-default uk-width-1-2@m  uk-card-small">
                          <div className="uk-card-header">
                            <div className="uk-grid-small uk-flex-middle" uk-grid>
                              <div className="uk-width-auto">
                                <img className="uk-border-circle" src="https://wpkixx.com/html/socimo/images/elements/user-avatar.jpg" alt style={{width: 40}} />
                              </div>
                              <div className="uk-width-expand">
                                <h4 className="uk-card-title uk-margin-remove-bottom">Title</h4>
                                <p className="uk-text-meta uk-margin-remove-top"><time dateTime="2016-04-01T19:00">April 01, 2016</time></p>
                              </div>
                            </div>
                          </div>
                          <div className="uk-card-body">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                              tempor incididunt.</p>
                          </div>
                          <div className="uk-card-footer">
                            <a href="#" className="uk-button uk-button-text">Read more</a>
                          </div>
                        </div>
                        <div>
                          <button className="Markup-botton button uk-margin-small-top" type="button" uk-toggle="target: #Card-head-foot"> MARKUP</button>
                          <div id="Card-head-foot" aria-hidden="true" className=" uk-margin-small-top" hidden>
                            <pre><code id="code-k0oyhqyw" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-default uk-width-1-2@m"</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card-header"</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-grid-small uk-flex-middle"</span> <span className="hljs-attr">uk-grid</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-width-auto"</span>&gt;</span>{"\n"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">img</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-border-circle"</span> <span className="hljs-attr">width</span>=<span className="hljs-string">"40"</span> <span className="hljs-attr">height</span>=<span className="hljs-string">"40"</span> <span className="hljs-attr">src</span>=<span className="hljs-string">"images/avatar.jpg"</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-width-expand"</span>&gt;</span>{"\n"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">h3</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card-title uk-margin-remove-bottom"</span>&gt;</span>Title<span className="hljs-tag">&lt;/<span className="hljs-name">h3</span>&gt;</span>{"\n"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-text-meta uk-margin-remove-top"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">time</span> <span className="hljs-attr">datetime</span>=<span className="hljs-string">"2016-04-01T19:00"</span>&gt;</span>April 01, 2016<span className="hljs-tag">&lt;/<span className="hljs-name">time</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card-body"</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card-footer"</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-button uk-button-text"</span>&gt;</span>Read more<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span></code></pre>
                          </div>
                        </div>
                        <h3 className="uk-margin-medium-top" id="Media-modifiers"> Media modifiers. </h3>
                        <p>To display an image inside a card without any spacing, add one of the following
                          classes to a <code>&lt;div&gt;</code> around the <code>&lt;img&gt;</code> element.
                          Mind that you need to modify the source order accordingly.</p>
                        <h6> PREVIEW</h6>
                        <div className="uk-child-width-1-2@m" uk-grid>
                          <div>
                            <div className="uk-card uk-card-default">
                              <div className="uk-card-media-top">
                                <img src="https://wpkixx.com/html/socimo/images/elements/image.jpg" alt />
                              </div>
                              <div className="uk-card-body">
                                <h4 className="uk-card-title">Media Top</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt.</p>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="uk-card uk-card-default">
                              <div className="uk-card-body">
                                <h4 className="uk-card-title">Media Bottom</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                  eiusmod tempor incididunt.</p>
                              </div>
                              <div className="uk-card-media-bottom">
                                <img src="https://wpkixx.com/html/socimo/images/elements/light.jpg" alt />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <button className="Markup-botton button uk-margin-small-top" type="button" uk-toggle="target: #Card-media2"> MARKUP</button>
                          <div id="Card-media2" aria-hidden="true" className=" uk-margin-small-top" hidden>
                            <pre><code id="code-k0oyhqyx" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-child-width-1-2@m"</span> <span className="hljs-attr">uk-grid</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-default"</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card-media-top"</span>&gt;</span>{"\n"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">img</span> <span className="hljs-attr">src</span>=<span className="hljs-string">"images/light.jpg"</span> <span className="hljs-attr">alt</span>=<span className="hljs-string">""</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card-body"</span>&gt;</span>{"\n"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">h3</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card-title"</span>&gt;</span>Media Top<span className="hljs-tag">&lt;/<span className="hljs-name">h3</span>&gt;</span>{"\n"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-default"</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card-body"</span>&gt;</span>{"\n"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">h3</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card-title"</span>&gt;</span>Media Bottom<span className="hljs-tag">&lt;/<span className="hljs-name">h3</span>&gt;</span>{"\n"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card-media-bottom"</span>&gt;</span>{"\n"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">img</span> <span className="hljs-attr">src</span>=<span className="hljs-string">"images/light.jpg"</span> <span className="hljs-attr">alt</span>=<span className="hljs-string">""</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span></code></pre>
                          </div>
                        </div>
                        <h3 className="uk-margin-medium-top" id="Horizontal-alignment"> Horizontal alignment </h3>
                        <h6> PREVIEW</h6>
                        <div className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid>
                          <div className="uk-card-media-left uk-cover-container">
                            <img src="https://wpkixx.com/html/socimo/images/elements/image.jpg" alt uk-cover />
                            <canvas width={600} height={400} />
                          </div>
                          <div>
                            <div className="uk-card-body">
                              <h3 className="uk-card-title">Media Left</h3>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt.</p>
                            </div>
                          </div>
                        </div>
                        <div className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid>
                          <div className="uk-flex-last@s uk-card-media-right uk-cover-container">
                            <img src="https://wpkixx.com/html/socimo/images/elements/dark.jpg" alt uk-cover />
                            <canvas width={600} height={400} />
                          </div>
                          <div>
                            <div className="uk-card-body">
                              <h3 className="uk-card-title">Media Right</h3>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt.</p>
                            </div>
                          </div>
                        </div>
                        <div>
                          <button className="Markup-botton button uk-margin-small-top" type="button" uk-toggle="target: #Card-media"> MARKUP</button>
                          <div id="Card-media" aria-hidden="true" className=" uk-margin-small-top" hidden>
                            <pre><code id="code-k0oyhqyy" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin"</span> <span className="hljs-attr">uk-grid</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card-media-left uk-cover-container"</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">img</span> <span className="hljs-attr">src</span>=<span className="hljs-string">"images/light.jpg"</span> <span className="hljs-attr">alt</span>=<span className="hljs-string">""</span> <span className="hljs-attr">uk-cover</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">canvas</span> <span className="hljs-attr">width</span>=<span className="hljs-string">"600"</span> <span className="hljs-attr">height</span>=<span className="hljs-string">"400"</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">canvas</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card-body"</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">h3</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card-title"</span>&gt;</span>Media Left<span className="hljs-tag">&lt;/<span className="hljs-name">h3</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\n"}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin"</span> <span className="hljs-attr">uk-grid</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-flex-last@s uk-card-media-right uk-cover-container"</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">img</span> <span className="hljs-attr">src</span>=<span className="hljs-string">"images/light.jpg"</span> <span className="hljs-attr">alt</span>=<span className="hljs-string">""</span> <span className="hljs-attr">uk-cover</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">canvas</span> <span className="hljs-attr">width</span>=<span className="hljs-string">"600"</span> <span className="hljs-attr">height</span>=<span className="hljs-string">"400"</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">canvas</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card-body"</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">h3</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card-title"</span>&gt;</span>Media Right<span className="hljs-tag">&lt;/<span className="hljs-name">h3</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span></code></pre>
                          </div>
                        </div>
                      </div>
                      <div className="uk-width-1-4@s uk-visible@s">
                        <ul className="uk-list docs-list" uk-sticky="offset:100;media : @m; top:20">
                          <li> <a href="#card-intro" uk-scroll> Introduction </a></li>
                          <li> <a href="#Style-modifiers" uk-scroll> Style modifiers </a></li>
                          <li> <a href="#Hover-modifier" uk-scroll> Hover modifier </a></li>
                          <li> <a href="#Size-modifier" uk-scroll> Size modifier </a></li>
                          <li> <a href="#card-header-and-footer" uk-scroll> header and footer </a></li>
                          <li> <a href="#Media-modifiers" uk-scroll> Media modifier </a></li>
                          <li> <a href="#Horizontal-alignment" uk-scroll> Horizontal alignment </a></li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  {/* colors */}
                  <li>
                    <div className="mt-4 uk-grid-large" uk-grid>
                      <div className="uk-width-3-4@s">
                        <h2> Background</h2>
                        <p className="mb-4"> A collection of utility classes to add different backgrounds to
                          elements.</p>
                        <h4 id="Uikit-backgrounds">Uikit backgrounds</h4>
                        <p>
                          To apply a background color to an element, add one of the following classes. The
                          actual color
                          for each modifier is defined by the UIkit style that you have chosen or
                          customized.
                        </p>
                        <code className="mr-2"> .uk-background-default </code> <code className="mr-2">
                          .uk-background-muted </code>
                        <code className="mr-2"> .uk-background-primary </code> <code className="mr-2">
                          .uk-background-secondary </code>
                        <br /><br /><br />
                        <div className="uk-child-width-1-2@s uk-text-center uk-flex-center" uk-grid>
                          <div>
                            <div className="uk-background-default uk-padding uk-panel">
                              <p className="uk-h4">Default</p>
                            </div>
                          </div>
                          <div>
                            <div className="uk-background-muted uk-padding uk-panel">
                              <p className="uk-h4">Muted</p>
                            </div>
                          </div>
                          <div>
                            <div className="uk-background-primary uk-light uk-padding uk-panel">
                              <p className="uk-h4">Primary</p>
                            </div>
                          </div>
                          <div>
                            <div className="uk-background-secondary uk-light uk-padding uk-panel">
                              <p className="uk-h4">Secondary</p>
                            </div>
                          </div>
                        </div>
                        <h3 className="uk-margin-medium-top" id="Theme-backgrounds">Theme backgrounds</h3>
                        <p>To apply a background color to an element, add one of the following classes :
                          <br />
                          <code className="mr-2"> .bg-White </code> <code className="mr-2"> .bg-primary </code>
                          <code className="mr-2"> .bg-Danger </code> <code className="mr-2"> .bg-success </code>
                          <code className="mr-2"> .bg-primary </code> <code className="mr-2"> .bg-info </code>
                          <code className="mr-2"> .bg-grey </code> <code className="mr-2"> .bg-Dark </code>
                        </p> <br /> <br />
                        <div className="uk-child-width-1-3@s uk-text-center" uk-grid>
                          <div>
                            <div className="uk-padding uk-panel bg-white border">
                              <p className="uk-h4">White</p>
                            </div>
                          </div>
                          <div>
                            <div className="uk-padding uk-panel uk-light bg-primary">
                              <p className="uk-h4">Primary</p>
                            </div>
                          </div>
                          <div>
                            <div className="uk-padding uk-panel uk-light bg-danger">
                              <p className="uk-h4">Danger</p>
                            </div>
                          </div>
                          <div>
                            <div className="uk-padding uk-panel uk-light bg-success">
                              <p className="uk-h4">Success</p>
                            </div>
                          </div>
                          <div>
                            <div className="uk-padding uk-panel uk-light bg-primary">
                              <p className="uk-h4">primary</p>
                            </div>
                          </div>
                          <div>
                            <div className="uk-padding uk-panel uk-light bg-info">
                              <p className="uk-h4">Info</p>
                            </div>
                          </div>
                          <div>
                            <div className="uk-padding uk-panel uk-light bg-dark">
                              <p className="uk-h4">Grey</p>
                            </div>
                          </div>
                          <div>
                            <div className="uk-padding uk-panel uk-light bg-dark">
                              <p className="uk-h4">Dark</p>
                            </div>
                          </div>
                          <div>
                            <div className="uk-padding uk-panel bg-light border">
                              <p className="uk-h4">Light</p>
                            </div>
                          </div>
                        </div>
                        <p className="uk-text-small mt-3"><span className="uk-label">Note</span> To change the text
                          inside the element to light use this class <code>uk-light</code>. </p>
                        <h3 className="uk-margin-medium-top" id="Theme-soft-backgrounds">Theme soft backgrounds
                        </h3>
                        <p>To apply a background color to an element, add one of the following classes :
                          <br />
                          <code className="mr-2"> .bg-soft-primary </code> <code className="mr-2"> .bg-soft-Danger
                          </code> <code className="mr-2"> .bg-soft-success </code>
                          <code className="mr-2"> .bg-soft-primary </code> <code className="mr-2"> .bg-soft-info
                          </code> <code className="mr-2"> .bg-soft-grey </code> <code className="mr-2">
                            .bg-soft-Dark </code>
                        </p> <br /> <br />
                        <div className="uk-child-width-1-3@s uk-text-center" uk-grid>
                          <div>
                            <div className="uk-padding uk-panel bg-soft-white">
                              <p className="uk-h4">White</p>
                            </div>
                          </div>
                          <div>
                            <div className="uk-padding uk-panel bg-soft-primary">
                              <p className="uk-h4">Primary</p>
                            </div>
                          </div>
                          <div>
                            <div className="uk-padding uk-panel bg-soft-danger">
                              <p className="uk-h4">Danger</p>
                            </div>
                          </div>
                          <div>
                            <div className="uk-padding uk-panel bg-soft-success">
                              <p className="uk-h4">Success</p>
                            </div>
                          </div>
                          <div>
                            <div className="uk-padding uk-panel bg-soft-primary">
                              <p className="uk-h4">primary</p>
                            </div>
                          </div>
                          <div>
                            <div className="uk-padding uk-panel bg-soft-info">
                              <p className="uk-h4">Info</p>
                            </div>
                          </div>
                          <div>
                            <div className="uk-padding uk-panel bg-soft-dark">
                              <p className="uk-h4">Dark</p>
                            </div>
                          </div>
                        </div>
                        <h3 className="uk-margin-medium-top" id="Gradient backgrounds">Gradient backgrounds</h3>
                        <p>To apply a background color to an element, add one of the following classes :
                          <br />
                          <code className="mr-2"> .bg-gradient-primary </code> <code className="mr-2">
                            .bg-gradient-Danger </code> <code className="mr-2"> .bg-gradient-success </code>
                          <code className="mr-2"> .bg-gradient-primary </code> <code className="mr-2">
                            .bg-gradient-info </code> <code className="mr-2"> .bg-gradient-grey </code>
                          <code className="mr-2"> .bg-gradient-dark </code> <code className="mr-2">
                            .bg-gradient-light </code>
                        </p> <br /> <br />
                        <div className="uk-child-width-1-3@s uk-text-center" uk-grid>
                          <div>
                            <div className="uk-padding uk-panel uk-light bg-gradient-primary">
                              <p className="uk-h4">Primary </p>
                            </div>
                          </div>
                          <div>
                            <div className="uk-padding uk-panel uk-light bg-gradient-danger">
                              <p className="uk-h4">Danger</p>
                            </div>
                          </div>
                          <div>
                            <div className="uk-padding uk-panel uk-light bg-gradient-success">
                              <p className="uk-h4">Success</p>
                            </div>
                          </div>
                          <div>
                            <div className="uk-padding uk-panel uk-light bg-gradient-primary">
                              <p className="uk-h4">primary</p>
                            </div>
                          </div>
                          <div>
                            <div className="uk-padding uk-panel uk-light bg-gradient-info">
                              <p className="uk-h4">Info</p>
                            </div>
                          </div>
                          <div>
                            <div className="uk-padding uk-panel uk-light bg-gradient-dark">
                              <p className="uk-h4">Dark</p>
                            </div>
                          </div>
                          <div>
                            <div className="uk-padding uk-panel uk-light bg-gradient-grey">
                              <p className="uk-h4">Grey</p>
                            </div>
                          </div>
                          <div>
                            <div className="uk-padding uk-panel uk-light bg-gradient-light">
                              <p className="uk-h4">Light</p>
                            </div>
                          </div>
                        </div>
                        <h3 className="uk-margin-medium-top" id="Text-Colors"> Text Colors</h3>
                        <br />
                        <div className="uk-child-width-1-4@s uk-text-center uk-flex-center" uk-grid>
                          <span className="text-muted">.uk-text-muted</span>
                          <span className="text-emphasis">.uk-text-emphasis</span>
                          <span className="text-primary">.uk-text-primar</span>
                          <span className="text-secondary">.uk-text-secondary</span>
                          <span className="text-success">.uk-text-success</span>
                          <span className="text-primary">.uk-text-primary</span>
                          <span className="text-info">.uk-text-info</span>
                        </div>
                      </div>
                      <div className="uk-width-1-4@s uk-visible@s">
                        <ul className="uk-list docs-list" uk-sticky="offset:100;media : @m; top:20">
                          <li> <a href="#Uikit-backgrounds" uk-scroll> Uikit backgrounds </a></li>
                          <li> <a href="#Theme-backgrounds" uk-scroll> Theme backgrounds </a></li>
                          <li> <a href="#Theme-soft-backgrounds" uk-scroll> Theme soft backgrounds </a></li>
                          <li> <a href="#Gradient%20backgrounds" uk-scroll> Gradient backgrounds </a></li>
                          <li> <a href="#Text-Colors" uk-scroll> Text Colors </a></li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  {/* Flex */}
                  <li>
                    <div className="mt-4 uk-grid-large" uk-grid>
                      <div className="uk-width-3-4@s">
                        <h2 id="flex-introduction"> Flex</h2>
                        <p className="mb-4"> Utilize the power of flexbox to create a wide range of layouts. </p>
                        <p> To apply the flexbox layout modal, use one of the following classes.
                          By default, all flex items are aligned to the left, as wide as their content and
                          matched in
                          height.</p>
                        <h6> PREVIEW </h6>
                        <div className="uk-flex">
                          <div className="uk-card uk-card-default uk-card-body">Item 1</div>
                          <div className="uk-card uk-card-default uk-card-body uk-margin-left">Item 2</div>
                          <div className="uk-card uk-card-default uk-card-body uk-margin-left">Item 3</div>
                        </div>
                        <div className="mt-lg-4">
                          <button className="Markup-botton button uk-margin-small-top" type="button" uk-toggle="target: #basic"> MARKUP</button>
                          <div id="basic" aria-hidden="true" className="uk-margin-small-top" hidden>
                            <pre><code id="code-jw0fl2j7" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-flex"</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-default uk-card-body"</span>&gt;</span>Item 1<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-default uk-card-body uk-margin-left"</span>&gt;</span>Item 2<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-default uk-card-body uk-margin-left"</span>&gt;</span>Item 3<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span></code></pre>
                          </div>
                        </div>
                        <h3 className="uk-margin-medium-top" id="flex-h-alignment"> Horizontal alignment </h3>
                        <p> These classes define the horizontal alignment of flex
                          items and
                          distribute the space between them. Add one or more of them to the flex container in
                          order to
                          configure the alignments of the flex items. By default, flex items are aligned to
                          the left
                          as does the <code> </code> class. </p>
                        <h6> PREVIEW </h6>
                        <div className="uk-overflow-auto uk-margin-medium">
                          <table className="uk-table uk-table-divider">
                            <thead>
                              <tr>
                                <th align="left">Class</th>
                                <th align="left">Description</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td align="left"><code>.uk-flex-left</code></td>
                                <td align="left">Add this class to align flex items to the left.</td>
                              </tr>
                              <tr>
                                <td align="left"><code>.uk-flex-center</code></td>
                                <td align="left">Add this class to center flex items along the main
                                  axis.
                                </td>
                              </tr>
                              <tr>
                                <td align="left"><code>.uk-flex-right</code></td>
                                <td align="left">Add this class to align flex items to the right.</td>
                              </tr>
                              <tr>
                                <td align="left"><code>.uk-flex-between</code></td>
                                <td align="left">Add this class to distribute items evenly, with equal
                                  space
                                  between
                                  the items along the main axis.</td>
                              </tr>
                              <tr>
                                <td align="left"><code>.uk-flex-around</code></td>
                                <td align="left">Add this class to distribute items evenly with equal
                                  space
                                  on both
                                  sides of each item.</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="uk-flex uk-flex-center">
                          <div className="uk-card uk-card-default uk-card-body">Item 1</div>
                          <div className="uk-card uk-card-default uk-card-body uk-margin-left">Item 2</div>
                          <div className="uk-card uk-card-default uk-card-body uk-margin-left">Item 3</div>
                        </div>
                        <div className="mt-lg-4">
                          <button className="Markup-botton button uk-margin-small-top" type="button" uk-toggle="target: #f-Horizontal"> MARKUP</button>
                          <div id="f-Horizontal" aria-hidden="true" className="uk-margin-small-top" hidden>
                            <pre><code id="code-jw0fl2j8" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-flex uk-flex-center"</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-default uk-card-body"</span>&gt;</span>Item 1<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-default uk-card-body uk-margin-left"</span>&gt;</span>Item 2<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-default uk-card-body uk-margin-left"</span>&gt;</span>Item 3<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span></code></pre>
                          </div>
                        </div>
                        <h3 className="uk-margin-medium-top" id="flex-v-alignment">Vertical alignment </h3>
                        <p> These classes define the vertical alignment of flex items.
                          By
                          default, flex items fill the height of their container as does the
                          <code>.uk-flex-stretch</code> class. </p>
                        <h6> PREVIEW </h6>
                        <div className="uk-overflow-auto uk-margin-medium">
                          <table className="uk-table uk-table-divider">
                            <thead>
                              <tr>
                                <th align="left">Class</th>
                                <th align="left">Description</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td align="left"><code>.uk-flex-stretch</code></td>
                                <td align="left">Add this class to expand flex items to fill the height
                                  of
                                  their
                                  parent.</td>
                              </tr>
                              <tr>
                                <td align="left"><code>.uk-flex-top</code></td>
                                <td align="left">Add this class to align flex items to the top.</td>
                              </tr>
                              <tr>
                                <td align="left"><code>.uk-flex-middle</code></td>
                                <td align="left">Add this class to center flex items along the cross
                                  axis.
                                </td>
                              </tr>
                              <tr>
                                <td align="left"><code>.uk-flex-bottom</code></td>
                                <td align="left">Add this class to align flex items to the bottom.</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="uk-flex uk-flex-middle uk-text-center">
                          <div className="uk-card uk-card-default uk-card-body">Item 1</div>
                          <div className="uk-card uk-card-default uk-card-body uk-margin-left">Item 2<br />...</div>
                          <div className="uk-card uk-card-default uk-card-body uk-margin-left">Item
                            3<br />...<br />...
                          </div>
                        </div>
                        <div className="mt-lg-4">
                          <button className="Markup-botton button uk-margin-small-top" type="button" uk-toggle="target: #Vertical"> MARKUP</button>
                          <div id="Vertical" aria-hidden="true" className="uk-margin-small-top" hidden>
                            <pre><code id="code-jw0fl2ja" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-flex uk-flex-middle uk-text-center"</span>&gt;</span>{"\n"}{"  "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-default uk-card-body"</span>&gt;</span>Item 1<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"   "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-default uk-card-body uk-margin-left"</span>&gt;</span>Item 2<span className="hljs-tag">&lt;<span className="hljs-name">br</span>&gt;</span>...<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"   "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-default uk-card-body uk-margin-left"</span>&gt;</span>Item 3<span className="hljs-tag">&lt;<span className="hljs-name">br</span>&gt;</span>...<span className="hljs-tag">&lt;<span className="hljs-name">br</span>&gt;</span>...<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span></code></pre>
                          </div>
                        </div>
                        <h3 className="uk-margin-medium-top" id="Flex-and-grid">Flex and grid</h3>
                        <p> The Flex component can be combined with a grid from the <a href="https://wpkixx.com/html/socimo/elements-grid.html">Grid
                            component</a>. </p>
                        <h6> PREVIEW </h6>
                        <div className="uk-flex-middle" uk-grid>
                          <div className="uk-width-2-3@m">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                              tempor
                              incididunt
                              ut labore et dolore magna.</p>
                          </div>
                          <div className="uk-width-1-3@m uk-flex-first">
                            <img src="https://wpkixx.com/html/socimo/images/elements/image.jpg" alt="Image" />
                          </div>
                        </div>
                        <div className="mt-lg-4">
                          <button className="Markup-botton button uk-margin-small-top" type="button" uk-toggle="target: #Flex"> MARKUP</button>
                          <div id="Flex" aria-hidden="true" className="uk-margin-small-top" hidden>
                            <pre><code id="code-jw0fl2je" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-flex-middle"</span> <span className="hljs-attr">uk-grid</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-width-2-3@m"</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">p</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.<span className="hljs-tag">&lt;/<span className="hljs-name">p</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-width-1-3@m uk-flex-first"</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">img</span> <span className="hljs-attr">src</span>=<span className="hljs-string">"images/light.jpg"</span> <span className="hljs-attr">alt</span>=<span className="hljs-string">"Image"</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span></code></pre>
                          </div>
                        </div>
                        <h3 className="uk-margin-medium-top" id="Direction-modifiers"> Direction modifiers </h3>
                        <p> These classes define the axis that flex items are placed on and their
                          direction. By default, items run horizontally from left to right as does the
                          <code>.uk-flex-row</code> class.</p>
                        <h6> PREVIEW </h6>
                        <div className="uk-overflow-auto">
                          <table className="uk-table uk-table-divider">
                            <thead>
                              <tr>
                                <th align="left">Class</th>
                                <th align="left">Description</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td align="left"><code>.uk-flex-row</code></td>
                                <td align="left">Add this class to lay out flex items as horizontal
                                  rows.</td>
                              </tr>
                              <tr>
                                <td align="left"><code>.uk-flex-row-reverse</code></td>
                                <td align="left">Add this class to lay out flex items from right to
                                  left.</td>
                              </tr>
                              <tr>
                                <td align="left"><code>.uk-flex-column</code></td>
                                <td align="left">Add this class to lay out flex items as vertical
                                  columns.</td>
                              </tr>
                              <tr>
                                <td align="left"><code>.uk-flex-column-reverse</code></td>
                                <td align="left">Add this class to lay out flex items from bottom to
                                  top.</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="uk-flex uk-flex-column uk-width-1-3 mt-4">
                          <div className="uk-card uk-card-default uk-card-body">Item 1</div>
                          <div className="uk-card uk-card-default uk-card-body uk-margin-top">Item 2</div>
                          <div className="uk-card uk-card-default uk-card-body uk-margin-top">Item 3</div>
                        </div>
                        <div className="mt-lg-4">
                          <button className="Markup-botton button uk-margin-small-top" type="button" uk-toggle="target: #Direction"> MARKUP</button>
                          <div id="Direction" aria-hidden="true" className="uk-margin-small-top" hidden>
                            <pre><code id="code-jw0fl2jb" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-flex uk-flex-column uk-width-1-3"</span>&gt;</span>{"\n"}{"   "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-default uk-card-body"</span>&gt;</span>Item 1<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"   "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-default uk-card-body uk-margin-top"</span>&gt;</span>Item 2<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"   "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-default uk-card-body uk-margin-top"</span>&gt;</span>Item 3<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span></code></pre>
                          </div>
                        </div>
                      </div>
                      <div className="uk-width-1-4@s uk-visible@s">
                        <ul className="uk-list docs-list" uk-sticky="offset:100;media : @m; top:20">
                          <li> <a href="#flex-introduction" uk-scroll> Introduction </a></li>
                          <li> <a href="#flex-h-alignment" uk-scroll> Horizontal alignment </a></li>
                          <li> <a href="#flex-v-alignment" uk-scroll> Vertical alignment </a></li>
                          <li> <a href="#Flex-and-grid" uk-scroll> Flex and grid </a></li>
                          <li> <a href="#Direction-modifiers" uk-scroll> Direction modifiers </a></li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  {/* Form */}
                  <li>
                    <div className="mt-4 uk-grid-large" uk-grid>
                      <div className="uk-width-3-4@s ">
                        <h2 id="form-intro"> Form</h2>
                        <p className="mb-4">Easily create nice looking forms with different styles and layouts.</p>
                        <p>Add one of the following classes to form controls inside a </p><form>
                          element to define them. </form>
                        <p />
                        <div className="uk-overflow-auto">
                          <table className="uk-table uk-table-divider">
                            <thead>
                              <tr>
                                <th align="left">Class</th>
                                <th align="left">Description</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td align="left"><code>.uk-input</code></td>
                                <td align="left">Add this class to <code>&lt;input&gt;</code> elements.
                                </td>
                              </tr>
                              <tr>
                                <td align="left"><code>.uk-select</code></td>
                                <td align="left">Add this class to <code>&lt;select&gt;</code> elements.
                                </td>
                              </tr>
                              <tr>
                                <td align="left"><code>.uk-textarea</code></td>
                                <td align="left">Add this class to <code>&lt;textarea&gt;</code>
                                  elements.</td>
                              </tr>
                              <tr>
                                <td align="left"><code>.uk-radio</code></td>
                                <td align="left">Add this class to <code>&lt;input
                                    type="radio"&gt;</code> elements
                                  to
                                  create radio buttons.</td>
                              </tr>
                              <tr>
                                <td align="left"><code>.uk-checkbox</code></td>
                                <td align="left">Add this class to <code>&lt;input
                                    type="checkbox"&gt;</code>
                                  elements
                                  to create checkboxes.</td>
                              </tr>
                              <tr>
                                <td align="left"><code>.uk-range</code></td>
                                <td align="left">Add this class to <code>&lt;input
                                    type="range"&gt;</code> elements
                                  to
                                  create range forms.</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="uk-width-1-2@m  mt-sm">
                          <form>
                            <fieldset className="uk-fieldset">
                              <legend className="uk-legend">Legend</legend>
                              <div className="uk-margin">
                                <input className="uk-input" type="text" placeholder="Input" />
                              </div>
                              <div className="uk-margin">
                                <select className="uk-select">
                                  <option>Option 01</option>
                                  <option>Option 02</option>
                                </select>
                              </div>
                              <div className="uk-margin">
                                <textarea className="uk-textarea" rows={5} placeholder="Textarea" defaultValue={""} />
                              </div>
                              <div className="uk-margin uk-grid-small uk-child-width-auto uk-grid">
                                <label><input className="uk-radio" type="radio" name="radio2" defaultChecked />
                                  A</label>
                                <label><input className="uk-radio" type="radio" name="radio2" /> B</label>
                              </div>
                              <div className="uk-margin uk-grid-small uk-child-width-auto uk-grid">
                                <label><input className="uk-checkbox" type="checkbox" defaultChecked /> A</label>
                                <label><input className="uk-checkbox" type="checkbox" /> B</label>
                              </div>
                              <div className="uk-margin">
                                <input className="uk-range" type="range" defaultValue={2} min={0} max={10} step="0.1" />
                              </div>
                            </fieldset>
                          </form>
                        </div>
                        <div>
                          <button className="button Markup-botton uk-margin-small-top" type="button" uk-toggle="target: #form"> MARKUP</button>
                          <div id="form" aria-hidden="true" className="uk-margin-small-top" hidden>
                            <pre><code id="code-jw0flfpb" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">form</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">fieldset</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-fieldset"</span>&gt;</span>{"\n"}{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">legend</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-legend"</span>&gt;</span>Legend<span className="hljs-tag">&lt;/<span className="hljs-name">legend</span>&gt;</span>{"\n"}{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-margin"</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">input</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-input"</span> <span className="hljs-attr">type</span>=<span className="hljs-string">"text"</span> <span className="hljs-attr">placeholder</span>=<span className="hljs-string">"Input"</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-margin"</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">select</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-select"</span>&gt;</span>{"\n"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">option</span>&gt;</span>Option 01<span className="hljs-tag">&lt;/<span className="hljs-name">option</span>&gt;</span>{"\n"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">option</span>&gt;</span>Option 02<span className="hljs-tag">&lt;/<span className="hljs-name">option</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;/<span className="hljs-name">select</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-margin"</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">textarea</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-textarea"</span> <span className="hljs-attr">rows</span>=<span className="hljs-string">"5"</span> <span className="hljs-attr">placeholder</span>=<span className="hljs-string">"Textarea"</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">textarea</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-margin uk-grid-small uk-child-width-auto uk-grid"</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">label</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">input</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-radio"</span> <span className="hljs-attr">type</span>=<span className="hljs-string">"radio"</span> <span className="hljs-attr">name</span>=<span className="hljs-string">"radio2"</span> <span className="hljs-attr">checked</span>&gt;</span> A<span className="hljs-tag">&lt;/<span className="hljs-name">label</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">label</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">input</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-radio"</span> <span className="hljs-attr">type</span>=<span className="hljs-string">"radio"</span> <span className="hljs-attr">name</span>=<span className="hljs-string">"radio2"</span>&gt;</span> B<span className="hljs-tag">&lt;/<span className="hljs-name">label</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-margin uk-grid-small uk-child-width-auto uk-grid"</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">label</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">input</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-checkbox"</span> <span className="hljs-attr">type</span>=<span className="hljs-string">"checkbox"</span> <span className="hljs-attr">checked</span>&gt;</span> A<span className="hljs-tag">&lt;/<span className="hljs-name">label</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">label</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">input</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-checkbox"</span> <span className="hljs-attr">type</span>=<span className="hljs-string">"checkbox"</span>&gt;</span> B<span className="hljs-tag">&lt;/<span className="hljs-name">label</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-margin"</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">input</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-range"</span> <span className="hljs-attr">type</span>=<span className="hljs-string">"range"</span> <span className="hljs-attr">value</span>=<span className="hljs-string">"2"</span> <span className="hljs-attr">min</span>=<span className="hljs-string">"0"</span> <span className="hljs-attr">max</span>=<span className="hljs-string">"10"</span> <span className="hljs-attr">step</span>=<span className="hljs-string">"0.1"</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\n"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">fieldset</span>&gt;</span>{"\n"}<span className="hljs-tag">&lt;/<span className="hljs-name">form</span>&gt;</span></code></pre>
                          </div>
                        </div>
                        <h3 className="uk-margin-medium-top" id="States-modifiers"> States modifiers</h3>
                        <p>Add one of the classes to an <code>&lt;input&gt;</code>,
                          <code>&lt;select&gt;</code> or <code>&lt;textarea&gt;</code> element to modify its
                          size.
                        </p>
                        <div className="uk-overflow-auto mb-md mt-sm">
                          <table className="uk-table uk-table-divider">
                            <thead>
                              <tr>
                                <th align="left">Class</th>
                                <th align="left">Description</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td align="left"><code>.uk-form-danger</code></td>
                                <td align="left">Add this class to notify the user that the value is not
                                  validated.</td>
                              </tr>
                              <tr>
                                <td align="left"><code>.uk-form-success</code></td>
                                <td align="left">Add this class to notify the user that the value is
                                  validated.</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="uk-grid-small" uk-grid>
                          <div>
                            <input className="uk-input uk-form-danger uk-form-width-medium" type="text" placeholder="form-danger" defaultValue="form-danger" />
                          </div>
                          <div>
                            <input className="uk-input uk-form-success uk-form-width-medium" type="text" placeholder="form-success" defaultValue="form-success" />
                          </div>
                          <div>
                            <input className="uk-input uk-form-width-medium" type="text" placeholder="disabled" defaultValue="disabled" disabled />
                          </div>
                        </div>
                        <div>
                          <button className="button Markup-botton uk-margin-small-top" type="button" uk-toggle="target: #states-modifiers"> MARKUP</button>
                          <div id="states-modifiers" aria-hidden="true" className="uk-margin-small-top" hidden>
                            <pre><code id="code-jw0flfpc" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-margin"</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">input</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-input uk-form-danger uk-form-width-medium"</span> <span className="hljs-attr">type</span>=<span className="hljs-string">"text"</span> <span className="hljs-attr">placeholder</span>=<span className="hljs-string">"form-danger"</span> <span className="hljs-attr">value</span>=<span className="hljs-string">"form-danger"</span>&gt;</span>{"\n"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\n"}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-margin"</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">input</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-input uk-form-success uk-form-width-medium"</span> <span className="hljs-attr">type</span>=<span className="hljs-string">"text"</span> <span className="hljs-attr">placeholder</span>=<span className="hljs-string">"form-success"</span> <span className="hljs-attr">value</span>=<span className="hljs-string">"form-success"</span>&gt;</span>{"\n"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\n"}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-margin"</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">input</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-input uk-form-width-medium"</span> <span className="hljs-attr">type</span>=<span className="hljs-string">"text"</span> <span className="hljs-attr">placeholder</span>=<span className="hljs-string">"disabled"</span> <span className="hljs-attr">value</span>=<span className="hljs-string">"disabled"</span> <span className="hljs-attr">disabled</span>&gt;</span>{"\n"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span></code></pre>
                          </div>
                        </div>
                        <h3 className="uk-margin-medium-top" id="Size-modifiers"> Size modifiers</h3>
                        <p>Provide the user with basic information through feedback
                          states on form controls by using one of the following classes. </p>
                        <br />
                        <div className="uk-overflow-auto mb-md mt-sm">
                          <table className="uk-table uk-table-divider">
                            <thead>
                              <tr>
                                <th align="left">Class</th>
                                <th align="left">Description</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td align="left"><code>.uk-form-large</code></td>
                                <td align="left">Add this class to make the element larger.</td>
                              </tr>
                              <tr>
                                <td align="left"><code>.uk-form-small</code></td>
                                <td align="left">Add this class to make the element smaller.</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <form className="uk-grid-small uk-flex-middle" uk-grid>
                          <div>
                            <input className="uk-input uk-form-width-medium uk-form-large" type="text" placeholder="Large" />
                          </div>
                          <div>
                            <input className="uk-input uk-form-width-medium" type="text" placeholder="Default" />
                          </div>
                          <div>
                            <input className="uk-input uk-form-width-medium uk-form-small" type="text" placeholder="Small" />
                          </div>
                        </form>
                        <div>
                          <button className="button Markup-botton uk-margin-small-top" type="button" uk-toggle="target: #size-modifiers"> MARKUP</button>
                          <div id="size-modifiers" aria-hidden="true" className="uk-margin-small-top" hidden>
                            <pre><code id="code-jw0flfpd" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">form</span>&gt;</span>{"\n"}{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-margin"</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">input</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-input uk-form-width-medium uk-form-large"</span> <span className="hljs-attr">type</span>=<span className="hljs-string">"text"</span> <span className="hljs-attr">placeholder</span>=<span className="hljs-string">"Large"</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-margin"</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">input</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-input uk-form-width-medium"</span> <span className="hljs-attr">type</span>=<span className="hljs-string">"text"</span> <span className="hljs-attr">placeholder</span>=<span className="hljs-string">"Default"</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-margin"</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">input</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-input uk-form-width-medium uk-form-small"</span> <span className="hljs-attr">type</span>=<span className="hljs-string">"text"</span> <span className="hljs-attr">placeholder</span>=<span className="hljs-string">"Small"</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\n"}<span className="hljs-tag">&lt;/<span className="hljs-name">form</span>&gt;</span></code></pre>
                          </div>
                        </div>
                        <h3 className="uk-margin-medium-top" id="Width-modifiers"> Width modifiers</h3>
                        <p>Provide the user with basic information through feedback
                          states on form controls by using one of the following classes. </p>
                        <div className="uk-overflow-auto mb-md mt-sm">
                          <table className="uk-table uk-table-divider">
                            <thead>
                              <tr>
                                <th align="left">Class</th>
                                <th align="left">Description</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td align="left"><code>.uk-form-width-large</code></td>
                                <td align="left">Applies a width of <em>500px</em>.</td>
                              </tr>
                              <tr>
                                <td align="left"><code>.uk-form-width-medium</code></td>
                                <td align="left">Applies a width of <em>200px</em>.</td>
                              </tr>
                              <tr>
                                <td align="left"><code>.uk-form-width-small</code></td>
                                <td align="left">Applies a width of <em>130px</em>.</td>
                              </tr>
                              <tr>
                                <td align="left"><code>.uk-form-width-xsmall</code></td>
                                <td align="left">Applies a width of <em>40px</em>.</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="uk-width-1-2@m">
                          <form>
                            <div className="uk-margin">
                              <input className="uk-input uk-form-width-large" type="text" placeholder="Large" />
                            </div>
                            <div className="uk-margin">
                              <input className="uk-input uk-form-width-medium" type="text" placeholder="Medium" />
                            </div>
                            <div className="uk-margin">
                              <input className="uk-input uk-form-width-small" type="text" placeholder="Small" />
                            </div>
                            <div className="uk-margin">
                              <input className="uk-input uk-form-width-xsmall" type="text" placeholder="XSmall" />
                            </div>
                          </form>
                        </div>
                        <div>
                          <button className="button Markup-botton uk-margin-small-top" type="button" uk-toggle="target: #width-modifiers"> MARKUP</button>
                          <div id="width-modifiers" aria-hidden="true" className="uk-margin-small-top" hidden>
                            <pre><code id="code-jw0flfpe" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">form</span>&gt;</span>{"\n"}{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-margin"</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">input</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-input uk-form-width-large"</span> <span className="hljs-attr">type</span>=<span className="hljs-string">"text"</span> <span className="hljs-attr">placeholder</span>=<span className="hljs-string">"Large"</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-margin"</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">input</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-input uk-form-width-medium"</span> <span className="hljs-attr">type</span>=<span className="hljs-string">"text"</span> <span className="hljs-attr">placeholder</span>=<span className="hljs-string">"Medium"</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-margin"</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">input</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-input uk-form-width-small"</span> <span className="hljs-attr">type</span>=<span className="hljs-string">"text"</span> <span className="hljs-attr">placeholder</span>=<span className="hljs-string">"Small"</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-margin"</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">input</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-input uk-form-width-xsmall"</span> <span className="hljs-attr">type</span>=<span className="hljs-string">"text"</span> <span className="hljs-attr">placeholder</span>=<span className="hljs-string">"XSmall"</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\n"}<span className="hljs-tag">&lt;/<span className="hljs-name">form</span>&gt;</span></code></pre>
                          </div>
                        </div>
                        <h3 className="uk-margin-medium-top" id="Horizontal-form"> Horizontal form </h3>
                        <p>Use the <code>.uk-form-controls-text</code> class to better
                          align checkboxes and radio buttons when using them with text in a horizontal layout.
                        </p>
                        <div className="uk-width-2-3@m">
                          <form className="uk-form-horizontal uk-margin-large">
                            <div className="uk-margin">
                              <label className="uk-form-label" htmlFor="form-horizontal-text">Text</label>
                              <div className="uk-form-controls">
                                <input className="uk-input" id="form-horizontal-text" type="text" placeholder="Some text..." />
                              </div>
                            </div>
                            <div className="uk-margin">
                              <label className="uk-form-label" htmlFor="form-horizontal-select">Select</label>
                              <div className="uk-form-controls">
                                <select className="uk-select" id="form-horizontal-select">
                                  <option>Option 01</option>
                                  <option>Option 02</option>
                                </select>
                              </div>
                            </div>
                            <div className="uk-margin">
                              <div className="uk-form-label">Radio</div>
                              <div className="uk-form-controls uk-form-controls-text">
                                <label><input className="uk-radio" type="radio" name="radio1" /> Option
                                  01</label><br />
                                <label><input className="uk-radio" type="radio" name="radio1" /> Option
                                  02</label>
                              </div>
                            </div>
                          </form>
                        </div>
                        <div>
                          <button className="button Markup-botton uk-margin-small-top" type="button" uk-toggle="target: #horizontal-form"> MARKUP</button>
                          <div id="horizontal-form" aria-hidden="true" className="uk-margin-small-top" hidden>
                            <pre><code id="code-jw0flfpi" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">form</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-form-horizontal uk-margin-large"</span>&gt;</span>{"\n"}{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-margin"</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">label</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-form-label"</span> <span className="hljs-attr">for</span>=<span className="hljs-string">"form-horizontal-text"</span>&gt;</span>Text<span className="hljs-tag">&lt;/<span className="hljs-name">label</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-form-controls"</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">input</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-input"</span> <span className="hljs-attr">id</span>=<span className="hljs-string">"form-horizontal-text"</span> <span className="hljs-attr">type</span>=<span className="hljs-string">"text"</span> <span className="hljs-attr">placeholder</span>=<span className="hljs-string">"Some text..."</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-margin"</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">label</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-form-label"</span> <span className="hljs-attr">for</span>=<span className="hljs-string">"form-horizontal-select"</span>&gt;</span>Select<span className="hljs-tag">&lt;/<span className="hljs-name">label</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-form-controls"</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">select</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-select"</span> <span className="hljs-attr">id</span>=<span className="hljs-string">"form-horizontal-select"</span>&gt;</span>{"\n"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">option</span>&gt;</span>Option 01<span className="hljs-tag">&lt;/<span className="hljs-name">option</span>&gt;</span>{"\n"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">option</span>&gt;</span>Option 02<span className="hljs-tag">&lt;/<span className="hljs-name">option</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;/<span className="hljs-name">select</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-margin"</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-form-label"</span>&gt;</span>Radio<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-form-controls uk-form-controls-text"</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">label</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">input</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-radio"</span> <span className="hljs-attr">type</span>=<span className="hljs-string">"radio"</span> <span className="hljs-attr">name</span>=<span className="hljs-string">"radio1"</span>&gt;</span> Option 01<span className="hljs-tag">&lt;/<span className="hljs-name">label</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">br</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">label</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">input</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-radio"</span> <span className="hljs-attr">type</span>=<span className="hljs-string">"radio"</span> <span className="hljs-attr">name</span>=<span className="hljs-string">"radio1"</span>&gt;</span> Option 02<span className="hljs-tag">&lt;/<span className="hljs-name">label</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\n"}<span className="hljs-tag">&lt;/<span className="hljs-name">form</span>&gt;</span></code></pre>
                          </div>
                        </div>
                        <h3 className="uk-margin-medium-top" id="Form-and-icons"> Form and icons </h3>
                        <p>
                          The icon has to come first in the markup. By default, the icon will be placed on the
                          left side of the form. To change the alignment, add the <code>.uk-form-icon-flip
                          </code>
                          class.
                        </p>
                        <br />
                        <div className="uk-width-1-3@m">
                          <form>
                            <div className="uk-margin">
                              <div className="uk-inline">
                                <span className="uk-form-icon"><i className="far fa-envelope" /></span>
                                <input className="uk-input" type="text" placeholder="Email" />
                              </div>
                            </div>
                            <div className="uk-margin">
                              <div className="uk-inline">
                                <span className="uk-form-icon uk-form-icon-flip"><i className="far fa-envelope" /></span>
                                <input className="uk-input" type="text" placeholder="Email" />
                              </div>
                            </div>
                          </form>
                        </div>
                        <div>
                          <button className="button Markup-botton uk-margin-small-top" type="button" uk-toggle="target: #Frm-and-icons"> MARKUP</button>
                          <div id="Frm-and-icons" aria-hidden="true" className="uk-margin-small-top" hidden>
                            <pre><code id="code-jw0flfpj" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">form</span>&gt;</span>{"\n"}{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-margin"</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-inline"</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">span</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-form-icon"</span> <span className="hljs-attr">uk-icon</span>=<span className="hljs-string">"icon: user"</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">span</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">input</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-input"</span> <span className="hljs-attr">type</span>=<span className="hljs-string">"text"</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-margin"</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-inline"</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">span</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-form-icon uk-form-icon-flip"</span> <span className="hljs-attr">uk-icon</span>=<span className="hljs-string">"icon: lock"</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">span</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">input</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-input"</span> <span className="hljs-attr">type</span>=<span className="hljs-string">"text"</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\n"}<span className="hljs-tag">&lt;/<span className="hljs-name">form</span>&gt;</span></code></pre>
                          </div>
                        </div>
                        <h3 className="uk-margin-medium-top" id="Clickable-icons"> Clickable icons </h3>
                        <p>
                          To enable an action, for example opening a modal to pick an image or link, use an
                          <code>&lt;a&gt;</code> or <code>&lt;button&gt;</code> element to create the icon.
                        </p>
                        <br />
                        <div className="uk-width-1-3@m">
                          <form>
                            <div className="uk-margin">
                              <div className="uk-inline">
                                <a className="uk-form-icon" href="#"><i className="far fa-lock" /></a>
                                <input className="uk-input" type="Password" placeholder="Password" />
                              </div>
                            </div>
                            <div className="uk-margin">
                              <div className="uk-inline">
                                <a className="uk-form-icon uk-form-icon-flip"><i className="far fa-lock" /></a>
                                <input className="uk-input" type="Password" placeholder="Password" />
                              </div>
                            </div>
                          </form>
                        </div>
                        <div>
                          <button className="button Markup-botton uk-margin-small-top" type="button" uk-toggle="target: #clickable-icons"> MARKUP</button>
                          <div id="clickable-icons" aria-hidden="true" className="uk-margin-small-top" hidden>
                            <pre><code id="code-jw0flfpk" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">form</span>&gt;</span>{"\n"}{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-margin"</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-inline"</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-form-icon"</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span> <span className="hljs-attr">uk-icon</span>=<span className="hljs-string">"icon: pencil"</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">input</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-input"</span> <span className="hljs-attr">type</span>=<span className="hljs-string">"text"</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-margin"</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-inline"</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-form-icon uk-form-icon-flip"</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span> <span className="hljs-attr">uk-icon</span>=<span className="hljs-string">"icon: link"</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">input</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-input"</span> <span className="hljs-attr">type</span>=<span className="hljs-string">"text"</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\n"}<span className="hljs-tag">&lt;/<span className="hljs-name">form</span>&gt;</span></code></pre>
                          </div>
                        </div>
                        <h3 className="uk-margin-medium-top" id="Form-and-grid"> Form and grid </h3>
                        <p>
                          You can also use the <a href="http://demo.foxthemes.net/elements/grid.html">Grid</a> components to define
                          the layout of
                          a form.
                        </p>
                        <br />
                        <div className="uk-width-2-3@m">
                          <form className="uk-grid-small" uk-grid>
                            <div className="uk-width-1-1">
                              <input className="uk-input" type="text" placeholder={100} />
                            </div>
                            <div className="uk-width-1-2@s">
                              <input className="uk-input" type="text" placeholder={50} />
                            </div>
                            <div className="uk-width-1-4@s">
                              <input className="uk-input" type="text" placeholder={25} />
                            </div>
                            <div className="uk-width-1-4@s">
                              <input className="uk-input" type="text" placeholder={25} />
                            </div>
                            <div className="uk-width-1-2@s">
                              <input className="uk-input" type="text" placeholder={50} />
                            </div>
                            <div className="uk-width-1-2@s">
                              <input className="uk-input" type="text" placeholder={50} />
                            </div>
                          </form>
                        </div>
                        <div>
                          <button className="button Markup-botton uk-margin-small-top" type="button" uk-toggle="target: #Frm-and-grid"> MARKUP</button>
                          <div id="Frm-and-grid" aria-hidden="true" className="uk-margin-small-top" hidden>
                            <pre><code id="code-jw0flfpl" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">form</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-grid-small"</span> <span className="hljs-attr">uk-grid</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-width-1-1"</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">input</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-input"</span> <span className="hljs-attr">type</span>=<span className="hljs-string">"text"</span> <span className="hljs-attr">placeholder</span>=<span className="hljs-string">"100"</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-width-1-2@s"</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">input</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-input"</span> <span className="hljs-attr">type</span>=<span className="hljs-string">"text"</span> <span className="hljs-attr">placeholder</span>=<span className="hljs-string">"50"</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-width-1-4@s"</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">input</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-input"</span> <span className="hljs-attr">type</span>=<span className="hljs-string">"text"</span> <span className="hljs-attr">placeholder</span>=<span className="hljs-string">"25"</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-width-1-4@s"</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">input</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-input"</span> <span className="hljs-attr">type</span>=<span className="hljs-string">"text"</span> <span className="hljs-attr">placeholder</span>=<span className="hljs-string">"25"</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-width-1-2@s"</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">input</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-input"</span> <span className="hljs-attr">type</span>=<span className="hljs-string">"text"</span> <span className="hljs-attr">placeholder</span>=<span className="hljs-string">"50"</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-width-1-2@s"</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">input</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-input"</span> <span className="hljs-attr">type</span>=<span className="hljs-string">"text"</span> <span className="hljs-attr">placeholder</span>=<span className="hljs-string">"50"</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}<span className="hljs-tag">&lt;/<span className="hljs-name">form</span>&gt;</span></code></pre>
                          </div>
                        </div>
                        <h3 className="uk-margin-medium-top" id="Custom-controls"> Custom controls </h3>
                        <p>
                          To replace a file inputs or select forms with your own HTML content, like a button
                          or text, add
                          the <code>uk-form-custom</code> attribute to a container element.
                        </p>
                        <br />
                        <div className="uk-width-1-2@m">
                          <form>
                            <div className="uk-margin">
                              <div uk-form-custom>
                                <input type="file" />
                                <button className="uk-button uk-button-default" type="button" tabIndex={-1}>Select</button>
                              </div>
                            </div>
                            <div className="uk-margin">
                              <span className="uk-text-middle">Here is a text</span>
                              <div uk-form-custom>
                                <input type="file" />
                                <span className="uk-link">upload</span>
                              </div>
                            </div>
                            <div className="uk-margin" uk-margin>
                              <div uk-form-custom="target: true">
                                <input type="file" />
                                <input className="uk-input uk-form-width-medium" type="text" placeholder="Select file" disabled />
                              </div>
                              <button className="uk-button uk-button-default">Submit</button>
                            </div>
                          </form>
                        </div>
                        <div>
                          <button className="button Markup-botton uk-margin-small-top" type="button" uk-toggle="target: #Custom"> MARKUP</button>
                          <div id="Custom" aria-hidden="true" className="uk-margin-small-top" hidden>
                            <pre><code id="code-jw0flfpm" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">form</span>&gt;</span>{"\n"}{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-margin"</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">uk-form-custom</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">input</span> <span className="hljs-attr">type</span>=<span className="hljs-string">"file"</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">button</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-button uk-button-default"</span> <span className="hljs-attr">type</span>=<span className="hljs-string">"button"</span> <span className="hljs-attr">tabindex</span>=<span className="hljs-string">"-1"</span>&gt;</span>Select<span className="hljs-tag">&lt;/<span className="hljs-name">button</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-margin"</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">span</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-text-middle"</span>&gt;</span>Here is a text<span className="hljs-tag">&lt;/<span className="hljs-name">span</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">uk-form-custom</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">input</span> <span className="hljs-attr">type</span>=<span className="hljs-string">"file"</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">span</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-link"</span>&gt;</span>upload<span className="hljs-tag">&lt;/<span className="hljs-name">span</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-margin"</span> <span className="hljs-attr">uk-margin</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">uk-form-custom</span>=<span className="hljs-string">"target: true"</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">input</span> <span className="hljs-attr">type</span>=<span className="hljs-string">"file"</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">input</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-input uk-form-width-medium"</span> <span className="hljs-attr">type</span>=<span className="hljs-string">"text"</span> <span className="hljs-attr">placeholder</span>=<span className="hljs-string">"Select file"</span> <span className="hljs-attr">disabled</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">button</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-button uk-button-default"</span>&gt;</span>Submit<span className="hljs-tag">&lt;/<span className="hljs-name">button</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\n"}<span className="hljs-tag">&lt;/<span className="hljs-name">form</span>&gt;</span></code></pre>
                          </div>
                        </div>
                      </div>
                      <div className="uk-width-1-4@s uk-visible@s">
                        <ul className="uk-list docs-list" uk-sticky="offset:100;media : @m; top:20">
                          <li> <a href="#form-intro" uk-scroll> Basic </a></li>
                          <li> <a href="#States-modifiers" uk-scroll> States modifiers </a></li>
                          <li> <a href="#Size-modifiers" uk-scroll> Size modifiers </a></li>
                          <li> <a href="#Width-modifiers" uk-scroll> Width modifiers </a></li>
                          <li> <a href="#Horizontal-form" uk-scroll> Horizontal form </a></li>
                          <li> <a href="#Form-and-icons" uk-scroll> Form and icons </a></li>
                          <li> <a href="#Clickable-icons" uk-scroll> Clickable-icons </a></li>
                          <li> <a href="#Form-and-grid" uk-scroll> Form and grid </a></li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  {/* Grid */}
                  <li>
                    <div className="mt-4 uk-grid-large" uk-grid>
                      <div className="uk-width-3-4@s">
                        <h2> Grid</h2>
                        <p className="mb-4"> Create a fully responsive, fluid and nestable grid layout. </p>
                        <h6 id="grid-intro"> Usage : </h6>
                        <p>To create the grid container, add the <code>uk-grid</code> attribute to a
                          <code>&lt;div&gt;</code> element. Add child <code>&lt;div&gt;</code> elements to
                          create the cells. By default, all grid cells are stacked. To place them side by
                          side, add one of the classes from the Width component . Using
                          <code>.uk-child-width-expand</code> will automatically apply equal width to items,
                          regardless of how many there are.</p>
                        <h6> PREVIEW</h6>
                        <div className="uk-child-width-expand@s uk-text-center" uk-grid>
                          <div>
                            <div className="uk-card uk-card-default uk-card-body">Item</div>
                          </div>
                          <div>
                            <div className="uk-card uk-card-default uk-card-body">Item</div>
                          </div>
                          <div>
                            <div className="uk-card uk-card-default uk-card-body">Item</div>
                          </div>
                        </div>
                        <div>
                          <button className="Markup-botton button uk-margin-small-top" type="button" uk-toggle="target: #Grid"> MARKUP</button>
                          <div id="Grid" aria-hidden="true" className=" uk-margin-small-top" hidden>
                            <pre><code id="code-jw0flkm9" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-child-width-expand@s uk-text-center"</span> <span className="hljs-attr">uk-grid</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-default uk-card-body"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-default uk-card-body"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-default uk-card-body"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span></code></pre>
                          </div>
                        </div>
                        <h3 className="uk-margin-medium-top" id="Gutter-modifiers"> Gutter modifiers </h3>
                        <p>The Grid component comes with a default gutter that is decreased automatically from a
                          certain breakpoint usually on a smaller desktop viewport width. To apply a different
                          gutter, add one of the following classes.</p>
                        <h6> PREVIEW</h6>
                        <div className="uk-grid-small uk-child-width-expand@s uk-text-center" uk-grid>
                          <div>
                            <div className="uk-card uk-card-default uk-card-body">Item</div>
                          </div>
                          <div>
                            <div className="uk-card uk-card-default uk-card-body">Item</div>
                          </div>
                          <div>
                            <div className="uk-card uk-card-default uk-card-body">Item</div>
                          </div>
                        </div>
                        <div>
                          <button className="Markup-botton button uk-margin-small-top" type="button" uk-toggle="target: #Gird-Gutter-1"> MARKUP</button>
                          <div id="Gird-Gutter-1" aria-hidden="true" className=" uk-margin-small-top" hidden>
                            <pre><code id="code-jw0flkma" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-grid-small uk-child-width-expand@s uk-text-center"</span> <span className="hljs-attr">uk-grid</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-default uk-card-body"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-default uk-card-body"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-default uk-card-body"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span></code></pre>
                          </div>
                        </div>
                        <h6> PREVIEW</h6>
                        <div className="uk-grid-large uk-child-width-expand@s uk-text-center" uk-grid>
                          <div>
                            <div className="uk-card uk-card-default uk-card-body">Item</div>
                          </div>
                          <div>
                            <div className="uk-card uk-card-default uk-card-body">Item</div>
                          </div>
                          <div>
                            <div className="uk-card uk-card-default uk-card-body">Item</div>
                          </div>
                        </div>
                        <div>
                          <button className="Markup-botton button uk-margin-small-top" type="button" uk-toggle="target: #Gird-Gutter-2"> MARKUP</button>
                          <div id="Gird-Gutter-2" aria-hidden="true" className=" uk-margin-small-top" hidden>
                            <pre><code id="code-jw0flkmb" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-grid-medium uk-child-width-expand@s uk-text-center"</span> <span className="hljs-attr">uk-grid</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-default uk-card-body"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-default uk-card-body"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-default uk-card-body"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span></code></pre>
                          </div>
                        </div>
                        <h6> PREVIEW</h6>
                        <div className="uk-grid-collapse uk-child-width-expand@s uk-text-center" uk-grid>
                          <div>
                            <div className="uk-background-muted uk-padding">Item</div>
                          </div>
                          <div>
                            <div className="uk-background-primary uk-padding uk-light">Item</div>
                          </div>
                          <div>
                            <div className="uk-background-secondary uk-padding uk-light">Item</div>
                          </div>
                        </div>
                        <div>
                          <button className="Markup-botton button uk-margin-small-top" type="button" uk-toggle="target: #Gird-Gutter-3"> MARKUP</button>
                          <div id="Gird-Gutter-3" aria-hidden="true" className=" uk-margin-small-top" hidden>
                            <pre><code id="code-jw0flkmc" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-grid-medium uk-child-width-expand@s uk-text-center"</span> <span className="hljs-attr">uk-grid</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-default uk-card-body"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-default uk-card-body"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-default uk-card-body"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span></code></pre>
                          </div>
                        </div>
                        <h3 className="uk-margin-medium-top" id="Nested-grid"> Nested grid </h3>
                        <p> You can easily extend your grid layout with nested grids.</p>
                        <h6> PREVIEW</h6>
                        <div className="uk-child-width-1-2 uk-text-center" uk-grid>
                          <div>
                            <div className="uk-card uk-card-default uk-card-body">Item</div>
                          </div>
                          <div>
                            <div className="uk-child-width-1-2 uk-text-center" uk-grid>
                              <div>
                                <div className="uk-card uk-card-primary uk-card-body">Item</div>
                              </div>
                              <div>
                                <div className="uk-card uk-card-primary uk-card-body">Item</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <button className="Markup-botton button uk-margin-small-top" type="button" uk-toggle="target: #Gird-nested"> MARKUP</button>
                          <div id="Gird-nested" aria-hidden="true" className=" uk-margin-small-top" hidden>
                            <pre><code id="code-jw0flkme" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-child-width-1-2 uk-text-center"</span> <span className="hljs-attr">uk-grid</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-default uk-card-body"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-child-width-1-2 uk-text-center"</span> <span className="hljs-attr">uk-grid</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span>&gt;</span>{"\n"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-primary uk-card-body"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span>&gt;</span>{"\n"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-primary uk-card-body"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span></code></pre>
                          </div>
                        </div>
                        <h3 className="uk-margin-medium-top" id="Grid-and-width"> Grid and width </h3>
                        <p> The grid is mostly used in combination with the Width component. This allows for
                          great flexibility when determining the column widths.</p>
                        <h6> PREVIEW</h6>
                        <div className="uk-text-center" uk-grid>
                          <div className="uk-width-auto@m">
                            <div className="uk-card uk-card-default uk-card-body">Auto</div>
                          </div>
                          <div className="uk-width-1-3@m">
                            <div className="uk-card uk-card-default uk-card-body">1-3</div>
                          </div>
                          <div className="uk-width-expand@m">
                            <div className="uk-card uk-card-default uk-card-body">Expand</div>
                          </div>
                        </div>
                        <div>
                          <button className="Markup-botton button uk-margin-small-top" type="button" uk-toggle="target: #Gird-width"> MARKUP</button>
                          <div id="Gird-width" aria-hidden="true" className=" uk-margin-small-top" hidden>
                            <pre><code id="code-jw0flkmj" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-text-center"</span> <span className="hljs-attr">uk-grid</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-width-auto@m"</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-default uk-card-body"</span>&gt;</span>Auto<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-width-1-3@m"</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-default uk-card-body"</span>&gt;</span>1-3<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-width-expand@m"</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-default uk-card-body"</span>&gt;</span>Expand<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span></code></pre>
                          </div>
                        </div>
                        <h3 className="uk-margin-medium-top" id="Child-width"> Child width </h3>
                        <p>If the grid columns are evenly split, you can add one of the
                          <code>.uk-child-width-*</code> classes to the grid container instead of adding a
                          class to each of the items.</p>
                        <p>you can add one of this <code>.uk-child-width-1-2</code>
                          <code>.uk-child-width-1-3</code>
                          <code>.uk-child-width-1-4</code><code>.uk-child-width-1-5 </code>
                          <code>.uk-child-width-1-6 </code> </p>
                        <h6> PREVIEW</h6>
                        <div className="uk-child-width-1-2@s uk-child-width-1-3@m uk-text-center uk-grid" uk-grid>
                          <div className="uk-first-column">
                            <div className="uk-card uk-card-default uk-card-body">Item</div>
                          </div>
                          <div className>
                            <div className="uk-card uk-card-default uk-card-body">Item</div>
                          </div>
                          <div className>
                            <div className="uk-card uk-card-default uk-card-body">Item</div>
                          </div>
                        </div>
                        <div>
                          <button className="Markup-botton button uk-margin-small-top" type="button" uk-toggle="target: #Gird-child"> MARKUP</button>
                          <div id="Gird-child" aria-hidden="true" className=" uk-margin-small-top" hidden>
                            <pre><code id="code-jw0flkmk" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-child-width-1-2@s uk-child-width-1-3@m uk-text-center"</span> <span className="hljs-attr">uk-grid</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-default uk-card-body"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-default uk-card-body"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-card uk-card-default uk-card-body"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span></code></pre>
                          </div>
                        </div>
                      </div>
                      <div className="uk-width-1-4@s uk-visible@s">
                        <ul className="uk-list docs-list" uk-sticky="offset:100;media : @m; top:20">
                          <li> <a href="#grid-intro" uk-scroll> Introduction </a></li>
                          <li> <a href="#Gutter-modifiers" uk-scroll> Gutter modifiers </a></li>
                          <li> <a href="#Nested-grid" uk-scroll> Nested grid </a></li>
                          <li> <a href="#Grid-and-width" uk-scroll> Grid and width </a></li>
                          <li> <a href="#Child-width" uk-scroll> Child width </a></li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  {/* heading */}
                  <li>
                    <div className="mt-4 uk-grid-large" uk-grid>
                      <div className="uk-width-3-4@s">
                        <h2 id="heading-intro"> heading</h2>
                        <p className="mb-4"> Define different styles for headings. </p>
                        <p>Add one of the following classes to modify the size and style of headings. Usually,
                          these classes
                          would be used on heading elements but they work also with any other element like a
                          div element.
                          Note that these classes extend the heading classes from the Base component upward,
                          and the
                          smallest modifier picks up the size after h1 element.</p>
                        <h6> PREVIEW </h6>
                        <h1 className="uk-heading-small">Small</h1>
                        <h1 className="uk-heading-medium">Medium</h1>
                        <h1 className="uk-heading-large">Large</h1>
                        <h1 className="uk-heading-xlarge">XLarge</h1>
                        <h1 className="uk-heading-2xlarge">2XLarge</h1>
                        <div>
                          <button className="Markup-botton button uk-margin-small-top" type="button" uk-toggle="target: #headingbasic"> MARKUP</button>
                          <div id="headingbasic" aria-hidden="true" className="uk-margin-small-top" hidden>
                            <pre><code id="code-jw0flors" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">h1</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-heading-small"</span>&gt;</span>Small<span className="hljs-tag">&lt;/<span className="hljs-name">h1</span>&gt;</span>{"\n"}<span className="hljs-tag">&lt;<span className="hljs-name">h1</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-heading-medium"</span>&gt;</span>Medium<span className="hljs-tag">&lt;/<span className="hljs-name">h1</span>&gt;</span>{"\n"}<span className="hljs-tag">&lt;<span className="hljs-name">h1</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-heading-large"</span>&gt;</span>Large<span className="hljs-tag">&lt;/<span className="hljs-name">h1</span>&gt;</span>{"\n"}<span className="hljs-tag">&lt;<span className="hljs-name">h1</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-heading-xlarge"</span>&gt;</span>XLarge<span className="hljs-tag">&lt;/<span className="hljs-name">h1</span>&gt;</span>{"\n"}<span className="hljs-tag">&lt;<span className="hljs-name">h1</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-heading-2xlarge"</span>&gt;</span>2XLarge<span className="hljs-tag">&lt;/<span className="hljs-name">h1</span>&gt;</span></code></pre>
                          </div>
                        </div>
                        <h3 className="uk-margin-medium-top border-top-0" id="Divider-modifier"> Divider modifier
                        </h3>
                        <p>To apply a divider to a heading, add the <code>
                            .uk-heading-divider </code> class. You can combine it with any size modifier.
                        </p>
                        <h6> PREVIEW </h6>
                        <div className="my-lg-5">
                          <h1 className="uk-heading-divider">Heading Divider</h1>
                        </div>
                        <pre><code id="code-jw0flort" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">h1</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-heading-divider"</span>&gt;</span>Heading Divider<span className="hljs-tag">&lt;/<span className="hljs-name">h1</span>&gt;</span></code></pre>
                        <h3 className="uk-margin-medium-top border-top-0" id="Bullet-modifier"> Bullet modifier
                        </h3>
                        <p> To apply a bullet to a heading, add the <code>
                            .uk-heading-bullet
                          </code> class. You can combine it with any size modifier, and it works well with
                          text
                          alignment.</p>
                        <h6> PREVIEW </h6>
                        <div className="my-lg-5">
                          <h1 className="uk-heading-bullet">Heading Bullet</h1>
                        </div>
                        <pre><code id="code-jw0floru" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">h1</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-heading-bullet"</span>&gt;</span>Heading Bullet<span className="hljs-tag">&lt;/<span className="hljs-name">h1</span>&gt;</span></code></pre>
                        <h3 className="uk-margin-medium-top border-top-0" id="Line-modifier"> Line modifier </h3>
                        <p> To apply a vertically centered line to a heading, add the
                          <code>
                            .uk-heading-line </code> class and place a <code> span </code> element inside
                          the
                          heading element.
                          You can combine it with any size modifier, and it works well with text alignment.
                        </p>
                        <h6> PREVIEW </h6>
                        <div className="my-lg-5">
                          <h1 className="uk-heading-line"><span>Heading Line</span></h1>
                          <h1 className="uk-heading-line uk-text-center"><span>Heading Line</span></h1>
                          <h1 className="uk-heading-line uk-text-right"><span>Heading Line</span></h1>
                        </div>
                        <div>
                          <button className="Markup-botton button uk-margin-small-top" type="button" uk-toggle="target: #Line"> MARKUP</button>
                          <div id="Line" aria-hidden="true" className="uk-margin-small-top" hidden>
                            <pre><code id="code-jw0florv" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">h1</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-heading-line"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">span</span>&gt;</span>Heading Line<span className="hljs-tag">&lt;/<span className="hljs-name">span</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">h1</span>&gt;</span>{"\n"}{"\n"}<span className="hljs-tag">&lt;<span className="hljs-name">h1</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-heading-line uk-text-center"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">span</span>&gt;</span>Heading Line<span className="hljs-tag">&lt;/<span className="hljs-name">span</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">h1</span>&gt;</span>{"\n"}{"\n"}<span className="hljs-tag">&lt;<span className="hljs-name">h1</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-heading-line uk-text-right"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">span</span>&gt;</span>Heading Line<span className="hljs-tag">&lt;/<span className="hljs-name">span</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">h1</span>&gt;</span></code></pre>
                          </div>
                        </div>
                        <h3 className="uk-margin-medium-top border-top-0" id="Divider-small"> Divider small </h3>
                        <p>Add the <code>.uk-divider-small</code> class to a
                          <code>&lt;hr&gt;</code> or <code>&lt;div&gt;</code> element to create a smaller
                          divider. </p>
                        <h6> PREVIEW </h6>
                        <div className="my-lg-5">
                          <h1> Heading text </h1>
                          <hr className="uk-divider-small" />
                        </div>
                        <pre><code id="code-jw0flortt" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">h1</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-divider-small"</span>&gt;</span>Heading Text<span className="hljs-tag">&lt;/<span className="hljs-name">h1</span>&gt;</span></code></pre>
                      </div>
                      <div className="uk-width-1-4@s uk-visible@s">
                        <ul className="uk-list docs-list" uk-sticky="offset:100;media : @m; top:20">
                          <li> <a href="#heading-intro" uk-scroll> Introduction </a></li>
                          <li> <a href="#Divider-modifier" uk-scroll> Divider modifier </a></li>
                          <li> <a href="#Bullet-modifier" uk-scroll> Bullet modifier </a></li>
                          <li> <a href="#Line-modifier" uk-scroll> Line modifier </a></li>
                          <li> <a href="#Divider-small" uk-scroll> Divider small </a></li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  {/* List */}
                  <li>
                    <div className="mt-4 uk-grid-large" uk-grid>
                      <div className="uk-width-3-4@s">
                        <h2> List</h2>
                        <p className="mb-4"> Easily create nice looking lists, which come in different styles. </p>
                        <p id="list-intro" className="mb-4"> To apply this component, add the
                          <code>.uk-list</code>
                          class to
                          an unordered or ordered list. The list will now display without any spacing or
                          list-style.
                        </p>
                        <ul className="uk-list">
                          <li>List item 1</li>
                          <li>List item 2</li>
                          <li>List item 3</li>
                        </ul>
                        <div>
                          <button className="Markup-botton button uk-margin-small-top" type="button" uk-toggle="target: #list"> MARKUP</button>
                          <div id="list" aria-hidden="true" className="uk-margin-small-top" hidden>
                            <pre><code id="code-jw0fu66q" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">ul</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-list"</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span>List item 1<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span>List item 2<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span>List item 3<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}<span className="hljs-tag">&lt;/<span className="hljs-name">ul</span>&gt;</span></code></pre>
                          </div>
                        </div>
                        <h3 className="uk-margin-medium-top" id="list-bullet">Bullet modifier </h3>
                        <p className="mb-4"> Add the <code> .uk-list-bullet</code> class to display
                          bullets in
                          front of the list items.
                        </p>
                        <div className="uk-width-1-2@m">
                          <ul className="uk-list uk-list-bullet">
                            <li>List item 1</li>
                            <li>List item 2</li>
                            <li>List item 3</li>
                          </ul>
                        </div>
                        <div>
                          <button className="Markup-botton button uk-margin-small-top" type="button" uk-toggle="target: #Bullet"> MARKUP</button>
                          <div id="Bullet" aria-hidden="true" className="uk-margin-small-top" hidden>
                            <pre><code id="code-jw0fu66r" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">ul</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-list uk-list-bullet"</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span>List item 1<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span>List item 2<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span>List item 3<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}<span className="hljs-tag">&lt;/<span className="hljs-name">ul</span>&gt;</span></code></pre>
                          </div>
                        </div>
                        <h3 className="uk-margin-medium-top" id="list-devider">Divider modifier </h3>
                        <p className="mb-4">Add the <code>.uk-list-divider</code> class to separate
                          list items
                          with lines.
                        </p>
                        <div className="uk-width-1-2@m">
                          <ul className="uk-list uk-list-divider">
                            <li>List item 1</li>
                            <li>List item 2</li>
                            <li>List item 3</li>
                          </ul>
                        </div>
                        <div>
                          <button className="Markup-botton button uk-margin-small-top" type="button" uk-toggle="target: #Divider"> MARKUP</button>
                          <div id="Divider" aria-hidden="true" className="uk-margin-small-top" hidden>
                            <pre><code id="code-jw0fu66s" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">ul</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-list uk-list-divider"</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span>List item 1<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span>List item 2<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span>List item 3<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}<span className="hljs-tag">&lt;/<span className="hljs-name">ul</span>&gt;</span></code></pre>
                          </div>
                        </div>
                        <h3 className="uk-margin-medium-top" id="list-striped">Striped modifier </h3>
                        <p className="mb-4">Add the <code>.uk-list-divider</code> class to separate
                          list items
                          with lines.
                        </p>
                        <div className="uk-width-1-2@m">
                          <ul className="uk-list uk-list-striped">
                            <li>List item 1</li>
                            <li>List item 2</li>
                            <li>List item 3</li>
                          </ul>
                        </div>
                        <div>
                          <button className="Markup-botton button uk-margin-small-top" type="button" uk-toggle="target: #Striped"> MARKUP</button>
                          <div id="Striped" aria-hidden="true" className="uk-margin-small-top" hidden>
                            <pre><code id="code-jw0fu66t" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">ul</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-list uk-list-striped"</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span>List item 1<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span>List item 2<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span>List item 3<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}<span className="hljs-tag">&lt;/<span className="hljs-name">ul</span>&gt;</span></code></pre>
                          </div>
                        </div>
                        <h3 className="uk-margin-medium-top" id="list-large">Large modifier </h3>
                        <p className="mb-4">Add the <code>.uk-list-large</code> class to increase the
                          spacing
                          between list items. You can combine this with any of the other list modifiers.
                        </p>
                        <div className="uk-child-width-expand@m uk-child-width-1-2 uk-grid-small" uk-grid>
                          <div>
                            <h4>Default</h4>
                            <ul className="uk-list uk-list-large">
                              <li>List item 1</li>
                              <li>List item 2</li>
                              <li>List item 3</li>
                            </ul>
                          </div>
                          <div>
                            <h4>Divider</h4>
                            <ul className="uk-list uk-list-large uk-list-divider">
                              <li>List item 1</li>
                              <li>List item 2</li>
                              <li>List item 3</li>
                            </ul>
                          </div>
                          <div>
                            <h4>Striped</h4>
                            <ul className="uk-list uk-list-large uk-list-striped">
                              <li>List item 1</li>
                              <li>List item 2</li>
                              <li>List item 3</li>
                            </ul>
                          </div>
                          <div>
                            <h4>Bullet</h4>
                            <ul className="uk-list uk-list-large uk-list-bullet">
                              <li>List item 1</li>
                              <li>List item 2</li>
                              <li>List item 3</li>
                            </ul>
                          </div>
                        </div>
                        <div>
                          <button className="Markup-botton button uk-margin-small-top" type="button" uk-toggle="target: #Accordion"> MARKUP</button>
                          <div id="Accordion" aria-hidden="true" className="uk-margin-small-top" hidden>
                            <pre><code id="code-jw0fu66u" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-child-width-expand@s"</span> <span className="hljs-attr">uk-grid</span>&gt;</span>{"\n"}{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">h4</span>&gt;</span>Default<span className="hljs-tag">&lt;/<span className="hljs-name">h4</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">ul</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-list uk-list-large"</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span>List item 1<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span>List item 2<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span>List item 3<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">ul</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">h4</span>&gt;</span>Divider<span className="hljs-tag">&lt;/<span className="hljs-name">h4</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">ul</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-list uk-list-large uk-list-divider"</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span>List item 1<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span>List item 2<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span>List item 3<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">ul</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">h4</span>&gt;</span>Striped<span className="hljs-tag">&lt;/<span className="hljs-name">h4</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">ul</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-list uk-list-large uk-list-striped"</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span>List item 1<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span>List item 2<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span>List item 3<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">ul</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">h4</span>&gt;</span>Bullet<span className="hljs-tag">&lt;/<span className="hljs-name">h4</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">ul</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-list uk-list-large uk-list-bullet"</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span>List item 1<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span>List item 2<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span>List item 3<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">ul</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\n"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span></code></pre>
                          </div>
                        </div>
                      </div>
                      <div className="uk-width-1-4@s uk-visible@s">
                        <ul className="uk-list docs-list" uk-sticky="offset:100;media : @m; top:20">
                          <li> <a href="#list-intro" uk-scroll> Introduction </a></li>
                          <li> <a href="#list-bullet" uk-scroll> Bullet modifier </a></li>
                          <li> <a href="#list-devider" uk-scroll> Divider modifier </a></li>
                          <li> <a href="#list-striped" uk-scroll> Striped modifier </a></li>
                          <li> <a href="#list-large" uk-scroll> Large modifier </a></li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  {/* pagination */}
                  <li>
                    <div className="mt-4 uk-grid-large" uk-grid>
                      <div className="uk-width-3-4@s">
                        <h2> Pagination</h2>
                        <p className="mb-4"> Easily create a nice looking pagination to navigate through pages. </p>
                        <p className="pager-intro">The Pagination component consists of button-like styled links,
                          that are aligned side by side in a horizontal list.</p>
                        <h6> PREVIEW</h6>
                        <ul className="uk-pagination" uk-margin>
                          <li><a href="#"><span uk-pagination-previous /></a></li>
                          <li><a href="#">1</a></li>
                          <li className="uk-disabled"><span>...</span></li>
                          <li><a href="#">4</a></li>
                          <li><a href="#">5</a></li>
                          <li><a href="#">6</a></li>
                          <li className="uk-active"><span>7</span></li>
                          <li><a href="#">8</a></li>
                          <li><a href="#">9</a></li>
                          <li><a href="#">10</a></li>
                          <li className="uk-disabled"><span>...</span></li>
                          <li><a href="#">20</a></li>
                          <li><a href="#"><span uk-pagination-next /></a></li>
                        </ul>
                        <div>
                          <button className="Markup-botton button uk-margin-small-top" type="button" uk-toggle="target: #Pagination"> MARKUP</button>
                          <div id="Pagination" aria-hidden="true" className=" uk-margin-small-top" hidden>
                            <pre><code id="code-k0p3uwie" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">ul</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-pagination"</span> <span className="hljs-attr">uk-margin</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">span</span> <span className="hljs-attr">uk-pagination-previous</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">span</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>1<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-disabled"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">span</span>&gt;</span>...<span className="hljs-tag">&lt;/<span className="hljs-name">span</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>4<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>5<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>6<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-active"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">span</span>&gt;</span>7<span className="hljs-tag">&lt;/<span className="hljs-name">span</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>8<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>9<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>10<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-disabled"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">span</span>&gt;</span>...<span className="hljs-tag">&lt;/<span className="hljs-name">span</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>20<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">span</span> <span className="hljs-attr">uk-pagination-next</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">span</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}<span className="hljs-tag">&lt;/<span className="hljs-name">ul</span>&gt;</span></code></pre>
                          </div>
                        </div>
                        <h3 className="uk-margin-medium-top" id="Alignment"> Alignment </h3>
                        <p> The pagination component utilizes flexbox, so navigations can easily be aligned with
                          the <a href="https://wpkixx.com/html/socimo/flex.html"> Flex component</a> .</p>
                        <pre><code className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">ul</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-pagination uk-flex-center"</span>&gt;</span>...<span className="hljs-tag">&lt;/<span className="hljs-name">ul</span>&gt;</span></code></pre>
                        <h6> PREVIEW</h6>
                        <ul className="uk-pagination" uk-margin>
                          <li><a href="#"><span uk-pagination-previous /></a></li>
                          <li><a href="#">1</a></li>
                          <li className="uk-disabled"><span>...</span></li>
                          <li><a href="#">5</a></li>
                          <li><a href="#">6</a></li>
                          <li className="uk-active"><span>7</span></li>
                          <li><a href="#">8</a></li>
                          <li><a href="#"><span uk-pagination-next /></a></li>
                        </ul>
                        <ul className="uk-pagination uk-flex-center uk-margin-medium-top" uk-margin>
                          <li><a href="#"><span uk-pagination-previous /></a></li>
                          <li><a href="#">1</a></li>
                          <li className="uk-disabled"><span>...</span></li>
                          <li><a href="#">5</a></li>
                          <li><a href="#">6</a></li>
                          <li className="uk-active"><span>7</span></li>
                          <li><a href="#">8</a></li>
                          <li><a href="#"><span uk-pagination-next /></a></li>
                        </ul>
                        <ul className="uk-pagination uk-flex-right uk-margin-medium-top" uk-margin>
                          <li><a href="#"><span uk-pagination-previous /></a></li>
                          <li><a href="#">1</a></li>
                          <li className="uk-disabled"><span>...</span></li>
                          <li><a href="#">5</a></li>
                          <li><a href="#">6</a></li>
                          <li className="uk-active"><span>7</span></li>
                          <li><a href="#">8</a></li>
                          <li><a href="#"><span uk-pagination-next /></a></li>
                        </ul>
                        <div>
                          <button className="Markup-botton button uk-margin-small-top" type="button" uk-toggle="target: #Pagination-Alignment"> MARKUP</button>
                          <div id="Pagination-Alignment" aria-hidden="true" className=" uk-margin-small-top" hidden>
                            <pre><code id="code-jnprsyhu" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">ul</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-pagination"</span> <span className="hljs-attr">uk-margin</span>&gt;</span>{"\n"}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">span</span> <span className="hljs-attr">uk-pagination-previous</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">span</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>1<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-disabled"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">span</span>&gt;</span>...<span className="hljs-tag">&lt;/<span className="hljs-name">span</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>5<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>6<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-active"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">span</span>&gt;</span>7<span className="hljs-tag">&lt;/<span className="hljs-name">span</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>8<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">span</span> <span className="hljs-attr">uk-pagination-next</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">span</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}<span className="hljs-tag">&lt;/<span className="hljs-name">ul</span>&gt;</span>{"\n"}{"\n"}<span className="hljs-tag">&lt;<span className="hljs-name">ul</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-pagination uk-flex-center"</span> <span className="hljs-attr">uk-margin</span>&gt;</span>{"\n"}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">span</span> <span className="hljs-attr">uk-pagination-previous</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">span</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>1<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-disabled"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">span</span>&gt;</span>...<span className="hljs-tag">&lt;/<span className="hljs-name">span</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>5<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>6<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-active"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">span</span>&gt;</span>7<span className="hljs-tag">&lt;/<span className="hljs-name">span</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>8<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">span</span> <span className="hljs-attr">uk-pagination-next</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">span</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}<span className="hljs-tag">&lt;/<span className="hljs-name">ul</span>&gt;</span>{"\n"}{"\n"}<span className="hljs-tag">&lt;<span className="hljs-name">ul</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-pagination uk-flex-right uk-margin-medium-top"</span> <span className="hljs-attr">uk-margin</span>&gt;</span>{"\n"}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">span</span> <span className="hljs-attr">uk-pagination-previous</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">span</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>1<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-disabled"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">span</span>&gt;</span>...<span className="hljs-tag">&lt;/<span className="hljs-name">span</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>5<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>6<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-active"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">span</span>&gt;</span>7<span className="hljs-tag">&lt;/<span className="hljs-name">span</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>8<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">span</span> <span className="hljs-attr">uk-pagination-next</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">span</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}<span className="hljs-tag">&lt;/<span className="hljs-name">ul</span>&gt;</span></code></pre>
                          </div>
                        </div>
                        <h3 className="uk-margin-medium-top" id="Previous-and-next"> Previous and next </h3>
                        <p>To apply a previous and next button, add the <code>uk-pagination-previous</code> or
                          <code>uk-pagination-next</code> attribute to a <code>&lt;span&gt;</code> element
                          inside a pagination item.</p>
                        <h6> PREVIEW</h6>
                        <ul className="uk-pagination">
                          <li><a href="#"><span className="uk-margin-small-right" uk-pagination-previous />
                              Previous</a></li>
                          <li className="uk-margin-auto-left"><a href="#">Next <span className="uk-margin-small-left" uk-pagination-next /></a></li>
                        </ul>
                        <div>
                          <button className="Markup-botton button uk-margin-small-top" type="button" uk-toggle="target: #Pagination-Previous-next"> MARKUP</button>
                          <div id="Pagination-Previous-next" aria-hidden="true" className=" uk-margin-small-top" hidden>
                            <pre><code id="code-jnprsyhv" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">ul</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-pagination"</span>&gt;</span>{"\n"}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">span</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-margin-small-right"</span> <span className="hljs-attr">uk-pagination-previous</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">span</span>&gt;</span> Previous<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-margin-auto-left"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Next <span className="hljs-tag">&lt;<span className="hljs-name">span</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-margin-small-left"</span> <span className="hljs-attr">uk-pagination-next</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">span</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}<span className="hljs-tag">&lt;/<span className="hljs-name">ul</span>&gt;</span></code></pre>
                          </div>
                        </div>
                      </div>
                      <div className="uk-width-1-4@s uk-visible@s">
                        <ul className="uk-list docs-list" uk-sticky="offset:100;media : @m; top:20">
                          <li> <a href="#pager-intro" uk-scroll> Introduction </a></li>
                          <li> <a href="#Alignment" uk-scroll> Alignment </a></li>
                          <li> <a href="#Previous-and-next" uk-scroll> Previous and next </a></li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  {/* Position */}
                  <li>
                    <h2 id="position-intro">Position</h2>
                    <p className="mb-4"> A collection of utility classes to position content</p>
                    <div className="mt-4 uk-grid-large" uk-grid>
                      <div className="uk-width-3-4@s">
                        <p>To apply this component, add one of the <code>.uk-position-*</code> classes to a
                          block element.
                          When using this component to place content on top of an image, add the
                          <code>.uk-inline</code>
                          class from the <a href="https://getuikit.com/docs/utility">Utility component</a> to
                          a container
                          element around the image and the element to create a position context.</p>
                        <div className="uk-overflow-auto">
                          <table className="uk-table uk-table-divider">
                            <thead>
                              <tr>
                                <th align="left">Class</th>
                                <th align="left">Description</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td align="left"><code>.uk-position-top</code></td>
                                <td align="left">Positions the element at the top.</td>
                              </tr>
                              <tr>
                                <td align="left"><code>.uk-position-left</code></td>
                                <td align="left">Positions the element at the left.</td>
                              </tr>
                              <tr>
                                <td align="left"><code>.uk-position-right</code></td>
                                <td align="left">Positions the element at the right.</td>
                              </tr>
                              <tr>
                                <td align="left"><code>.uk-position-bottom</code></td>
                                <td align="left">Positions the element at the bottom.</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="uk-inline uk-margin">
                          <img src="https://wpkixx.com/html/socimo/images/elements/image.jpg" alt />
                          <div className="uk-position-top uk-overlay uk-overlay-default uk-text-center">Top</div>
                          <div className="uk-position-bottom uk-overlay uk-overlay-default uk-text-center">Bottom
                          </div>
                          <div className="uk-position-left uk-overlay uk-overlay-default uk-flex uk-flex-middle">
                            Left
                          </div>
                          <div className="uk-position-right uk-overlay uk-overlay-default uk-flex uk-flex-middle">
                            Right</div>
                        </div>
                        <div>
                          <button className="Markup-botton button uk-margin-small-top" type="button" uk-toggle="target: #pos-basic"> MARKUP</button>
                          <div id="pos-basic" aria-hidden="true" className="uk-margin-small-top" hidden>
                            <pre><code id="code-jw0fzy4l" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-inline uk-margin"</span>&gt;</span>{"\n"}{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">img</span> <span className="hljs-attr">src</span>=<span className="hljs-string">"images/photo.jpg"</span> <span className="hljs-attr">alt</span>=<span className="hljs-string">""</span>&gt;</span>{"\n"}{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-top uk-overlay uk-overlay-default uk-text-center"</span>&gt;</span>Top<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-bottom uk-overlay uk-overlay-default uk-text-center"</span>&gt;</span>Bottom<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-left uk-overlay uk-overlay-default uk-flex uk-flex-middle"</span>&gt;</span>Left<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-right uk-overlay uk-overlay-default uk-flex uk-flex-middle"</span>&gt;</span>Right<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\n"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span></code></pre>
                          </div>
                        </div>
                        <h3 className="uk-margin-medium-top" id="directions">X and Y directions </h3>
                        <p>You can also apply more specific positions that won't
                          spread over
                          one side of the parent container by adding one of the following classes. </p>
                        <div className="uk-inline">
                          <img src="https://wpkixx.com/html/socimo/images/elements/image.jpg" alt />
                          <div className="uk-position-top-left uk-overlay uk-overlay-default">Top Left</div>
                          <div className="uk-position-top-center uk-overlay uk-overlay-default">Top Center</div>
                          <div className="uk-position-top-right uk-overlay uk-overlay-default">Top Right</div>
                          <div className="uk-position-center-left uk-overlay uk-overlay-default">Center Left</div>
                          <div className="uk-position-center uk-overlay uk-overlay-default">Center</div>
                          <div className="uk-position-center-right uk-overlay uk-overlay-default">Center Right
                          </div>
                          <div className="uk-position-bottom-left uk-overlay uk-overlay-default">Bottom Left</div>
                          <div className="uk-position-bottom-center uk-overlay uk-overlay-default">Bottom Center
                          </div>
                          <div className="uk-position-bottom-right uk-overlay uk-overlay-default">Bottom Right
                          </div>
                        </div>
                        <div>
                          <button className="Markup-botton button uk-margin-small-top" type="button" uk-toggle="target: #pos-directions"> MARKUP</button>
                          <div id="pos-directions" aria-hidden="true" className="uk-margin-small-top" hidden>
                            <pre><code id="code-jw0fzy4m" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-inline"</span>&gt;</span>{"\n"}{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">img</span> <span className="hljs-attr">src</span>=<span className="hljs-string">"images/photo.jpg"</span> <span className="hljs-attr">alt</span>=<span className="hljs-string">""</span>&gt;</span>{"\n"}{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-top-left uk-overlay uk-overlay-default"</span>&gt;</span>Top Left<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-top-center uk-overlay uk-overlay-default"</span>&gt;</span>Top Center<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-top-right uk-overlay uk-overlay-default"</span>&gt;</span>Top Right<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-center-left uk-overlay uk-overlay-default"</span>&gt;</span>Center Left<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-center uk-overlay uk-overlay-default"</span>&gt;</span>Center<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-center-right uk-overlay uk-overlay-default"</span>&gt;</span>Center Right<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-bottom-left uk-overlay uk-overlay-default"</span>&gt;</span>Bottom Left<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-bottom-center uk-overlay uk-overlay-default"</span>&gt;</span>Bottom Center<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-bottom-right uk-overlay uk-overlay-default"</span>&gt;</span>Bottom Right<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\n"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span></code></pre>
                          </div>
                        </div>
                        <h3 className="uk-margin-medium-top" id="Cover">Cover </h3>
                        <p>If you want a position element to cover its container,
                          just add
                          the <code>.uk-position-cover</code> class. </p>
                        <div className="uk-inline">
                          <img src="https://wpkixx.com/html/socimo/images/elements/image.jpg" alt />
                          <div className="uk-position-cover uk-overlay uk-overlay-default uk-flex uk-flex-center uk-flex-middle">
                            Cover</div>
                        </div>
                        <div>
                          <button className="Markup-botton button uk-margin-small-top" type="button" uk-toggle="target: #cover"> MARKUP</button>
                          <div id="cover" aria-hidden="true" className="uk-margin-small-top" hidden>
                            <pre><code id="code-jw0fzy4n" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-inline"</span>&gt;</span>{"\n"}{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">img</span> <span className="hljs-attr">src</span>=<span className="hljs-string">"images/photo.jpg"</span> <span className="hljs-attr">alt</span>=<span className="hljs-string">""</span>&gt;</span>{"\n"}{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-cover uk-overlay uk-overlay-default uk-flex uk-flex-center uk-flex-middle"</span>&gt;</span>Cover<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\n"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span></code></pre>
                          </div>
                        </div>
                        <h3 className="uk-margin-medium-top" id="Small-modifier">Small modifier </h3>
                        <p> To apply a small margin to positioned elements, add the
                          <code>.uk-position-small</code> or <code>.uk-position-medium</code> and
                          <code>.uk-position-large</code> class. </p>
                        <div className="uk-inline uk-margin">
                          <img src="https://wpkixx.com/html/socimo/images/elements/image.jpg" alt />
                          <div className="uk-position-small uk-position-top-left uk-overlay uk-overlay-default">
                            Top
                            Left</div>
                          <div className="uk-position-small uk-position-top-center uk-overlay uk-overlay-default">
                            Top
                            Center
                          </div>
                          <div className="uk-position-small uk-position-top-right uk-overlay uk-overlay-default">
                            Top
                            Right
                          </div>
                          <div className="uk-position-small uk-position-center-left uk-overlay uk-overlay-default">
                            Center Left
                          </div>
                          <div className="uk-position-small uk-position-center uk-overlay uk-overlay-default">
                            Center
                          </div>
                          <div className="uk-position-small uk-position-center-right uk-overlay uk-overlay-default">
                            Center
                            Right</div>
                          <div className="uk-position-small uk-position-bottom-left uk-overlay uk-overlay-default">
                            Bottom Left
                          </div>
                          <div className="uk-position-small uk-position-bottom-center uk-overlay uk-overlay-default">
                            Bottom
                            Center</div>
                          <div className="uk-position-small uk-position-bottom-right uk-overlay uk-overlay-default">
                            Bottom
                            Right</div>
                        </div>
                        <div className="uk-inline uk-margin">
                          <img src="https://wpkixx.com/html/socimo/images/elements/image.jpg" alt />
                          <div className="uk-position-small uk-position-top uk-overlay uk-overlay-default uk-text-center">
                            Top
                          </div>
                          <div className="uk-position-small uk-position-bottom uk-overlay uk-overlay-default uk-text-center">
                            Bottom</div>
                          <div className="uk-position-small uk-position-left uk-overlay uk-overlay-default uk-flex uk-flex-middle">
                            Left</div>
                          <div className="uk-position-small uk-position-right uk-overlay uk-overlay-default uk-flex uk-flex-middle">
                            Right</div>
                        </div>
                        <div className="uk-inline uk-margin">
                          <img src="https://wpkixx.com/html/socimo/images/elements/image.jpg" alt />
                          <div className="uk-position-small uk-position-cover uk-overlay uk-overlay-default uk-flex uk-flex-center uk-flex-middle">
                            Cover</div>
                        </div>
                        <div className="uk-width-2-3@m mt-md m-auto">
                          <div className="uk-inline-block uk-width-large">
                            <img src="https://wpkixx.com/html/socimo/images/elements/image.jpg" alt />
                            <div className="uk-position-small uk-position-center-left-out uk-overlay uk-overlay-primary uk-visible@s">
                              Out</div>
                            <div className="uk-position-small uk-position-center-right-out uk-overlay uk-overlay-primary uk-visible@s">
                              Out</div>
                          </div>
                        </div>
                        <h3 className="uk-margin-medium-top" id="Utility-classes">Utility classes </h3>
                        <p>This component features a number of general position
                          utility
                          classes: </p>
                        <div className="uk-overflow-auto uk-margin-medium">
                          <table className="uk-table uk-table-divider">
                            <thead>
                              <tr>
                                <th align="left">Class</th>
                                <th align="left">Description</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td align="left"><code>.uk-position-relative</code></td>
                                <td align="left">Add this class to apply relative positioning.</td>
                              </tr>
                              <tr>
                                <td align="left"><code>.uk-position-absolute</code></td>
                                <td align="left">Add this class to apply absolute positioning.</td>
                              </tr>
                              <tr>
                                <td align="left"><code>.uk-position-fixed</code></td>
                                <td align="left">Add this class to apply fixed positioning.</td>
                              </tr>
                              <tr>
                                <td align="left"><code>.uk-position-z-index</code></td>
                                <td align="left">Add this class to apply a z-index of 1.</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <h3 className="uk-margin-medium-top" id="Outside">Outside</h3>
                        <p>There are two classes to center elements outside on the left and right of the parent
                          container.
                          This is useful to
                          position the Slidenav component outside of an <a href="https://wpkixx.com/html/socimo/slideshow.html">Slideshow</a>
                          or <a href="https://wpkixx.com/html/socimo/slider.html">Slider</a> component.</p>
                        <div className="uk-inline">
                          <img src="https://wpkixx.com/html/socimo/images/elements/image.jpg" alt />
                          <div className="uk-position-center-left-out uk-overlay uk-overlay-primary uk-visible@s">
                            Out</div>
                          <div className="uk-position-center-right-out uk-overlay uk-overlay-primary uk-visible@s">
                            Out</div>
                        </div>
                        <div>
                          <button className="Markup-botton button uk-margin-small-top" type="button" uk-toggle="target: #utside"> MARKUP</button>
                          <div id="utside" aria-hidden="true" className="uk-margin-small-top" hidden>
                            <pre><code id="code-jw0fzy4o" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-inline"</span>&gt;</span>{"\n"}{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">img</span> <span className="hljs-attr">src</span>=<span className="hljs-string">"images/photo.jpg"</span> <span className="hljs-attr">alt</span>=<span className="hljs-string">""</span>&gt;</span>{"\n"}{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-center-left-out uk-overlay uk-overlay-primary uk-visible@s"</span>&gt;</span>Out<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-position-center-right-out uk-overlay uk-overlay-primary uk-visible@s"</span>&gt;</span>Out<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\n"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span></code></pre>
                          </div>
                        </div>
                      </div>
                      <div className="uk-width-1-4@s uk-visible@s">
                        <ul className="uk-list docs-list" uk-sticky="offset:100;media : @m; top:20">
                          <li> <a href="#position-intro" uk-scroll> Introduction </a></li>
                          <li> <a href="#directions" uk-scroll> directions </a></li>
                          <li> <a href="#Cover" uk-scroll> Cover </a></li>
                          <li> <a href="#Small-modifier" uk-scroll> Small modifier </a></li>
                          <li> <a href="#Utility-classes" uk-scroll> Utility classes </a></li>
                          <li> <a href="#Outside" uk-scroll> Outside </a></li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  {/* Table */}
                  <li>
                    <div className="mt-4 uk-grid-large" uk-grid>
                      <div className="uk-width-3-4@s">
                        <h2> Table</h2>
                        <p className="mb-4"> Easily create nice looking tables, which come in different styles.</p>
                        <p id="table-intro"> To apply this component, add the <code>.uk-table</code> class
                          to a <code>&lt;table&gt;</code> element. element. </p>
                        <table className="uk-table">
                          <thead>
                            <tr>
                              <th>Table Heading</th>
                              <th>Table Heading</th>
                              <th>Table Heading</th>
                            </tr>
                          </thead>
                          <tfoot>
                            <tr>
                              <td>Table Footer</td>
                              <td>Table Footer</td>
                              <td>Table Footer</td>
                            </tr>
                          </tfoot>
                          <tbody>
                            <tr>
                              <td>Table Data</td>
                              <td>Table Data</td>
                              <td>Table Data</td>
                            </tr>
                            <tr>
                              <td>Table Data</td>
                              <td>Table Data</td>
                              <td>Table Data</td>
                            </tr>
                          </tbody>
                        </table>
                        <div>
                          <button className="Markup-botton button uk-margin-small-top" type="button" uk-toggle="target: #table-basic"> MARKUP</button>
                          <div id="table-basic" aria-hidden="true" className="uk-margin-small-top" hidden>
                            <pre><code id="code-jw0g6qet" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">table</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-table"</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">caption</span>&gt;</span>Table Caption<span className="hljs-tag">&lt;/<span className="hljs-name">caption</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">thead</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">tr</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">th</span>&gt;</span>Table Heading<span className="hljs-tag">&lt;/<span className="hljs-name">th</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">th</span>&gt;</span>Table Heading<span className="hljs-tag">&lt;/<span className="hljs-name">th</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">th</span>&gt;</span>Table Heading<span className="hljs-tag">&lt;/<span className="hljs-name">th</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">tr</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">thead</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">tfoot</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">tr</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">td</span>&gt;</span>Table Footer<span className="hljs-tag">&lt;/<span className="hljs-name">td</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">td</span>&gt;</span>Table Footer<span className="hljs-tag">&lt;/<span className="hljs-name">td</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">td</span>&gt;</span>Table Footer<span className="hljs-tag">&lt;/<span className="hljs-name">td</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">tr</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">tfoot</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">tbody</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">tr</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">td</span>&gt;</span>Table Data<span className="hljs-tag">&lt;/<span className="hljs-name">td</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">td</span>&gt;</span>Table Data<span className="hljs-tag">&lt;/<span className="hljs-name">td</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">td</span>&gt;</span>Table Data<span className="hljs-tag">&lt;/<span className="hljs-name">td</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">tr</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">tr</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">td</span>&gt;</span>Table Data<span className="hljs-tag">&lt;/<span className="hljs-name">td</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">td</span>&gt;</span>Table Data<span className="hljs-tag">&lt;/<span className="hljs-name">td</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">td</span>&gt;</span>Table Data<span className="hljs-tag">&lt;/<span className="hljs-name">td</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">tr</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">tbody</span>&gt;</span>{"\n"}<span className="hljs-tag">&lt;/<span className="hljs-name">table</span>&gt;</span></code></pre>
                          </div>
                        </div>
                        <h3 className="uk-margin-medium-top " id="table-divider"> Divider modifier </h3>
                        <div className="uk-margin-medium">
                          <pre><code className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">table</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-table uk-table-divider"</span>&gt;</span>...<span className="hljs-tag">&lt;/<span className="hljs-name">table</span>&gt;</span></code></pre>
                        </div>
                        <p> Add the <code>.uk-table-divider</code> class to display a
                          divider
                          between table rows. </p>
                        <table className="uk-table uk-table-divider">
                          <thead>
                            <tr>
                              <th>Table Heading</th>
                              <th>Table Heading</th>
                              <th>Table Heading</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Table Data</td>
                              <td>Table Data</td>
                              <td>Table Data</td>
                            </tr>
                            <tr>
                              <td>Table Data</td>
                              <td>Table Data</td>
                              <td>Table Data</td>
                            </tr>
                            <tr>
                              <td>Table Data</td>
                              <td>Table Data</td>
                              <td>Table Data</td>
                            </tr>
                          </tbody>
                        </table>
                        <div>
                          <button className="Markup-botton button uk-margin-small-top" type="button" uk-toggle="target: #divider"> MARKUP</button>
                          <div id="divider" aria-hidden="true" className="uk-margin-small-top" hidden>
                            <pre><code id="code-jw0g6qeu" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">table</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-table uk-table-divider"</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">thead</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">tr</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">th</span>&gt;</span>Table Heading<span className="hljs-tag">&lt;/<span className="hljs-name">th</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">th</span>&gt;</span>Table Heading<span className="hljs-tag">&lt;/<span className="hljs-name">th</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">th</span>&gt;</span>Table Heading<span className="hljs-tag">&lt;/<span className="hljs-name">th</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">tr</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">thead</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">tbody</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">tr</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">td</span>&gt;</span>Table Data<span className="hljs-tag">&lt;/<span className="hljs-name">td</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">td</span>&gt;</span>Table Data<span className="hljs-tag">&lt;/<span className="hljs-name">td</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">td</span>&gt;</span>Table Data<span className="hljs-tag">&lt;/<span className="hljs-name">td</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">tr</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">tr</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">td</span>&gt;</span>Table Data<span className="hljs-tag">&lt;/<span className="hljs-name">td</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">td</span>&gt;</span>Table Data<span className="hljs-tag">&lt;/<span className="hljs-name">td</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">td</span>&gt;</span>Table Data<span className="hljs-tag">&lt;/<span className="hljs-name">td</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">tr</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">tr</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">td</span>&gt;</span>Table Data<span className="hljs-tag">&lt;/<span className="hljs-name">td</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">td</span>&gt;</span>Table Data<span className="hljs-tag">&lt;/<span className="hljs-name">td</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">td</span>&gt;</span>Table Data<span className="hljs-tag">&lt;/<span className="hljs-name">td</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">tr</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">tbody</span>&gt;</span>{"\n"}<span className="hljs-tag">&lt;/<span className="hljs-name">table</span>&gt;</span></code></pre>
                          </div>
                        </div>
                        <h3 className="uk-margin-medium-top " id="table-striped"> Striped modifier </h3>
                        <div className="uk-margin-medium">
                          <pre><code className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">table</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-table uk-table-striped"</span>&gt;</span>...<span className="hljs-tag">&lt;/<span className="hljs-name">table</span>&gt;</span></code></pre>
                        </div>
                        <p>Add zebra-striping to a table by adding the <code>
                            .uk-table-striped</code> class.
                        </p>
                        <table className="uk-table uk-table-striped">
                          <thead>
                            <tr>
                              <th>Table Heading</th>
                              <th>Table Heading</th>
                              <th>Table Heading</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Table Data</td>
                              <td>Table Data</td>
                              <td>Table Data</td>
                            </tr>
                            <tr>
                              <td>Table Data</td>
                              <td>Table Data</td>
                              <td>Table Data</td>
                            </tr>
                            <tr>
                              <td>Table Data</td>
                              <td>Table Data</td>
                              <td>Table Data</td>
                            </tr>
                          </tbody>
                        </table>
                        <div>
                          <button className="Markup-botton button uk-margin-small-top" type="button" uk-toggle="target: #tab-striped"> MARKUP</button>
                          <div id="tab-striped" aria-hidden="true" className="uk-margin-small-top" hidden>
                            <pre><code id="code-jw0g6qev" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">table</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-table uk-table-striped"</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">thead</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">tr</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">th</span>&gt;</span>Table Heading<span className="hljs-tag">&lt;/<span className="hljs-name">th</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">th</span>&gt;</span>Table Heading<span className="hljs-tag">&lt;/<span className="hljs-name">th</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">th</span>&gt;</span>Table Heading<span className="hljs-tag">&lt;/<span className="hljs-name">th</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">tr</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">thead</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">tbody</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">tr</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">td</span>&gt;</span>Table Data<span className="hljs-tag">&lt;/<span className="hljs-name">td</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">td</span>&gt;</span>Table Data<span className="hljs-tag">&lt;/<span className="hljs-name">td</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">td</span>&gt;</span>Table Data<span className="hljs-tag">&lt;/<span className="hljs-name">td</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">tr</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">tr</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">td</span>&gt;</span>Table Data<span className="hljs-tag">&lt;/<span className="hljs-name">td</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">td</span>&gt;</span>Table Data<span className="hljs-tag">&lt;/<span className="hljs-name">td</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">td</span>&gt;</span>Table Data<span className="hljs-tag">&lt;/<span className="hljs-name">td</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">tr</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">tr</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">td</span>&gt;</span>Table Data<span className="hljs-tag">&lt;/<span className="hljs-name">td</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">td</span>&gt;</span>Table Data<span className="hljs-tag">&lt;/<span className="hljs-name">td</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">td</span>&gt;</span>Table Data<span className="hljs-tag">&lt;/<span className="hljs-name">td</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">tr</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">tbody</span>&gt;</span>{"\n"}<span className="hljs-tag">&lt;/<span className="hljs-name">table</span>&gt;</span></code></pre>
                          </div>
                        </div>
                        <h3 className="uk-margin-medium-top " id="Responsive-table"> Responsive table</h3>
                        <div className="uk-margin-medium">
                          <pre><code className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-overflow-auto"</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">table</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-table"</span>&gt;</span>...<span className="hljs-tag">&lt;/<span className="hljs-name">table</span>&gt;</span>{"\n"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span></code></pre>
                        </div>
                        <p>If your table happens to be wider than its container element
                          or
                          would eventually get too big on a specific viewport width, just wrap it inside a
                          <code>&lt;div&gt;</code> element and add the <code>.uk-overflow-auto</code> class ..
                          This
                          creates a container that provides a
                          horizontal scrollbar whenever the elements inside it are wider than the container
                          itself
                        </p>
                        <div className="uk-overflow-auto">
                          <table className="uk-table uk-table-small uk-table-divider">
                            <thead>
                              <tr>
                                <th>Table Heading</th>
                                <th>Table Heading</th>
                                <th>Table Heading</th>
                                <th>Table Heading</th>
                                <th>Table Heading</th>
                                <th>Table Heading</th>
                                <th>Table Heading</th>
                                <th>Table Heading</th>
                                <th>Table Heading</th>
                                <th>Table Heading</th>
                                <th>Table Heading</th>
                                <th>Table Heading</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Table Data</td>
                                <td>Table Data</td>
                                <td>Table Data</td>
                                <td>Table Data</td>
                                <td>Table Data</td>
                                <td>Table Data</td>
                                <td>Table Data</td>
                                <td>Table Data</td>
                                <td>Table Data</td>
                                <td>Table Data</td>
                                <td>Table Data</td>
                                <td>Table Data</td>
                              </tr>
                              <tr>
                                <td>Table Data</td>
                                <td>Table Data</td>
                                <td>Table Data</td>
                                <td>Table Data</td>
                                <td>Table Data</td>
                                <td>Table Data</td>
                                <td>Table Data</td>
                                <td>Table Data</td>
                                <td>Table Data</td>
                                <td>Table Data</td>
                                <td>Table Data</td>
                                <td>Table Data</td>
                              </tr>
                              <tr>
                                <td>Table Data</td>
                                <td>Table Data</td>
                                <td>Table Data</td>
                                <td>Table Data</td>
                                <td>Table Data</td>
                                <td>Table Data</td>
                                <td>Table Data</td>
                                <td>Table Data</td>
                                <td>Table Data</td>
                                <td>Table Data</td>
                                <td>Table Data</td>
                                <td>Table Data</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div>
                          <button className="Markup-botton button uk-margin-small-top" type="button" uk-toggle="target: #accordion"> MARKUP</button>
                          <div id="accordion" aria-hidden="true" className="uk-margin-small-top" hidden>
                            <pre><code id="code-jw0g6qf0" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-overflow-auto"</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">table</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-table uk-table-small uk-table-divider"</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">thead</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">tr</span>&gt;</span>{"\n"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">th</span>&gt;</span>Table Heading<span className="hljs-tag">&lt;/<span className="hljs-name">th</span>&gt;</span>{"\n"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">th</span>&gt;</span>Table Heading<span className="hljs-tag">&lt;/<span className="hljs-name">th</span>&gt;</span>{"\n"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">th</span>&gt;</span>Table Heading<span className="hljs-tag">&lt;/<span className="hljs-name">th</span>&gt;</span>{"\n"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">th</span>&gt;</span>Table Heading<span className="hljs-tag">&lt;/<span className="hljs-name">th</span>&gt;</span>{"\n"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">th</span>&gt;</span>Table Heading<span className="hljs-tag">&lt;/<span className="hljs-name">th</span>&gt;</span>{"\n"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">th</span>&gt;</span>Table Heading<span className="hljs-tag">&lt;/<span className="hljs-name">th</span>&gt;</span>{"\n"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">th</span>&gt;</span>Table Heading<span className="hljs-tag">&lt;/<span className="hljs-name">th</span>&gt;</span>{"\n"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">th</span>&gt;</span>Table Heading<span className="hljs-tag">&lt;/<span className="hljs-name">th</span>&gt;</span>{"\n"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">th</span>&gt;</span>Table Heading<span className="hljs-tag">&lt;/<span className="hljs-name">th</span>&gt;</span>{"\n"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">th</span>&gt;</span>Table Heading<span className="hljs-tag">&lt;/<span className="hljs-name">th</span>&gt;</span>{"\n"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">th</span>&gt;</span>Table Heading<span className="hljs-tag">&lt;/<span className="hljs-name">th</span>&gt;</span>{"\n"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">th</span>&gt;</span>Table Heading<span className="hljs-tag">&lt;/<span className="hljs-name">th</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;/<span className="hljs-name">tr</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">thead</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">tbody</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">tr</span>&gt;</span>{"\n"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">td</span>&gt;</span>Table Data<span className="hljs-tag">&lt;/<span className="hljs-name">td</span>&gt;</span>{"\n"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">td</span>&gt;</span>Table Data<span className="hljs-tag">&lt;/<span className="hljs-name">td</span>&gt;</span>{"\n"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">td</span>&gt;</span>Table Data<span className="hljs-tag">&lt;/<span className="hljs-name">td</span>&gt;</span>{"\n"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">td</span>&gt;</span>Table Data<span className="hljs-tag">&lt;/<span className="hljs-name">td</span>&gt;</span>{"\n"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">td</span>&gt;</span>Table Data<span className="hljs-tag">&lt;/<span className="hljs-name">td</span>&gt;</span>{"\n"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">td</span>&gt;</span>Table Data<span className="hljs-tag">&lt;/<span className="hljs-name">td</span>&gt;</span>{"\n"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">td</span>&gt;</span>Table Data<span className="hljs-tag">&lt;/<span className="hljs-name">td</span>&gt;</span>{"\n"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">td</span>&gt;</span>Table Data<span className="hljs-tag">&lt;/<span className="hljs-name">td</span>&gt;</span>{"\n"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">td</span>&gt;</span>Table Data<span className="hljs-tag">&lt;/<span className="hljs-name">td</span>&gt;</span>{"\n"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">td</span>&gt;</span>Table Data<span className="hljs-tag">&lt;/<span className="hljs-name">td</span>&gt;</span>{"\n"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">td</span>&gt;</span>Table Data<span className="hljs-tag">&lt;/<span className="hljs-name">td</span>&gt;</span>{"\n"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">td</span>&gt;</span>Table Data<span className="hljs-tag">&lt;/<span className="hljs-name">td</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;/<span className="hljs-name">tr</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">tr</span>&gt;</span>{"\n"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">td</span>&gt;</span>Table Data<span className="hljs-tag">&lt;/<span className="hljs-name">td</span>&gt;</span>{"\n"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">td</span>&gt;</span>Table Data<span className="hljs-tag">&lt;/<span className="hljs-name">td</span>&gt;</span>{"\n"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">td</span>&gt;</span>Table Data<span className="hljs-tag">&lt;/<span className="hljs-name">td</span>&gt;</span>{"\n"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">td</span>&gt;</span>Table Data<span className="hljs-tag">&lt;/<span className="hljs-name">td</span>&gt;</span>{"\n"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">td</span>&gt;</span>Table Data<span className="hljs-tag">&lt;/<span className="hljs-name">td</span>&gt;</span>{"\n"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">td</span>&gt;</span>Table Data<span className="hljs-tag">&lt;/<span className="hljs-name">td</span>&gt;</span>{"\n"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">td</span>&gt;</span>Table Data<span className="hljs-tag">&lt;/<span className="hljs-name">td</span>&gt;</span>{"\n"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">td</span>&gt;</span>Table Data<span className="hljs-tag">&lt;/<span className="hljs-name">td</span>&gt;</span>{"\n"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">td</span>&gt;</span>Table Data<span className="hljs-tag">&lt;/<span className="hljs-name">td</span>&gt;</span>{"\n"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">td</span>&gt;</span>Table Data<span className="hljs-tag">&lt;/<span className="hljs-name">td</span>&gt;</span>{"\n"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">td</span>&gt;</span>Table Data<span className="hljs-tag">&lt;/<span className="hljs-name">td</span>&gt;</span>{"\n"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">td</span>&gt;</span>Table Data<span className="hljs-tag">&lt;/<span className="hljs-name">td</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;/<span className="hljs-name">tr</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">tr</span>&gt;</span>{"\n"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">td</span>&gt;</span>Table Data<span className="hljs-tag">&lt;/<span className="hljs-name">td</span>&gt;</span>{"\n"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">td</span>&gt;</span>Table Data<span className="hljs-tag">&lt;/<span className="hljs-name">td</span>&gt;</span>{"\n"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">td</span>&gt;</span>Table Data<span className="hljs-tag">&lt;/<span className="hljs-name">td</span>&gt;</span>{"\n"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">td</span>&gt;</span>Table Data<span className="hljs-tag">&lt;/<span className="hljs-name">td</span>&gt;</span>{"\n"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">td</span>&gt;</span>Table Data<span className="hljs-tag">&lt;/<span className="hljs-name">td</span>&gt;</span>{"\n"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">td</span>&gt;</span>Table Data<span className="hljs-tag">&lt;/<span className="hljs-name">td</span>&gt;</span>{"\n"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">td</span>&gt;</span>Table Data<span className="hljs-tag">&lt;/<span className="hljs-name">td</span>&gt;</span>{"\n"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">td</span>&gt;</span>Table Data<span className="hljs-tag">&lt;/<span className="hljs-name">td</span>&gt;</span>{"\n"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">td</span>&gt;</span>Table Data<span className="hljs-tag">&lt;/<span className="hljs-name">td</span>&gt;</span>{"\n"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">td</span>&gt;</span>Table Data<span className="hljs-tag">&lt;/<span className="hljs-name">td</span>&gt;</span>{"\n"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">td</span>&gt;</span>Table Data<span className="hljs-tag">&lt;/<span className="hljs-name">td</span>&gt;</span>{"\n"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">td</span>&gt;</span>Table Data<span className="hljs-tag">&lt;/<span className="hljs-name">td</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;/<span className="hljs-name">tr</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">tbody</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">table</span>&gt;</span>{"\n"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span></code></pre>
                          </div>
                        </div>
                      </div>
                      <div className="uk-width-1-4@s uk-visible@s">
                        <ul className="uk-list docs-list" uk-sticky="offset:100;media : @m; top:20">
                          <li> <a href="#table-intro" uk-scroll> Basic </a></li>
                          <li> <a href="#table-divider" uk-scroll> Divider modifier </a></li>
                          <li> <a href="#table-striped" uk-scroll> Striped modifier </a></li>
                          <li> <a href="#Responsive-table" uk-scroll> Responsive table </a></li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  {/* Tab */}
                  <li>
                    <div className="mt-4 uk-grid-large" uk-grid>
                      <div className="uk-width-3-4@s">
                        <h2>Tab</h2>
                        <p className="mb-4"> Create a tabbed navigation with different styles. </p>
                        <p> The tab component consists of clickable tabs, that are
                          aligned side by side in a list. Its JavaScript functionality extends the <a href="https://getuikit.com/docs/switcher">Switcher component</a> and is
                          necessary to
                          dynamically transition through different contents using the tabbed navigation.</p>
                        <ul uk-tab>
                          <li className="uk-active"><a href="#">Left</a></li>
                          <li><a href="#">Item</a></li>
                          <li><a href="#">Item</a></li>
                          <li className="uk-disabled"><a>Disabled</a></li>
                        </ul>
                        <div>
                          <button className="Markup-botton button uk-margin-small-top" type="button" uk-toggle="target: #tabs-basic"> MARKUP</button>
                          <div id="tabs-basic" aria-hidden="true" className="uk-margin-small-top" hidden>
                            <pre><code id="code-jw0g6dd8" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">ul</span> <span className="hljs-attr">uk-tab</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-active"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Left<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-disabled"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span>&gt;</span>Disabled<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}<span className="hljs-tag">&lt;/<span className="hljs-name">ul</span>&gt;</span></code></pre>
                          </div>
                        </div>
                        <h3 className=" uk-margin-medium-top " id="tab-bottom-modifier"> Bottom modifier </h3>
                        <p> Add the <code>.uk-tab-bottom</code> class to flip tab items
                          to the bottom. </p>
                        <ul className="uk-tab-bottom" uk-tab>
                          <li className="uk-active"><a href="#">Left</a></li>
                          <li><a href="#">Item</a></li>
                          <li><a href="#">Item</a></li>
                        </ul>
                        <div>
                          <button className="Markup-botton button uk-margin-small-top" type="button" uk-toggle="target: #Bottom-modifier"> MARKUP</button>
                          <div id="Bottom-modifier" aria-hidden="true" className="uk-margin-small-top" hidden>
                            <pre><code id="code-jw0g6dd9" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">ul</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-tab-bottom"</span> <span className="hljs-attr">uk-tab</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-active"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Left<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}<span className="hljs-tag">&lt;/<span className="hljs-name">ul</span>&gt;</span></code></pre>
                          </div>
                        </div>
                        <h3 className=" uk-margin-medium-top " id="Left/Right-modifier"> Left/Right modifier </h3>
                        <p className="mb-sm"> Add the <code>.uk-tab-left</code> or
                          <code>.uk-tab-right</code> class to align tabs vertically to the left or right side.
                          To
                          save space, the alignment automatically switches back to horizontal when the
                          viewport
                          width goes below 960px. </p>
                        <div className="uk-width-1-2@s m-auto">
                          <div className="uk-child-width-1-2@s" uk-grid>
                            <div>
                              <ul className="uk-tab-left" uk-tab>
                                <li className="uk-active"><a href="#">Left</a></li>
                                <li><a href="#">Item</a></li>
                                <li><a href="#">Item</a></li>
                              </ul>
                            </div>
                            <div>
                              <ul className="uk-tab-right" uk-tab>
                                <li className="uk-active"><a href="#">Right</a></li>
                                <li><a href="#">Item</a></li>
                                <li><a href="#">Item</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div>
                          <button className="Markup-botton button uk-margin-small-top" type="button" uk-toggle="target: #Left-and-Right-modifier"> MARKUP</button>
                          <div id="Left-and-Right-modifier" aria-hidden="true" className="uk-margin-small-top" hidden>
                            <pre><code id="code-jw0g6dda" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-child-width-1-2@s"</span> <span className="hljs-attr">uk-grid</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">ul</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-tab-left"</span> <span className="hljs-attr">uk-tab</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-active"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Left<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">ul</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">ul</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-tab-right"</span> <span className="hljs-attr">uk-tab</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-active"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Right<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">ul</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span></code></pre>
                          </div>
                        </div>
                        <h3 className=" uk-margin-medium-top " id="tab-alignment">Alignment </h3>
                        <p> You can combine tabs with the <a href="https://wpkixx.com/html/socimo/flex.html">Flex
                            component</a> or the <a href="https://wpkixx.com/html/socimo/grid.html">Width component</a> to modify the
                          alignment
                          of the navigations. </p>
                        <div className="uk-margin-medium-top">
                          <ul className="uk-flex-center" uk-tab>
                            <li className="uk-active"><a href="#">Center</a></li>
                            <li><a href="#">Item</a></li>
                            <li><a href="#">Item</a></li>
                          </ul>
                        </div>
                        <div className="uk-margin-medium-top">
                          <ul className="uk-flex-right" uk-tab>
                            <li className="uk-active"><a href="#">Right</a></li>
                            <li><a href="#">Item</a></li>
                            <li><a href="#">Item</a></li>
                          </ul>
                        </div>
                        <div className="uk-margin-medium-top">
                          <ul className="uk-child-width-expand" uk-tab>
                            <li className="uk-active"><a href="#">Justify</a></li>
                            <li><a href="#">Item</a></li>
                            <li><a href="#">Item</a></li>
                            <li><a href="#">Item</a></li>
                          </ul>
                        </div>
                        <div>
                          <button className="Markup-botton button uk-margin-small-top" type="button" uk-toggle="target: #item-alignment"> MARKUP</button>
                          <div id="item-alignment" aria-hidden="true" className="uk-margin-small-top" hidden>
                            <pre><code id="code-jw0g6ddb" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-margin-medium-top"</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">ul</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-flex-center"</span> <span className="hljs-attr">uk-tab</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-active"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Center<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">ul</span>&gt;</span>{"\n"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\n"}<span className="hljs-tag">&lt;<span className="hljs-name">div</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">ul</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-flex-right"</span> <span className="hljs-attr">uk-tab</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-active"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Right<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">ul</span>&gt;</span>{"\n"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"\n"}<span className="hljs-tag">&lt;<span className="hljs-name">div</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">ul</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-child-width-expand"</span> <span className="hljs-attr">uk-tab</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-active"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Justify<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">ul</span>&gt;</span>{"\n"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span></code></pre>
                          </div>
                        </div>
                        <h3 className="uk-margin-medium-top " id="Tabs-and-Dropdown">Tabs and Dropdown </h3>
                        <p> Tabs can be used to trigger a dropdown menu from the <a href="https://getuikit.com/docs/dropdown">Dropdown component</a></p>
                        <ul uk-tab>
                          <li className="uk-active"><a href="#">Active</a></li>
                          <li><a href="#">Item</a></li>
                          <li>
                            <a href="#" className="dropdown-arrow">More <span className="uk-margin-small-left" uk-icon="icon: triangle-down" /></a>
                            <div uk-dropdown="mode: click">
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
                          </li>
                        </ul>
                        <div>
                          <button className="Markup-botton button uk-margin-small-top" type="button" uk-toggle="target: #Tab-and-Dropdown"> MARKUP</button>
                          <div id="Tab-and-Dropdown" aria-hidden="true" className="uk-margin-small-top" hidden>
                            <pre><code id="code-jw0g6ddc" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">ul</span> <span className="hljs-attr">uk-tab</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-active"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Active<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>More <span className="hljs-tag">&lt;<span className="hljs-name">span</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-margin-small-left"</span> <span className="hljs-attr">uk-icon</span>=<span className="hljs-string">"icon: triangle-down"</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">span</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">uk-dropdown</span>=<span className="hljs-string">"mode: click"</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;<span className="hljs-name">ul</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-nav uk-dropdown-nav"</span>&gt;</span>{"\n"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-active"</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Active<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-nav-header"</span>&gt;</span>Header<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-nav-divider"</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"                "}<span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">a</span> <span className="hljs-attr">href</span>=<span className="hljs-string">"#"</span>&gt;</span>Item<span className="hljs-tag">&lt;/<span className="hljs-name">a</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}{"            "}<span className="hljs-tag">&lt;/<span className="hljs-name">ul</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span>{"\n"}<span className="hljs-tag">&lt;/<span className="hljs-name">ul</span>&gt;</span></code></pre>
                          </div>
                        </div>
                        <h3 className="uk-margin-medium-top" id="light-Tabs"> Advance Light Tabs</h3>
                        <p> <code>.uk-light</code> to change your tabs to Light and <a href="https://wpkixx.com/html/socimo/colors.html">
                            background
                            compunents </a> </p>
                        <div className="uk-light bg-dark pd-20">
                          <ul className="uk-tab uk-light" uk-switcher="animation: uk-animation-slide-left-medium, uk-animation-slide-right-medium">
                            <li className="uk-active"><a href="#">Code Quality</a></li>
                            <li><a href="#">Code convention</a></li>
                            <li><a href="#">Code Quality</a></li>
                          </ul>
                          <ul className="uk-switcher uk-margin uk-padding-small pt-0">
                            {/* tab 1 */}
                            <li>
                              <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                                nonummy nibh
                                euismod
                                tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
                                minim
                                veniam, quis
                                nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex
                                ea commodo
                                consequat.
                                Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet
                                doming id
                                qsuod
                                mazim placerat facer possim assum. Lorem ipsum dolor sit amet,
                                consectetuer
                                adipiscing elit,
                                sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
                                erat
                                volutpat. Ut
                                wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
                                suscipit lobortis
                                nisl ut
                                aliquip ex ea commodo consequat.</p>
                              <p> Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
                                suscipit
                                lobortis nisl
                                ut aliquip ex ea commodo consequat </p>
                            </li>
                            {/* tab 2 */}
                            <li>
                              <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                                nonummy nibh
                                euismod
                                tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
                                minim
                                veniam, quis
                                nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex
                                ea commodo
                                consequat.
                                Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet
                                doming id
                                qsuod
                                mazim placerat facer possim assum. Lorem ipsum dolor sit amet,
                                consectetuer
                                adipiscing elit,
                                sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
                                erat
                                volutpat. Ut
                                wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
                                suscipit lobortis
                                nisl ut
                                aliquip ex ea commodo consequat.</p>
                              <p> Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
                                suscipit
                                lobortis nisl
                                ut aliquip ex ea commodo consequat </p>
                            </li>
                            {/* tab 3 */}
                            <li>
                              <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                                nonummy nibh
                                euismod
                                tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
                                minim
                                veniam, quis
                                nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex
                                ea commodo
                                consequat.
                                Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet
                                doming id
                                qsuod
                                mazim placerat facer possim assum. Lorem ipsum dolor sit amet,
                                consectetuer
                                adipiscing elit,
                                sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
                                erat
                                volutpat. Ut
                                wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
                                suscipit lobortis
                                nisl ut
                                aliquip ex ea commodo consequat.</p>
                              <p> Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
                                suscipit
                                lobortis nisl
                                ut aliquip ex ea commodo consequat </p>
                            </li>
                            {/* tab 4 */}
                            <li>
                              <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                                nonummy nibh
                                euismod
                                tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
                                minim
                                veniam, quis
                                nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex
                                ea commodo
                                consequat.
                                Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet
                                doming id
                                qsuod
                                mazim placerat facer possim assum. Lorem ipsum dolor sit amet,
                                consectetuer
                                adipiscing elit,
                                sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
                                erat
                                volutpat. Ut
                                wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
                                suscipit lobortis
                                nisl ut
                                aliquip ex ea commodo consequat.</p>
                              <p> Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
                                suscipit
                                lobortis nisl
                                ut aliquip ex ea commodo consequat </p>
                            </li>
                          </ul>
                        </div>
                        <h3 className="uk-margin-medium-top " id="Advance-tab"> Advance tab</h3>
                        <p> Tabs can be used to trigger a dropdown menu from the 
                          <a href="https://wpkixx.com/html/socimo/dropdown.html">Dropdown component</a>
                        </p>
                        <div className="bg-blue uk-light uk-padding pb-0 rounded shadow">
                          <h2>Awesome Title</h2>
                          <p> With supporting text below as a natural lead-in to additional content. </p>
                          <ul className="uk-tab" uk-switcher="connect: #component-tab-left; animation: uk-animation-slide-left-medium, uk-animation-slide-right-medium">
                            <li className="uk-active"><a href="#"> <i className="icon-feather-home mr-2" />Home</a>
                            </li>
                            <li><a href="#"> <i className="icon-feather-message-square mr-2" /> convention</a>
                            </li>
                            <li><a href="#"> <i className="icon-feather-settings mr-2" /> settings</a></li>
                          </ul>
                        </div>
                        <ul className="uk-switcher uk-margin" id="component-tab-left">
                          {/* tab 1 */}
                          <li>
                            <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                              nibh euismod
                              tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
                              minim veniam,
                              quis
                              nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
                              commodo
                              consequat.
                              Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet
                              doming id qsuod
                              mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer
                              adipiscing
                              elit,
                              sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                              volutpat.
                              Ut
                              wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit
                              lobortis nisl
                              ut
                              aliquip ex ea commodo consequat.</p>
                            <p> Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
                              suscipit lobortis
                              nisl
                              ut aliquip ex ea commodo consequat </p>
                          </li>
                          {/* tab 2 */}
                          <li>
                            <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                              nibh euismod
                              tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
                              minim veniam,
                              quis
                              nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
                              commodo
                              consequat.
                              Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet
                              doming id qsuod
                              mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer
                              adipiscing
                              elit,
                              sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                              volutpat.
                              Ut
                              wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit
                              lobortis nisl
                              ut
                              aliquip ex ea commodo consequat.</p>
                            <p> Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
                              suscipit lobortis
                              nisl
                              ut aliquip ex ea commodo consequat </p>
                          </li>
                          {/* tab 3 */}
                          <li>
                            <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                              nibh euismod
                              tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
                              minim veniam,
                              quis
                              nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
                              commodo
                              consequat.
                              Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet
                              doming id qsuod
                              mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer
                              adipiscing
                              elit,
                              sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                              volutpat.
                              Ut
                              wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit
                              lobortis nisl
                              ut
                              aliquip ex ea commodo consequat.</p>
                            <p> Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
                              suscipit lobortis
                              nisl
                              ut aliquip ex ea commodo consequat </p>
                          </li>
                          {/* tab 4 */}
                          <li>
                            <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                              nibh euismod
                              tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
                              minim veniam,
                              quis
                              nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
                              commodo
                              consequat.
                              Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet
                              doming id qsuod
                              mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer
                              adipiscing
                              elit,
                              sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                              volutpat.
                              Ut
                              wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit
                              lobortis nisl
                              ut
                              aliquip ex ea commodo consequat.</p>
                            <p> Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
                              suscipit lobortis
                              nisl
                              ut aliquip ex ea commodo consequat </p>
                          </li>
                        </ul>
                        <h3 className="uk-margin-medium-top " id="tab-width-icon"> Tab with icon</h3>
                        <div uk-grid>
                          <div className="uk-width-1-3@m">
                            <ul className="uk-tab-right shadow p-3 pl-0" uk-tab="connect: #component-tab-right; animation: uk-animation-fade">
                              <li className="uk-active"><a href="#"> <i className="icofont-home mr-2" />Home</a></li>
                              <li><a href="#"> <i className="icofont-comment mr-2" />convention</a></li>
                              <li><a href="#"> <i className="icofont-gear mr-2" /> settings</a></li>
                            </ul>
                          </div>
                          <div className="uk-width-expand@m">
                            <ul id="component-tab-right" className="uk-switcher">
                              {/* tab 1 */}
                              <li>
                                <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                                  nonummy nibh
                                  euismod
                                  tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi
                                  enim ad minim
                                  veniam, quis
                                  nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip
                                  ex ea
                                  commodo
                                  consequat.
                                  Nam liber tempor cum soluta nobis. <br /> Eleifend option congue nihil
                                  imperdiet
                                  doming id qsuod
                                  mazim placerat facer possim assum. Lorem ipsum dolor sit amet,
                                  consectetuer
                                  adipiscing elit,
                                  sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                                  aliquam erat
                                  volutpat. Ut
                                  wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
                                  suscipit
                                  lobortis
                                  nisl ut
                                  aliquip ex ea commodo consequat.</p>
                                <p> Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
                                  suscipit
                                  lobortis nisl
                                  ut aliquip ex ea commodo consequat </p>
                              </li>
                              {/* tab 2 */}
                              <li>
                                <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                                  nonummy nibh
                                  euismod
                                  tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi
                                  enim ad minim
                                  veniam, quis
                                  nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip
                                  ex ea
                                  commodo
                                  consequat.
                                  Nam liber tempor cum soluta nobis. <br /> Eleifend option congue nihil
                                  imperdiet
                                  doming id qsuod
                                  mazim placerat facer possim assum. Lorem ipsum dolor sit amet,
                                  consectetuer
                                  adipiscing elit,
                                  sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                                  aliquam erat
                                  volutpat. Ut
                                  wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
                                  suscipit
                                  lobortis
                                  nisl ut
                                  aliquip ex ea commodo consequat.</p>
                                <p> Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
                                  suscipit
                                  lobortis nisl
                                  ut aliquip ex ea commodo consequat </p>
                              </li>
                              {/* tab 3 */}
                              <li>
                                <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                                  nonummy nibh
                                  euismod
                                  tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi
                                  enim ad minim
                                  veniam, quis
                                  nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip
                                  ex ea
                                  commodo
                                  consequat.
                                  Nam liber tempor cum soluta nobis. <br /> Eleifend option congue nihil
                                  imperdiet
                                  doming id qsuod
                                  mazim placerat facer possim assum. Lorem ipsum dolor sit amet,
                                  consectetuer
                                  adipiscing elit,
                                  sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                                  aliquam erat
                                  volutpat. Ut
                                  wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
                                  suscipit
                                  lobortis
                                  nisl ut
                                  aliquip ex ea commodo consequat.</p>
                                <p> Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
                                  suscipit
                                  lobortis nisl
                                  ut aliquip ex ea commodo consequat </p>
                              </li>
                              {/* tab 4 */}
                              <li>
                                <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                                  nonummy nibh
                                  euismod
                                  tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi
                                  enim ad minim
                                  veniam, quis
                                  nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip
                                  ex ea
                                  commodo
                                  consequat.
                                  Nam liber tempor cum soluta nobis. <br /> Eleifend option congue nihil
                                  imperdiet
                                  doming id qsuod
                                  mazim placerat facer possim assum. Lorem ipsum dolor sit amet,
                                  consectetuer
                                  adipiscing elit,
                                  sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                                  aliquam erat
                                  volutpat. Ut
                                  wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
                                  suscipit
                                  lobortis
                                  nisl ut
                                  aliquip ex ea commodo consequat.</p>
                                <p> Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
                                  suscipit
                                  lobortis nisl
                                  ut aliquip ex ea commodo consequat </p>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <h3 className="uk-margin-medium-top " id="tab-responsive"> Responsive Tabs </h3>
                        <br />
                        <nav className="responsive-tab">
                          <ul>
                            <li className="uk-active"><a href="#">JavaScript</a></li>
                            <li><a href="#">CSS</a></li>
                            <li><a href="#">HTML</a></li>
                            <li><a href="#">Freebie</a></li>
                            <li><a href="#">Resources</a></li>
                          </ul>
                        </nav>
                        <br />
                        <br />
                        <nav className="responsive-tab style-1">
                          <ul>
                            <li className="uk-active"><a href="#">JavaScript</a></li>
                            <li><a href="#">CSS</a></li>
                            <li><a href="#">HTML</a></li>
                            <li><a href="#">Freebie</a></li>
                            <li><a href="#">Resources</a></li>
                          </ul>
                        </nav>
                        <br />
                        <br />
                        <nav className="responsive-tab style-2">
                          <ul>
                            <li className="uk-active"><a href="#">JavaScript</a></li>
                            <li><a href="#">CSS</a></li>
                            <li><a href="#">HTML</a></li>
                            <li><a href="#">Freebie</a></li>
                            <li><a href="#">Resources</a></li>
                          </ul>
                        </nav>
                        <br />
                        <br />
                        <nav className="responsive-tab style-4">
                          <ul>
                            <li className="uk-active"><a href="#">JavaScript</a></li>
                            <li><a href="#">CSS</a></li>
                            <li><a href="#">HTML</a></li>
                            <li><a href="#">Freebie</a></li>
                            <li><a href="#">Resources</a></li>
                          </ul>
                        </nav>
                        <br />
                        <br />
                        <div className="bg-grey uk-light uk-padding pb-0 rounded shadow">
                          <h1>Awesome Title</h1>
                          <p> With supporting text below as a natural lead-in to additional content. </p>
                          <nav className="responsive-tab style-5">
                            <ul>
                              <li className="uk-active"><a href="#">JavaScript</a></li>
                              <li><a href="#">CSS</a></li>
                              <li><a href="#">HTML</a></li>
                              <li><a href="#">Freebie</a></li>
                              <li><a href="#">Resources</a></li>
                            </ul>
                          </nav>
                        </div>
                        <br />
                        <br />
                      </div>
                      <div className="uk-width-1-4@s uk-visible@s">
                        <ul className="uk-list docs-list" uk-sticky="offset:40;media : @m; top:20">
                          <li> <a href="#tab-intro" uk-scroll> backgrounds </a></li>
                          <li> <a href="#tab-bottom-modifier" uk-scroll> Bottom modifier </a></li>
                          <li> <a href="#Left/Right-modifier" uk-scroll> Left/Right modifier </a></li>
                          <li> <a href="#tab-alignment" uk-scroll> Alignment </a></li>
                          <li> <a href="#Tabs-and-Dropdown" uk-scroll> backgrounds </a></li>
                          <li> <a href="#light-Tabs" uk-scroll>light Tabs </a></li>
                          <li> <a href="#Advance-tab" uk-scroll> Advance tab </a></li>
                          <li> <a href="#tab-width-icon" uk-scroll> tab width icon </a></li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  {/* Text */}
                  <li>
                    <div className="mt-4 uk-grid-large" uk-grid>
                      <div className="uk-width-3-4@s">
                        <h2> Text</h2>
                        <p className="mb-4"> A collection of useful text utility classes to style your content. </p>
                        <p>UIkit offers various text utilities to style your text. </p>
                        <table className="uk-table uk-table-divider">
                          <thead>
                            <tr>
                              <th align="left">Class</th>
                              <th align="left">Description</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td align="left"><code>.uk-text-lead</code></td>
                              <td align="left"><span className="uk-text-lead">Add this class to highlight
                                  text, for
                                  example in article subtitles.</span></td>
                            </tr>
                            <tr>
                              <td align="left"><code>.uk-text-meta</code></td>
                              <td align="left"><span className="uk-text-meta">Add this class to a paragraph
                                  which
                                  contains
                                  meta data about an article or similar.</span></td>
                            </tr>
                          </tbody>
                        </table>
                        <h3 className="uk-margin-medium-top " id="Font-size"> Font size </h3>
                        <p> The following classes will modify the font size of your
                          text..
                        </p>
                        <div className="uk-overflow-auto">
                          <table className="uk-table uk-table-divider">
                            <thead>
                              <tr>
                                <th align="left">Class</th>
                                <th align="left">Description</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td align="left"><code>.uk-text-small</code></td>
                                <td align="left"><span className="uk-text-small">Add this class to decrease
                                    the font
                                    size.</span></td>
                              </tr>
                              <tr>
                                <td align="left"><code>.uk-text-large</code></td>
                                <td align="left"><span className="uk-text-large">Add this class to increase
                                    the font
                                    size.</span></td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <h3 className="uk-margin-medium-top " id="Text-wrapping"> Text wrapping </h3>
                        <p>Add one of these useful classes to wrap your text. </p>
                        <div className="uk-overflow-auto uk-margin-bottom">
                          <table className="uk-table uk-table-divider">
                            <thead>
                              <tr>
                                <th align="left">Class</th>
                                <th align="left">Description</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td align="left"><code>.uk-text-truncate</code></td>
                                <td align="left">Prevents text from wrapping into multiple lines,
                                  truncating it and
                                  displaying an ellipsis instead.</td>
                              </tr>
                              <tr>
                                <td align="left"><code>.uk-text-break</code></td>
                                <td align="left">Breaks strings, if their length exceeds the width of
                                  their container.
                                </td>
                              </tr>
                              <tr>
                                <td align="left"><code>.uk-text-nowrap</code></td>
                                <td align="left">Prevents text from wrapping into multiple lines.</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="uk-child-width-1-2@s" uk-grid>
                          <div>
                            <div className="uk-panel uk-panel-box uk-text-truncate">Lorem ipsum dolor sit amet,
                              consectetur
                              adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                              aliqua.</div>
                          </div>
                          <div>
                            <div className="uk-panel uk-panel-box uk-text-break">
                              Loremipsumdolorsitamet,consecteturadipiscingelit,seddoeiusmodtemporincididuntutlaboreetdoloremagnaaliqua.
                            </div>
                          </div>
                        </div>
                        <div>
                          <button className="Markup-botton button uk-margin-small-top" type="button" uk-toggle="target: #Text-wraping"> MARKUP</button>
                          <div id="Text-wraping" aria-hidden="true" className="uk-margin-small-top" hidden>
                            <pre><code id="code-jw0g6xg8" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-child-width-1-2@s"</span> <span className="hljs-attr">uk-grid</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-panel uk-panel-box uk-text-truncate"</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-panel uk-panel-box uk-text-break"</span>&gt;</span>Loremipsumdolorsitamet,consecteturadipiscingelit,seddoeiusmodtemporincididuntutlaboreetdoloremagnaaliqua.<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span></code></pre>
                          </div>
                        </div>
                        <h3 className="uk-margin-medium-top " id="Text-transform"> Text transform </h3>
                        <p> The following classes will transform text into uppercased,
                          capitalized or lowercased characters. </p>
                        <div className="uk-overflow-auto">
                          <table className="uk-table uk-table-divider">
                            <thead>
                              <tr>
                                <th align="left">Class</th>
                                <th align="left">Description</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td align="left"><code>.uk-text-uppercase</code></td>
                                <td align="left"><span className="uk-text-uppercase">Add this class to
                                    transform
                                    your
                                    text to uppercase.</span></td>
                              </tr>
                              <tr>
                                <td align="left"><code>.uk-text-capitalize</code></td>
                                <td align="left"><span className="uk-text-capitalize">Add this class to
                                    transform
                                    your
                                    text to capitalize.</span></td>
                              </tr>
                              <tr>
                                <td align="left"><code>.uk-text-lowercase</code></td>
                                <td align="left"><span className="uk-text-lowercase">Add this class to
                                    transform
                                    your
                                    text to lowercase.</span></td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <h3 className="uk-margin-medium-top " id="Text-Colour"> Text Colour </h3>
                        <p>Use one of these classes to apply a different color to text
                          elements. </p>
                        <div className="uk-overflow-auto">
                          <table className="uk-table uk-table-divider">
                            <thead>
                              <tr>
                                <th align="left">Class</th>
                                <th align="left">Description</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td align="left"><code>.uk-text-muted</code></td>
                                <td align="left"><span className="uk-text-muted">Add this class to mute
                                    text.</span>
                                </td>
                              </tr>
                              <tr>
                                <td align="left"><code>.uk-text-emphasis</code></td>
                                <td align="left"><span className="uk-text-emphasis">Add this class to
                                    emphasize
                                    text.</span></td>
                              </tr>
                              <tr>
                                <td align="left"><code>.uk-text-primary</code></td>
                                <td align="left"><span className="uk-text-primary">Add this class to
                                    emphasize text
                                    with
                                    the primary color.</span></td>
                              </tr>
                              <tr>
                                <td align="left"><code>.uk-text-secondary</code></td>
                                <td align="left"><span className="uk-text-secondary">Add this class to
                                    emphasize
                                    text
                                    with the secondary color.</span></td>
                              </tr>
                              <tr>
                                <td align="left"><code>.uk-text-success</code></td>
                                <td align="left"><span className="uk-text-success">Add this class to
                                    indicate
                                    success.</span></td>
                              </tr>
                              <tr>
                                <td align="left"><code>.uk-text-primary</code></td>
                                <td align="left"><span className="uk-text-primary">Add this class to
                                    indicate a
                                    primary.</span></td>
                              </tr>
                              <tr>
                                <td align="left"><code>.uk-text-danger</code></td>
                                <td align="left"><span className="uk-text-danger">Add this class to indicate
                                    danger.</span></td>
                              </tr>
                              <tr>
                                <td align="left"><code>.uk-text-info</code></td>
                                <td align="left"><span className="uk-text-info">Add this class to indicate
                                    informations.</span></td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <h3 className="uk-margin-medium-top " id="Text-alignment"> Text alignment </h3>
                        <p> Add one of these useful classes to align your text. </p>
                        <div className="uk-overflow-auto uk-margin-bottom">
                          <table className="uk-table uk-table-divider">
                            <thead>
                              <tr>
                                <th align="left">Class</th>
                                <th align="left">Description</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td align="left"><code>.uk-text-left</code></td>
                                <td align="left">Aligns text to the left.</td>
                              </tr>
                              <tr>
                                <td align="Left"><code>.uk-text-right</code></td>
                                <td align="right">Aligns text to the right.</td>
                              </tr>
                              <tr>
                                <td align="left"><code>.uk-text-center</code></td>
                                <td align="center">Centers text horizontally.</td>
                              </tr>
                              <tr>
                                <td align="left"><code>.uk-text-justify</code></td>
                                <td align="justifies">Justifies text.</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="uk-child-width-1-3@s uk-grid-small" uk-grid>
                          <div>
                            <div className="uk-card uk-card-default uk-card-small">
                              <div className="uk-text-left uk-card-body">
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                                <code>.uk-text-left</code>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="uk-card uk-card-default uk-card-small">
                              <div className="uk-text-right uk-card-body">
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                                <code>.uk-text-right</code>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="uk-card uk-card-default uk-card-small">
                              <div className="uk-text-center uk-card-body">
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                                <code>.uk-text-center</code>
                              </div>
                            </div>
                          </div>
                        </div>
                        <h3 className="uk-margin-medium-top " id="Vertical-alignment"> Vertical alignment </h3>
                        <p> Add one of these classes to vertically align text to an
                          object.
                        </p>
                        <div className="uk-overflow-auto uk-margin-bottom">
                          <table className="uk-table uk-table-divider">
                            <thead>
                              <tr>
                                <th align="left">Class</th>
                                <th align="left">Description</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td align="left"><code>.uk-text-top</code></td>
                                <td align="left">Aligns text to the top.</td>
                              </tr>
                              <tr>
                                <td align="left"><code>.uk-text-middle</code></td>
                                <td align="left">Centers text vertically.</td>
                              </tr>
                              <tr>
                                <td align="left"><code>.uk-text-bottom</code></td>
                                <td align="left">Aligns text to the bottom.</td>
                              </tr>
                              <tr>
                                <td align="left"><code>.uk-text-baseline</code></td>
                                <td align="left">Aligns text to the baseline.</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="uk-child-width-1-3@m uk-child-width-1-2@s mt-3" uk-grid>
                          <div>
                            <img src="https://wpkixx.com/html/socimo/images/elements/avatar-1.jpg" alt width={50} height={50} />
                            <span className="uk-text-top">Lorem ipsum.</span>
                          </div>
                          <div>
                            <img src="https://wpkixx.com/html/socimo/images/elements/avatar-2.jpg" alt width={50} height={50} />
                            <span className="uk-text-middle">Lorem ipsum.</span>
                          </div>
                          <div>
                            <img src="https://wpkixx.com/html/socimo/images/elements/avatar-3.jpg" alt width={50} height={50} />
                            <span className="uk-text-bottom">Lorem ipsum.</span>
                          </div>
                        </div>
                        <div>
                          <button className="Markup-botton button uk-margin-small-top" type="button" uk-toggle="target: #Vert-alignment"> MARKUP</button>
                          <div id="Vert-alignment" aria-hidden="true" className="uk-margin-small-top" hidden>
                            <pre><code id="code-jw0g6xg7" className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">div</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-child-width-1-3@m uk-child-width-1-2@s"</span> <span className="hljs-attr">uk-grid</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">img</span> <span className="hljs-attr">src</span>=<span className="hljs-string">"images/avatar.jpg"</span> <span className="hljs-attr">width</span>=<span className="hljs-string">"50"</span> <span className="hljs-attr">height</span>=<span className="hljs-string">"50"</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">span</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-text-top"</span>&gt;</span>Lorem ipsum.<span className="hljs-tag">&lt;/<span className="hljs-name">span</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">img</span> <span className="hljs-attr">src</span>=<span className="hljs-string">"images/avatar.jpg"</span> <span className="hljs-attr">width</span>=<span className="hljs-string">"50"</span> <span className="hljs-attr">height</span>=<span className="hljs-string">"50"</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">span</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-text-middle"</span>&gt;</span>Lorem ipsum.<span className="hljs-tag">&lt;/<span className="hljs-name">span</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;<span className="hljs-name">div</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">img</span> <span className="hljs-attr">src</span>=<span className="hljs-string">"images/avatar.jpg"</span> <span className="hljs-attr">width</span>=<span className="hljs-string">"50"</span> <span className="hljs-attr">height</span>=<span className="hljs-string">"50"</span>&gt;</span>{"\n"}{"        "}<span className="hljs-tag">&lt;<span className="hljs-name">span</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-text-bottom"</span>&gt;</span>Lorem ipsum.<span className="hljs-tag">&lt;/<span className="hljs-name">span</span>&gt;</span>{"\n"}{"    "}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span>{"\n"}<span className="hljs-tag">&lt;/<span className="hljs-name">div</span>&gt;</span></code></pre>
                          </div>
                        </div>
                        <h3 className="uk-margin-medium-top " id="Text-background"> Text background </h3>
                        <p> To apply a gradient or background image to text, add the
                          <code>.uk-text-background</code> class to a <code>&lt;span&gt;</code> element inside
                          the text element. Styles that don't define a <code>background-image</code>, will
                          apply the primary color.</p>
                        <h1><span className="uk-text-background">Text background</span></h1>
                        <div className="mt-sm">
                          <div>
                            <button className="Markup-botton button uk-margin-small-top" type="button" uk-toggle="target: #text-bg"> MARKUP</button>
                            <div id="text-bg" aria-hidden="true" className="uk-margin-small-top" hidden>
                              <span><code className="lang-html hljs xml"><span className="hljs-tag">&lt;<span className="hljs-name">h1</span>&gt;</span><span className="hljs-tag">&lt;<span className="hljs-name">span</span> <span className="hljs-attr">class</span>=<span className="hljs-string">"uk-text-background"</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">span</span>&gt;</span><span className="hljs-tag">&lt;/<span className="hljs-name">h1</span>&gt;</span></code></span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="uk-width-1-4@s uk-visible@s">
                        <ul className="uk-list docs-list" uk-sticky="offset:100;media : @m; top:20">
                          <li> <a href="#Uikit" uk-scroll> Style modifiers </a></li>
                          <li> <a href="#Font-size" uk-scroll>Font size </a></li>
                          <li> <a href="#Text-wrapping" uk-scroll> Text wrapping </a></li>
                          <li> <a href="#Text-transform" uk-scroll> Text transform </a></li>
                          <li> <a href="#Text-Colour" uk-scroll> Text Colour </a></li>
                          <li> <a href="#Text-alignment" uk-scroll> Text alignment </a></li>
                          <li> <a href="#Vertical-alignment" uk-scroll> Vertical alignment </a></li>
                          <li> <a href="#Text-background" uk-scroll> Text backgrounds </a></li>
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
