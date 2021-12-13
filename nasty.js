const Discord = require('discord.js');//
const client = new Discord.Client();//
const buton = require('discord-buttons');
buton(client);

const nasty = require("./settings.json")

client.on("message", (message) => {
  
    if (message.content !== `${nasty.botPrefix}button` || message.author.id !== `${nasty.botOwner}`) return;
    
    let nastyRed = new buton.MessageButton()
    .setStyle('grey')
    .setLabel('Kırmızı')
    .setID('Red')
   
     let nastyPink = new buton.MessageButton()
    .setStyle('grey')
    .setLabel('Pembe')
    .setID('Pink')
    
     let nastyOrange = new buton.MessageButton()
    .setStyle('grey')
    .setLabel('Turuncu')
    .setID('Orange')
          
     let nastyYellow = new buton.MessageButton()
    .setStyle('grey')
    .setLabel('Sarı')
    .setID('Yellow')
          
    let nastyGreen = new buton.MessageButton()
    .setStyle('grey')
    .setLabel('Yeşil')
    .setID('Green')

    message.channel.send(`**${nasty.guildName}** Rol alma sistemi.\n\nAşağıdaki butonlardan herhangi birine tıklayarak renk seçebilir dilerseniz bırakabilirsiniz.`, {
      buttons: [nastyRed, nastyPink, nastyOrange, nastyYellow, nastyGreen]
    }); 
    });
  
  client.on('clickButton', async (button) => {
    

    if (button.id === "Red") {
      if (button.clicker.member.roles.cache.get((nasty.Red))) {
        await button.clicker.member.roles.remove((nasty.Red))
        await button.reply.think(true);
        await button.reply.edit("Kırmızı rolü üzerinizden alındı!")
      } else {
        await button.clicker.member.roles.add((nasty.Red))
        await button.reply.think(true);
        await button.reply.edit("Kırmızı rolünü başarıyla aldınız!")
      } 
    }
  
    if (button.id === "Pink") {
      if (button.clicker.member.roles.cache.get((nasty.Pink))) {
        await button.clicker.member.roles.remove((nasty.Pink))
        await button.reply.think(true);
        await button.reply.edit("Pembe rolü üzerinizden alındı!")
      } else {
        await button.clicker.member.roles.add((nasty.Pink))
        await button.reply.think(true);
        await button.reply.edit("Pembe rolünü başarıyla aldınız!")  
     } 
    }
    
    if (button.id === "Orange") {
      if (button.clicker.member.roles.cache.get((nasty.Orange))) {
        await button.clicker.member.roles.remove((nasty.Orange))
        await button.reply.think(true);
        await button.reply.edit("Turuncu rolü üzerinizden alındı!")
      } else {
        await button.clicker.member.roles.add((nasty.Orange))
        await button.reply.think(true);
        await button.reply.edit("Turuncu rolünü başarıyla aldınız!")  
     } 
    }
    
    if (button.id === "Yellow") {
      if (button.clicker.member.roles.cache.get((nasty.Yellow))) {
        await button.clicker.member.roles.remove((nasty.Yellow))
        await button.reply.think(true);
        await button.reply.edit("Sarı rolü üzerinizden alındı!")
      } else {
        await button.clicker.member.roles.add((nasty.Yellow))
        await button.reply.think(true);
        await button.reply.edit("Sarı rolünü başarıyla aldınız!")  
     } 
    }

    if (button.id === "Green") {
      if (button.clicker.member.roles.cache.get((nasty.Green))) {
        await button.clicker.member.roles.remove((nasty.Green))
        await button.reply.think(true);
        await button.reply.edit("Yeşil rolü üzerinizden alındı!")
      } else {
        await button.clicker.member.roles.add((nasty.Green))
        await button.reply.think(true);
        await button.reply.edit("Yeşil rolünü başarıyla aldınız!")
   } 
  }
    
  });

  client.on("ready", () => {
    console.log(`${client.user.tag} adıyla giriş yapıldı!`);
    client.user.setPresence({ activity: { type: "WATCHING", name: `${nasty.botStatus}`}, status: `${nasty.botActivity}` });
    })

  client.login(nasty.botToken)
