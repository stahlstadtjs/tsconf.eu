const axios = require('axios')

function calculateLeft(release) {
  const left = release.quantity - release.tickets_count
  if(left > 15) {
    return -1
  }
  return left
}

function download() {
  return axios.get('https://api.tito.io/v3/scriptconf/tsconf-eu-2020/', {
    headers: {
      'Authorization': `Token token=${process.env.TITO_TOKEN}`,
      'Content-Type': 'application/json'
    }
  })
}

function parseTickets(data) {
  return data.data.event
    .releases.filter(release => !release.secret)
    .sort((a,b) => a.position - b.position)
    .map(release => {
      return {
        title: release.title,
        description: release.description,
        slug: release.slug,
        price: release.price,
        url: release.share_url,
        sold_out: release.sold_out,
        left: calculateLeft(release)
      }
    })
}

module.exports = {
  download,
  parseTickets,
}
