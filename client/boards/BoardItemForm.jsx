import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

export default class BoardItemForm extends Component {

  deleteBoard () {
    Meteor.call("deleteListBoard", this.props.boarditem)
  }

  goToBoard () {
    Bert.alert('Click event Testing', 'danger', 'growl-top-right' );
  }

  render () {
    return (
      <div className="row">
        <div className="board-form col-sm-12"
          onClick={this.goToBoard.bind(this)}>
            <input type="text" name="BoardName"
              placeholder="Type your name board"/>
        </div>
      </div>
    )
  }

}
