<template>
  <nuxt />
</template>

<script>
export default {
  watch: {
    $route () {
      this.$store.commit('interactions/setMainNavigationVisibility', false)
    }
  },
}
</script>
