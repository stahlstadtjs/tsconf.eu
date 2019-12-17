<template>
  <div class="sightseeing-reference" v-editable="blok">
    <h2>SightseeingReference</h2>
    {{blok.headline}}<br>
    {{blok.subheadline}}

    <ul>
      <li v-for="sightseeing in sightseeingEntries" :key="sightseeing.uuid">
        {{sightseeing}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['blok'],
  computed: {
    sightseeingEntries() {
      return this.$store.state.references.sightseeing
    }
  }
}
</script>
