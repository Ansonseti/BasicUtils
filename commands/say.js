module.exports = {
	name: "say",
	description: "Get the bot to say what ever you want!",
	execute(message,args) {
		const { Util } = require("discord.js");
		Util.removeMentions 
		const { prefix, token, ownerID, status, name, type } = require('../config.json');
	  let MSG = message.content.split(`${prefix}say`).join('');
	  if (!MSG)
		return message.channel.send(`You did not specify your message to send!`);
	  message.channel.send(`From **${message.author.tag}**\n> ${MSG}`);
	  message.delete();
	},
  };
