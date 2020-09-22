// coinFlip.js
const Math = require('mathjs');

function getRandomNumber(minimum, maximum) {
	const min = Math.ceil(minimum);
	const max = Math.floor(maximum);
	return Math.floor(Math.random() * (max - min + 1) + min);
}
// export the commands to be accessible by other files
module.exports = {
	name: 'coinflip',
	description: 'flips a coin',
	execute(message) {
		// flip a coin
		const flip = getRandomNumber(0, 1);
		// if no arguments flip coin
		if (flip === 1) {
			message.channel.send(`${message.author}'s coin was HEADS!`);
		}
		else {
			message.channel.send(`${message.author}'s coin was TAILS!`);
		}
	},
};
