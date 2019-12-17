<template>
  <div class="speaker-reference" v-editable="blok">
    <h2>SpeakerReference</h2>
    {{blok.headline}}<br>
    {{blok.subheadline}}

    <ul>
      <li v-for="speaker in speakers" :key="speaker.uuid">
        {{speaker}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['blok'],
  computed: {
    speakers() {
      return this.$store.state.references.speakers
    }
  }
}
</script>
