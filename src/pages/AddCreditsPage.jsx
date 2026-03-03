
import React from 'react';
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import CarouselMenu from "../components/carouselmenu";
import { Link } from "react-router-dom";
export default function addcreditsPage() {
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

          <section>
            <div className="gap">
              <div className="container">
                <div className="row">
                  <div className="col-lg-4">
                    <aside className="sidebar">
                      <div className="widget">
                        <h4 className="widget-title">Credit Balance</h4>
                        <div className="card-credit">
                          <p>Your credits will be using on Purchasing items from <b>Sociomo</b></p>
                          <h6>$500</h6>
                          <span>added via Paypal</span>
                        </div>
                      </div>
                      <div className="widget">
                        <h4 className="widget-title">Saved Cards</h4>
                        <div className="set-card">
                          <img src="https://wpkixx.com/html/socimo/images/paypal.png" alt />
                          <p>
                            Get paid by credit or debit card
                          </p>
                          <Link className="main-btn" to="#" title>Edit Card</Link>
                          <div className="added-complete">
                            <h6>Added: <span>25 Mar 2020</span></h6>
                          </div>
                        </div>
                      </div>
                    </aside>
                  </div>
                  <div className="col-lg-8">
                    <div className="main-wraper">
                      <h4 className="main-title">Add Credits</h4>
                      <h6 className="mb-4">You May add your payment method or credits By Credit Cards</h6>
                      <div className="add-credits">
                        <form>
                          <fieldset className="row merged-10">
                            <div className="mb-4 col-lg-6 col-md-6 col-sm-6">
                              <input className="uk-input" type="text" placeholder="Holder Name" />
                            </div>
                            <div className="mb-4 col-lg-6 col-md-6 col-sm-6">
                              <input className="uk-input" type="text" placeholder="Card Number" />
                            </div>
                            <div className="mb-4 uk-margin col-lg-4">
                              <select className="uk-select">
                                <option>Expiration Month</option>
                                <option>January</option>
                                <option>February</option>
                                <option>March</option>
                              </select>
                            </div>
                            <div className="mb-4 col-lg-4 col-md-6 col-sm-6">
                              <input className="uk-input" type="text" placeholder="Expiration Year" />
                            </div>
                            <div className="mb-4 col-lg-4 col-md-6 col-sm-6">
                              <input className="uk-input" type="text" placeholder="CVC Number" />
                            </div>
                            <div className="mt-3 col-lg-12">
                              <button type="submit" className="button primary circle">Save Changes</button>
                            </div>
                          </fieldset>
                        </form>
                        <p>
                          <b>Special Note:</b>
                          "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system,
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <figure className="bottom-mockup"><img alt src="https://wpkixx.com/html/socimo/images/footer.png" /></figure>
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
                <li className="nav-item"><Link className="active" to="#messages" data-toggle="tab">Messages</Link></li>
                <li className="nav-item"><Link className to="#notifications" data-toggle="tab">Notifications</Link></li>
              </ul>
              <div className="tab-content">
                <div className="tab-pane active fade show" id="messages">
                  <h4><i className="icofont-envelope" /> messages</h4>
                  <Link to="#" className="send-mesg" title="New Message" data-toggle="tooltip"><i className="icofont-edit" /></Link>
                  <ul className="new-messages">
                    <li>
                      <figure><img src="images/resources/user1.jpg" alt /></figure>
                      <div className="mesg-info">
                        <span>Ibrahim Ahmed</span>
                        <Link to="#" title>Helo dear i wanna talk to you</Link>
                      </div>
                    </li>
                    <li>
                      <figure><img src="images/resources/user2.jpg" alt /></figure>
                      <div className="mesg-info">
                        <span>Fatima J.</span>
                        <Link to="#" title>Helo dear i wanna talk to you</Link>
                      </div>
                    </li>
                    <li>
                      <figure><img src="images/resources/user3.jpg" alt /></figure>
                      <div className="mesg-info">
                        <span>Fawad Ahmed</span>
                        <Link to="#" title>Helo dear i wanna talk to you</Link>
                      </div>
                    </li>
                    <li>
                      <figure><img src="images/resources/user4.jpg" alt /></figure>
                      <div className="mesg-info">
                        <span>Saim Turan</span>
                        <Link to="#" title>Helo dear i wanna talk to you</Link>
                      </div>
                    </li>
                    <li>
                      <figure><img src="images/resources/user5.jpg" alt /></figure>
                      <div className="mesg-info">
                        <span>Alis wells</span>
                        <Link to="#" title>Helo dear i wanna talk to you</Link>
                      </div>
                    </li>
                  </ul>
                  <Link to="#" title className="main-btn" data-ripple>view all</Link>
                </div>
                <div className="tab-pane fade" id="notifications">
                  <h4><i className="icofont-bell-alt" /> notifications</h4>
                  <ul className="notificationz">
                    <li>
                      <figure><img src="images/resources/user5.jpg" alt /></figure>
                      <div className="mesg-info">
                        <span>Alis wells</span>
                        <Link to="#" title>recommend your post</Link>
                      </div>
                    </li>
                    <li>
                      <figure><img src="images/resources/user4.jpg" alt /></figure>
                      <div className="mesg-info">
                        <span>Alis wells</span>
                        <Link to="#" title>share your post <strong>a good time today!</strong></Link>
                      </div>
                    </li>
                    <li>
                      <figure><img src="images/resources/user2.jpg" alt /></figure>
                      <div className="mesg-info">
                        <span>Alis wells</span>
                        <Link to="#" title>recommend your post</Link>
                      </div>
                    </li>
                    <li>
                      <figure><img src="images/resources/user1.jpg" alt /></figure>
                      <div className="mesg-info">
                        <span>Alis wells</span>
                        <Link to="#" title>share your post <strong>a good time today!</strong></Link>
                      </div>
                    </li>
                    <li>
                      <figure><img src="images/resources/user3.jpg" alt /></figure>
                      <div className="mesg-info">
                        <span>Alis wells</span>
                        <Link to="#" title>recommend your post</Link>
                      </div>
                    </li>
                  </ul>
                  <Link to="#" title className="main-btn" data-ripple>view all</Link>
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
                <li><Link title to="#">Your Timeline</Link></li>
                <li className="friends"><Link title to="#">To Friends</Link></li>
                <li className="socialz"><Link className="active" title to="#">Social Media</Link></li>
              </ul>
              <div style={{ display: 'block' }} className="social-media">
                <ul>
                  <li><Link title to="#" className="facebook"><i className="icofont-facebook" /></Link></li>
                  <li><Link title to="#" className="twitter"><i className="icofont-twitter" /></Link></li>
                  <li><Link title to="#" className="instagram"><i className="icofont-instagram" /></Link></li>
                  <li><Link title to="#" className="pinterest"><i className="icofont-pinterest" /></Link></li>
                  <li><Link title to="#" className="youtube"><i className="icofont-youtube" /></Link></li>
                  <li><Link title to="#" className="dribble"><i className="icofont-dribbble" /></Link></li>
                  <li><Link title to="#" className="behance"><i className="icofont-behance-original" /></Link></li>
                </ul>
              </div>
              <div style={{ display: 'none' }} className="friends-to">
                <div className="follow-men">
                  <figure><img className="mCS_img_loaded" src="images/resources/user1.jpg" alt /></figure>
                  <div className="follow-meta">
                    <h5><Link to="#" title>Jack Carter</Link></h5>
                    <span>family member</span>
                  </div>
                  <Link to="#" title>Share</Link>
                </div>
                <div className="follow-men">
                  <figure><img className="mCS_img_loaded" src="images/resources/user2.jpg" alt /></figure>
                  <div className="follow-meta">
                    <h5><Link to="#" title>Xang Ching</Link></h5>
                    <span>Close Friend</span>
                  </div>
                  <Link to="#" title>Share</Link>
                </div>
                <div className="follow-men">
                  <figure><img className="mCS_img_loaded" src="images/resources/user3.jpg" alt /></figure>
                  <div className="follow-meta">
                    <h5><Link to="#" title>Emma Watson</Link></h5>
                    <span>Matul Friend</span>
                  </div>
                  <Link to="#" title>Share</Link>
                </div>
              </div>
              <button type="submit" className="main-btn">Publish</button>
            </div>
          </div>{/* share post */}
          <div className="cart-product">
            <Link to="/product-cart" title="View Cart" data-toggle="tooltip"><i className="icofont-cart-alt" /></Link>
            <span>03</span>
          </div>{/* view cart button */}
          <div className="chat-live">
            <Link className="chat-btn" to="#" title="Start Live Chat" data-toggle="tooltip"><i className="icofont-facebook-messenger" /></Link>
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
                <li className="nav-item"><Link className="active" to="#link1" data-toggle="tab">All Friends</Link></li>
                <li className="nav-item"><Link className to="#link2" data-toggle="tab">Active</Link><em>3</em></li>
                <li className="nav-item"><Link className to="#link3" data-toggle="tab">Groups</Link></li>
              </ul>
              {/* Tab panes */}
              <div className="tab-content">
                <div className="tab-pane active fade show " id="link1">
                  <div className="friend">
                    <Link to="#" title>
                      <figure>
                        <img src="images/resources/user1.jpg" alt />
                        <span className="status online" />
                      </figure>
                      <span>Oliver</span>
                      <i className="icofont-check-circled"><img src="images/resources/user1.jpg" alt /></i>
                    </Link>
                    <Link to="#" title>
                      <figure>
                        <img src="images/resources/user2.jpg" alt />
                        <span className="status away" />
                      </figure>
                      <span>Amelia</span>
                      <i className="icofont-check-circled" />
                    </Link>
                    <Link to="#" title>
                      <figure>
                        <img src="images/resources/user3.jpg" alt />
                        <span className="status offline" />
                      </figure>
                      <span>George</span>
                      <i className="icofont-check-circled"><img src="images/resources/user3.jpg" alt /></i>
                    </Link>
                    <Link to="#" title>
                      <figure>
                        <img src="images/resources/user4.jpg" alt />
                        <span className="status online" />
                      </figure>
                      <span>Jacob</span>
                      <i className="icofont-check-circled" />
                    </Link>
                    <Link to="#" title>
                      <figure>
                        <img src="images/resources/user5.jpg" alt />
                        <span className="status away" />
                      </figure>
                      <span>Poppy</span>
                      <i className="icofont-check-circled" />
                    </Link>
                    <Link to="#" title>
                      <figure>
                        <img src="images/resources/user6.jpg" alt />
                        <span className="status online" />
                      </figure>
                      <span>Sophia</span>
                      <i className="icofont-check-circled"><img src="images/resources/user6.jpg" alt /></i>
                    </Link>
                    <Link to="#" title>
                      <figure>
                        <img src="images/resources/user7.jpg" alt />
                        <span className="status away" />
                      </figure>
                      <span>Leo king</span>
                      <i className="icofont-check-circled"><img src="images/resources/user7.jpg" alt /></i>
                    </Link>
                  </div>
                </div>
                <div className="tab-pane fade" id="link2">
                  <div className="friend">
                    <Link to="#" title>
                      <figure>
                        <img src="images/resources/user1.jpg" alt />
                        <span className="status online" />
                      </figure>
                      <span>Samu Jane</span>
                      <i className="icofont-check-circled"><img src="images/resources/user1.jpg" alt /></i>
                    </Link>
                    <Link to="#" title>
                      <figure>
                        <img src="images/resources/user6.jpg" alt />
                        <span className="status online" />
                      </figure>
                      <span>Tina Mark</span>
                      <i className="icofont-check-circled"><img src="images/resources/user6.jpg" alt /></i>
                    </Link>
                    <Link to="#" title>
                      <figure>
                        <img src="images/resources/user7.jpg" alt />
                        <span className="status online" />
                      </figure>
                      <span>Ak William</span>
                      <i className="icofont-check-circled"><img src="images/resources/user7.jpg" alt /></i>
                    </Link>
                  </div>
                </div>
                <div className="tab-pane fade" id="link3">
                  <div className="friend">
                    <Link to="#" title>
                      <figure className="group-chat">
                        <img src="images/resources/user5.jpg" alt />
                        <img className="two" src="images/resources/user3.jpg" alt />
                        <span className="status online" />
                      </figure>
                      <span>Boys World</span>
                      <i className="icofont-check-circled" />
                    </Link>
                    <Link to="#" title>
                      <figure className="group-chat">
                        <img src="images/resources/user2.jpg" alt />
                        <img className="two" src="images/resources/user3.jpg" alt />
                        <span className="status online" />
                      </figure>
                      <span>KK university Fellows</span>
                      <i className="icofont-check-circled" />
                    </Link>
                    <Link to="#" title>
                      <figure className="group-chat">
                        <img src="images/resources/user3.jpg" alt />
                        <img className="two" src="images/resources/user2.jpg" alt />
                        <span className="status away" />
                      </figure>
                      <span>Education World</span>
                      <i className="icofont-check-circled" />
                    </Link>
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
