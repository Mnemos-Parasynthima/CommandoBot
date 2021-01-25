const { Command } = require('discord.js-commando');
const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports = class LewdNekosCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'lneko',
      aliases: ['lewdneko', 'nsfwn'],
      group: 'nsfw',
      memberName: 'lneko',
      description: 'Nya',
      ownerOnly: true,
      nsfw: true,
      throttling: {
        usages: 3,
        duration: 5,
      }
    });
  }

  async run(msg) {
    const { url } = await fetch('https://nekos.life/api/v2/img/lewd')
      .then((res) => res.json());
    const embed = new Discord.MessageEmbed()
      .setTitle('Lewd Neko(s)')
      .setColor('#ff0000')
      .setImage(url)
      .setFooter(`Request by: ${msg.author.username} | Powered by nekos.life`, msg.author.displayAvatarURL({ size: 32 }))
      .setTimestamp()
    msg.embed(embed);
  }
};