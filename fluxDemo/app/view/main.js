/*var React = require('react');
var ReactDOM = require('react-dom');

var Header = React.createClass({
	render: function() {
		return (<h3>{this.props.name}</h3>);
	}
});

ReactDOM.render(<Header name="Michael"/>, document.getElementById('wapper'));*/
import React, {
	Component
} from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
	render() {
		return (
			<h1>{this.props.name}</h1>
		)
	}
}
ReactDOM.render(
	<App name="Michael" />, document.getElementById('wapper')
)