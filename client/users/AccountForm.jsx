import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

const AccountUI = BlazeToReact('atForm');

export default class AccountForm extends TrackerReact(Component) {
  render () {
    return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-4 col-xs-3"></div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">

              <div className="login-modal">
                <AccountUI/>
              </div>

          </div>
          <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3"></div>
        </div>
      </div>
    </div>
    )
  }
}
