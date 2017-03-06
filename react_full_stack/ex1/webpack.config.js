module.exports = {
    entry:[__dirname + "/app/main.js"],
    // 输出目录
    output:{
        path: __dirname + "/build",     // 打包的JS 存放的位置
        filename:"bundle.js"           // 打包的JS 文件
    },
    resolve:{
        extensions:['','.js','.jsx']
    },
    module:{
        loaders:[{
            test: /\.js$/,
            exclude: 'node_modules',
            loaders: ['react-hot','babel-loader']
        },{
            test: /\.jsx$/,
            loader: 'babel-loader!jsx-loader?harmony',
            presets:['react','es2015']
        }]
    },
    plugins:{}
}