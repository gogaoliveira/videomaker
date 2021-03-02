const readline = require('readline-sync')
const robots = {
	text: require('./robots/text.js')
}

function start(){
	const content = {}

	content.searchTerm = askAndReturnSearchTerm()
	content.prefix = askAndReturnPrefix()

	robots.text(content)

	function askAndReturnSearchTerm(){
		return readline.question('escolha o termo no Wikipedia: ')
	}

	function askAndReturnPrefix(){
		const prefixes = ['Quem e', 'O que e', 'a Historia do']
		const selectedPrefixIndex = readline.keyInSelect(prefixes, 'Escolha uma opcao')
		const selectedPrefixText = prefixes[selectedPrefixIndex]

		return selectedPrefixText
	}

	console.log(content)


}
start()
