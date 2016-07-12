import React, {Component} from 'react';

export default class HomePage extends Component {
        render() {
           return (
             <div>
                 <section id="slider">
                   <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">

                     <ol className="carousel-indicators">
                       <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                       <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                     </ol>

                     <div className="carousel-inner" role="listbox">

                       <div className="item active" style="background-image: url(img/banner.jpg);">
                         <div className="carousel-caption">
                           <h2 data-wow-duration="700ms" data-wow-delay="500ms" className="wow bounceInDown animated">Meet<span> Bittick</span>!</h2>
                           <h3 data-wow-duration="1000ms" className="wow slideInLeft animated"><span className="color">/creative</span> one page template.</h3>
                           <p data-wow-duration="1000ms" className="wow slideInRight animated">We are a team of professionals</p>

                           <ul className="social-links text-center">
                             <li><a href=""><i className="fa fa-twitter fa-lg"></i></a></li>
                             <li><a href=""><i className="fa fa-facebook fa-lg"></i></a></li>
                             <li><a href=""><i className="fa fa-google-plus fa-lg"></i></a></li>
                             <li><a href=""><i className="fa fa-dribbble fa-lg"></i></a></li>
                           </ul>
                         </div>
                       </div>

                       <div className="item" style="background-image: url(img/banner.jpg);">
                         <div className="carousel-caption">
                           <h2 data-wow-duration="500ms" data-wow-delay="500ms" className="wow bounceInDown animated">Meet<span> Team</span>!</h2>
                           <h3 data-wow-duration="500ms" className="wow slideInLeft animated"><span className="color">/creative</span> one page template.</h3>
                           <p data-wow-duration="500ms" className="wow slideInRight animated">We are a team of professionals</p>

                           <ul className="social-links text-center">
                             <li><a href=""><i className="fa fa-twitter fa-lg"></i></a></li>
                             <li><a href=""><i className="fa fa-facebook fa-lg"></i></a></li>
                             <li><a href=""><i className="fa fa-google-plus fa-lg"></i></a></li>
                             <li><a href=""><i className="fa fa-dribbble fa-lg"></i></a></li>
                           </ul>
                         </div>
                       </div>

                     </div>

                   </div>
                 </section>
                 <section id="features" className="features">
                   <div className="container">
                     <div className="row">

                       <div className="sec-title text-center mb50 wow bounceInDown animated" data-wow-duration="500ms">
                         <h2>Pricing</h2>
                         <div className="devider"><i className="fa fa-heart-o fa-lg"></i></div>
                       </div>

                       <div className="col-md-4 wow fadeInLeft" data-wow-duration="500ms">
                         <div className="service-item">
                           <div className="service-icon">
                             <i className="fa fa-github-alt fa-2x"></i>
                           </div>

                           <div className="service-desc">
                             <h3>Developer Account</h3>
                             <p>Perfect for freelancer developers and personal use, this include the following settings:</p>
                             <br/>
                             <ul className="list-group">
                               <li className="list-group-item list-group-item-success"><i className="fa fa-check"></i> Reporting</li>
                               <li className="list-group-item list-group-item-success"><i className="fa fa-check"></i> Billing</li>
                               <li className="list-group-item list-group-item-success"><i className="fa fa-check"></i> 2 Project boards</li>
                               <li className="list-group-item list-group-item-success"><i className="fa fa-check"></i> 1 User per board</li>
                               <li className="list-group-item list-group-item-success"><i className="fa fa-check"></i> 0,00£ per month</li>
                               <li className="list-group-item list-group-item-danger"><i className="fa fa-times"></i> Collaborative boards</li>
                             </ul>
                           </div>

                           <div className="service-desc" align="center">
                             <button type="button">
                               <i className="fa fa-github-alt fa-2x"></i>
                               <span className="sec-title text-center">Join Free!</span>
                             </button>
                           </div>

                         </div>
                       </div>

                       <div className="col-md-4 wow fadeInUp" data-wow-duration="500ms" data-wow-delay="500ms">
                         <div className="service-item">
                           <div className="service-icon">
                             <i className="fa fa-hand-spock-o fa-2x"></i>
                           </div>

                           <div className="service-desc">
                             <h3>Startup Account</h3>
                             <p>The perfect service for startups, low cost and collaborative boards on real time:</p>
                             <br/>
                             <ul className="list-group">
                               <li className="list-group-item list-group-item-success"><i className="fa fa-check"></i> Reporting</li>
                               <li className="list-group-item list-group-item-success"><i className="fa fa-check"></i> Billing</li>
                               <li className="list-group-item list-group-item-success"><i className="fa fa-check"></i> 20 Project boards</li>
                               <li className="list-group-item list-group-item-success"><i className="fa fa-check"></i> 10 User per board</li>
                               <li className="list-group-item list-group-item-success"><i className="fa fa-check"></i> 9,99£ per month</li>
                               <li className="list-group-item list-group-item-success"><i className="fa fa-check"></i> Collaborative boards</li>
                             </ul>
                           </div>

                           <div className="service-desc" align="center">
                             <button type="button">
                               <i className="fa fa-hand-spock-o fa-2x"></i>
                               <span className="text-center">Join now!</span>
                             </button>
                           </div>

                         </div>
                       </div>

                       <div className="col-md-4 wow fadeInRight" data-wow-duration="500ms"  data-wow-delay="900ms">
                         <div className="service-item">
                           <div className="service-icon">
                             <i className="fa fa-building fa-2x"></i>
                           </div>

                           <div className="service-desc">
                             <h3>Enterprise Account</h3>
                             <p>A big service for big Business, excellent cost, extra views and more powerfull boards:</p>
                             <br/>
                             <ul className="list-group">
                               <li className="list-group-item list-group-item-success"><i className="fa fa-check"></i> Reporting</li>
                               <li className="list-group-item list-group-item-success"><i className="fa fa-check"></i> Billing</li>
                               <li className="list-group-item list-group-item-success"><i className="fa fa-check"></i> 200 Project boards</li>
                               <li className="list-group-item list-group-item-success"><i className="fa fa-check"></i> 50 User per board</li>
                               <li className="list-group-item list-group-item-success"><i className="fa fa-check"></i> 99,99£ per month</li>
                               <li className="list-group-item list-group-item-success"><i className="fa fa-check"></i> Collaborative boards</li>
                             </ul>
                           </div>
                           <div className="service-desc" align="center">
                             <button type="button">
                               <i className="fa fa-building fa-2x"></i>
                               <span className="text-center">Join now!</span>
                             </button>
                           </div>
                         </div>
                       </div>

                     </div>
                   </div>
                 </section>

                 <section id="team" className="team">
                   <div className="container">
                     <div className="row">

                       <div className="sec-title text-center wow fadeInUp animated" data-wow-duration="700ms">
                         <h2>Meet Our Team</h2>
                         <div className="devider"><i className="fa fa-heart-o fa-lg"></i></div>
                       </div>

                       <div className="sec-sub-title text-center wow fadeInRight animated" data-wow-duration="500ms">
                         <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore</p>
                       </div>

                       <figure className="team-member col-md-3 col-sm-6 col-xs-12 text-center wow fadeInUp animated" data-wow-duration="500ms">
                         <div className="member-thumb">
                           <img src="img/team/member-1.png" alt="Team Member" className="img-responsive"/>
                           <figcaption className="overlay">
                             <h5>voluptatem quia voluptas </h5>
                             <p>sit aspernatur aut odit aut fugit,</p>
                             <ul className="social-links text-center">
                               <li><a href=""><i className="fa fa-twitter fa-lg"></i></a></li>
                               <li><a href=""><i className="fa fa-facebook fa-lg"></i></a></li>
                               <li><a href=""><i className="fa fa-google-plus fa-lg"></i></a></li>
                             </ul>
                           </figcaption>
                         </div>
                         <h4>John Filmr Doe</h4>
                         <span>Managing Director</span>
                       </figure>

                       <figure className="team-member col-md-3 col-sm-6 col-xs-12 text-center wow fadeInUp animated" data-wow-duration="500ms" data-wow-delay="300ms">
                         <div className="member-thumb">
                           <img src="img/team/member-2.png" alt="Team Member" className="img-responsive"/>
                           <figcaption className="overlay">
                             <h5>voluptatem quia voluptas </h5>
                             <p>sit aspernatur aut odit aut fugit,</p>
                             <ul className="social-links text-center">
                               <li><a href=""><i className="fa fa-twitter fa-lg"></i></a></li>
                               <li><a href=""><i className="fa fa-facebook fa-lg"></i></a></li>
                               <li><a href=""><i className="fa fa-google-plus fa-lg"></i></a></li>
                             </ul>
                           </figcaption>
                         </div>
                         <h4>Martin Matrone</h4>
                         <span>Lead Developer</span>
                       </figure>

                       <figure className="team-member col-md-3 col-sm-6 col-xs-12 text-center wow fadeInUp animated" data-wow-duration="500ms" data-wow-delay="600ms">
                         <div className="member-thumb">
                           <img src="img/team/member-3.png" alt="Team Member" className="img-responsive"/>
                           <figcaption className="overlay">
                             <h5>voluptatem quia voluptas </h5>
                             <p>sit aspernatur aut odit aut fugit,</p>
                             <ul className="social-links text-center">
                               <li><a href=""><i className="fa fa-twitter fa-lg"></i></a></li>
                               <li><a href=""><i className="fa fa-facebook fa-lg"></i></a></li>
                               <li><a href=""><i className="fa fa-google-plus fa-lg"></i></a></li>
                             </ul>
                           </figcaption>
                         </div>
                         <h4>Steve Flaulkin</h4>
                         <span>Sr. UI Designer</span>
                       </figure>

                       <figure className="team-member col-md-3 col-sm-6 col-xs-12 text-center wow fadeInUp animated" data-wow-duration="500ms" data-wow-delay="900ms">
                         <div className="member-thumb">
                           <img src="img/team/member-1.png" alt="Team Member" className="img-responsive"/>
                           <figcaption className="overlay">
                             <h5>voluptatem quia voluptas </h5>
                             <p>sit aspernatur aut odit aut fugit,</p>
                             <ul className="social-links text-center">
                               <li><a href=""><i className="fa fa-twitter fa-lg"></i></a></li>
                               <li><a href=""><i className="fa fa-facebook fa-lg"></i></a></li>
                               <li><a href=""><i className="fa fa-google-plus fa-lg"></i></a></li>
                             </ul>
                           </figcaption>
                         </div>
                         <h4>John Filmr Doe</h4>
                         <span>Managing Director</span>
                       </figure>

                     </div>
                   </div>
                 </section>

                 <section id="contact" className="contact">
                   <div className="container">
                     <div className="row mb50">

                       <div className="sec-title text-center mb50 wow fadeInDown animated" data-wow-duration="500ms">
                         <h2>Let’s Discuss</h2>
                         <div className="devider"><i className="fa fa-heart-o fa-lg"></i></div>
                       </div>

                       <div className="sec-sub-title text-center wow rubberBand animated" data-wow-duration="1000ms">
                         <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore</p>
                       </div>

                       <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12 wow fadeInLeft animated" data-wow-duration="500ms">
                         <div className="contact-address">
                           <h3>Cras at ultrices erat, sed vulputate!</h3>
                           <p>2345 Setwant natrer, 1234,</p>
                           <p>Washington. United States.</p>
                           <p>(401) 1234 567</p>
                         </div>
                       </div>

                       <div className="col-lg-8 col-md-8 col-sm-7 col-xs-12 wow fadeInDown animated" data-wow-duration="500ms" data-wow-delay="300ms">
                         <div className="contact-form">
                           <h3>Say hello!</h3>
                           <form action="#" id="contact-form">
                             <div className="input-group name-email">
                               <div className="input-field">
                                 <input type="text" name="name" id="name" placeholder="Name" className="form-control"/>
                               </div>
                               <div className="input-field">
                                 <input type="email" name="email" id="email" placeholder="Email" className="form-control"/>
                               </div>
                             </div>
                             <div className="input-group">
                               <textarea name="message" id="message" placeholder="Message" className="form-control"></textarea>
                             </div>
                             <div className="input-group">
                               <input type="submit" id="form-submit" className="pull-right" value="Send message"/>
                             </div>
                           </form>
                         </div>
                       </div>

                       <div className="col-lg-1 col-md-1 col-sm-1 col-xs-12 wow fadeInRight animated" data-wow-duration="500ms" data-wow-delay="600ms">
                         <ul className="footer-social">
                           <li><a href="https://www.behance.net/Themefisher"><i className="fa fa-behance fa-2x"></i></a></li>
                           <li><a href="https://www.twitter.com/Themefisher"><i className="fa fa-twitter fa-2x"></i></a></li>
                           <li><a href="https://dribbble.com/themefisher"><i className="fa fa-dribbble fa-2x"></i></a></li>
                           <li><a href="https://www.facebook.com/Themefisher"><i className="fa fa-facebook fa-2x"></i></a></li>
                         </ul>
                       </div>

                     </div>
                   </div>

                 </section>

                 <footer id="footer" className="footer">
                   <div className="container">
                     <div className="row">

                       <div className="col-md-3 col-sm-6 col-xs-12 wow fadeInUp animated" data-wow-duration="500ms">
                         <div className="footer-single">
                           <img src="img/footer-logo.png" alt=""/>
                           <p>eusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                         </div>
                       </div>

                       <div className="col-md-3 col-sm-6 col-xs-12 wow fadeInUp animated" data-wow-duration="500ms" data-wow-delay="300ms">
                         <div className="footer-single">
                           <h6>Subscribe </h6>
                           <form action="#" className="subscribe">
                             <input type="text" name="subscribe" id="subscribe"/>
                             <input type="submit" value="&#8594;" id="subs"/>
                           </form>
                           <p>eusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                         </div>
                       </div>

                       <div className="col-md-3 col-sm-6 col-xs-12 wow fadeInUp animated" data-wow-duration="500ms" data-wow-delay="600ms">
                         <div className="footer-single">
                           <h6>Explore</h6>
                           <ul>
                             <li><a href="#">Inside Us</a></li>
                             <li><a href="#">Flickr</a></li>
                             <li><a href="#">Google</a></li>
                             <li><a href="#">Forum</a></li>
                           </ul>
                         </div>
                       </div>

                       <div className="col-md-3 col-sm-6 col-xs-12 wow fadeInUp animated" data-wow-duration="500ms" data-wow-delay="900ms">
                         <div className="footer-single">
                           <h6>Support</h6>
                           <ul>
                             <li><a href="#">Contact Us</a></li>
                             <li><a href="#">Market Blog</a></li>
                             <li><a href="#">Help Center</a></li>
                             <li><a href="#">Pressroom</a></li>
                           </ul>
                         </div>
                       </div>

                     </div>
                     <div className="row">
                       <div className="col-md-12">
                         <p className="copyright text-center">
                           Copyright © 2015 <a href="http://themefisher.com/">Themefisher</a>. All rights reserved. Designed & developed by <a href="http://themefisher.com/">Themefisher</a>
                         </p>
                       </div>
                     </div>
                   </div>
                 </footer>
           </div>
           )}
}
