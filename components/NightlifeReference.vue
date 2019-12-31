<template>
  <div class="nightlife-reference" v-editable="blok">
    <h2>NightlifeReference</h2>
    {{blok.headline}}<br>
    {{blok.subheadline}}<br>
    {{blok.cta_headline}}<br>
    {{blok.cta_link}}<br>
    {{blok.cta_text}}<br>
    {{blok.cta_title}}

    <ul>
      <li v-for="nightlife in nightlifeEntries" :key="nightlife.uuid">
        {{nightlife}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['blok'],
  computed: {
    nightlifeEntries() {
      return this.$store.state.references.nightlife
    }
  }
}
</script>
