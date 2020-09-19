// help.js
const fs = require('fs');

const commandsList = (fs.readFileSync('./commands/commands.txt', 'utf8'));

// export the commands to be accessible by other files
module.exports = {
	name: 'help',
	description: 'provides a list of commands, how to use them and what they do',
	execute(message, args) {
		message.channel.send(commandsList);
	},
};
