import React, {Component} from 'react';

export default class ContactPage extends Component {
  render () {
    return (
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
    )
  }
}
