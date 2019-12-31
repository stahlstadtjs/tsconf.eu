<template>
  <div id="navigation" class="bg-red fixed top-0 left-0 z-40 h-screen w-screen text-center" v-show="isMainNavigationVisible">
    <nav class="flex h-screen">
      <ul class="self-center m-auto">
        <li v-for="navigationLink in settings.content.navigation" :key="navigationLink._uid" v-editable="navigationLink">
          <nuxt-link class="block text-white uppercase font-bold text-100 leading-tight mb-5 hover:underline focus:underline"
            :to="$options.filters.url(navigationLink.link)" :title="navigationLink.title">
            {{navigationLink.text}}
          </nuxt-link>
        </li>
      </ul>
    </nav>
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