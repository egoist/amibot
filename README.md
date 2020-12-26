# amibot

[![NPM version](https://img.shields.io/npm/v/amibot.svg?style=flat)](https://npmjs.com/package/amibot) [![NPM downloads](https://img.shields.io/npm/dm/amibot.svg?style=flat)](https://npmjs.com/package/amibot) [![CircleCI](https://circleci.com/gh/egoist/amibot/tree/master.svg?style=shield)](https://circleci.com/gh/egoist/amibot/tree/master) [![donate](https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&style=flat)](https://github.com/egoist/donate) [![chat](https://img.shields.io/badge/chat-on%20discord-7289DA.svg?style=flat)](https://chat.egoist.moe)

Detect bots via user-agent.

## Install

```bash
yarn add amibot
```

## Usage

```js
const { isBot } = require("amibot");

isBot(req.headers["user-agent"]);
//=> true or false

isBot("Googlebot/2.1 (+http://www.google.com/bot.html)");
//=> true
```

Get bots list:

```js
const bots = require("amibot/bots");
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

**amibot** © [egoist](https://github.com/egoist), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by egoist with help from contributors ([list](https://github.com/egoist/amibot/contributors)).

> [github.com/egoist](https://github.com/egoist) · GitHub [@egoist](https://github.com/egoist) · Twitter [@\_egoistlily](https://twitter.com/_egoistlily)
