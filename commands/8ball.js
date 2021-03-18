const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "8ball",
  description: "An 8 ball command, Good Luck !",
  execute(message) {
    const { prefix, token, ownerID, status, name, type } = require('../config.json');
    let question = message.content.slice(prefix.length + 6);
    if (!question)
      return message.channel.send(`You did not specify your question!`);
    else {
      let responses = [
        "Yes",
        "No",
        "Definitely",
        "Absoloutely",
        "Probably",
        "Not in a million years",
      ];
      let response =
        responses[Math.floor(Math.random() * responses.length - 1)];
      let Embed = new MessageEmbed()
        .setTitle(`8Ball!`)
        .setDescription(`Your question: ${question}\nMy reply: ${response}`)
        .setColor(`RANDOM`)
        .setFooter('Satisifed mate ?');
      message.channel.send(Embed);
    }
  },
};
