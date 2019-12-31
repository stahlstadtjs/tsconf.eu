export const state = () => ({
  nightlife: [],
  sightseeing: [],
  sponsors: [],
  speakers: [],
  tickets: [],
  loaded: false
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
  setSpeakers (state, entries) {
    state.speakers = entries
  },
  setTickets (state, entries) {
    state.tickets = entries
  },
  setLoaded (state, loaded) {
    state.loaded = loaded
  },
}