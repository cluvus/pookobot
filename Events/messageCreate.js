//require('../index')

const Discord = require('discord.js')
const client = require('../index')
const { QuickDB} = require("quick.db")
const db = new QuickDB()

client.on("ready", async() => { //Colocar na index ou pasta de eventos.
const channel = client.channels.cache.get('1168478433270054943');
//channel.send('\<@591790852465098794>')
client.user.setStatus('idle');

let ping = client.ws.ping;console.log(`☕️ |${client.user.username} está on, e pronto pro serviço!
📌 |Meu ping atual é: ${ping}`)
      })

client.on("interactionCreate", async (interaction) => {
  
  if (interaction.isButton()) {
    if (interaction.customId === "register") {
      let role_id = await db.get(`cargo_verificado`);
      let role = interaction.guild.roles.cache.get(role_id);
      if (!role) return;
      interaction.member.roles.add(role.id)
     interaction.reply({content: `✅Parabéns **${interaction.user.username}**, você acaba de ser verificado!`, ephemeral: true })
      }
  }
})