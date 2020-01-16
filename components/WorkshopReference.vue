<template>
  <div :id="blok.anchor" v-editable="blok">
    <div class="container px-8 py-24">
      <div class="flex flex-wrap">
        <div class="w-full relative">
          <h2 class="headline">{{blok.headline}}</h2>
          <p class="subheadline mb-6">{{blok.subheadline}}</p>
          <div v-if="blok.tags" class="lg:absolute lg:bottom-0 lg:block hidden whitespace-pre-line text-blue font-bold text-2xl">{{blok.tags}}</div>
        </div>
        <div class="w-full">
          <ul class="flex flex-wrap">
            
            <li v-for="workshop in workshops" :key="workshop.uuid" class="hidden lg:block">
              <div class="flex mt-6 bg-light-gray">
                <div class="w-1/2 p-6">
                  <div class="image-blue">
                    <img class="rounded-full" loading="lazy" :src="$options.filters.transformImage(workshop.content.speakers[0].content.image, '400x400/filters:grayscale()/')" :alt="workshop.content.speakers[0].content.name">
                  </div>
                  <h3 class="relative text-red font-semibold uppercase text-3xl -mt-24 p-4 leading-none bg-white inline-block" v-html="$options.filters.breakEachWord(workshop.content.speakers[0].content.name)"></h3>

                </div>
                <div class="flex-grow w-full text-blue bg-light-gray p-6">
                  <h3 class="subheadline uppercase">{{workshop.content.title}}</h3>
                  <div>{{shorten(workshop.content.markdown, 350)}}...</div>
                  <nuxt-link class="px-3 py-2 mt-4 bg-red text-white focus:bg-blue hover:bg-blue inline-block" :to="$options.filters.url(workshop.full_slug)">Workshop Details</nuxt-link>
                </div>

                <div class="text-center flex items-center bg-red focus:bg-blue hover:bg-blue text-white">
                  <a class="block p-6 w-165" :href="workshop.content.link" target="_blank" rel="noopener noreferrer">
                    <span class="text-white whitespace-pre font-semibold text-3xl uppercase">{{workshop.content.price}}</span>
                    <span class="text-white text-1xl uppercase">incl. 20% VAT</span>
                  </a>
                </div>
              </div>
            </li>

            <li v-for="workshop in workshops" :key="workshop.slug" class="block lg:hidden mb-6">
              <div class="bg-light-gray p-5">
                <h3 class="text-blue font-semibold text-3xl mb-2">
                  {{workshop.content.title}} <span class="text-red">By {{workshop.content.speakers[0].content.name}}</span>
                </h3>
                <hr class="border-1 bg-blue opacity-25 mb-2">
                <div class="text-blue py-3">{{shorten(workshop.content.markdown, 350)}}...</div>
                <div class="flex">
                  <div class="w-1/2 mr-4">
                    <div class="text-center text-blue border-blue focus:bg-blue hover:bg-blue hover:text-white focus:text-white">
                      <a class="block p-5 mt-6 border-2" :href="$options.filters.url(workshop.full_slug)" target="_blank" rel="noopener noreferrer">
                        <span class="leading-tight text-2xl">Workshop<br>Details</span>
                      </a>
                    </div>
                  </div>
                  <div class="w-1/2 ml-4">
                    <div class="text-center bg-red focus:bg-blue hover:bg-blue text-white">
                      <a class="block p-4 mt-6" :href="$options.filters.url(workshop.content.link)" target="_blank" rel="noopener noreferrer">
                        <span class="text-white font-semibold text-3xl uppercase">{{workshop.content.price}}</span>
                        <span class="block text-white text-1xl uppercase">incl. 20% VAT </span>
                      </a>
                    </div>
                  </div>  
                </div>             
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="text-right text-blue text-1xl font-bold whitespace-pre-line">
        {{blok.notice}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['blok'],
  computed: {
    workshops() {
      return this.$store.state.references.workshops
    }
  },
  methods: {
    shorten(text, max) {
      return text && text.length > max ? text.slice(0,max).split(' ').slice(0, -1).join(' ') : text
    }
  }
}
</script>