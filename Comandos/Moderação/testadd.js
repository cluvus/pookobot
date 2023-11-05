const Discord = require("discord.js");
const  config  = require('../../config.json');


module.exports = {
  name: "simularguildmemberadd", 
  description: "Simula o evento de guildMemberAdd", 
  type: Discord.ApplicationCommandType.ChatInput,

  run: async (client, interaction) => {

    if (!interaction.member.permissions.has(Discord.PermissionFlagsBits.Administrator)){
        interaction.reply({ content: `Você não possui permissão para usar este comando! ${interaction.user}`, ephemeral: true })
    } else {
      const member = interaction.member;
      interaction.client.emit('guildMemberAdd', member)
      await interaction.reply({ content: 'Funcionou', ephemeral: true })
    }
  }
}