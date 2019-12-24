<template>
  <div class="facts" v-editable="blok">
    <div class="container px-12 my-24">
      <div class="text-center max-w-xl mx-auto">
        <h2 class="text-red font-semibold text-3xl mb-6">{{blok.headline}}</h2>
        <ul class="flex">
          <li class="w-1/3" v-for="fact in blok.facts" :key="fact._uid" v-editable="fact">
            <span class="block text-6xl font-bold text-blue">{{fact.value}}</span>
            <span class="block text-2xl font-bold text-blue">{{fact.key}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['blok']
}
</script>
