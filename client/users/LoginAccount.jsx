import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import FooterPage from '../home/FooterPage.jsx';
import MainBoard from '../boards/MainBoard.jsx';
import AccountForm from './AccountForm.jsx';

export default class LoginAccount extends TrackerReact(Component) {
  render () {
    const currentPanel = Meteor.userId() ? <MainBoard/> : <AccountForm/>
    return (
    <div>
        {currentPanel}
    </div>
    )
  }
}
