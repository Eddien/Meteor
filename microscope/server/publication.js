Meteor.publish('posts', function() {
	return Posts.find({'author':'Eddie'});
});