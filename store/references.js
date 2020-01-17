export const state = () => ({
  settings: {},
  nightlife: [],
  sightseeing: [],
  sponsors: [],
  workshops: [],
  talks: [],
  tickets: [{
      title: 'Early Bird',
      description: 'A limited selection of early bird tickets. Ticket price includes all refreshments and food during the conference, as well as entrance to the after-show get-together.',
      slug: 'llkxvwso5pi',
      price: 199,
      url: 'https://ti.to/scriptconf/tsconf-eu-2020/with/llkxvwso5pi',
      sold_out: false,
      left: 7
    },
    {
      title: 'Standard',
      description: 'The standard ticket for TSConf:EU provides you with a full day of TypeScript content and includes all refreshments and food during the conference, as well as entrance to the after-show get-together.',
      slug: '0w61ont0bgq',
      price: 229,
      url: 'https://ti.to/scriptconf/tsconf-eu-2020/with/0w61ont0bgq',
      sold_out: false,
      left: -1
    }
  ],
  loaded: '0',
  ticketsLoaded: '0'
})

export const mutations = {
  setNightlife (state, entries) {
    state.nightlife = entries
  },
  setSightseeing (state, entries) {
    state.sightseeing = entries
  },
  setSponsors (state, entries) {
    state.sponsors = entries
  },
  setWorkshops (state, entries) {
    state.workshops = entries
  },
  setTalks (state, entries) {
    state.talks = entries
  },
  setTickets (state, entries) {
    state.tickets = entries
  },
  setTicketsLoaded (state, loaded) {
    state.ticketsLoaded = loaded
  },
  setSettings (state, settings) {
    state.settings = settings
  },
  setLoaded (state, loaded) {
    state.loaded = loaded
  },
}
