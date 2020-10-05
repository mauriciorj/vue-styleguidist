module.exports = {
	target: 'static',
	/*
	 ** Headers of the page
	 */
	head: {
		title: 'styleguide',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: 'Nuxt.js project' }
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
	},
	build: {
		babel: {
			babelrc: true
		}
	},
	modules: ['@nuxt/content'],
	content: {
		dir: 'docs'
	}
}
