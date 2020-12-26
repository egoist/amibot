const { isBot } = require("../");

test("main", () => {
  expect(isBot("Googlebot/2.1 (+http://www.google.com/bot.html)")).toBe(true);
});
