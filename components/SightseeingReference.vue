<template>
  <div class="sightseeing-references bg-light-gray" v-editable="blok">
    <div class="container px-8 py-24">
      <div class="w-full lg:w-2/5">
        <h2 class="headline">{{blok.headline}}</h2>
        <p class="text-red font-semibold leading-tight text-3xl mb-4">{{blok.subheadline}}</p>
        <p class="text-blue">{{blok.text}}</p>
      </div>
      <ul class="flex flex-wrap mt-12">
        <li class="w-1/2 lg:w-1/3 mb-12 pr-12 text-center" v-for="sightseeing in sightseeingEntries" :key="sightseeing.uuid">
          <a :href="sightseeing.gmaps_link" :title="'Open Google Maps to ' + sightseeing.name">
            <div class="ib">
              <img loading="lazy" :src="sightseeing.content.image || 'https://source.unsplash.com/collection/190727/1600x900'" :alt="sightseeing.name">
            </div>
            <h3 class="relative text-red font-semibold uppercase sm:text-lg lg:text-2xl -mt-24 p-4 leading-none bg-white inline-block">{{sightseeing.name}}</h3>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ['blok'],
  computed: {
    sightseeingEntries() {
      return this.$store.state.references.sightseeing
    }
  }
}
</script>
