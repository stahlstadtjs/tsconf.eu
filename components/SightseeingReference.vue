<template>
  <div class="sightseeing-reference" v-editable="blok">
    <h2>SightseeingReference</h2>
    {{blok.headline}}<br>
    {{blok.subheadline}}
  </div>
</template>

<script>
export default {
  props: ['blok']

  // todo: load and access sightseeing
}
</script>
