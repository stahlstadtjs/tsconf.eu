const { download, parseTickets } = require('./download')
const fs = require('fs')

download().then(data => {
  const titoTickets = parseTickets(data)
  fs.writeFile('./dist/ticket-data.json', JSON.stringify(titoTickets), function(e) {
    console.log(e)
  })
});
