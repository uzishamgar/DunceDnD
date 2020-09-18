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
	execute(message, args) {
		const argument = args[0];
		// flip a coin
		const flip = getRandomNumber(0, 1);
		// if no arguments flip coin
		if(!args.length) {
			// return heads for 1 and tails for 0
			if (flip === 1) {
				message.channel.send(`${message.author}'s coin was HEADS!`);
			}
			else {
				message.channel.send(`${message.author}'s coin was TAILS!`);
			}
		}
		else if (argument === 'help') {
			message.channel.send('coinflip flips a coin and returns heads or tails');
		}
	},
};
