const readline = require('readline-sync')
const robots = {
	text: require('./robots/text.js')
}

function start(){
	const content = {
		maximumSentences: 7
	}

	content.searchTerm = askAndReturnSearchTerm()
	content.prefix = askAndReturnPrefix()

	robots.text(content)

	function askAndReturnSearchTerm(){
		return readline.question('escolha o termo no Wikipedia: ')
	}

	function askAndReturnPrefix(){
		const prefixes = ['who is', 'What is', 'The history of']
		const selectedPrefixIndex = readline.keyInSelect(prefixes, 'Escolha uma opcao')
		const selectedPrefixText = prefixes[selectedPrefixIndex]

		return selectedPrefixText
	}

	console.log(JSON.stringify(content, null, 4))


}
start()
