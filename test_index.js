// require the discord.js module
const Discord = require('discord.js');
const DiceRoll = require('./diceRoll.js');

// create a new Discord client
const client = new Discord.Client();

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
	console.log('Ready!');
	console.log(DiceRoll.d4Roll);
});

/* function getRandomNumber(minimum, maximum) {
	const min = Math.ceil(minimum);
	const max = Math.floor(maximum);
	return Math.floor(Math.random() * (max - min + 1) + min);
}
*/
client.on('message', message => {

	// coinflip
	if (message.content === '!coinflip') {
		message.channel.send('Hello World');
	}
	// D4
	if (message.content === '!rolld4') {
		message.channel.send(DiceRoll.d4Roll);
	}
	// D6
	if (message.content === '!rolld6') {
		message.channel.send(DiceRoll.d6Roll);
	}
	// D8
	if (message.content === '!rolld8') {
		message.channel.send(DiceRoll.d8Roll);
	}
	// D12
	if (message.content === '!rolld12') {
		message.channel.send(DiceRoll.d12Roll);
	}
	// D20
	if (message.content === '!rolld20') {
		message.channel.send(DiceRoll.d20Roll);
	}
	// Percentage die
	if (message.content === '!rollpercent') {
		message.channel.send(DiceRoll.percentRoll);
	}

});
// login to Discord with your app's token
client.login('NzU2MjkxNTE3MDU2MDI0NjQ2.X2PtXA.t83Z-MqXFNweDyY6nYxzxRmtHZU');
