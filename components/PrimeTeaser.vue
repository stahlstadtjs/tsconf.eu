<template>
  <div class="prime-teaser" v-editable="blok">
    <h2>PrimeTeaser</h2>
    {{blok.headline}}<br>
    {{blok.text}}<br>
    {{blok.primary_image}}<br>
    {{blok.secondary_image}}<br>
    {{blok.cta_link}}<br>
    {{blok.cta_text}}
  </div>
</template>

<script>
export default {
  props: ['blok']
}
</script>
