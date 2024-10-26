
const {
    Client,
    Intents
} = require('discord.js');
const { token , prefix  } = require('./config.json');


const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_MESSAGES]
});

client.once('ready', () => {
  console.log(`Bot ${client.user.tag} is logged in!`);
    client.user.setPresence({ activities: [{ name: 'Milestone', type: 'WATCHING' }], status: 'dnd' });// Set the bot's watching status
});

client.on('messageCreate', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === '!say') {
    const text = args.join(' ');
    message.channel.send(text);
  }
});

client.login(process.env.token);
