const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');

//BOT PREFIX
const prefix = "vei!"

client.on("ready", () => {
  client.user.setGame("Veidention");
  console.log("Veidention | BOT OYNUYOR KISMI = Veidention")
})


//BOT AKTIF OLDUGUNDA KONSOLA GELECEK DUYURU
client.on('ready', () => {
  console.log(`${client.guilds.size} tane sunucuya hizmet veriyor`);
  console.log(`${client.users.size} kullaniciya hizmet veriyor`);
  console.log(`${client.channels.size} kanala hizmet veriyor`);
  console.log("Prefix: " + prefix);
  console.log("Bot ID'si: " + client.user.id);
  console.log("BOT Isim: " + client.user.username);
});

client.on('message', message => {
  if (!message.guild) return;
  if (message.content.startsWith('vei!ban')) {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member.ban({
          reason: 'Hoşcakal',
        }).then(() => {
          message.reply(`Üye Başarıyla Yasaklandı: ${user.tag}`);
        }).catch(err => {
          message.reply('Üye yasaklanamadı');
          console.error(err);
        });
      } else {
        message.reply('Kullanıcı bu sunucuda değil');
      }
    } else {
      message.reply('Kullanıcı bu sunucuda değil');
    }
  }
});

client.on('message', message => {
  if (message.content === 'vei!ping') {
    message.channel.send('Şuanki Durumun:' + client.ping + 'ms');
  }

  if (message.content === 'vei!avatarim') {
    message.channel.send('message.author.avatarURL');
  }

  if (msg.content === 'sa') {
    msg.reply('Aleyküm Selam, Hoşgeldin');
  }

  if (msg.content === 'hoşbuldum') {
    msg.reply('Nasılsın?');
  }

  if (message.content === 'vei!reboot') {

    if (message.author.id === '476120052522024980') {
      message.channel.send('Veidention yeniden başlatılıyor...').then (msg => {
        console.log('Veidention yeniden başlatılıyor...');
      process.exit(0);
      });
    }else {
      message.channel.send('Yetkin Yok!');
    }
  }
});

client.login('NTE5ODgxMDQxMTU5Mzg5MTg0.Dul9Ng.30AQrcMmygP_R753ZcLRjUTR2bU');