// help.js
const Discord = require('discord.js');
const helpDoc = require('./commands_new.json');

// const commandsList = (fs.readFileSync('./commands/commands.txt', 'utf8'));

const embed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle(helpDoc.title)
	.setDescription(helpDoc.description)
	.addField(helpDoc.RollCommandTitle, helpDoc.RollCommandValue)
	.addField(helpDoc.CoinFlipCommandTitle, helpDoc.CoinFlipCommandValue)
	.setFooter('Test footer');

// export the commands to be accessible by other files
module.exports = {
	name: 'help',
	description: 'provides a list of commands, how to use them and what they do',
	execute(message, args) {
		const command = args[0];
		if(!args.length) {
			message.author.send(embed);
		}
		// return message explaining different arguments
		else if (command === 'roll') {
			message.channel.send('The commands for roll are: d4, d6, d8, d12, d20, percent.');
		}
		else if (command === 'coinflip') {
			message.channel.send('coinflip flips a coin and returns heads or tails');
		}
	},
};
