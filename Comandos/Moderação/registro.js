//1174068082575159346
const Discord = require("discord.js")
const { QuickDB} = require("quick.db")
const db = new QuickDB()


module.exports = {
  name: "registrar", // Coloque o nome do comando

  description: "registrar o usario", // Coloque a descrição do comando
  
  type: Discord.ApplicationCommandType.ChatInput,

  run: async (client, interaction) => {
  if (!interaction.member.permissions.has(Discord.PermissionFlagsBits.ManageRoles)) {
        interaction.reply({ content: `Você não possui permissão para utilizar este comando.`, ephemeral: true })
    } else {
      
      const verificado = interaction.guild.roles.cache.get('1174068082575159346')
      await db.set('cargo_verificado', verificado.id)
      
      
      let embed = new Discord.EmbedBuilder()
        .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL({ dynamic: true }) })
        .setColor("#13A600")
        .setImage("https://cdn.discordapp.com/attachments/1174962573540606024/1174962634836156466/46_Sem_Titulo_20231115192739.png?ex=65698039&is=65570b39&hm=2a5250adc4e2b863442f71169aab0457178bae06dbd9f85675721ad7d004cdd4&")
        let embed2 = new Discord.EmbedBuilder()
    //  .setTitle('.')
        .setColor("#085600")
         //.setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL({ dynamic: true }) })
        .addFields(
    {
      name: "📃__**EVITE SER CONFUNDIDO COM UM ROBÔ OU SPAMMER**__",
        value: '\n- 📌Se verificar no servidor é uma forma de garantir que você é um usuário real e confiável, e não um robô ou um spammer.',
    },
    {
      name: "📃__**ACESSE MAIS CANAIS E RECURSOS**__",
      value: '\n- 📌Ao se verificar, você poderá participar de mais canais, conversar com outros membros, receber notificações e convites, e aproveitar outras vantagens que o servidor oferece.',
    },
    {
      name: "📃__**MANTENHA A COMUNIDADE SEGURA**__",
      value: '\n- 📌Se verificar no servidor também ajuda a manter a comunidade segura, pois evita que pessoas mal-intencionadas entrem e causem problemas.',
    },
    {
      name: "📃__**REGISTRE-SE E VERIFIQUE SUA CONTA DISCORD**__",
      value: '\n- 📌Por isso, é importante que você se registre e verifique a sua conta no Discord e nos servidores que você se juntar.',
    }
  );
      
      let embed3 = new Discord.EmbedBuilder()
        .setColor("#13A600")
      .setDescription("```> Clique no botão abaixo para se verficar no servidor.```")
        .setFooter({ text: client.user.username});

        let botao = new Discord.ActionRowBuilder().addComponents(
            new Discord.ButtonBuilder()
            .setCustomId("register")
            .setEmoji("✅")
            .setLabel("Verifique-se")
            .setStyle("Success")
        );
        
    await interaction.channel.send({ embeds: [embed, embed2, embed3], components: [botao] });
        
         /*const filter = (i) =>
      i.customId === "register" && i.user.id === interaction.user.id;
    const collector = interaction.channel.createMessageComponentCollector({
      filter,
      //time:, // Tempo em milissegundos para o botão expirar, ajuste conforme necessário
    });

    // Quando o botão for clicado, adicione o cargo ao usuário e atualize a embed
    collector.on("collect", async (i) => {
      await i.deferUpdate(); // Reconheça a interação com o botão
      
      await i.member.roles.add(verificado);
  })*/
  }
  }
  }