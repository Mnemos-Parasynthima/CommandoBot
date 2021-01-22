const { Command } = require('discord.js-commando');
const prefix = process.env.prefix;

module.exports = class HelpCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'help',
      aliases: ['commands'],
      group: 'mod',
      usage: '<command name>',
      memberName: 'help',
      description: 'Lists all commands.',
      throttling: {
        usages: 2,
        duration: 5,
      },
      args: [
        {
          key: 'text',
          prompt: 'Command name?',
          type: 'string',
        },
      ],
    });
  }

  run(message, { text }) {
    //command
  }
};