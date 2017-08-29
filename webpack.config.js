const webpack = require('webpack');
const path = require('path');

const DIST_DIR = path.resolve(__dirname, 'dist');
const SRC_DIR = path.resolve(__dirname, 'src');

var config = {
	entry: {
		app: SRC_DIR + '/app/index.js'
	},
	output: {
		path: DIST_DIR + '/app',
		filename: 'bundle.js',
		publicPath: '/app/'
	},
	resolve: {
		extensions: ['.js', '.json'],
		alias: {
			'@': SRC_DIR
		}
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				include: SRC_DIR,
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015', 'stage-2']
				}
			}
		]
	}
};


module.exports = config;