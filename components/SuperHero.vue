<template>
  <div class="super-hero" v-editable="blok">
    <h2>SuperHero</h2>
    {{blok.headline}}<br>
    {{blok.image}}<br>
    {{blok.tagline}}<br>
    {{blok.countdown}}
  </div>
</template>

<script>
export default {
  props: ['blok']
}
</script>
