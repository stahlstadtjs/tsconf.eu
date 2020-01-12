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
            <li class="w-full sm:w-1/2" v-for="talk in talks" :key="talk.uuid">
              <div class="px-10 lg:px-0 lg:pl-20 pb-12">
                <template v-if="talk.content.speakers.length === 1">
                  <div class="image-blue">
                    <img class="rounded-full" loading="lazy" :src="$options.filters.transformImage(talk.content.speakers[0].content.image, '400x400/filters:grayscale()/')" :alt="talk.content.speakers[0].content.name">
                  </div>
                  <h3 class="relative text-red font-semibold uppercase text-3xl -mt-24 p-4 leading-none bg-white inline-block" v-html="breakEachWord(talk.content.speakers[0].content.name)"></h3>
                  <p class="pt-4 text-blue text-lg">{{talk.content.title}}</p>
                </template>
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
    }
  },
  methods: {
    breakEachWord(string) {
      return string.replace(/ /g, '<br>')
    }
  }
}
</script>
