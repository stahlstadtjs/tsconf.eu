<template>
  <div class="sensation-teaser" v-editable="blok">
    <h2>Sensation Teaser</h2>
    {{blok.headline}}<br>
    {{blok.subheadline}}<br>
    {{blok.text}}<br>
    {{blok.cta_text}}<br>
    {{blok.cta_link}}<br>
    {{blok.cta_title}}<br>
    {{blok.images}}
  </div>
</template>

<script>
export default {
  props: ['blok']
}
</script>
