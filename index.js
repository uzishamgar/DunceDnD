// require the discord.js module
const Discord = require('discord.js');
const Math = require('mathjs');

// create a new Discord client
const client = new Discord.Client();

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
	console.log('Ready!');
});

function getRandomNumber(minimum, maximum) {
	const min = Math.ceil(minimum);
	const max = Math.floor(maximum);
	return Math.floor(Math.random() * (max - min + 1) + min);
}

client.on('message', message => {

	// -----Define all the dice rolls-----
	// coinflip
	if (message.content === '!coinflip') {
		const coin = getRandomNumber(0, 1);
		if(coin == 0) {
			message.channel.send('heads');
		}
		else {
			message.channel.send('tails');
		}
	}
	// D4
	if (message.content === '!rolld4') {
		message.channel.send(getRandomNumber(1, 4));
	}
	// D6
	if (message.content === '!rolld6') {
		message.channel.send(getRandomNumber(1, 6));
	}
	// D8
	if (message.content === '!rolld8') {
		message.channel.send(getRandomNumber(1, 8));
	}
	// D12
	if (message.content === '!rolld12') {
		message.channel.send(getRandomNumber(1, 12));
	}
	// D20
	if (message.content === '!rolld20') {
		message.channel.send(getRandomNumber(1, 20));
	}
	// Percentage die
	if (message.content === '!rollpercent') {
		message.channel.send(getRandomNumber(0, 99));
	}

});
// login to Discord with your app's token
client.login('NzU2MjkxNTE3MDU2MDI0NjQ2.X2PtXA.t83Z-MqXFNweDyY6nYxzxRmtHZU');
