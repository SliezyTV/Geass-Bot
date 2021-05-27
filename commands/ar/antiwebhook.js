const { MessageEmbed } = require('discord.js');
const db = require(`quick.db`)

module.exports = {
  name: "antiwebhook",
  category: "config",
  description: "Permet de configurer l'autogban",
  usage: "autogban on/off",
  run: async (client, message, args) => {
    let serveurid = message.guild.id;
    if (!message.member.hasPermission("ADMINISTRATOR")) {
      return     }
        if (args[0] === 'on') {
          db.set(`config_webhook_${serveurid}`, 'on')
          return        } else if (args[0] === 'off') {
        db.set(`config_webhook_${serveurid}`, 'off')
        return         }
    }
}
