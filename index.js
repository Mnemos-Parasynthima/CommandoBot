const { CommandoClient } = require('discord.js-commando');
const path = require('path');

const client = new CommandoClient({
  commandPrefix: process.env.prefix,
  owner: process.env.ownerId,
});

client.registry
  .registerDefaultTypes()
  .registerGroups([
    ['anime', 'Anime!!'],
    ['fun', 'Fun stuff'],
    ['mod', 'Moderation'],
    ['nsfw', 'NSFW!!'],
  ])
  .registerDefaultGroups()
  .registerDefaultCommands({
    help: false,
    prefix: false,
  })
  .registerCommandsIn(path.join(__dirname, 'commands'));

  client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity('with Commando');
  });
  client.on('error', console.error);

  client.login(process.env.token);