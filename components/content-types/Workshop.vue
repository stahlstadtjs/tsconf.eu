<template>
  <div class="workshop text-white bg-blue" v-editable="blok">
    <div class="container mx-auto pt-24">
      <div class="flex">
        <div class="w-1/3 p-6 hidden sm:block">
          <div class="image-blue">
            <img class="rounded-full" loading="lazy" :src="$options.filters.transformImage(blok.speakers[0].content.image, '400x400/filters:grayscale()/')" :alt="blok.speakers[0].content.name">
          </div>
          <h3 class="relative text-red font-semibold uppercase text-3xl -mt-24 p-4 leading-none bg-white inline-block" v-html="$options.filters.breakEachWord(blok.speakers[0].content.name)"></h3>
        
          <div class="pt-12"><span class="font-bold text-4xl">{{blok.price}}</span> inclusive 20% VAT</div>
          <a class="px-6 py-4 mt-4 bg-red text-white text-center focus:bg-white hover:bg-white focus:text-blue hover:text-blue block" :to="$options.filters.url(blok.link)">Secure your ticket</a>
          <div class="text-sm pt-3">All workshops include a small breakfast, lunch, coffee, drinks, and snacks during the day.<br>Combi-Tickets are available</div>
        </div>
        <div class="w-full sm:w-2/3 p-6 pl-6 md:pl-12 ">
          <h1 class="headline text-white mb-6">{{blok.title}}</h1>
          <div class="workshop__content" v-html="$md.render(blok.markdown)"></div>

          <h2 class="subheadline mt-6 mb-3">About {{blok.speakers[0].content.name}}</h2>
          <div class="workshop__content" v-html="$md.render(blok.speakers[0].content.bio)"></div>
        </div>
      </div>
       <div class="w-full p-6 block sm:hidden">
        <div class="w-1/2">
          <div class="image-blue">
            <img class="rounded-full" loading="lazy" :src="$options.filters.transformImage(blok.speakers[0].content.image, '400x400/filters:grayscale()/')" :alt="blok.speakers[0].content.name">
          </div>
        </div>
        <h3 class="relative text-red font-semibold uppercase text-3xl -mt-24 p-4 leading-none bg-white inline-block" v-html="$options.filters.breakEachWord(blok.speakers[0].content.name)"></h3>
      
        <div class="pt-12"><span class="font-bold text-4xl">{{blok.price}}</span> inclusive 20% VAT</div>
        <a class="px-6 py-4 mt-4 bg-red text-white text-center focus:bg-white hover:bg-white focus:text-blue hover:text-blue block" :to="$options.filters.url(blok.link)">Secure your ticket</a>
        <div class="text-sm pt-3">All workshops include a small breakfast, lunch, coffee, drinks, and snacks during the day.<br>Combi-Tickets are available</div>
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
.workshop__content > p {
  font-size: 1rem;
  margin-bottom: 1rem;
}
</style>
