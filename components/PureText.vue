<template>
  <div class="pure-text py-32" v-editable="blok">
    <div class="container mx-auto px-8">
      <div class="max-w-5xl markdown" v-html="$md.render(blok.text)"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['blok']
}
</script>

<style>
.markdown h1 {
  @apply text-red uppercase font-bold text-5xl leading-tight mb-5;
}

.markdown h2 {
  @apply text-blue font-semibold text-3xl leading-tight mb-3;
}

.markdown h3 {
  @apply text-black font-semibold text-2xl leading-tight mb-3;
}

.markdown p {
  @apply text-xl mb-12 whitespace-pre-line;
}
</style>