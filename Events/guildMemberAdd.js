const client = require("../index");
const Canvas = require('canvas')
const Discord = require('discord.js')
const path = require('path')const image = require('../data/image.json')

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

    const background = await Canvas.loadImage(image['banner2'])

    ctx.drawImage(background, 0, 0, canvas.width, canvas.height)

    ctx.strokeStyle = '#fff'
    ctx.strokeRect(0, 0, canvas.width, canvas.height)

    const avatar = await Canvas.loadImage(member.user.displayAvatarURL({extension: 'png', size: 1024}))
    
    const x = (canvas.width - 400) / 2;
    const y = (canvas.height - 400) / 2;

    ctx.font = '160px ts';
    ctx.fillStyle = '#fff'
    const welcomeText = `BEM-VINDO(A)`
    ctx.fillText(welcomeText, 520, 900)

    ctx.font = '90px ccg';
    ctx.fillStyle = '#fff'
    const memberTagText = `${member.user.tag}`
    const memberTagTextWidth = ctx.measureText(memberTagText).width;
    ctx.fillText(memberTagText, x + (400 - memberTagTextWidth) / 2, y + 660)
    
    ctx.font = '70px anc';
    ctx.fillStyle = '#dedede'
    const nmrText = `#${member.guild.memberCount}`
    ctx.fillText(nmrText, 1720, 120)


    ctx.beginPath()
    ctx.arc(x + 400 / 2, y + 400 / 2, 220, 0, Math.PI * 2);
    ctx.closePath()
    ctx.clip()

      
ctx.drawImage(avatar, 960 - 220, 540-220, 440, 440)

    const attachment = new Discord.AttachmentBuilder(await canvas.toBuffer(), {name: 'welcome.png'})

    channel.send({ content: `Bem vindo ao Servidor ${member}`, files: [attachment] })
})