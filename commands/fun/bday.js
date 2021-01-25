const { Command } = require('discord.js-commando');

module.exports = class BdayCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'bday',
      aliases: ['bd'],
      group: 'fun',
      memberName: 'bday',
      description: 'Happy Birthday',
      guildOnly: true,
      throttling: {
        usages: 3,
        duration: 5,
      }
    });
  }
  run(msg) {
    const taggedTarget = msg.mentions.users.first();

    if(!taggedTarget) {
      msg.say("Who's birthday-nya?");
    }

    if(taggedTarget) {
      msg.say(`BY THE POWER VESTED IN ME, SOULWORKER CHII, AND MY MASTER, WE WISH YOU HAPPY BIRTHDAY, ${taggedTarget}-KUN!`);
    }
  }
};