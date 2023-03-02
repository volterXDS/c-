const {EmbedBuilder} = require("discord.js");
const db = require("croxydb")
const ses = "https://cdn.discordapp.com/attachments/1064458446679846942/1080575876380500108/5576-8dc0ac7c121a6c622ef747db63f52018.mp3"
const { joinVoiceChannel, createAudioPlayer, createAudioResource} = require('@discordjs/voice');
exports.run = async (client, message, args) => {
let sesli = db.fetch(`sesli_${message.guild.id}`)
if (!sesli) return message.reply("Sesli Kanali Ayarlamamissin!")
let channel = sesli
setInterval(() => {
const connection = joinVoiceChannel({
   channelId: channel,
   guildId: message.guild.id,
   adapterCreator: message.guild.voiceAdapterCreator,
   selfDeaf: false
})
if (!message.member.permissions.has("ADMINISTRATOR")) return message.reply(`   **Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.**`);
        const player = createAudioPlayer();
    const resource = createAudioResource(ses)

    player.play(resource);
    connection.subscribe(player);
}, 10000);
    message.reply("Bağlandım")
    
};
exports.conf = {
  aliases: []
};

exports.help = {
  name:"sese-bağlan"
};
