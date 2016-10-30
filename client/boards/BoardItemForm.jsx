import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

export default class BoardItemForm extends Component {

  addBoard (event) {
    event.preventDefault();
    Meteor.call("addListBoard", function(error, result){
      if(error){
        Bert.alert('I cant add the item', 'danger', 'growl-top-right' );
      }
      else{
        Bert.alert({
          type: 'item-added',
          style: 'growl-top-right',
          title: 'Item Added',
          message: 'Test Board List Tracker',
          icon: 'fa-list-alt'
        });
      }
    });
  }

  render () {
    return (
        <div className="board-form col-sm-12 col-xs-12">
            <input type="text" name="BoardName"
              placeholder="Type your name board"/>
            <button type="button" onClick={this.addBoard.bind(this)}>
              <i className="fa fa-plus-square fa-1x" aria-hidden="true"></i>
              &nbsp;Create Board
            </button>
        </div>
    )
  }

}
