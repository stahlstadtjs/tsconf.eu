<template>
  <div class="teaser" v-editable="blok">
    <h2>Teaser</h2>
    {{blok.headline}}<br>
    {{blok.image}}<br>
    {{blok.text}}<br>
    {{blok.cta_text}}<br>
    {{blok.cta_link}}<br>
    {{blok.hide_dots}}<br>
    {{blok.reverse}}
  </div>
</template>

<script>
export default {
  props: ['blok']
}
</script>
