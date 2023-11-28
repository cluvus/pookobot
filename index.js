const Discord = require("discord.js")
const config = require("./config.json")
 // importar o pacote cors
const cors = require('cors');
// usar o middleware cors
// importar o pacote Express
const express = require('express');
// criar uma instância do servidor Express
const app = express();
// definir a porta do servidor
const port = 3000;
// criar uma rota principal
app.use(cors());
app.get("/", function (req, res) {
 res.send("Pronto pro serviço!");});
app.listen(3000, function () {
  console.log("server rodando na porta 3000!");});

const client = new Discord.Client({ 
  intents: [ 
Discord.GatewayIntentBits.Guilds
       ]
    });

module.exports = client

client.on('interactionCreate', (interaction) => {

  if(interaction.type === Discord.InteractionType.ApplicationCommand){

      const cmd = client.slashCommands.get(interaction.commandName);

      if (!cmd) return interaction.reply(`Error`);

      interaction["member"] = interaction.guild.members.cache.get(interaction.user.id);

      cmd.run(client, interaction)

   }
})

const fs = require('fs');

fs.readdir('./Events', (err, file) => {
  file.forEach(event => {
    require(`./Events/${event}`)
  })
})

client.slashCommands = new Discord.Collection()

require('./handler')(client)

 client.login(config.token)