import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import { FlowRouter } from 'meteor/kadira:flow-router';

export default class Items extends TrackerReact(Component) {

  render () {
    return (
      <div className="row">
        <div className="item-title col-sm-12">
          {this.props.key}
          <div className="row">
            <div className="col-xs-4 col-sm-4">
              {this.props.description.description}
            </div>
          </div>
        </div>
          <a href="#" className="pull-right delete-button">
            <i className="fa fa-trash fa-2x"></i>
          </a>
      </div>
      )
  }
}
