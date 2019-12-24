<template>
  <div class="default">
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
    const version = 'draft'

    let [nightlifeRefRes, sightseeingRefRes, sponsorsRefRes, speakersRefRes, ticketsRefRes] = await Promise.all([
      context.app.$storyapi.get(`cdn/stories/`, { starts_with: 'nightlife/', resolve_links:'url', version: version }),
      context.app.$storyapi.get(`cdn/stories/`, { starts_with: 'sightseeing/', resolve_links:'url', version: version }),
      context.app.$storyapi.get(`cdn/stories/`, { starts_with: 'sponsors/', resolve_links:'url', version: version }),
      context.app.$storyapi.get(`cdn/stories/`, { starts_with: 'speakers/', resolve_links:'url', version: version }),
      context.app.$storyapi.get(`cdn/stories/`, { starts_with: 'tickets/', resolve_links:'url', version: version }),
    ])

    context.store.commit('references/setNightlife', nightlifeRefRes.data.stories)
    context.store.commit('references/setSightseeing', sightseeingRefRes.data.stories)
    context.store.commit('references/setSponsors', sponsorsRefRes.data.stories)
    context.store.commit('references/setSpeakers', speakersRefRes.data.stories)
    context.store.commit('references/setTickets', ticketsRefRes.data.stories)
  },
  async asyncData (context) {
    const version = 'draft'
    const fullSlug = (context.route.path == '/' || context.route.path == '') ? 'home' : context.route.path 

    let [pageRes, settingRes] = await Promise.all([
      context.app.$storyapi.get(`cdn/stories/${fullSlug}`, { resolve_links:'url', version: version }),
      context.app.$storyapi.get(`cdn/stories/settings`, { resolve_links:'url', version: version })
    ])

    return {
       story: pageRes.data.story,
       settings: settingRes.data.story
    }
  }
}
</script>