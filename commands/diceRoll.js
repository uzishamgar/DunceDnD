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
		const die = args[0];
		const number = args[1] || 1;
		let i = 0;
		let rollString = '';
		// return message if no arguments are provided
		if(!args.length) {
			return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
		}
		// Roll D4 Die the given number of times
		else if (die === 'd4') {
			for (i = 0; i < number; i++) {
				if(i === number - 1) {
					rollString = rollString + getRandomNumber(1, 4);
				}
				else {
					rollString = rollString + getRandomNumber(1, 4) + ', ';
				}
			}
			message.channel.send(`${message.author} rolled: ` + rollString);
		}
		// Roll D6 Die the given number of times
		else if (die === 'd6') {
			for (i = 0; i < number; i++) {
				if(i === number - 1) {
					rollString = rollString + getRandomNumber(1, 6);
				}
				else {
					rollString = rollString + getRandomNumber(1, 6) + ', ';
				}
			}
			message.channel.send(`${message.author} rolled: ` + rollString);
		}
		// Roll D8 Die the given number of times
		else if (die === 'd8 ') {
			for (i = 0; i < number; i++) {
				if(i === number - 1) {
					rollString = rollString + getRandomNumber(1, 8);
				}
				else {
					rollString = rollString + getRandomNumber(1, 8) + ', ';
				}
			}
			message.channel.send(`${message.author} rolled: ` + rollString);
		}
		// Roll D12 Die the given number of times
		else if (die === 'd12') {
			for (i = 0; i < number; i++) {
				if(i === number - 1) {
					rollString = rollString + getRandomNumber(1, 12);
				}
				else {
					rollString = rollString + getRandomNumber(1, 12) + ', ';
				}
			}
			message.channel.send(`${message.author} rolled: ` + rollString);
		}
		// Roll D20 Die the given number of times
		else if (die === 'd20') {
			for (i = 0; i < number; i++) {
				if(i === number - 1) {
					rollString = rollString + getRandomNumber(1, 20);
				}
				else {
					rollString = rollString + getRandomNumber(1, 20) + ', ';
				}
			}
			message.channel.send(`${message.author} rolled: ` + rollString);
		}
		// Roll Percent Die once
		else if (die === 'percent') {
			message.channel.send(`${message.author} rolled: ` + getRandomNumber(0, 99));
		}
		// return message explaining different arguments
		else if (die === 'help') {
			message.channel.send('The commands for roll are: d4, d6, d8, d12, d20, percent.');
		}
	},
};
