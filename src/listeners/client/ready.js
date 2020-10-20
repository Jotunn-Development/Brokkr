const { Listener } = require('discord-akairo')
const Logger = require('../../util/Logger')
/**
 * TODO: Add bot to both top.gg and discord.boats
 * ! Will cause error if attempting to run before hand
 */
/*
const BOATS = require('boats.js')
const Boats = new BOATS(process.env.BOAT_API)
const DBL = require('dblapi.js')
const dbl = new DBL(process.env.TOP_API, this.client)
*/


class ReadyListener extends Listener {
  constructor () {
    super('ready', {
      event: 'ready',
      emitter: 'client',
      category: 'client'
    })
  }

  exec () {
    Logger.info(`${this.client.user.tag} is ready to serve!`)
    this.client.user.setActivity(`within ${this.client.guilds.cache.size} fortresses`, { type: 'PLAYING' })

    setInterval(() => {
      this.client.user.setActivity(`within ${this.client.guilds.cache.size} fortresses`, { type: 'PLAYING' })
      /**
       * * Enable once bot is listed, see above comment
       */
      /*
      Boats.postStats(this.client.guilds.cache.size, process.env.BOT_ID).then(() => { Logger.info('Discord Boats: Guilds Posted') })
      dbl.postStats(this.client.guilds.cache.size).then(() => { Logger.info('Top.gg: Guilds Posted') })
      */
    }, 300000)
  }
}

module.exports = ReadyListener