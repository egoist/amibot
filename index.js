const bots = require('./bots')

module.exports = ua => bots.some(bot => {
  const re = new RegExp(bot)
  return re.test(ua)
})
