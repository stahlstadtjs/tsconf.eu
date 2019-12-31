<template>
  <div id="navigation" class="bg-red fixed top-0 left-0 p-8 z-40 h-screen w-screen text-center" v-show="isMainNavigationVisible">
    <div class="flex flex-col h-full mr-menu relative">
      <nav class="self-center m-auto">
        <ul>
          <li v-for="navigationLink in settings.content.navigation" :key="navigationLink._uid" v-editable="navigationLink">
            <nuxt-link v-if="$options.filters.url(navigationLink.link).indexOf('http') === -1" class="block text-white uppercase font-bold text-100 leading-tight mb-5 hover:underline focus:underline"
              :to="$options.filters.url(navigationLink.link)" :title="navigationLink.title">
              {{navigationLink.text}}
            </nuxt-link>
            <a v-else class="block text-white uppercase font-bold text-100 leading-tight mb-5 hover:underline focus:underline"
              :href="$options.filters.url(navigationLink.link)" :title="navigationLink.title">
              {{navigationLink.text}}
            </a>
          </li>
        </ul>
      </nav>
      <ul class="flex flex-wrap">
        <li class="mr-4">
          <a class="w-6 inline-block" target="_blank" rel="noopener noreferrer" href="https://www.twitter.com/tsconfeu" title="TS:Conf EU - Twitter">
            <img src="https://a.storyblok.com/f/71805/x/08b62f2c3a/twitter.svg" alt="Twitter logo">
          </a>
        </li>
        <li>
          <span class="text-white inline-block">Connect with us!</span>
        </li>
      </ul>
    </div>
    
  </div>
</template>

<script>
export default {
  props: {
    settings: Object
  },
  computed: {
    isMainNavigationVisible() {
      return this.$store.state.interactions.isMainNavigationVisible
    }
  }
}
</script>