// require the file module, config file and discord.js module
const fs = require('fs');
const { prefix, token } = require('./config.json');
const Discord = require('discord.js');

// create a new Discord client
const client = new Discord.Client();
// create a new discord collection for commands
client.commands = new Discord.Collection();
// create a list of commands from a file (exclude anything that isn't a js file)
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
// loop over all files and include them
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);

	// set a new item in the Collection
	// with the key as the command name and the value as the exported module
	client.commands.set(command.name, command);
}

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
	console.log('Ready!');
});
// upon message from client check if it starts with prefix and is not from a bot
client.on('message', message => {
	if(!message.content.startsWith(prefix) || message.author.bot) return;
	// cut off the prefix and split based on whitespace
	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();
	// if the command doesn't exist do nothing
	if(!client.commands.has(command)) return;
	// run the command with given arguments
	try {
		client.commands.get(command).execute(message, args);
	}
	// error if command cannot be run
	catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}

});
// login to Discord with your app's token
client.login(token);
