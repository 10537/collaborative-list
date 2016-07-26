import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

export default class BoardItem extends TrackerReact(Component) {

  deleteBoard () {
    Meteor.call("deleteListBoard", this.props.boarditem)
  }

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
            <div className="col-xs-3 col-sm-3">
              Task Number: 120
            </div>
            <div className="col-xs-1 col-sm-1">
              <a href="#" className="pull-right" onClick={this.deleteBoard.bind(this)}>
                <i className="fa fa-trash fa-3x"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    )

  }

}
