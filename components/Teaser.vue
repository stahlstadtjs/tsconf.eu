<template>
  <div class="teaser" v-editable="blok">
    <div class="container px-8 my-24">
      <div class="flex flex-wrap">
        <template v-if="!blok.reverse">
          <div class="w-full lg:w-1/2">
            <img loading="lazy" class="lg:float-right" :src="$options.filters.transformImage(blok.image, '500x0')" alt="">
          </div>
          <div class="w-full lg:w-1/2 lg:pt-16">
            <h2 class="text-red font-bold text-5xl lg:text-6xl uppercase lg:-ml-24">{{blok.headline}}</h2>
            <div class="lg:mr-24 lg:pl-12">
              <p class="text-red font-bold text-2xl">{{blok.text}}</p>
              <nuxt-link v-if="blok.cta_text && !blok.hide_cta" class="py-2 px-3 mt-4 bg-red text-white focus:bg-blue hover:bg-blue inline-block" :to="$options.filters.url(blok.cta_link)" :title="blok.cta_text">{{blok.cta_text}}</nuxt-link>
            </div>
          </div>
        </template>
        <template v-else>
          <div class="w-full lg:w-1/2 lg:pt-16 z-10">
            <h2 class="text-red font-bold text-5xl lg:text-6xl uppercase lg:text-right lg:-mr-24">{{blok.headline}}</h2>
            <div class="mb-5 lg:ml-24 pr-12">
              <p class="text-red font-bold text-2xl lg:text-right">{{blok.text}}</p>
              <nuxt-link v-if="blok.cta_text && !blok.hide_cta" class="py-2 px-3 mt-4 bg-red text-white focus:bg-blue hover:bg-blue inline-block float-right" :to="$options.filters.url(blok.cta_link)" :title="blok.cta_text">{{blok.cta_text}}</nuxt-link>
            </div>
          </div>
          <div class="w-full lg:w-1/2 z-0">
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
