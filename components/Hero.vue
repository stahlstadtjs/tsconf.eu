<template>
  <div class="hero bg-light-gray" v-editable="blok">
    <div class="container px-8 py-24">
      <div class="flex">
        <div class="w-2/5">
          <h1 class="text-red uppercase font-semibold text-6xl">{{blok.headline}}</h1>
          <h2 class="text-red font-semibold leading-tight text-3xl mb-4">{{blok.subheadline}}</h2>
          <p class="text-blue">{{blok.text}}</p>
        </div>
        <div class="w-3/5 px-12">
          <img class="float-right" :src="$options.filters.transformImage(blok.image, '600x0')" :alt="blok.alt">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['blok']
}
</script>
