const Discord = require("discord.js")

module.exports = {
    name: "clear",
    description: "Limpe o canal de texto",
    type: Discord.ApplicationCommandType.ChatInput,
    options: [
        {
            name: 'quantidade',
            description: 'Insira um número de mensagens para serem excluidas.',
             type: Discord.ApplicationCommandOptionType.Number,
        required: false,
        }
    ],

    run: async (client, interaction) => {

        let numero = interaction.options.getNumber('quantidade')

        if (!interaction.member.permissions.has(Discord.PermissionFlagsBits.ManageMessages)) {
            interaction.reply({ content: `❌ | Você não tem permissão para utilizar este comando.`, ephemeral: true })
        } else {

            if (parseInt(numero) > 100 || parseInt(numero) <= 0) {

                interaction.reply({ content: `❌ | Insira um número de mensagens para serem apagadas! Lembrando que tem que ser um número de \`1 á 99\``, ephemeral: true})

            } else {


                interaction.channel.bulkDelete(parseInt(numero))

                interaction.reply({ content: `**Chat limpo com sucesso!!!**\n\n🧹 **| Mensagens Limpas:** \`${numero}\``, ephemeral: true})

                let apagar_mensagem = "nao" // sim ou nao

                if (apagar_mensagem === "sim") {
                    setTimeout(() => {
                        interaction.deleteReply()
                    }, 5000)
                } else if (apagar_mensagem === "nao") {
                    return;
                }

            }

        }

    }
}