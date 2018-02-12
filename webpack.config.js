const path = require('path');

module.exports = {
	context: path.resolve(__dirname, 'react-app'),
	performance: {
		hints: 'warning'
	},

	entry: {
		'app': ['react-dom', 'ngReact', 'app']
	},

	externals: {
		angular: 'angular'
	},

	resolve: {
		modules: ['node_modules', path.resolve(__dirname, 'react-app')],
		extensions: ['.js', '.json']
	},

	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js',
		libraryTarget: 'var',
		library: 'ReactEntry'
	},

	plugins: [],

	module: {
		rules: [
		{
			test: /\.js$/,
			exclude: /(node_modules)/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['babel-preset-react']
				}
			}
		},
		{
			test: require.resolve('ngReact'),
			use: [{
				loader: 'expose-loader',
				options: 'ngReact'
			}]
		}
		]
	}
};