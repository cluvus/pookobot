const Discord = require('discord.js');
const axios = require('axios') // Para fazer requisições HTTP

module.exports = {
  name: "chatgpt", // Coloque o nome do comando

  description: "Faça uma pergunta ao chatgpt", // Coloque a descrição do comando
  
  type: Discord.ApplicationCommandType.ChatInput,
  options: [
        {
            name: 'pergunta',
            description: 'Insira um prompt para.',
             type: Discord.ApplicationCommandOptionType.String,
        required: true,
        }
    ],

  run: async (client, interaction) => {
    // Obter a pergunta do usuário
       const pergunta = interaction.options.getString('pergunta');

        try {
            const response = await axios.post('https://chat-app-70bf2c.zapier.app/pooko', {
                question: pergunta,
            });

            const respostaPooko = response.data.response;

            const embed = new MessageEmbed()
                .setTitle('Resposta do Pooko')
                .setDescription(respostaPooko);

            const replyOptions = {
                embeds: [embed],
            };

            return interaction.reply(replyOptions);
        } catch (error) {
            console.error(error);
            const replyOptions = {
                content: 'Ocorreu um erro ao obter resposta do Pooko.',
            };

            return interaction.reply(replyOptions);
        }
    },
};