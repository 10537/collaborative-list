import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import BoardItem from './BoardItem.jsx';
import BoardItemForm from './BoardItemForm.jsx';

listBoards = new Mongo.Collection("listBoards");

export default class MainBoard extends TrackerReact(Component) {

  constructor () {
    super();
    const listboards = Meteor.subscribe("userListBoards");
    this.state = {
      ready: listboards.ready(),
      subscription: listboards,
    }
  }

  componentWillUnmount() {
    this.state.subscription.stop();
  }

  boardItems () {
    return listBoards.find({}).fetch();
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
            <div className="button-content center">
              <BoardItemForm/>
            <button type="button" onClick={this.addBoard.bind(this)}>
              <i className="fa fa-plus-square fa-1x" aria-hidden="true"></i>
              &nbsp;Add
            </button>
            </div>
            <div className="pull-right">
              Welcome User {this.state.ready}!
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
