import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import Items from './Items.jsx';

listItems = new Mongo.Collection("listItems");

export default class MainList extends TrackerReact(Component) {

  constructor () {
    super();
    const listitems = Meteor.subscribe("userListItems");
    this.state = {
      ready: listitems.ready(),
      subscription: listitems,
    }
  }

  componentWillUnmount() {
    this.state.subscription.stop();
  }

  listItems () {
    return listItems.find({}).fetch();
  }

  addListItem (event) {
    event.preventDefault();
    Meteor.call("addListItem", function(error, result){
      if(error){
        Bert.alert('I cant add the item', 'danger', 'growl-top-right' );
      }
      else{
        Bert.alert({
          type: 'item-added',
          style: 'growl-top-right',
          title: 'Item Added',
          message: 'Test Item',
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
            <h2>Tasks List</h2>
            <div className="devider"><i className="fa fa-heart-o fa-lg"></i></div>
          </div>
          <div className="main-board">
            <div className="task-btn pull-right">
              <button type="button">
                <i className="fa fa-cogs fa-1x" aria-hidden="true"></i>
              </button>
            </div>
            <div className="list-items">
              <ul className="nav nav-tabs">
                <li role="presentation" className="active"><a href="#">
                  <span className="label label-primary">TO DO</span></a>
                </li>
                <li role="presentation"><a href="#">
                  <span className="label label-warning">DOING</span></a>
                </li>
                <li role="presentation"><a href="#">
                  <span className="label label-success">DONE</span></a>
                </li>
              </ul>
            </div>
            <div className="board-item">
              <div className="task-btn">
                <button type="button" onClick={this.addListItem.bind(this)}>Create</button>
              </div>
              {this.listItems().map( (item)=>{
                return <Items key={item._id} description={item}/>
              })}
            </div>
          </div>
        </div>
      </div>
      )
  }
}
