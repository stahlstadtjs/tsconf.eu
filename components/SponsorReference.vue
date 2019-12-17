<template>
  <div class="sponsor-reference" v-editable="blok">
    <h2>SponsorReference</h2>
    {{blok.headline}}<br>
    {{blok.subheadline}}

    <ul>
      <li v-for="sponsor in sponsors" :key="sponsor.uuid">
        {{sponsor}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['blok'],
  computed: {
    sponsors() {
      return this.$store.state.references.sponsors
    }
  }
}
</script>
