const bots = require("./bots");

exports.isBot = (ua) =>
  bots.some((bot) => {
    const re = new RegExp(bot);
    return re.test(ua);
  });
