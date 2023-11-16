const client = require("../index");
const Canvas = require('canvas')
const Discord = require('discord.js')
const path = require('path')const image = require('../data/image.json')
const fs = require ('fs')

//Registrar as fontes
const { registerFont } = require('canvas');
registerFont("./fonts/CocogoosePro-trial.ttf", {family: "ccg"})
registerFont("./fonts/ToonySansItalic_PERSONAL_USE_ONLY.ttf", {family: "ts"})
registerFont("./fonts/AvenirNextCyr-Heavy.ttf", {family: "anc"})

//==================================================
client.on('guildMemberAdd', async (member) => {
    const channel = member.guild.channels.cache.get('1168086834258128979');

    const canvas = Canvas.createCanvas(1920, 1080);
    const ctx = canvas.getContext('2d')
    
const random = Math.floor(Math.random() * image.banner.length);

    const date = new Date();
    const brazilTime = date.toLocaleTimeString('pt-BR');
    
    const background = await Canvas.loadImage(image.banner[random])

    ctx.drawImage(background, 0, 0, canvas.width, canvas.height)

    ctx.strokeStyle = '#fff'
    ctx.strokeRect(0, 0, canvas.width, canvas.height)

    const avatar = await Canvas.loadImage(member.user.displayAvatarURL({extension: 'png', size: 1024}))
    
    const x = (canvas.width - 400) / 2;
    const y = (canvas.height - 400) / 2;

    ctx.font = '180px ts';
    ctx.fillStyle = '#fff'
    ctx.strokeStyle = "black";
ctx.lineWidth = 8;
   ctx.strokeText(`BEM-VINDO(A)`, 500, 900)
    const welcomeText = `BEM-VINDO(A)`
    ctx.fillText(welcomeText, 500, 900)

    ctx.font = '90px ccg';
    ctx.fillStyle = '#fff'
    ctx.strokeStyle = "black";
   ctx.lineWidth = 6;
    const memberTagText = `${member.user.tag}`
    const memberTagTextWidth = ctx.measureText(memberTagText).width;
    ctx.strokeText(memberTagText,x + (400 - memberTagTextWidth) / 2, y + 660)
    ctx.fillText(memberTagText, x + (400 - memberTagTextWidth) / 2, y + 660)
    
    ctx.font = '70px anc';
 ctx.fillStyle = '#fff'
        ctx.strokeStyle = "black";
ctx.lineWidth = 8;
  const nmrText = `#${member.guild.memberCount}`
  ctx.strokeText(`${nmrText}`, 1720, 100)
    ctx.fillText(nmrText, 1720, 100)

    ctx.font = '70px anc';
    ctx.fillStyle = '#fff'
    ctx.strokeStyle = "black";
    ctx.lineWidth = 8;
     const brazilDate = date.toLocaleDateString('pt-BR', { day: 'numeric', month: 'numeric' });
     ctx.strokeText(`${brazilDate}`, 30, 100)
     ctx.fillText(brazilDate, 30, 100)
    
   
   ctx.beginPath()
     ctx.arc(x + 400 / 2, y + 400 / 2 - 40, 255, 0, Math.PI * 2);
    ctx.closePath()
    ctx.fillStyle = '#dedede'
    ctx.fill()

// Desenhar o arco no canvas
ctx.beginPath();
ctx.arc(x + 400 / 2, y + 400 / 2 - 40, 250, 0, Math.PI * 2); // Diminuir o valor de y em 20
ctx.closePath();
ctx.clip();

// Desenhar a imagem no canvas
ctx.drawImage(avatar, 960 - 250, 540-250 - 40, 500, 500); // Ajustar as coordenadas da imagem



    //ctx.beginPath()
 //ctx.arc(x + 400 / 2, y + 400 / 2, 220, 0, Math.PI * 2);
     //ctx.closePath()
    //ctx.clip()
      
 //ctx.drawImage(avatar, 960 - 220, 540-220, 440, 440)

    const attachment = new Discord.AttachmentBuilder(await canvas.toBuffer(), {name: 'welcome.png'})

    channel.send({ content: `Bem vindo ao Servidor ${member}`, files: [attachment] })
})