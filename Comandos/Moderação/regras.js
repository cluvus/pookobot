// Importar o módulo discord.js
const Discord = require("discord.js")

module.exports = {
  name: "regras", // Coloque o nome do comando
  description: "Mostra as regras da comunidade", // Coloque a descrição do comando
  type: Discord.ApplicationCommandType.ChatInput,
  run: async (client, interaction) => {
    
    if (!interaction.member.permissions.has(Discord.PermissionFlagsBits.ManageRoles)) {
        interaction.reply({ content: `Você não possui permissão para utilizar este comando.`, ephemeral: true })
    } else {
    
    const embed = new Discord.EmbedBuilder()
     .setColor('#5E0101')
     .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL({ dynamic: true }) })
     .setImage('https://media.discordapp.net/attachments/1174962573540606024/1174962634592882698/46_Sem_Titulo_20231115192731.png?ex=65698039&is=65570b39&hm=2c1e071b328ed5513f70858cf076797ef98792e67b18e7be9aaab3425c0f3e63&')
    
    const embed2 = new Discord.EmbedBuilder()
      // Definir o título da embed
      .setTitle('📄__**BEM-VINDO**__')
      .setColor('#993434')
      // Adicionar um campo com o link do servidor
 .addFields({ name: '\u200b', value: "\n- Bem-vindo à nossa comunidade! Aqui estão algumas regras simples que você deve seguir para manter uma boa convivência"})
   	.addFields({ name: '🖇️__**REGRAS**__', value: '\n- 🚫 Não xingue, ofenda ou desrespeite ninguém```(passivo de mute e kick)```\n- 🚫 Não faça spam, flood ou envie conteúdo impróprio.```(passivo de ban, mute e kick)```\n- 🚫 Não divulgue nada sem permissão```(passivo de mute, ban e kick)```\n- 🚫 Respeite os tópicos dos canais```(passivo de mute e kick)```'})
    	
    	const embed3 = new Discord.EmbedBuilder()
   	.setDescription('```> As regras fornecidas a cima são o básico a seguir para termos uma boa convivência o clube é um lugar para todos.```')
    	  .setColor('#993434')
      	
      .setFooter({ text: client.user.username})
      
    interaction.channel.send({embeds:[embed, embed2, embed3] });
  }
}
}