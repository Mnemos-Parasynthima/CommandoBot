/*const { Command } = require('discord.js-commando');
const Discord = require('discord.js');

module.exports = class ServerCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'server',
      aliases: ['srv', 'server-info'],
      group: 'mod',
      memberName: 'server',
      description: 'Displays infor about this server.',
      guildOnly: true,
      throttling: {
        usages: 1,
        duration: 5,
      }
    });
  }

  run(msg) {
    const { name, memberCount, owner, region, createdAt, iconURL } = msg.guild;
    const embed = new Discord.MessageEmbed()
      .setTitle(`${name} Server Info`)
      .setDescription(`The following contains neccesary information about the server \`${name}\`.`)
      .setThumbnail(iconURL())
      .setColor('#ff0000')
      .setTimestamp()
      .addFields(
        {
          name: 'Total Members: ',
          value: memberCount
        },
        {
          name: 'Server Owner: ',
          value: owner
        },
        {
          name: 'Server Region: ',
          value: region
        },
        {
          name: 'Time created: ',
          value: createdAt
        }
      );

    msg.say(embed);
  }
};*/