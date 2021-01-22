const { Command } = require('discord.js-commando');

module.exports = class SayCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'say',
      aliases: ['parrot', 'copy'],
      group: 'fun',
      memberName: 'say',
      description: 'Replies with provded text',
      args: [
        {
          key: 'text',
          prompt: 'What text would you like the bot to say?',
          type: 'string',
        },
      ],
    });
  }

  run(message, { text }) {
    return message.reply(text);
  }
};