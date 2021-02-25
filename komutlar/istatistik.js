const Discord = require("discord.js");
const moment = require("moment");
const os = require('os');
const talkedRecently = new Set();
const client = new Discord.Client();


require("moment-duration-format");
exports.run = async (bot, message, args) => {
    if (talkedRecently.has(message.author.id)) {
            message.channel.send("Wait 5 second before getting typing this again. - " + message.author).then(message => {
    message.delete({ timeout: 5000 })
  })
  .catch(console.error);
    } else {
  const duration = moment.duration(bot.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");

  let msg = message
   const bune = moment.duration(bot.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
   const loç = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setFooter('Funny Friends Stats', bot.user.avatarURL)
  .addField("» **Bot Owner**", `<@714185957405884466>`, true)
  .addField("» **Ping**", bot.ws.ping+" ms", true)
  .addField("» **OS**", `\`\`\`${os.platform()}\`\`\``, true) 
  .addField("» **Bit**", `\`${os.arch()}\``, true)
  .addField('» **Users**:', bot.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)
  .addField("» **Servers**", bot.guilds.cache.size.toLocaleString(), true)
  .addField("» **Channels**", bot.channels.cache.size.toLocaleString(), true)
  .addField("» **Memory usage**", (process.memoryUsage().heapUsed / 512 / 512).toFixed(2) + ' MB/8GB', true)  
  .addField("» **Operation time**", bune, true)
  .addField("» **Discord.JS Version**", "v"+Discord.version, true)
  .addField("» **Node.JS Version**", `${process.version}`, true)
  .addField("» **CPU**", `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``)
 return message.channel.send(loç);
 

           // the user can type the command ... your command code goes here :)

        // Adds the user to the set so that they can't talk for a minute
         talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 5000);
    }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [ 'i', 'istatistics', 'stats'],
  permLevel: 0
};

exports.help = {
  name: "istatistik",
  description: "Bot i",
  usage: "istatistik"
};
