<template>
  <div :id="blok.anchor" class="bg-light-gray" v-editable="blok">
    <div class="container px-8 py-24">
      <div class="flex flex-wrap">
        <div class="w-full lg:w-1/3 relative">
          <h2 class="headline">{{blok.headline}}</h2>
          <p class="subheadline mb-6">{{blok.subheadline}}</p>
          <div class="lg:absolute lg:bottom-0 lg:block hidden whitespace-pre-line text-blue font-bold text-2xl">{{blok.tags}}</div>
        </div>
        <div class="w-full lg:w-2/3">
          <ul class="flex flex-wrap">
            <li class="w-full sm:w-1/2" v-for="speaker in speakers" :key="speaker.uuid">
              <nuxt-link class="px-10 lg:px-0 lg:pl-20 pb-12 block" :to="$options.filters.url(speaker.full_slug)">
                <div class="image-blue">
                  <img class="rounded-full" loading="lazy" :src="$options.filters.transformImage(speaker.content.image, '400x400/filters:grayscale()/')" :alt="speaker.content.name">
                </div>
                <h3 class="relative text-red font-semibold uppercase text-3xl -mt-24 p-4 leading-none bg-white inline-block" v-html="$options.filters.breakEachWord(speaker.content.name)"></h3>
                <p class="pt-4 text-blue text-lg">{{speaker.content.tag}}</p>
              </nuxt-link>
            </li>
            <li class="w-full sm:w-1/2">
              <div class="px-10 lg:px-0 lg:pl-20 pb-12">
                <div class="image-blue">
                  <img class="rounded-full" loading="lazy" :src="$options.filters.transformImage('//a.storyblok.com/f/71805/400x400/64d7c33394/huh.png', '400x400/filters:grayscale()/')" alt="More speakers coming up">
                </div>
                <h3 class="relative text-red font-semibold uppercase text-3xl -mt-24 p-4 leading-none bg-white inline-block">To be announced</h3>
                <p class="pt-4 text-blue text-lg">More speakers coming up!</p>
              </div>
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
    talks() {
      return this.$store.state.references.talks
    },
    speakers() {
      return this.$store.state.references.talks.reduce((acc, el) => {
        return acc.concat(el.content.speakers)
      }, [])
    }
  }
}
</script>
