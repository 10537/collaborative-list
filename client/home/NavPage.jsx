import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import { FlowRouter } from 'meteor/kadira:flow-router';

export default class NavBar extends TrackerReact (Component) {
        logoutAccount (event) {
          event.preventDefault();
          Meteor.logout();
          FlowRouter.go('/login');
        }

        render() {
           const currentUser = Meteor.userId() ? <li className="logout"><a href="#" onClick={this.logoutAccount.bind(this)}>Logout</a></li> : <li><a href="/login">Login</a></li>;
           return (
             <header id="navigation" className="navbar-fixed-top navbar">
                 <div className="container">
                    <div className="navbar-header">
                       <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                           <span className="sr-only">Toggle navigation</span>
                           <i className="fa fa-bars fa-2x"></i>
                       </button>
                       <a className="navbar-brand" href="/">
                         <h1 id="logo">
                           <img src="img/logo.png" alt="Collaborative"/>
                         </h1>
                       </a>
                    </div>
                    <nav className="collapse navbar-collapse navbar-right" role="navigation">
                       <ul id="nav" className="nav navbar-nav">
                           <li className="current"><a href="/">Home</a></li>
                           <li><a href="#features">Pricing</a></li>
                           <li><a href="#team">Team</a></li>
                           <li><a href="#contact">Contact</a></li>
                           { currentUser }
                       </ul>
                    </nav>
                 </div>
             </header>
           )
         }
}
