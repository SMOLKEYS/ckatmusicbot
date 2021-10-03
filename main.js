const { Player } = require('discord-player');
const { Client, Intents } = require('discord.js');

global.client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_VOICE_STATES
    ],
    disableMentions: 'everyone',
});

client.config = require('./config');

global.player = new Player(client, client.config.opt.discordPlayer);

require('./src/loader');
require('./src/events');
/*
client.on("messageCreate", (messsge) => {
	if(message.content == "terminate"){
		if(message.author == "691650272166019164"){
			message.channel.send("Bot killed.").then(message => process.exit())
		} else {
			message.channel.send("no")
		}
	}
});
*/
client.login(process.env.token);
