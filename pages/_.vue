<template>
  <div>
  
    <component v-if="story.content.component" 
      :key="story.content._uid" 
      :blok="story.content"
      :is="story.content.component"></component>

    <!-- Loop through footer components -->
    <template v-for="blok in settings.content.footer">
      <component 
        :key="blok._uid"
        :blok="blok"
        :is="blok.component"></component>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      story: {},
      settings: {}
    }
  },
  mounted () {
    // Load the JSON from the API
    this.$storybridge.on(['input', 'published', 'change'], (event) => {
      if (event.action == 'input') {
        if (event.story.id === this.story.id) {
          this.story.content = event.story.content
        }
      } else {
        this.$nuxt.$router.go({
         path: this.$nuxt.$router.currentRoute,
         force: true,
       })
      }
    })
  },
  async fetch(context) {
    let [nightlifeRefRes, sightseeingRefRes, sponsorsRefRes, speakersRefRes, ticketsRefRes] = await Promise.all([
      context.app.$storyapi.get(`cdn/stories/`, { starts_with: 'nightlife/', version: 'draft' }),
      context.app.$storyapi.get(`cdn/stories/`, { starts_with: 'sightseeing/', version: 'draft' }),
      context.app.$storyapi.get(`cdn/stories/`, { starts_with: 'sponsors/', version: 'draft' }),
      context.app.$storyapi.get(`cdn/stories/`, { starts_with: 'speakers/', version: 'draft' }),
      context.app.$storyapi.get(`cdn/stories/`, { starts_with: 'tickets/', version: 'draft' }),
    ])

    context.store.commit('references/setNightlife', nightlifeRefRes.data.stories)
    context.store.commit('references/setSightseeing', sightseeingRefRes.data.stories)
    context.store.commit('references/setSponsors', sponsorsRefRes.data.stories)
    context.store.commit('references/setSpeakers', speakersRefRes.data.stories)
    context.store.commit('references/setTickets', ticketsRefRes.data.stories)
  },
  async asyncData (context) {
    const fullSlug = (context.route.path == '/' || context.route.path == '') ? 'home' : context.route.path 
    let [pageRes, settingRes] = await Promise.all([
      // Current Page Content
      context.app.$storyapi.get(`cdn/stories/${fullSlug}`, { version: 'draft' }),
      // Global Settings
      context.app.$storyapi.get(`cdn/stories/settings`, { version: 'draft' })
    ])

    return {
       story: pageRes.data.story,
       settings: settingRes.data.story
    }
  }
}
</script>