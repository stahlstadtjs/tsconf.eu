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
            <li v-for="workshop in workshops" :key="workshop.uuid">
              <div class="flex mt-6">
                <div class="flex-grow w-full text-blue bg-light-gray p-6">
                  <h3 class="text-red uppercase font-semibold text-3xl leading-none">{{workshop.content.title}}</h3>
                  <div class="markdown-block" v-html="$md.render(workshop.content.markdown)"></div>
                  <h3 class="text-red uppercase font-semibold text-2xl leading-none mt-10">Your Trainer</h3>
                  <template v-if="workshop.content.speakers.length === 1">
                    <div class="relative w-200 float-right pl-10">
                      <div class="image-blue">
                        <img class="rounded-full" loading="lazy" :src="$options.filters.transformImage(workshop.content.speakers[0].content.image, '200x200/filters:grayscale()/')" :alt="workshop.content.speakers[0].content.name">
                      </div>
                      <h4 class="relative text-red font-semibold uppercase text-xl -mt-24 p-4 leading-none bg-white inline-block" v-html="breakEachWord(workshop.content.speakers[0].content.name)"></h4>
                    </div>
                    <p class="pt-4 text-blue">{{workshop.content.speakers[0].content.bio}}</p>
                  </template>
                  <h3  class="text-red uppercase font-semibold text-2xl leading-none mt-10">Info</h3>
                  <p class="mt-5">
                    All workshops include a small breakfast, lunch, coffee, drinks, and snacks during the day. Combi-Tickets are available
                  </p>
                </div>
                <div class="text-center flex items-center bg-red focus:bg-blue hover:bg-blue text-white">
                  <a class="block p-6 w-165" href="#" target="_blank" rel="noopener noreferrer">
                    <span class="text-white whitespace-pre font-semibold text-3xl uppercase">€ 399</span>
                    <span class="text-white text-1xl uppercase">incl. 20% VAT</span>
                  </a>
                </div>
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
    workshops() {
      return this.$store.state.references.workshops
    }
  },
  methods: {
    breakEachWord(string) {
      return string.replace(/ /g, '<br>')
    }
  }
}
</script>

<style>
.markdown-block > * {
  margin-top: 1.5rem;
}
</style>
