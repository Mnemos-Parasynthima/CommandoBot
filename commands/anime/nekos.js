const Discord = require('discord.js')
const fetch = require('node-fetch');
const { Command } = require('discord.js-commando');

module.exports = class NekosCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'nekos',
      aliases: ['catgirls', 'neko'],
      group: 'anime',
      memberName: 'nekos',
      description: 'NYA!!!',
      throttling: {
        usages: 3,
        duration: 5,
      }
    });
  }

  async run(msg) {
    const { url } = await fetch('https://nekos.life/api/v2/img/neko')
      .then((res) => res.json());
    const embed = new Discord.MessageEmbed()
      .setTitle('Nekos')
      .setColor('#ff0000')
      .setImage(url)
      .setFooter(`Request by: ${msg.author.username} | Powered by nekos.life`, msg.author.displayAvatarURL({ size: 32 }))
      .setTimestamp();

    msg.say(embed)
  }
};
