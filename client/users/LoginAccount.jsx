import React, {Component} from 'react';
import FooterPage from '../home/FooterPage.jsx';

const AccountUI = BlazeToReact('atForm');

export default class LoginAccount extends Component {
  render () {
    const currentPanel = Meteor.userId() ? <p>Welcome!</p> : <AccountUI/>
    return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-4 col-xs-3"></div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <div className="login-modal">
              {currentPanel}
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3"></div>
        </div>
      </div>
    </div>
    )
  }
}
