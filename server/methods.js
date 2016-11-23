import { Meteor } from 'meteor/meteor';

Meteor.methods({
	addListBoard(boardname) {
		//check(resolution, String);

		if (!Meteor.userId()) {
			throw new Meteor.Error("Not-Authorized");
		}
			listBoards.insert({
				name: boardname,
        description: 'Example Board for prototipe',
				createdAt: new Date(),
				owner: Meteor.userId()
		});
	},
	deleteListBoard(boarditem) {
		if (!Meteor.userId()) {
			throw new Meteor.Error("Not-Authorized");
		}
		listBoards.remove({_id:boarditem._id});
	},
	
	addListItem(listItemTitle, listItemBoardID) {
		if (!Meteor.userId()) {
			throw new Meteor.Error("Not-Authorized");
		}
			listItems.insert({
				name: 'Sample task',
				description: 'Example task for prototipe',
				createdAt: new Date(),
				boardId: listItemBoardID,
				owner: Meteor.userId()
		});
	},

});
