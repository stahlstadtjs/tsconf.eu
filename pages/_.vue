<template>
  <div class="default">
    <Menu :settings=settings></Menu>
    <MobileMenu :settings=settings></MobileMenu>

    <main id="main" class="m-menu" :class="{'m-0 overflow-hidden h-screen': isMainNavigationVisible}">
      <component v-if="story.content.component" 
        :key="story.content._uid" 
        :blok="story.content"
        :is="story.content.component"></component>

      <!-- Loop through footer components -->
      <template v-for="blok in settings.footer">
        <component
          :key="blok._uid"
          :blok="blok"
          :is="blok.component"></component>
      </template>
    </main>
    
    <Navigation :settings=settings></Navigation>

  </div>
</template>

<script>
import Menu from '@/components/Menu.vue'
import MobileMenu from '@/components/MobileMenu.vue'
import Navigation from '@/components/Navigation.vue'

export default {
  computed: {
    isMainNavigationVisible() {
      return this.$store.state.interactions.isMainNavigationVisible
    },
    settings() {
      return this.$store.state.references.settings
    }
  },
  data() {
    return {
      story: {}
    }
  },
  components: {
    Menu,
    MobileMenu,
    Navigation
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
    if(context.store.state.references.loaded !== '1') {
      const version = context.query._storyblok || context.isDev ? 'draft' : 'published'
    
      let [settingsRefRes, talksRefRes, workshopsRefRes, sponsorsRefRes, nightlifeRefRes, sightseeingRefRes, ] = await Promise.all([
        context.app.$storyapi.get(`cdn/stories/settings`, { resolve_links:'url', version: version }),
        context.app.$storyapi.get(`cdn/stories/`, { starts_with: 'talks/', resolve_links:'url', resolve_relations:'talk.speakers', version: version }),
        context.app.$storyapi.get(`cdn/stories/`, { starts_with: 'workshops/', resolve_links:'url', resolve_relations:'workshop.speakers', version: version }),
        context.app.$storyapi.get(`cdn/stories/`, { starts_with: 'sponsors/', resolve_links:'url', version: version }),
        context.app.$storyapi.get(`cdn/stories/`, { starts_with: 'nightlife/', resolve_links:'url', version: version }),
        context.app.$storyapi.get(`cdn/stories/`, { starts_with: 'sightseeing/', resolve_links:'url', version: version }),
      ])

      context.store.commit('references/setSettings', settingsRefRes.data.story.content)
      context.store.commit('references/setTalks', talksRefRes.data.stories)
      context.store.commit('references/setWorkshops', workshopsRefRes.data.stories)
      context.store.commit('references/setSponsors', sponsorsRefRes.data.stories)
      context.store.commit('references/setNightlife', nightlifeRefRes.data.stories)
      context.store.commit('references/setSightseeing', sightseeingRefRes.data.stories)
      
      if (context.payload && context.payload.tickets) {
        context.store.commit('references/setTickets', context.payload.tickets)      
      }

      context.store.commit('references/setLoaded', '1')
    }
  },
  async asyncData (context) {
    const version = context.query._storyblok || context.isDev ? 'draft' : 'published'
    const fullSlug = (context.route.path == '/' || context.route.path == '') ? 'home' : context.route.path 

    let pageRes = await context.app.$storyapi.get(`cdn/stories/${fullSlug}`, { resolve_links:'url', version: version })

    return {
       story: pageRes.data.story
    }
  }
}
</script>