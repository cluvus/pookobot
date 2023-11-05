//require('../index')

const Discord = require('discord.js')
const client = require('../index')

client.on("ready", async() => { //Colocar na index ou pasta de eventos.
const channel = client.channels.cache.get('1168478433270054943');
//channel.send('\<@591790852465098794>')
client.user.setStatus('idle');

let ping = client.ws.ping;console.log(`☕️ |${client.user.username} está on, e pronto pro serviço!
📌 |Meu ping atual é: ${ping}`)
      })
