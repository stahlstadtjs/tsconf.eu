<template>
  <div class="teaser" v-editable="blok">
    <div class="container px-8 my-24">
      <div class="flex flex-wrap">
        <template v-if="!blok.reverse">
          <div class="w-full md:w-1/2">
            <img loading="lazy" class="md:float-right" :src="$options.filters.transformImage(blok.image, '500x0')" alt="">
          </div>
          <div class="w-full md:w-1/2 md:pt-16">
            <h2 class="text-red font-bold text-6xl uppercase md:-ml-24">{{blok.headline}}</h2>
            <div class="md:mr-24 md:pl-12">
              <p class="text-red font-bold text-2xl">{{blok.text}}</p>
              <nuxt-link v-if="blok.cta_text" class="py-2 px-3 mt-4 bg-red text-white focus:bg-blue hover:bg-blue inline-block" :to="$options.filters.url(blok.cta_link)" :title="blok.cta_text">{{blok.cta_text}}</nuxt-link>
            </div>
          </div>
        </template>
        <template v-else>
          <div class="w-full md:w-1/2 pt-16 z-10">
            <h2 class="text-red font-bold text-6xl uppercase md:text-right md:-mr-24">{{blok.headline}}</h2>
            <div class="mb-5 md:ml-24 pr-12">
              <p class="text-red font-bold text-2xl md:text-right">{{blok.text}}</p>
              <nuxt-link v-if="blok.cta_text" class="py-2 px-3 mt-4 bg-red text-white focus:bg-blue hover:bg-blue inline-block float-right" :to="$options.filters.url(blok.cta_link)" :title="blok.cta_text">{{blok.cta_text}}</nuxt-link>
            </div>
          </div>
          <div class="w-full md:w-1/2 z-0">
            <img loading="lazy" :src="$options.filters.transformImage(blok.image, '500x0')" alt="">
          </div>
        </template>
      </div>
      <!-- {{blok.hide_dots}} -->
    </div>
  </div>
</template>

<script>
export default {
  props: ['blok']
}
</script>
