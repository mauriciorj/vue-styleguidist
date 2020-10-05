module.exports = {
	docsRepo: 'vue-styleguidist/vue-styleguidist',
	docsBranch: 'dev',
	docsFolder: 'examples/docgen-nuxt',
	componentsRoot: 'components',
	components: '**/[A-Z]*.vue',
	outDir: './docs/components',
	defaultExamples: true,
	getDestFile: componentPath => {
		return componentPath.replace(/\/\w+\.vue$/, '.md')
	}
}
