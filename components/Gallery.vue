<template>
  <div class="gallery" v-editable="blok">
    <h2>Gallery</h2>
    {{blok.images}}
  </div>
</template>

<script>
export default {
  props: ['blok']
}
</script>
