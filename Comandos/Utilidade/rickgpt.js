const Discord = require("discord.js");
const Kandaraku = require("kandaraku");
const kand = new Kandaraku();
module.exports = {
    name: 'gpt',
    description: 'Digite seu prompt para que o bot responda',
    type: Discord.ApplicationCommandType.ChatInput,
    options: [{
        name: 'prompt',
        description: 'Diga o que precisa!',
        type: Discord.ApplicationCommandOptionType.String,
        required: true,
    }],


    run: async (client, interaction) => {
        const prompt = interaction.options.getString("prompt");
        const allowedRoles = ['', '', '', '', '']; // ID dos Cargos permitidos a usar o comando
        const allowedChannelId = ''; // ID do canal permitido

        const hasAllowedRole = interaction.member.roles.cache.some(role => allowedRoles.includes(role.id));
        
        const isAllowedChannel = interaction.channelId === allowedChannelId;
        const allowedChannel = interaction.guild.channels.cache.get(allowedChannelId);
        if (!hasAllowedRole) {
            return interaction.reply({content: `Você não tem permissão para usar este comando.`, ephemeral: true});
        }
        if(!isAllowedChannel){
            return interaction.reply({content:`Você não está no canal correto, vá para o canal ${allowedChannel} para utilizar esse comando!`, ephemeral: true})
        }
    
        interaction.reply("Carregando...").then(async (msg) => {
            setTimeout(() => {
                msg.edit(`\`Solicitado por ${interaction.user.username}\` \n\`Prompt: ${prompt}\``);
            }, 3000);
    
            let response = await kand.conversationAnimeBotChat({
                message: `${prompt}`,
            });
    

            if (typeof response === 'object' && response.content) {
                response = response.content; 
            }
    
            const maxLength = 3000;
            const splitMessages = [];
            let tempMessage = "";
    
            response.split(" ").forEach((word) => {
                if ((tempMessage + word).length < maxLength) {
                    tempMessage += (tempMessage === "" ? "" : " ") + word;
                } else {
                    splitMessages.push(tempMessage);
                    tempMessage = word;
                }
            });
    
            if (tempMessage) {
                splitMessages.push(tempMessage);
            }
    
            for (let i = 0; i < splitMessages.length; i++) {
                const embed = new Discord.EmbedBuilder()
                    .setDescription(`Parte [${i + 1}/${splitMessages.length}] - ${interaction.user} \n${splitMessages[i]}`)
                    .setColor("Random");
    
                const channel = interaction.channel;
                await channel.send({ embeds: [embed] });
            }
        });
    }
};