/**
 * Created by Roy on 2017/1/17.
 */

import React from "react";

class myApp extends React.Component{
    render(){
        var component = "<h1>Hello</h1>";
        return component;
    }
}

React.render(<myApp />,document.getElementById("wapper"));