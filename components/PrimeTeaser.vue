<template>
  <div class="prime-teaser relative" v-editable="blok">
    <div class="container p-8 py-32">
      <div class="flex flex-wrap">
        <div class="w-full md:w-1/2">
          <img loading="lazy" class="md:pr-12" :src="$options.filters.transformImage(blok.primary_image, '500x0')" :alt="blok.primary_image_alt" />
        </div>
        <div class="w-full md:w-1/2 -mt-10 lg:mt-0">
          <h2 class="headline">{{blok.headline}}</h2>
          <p class="subheadline mb-6">{{blok.subheadline}}</p>
          <p class="text-blue text-lg lg:pr-32 mb-6">{{blok.text}}</p>

          <template v-if="blok.cta_text">
            <nuxt-link v-if="$options.filters.url(blok.cta_link).indexOf('http') === -1" class="py-2 px-3 mt-4 bg-red text-white focus:bg-blue hover:bg-blue inline-block" :to="$options.filters.url(blok.cta_link)" :title="blok.cta_text">{{blok.cta_text}}</nuxt-link>
            <a v-else :href="$options.filters.url(blok.cta_link)" class="py-2 px-3 mt-4 bg-red text-white focus:bg-blue hover:bg-blue inline-block">{{blok.cta_text}}</a>
          </template>
          
          <img loading="lazy" class="absolute right-0 bottom-0 hidden lg:block" :src="$options.filters.transformImage(blok.secondary_image, '250x150')"  :alt="blok.secondary_image_alt">
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

<style>
@media (min-width: 768px) {
  .prime-teaser {
    background-image:
      linear-gradient(
        to left, 
        #ffffff,
        #ffffff 65%,
        #133179 35%,
        #133179
    );
  }
}
</style>
