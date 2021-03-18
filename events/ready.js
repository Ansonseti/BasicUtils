module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		const { prefix, token, ownerID, status, name, type } = require('../config.json');
		console.log('Ready!');
	console.log(`🟢${client.user.username}(${client.user.id}) is online🟢`)
    client.user.setActivity('BasicUtils', {type: "PLAYING"})
	},
};
