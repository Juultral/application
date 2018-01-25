var path = require("path");
var AggressiveMergingPlugin = require("../../lib/optimize/AggressiveMergingPlugin");
module.exports = {
	entry: "./src/country.js",

	output: {
		path: path.join(__dirname, "js"),
		filename: ".dist/app.bundle.js",
		chunkFilename: "[id].chunk.js"
	},
	plugins: [
		new AggressiveMergingPlugin({
			minSizeReduce: 1.5,
			moveToParents: true
		})
	]
};
