<template>
  <div id="navigation" class="bg-red fixed top-0 left-0 p-8 z-40 h-screen w-screen text-center" v-show="isMainNavigationVisible">
    <div class="flex flex-col h-full mr-menu relative">
      <nav class="self-center m-auto">
        <ul>
          <li v-for="navigationLink in settings.content.navigation" :key="navigationLink._uid" v-editable="navigationLink">
            <nuxt-link class="block text-white uppercase font-bold text-100 leading-tight mb-5 hover:underline focus:underline"
              :to="$options.filters.url(navigationLink.link)" :title="navigationLink.title">
              {{navigationLink.text}}
            </nuxt-link>
          </li>
        </ul>
      </nav>
      <ul class="flex flex-wrap">
        <li class="mr-4">
          <a class="w-6 inline-block" target="_blank" rel="noopener noreferrer" href="https://www.twitter.com/tsconfeu" title="TS:Conf EU - Twitter">
            <img src="https://a.storyblok.com/f/71805/x/08b62f2c3a/twitter.svg" alt="Twitter logo">
          </a>
        </li>
        <li class="mr-4">
          <a class="w-6 inline-block" target="_blank" rel="noopener noreferrer" href="https://tsconfeu.slack.com/" title="TS:Conf EU - Slack">
            <img src="https://a.storyblok.com/f/71805/x/03dc50177f/slack.svg" alt="Slack logo">
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