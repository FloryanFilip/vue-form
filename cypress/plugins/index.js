const webpack = require('@cypress/webpack-preprocessor');

module.exports = (on, config) => {
	on('file:preprocessor', webpack({
	 webpackOptions: require('@vue/cli-service/webpack.config'),
	 watchOptions: {}
	}))
};
