import React, {Component} from 'react';

const AccountUI = BlazeToReact('atForm');

export default class LoginAccount extends Component {
  render () {
    return (
      <div className="login-modal">
        <i className="fa fa-close close-login"/>
        <AccountUI />
      </div>
    )
  }
}
