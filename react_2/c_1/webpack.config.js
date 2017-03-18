/**
 * Created by Roy on 2017/2/8.
 */

var webpack = require('webpack');
var path = require('path');

const BUILD_DIR = path.resolve(__dirname,'dist');
const COMPONENTS_DIR = path.resolve(__dirname,'components');

var config = {
    entry:'./app.js',
    output:{
        path:BUILD_DIR,
        filename:'bundle.js'
    }
};

module.exports = config;