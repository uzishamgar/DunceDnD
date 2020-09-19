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
	execute(message) {
		message.author.send(embed);
	},
};
