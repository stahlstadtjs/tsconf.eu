<template>
  <div class="speaker text-white bg-blue" v-editable="blok">
    <div class="container mx-auto pt-24 min-80-screen">
      <div class="flex flex-wrap">
        <div class="w-full lg:w-2/5 p-6 relative">  
          <img class="absolute top-1/2 -m-32 z-0" src="https://img2.storyblok.com/f/71805/948x950/e98fe93691/a_stilelement_pixelkreis-red-2x-2.png">
          <div class="image-blue w-2/3 lg:w-full">
            <img class="rounded-full" loading="lazy" :src="$options.filters.transformImage(blok.image, '500x500/filters:grayscale()/')" :alt="blok.name">
          </div>
        </div>
        <div class="w-full lg:w-3/5 lg:pt-20 pl-6 pr-12 bg-blue z-10">
          <h1 class="headline">{{blok.name}}</h1>
          <h2 class="text-white pb-6">{{blok.tag}}</h2>
          <p class="text-3xl">{{blok.bio}}</p>

          <a :href="settings.tito_overview_link" class="px-6 py-4 mt-4 bg-red text-white text-center focus:bg-white hover:bg-white focus:text-blue hover:text-blue inline-block">Get a Ticket: Experience {{blok.name}} on stage</a>

          <ul class="flex mt-12">
            <li v-if="blok.twitter">
              <a class="p-2 w-10 mr-4 inline-block
                border-solid border-red border-2 rounded-full hover:border-white focus:border-white
                bg-red hover:bg-blue focus:bg-blue" target="_blank" rel="noopener noreferrer" :href="'https://www.twitter.com/' + blok.twitter" :title="blok.name + ' - Twitter'">
                <img src="https://a.storyblok.com/f/71805/x/08b62f2c3a/twitter.svg" alt="Twitter logo">
              </a>
            </li>
            <li v-if="blok.github">
              <a class="p-2 w-10 mr-4 inline-block
                border-solid border-red border-2 rounded-full hover:border-white focus:border-white
                bg-red hover:bg-blue focus:bg-blue" target="_blank" rel="noopener noreferrer" :href="'https://www.github.com/' + blok.github" :title="blok.name + ' - Github'">
                <img src="https://a.storyblok.com/f/71805/x/86a88f1326/github.svg" alt="Github logo">
              </a>
            </li>
            <li v-if="blok.website">
              <a class="p-2 w-10 mr-4 inline-block
                border-solid border-red border-2 rounded-full hover:border-white focus:border-white
                bg-red hover:bg-blue focus:bg-blue" target="_blank" rel="noopener noreferrer" :href="blok.website" :title="blok.name + ' - Website'">
                <img src="https://a.storyblok.com/f/71805/x/88f2325fc0/globe.svg" alt="Website Icon">
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['blok'],
  computed: {
    settings() {
      return this.$store.state.references.settings
    }
  }
}
</script>
