const { download, parseTickets } = require('./download')
const { promises: fs } = require('fs')

download().then(data => {
  const titoTickets = parseTickets(data)
  fs.writeFile('./dist/ticket-data.json', JSON.stringify(titoTickets))
});
