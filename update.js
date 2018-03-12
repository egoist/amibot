const fs = require('fs')
const fetch = require('node-fetch')

fetch('https://github.com/monperrus/crawler-user-agents/raw/master/crawler-user-agents.json')
.then(res => res.json())
.then(bots => JSON.stringify(bots.map(v => v.pattern)))
.then(text => {
  fs.writeFileSync('./bots.json', text, 'utf8')
})
