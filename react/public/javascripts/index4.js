// 返回COMMENT对象
const CommentItem = React.createClass({
	render: function() {
		return (
			<div>
				<h5>{this.props.c_title}</h5>
				<p>{this.props.c_body}</p>
			</div>
		)
	}
});

const CommentList = React.createClass({
	getInitialState: function() {
		return {
			commentData: []
		}
	},
	componentDidMount: function() {
		var list = [];
		$.ajax({
			url: "./list",
			method: 'get',
			success: function(data) {
				for (var i in data) {
					list.push(<CommentItem c_title={data[i].title} c_body={data[i].body} />);
				}
				this.state.commentData = list;
			}.bind(this),
			error: function() {
				alert("error");
				return false;
			}
		});
	},
	render: function() {
		return (
			<div>
				<CommentItem data={this.state.commentData}></CommentItem>


				<h4>评论列表</h4>
				<div>{this.state.commentData}</div>
			</div>
		)
	}
});

React.render(
	<CommentList/>,
	document.getElementById('content')
);