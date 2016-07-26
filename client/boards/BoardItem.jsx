import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

export default class BoardItem extends TrackerReact(Component) {
  render () {
    return (
      <div className="row">
        <div className="item-title col-sm-12">
          {this.props.boarditem.name}
          <div className="row">
            <div className="col-xs-4 col-sm-4">
              {this.props.boarditem.description}
            </div>
            <div className="col-xs-4 col-sm-4">
              Users
            </div>
            <div className="col-xs-4 col-sm-4">
              Task Number: 120
            </div>
          </div>
        </div>
      </div>
    )

  }

}
