const { Command } = require('discord.js-commando');

module.exports = class NameCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'join',
      aliases: ['emulate'],
      group: 'misc',
      memberName: 'join',
      description: 'Emulating an event',
      guildOnly: true
    });
  }

  run(msg) {
    this.client.emit('guildMemberAdd', msg.member);
  }
};