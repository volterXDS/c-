const {EmbedBuilder} = require("discord.js");
const db = require("croxydb")
exports.run = async (client, message, args) => {
let sesli = args[0]
if (!message.member.permissions.has("ADMINISTRATOR")) return message.reply(`   **Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.**`);
if (!sesli) return message.reply("Lütfen bir sesli kanal ID gir!")
message.reply("Başarıyla veritabanına ses kanal idsini kaydettim.")
db.set(`sesli_${message.guild.id}`, sesli)
};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "sesli-kanal"
};
