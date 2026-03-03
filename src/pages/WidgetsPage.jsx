
import React from 'react';
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import CarouselMenu from "../components/carouselmenu";
export default function widgetsPage() {
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

          <section>
            <div className="gap no-gap bluesh high-opacity">
              <div style={{ backgroundImage: 'url(https://wpkixx.com/html/socimo/images/resources/top-bg.jpg)' }} className="bg-image" />
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="post-subject">
                      <h1>Widgets</h1>
                      <p> You May use these widgets for sidebar and footer. easily moveable and flexible </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>{/* top area */}
          <section>
            <div className="gap">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="row widget-page merged20">
                      <div className="col-lg-3 col-md-12 col-sm-6">
                        <aside className="sidebar">
                          <div className="widget whitish low-opacity">
                            <img src="images/time-clock.png" alt />
                            <div className="bg-image" style={{ backgroundImage: 'url(images/resources/time-bg.jpg)' }} />
                            <div className="date-time">
                              <div className="realtime">
                                <span id="hours">00</span>
                                <span id="point">:</span>
                                <span id="min">00</span>
                              </div>
                              <span id="date" />
                            </div>
                          </div>
                          <div className="widget">
                            <div className="post-creat">
                              <div className="bg-feature">
                                <img src="https://wpkixx.com/html/socimo/images/resources/widget-bg.jpg" alt />
                                <span>Create New Post</span>
                              </div>
                              <div className="create-meta">
                                <p>
                                  The Best Post on Socimo for you, Pulled from the most active communities on Socimo. Check here to see the most shared, upvoted, and commented content on the internet.
                                </p>
                                <a className="main-btn2" href="#" title>Create Post</a>
                              </div>
                            </div>
                          </div>{/* create post */}
                          <div className="widget">
                            <h4 className="widget-title">Complete Your Profile</h4>
                            <span>Your Profile is missing followings!</span>
                            <div data-progress="tip" className="progress__outer" data-value="0.67">
                              <div className="progress__inner">82%</div>
                            </div>
                            <ul className="prof-complete">
                              <li><i className="icofont-plus-square" /> <a href="#" title>Upload Your Picture</a><em>10%</em></li>
                              <li><i className="icofont-plus-square" /> <a href="#" title>Your University?</a><em>20%</em></li>
                              <li><i className="icofont-plus-square" /> <a href="#" title>Invite to 10+ members</a><em>20%</em></li>
                            </ul>
                          </div>{/* complete profile widget */}
                          <div className="widget">
                            <h4 className="widget-title">Shortcuts</h4>
                            <ul className="naves">
                              <li>
                                <i className="icofont-feedburner" />
                                <a href="#" title>News feed</a>
                              </li>
                              <li>
                                <i className="icofont-inbox" />
                                <a href="https://wpkixx.com/html/socimo/inbox.html" title>Inbox</a>
                              </li>
                              <li>
                                <i className="icofont-page" />
                                <a href="https://wpkixx.com/html/socimo/page.html" title>My pages</a>
                              </li>
                              <li>
                                <i className="icofont-users-alt-4" />
                                <a href="https://wpkixx.com/html/socimo/friends-list.html" title>friends</a>
                              </li>
                              <li>
                                <i className="icofont-image" />
                                <a href="https://wpkixx.com/html/socimo/images.html" title>images</a>
                              </li>
                              <li>
                                <i className="icofont-video-alt" />
                                <a href="videos.html" title>videos</a>
                              </li>
                              <li>
                                <i className="icofont-comment" />
                                <a href="https://wpkixx.com/html/socimo/inbox.html" title>Messages</a>
                              </li>
                              <li>
                                <i className="icofont-people" />
                                <a href="https://wpkixx.com/html/socimo/location.html" title>People Nearby</a>
                              </li>
                              <li>
                                <i className="icofont-power" />
                                <a href="sign-in.html" title>Logout</a>
                              </li>
                            </ul>
                          </div>{/* Shortcuts */}
                          <div className="widget">
                            <h4 className="widget-title">Popular Books</h4>
                            <div className="popular-book">
                              <figure><img alt src="https://wpkixx.com/html/socimo/images/resources/book10.jpg" /></figure>
                              <div className="book-about">
                                <h6><a title href="#">Vu.js 2 Basics</a></h6>
                                <span>Richard Ali</span>
                                <a title href="#"><i className="icofont-book-mark" /></a>
                              </div>
                            </div>
                            <div className="popular-book">
                              <figure><img alt src="https://wpkixx.com/html/socimo/images/resources/book9.jpg" /></figure>
                              <div className="book-about">
                                <h6><a title href="#">Css3 for Bigners</a></h6>
                                <span>Richard Ali</span>
                                <a title href="#"><i className="icofont-book-mark" /></a>
                              </div>
                            </div>
                            <div className="popular-book">
                              <figure><img alt src="images/resources/book5.jpg" /></figure>
                              <div className="book-about">
                                <h6><a title href="#">Technology Wants 2020</a></h6>
                                <span>Richard Ali</span>
                                <a title href="#"><i className="icofont-book-mark" /></a>
                              </div>
                            </div>
                          </div>{/* books shop */}
                          <div className="widget">
                            <h4 className="widget-title">Who's follownig</h4>
                            <ul className="followers">
                              <li>
                                <figure><img alt src="https://wpkixx.com/html/socimo/images/resources/friend-avatar.jpg" /></figure>
                                <div className="friend-meta">
                                  <h4>
                                    <a title href="https://wpkixx.com/html/socimo/time-line.html">Kelly Bill</a>
                                    <span>Dept colleague</span>
                                  </h4>
                                  <a className="underline" title href="#">Follow</a>
                                </div>
                              </li>
                              <li>
                                <figure><img alt src="https://wpkixx.com/html/socimo/images/resources/friend-avatar2.jpg" /></figure>
                                <div className="friend-meta">
                                  <h4>
                                    <a title href="https://wpkixx.com/html/socimo/time-line.html">Issabel</a>
                                    <span>Dept colleague</span>
                                  </h4>
                                  <a className="underline" title href="#">Follow</a>
                                </div>
                              </li>
                              <li>
                                <figure><img alt src="https://wpkixx.com/html/socimo/images/resources/friend-avatar3.jpg" /></figure>
                                <div className="friend-meta">
                                  <h4>
                                    <a title href="https://wpkixx.com/html/socimo/time-line.html">Andrew</a>
                                    <span>Dept colleague</span>
                                  </h4>
                                  <a className="underline" title href="#">Follow</a>
                                </div>
                              </li>
                              <li>
                                <figure><img alt src="https://wpkixx.com/html/socimo/images/resources/friend-avatar4.jpg" /></figure>
                                <div className="friend-meta">
                                  <h4>
                                    <a title href="https://wpkixx.com/html/socimo/time-line.html">Sophia</a>
                                    <span>Dept colleague</span>
                                  </h4>
                                  <a className="underline" title href="#">Follow</a>
                                </div>
                              </li>
                              <li>
                                <figure><img alt src="https://wpkixx.com/html/socimo/images/resources/friend-avatar5.jpg" /></figure>
                                <div className="friend-meta">
                                  <h4>
                                    <a title href="https://wpkixx.com/html/socimo/time-line.html">Allen</a>
                                    <span>Dept colleague</span>
                                  </h4>
                                  <a className="underline" title href="#">Follow</a>
                                </div>
                              </li>
                            </ul>
                          </div>{/* who's following */}
                          <div className="widget">
                            <h4 className="widget-title">Your profile has a new Experience section</h4>
                            <p>
                              Showcase your professional experience and education to help potential employers and collaborators find and contact you about career opportunities.
                            </p>
                            <a className="main-btn" href="#" title data-ripple>view profile</a>
                          </div>{/* your profile */}
                          <div className="widget">
                            <h4 className="widget-title">Tags:</h4>
                            <div className="pit-tags">
                              <a href="#" title>News</a>
                              <a href="#" title>Gaming</a>
                              <a href="#" title>Sports</a>
                              <a href="#" title>Health</a>
                              <a href="#" title>Website</a>
                              <a href="#" title>Love</a>
                              <a href="#" title>Fashion</a>
                            </div>
                          </div>{/* tags */}
                        </aside>
                      </div>{/* sidebar */}
                      <div className="col-lg-3 col-md-12 col-sm-6">
                        <aside className="sidebar">
                          <div className="widget">
                            <h4 className="widget-title">Ask Research Question?</h4>
                            <div className="ask-question">
                              <i className="icofont-question-circle" />
                              <h6>Ask questions in Q&amp;A to get help from experts in your field.</h6>
                              <a title href="#" className="ask-qst">Ask a question</a>
                            </div>
                          </div>{/* ask question widget */}
                          <div className="widget">
                            <h4 className="widget-title">Profile intro</h4>
                            <ul className="short-profile">
                              <li className="user-about">
                                <span>about</span>
                                <p>Hi, i am jhon kates, i am 32 years old and worked as a Physics technician in Antalya University </p>
                              </li>
                              <li className="fav-game">
                                <span>fav Games</span>
                                <p>Sacred Games, Bed Minton, Games of Theron </p>
                              </li>
                              <li className="fav-music">
                                <span>favourit music</span>
                                <p>Justin Biber, Shakira, Nati Natasah</p>
                              </li>
                            </ul>
                          </div>{/* profile intro */}
                          <div className="widget">
                            <h4 className="widget-title"><i className="icofont-flame-torch" /> Popular Courses</h4>
                            <ul className="premium-course">
                              <li>
                                <figure>
                                  <img src="images/resources/course-5.jpg" alt />
                                  <span className="tag">Free</span>
                                </figure>
                                <div className="vid-course">
                                  <h5><a href="course-detail.html" title>Wordpress Online video course</a></h5>
                                  <ins className="price">$19/M</ins>
                                </div>
                              </li>
                              <li>
                                <figure>
                                  <img src="images/resources/course-3.jpg" alt />
                                  <span className="tag">Premium</span>
                                </figure>
                                <div className="vid-course">
                                  <h5><a href="course-detail.html" title>Node JS Online video course</a></h5>
                                  <ins className="price">$29/M</ins>
                                </div>
                              </li>
                            </ul>
                          </div>{/* popular courses */}
                          <div className="widget">
                            <h4 className="widget-title">Popular Articles</h4>
                            <ul className="pop-articles">
                              <li><i className="icofont-dotted-right" /><a title href="#">Can't login to Socimo</a></li>
                              <li><i className="icofont-dotted-right" /><a title href="#">Account settings</a></li>
                              <li><i className="icofont-dotted-right" /><a title href="#">Edit Account Name</a></li>
                              <li><i className="icofont-dotted-right" /><a title href="#">Following and unfollowing</a></li>
                              <li><i className="icofont-dotted-right" /><a title href="#">Logout from Socimo</a></li>
                              <li><i className="icofont-dotted-right" /><a title href="#">Deactive/close your account</a></li>
                            </ul>
                          </div>{/* popular articles */}
                          <div className="widget">
                            <h4 className="widget-title">Recent Activity <a className="see-all" href="#" title>see all</a></h4>
                            <ul className="activitiez">
                              <li>
                                <div className="activity-meta">
                                  <span><a href="#" title>Commented on Your's post </a></span>
                                  <h6>by <a href="https://wpkixx.com/html/socimo/time-line.html">black demon.</a></h6>
                                  <i>10 hours Ago</i>
                                </div>
                              </li>
                              <li>
                                <div className="activity-meta">
                                  <span>
                                    <a href="#" title>Adam Gill Like your Post</a></span>
                                  <i>Yesterday</i>
                                </div>
                              </li>
                              <li>
                                <div className="activity-meta">
                                  <span><a href="#" title>Share a video on Your's timeline.</a></span>
                                  <h6>"<a href="#">How to Write Content.</a>"</h6>
                                  <i>2 days Ago</i>
                                </div>
                              </li>
                            </ul>
                          </div>{/* recent activites */}
                          <div className="widget">
                            <h4 className="widget-title">Invite Friends <a className="see-all" href="#" title>See All</a></h4>
                            <ul className="invitepage">
                              <li>
                                <figure>
                                  <img src="https://wpkixx.com/html/socimo/images/resources/friend-avatar.jpg" alt />
                                  <a href>Jack carter</a>
                                </figure>
                                <button className="sug-like"><i className="invit">Invite</i><i className="icofont-check-alt" /></button>
                              </li>
                              <li>
                                <figure>
                                  <img src="https://wpkixx.com/html/socimo/images/resources/friend-avatar2.jpg" alt />
                                  <a href>Emma watson</a>
                                </figure>
                                <button className="sug-like"><i className="invit">Invite</i><i className="icofont-check-alt" /></button>
                              </li>
                              <li>
                                <figure>
                                  <img src="https://wpkixx.com/html/socimo/images/resources/friend-avatar3.jpg" alt />
                                  <a href>Andrew</a>
                                </figure>
                                <button className="sug-like"><i className="invit">Invite</i><i className="icofont-check-alt" /></button>
                              </li>
                              <li>
                                <figure>
                                  <img src="https://wpkixx.com/html/socimo/images/resources/friend-avatar4.jpg" alt />
                                  <a href>Moona Singh</a>
                                </figure>
                                <button className="sug-like"><i className="invit">Invite</i><i className="icofont-check-alt" /></button>
                              </li>
                              <li>
                                <figure>
                                  <img src="https://wpkixx.com/html/socimo/images/resources/friend-avatar5.jpg" alt />
                                  <a href>Harry pooter</a>
                                </figure>
                                <button className="sug-like"><i className="invit">Invite</i><i className="icofont-check-alt" /></button>
                              </li>
                            </ul>
                          </div>{/* group invitation widget */}
                          <div className="widget">
                            <h4 className="widget-title">Featured Universities <a className="see-all" href="#" title>See All</a></h4>
                            <ul className="featured-comp">
                              <li>
                                <a href="#" title="Color Hands inc" data-toggle="tooltip"><img src="https://wpkixx.com/html/socimo/images/resources/company1.png" alt /></a>
                              </li>
                              <li>
                                <a href="#" title="Macrosoft inc" data-toggle="tooltip"><img src="https://wpkixx.com/html/socimo/images/resources/company2.png" alt /></a>
                              </li>
                              <li>
                                <a href="#" title="EBM inc" data-toggle="tooltip"><img src="https://wpkixx.com/html/socimo/images/resources/company3.png" alt /></a>
                              </li>
                              <li>
                                <a href="#" title="Boogle inc" data-toggle="tooltip"><img src="https://wpkixx.com/html/socimo/images/resources/company4.png" alt /></a>
                              </li>
                              <li>
                                <a href="#" title="Color Hands inc" data-toggle="tooltip"><img src="https://wpkixx.com/html/socimo/images/resources/company5.png" alt /></a>
                              </li>
                              <li>
                                <a href="#" title="Macrosoft inc" data-toggle="tooltip"><img src="https://wpkixx.com/html/socimo/images/resources/company6.png" alt /></a>
                              </li>
                              <li>
                                <a href="#" title="EBM inc" data-toggle="tooltip"><img src="https://wpkixx.com/html/socimo/images/resources/company7.png" alt /></a>
                              </li>
                              <li>
                                <a href="#" title="Boogle inc" data-toggle="tooltip"><img src="https://wpkixx.com/html/socimo/images/resources/company8.png" alt /></a>
                              </li>
                            </ul>
                          </div>{/* feature universites logos */}
                          <div className="widget">
                            <h4 className="widget-title">Socials</h4>
                            <ul className="socials">
                              <li className="facebook">
                                <i className="icofont-facebook" /><a href="#" title><span>4.5k</span> Likes</a>
                              </li>
                              <li className="twitter">
                                <i className="icofont-twitter" /><a href="#" title><span>2.3M</span> Followers</a>
                              </li>
                              <li className="google">
                                <i className="icofont-instagram" /><a href="#" title><span>8.2M</span> Followers</a>
                              </li>
                            </ul>
                          </div>{/* socials*/}
                        </aside>
                      </div>{/* sidebar */}
                      <div className="col-lg-3 col-md-12 col-sm-6">
                        <aside className="sidebar">
                          <div className="widget">
                            <span><i className="icofont-globe" /> Sponsored</span>
                            <ul className="sponsors-ad">
                              <li>
                                <figure><img src="https://wpkixx.com/html/socimo/images/resources/sponsor.jpg" alt /></figure>
                                <div className="sponsor-meta">
                                  <h5><a href="#" title>IQ Options Broker</a></h5>
                                  <a href="#" title target="_blank">www.iqvie.com</a>
                                </div>
                              </li>
                              <li>
                                <figure><img src="https://wpkixx.com/html/socimo/images/resources/sponsor2.jpg" alt /></figure>
                                <div className="sponsor-meta">
                                  <h5><a href="#" title>BM Fashion Designer</a></h5>
                                  <a href="#" title target="_blank">www.abcd.com</a>
                                </div>
                              </li>
                            </ul>
                          </div>{/* sponsord */}
                          <div className="widget">
                            <h4 className="widget-title">Event Statics</h4>
                            <span>take a quick look how's your event going</span>
                            <div className="statics-event">
                              <ol>
                                <li><span>125</span><i>Visitors</i></li>
                                <li><span>536</span><i>Registred</i></li>
                                <li><span>478</span><i>Attendance</i></li>
                              </ol>
                              <div data-progress="tip" className="progress__outer" data-value="0.67">
                                <div className="progress__inner">82%</div></div>
                              <h6>Give attendance boost!</h6>
                              <a href="#" title>send Email invitation <i className="icofont-double-right" /></a>
                            </div>
                          </div>
                          <div className="widget">
                            <h4 className="widget-title">Twitter feed</h4>
                            <ul className="twiter-feed">
                              <li>
                                <i className="icofont-twitter" />
                                <div>
                                  <span>@jhonwilliam</span>
                                  <p>tomorrow with the company we were working and 5 child run away from the working place. <a href="#" title>#daydream5k</a> </p>
                                  <em>2 hours ago</em>
                                </div>
                              </li>
                              <li>
                                <i className="icofont-twitter" />
                                <div>
                                  <span>@kellywatson</span>
                                  <p>tomorrow with the company we were working and 5 child run away from the working place. <a href="#" title>#daydream5k</a> </p>
                                  <em>2 hours ago</em>
                                </div>
                              </li>
                              <li>
                                <i className="icofont-twitter" />
                                <div>
                                  <span>@jonibravo</span>
                                  <p>tomorrow with the company we were working and 5 child run away from the working place. <a href="#" title>#daydream5k</a> </p>
                                  <em>2 hours ago</em>
                                </div>
                              </li>
                            </ul>
                          </div>{/* twitter feed*/}
                          <div className="widget">
                            <h4 className="widget-title">University Highlights <a title href="#" className="see-all">See All</a></h4>
                            <ul className="company-posts">
                              <li>
                                <figure><img src="https://wpkixx.com/html/socimo/images/resources/company1.png" alt /></figure>
                                <div className="position-meta">
                                  <h6><a href="#" title>Php Developers</a></h6>
                                  <a href="#" title>Web House</a>
                                  <span>20 posts</span>
                                </div>
                              </li>
                              <li>
                                <figure><img src="https://wpkixx.com/html/socimo/images/resources/company4.png" alt /></figure>
                                <div className="position-meta">
                                  <h6><a href="#" title>Designer</a></h6>
                                  <a href="#" title>Web House</a>
                                  <span>12 posts</span>
                                </div>
                              </li>
                              <li>
                                <figure><img src="https://wpkixx.com/html/socimo/images/resources/company3.png" alt /></figure>
                                <div className="position-meta">
                                  <h6><a href="#" title>Data Entry</a></h6>
                                  <a href="#" title>Web House</a>
                                  <span>09 posts</span>
                                </div>
                              </li>
                              <li>
                                <figure><img src="https://wpkixx.com/html/socimo/images/resources/company2.png" alt /></figure>
                                <div className="position-meta">
                                  <h6><a href="#" title>QA Person</a></h6>
                                  <a href="#" title>Web House</a>
                                  <span>02 posts</span>
                                </div>
                              </li>
                            </ul>
                          </div>{/* company Highlights */}
                          <div className="widget">
                            <h4 className="widget-title">Recent Media</h4>
                            <div className="recent-media">
                              <figure>
                                <img alt src="https://wpkixx.com/html/socimo/images/resources/course-6.jpg" />
                                <a href="https://www.youtube.com/watch?v=nOCXXHGMezU&feature=emb_title" data-fancybox className="play-btn"><i className="icofont-play" /></a>
                                <span>Vu.Js Free Tutorial</span>
                              </figure>
                              <figure>
                                <img alt src="https://wpkixx.com/html/socimo/images/resources/course-1.jpg" />
                                <a href="https://www.youtube.com/watch?v=nOCXXHGMezU&feature=emb_title" data-fancybox className="play-btn"><i className="icofont-play" /></a>
                                <span>Css3 2020 Tutorial</span>
                              </figure>
                            </div>
                          </div>{/* recent media */}
                          <div className="widget">
                            <h4 className="widget-title">Recent Blogs <a title href="#" className="see-all">See All</a></h4>
                            <ul className="recent-links">
                              <li>
                                <figure><img src="images/resources/recentlink-1.jpg" alt /></figure>
                                <div className="re-links-meta">
                                  <h6><a href="#" title>Moira's fade reach much farther...</a></h6>
                                  <span>2 weeks ago </span>
                                </div>
                              </li>
                              <li>
                                <figure><img src="images/resources/recentlink-2.jpg" alt /></figure>
                                <div className="re-links-meta">
                                  <h6><a href="#" title>Daniel asks The voice of doomfist...</a></h6>
                                  <span>3 months ago </span>
                                </div>
                              </li>
                              <li>
                                <figure><img src="images/resources/recentlink-3.jpg" alt /></figure>
                                <div className="re-links-meta">
                                  <h6><a href="#" title>The Socimo over watch scandals.</a></h6>
                                  <span>1 day before</span>
                                </div>
                              </li>
                            </ul>
                          </div>{/* recent links */}
                          <div className="widget">
                            <h4 className="widget-title">You May Like Groups</h4>
                            <ul className="suggestd">
                              <li>
                                <a className="sug-pic" href="#" title><img src="https://wpkixx.com/html/socimo/images/resources/sug-page-1.jpg" alt /></a>
                                <a className="sug-title" href="#" title>Physics Shop</a>
                                <button className="sug-like"><i className="icofont-like" /><i className="icofont-check-alt" /></button>
                              </li>
                              <li>
                                <a className="sug-pic" href="#" title><img src="https://wpkixx.com/html/socimo/images/resources/sug-page-2.jpg" alt /></a>
                                <a className="sug-title" href="#" title>Sun Rise</a>
                                <button className="sug-like"><i className="icofont-like" /><i className="icofont-check-alt" /></button>
                              </li>
                              <li>
                                <a className="sug-pic" href="#" title><img src="https://wpkixx.com/html/socimo/images/resources/sug-page-3.jpg" alt /></a>
                                <a className="sug-title" href="#" title>Big Botny</a>
                                <button className="sug-like"><i className="icofont-like" /><i className="icofont-check-alt" /></button>
                              </li>
                              <li>
                                <a className="sug-pic" href="#" title><img src="https://wpkixx.com/html/socimo/images/resources/sug-page-4.jpg" alt /></a>
                                <a className="sug-title" href="#" title>King Work</a>
                                <button className="sug-like"><i className="icofont-like" /><i className="icofont-check-alt" /></button>
                              </li>
                              <li>
                                <a className="sug-pic" href="#" title><img src="https://wpkixx.com/html/socimo/images/resources/sug-page-5.jpg" alt /></a>
                                <a className="sug-title" href="#" title>18teen Guys</a>
                                <button className="sug-like"><i className="icofont-like" /><i className="icofont-check-alt" /></button>
                              </li>
                            </ul>
                          </div>{/* Suggested groups */}
                        </aside>
                      </div>{/* sidebar */}
                      <div className="col-lg-3 col-md-12 col-sm-6">
                        <aside className="sidebar">
                          <div className="widget">
                            <h4 className="widget-title">Your Groups</h4>
                            <ul className="ak-groups">
                              <li>
                                <figure><img src="images/resources/your-group1.jpg" alt /></figure>
                                <div className="your-grp">
                                  <h5><a href="group-detail.html" title>Good Group</a></h5>
                                  <a href="#" title><i className="icofont-bell-alt" />Notifilactions <span>13</span></a>
                                  <a href="https://wpkixx.com/html/socimo/group-feed.html" title className="promote">view feed</a>
                                </div>
                              </li>
                              <li>
                                <figure><img src="https://wpkixx.com/html/socimo/images/resources/your-group2.jpg" alt /></figure>
                                <div className="your-grp">
                                  <h5><a href="group-detail.html" title>E-course Group</a></h5>
                                  <a href="#" title><i className="icofont-bell-alt" />Notifilactions <span>13</span></a>
                                  <a href="https://wpkixx.com/html/socimo/group-feed.html" title className="promote">view feed</a>
                                </div>
                              </li>
                            </ul>
                          </div>{/* Your groups */}
                          <div className="widget">
                            <h4 className="widget-title">Suggested Group</h4>
                            <div className="sug-caro">
                              <div className="friend-box">
                                <figure>
                                  <img alt src="https://wpkixx.com/html/socimo/images/resources/sidebar-info.jpg" />
                                  <span>Members: 505K</span>
                                </figure>
                                <div className="frnd-meta">
                                  <img alt src="https://wpkixx.com/html/socimo/images/resources/frnd-figure2.jpg" />
                                  <div className="frnd-name">
                                    <a title href="#">Social Research</a>
                                    <span>@biolabest</span>
                                  </div>
                                  <a className="main-btn2" href="#" title>Join Community</a>
                                </div>
                              </div>
                              <div className="friend-box">
                                <figure>
                                  <img alt src="https://wpkixx.com/html/socimo/images/resources/sidebar-info2.jpg" />
                                  <span>Members: 505K</span>
                                </figure>
                                <div className="frnd-meta">
                                  <img alt src="https://wpkixx.com/html/socimo/images/resources/frnd-figure3.jpg" />
                                  <div className="frnd-name">
                                    <a title href="#">Bio Labest Group</a>
                                    <span>@biolabest</span>
                                  </div>
                                  <a className="main-btn2" href="#" title>Join Community</a>
                                </div>
                              </div>
                            </div>
                          </div>{/* suggested group */}
                          <div className="widget">
                            <h4 className="widget-title">Post Analytics</h4>
                            <ul className="widget-analytics">
                              <li>Reads <span>56</span></li>
                              <li>Recommendations <span>3</span></li>
                              <li>Shares <span>22</span></li>
                              <li>References <span>17</span></li>
                            </ul>
                          </div>{/* post analytics */}
                          <div className="advertisment-box">
                            <h4 className><i className="icofont-info-circle" /> advertisment</h4>
                            <figure>
                              <a title="Advertisment" href="#"><img alt src="images/resources/ad-widget2.gif" /></a>
                            </figure>
                          </div>{/* advertisment */}
                          <div className="widget">
                            <h4 className="widget-title">Explor Events <a title href="#" className="see-all">See All</a></h4>
                            <div className="rec-events bg-purple">
                              <i className="icofont-microphone" />
                              <h6><a href title>BZ University good night event in columbia</a></h6>
                              <img src="https://wpkixx.com/html/socimo/images/clock.png" alt />
                            </div>
                            <div className="rec-events bg-blue">
                              <i className="icofont-microphone" />
                              <h6><a href title>The 3rd International Conference 2020</a></h6>
                              <img src="https://wpkixx.com/html/socimo/images/clock.png" alt />
                            </div>
                          </div>{/* explore events */}
                          <div className="widget e-calendar">
                            <h4 className="widget-title">Event Calendar</h4>
                            <div className="full-calendar">
                              <div id="yourId" className="jalendar">
                                <div className="added-event" data-date="19-11-2015" data-link="http://google.com" data-title="WWDC 13 on San Francisco, LA" />
                                <div className="added-event" data-date="19-11-2015" data-title="Hazal ve Bora Nikah Töreni" />
                                <div className="added-event" data-date="10-12-2015" data-title="Tarkan İstanbul Concert on Harbiye Açık Hava Tiyatrosu" />
                              </div>
                            </div>
                          </div>{/* calendar */}
                          <div className="widget web-links">
                            <h4 className="widget-title">Useful Links <a className="see-all" href="#" title>See All</a></h4>
                            <ul>
                              <li><i className="icofont-dotted-right" /> <a href="#" title>about</a></li>
                              <li><i className="icofont-dotted-right" /> <a href="#" title>career</a></li>
                              <li><i className="icofont-dotted-right" /> <a href="#" title>advertise</a></li>
                              <li><i className="icofont-dotted-right" /> <a href="#" title>Socimo Apps</a></li>
                              <li><i className="icofont-dotted-right" /> <a href="#" title>Socimo Blog</a></li>
                              <li><i className="icofont-dotted-right" /> <a href="#" title>Help</a></li>
                              <li><i className="icofont-dotted-right" /> <a href="#" title>Socimo Gifts</a></li>
                              <li><i className="icofont-dotted-right" /> <a href="#" title>content policy</a></li>
                              <li><i className="icofont-dotted-right" /> <a href="#" title>User Policy</a></li>
                            </ul>
                            <p>© Socimo 2020. All Rights Reserved.</p>
                          </div>{/* little links */}
                        </aside>
                      </div>{/* sidebar */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>{/* content */}
          <figure className="bottom-mockup"><img src="https://wpkixx.com/html/socimo/images/footer.png" alt /></figure>
          <div className="bottombar">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <span className>© copyright All rights reserved by Socimo 2020</span>
                </div>
              </div>
            </div>
          </div>{/* bottombar */}
          <div className="wraper-invite">
            <div className="popup">
              <span className="popup-closed"><i className="icofont-close" /></span>
              <div className="popup-meta">
                <div className="popup-head">
                  <h5><i>
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg></i> Invite Colleagues</h5>
                </div>
                <div className="invitation-meta">
                  <p>
                    Enter an email address to invite a colleague or co-author to join you on socimo. They will receive an email and, in some cases, up to two reminders.
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
            <div className="popup">
              <span className="popup-closed"><i className="icofont-close" /></span>
              <div className="popup-meta">
                <div className="popup-head">
                  <h5><i>
                    <svg className="feather feather-message-square" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="currentColor" fill="none" viewBox="0 0 24 24" height={24} width={24} xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg></i> Send Message</h5>
                </div>
                <div className="send-message">
                  <form method="post" className="c-form">
                    <input type="text" placeholder="Enter Name.." />
                    <input type="text" placeholder="Subject" />
                    <textarea placeholder="Write Message" defaultValue={""} />
                    <div className="uploadimage">
                      <i className="icofont-file-jpg" />
                      <label className="fileContainer">
                        <input type="file" />Attach file
                      </label>
                    </div>
                    <button type="submit" className="main-btn">Send</button>
                  </form>
                </div>
              </div>
            </div>
          </div>{/* send message popup */}
          <div className="side-slide">
            <span className="popup-closed"><i className="icofont-close" /></span>
            <div className="slide-meta">
              <ul className="nav nav-tabs slide-btns">
                <li className="nav-item"><a className="active" href="#messages" data-toggle="tab">Messages</a></li>
                <li className="nav-item"><a className href="#notifications" data-toggle="tab">Notifications</a></li>
              </ul>
              <div className="tab-content">
                <div className="tab-pane active fade show" id="messages">
                  <h4><i className="icofont-envelope" /> messages</h4>
                  <a href="#" className="send-mesg" title="New Message" data-toggle="tooltip"><i className="icofont-edit" /></a>
                  <ul className="new-messages">
                    <li>
                      <figure><img src="images/resources/user1.jpg" alt /></figure>
                      <div className="mesg-info">
                        <span>Ibrahim Ahmed</span>
                        <a href="#" title>Helo dear i wanna talk to you</a>
                      </div>
                    </li>
                    <li>
                      <figure><img src="images/resources/user2.jpg" alt /></figure>
                      <div className="mesg-info">
                        <span>Fatima J.</span>
                        <a href="#" title>Helo dear i wanna talk to you</a>
                      </div>
                    </li>
                    <li>
                      <figure><img src="images/resources/user3.jpg" alt /></figure>
                      <div className="mesg-info">
                        <span>Fawad Ahmed</span>
                        <a href="#" title>Helo dear i wanna talk to you</a>
                      </div>
                    </li>
                    <li>
                      <figure><img src="images/resources/user4.jpg" alt /></figure>
                      <div className="mesg-info">
                        <span>Saim Turan</span>
                        <a href="#" title>Helo dear i wanna talk to you</a>
                      </div>
                    </li>
                    <li>
                      <figure><img src="images/resources/user5.jpg" alt /></figure>
                      <div className="mesg-info">
                        <span>Alis wells</span>
                        <a href="#" title>Helo dear i wanna talk to you</a>
                      </div>
                    </li>
                  </ul>
                  <a href="#" title className="main-btn" data-ripple>view all</a>
                </div>
                <div className="tab-pane fade" id="notifications">
                  <h4><i className="icofont-bell-alt" /> notifications</h4>
                  <ul className="notificationz">
                    <li>
                      <figure><img src="images/resources/user5.jpg" alt /></figure>
                      <div className="mesg-info">
                        <span>Alis wells</span>
                        <a href="#" title>recommend your post</a>
                      </div>
                    </li>
                    <li>
                      <figure><img src="images/resources/user4.jpg" alt /></figure>
                      <div className="mesg-info">
                        <span>Alis wells</span>
                        <a href="#" title>share your post <strong>a good time today!</strong></a>
                      </div>
                    </li>
                    <li>
                      <figure><img src="images/resources/user2.jpg" alt /></figure>
                      <div className="mesg-info">
                        <span>Alis wells</span>
                        <a href="#" title>recommend your post</a>
                      </div>
                    </li>
                    <li>
                      <figure><img src="images/resources/user1.jpg" alt /></figure>
                      <div className="mesg-info">
                        <span>Alis wells</span>
                        <a href="#" title>share your post <strong>a good time today!</strong></a>
                      </div>
                    </li>
                    <li>
                      <figure><img src="images/resources/user3.jpg" alt /></figure>
                      <div className="mesg-info">
                        <span>Alis wells</span>
                        <a href="#" title>recommend your post</a>
                      </div>
                    </li>
                  </ul>
                  <a href="#" title className="main-btn" data-ripple>view all</a>
                </div>
              </div>
            </div>
          </div>{/* side slide message & popup */}
          <div className="post-new-popup">
            <div className="popup" style={{ width: 800 }}>
              <span className="popup-closed"><i className="icofont-close" /></span>
              <div className="popup-meta">
                <div className="popup-head">
                  <h5><i>
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus"><line x1={12} y1={5} x2={12} y2={19} /><line x1={5} y1={12} x2={19} y2={12} /></svg></i>Create New Post</h5>
                </div>
                <div className="post-new">
                  <div className="post-newmeta">
                    <ul className="post-categoroes">
                      <li><i className="icofont-camera" /> Photo / Video</li>
                      <li><i className="icofont-google-map" /> Post Location</li>
                      <li><i className="icofont-file-gif" /> Post Gif</li>
                      <li><i className="icofont-ui-tag" /> Tag to Friend</li>
                      <li><i className="icofont-users" /> Share in Group</li>
                      <li><i className="icofont-link" /> Share Link</li>
                      <li><i className="icofont-video-cam" /> Go Live</li>
                      <li><i className="icofont-sale-discount" /> Post Online Course</li>
                      <li><i className="icofont-read-book" /> Post A Book</li>
                      <li><i className="icofont-globe" /> Post an Ad</li>
                    </ul>
                    <form method="post" className="dropzone" action="https://wpkixx.com/upload-target">
                      <div className="fallback">
                        <input name="file" type="file" multiple />
                      </div>
                    </form>
                  </div>
                  <form method="post" className="c-form">
                    <textarea id="emojionearea1" placeholder="What's On Your Mind?" defaultValue={""} />
                    <div className="activity-post">
                      <div className="checkbox">
                        <input type="checkbox" id="checkbox" defaultChecked />
                        <label htmlFor="checkbox"><span>Activity Feed</span></label>
                      </div>
                      <div className="checkbox">
                        <input type="checkbox" id="checkbox2" defaultChecked />
                        <label htmlFor="checkbox2"><span>My Story</span></label>
                      </div>
                    </div>
                    <div className="select-box">
                      <div className="select-box__current" tabIndex={1}>
                        <div className="select-box__value"><input className="select-box__input" type="radio" id={0} defaultValue={1} name="Ben" defaultChecked="checked" />
                          <p className="select-box__input-text"><i className="icofont-globe-alt" /> Public</p>
                        </div>
                        <div className="select-box__value"><input className="select-box__input" type="radio" id={1} defaultValue={2} name="Ben" defaultChecked="checked" />
                          <p className="select-box__input-text"><i className="icofont-lock" /> Private</p>
                        </div>
                        <div className="select-box__value"><input className="select-box__input" type="radio" id={2} defaultValue={3} name="Ben" defaultChecked="checked" />
                          <p className="select-box__input-text"><i className="icofont-user" /> Specific Friend</p>
                        </div>
                        <div className="select-box__value"><input className="select-box__input" type="radio" id={3} defaultValue={4} name="Ben" defaultChecked="checked" />
                          <p className="select-box__input-text"><i className="icofont-star" /> Only Friends</p>
                        </div>
                        <div className="select-box__value"><input className="select-box__input" type="radio" id={4} defaultValue={5} name="Ben" defaultChecked="checked" />
                          <p className="select-box__input-text"><i className="icofont-users-alt-3" /> Joined Groups</p>
                        </div>
                        <img className="select-box__icon" src="https://wpkixx.com/html/socimo/images/arrow-down.svg" alt="Arrow Icon" aria-hidden="true" />
                      </div>
                      <ul className="select-box__list">
                        <li><label className="select-box__option" htmlFor={0}><i className="icofont-globe-alt" /> Public</label></li>
                        <li><label className="select-box__option" htmlFor={1}><i className="icofont-lock" /> Private</label></li>
                        <li><label className="select-box__option" htmlFor={2}><i className="icofont-user" /> Specific Friend</label></li>
                        <li><label className="select-box__option" htmlFor={3}><i className="icofont-star" /> Only Friends</label></li>
                        <li><label className="select-box__option" htmlFor={4}><i className="icofont-users-alt-3" /> Joined Groups</label></li>
                      </ul>
                    </div>
                    <input className="schedule-btn" type="text" id="datetimepicker" readOnly />
                    <input type="text" placeholder="https://www.youtube.com/watch?v=vgvsuiFlA-Y&t=56s" />
                    <button type="submit" className="main-btn">Publish</button>
                  </form>
                </div>
              </div>
            </div>
          </div>{/* New post popup */}
          <div className="new-question-popup">
            <div className="popup">
              <span className="popup-closed"><i className="icofont-close" /></span>
              <div className="popup-meta">
                <div className="popup-head">
                  <h5><i>
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-help-circle"><circle cx={12} cy={12} r={10} /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1={12} y1={17} x2="12.01" y2={17} /></svg></i> Ask Question</h5>
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
                    <div className="uploadimage">
                      <i className="icofont-eye-alt-alt" />
                      <label className="fileContainer">
                        <input type="file" />Upload File
                      </label>
                    </div>
                    <button type="submit" className="main-btn">Post</button>
                  </form>
                </div>
              </div>
            </div>
          </div>{/* ask question */}
          <div className="share-wraper">
            <div className="share-options">
              <span className="close-btn"><i className="icofont-close-circled" /></span>
              <h5><i>
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-share"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" /><polyline points="16 6 12 2 8 6" /><line x1={12} y1={2} x2={12} y2={15} /></svg></i>Share To!</h5>
              <form method="post">
                <textarea placeholder="Write Something" defaultValue={""} />
              </form>
              <ul>
                <li><a title href="#">Your Timeline</a></li>
                <li className="friends"><a title href="#">To Friends</a></li>
                <li className="socialz"><a className="active" title href="#">Social Media</a></li>
              </ul>
              <div style={{ display: 'block' }} className="social-media">
                <ul>
                  <li><a title href="#" className="facebook"><i className="icofont-facebook" /></a></li>
                  <li><a title href="#" className="twitter"><i className="icofont-twitter" /></a></li>
                  <li><a title href="#" className="instagram"><i className="icofont-instagram" /></a></li>
                  <li><a title href="#" className="pinterest"><i className="icofont-pinterest" /></a></li>
                  <li><a title href="#" className="youtube"><i className="icofont-youtube" /></a></li>
                  <li><a title href="#" className="dribble"><i className="icofont-dribbble" /></a></li>
                  <li><a title href="#" className="behance"><i className="icofont-behance-original" /></a></li>
                </ul>
              </div>
              <div style={{ display: 'none' }} className="friends-to">
                <div className="follow-men">
                  <figure><img className="mCS_img_loaded" src="images/resources/user1.jpg" alt /></figure>
                  <div className="follow-meta">
                    <h5><a href="#" title>Jack Carter</a></h5>
                    <span>family member</span>
                  </div>
                  <a href="#" title>Share</a>
                </div>
                <div className="follow-men">
                  <figure><img className="mCS_img_loaded" src="images/resources/user2.jpg" alt /></figure>
                  <div className="follow-meta">
                    <h5><a href="#" title>Xang Ching</a></h5>
                    <span>Close Friend</span>
                  </div>
                  <a href="#" title>Share</a>
                </div>
                <div className="follow-men">
                  <figure><img className="mCS_img_loaded" src="images/resources/user3.jpg" alt /></figure>
                  <div className="follow-meta">
                    <h5><a href="#" title>Emma Watson</a></h5>
                    <span>Matul Friend</span>
                  </div>
                  <a href="#" title>Share</a>
                </div>
              </div>
              <button type="submit" className="main-btn">Publish</button>
            </div>
          </div>{/* share post */}
          <div className="cart-product">
            <a href="product-cart.html" title="View Cart" data-toggle="tooltip"><i className="icofont-cart-alt" /></a>
            <span>03</span>
          </div>{/* view cart button */}
          <div className="chat-live">
            <a className="chat-btn" href="#" title="Start Live Chat" data-toggle="tooltip"><i className="icofont-facebook-messenger" /></a>
            <span>07</span>
          </div>{/* chat button */}
          <div className="chat-box">
            <div className="chat-head">
              <h4>New Messages</h4>
              <span className="clozed"><i className="icofont-close-circled" /></span>
              <form method="post">
                <input type="text" placeholder="To.." />
              </form>
            </div>
            <div className="user-tabs">
              <ul className="nav nav-tabs">
                <li className="nav-item"><a className="active" href="#link1" data-toggle="tab">All Friends</a></li>
                <li className="nav-item"><a className href="#link2" data-toggle="tab">Active</a><em>3</em></li>
                <li className="nav-item"><a className href="#link3" data-toggle="tab">Groups</a></li>
              </ul>
              {/* Tab panes */}
              <div className="tab-content">
                <div className="tab-pane active fade show " id="link1">
                  <div className="friend">
                    <a href="#" title>
                      <figure>
                        <img src="images/resources/user1.jpg" alt />
                        <span className="status online" />
                      </figure>
                      <span>Oliver</span>
                      <i className><img src="images/resources/user1.jpg" alt /></i>
                    </a>
                    <a href="#" title>
                      <figure>
                        <img src="images/resources/user2.jpg" alt />
                        <span className="status away" />
                      </figure>
                      <span>Amelia</span>
                      <i className="icofont-check-circled" />
                    </a>
                    <a href="#" title>
                      <figure>
                        <img src="images/resources/user3.jpg" alt />
                        <span className="status offline" />
                      </figure>
                      <span>George</span>
                      <i className><img src="images/resources/user3.jpg" alt /></i>
                    </a>
                    <a href="#" title>
                      <figure>
                        <img src="images/resources/user4.jpg" alt />
                        <span className="status online" />
                      </figure>
                      <span>Jacob</span>
                      <i className="icofont-check-circled" />
                    </a>
                    <a href="#" title>
                      <figure>
                        <img src="images/resources/user5.jpg" alt />
                        <span className="status away" />
                      </figure>
                      <span>Poppy</span>
                      <i className="icofont-check-circled" />
                    </a>
                    <a href="#" title>
                      <figure>
                        <img src="images/resources/user6.jpg" alt />
                        <span className="status online" />
                      </figure>
                      <span>Sophia</span>
                      <i className><img src="images/resources/user6.jpg" alt /></i>
                    </a>
                    <a href="#" title>
                      <figure>
                        <img src="images/resources/user7.jpg" alt />
                        <span className="status away" />
                      </figure>
                      <span>Leo king</span>
                      <i className><img src="images/resources/user7.jpg" alt /></i>
                    </a>
                  </div>
                </div>
                <div className="tab-pane fade" id="link2">
                  <div className="friend">
                    <a href="#" title>
                      <figure>
                        <img src="images/resources/user1.jpg" alt />
                        <span className="status online" />
                      </figure>
                      <span>Samu Jane</span>
                      <i className><img src="images/resources/user1.jpg" alt /></i>
                    </a>
                    <a href="#" title>
                      <figure>
                        <img src="images/resources/user6.jpg" alt />
                        <span className="status online" />
                      </figure>
                      <span>Tina Mark</span>
                      <i className><img src="images/resources/user6.jpg" alt /></i>
                    </a>
                    <a href="#" title>
                      <figure>
                        <img src="images/resources/user7.jpg" alt />
                        <span className="status online" />
                      </figure>
                      <span>Ak William</span>
                      <i className><img src="images/resources/user7.jpg" alt /></i>
                    </a>
                  </div>
                </div>
                <div className="tab-pane fade" id="link3">
                  <div className="friend">
                    <a href="#" title>
                      <figure className="group-chat">
                        <img src="images/resources/user5.jpg" alt />
                        <img className="two" src="images/resources/user3.jpg" alt />
                        <span className="status online" />
                      </figure>
                      <span>Boys World</span>
                      <i className="icofont-check-circled" />
                    </a>
                    <a href="#" title>
                      <figure className="group-chat">
                        <img src="images/resources/user2.jpg" alt />
                        <img className="two" src="images/resources/user3.jpg" alt />
                        <span className="status online" />
                      </figure>
                      <span>KK university Fellows</span>
                      <i className="icofont-check-circled" />
                    </a>
                    <a href="#" title>
                      <figure className="group-chat">
                        <img src="images/resources/user3.jpg" alt />
                        <img className="two" src="images/resources/user2.jpg" alt />
                        <span className="status away" />
                      </figure>
                      <span>Education World</span>
                      <i className="icofont-check-circled" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="chat-card">
              <div className="chat-card-head">
                <img src="https://wpkixx.com/html/socimo/images/resources/user13.jpg" alt />
                <h6>George Floyd</h6>
                <div className="frnd-opt">
                  <div className="more">
                    <div className="more-post-optns">
                      <i className>
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-horizontal"><circle cx={12} cy={12} r={1} /><circle cx={19} cy={12} r={1} /><circle cx={5} cy={12} r={1} /></svg></i>
                      <ul>
                        <li>
                          <i className="icofont-pen-alt-1" />Edit Post
                          <span>Edit This Post within a Hour</span>
                        </li>
                        <li>
                          <i className="icofont-ban" />Hide Chat
                          <span>Hide This Post</span>
                        </li>
                        <li>
                          <i className="icofont-ui-delete" />Delete Chat
                          <span>If inappropriate Post By Mistake</span>
                        </li>
                        <li>
                          <i className="icofont-flag" />Report
                          <span>Inappropriate Chat</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <span className="close-mesage"><i className="icofont-close" /></span>
                </div>
              </div>
              <div className="chat-list">
                <ul>
                  <li className="me">
                    <div className="chat-thumb"><img src="https://wpkixx.com/html/socimo/images/resources/chatlist1.jpg" alt /></div>
                    <div className="notification-event">
                      <div className="chat-message-item">
                        <figure><img src="images/resources/album5.jpg" alt /></figure>
                        <div className="caption">4.5kb <i className="icofont-download" title="Download" /></div>
                      </div>
                      <span className="notification-date">
                        <time dateTime="2004-07-24T18:18" className="entry-date updated">Yesterday at 8:10pm</time>
                        <i><img src="https://wpkixx.com/html/socimo/images/d-tick.png" alt /></i>
                      </span>
                    </div>
                  </li>
                  <li className="me">
                    <div className="chat-thumb"><img src="https://wpkixx.com/html/socimo/images/resources/chatlist1.jpg" alt /></div>
                    <div className="notification-event">
                      <span className="chat-message-item">
                        Hi James! Please remember to buy the food for tomorrow! I’m gonna be handling the gifts and Jake’s gonna get the drinks
                      </span>
                      <span className="notification-date">
                        <time dateTime="2004-07-24T18:18" className="entry-date updated">Yesterday at 8:10pm</time>
                        <i><img src="https://wpkixx.com/html/socimo/images/d-tick.png" alt /></i>
                      </span>
                    </div>
                  </li>
                  <li className="you">
                    <div className="chat-thumb"><img src="https://wpkixx.com/html/socimo/images/resources/chatlist2.jpg" alt /></div>
                    <div className="notification-event">
                      <span className="chat-message-item">
                        Hi James! Please remember to buy the food for tomorrow! I’m gonna be handling the gifts and Jake’s gonna get the drinks
                      </span>
                      <span className="notification-date">
                        <time dateTime="2004-07-24T18:18" className="entry-date updated">Yesterday at 8:10pm</time>
                        <i><img src="https://wpkixx.com/html/socimo/images/d-tick.png" alt /></i>
                      </span>
                    </div>
                  </li>
                  <li className="me">
                    <div className="chat-thumb"><img src="https://wpkixx.com/html/socimo/images/resources/chatlist1.jpg" alt /></div>
                    <div className="notification-event">
                      <span className="chat-message-item">
                        Hi James! Please remember to buy the food for tomorrow! I’m gonna be handling the gifts and Jake’s gonna get the drinks
                      </span>
                      <span className="notification-date">
                        <time dateTime="2004-07-24T18:18" className="entry-date updated">Yesterday at 8:10pm</time>
                        <i><img src="https://wpkixx.com/html/socimo/images/d-tick.png" alt /></i>
                      </span>
                    </div>
                  </li>
                </ul>
                <form className="text-box">
                  <textarea placeholder="Write Mesage..." defaultValue={""} />
                  <div className="add-smiles">
                    <span><img src="https://wpkixx.com/html/socimo/images/smiles/happy-3.png" alt /></span>
                  </div>
                  <div className="smiles-bunch">
                    <i><img src="images/smiles/thumb.png" alt /></i>
                    <i><img src="https://wpkixx.com/html/socimo/images/smiles/angry-1.png" alt /></i>
                    <i><img src="https://wpkixx.com/html/socimo/images/smiles/angry.png" alt /></i>
                    <i><img src="https://wpkixx.com/html/socimo/images/smiles/bored-1.png" alt /></i>
                    <i><img src="https://wpkixx.com/html/socimo/images/smiles/confused-1.png" alt /></i>
                    <i><img src="https://wpkixx.com/html/socimo/images/smiles/wink.png" alt /></i>
                    <i><img src="images/smiles/weep.png" alt /></i>
                    <i><img src="https://wpkixx.com/html/socimo/images/smiles/tongue-out.png" alt /></i>
                    <i><img src="https://wpkixx.com/html/socimo/images/smiles/suspicious.png" alt /></i>
                    <i><img src="https://wpkixx.com/html/socimo/images/smiles/crying-1.png" alt /></i>
                    <i><img src="https://wpkixx.com/html/socimo/images/smiles/crying.png" alt /></i>
                    <i><img src="https://wpkixx.com/html/socimo/images/smiles/embarrassed.png" alt /></i>
                    <i><img src="https://wpkixx.com/html/socimo/images/smiles/emoticons.png" alt /></i>
                    <i><img src="https://wpkixx.com/html/socimo/images/smiles/happy-2.png" alt /></i>
                  </div>
                  <button type="submit"><i className="icofont-paper-plane" /></button>
                </form>
              </div>
            </div>
          </div>{/* chat box */}
        </div>
      </div>

    </>
  );
}
