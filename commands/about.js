module.exports = {
	name: 'about',
	description: 'About the Bot',
	execute(message, args) {
		const { prefix, token, ownerID, status, name, type } = require('../config.json');
		const Discord = require('discord.js');
		message.channel.send('Message will be deleted in a minute')
		const embed = new Discord.MessageEmbed()
			.setColor('00ffb3ea')
			.setAuthor('Nothingness#5557', 'https://i.imgur.com/dSNAWKI.jpg', 'https://discord.com/users/605061180599304212')
			.setTitle('About the Bot')
			
			.setDescription('NoUtils is a bot created by a beginner coder <@605061180599304212>,\nIf you ask yes, mostly using discordjsguide & documentation and stuffs like stackoverflow and using the help of the internet\n Feel Free to Dm me anytime by this mention <@605061180599304212> or [here](https://discord.com/users/605061180599304212)')
			.setImage('https://i.imgur.com/I7VJanb.png')
			.setThumbnail('https://i.imgur.com/wSTFkRM.png')
			.setFooter('Made with ⌛ with discord.js', 'https://i.imgur.com/yiI7BKi.png')
			.setTimestamp()

			message.channel.send(embed)
      }}
