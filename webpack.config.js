const config = {
	entry: `${__dirname}/client/src/index.js`,
	output: {
		path: `${__dirname}/client/public/js`,
		filename: 'bundle.js'
	},
	mode: 'development'
};

module.exports = config;
