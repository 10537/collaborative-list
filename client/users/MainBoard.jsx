import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

export default class MainBoard extends TrackerReact(Component) {
  render () {
    return (
      <div>
        <div className="main-board">
          Hello User!
        </div>
      </div>
      )
  }
}
