const path = require('path')

module.exports = {
	docsRepo: 'vue-styleguidist/vue-styleguidist',
	docsBranch: 'dev',
	docsFolder: 'examples/docgen-nuxt',
	componentsRoot: 'components',
	components: '**/[A-Z]*.vue',
	outDir: './docs/en',
	defaultExamples: true,
	getDestFile: (componentPath, config) => {
		return path.join(config.outDir, componentPath).replace(/\/\w+\.vue$/, '.md')
	},
	templates: {
		component: function component(
			renderedUsage,
			doc,
			config,
			fileName,
			requiresMd,
			{ isSubComponent }
		) {
			const { functional, displayName, description, docsBlocks, tags } = doc
			const { author, since, version, see, link, order } = tags || {}
			const frontMatter = []

			if (!isSubComponent) {
				frontMatter.push(`title: "${displayName}"`)
				frontMatter.push('category: "components"')
				if (order) {
					frontMatter.push(`position: ${order[0].description}`)
				}
			}

			return `${
				frontMatter.length
					? `---
${frontMatter.join('\n')}
---`
					: ''
			}

${isSubComponent ? `# ${displayName}` : ''}

${description}

${functional ? renderedUsage.functionalTag : ''}
${author ? author.map(a => `Author: ${a.description}\n`) : ''}
${since ? `Since: ${since[0].description}\n` : ''}
${version ? `Version: ${version[0].description}\n` : ''}
${see ? see.map(s => `[See](${s.description})\n`) : ''}
${link ? link.map(l => `[See](${l.description})\n`) : ''}

${renderedUsage.props}
${renderedUsage.methods}
${renderedUsage.events}
${renderedUsage.slots}
${docsBlocks ? '---\n' + docsBlocks.join('\n---\n') : ''}
${requiresMd.length ? '---\n' + requiresMd.map(component => component.content).join('\n---\n') : ''}
`
		}
	}
}
