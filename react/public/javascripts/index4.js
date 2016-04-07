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
					console.info(i);
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
				<h4>评论列表</h4>
				<div>{this.state.commentData}</div>
			</div>
		)
	}
});

let NoLink = React.createClass({
	getInitialState: function() {
		return {
			message: 'Hello!'
		};
	},
	handleChange: function(event) {
		this.setState({
			message: event.target.value
		});
	},
	render: function() {
		var message = this.state.message;
		return <div>
				<CommentList />
				<hr/>
		    	<input type="text" value={message} onChange={this.handleChange} />
		    	<br/>
		    	<span>{this.state.message}</span>
		    </div>;
	}
});
React.render(
	<NoLink/>,
	document.getElementById('content')
);