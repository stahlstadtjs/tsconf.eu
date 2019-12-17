<template>
  <div class="page" v-editable="blok">
    <h1>Page</h1>
    <template v-for="blok in blok.body">
      <component 
        :key="blok._uid"
        :blok="blok"
        :is="blok.component"></component>
    </template>
  </div>
</template>

<script>
export default {
  props: ['blok']
}
</script>
