<template>
  <div class="map-teaser" v-editable="blok">
    <h2>Map Teaser</h2>
    {{blok.headline}}<br>
    {{blok.gmaps_image}}<br>
    {{blok.gmaps_image_alt}}<br>
    {{blok.address}}<br>
    {{blok.gmaps_link}}

    <ul>
      <li v-for="instruction in blok.instructions" :key="instruction._uid" v-editable="instruction">
        <span v-html="instruction.headline"></span>
        <div v-html="$md.render(instruction.text)"></div>
        {{instruction.icon}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['blok']
}
</script>
