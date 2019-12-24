<template>
  <main class="page" v-editable="blok">
    <component 
      v-for="blok in blok.body"
      :key="blok._uid"
      :blok="blok"
      :is="blok.component"></component>
  </main>
</template>

<script>
export default {
  props: ['blok']
}
</script>
