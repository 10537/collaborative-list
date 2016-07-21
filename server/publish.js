listBoards = new Mongo.Collection("listBoards");

Meteor.publish("allListBoards", function(){
		return listBoards.find();
});

Meteor.publish("userListBoards", function(){
		return listBoards.find({owner: this.userId});
});
