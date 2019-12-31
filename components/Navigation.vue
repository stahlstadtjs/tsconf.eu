<template>
  <div class="bg-red fixed top-0 left-0 z-40 h-screen w-screen" v-if="isMainNavigationVisible">
    <nav>
      <ul>
        <li>
          
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