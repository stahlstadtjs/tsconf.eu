<template>
  <div class="facts" v-editable="blok">
    <h2>Facts</h2>
    {{blok.headline}}
    <ul>
      <li v-for="fact in blok.facts" :key="fact._uid" v-editable="fact">{{fact.value}} {{fact.key}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['blok']
}
</script>
