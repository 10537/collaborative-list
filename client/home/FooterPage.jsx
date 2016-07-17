import React, {Component} from 'react';

export default class FooterPage extends Component {
        render() {
           return (
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
          )
      }
}
