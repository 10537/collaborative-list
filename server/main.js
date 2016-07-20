import { Meteor } from 'meteor/meteor';

Meteor.methods({
	addListBoard() {
		//check(resolution, String);

		if (!Meteor.userId()) {
			throw new Meteor.Error("Not-Authorized");
		}
			listBoards.insert({
				name: 'New Board',
        description: 'Example Board for prototipe',
				createdAt: new Date(),
				owner: Meteor.userId()
		});
	},
});
