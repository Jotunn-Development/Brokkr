// Original Hoshi Code
const { Command } = require('discord-akairo')

class SettingsCommand extends Command {
  constructor () {
    super('settings', {
      aliases: ['settings', 'view-settings'],
      category: 'general',
      channel: 'guild',
      clientPermissions: ['EMBED_LINKS'],
      description: { content: 'Displays the guild\'s current settings.' }
    })
  }

  exec (msg) {
    // Query database for guild settings, should result to null if nothing is found
    const prefix = this.handler.prefix(msg)

    // Build Embed
    const embed = this.client.util.embed()
      .setColor(process.env.EMBED)
      .setTitle('Settings')
      .setDescription([
        `**Prefix**: \`${prefix}\``
      ])
      .setTimestamp()
      .setFooter(`Requested by ${msg.author.tag}`, `${msg.author.displayAvatarURL()}`)

    return msg.util.send({ embed })
  }
}

module.exports = SettingsCommand
