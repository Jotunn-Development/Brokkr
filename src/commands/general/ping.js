const { Command } = require('discord-akairo')
const moment = require('moment')
moment.locale('en')

class PingCommand extends Command {
  constructor () {
    super('ping', {
      aliases: ['ping'],
      category: 'general',
      description: { content: 'Pings Bjorn.' }
    })
  }

  async exec (msg) {
    // Start timing for ping response
    const start = Date.now(); msg.channel.send('**Thinking...**').then(m => {
      const diff = (Date.now() - start)

      const month = ['March', 'April', 'May', 'June', 'July', 'Auguest', 'September', 'October', 'November', 'December', 'January', 'February']
      const dfMonth = ['Granite', 'Slate', 'Felsite', 'Hematite', 'Malachite', 'Galena', 'Limestone', 'Sandstone', 'Timber', 'Moonstone', 'Opal', 'Obsidian']
      let date = moment().format('LL')

      month.forEach((val, index) => {
        if (date.includes(month[index])) {
          date = date.replace(month[index], dfMonth[index])
        }
      })

      // Build Embed
      const embed = this.client.util.embed()
        .setTitle('🔔 Pong!')
        .setColor(process.env.EMBED)
        .setTimestamp(`${date}`)
        .setAuthor(date)
        .addField('📶 Latency:', `${diff}ms`)

      m.delete().then(msg.channel.send({ embed }))
    })
  }
}

module.exports = PingCommand
