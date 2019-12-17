<template>
  <div class="speaker-reference" v-editable="blok">
    <h2>SpeakerReference</h2>
    {{blok.headline}}<br>
    {{blok.subheadline}}
  </div>
</template>

<script>
export default {
  props: ['blok']

  // todo: load and access speakers
}
</script>
