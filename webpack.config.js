const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
	entry: './src/app.ts',
	target:'node',
	externals: [nodeExternals()],
	devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
	},
  resolve: {
		alias: {
			process:"process/browser"
		},
		extensions: ['.ts', '.js' ],
		fallback: {
			"assert": false,
			"buffer": false,
			"console": false,
			"constants": false,
			"crypto": false,
			"domain": false,
			"events": false,
			"http": false,
			"https": false,
			"os": false,
			"path": false,
			"punycode": false,
			"process": false,
			"querystring": false,
			"stream": false,
			"_stream_duplex": false,
			"_stream_passthrough": false,
			"_stream_readable": false,
			"_stream_transform": false,
			"_stream_writable": false,
			"string_decoder": false,
			"sys": false,
			"timers": false,
			"tty": false,
			"url": false,
			"util": false,
			"vm": false,
			"zlib": false,
			"target": "node"
		},
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
	},
}