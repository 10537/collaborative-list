import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import TeamPage from './TeamPage.jsx';
import ContactPage from './ContactPage.jsx';

export default class HomePage extends TrackerReact(Component) {
        render() {
           return (
             <div>
                <div className="container">
                   <div className="row">
                     <div className="col-xs-12 col-md-12">
                       <img src="img/banner.jpg" alt="img" width="100%"/>
                     </div>
                   </div>
                 </div>
                 <section id="features" className="features">
                   <div className="container">
                     <div className="row">

                       <div className="sec-title text-center mb50 wow bounceInDown animated" data-wow-duration="500ms">
                         <h2>Pricing</h2>
                         <div className="devider"><i className="fa fa-heart-o fa-lg"></i></div>
                       </div>

                       <div className="col-md-6 wow fadeInLeft" data-wow-duration="500ms">
                         <div className="service-item">
                           <div className="service-icon">
                             <i className="fa fa-github-alt fa-2x"></i>
                           </div>

                           <div className="service-desc">
                             <h3>Developer Account</h3>
                             <p>Perfect for freelancer developers and personal use:</p>
                             <br/>
                             <ul className="list-group">
                               <li className="list-group-item"><i className="fa fa-times"></i> Reporting</li>
                               <li className="list-group-item"><i className="fa fa-times"></i> Billing</li>
                               <li className="list-group-item"><i className="fa fa-check"></i> 1 Project list</li>
                               <li className="list-group-item"><i className="fa fa-check"></i> 2 User per list</li>
                               <li className="list-group-item"><i className="fa fa-check"></i> 0,00£ per month</li>
                               <li className="list-group-item"><i className="fa fa-check"></i> Collaborative list</li>
                             </ul>
                           </div>

                           <div className="service-desc">
                             <button type="button">
                               <i className="fa fa-github-alt fa-2x"></i>
                               <span className="sec-title text-center">Join Free!</span>
                             </button>
                           </div>

                         </div>
                       </div>

                       <div className="col-md-6 wow fadeInUp" data-wow-duration="500ms" data-wow-delay="500ms">
                         <div className="service-item">
                           <div className="service-icon">
                             <i className="fa fa-hand-spock-o fa-2x"></i>
                           </div>

                           <div className="service-desc">
                             <h3>Startup Account</h3>
                             <p>The perfect service for startups, low cost and collaborative boards on real time:</p>
                             <br/>
                             <ul className="list-group">
                               <li className="list-group-item"><i className="fa fa-check"></i> Reporting</li>
                               <li className="list-group-item"><i className="fa fa-check"></i> Billing</li>
                               <li className="list-group-item"><i className="fa fa-check"></i> 5 Project list</li>
                               <li className="list-group-item"><i className="fa fa-check"></i> 10 User per list</li>
                               <li className="list-group-item"><i className="fa fa-check"></i> 9,99£ per month</li>
                               <li className="list-group-item"><i className="fa fa-check"></i> Collaborative list</li>
                             </ul>
                           </div>

                           <div className="service-desc">
                             <button type="button">
                               <i className="fa fa-hand-spock-o fa-2x"></i>
                               Join now!
                             </button>
                           </div>

                         </div>
                       </div>

                     </div>
                   </div>
                 </section>
                 <TeamPage />
                 <ContactPage />
           </div>
           )}
}
