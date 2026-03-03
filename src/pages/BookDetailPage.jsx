
import React from 'react';
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import CarouselMenu from "../components/carouselmenu";
export default function bookdetailPage() {
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
            <div className="gap">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div id="page-contents" className="row merged20">
                      <div className="col-lg-9">
                        <div className="main-wraper">
                          <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-4">
                              <div className="full-book">
                                <figure>
                                  <img src="https://wpkixx.com/html/socimo/images/resources/book3.jpg" alt />
                                  <span>Trending</span>
                                </figure>
                                <div className="prod-stat">
                                  <ul>
                                    <li><span>Visited:</span> 130</li>
                                    <li><span>Downloads:</span> 1.3k</li>
                                    <li><span>Availablity:</span> Available</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-8 col-md-8 col-sm-8">
                              <div className="prod-detail">
                                <ul className="stars">
                                  <li><i className="icofont-star" /></li>
                                  <li><i className="icofont-star" /></li>
                                  <li><i className="icofont-star" /></li>
                                  <li><i className="icofont-star" /></li>
                                  <li><i className="icofont-star" /></li>
                                </ul>
                                <h4>Python Tricks 2020</h4>
                                <span>Price: <i>$20</i></span>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
                                </p>
                                <ul className="item-info">
                                  <li><span>Author:</span> Jhon Doe</li>
                                  <li><span>Pages:</span> 1120</li>
                                  <li><span>Publish:</span> Aug, 05, 2019</li>
                                  <li><span>Barcode:</span> 9780099511021</li>
                                  <li><span>Publisher:</span> Random House</li>
                                </ul>
                                <div className="sale-button">
                                  <a href="#" title className="main-btn"><i className="icofont-book-alt" /> Read Now</a>
                                  <a href="#" title className="main-btn purchase-btn"><i className="icofont-cart-alt" /> Buy Now</a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="book-description">
                            <p>
                              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
                            </p>
                          </div>
                          <div className="comment-area product mt-5">
                            <h4 className="comment-title">03 Feedback</h4>
                            <ul className="comments">
                              <li>
                                <div className="comment-box">
                                  <div className="commenter-photo">
                                    <img alt src="https://wpkixx.com/html/socimo/images/resources/commenter-1.jpg" />
                                  </div>
                                  <div className="commenter-meta">
                                    <div className="comment-titles">
                                      <h6>willimes doe</h6>
                                      <span>12 june 2017</span>
                                      <ins><i className="icofont-star" /> 4.5</ins>
                                    </div>
                                    <p>
                                      Quis autem velum iure reprehe nderit. Lorem ipsum dolor sit amet adipiscing egetmassa pulvinar eu aliquet nibh dapibus.
                                    </p>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="comment-box">
                                  <div className="commenter-photo">
                                    <img alt src="https://wpkixx.com/html/socimo/images/resources/commenter-2.jpg" />
                                  </div>
                                  <div className="commenter-meta">
                                    <div className="comment-titles">
                                      <h6>Qlark Jack</h6>
                                      <span>22 july 2017</span>
                                      <ins><i className="icofont-star" /> 4.5</ins>
                                    </div>
                                    <p>
                                      Quis autem velum iure reprehe nderit. Lorem ipsum dolor sit amet adipiscing egetmassa
                                      pulvinar eu aliquet nibh dapibus.
                                    </p>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="comment-box">
                                  <div className="commenter-photo">
                                    <img alt src="https://wpkixx.com/html/socimo/images/resources/commenter-3.jpg" />
                                  </div>
                                  <div className="commenter-meta">
                                    <div className="comment-titles">
                                      <h6>Olivia Take</h6>
                                      <span>15 jan 2016</span>
                                      <ins><i className="icofont-star" /> 4.5</ins>
                                    </div>
                                    <p>
                                      Quis autem velum iure reprehe nderit. Lorem ipsum dolor sit amet adipiscing egetmassa
                                      pulvinar eu aliquet nibh dapibus.
                                    </p>
                                  </div>
                                </div>
                              </li>
                            </ul>
                            <div className="add-comment">
                              <span>Give Your Rating</span>
                              <ul className="stars mb-3">
                                <li><i className="icofont-star" /></li>
                                <li><i className="icofont-star" /></li>
                                <li><i className="icofont-star" /></li>
                                <li><i className="icofont-star" /></li>
                                <li><i className="icofont-star" /></li>
                              </ul>
                              <form method="post" className="c-form2">
                                <input className="uk-input" type="text" placeholder="Name" />
                                <input className="uk-input" type="text" placeholder="Email" />
                                <textarea className="uk-textarea" rows={4} placeholder="Write Message" defaultValue={""} />
                                <button className="main-btn float-right mt-3" type="submit">Add Review</button>
                              </form>
                            </div>
                          </div>
                        </div>
                        <div className="main-wraper">
                          <h4 className="main-title">Related Books <a className="view-all" href="#" title>view all</a></h4>
                          <div className="books-caro">
                            <div className="book-post">
                              <figure><a href="book-detail.html" title><img src="https://wpkixx.com/html/socimo/images/resources/book1.jpg" alt /></a></figure>
                              <a href="book-detail.html" title>Html5 Brick Breaker</a>
                            </div>
                            <div className="book-post">
                              <figure><a href="book-detail.html" title><img src="https://wpkixx.com/html/socimo/images/resources/book3.jpg" alt /></a></figure>
                              <a href="book-detail.html" title>Python Tricks</a>
                            </div>
                            <div className="book-post">
                              <figure><a href="book-detail.html" title><img src="images/resources/book5.jpg" alt /></a></figure>
                              <a href="book-detail.html" title>Technology Wants</a>
                            </div>
                            <div className="book-post">
                              <figure><a href="book-detail.html" title><img src="https://wpkixx.com/html/socimo/images/resources/book2.jpg" alt /></a></figure>
                              <a href="book-detail.html" title>The Aesthetic Ideology</a>
                            </div>
                            <div className="book-post">
                              <figure><a href="book-detail.html" title><img src="https://wpkixx.com/html/socimo/images/resources/book4.jpg" alt /></a></figure>
                              <a href="book-detail.html" title>Holy Bible Old</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <aside className="sidebar static right">
                          <div className="widget">
                            <h4 className="widget-title">Popular Books</h4>
                            <div className="popular-book">
                              <figure><img src="https://wpkixx.com/html/socimo/images/resources/book10.jpg" alt /></figure>
                              <div className="book-about">
                                <h6><a href="#" title>Vu.js 2 Basics</a></h6>
                                <span>Richard Ali</span>
                                <a href="#" title="Book Mark"><i className>
                                  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-bookmark"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" /></svg></i></a>
                              </div>
                            </div>
                            <div className="popular-book">
                              <figure><img src="https://wpkixx.com/html/socimo/images/resources/book9.jpg" alt /></figure>
                              <div className="book-about">
                                <h6><a href="#" title>Css3 for Bigners</a></h6>
                                <span>Richard Ali</span>
                                <a href="#" title="Book Mark"><i className>
                                  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-bookmark"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" /></svg></i></a>
                              </div>
                            </div>
                            <div className="popular-book">
                              <figure><img src="images/resources/book5.jpg" alt /></figure>
                              <div className="book-about">
                                <h6><a href="#" title>Technology Wants 2020</a></h6>
                                <span>Richard Ali</span>
                                <a href="#" title="Book Mark"><i className>
                                  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-bookmark"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" /></svg></i></a>
                              </div>
                            </div>
                          </div>
                          <div className="widget">
                            <h4 className="widget-title">Ask Research Question?</h4>
                            <div className="ask-question">
                              <i className="icofont-question-circle" />
                              <h6>Ask questions in Q&amp;A to get help from experts in your field.</h6>
                              <a className="ask-qst" href="#" title>Ask a question</a>
                            </div>
                          </div>
                          <div className="widget">
                            <h4 className="widget-title">Explor Events <a className="see-all" href="#" title>See All</a></h4>
                            <div className="rec-events bg-purple">
                              <i className="icofont-gift" />
                              <h6><a title href>BZ University good night event in columbia</a></h6>
                              <img alt src="https://wpkixx.com/html/socimo/images/clock.png" />
                            </div>
                            <div className="rec-events bg-blue">
                              <i className="icofont-microphone" />
                              <h6><a title href>The 3rd International Conference 2020</a></h6>
                              <img alt src="https://wpkixx.com/html/socimo/images/clock.png" />
                            </div>
                          </div>
                          <div className="widget stick-widget">
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
                          </div>
                        </aside>
                      </div>
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
