import React, {Component} from 'react';

export default class TeamPage extends Component {
  render () {
    return (
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

                       <figure className="team-member col-md-6 col-sm-6 col-xs-6 text-center wow fadeInUp animated" data-wow-duration="500ms">
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
                         <h4>Javier Carrasco</h4>
                         <span>Managing Director</span>
                       </figure>

                       <figure className="team-member col-md-6 col-sm-6 col-xs-6 text-center wow fadeInUp animated" data-wow-duration="500ms" data-wow-delay="300ms">
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
                         <h4>José Moreno</h4>
                         <span>Lead Developer</span>
                       </figure>
                     </div>
                   </div>
                 </section>
               )}
}
