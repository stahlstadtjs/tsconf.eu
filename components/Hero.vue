<template>
  <div class="hero" v-editable="blok">
    <h2>Hero</h2>
    {{blok.headline}}<br>
    {{blok.subheadline}}<br>
    {{blok.text}}<br>
    {{blok.image}}<br>
    {{blok.alt}}
  </div>
</template>

<script>
export default {
  props: ['blok']
}
</script>
