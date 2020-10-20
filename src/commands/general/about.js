const { Command } = require('discord-akairo')

class AboutCommand extends Command {
  constructor () {
    super('about', {
      aliases: ['about', 'info'],
      category: 'general',
      clientPermissions: ['EMBED_LINKS'],
      description: { content: 'Shows information about Brokkr.' }
    })
  }

  exec (message) {
    // Resolve current prefix for user's guild, resolve help guild
    const prefix = this.handler.prefix(message)
    const asgard = this.client.guilds.resolve('540671346728763392')

    // Build embed
    const embed = this.client.util.embed()
      .setColor(process.env.EMBED)
      .setTitle('About Brokkr')
      .setDescription([
        `Brokkr is developed by **VulgarBear#2617** of ${asgard}`,
        '',
        'Brokkr uses the **[Discord.js](https://discord.js.org)** library and the **[Akairo](https://1computer1.github.io/discord-akairo)** framework.',
        'You can find out more on the **[github](https://github.com/VulgarBear/Brokkr)**.',
        '',
        `Use \`${prefix}stats\` for statistics and \`${prefix}invite\` for an invite link.`,
        '',
        'Join the community server [Vulgar\'s Den](https://discord.gg/E9cJjvw) to learn more or to ask questions!'
      ])

    return message.util.send({ embed })
  }
}

module.exports = AboutCommand
