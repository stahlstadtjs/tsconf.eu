<template>
  <div class="speaker" v-editable="blok">
    <h1>Speaker</h1>
    {{blok.name}}<br>
    {{blok.abstract}}<br>
    {{blok.bio}}<br>
    {{blok.image}}<br>
    {{blok.twitter}}<br>
    {{blok.github}}<br>
    {{blok.facebook}}<br>
    {{blok.website}}
  </div>
</template>

<script>
export default {
  props: ['blok']
}
</script>
