import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

export default class BoardItem extends Component {

  deleteBoard () {
    Meteor.call("deleteListBoard", this.props.boarditem)
  }

  goToBoard () {
    Bert.alert('Click event Testing', 'danger', 'growl-top-right' );
  }

  render () {
    return (
      <div className="row">
        <div className="item-title col-sm-12" onClick={this.goToBoard.bind(this)}>
          {this.props.boarditem.name}
          <div className="row">
            <div className="col-xs-4 col-sm-4">
              {this.props.boarditem.description}
            </div>
            <div className="col-xs-4 col-sm-4">
              Users
            </div>
            <div className="col-xs-4 col-sm-4">
              Task Number: 124
            </div>
          </div>
        </div>
          <a href="#" className="pull-right delete-button" onClick={this.deleteBoard.bind(this)}>
            <i className="fa fa-trash fa-2x"></i>
          </a>
      </div>
    )

  }

}
