var mongoose = require('mongoose');
//定义模型
var CommentSchema = new mongoose.Schema({
	body: String,
	title: String,
	author: String
});

//定义数据库方法
CommentSchema.statics = {
	// 查询出列表
	list: function(cb) {
		return this
			.find({})
			.sort('body')
			.exec(cb)
	}
};

module.exports = CommentSchema;