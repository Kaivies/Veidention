const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');

client.on("ready", () => {
  client.user.setGame("Veidention");
  console.log("Veidention | BOT OYNUYOR KISMI = Veidention")
})

client.login('process.env.BOT_TOKEN');
