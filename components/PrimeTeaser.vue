<template>
  <div class="prime-teaser relative" v-editable="blok">
    <div class="container p-8 py-32">
      <div class="flex flex-wrap">
        <div class="w-full md:w-1/2">
          <img class="pr-12" :src="$options.filters.transformImage(blok.primary_image, '500x0')" :alt="blok.primary_image_alt" />
        </div>
        <div class="w-full md:w-1/2">
          <h2 class="text-red uppercase font-bold text-6xl">{{blok.headline}}</h2>
          <p class="text-red font-semibold text-3xl mb-6">{{blok.subheadline}}</p>
          <p class="text-blue text-lg lg:pr-32 mb-6">{{blok.text}}</p>

          <a :href="$options.filters.url(blok.cta_link)" class="py-2 px-3 mt-4 bg-red text-white hover:bg-blue inline-block">{{blok.cta_text}}</a>
        
          <img class="absolute right-0 bottom-0 hidden lg:block" :src="$options.filters.transformImage(blok.secondary_image, '250x150')"  :alt="blok.secondary_image_alt">
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