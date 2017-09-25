const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const NODE_ENV = process.env.NODE_ENV || 'development';

const PORT = process.env.PORT || 8080;



const server = express();
const compiler = webpack(webpackConfig);

server.set('view engine', 'ejs')
server.set('views', path.join(__dirname, 'dist'));


if(NODE_ENV === 'development') {  

    server.use(webpackDevMiddleware(compiler, {
        publicPath: webpackConfig.output.publicPath
    }));

    server.use(webpackHotMiddleware(compiler));
}
else {
    server.use('/static', express.static(path.join(__dirname, 'dist', 'static')));  
}

server.get("*", (req, res) => {
    res.render('index.ejs');
});


server.listen(PORT, ()=>{
    console.log(`listening to port ${PORT} (${NODE_ENV})`);
});