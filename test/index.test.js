const amibot = require('../')

test('main', () => {
  expect(amibot('Googlebot/2.1 (+http://www.google.com/bot.html)')).toBe(true)
})
