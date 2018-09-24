const config = {
	entry: `${__dirname}/client/src/index.js`,
	module: {
		rules: [
		  {
			test: /\.js$/,
			exclude: /node_modules/,
			use: {
			  loader: "babel-loader"
			}
		  }
		]
	  },
	resolve: {
		extensions: ['*', '.js', '.jsx']
	},
	output: {
		path: `${__dirname}/client/public/js`,
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: `${__dirname}/client/public/`,
	  },
	mode: 'development'
};

module.exports = config;
