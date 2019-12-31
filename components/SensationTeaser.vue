<template>
  <div class="bg-light-gray" v-editable="blok">
    <div class="container px-8 py-24">
      <div class="flex flex-wrap">
        <div class="w-full lg:w-2/5">
          <h2 class="text-red uppercase font-semibold text-4xl sm:text-5xl lg:text-6xl">{{blok.headline}}</h2>
          <h3 class="text-red font-semibold leading-tight text-3xl mb-4">{{blok.subheadline}}</h3>
          <p class="text-blue">{{blok.text}}</p>
        </div>
        <div class="w-full pt-12 lg:pt-0 lg:w-3/5 lg:px-12">
          <template v-for="image in blok.images">
            <img :key="image.filename" loading="lazy" :src="$options.filters.transformImage(image.filename, '600x0')" :alt="image.name">
          </template>
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
