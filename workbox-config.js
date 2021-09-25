module.exports = {
	globDirectory: 'public/',
	globPatterns: [
		'**/*.{css,ttf,png,ico,html,js,json,txt}'
	],
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	],
	swDest: 'public/service-worker.js'
};