if (Posts.find().count() === 0) {
	Posts.insert({
		title: "Introducing Telescope",
		author: 'Eddie',
		url: 'http://sachagreif.com'
	});
	Posts.insert({
		title: "Meteor",
		author: 'Tom',
		url: 'http://meteor.com'
	});
	Posts.insert({
		title: "The Meteor Book",
		author: 'Eddie',
		url: 'http://themeteorbook.com'
	});
}