<template>
  <div class="pure-text" v-editable="blok">
    <div v-html="$md.render(blok.text)"></div>
  </div>
</template>

<script>
export default {
  props: ['blok']
}
</script>