/**
 * Created by Roy on 2017/2/8.
 */

var button = React.createClass({
    render:function(){
        return (<div><input type="button" value="确定" /></div>);
    }
});


ReactDOM.render(button,document.getElementById("btn"));