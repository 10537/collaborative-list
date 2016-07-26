import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import BoardItem from './BoardItem.jsx';

listBoards = new Mongo.Collection("listBoards");

export default class MainBoard extends TrackerReact(Component) {

  constructor () {
    super();
    this.state = {
      subscription: {
        listboards: Meteor.subscribe("userListBoards")
      }
    }
  }

  componentwillUnmount() {
    this.state.subscription.listboards.stop();
  }

  boardItems () {
    return listBoards.find().fetch();
  }

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
      <div className="container">
        <div className="row">
          <div className="sec-title text-center">
            <h2>List Dashboard</h2>
            <div className="devider"><i className="fa fa-heart-o fa-lg"></i></div>
          </div>
          <div className="main-board">
            <div className="button-content">
            <button type="button" onClick={this.addBoard.bind(this)}>
              <i className="fa fa-plus-square" aria-hidden="true"></i>
              &nbsp;Add
            </button>
            </div>
            <div className="board-item">
              {this.boardItems().map( (item)=>{
      					return <BoardItem key={item._id} boarditem={item}/>
      				})}
            </div>
          </div>
        </div>
      </div>
      )
  }
}
