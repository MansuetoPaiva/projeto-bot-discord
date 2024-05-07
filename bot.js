const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready!');
});

client.on('message', message => {
    if (message.content === '!ping') {
        message.channel.send('Pong!');
    }
});

client.login('63a862b8a296a1949d2c8433a042328175ef73cd09e9a00daaef77ba8c83f376');