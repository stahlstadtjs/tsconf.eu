<template>
  <div class="nightlife-reference" v-editable="blok">
    <h2>NightlifeReference</h2>
    {{blok.headline}}<br>
    {{blok.subheadline}}<br>
    {{blok.cta_headline}}<br>
    {{blok.cta_link}}<br>
    {{blok.cta_text}}<br>
    {{blok.cta_title}}
  </div>
</template>

<script>
export default {
  props: ['blok']

  // todo: load and access sightseeing
}
</script>
