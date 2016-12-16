var mongoose = require('mongoose'),
	CommentSchema = require('../schemas/CommentSchema'),
	Comment = mongoose.model('comments', CommentSchema);

module.exports = Comment;