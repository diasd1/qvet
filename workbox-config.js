module.exports = {
	globDirectory: 'dist/',
	globPatterns: [
		'**/*.{css,ttf,png,ico,html,js,json,txt}'
	],
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	],
	swDest: 'dist/sw.js'
};