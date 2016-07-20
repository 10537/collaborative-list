import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

listBoards = new Mongo.Collection("listBoards");

export default class MainBoard extends TrackerReact(Component) {
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

  boardItems () {
    return listBoards.find().fetch();
  }
  render () {
    return (
      <div>
        <div className="main-board">
          <div className="button-content">
          <button type="button" onClick={this.addBoard.bind(this)}>
            <i className="fa fa-plus-square" aria-hidden="true"></i>
            &nbsp;Add
          </button>
          </div>
          <div className="board-item">
            {this.boardItems().map( (item)=>{
    					return <div key={item._id}><p>{item.name}</p><p>{item.description}</p></div>
    				})}
          </div>
        </div>
      </div>
      )
  }
}
