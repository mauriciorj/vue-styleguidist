const args = require('minimist')(process.argv.slice(2))
const path = require('path')
const fs = require('fs')

var [exampleName, command] = args._

const arg = exampleName

if (!exampleName) {
	exampleName = 'basic'
}

const examplePath = path.join(__dirname, '..', 'examples', exampleName)

process.argv[2] = command === 'dev' ? '--watch' : undefined
process.argv[3] = '--cwd'
process.argv[4] = examplePath

require('../packages/vue-docgen-cli/lib/bin.js')

if (command) {
	if (/nuxt/.test(arg)) {
		console.log('unsupported')
	} else if (fs.existsSync(path.join(examplePath, 'docs', '.vuepress', 'config.js'))) {
		process.argv[2] = command
		process.argv[3] = path.join(examplePath, 'docs')
		require('vuepress/cli')
	}
}
