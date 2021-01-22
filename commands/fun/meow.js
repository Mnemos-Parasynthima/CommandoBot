const { Command } = require('discord.js-commando');

module.exports = class MeowCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'meow',
      aliases: ['kitty-cat', 'nya'],
      group: 'fun',
      memberName: 'meow',
      description: 'Replies with a meow, nya.',
      guildOnly: true,
      throttling: {
        usages: 2,
        duration: 5,
      }
    });
  }

  run(message) {
    return message.say('Nya!');
  }
};