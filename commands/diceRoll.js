// diceRoll.js

const Math = require('mathjs');

function getRandomNumber(minimum, maximum) {
	const min = Math.ceil(minimum);
	const max = Math.floor(maximum);
	return Math.floor(Math.random() * (max - min + 1) + min);
}
// export the commands to be accessible by other files
module.exports = {
	name: 'roll',
	description: 'Rolls any given dice',
	execute(message, args) {
		const argument = args[0];
		// return message if no arguments are provided
		if(!args.length) {
			return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
		}
		// Roll D4 Die
		else if (argument === 'd4') {
			return message.channel.send(`${message.author} rolled: ` + getRandomNumber(1, 4));
		}
		// Roll D6 Die
		else if (argument === 'd6') {
			message.channel.send(`${message.author} rolled: ` + getRandomNumber(1, 6));
		}
		// Roll D8 Die
		else if (argument === 'd8 ') {
			message.channel.send(`${message.author} rolled: ` + getRandomNumber(1, 8));
		}
		// Roll D12 Die
		else if (argument === 'd12') {
			message.channel.send(`${message.author} rolled: ` + getRandomNumber(1, 12));
		}
		// Roll D20 Die
		else if (argument === 'd20') {
			message.channel.send(`${message.author} rolled: ` + getRandomNumber(1, 20));
		}
		// Roll Percent Die
		else if (argument === 'percent') {
			message.channel.send(`${message.author} rolled: ` + getRandomNumber(0, 99));
		}
		// return message explaining different arguments
		else if (argument === 'help') {
			message.channel.send('The commands for roll are: d4, d6, d8, d12, d20, percent.');
		}
	},
};
