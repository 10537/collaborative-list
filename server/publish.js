listBoards = new Mongo.Collection("listBoards");
listItems = new Mongo.Collection("listItems");

Meteor.publish("allListBoards", function(){
		return listBoards.find();
});

Meteor.publish("userListBoards", function(){
		return listBoards.find({owner: this.userId});
});

Meteor.publish("userListItems", function(){
		return listItems.find({owner: this.userId});
});
