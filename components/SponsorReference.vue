<template>
  <div class="sponsor-reference" v-editable="blok">
    <div class="container p-8 py-32">
      <h2 class="text-red font-bold text-6xl uppercase text-center">{{blok.headline}}</h2>
      <p class="text-red font-semibold text-3xl mb-12 max-w-lg text-center mx-auto">{{blok.subheadline}}</p>

      <h3 class="text-red font-semibold text-1xl">Platinum Sponsor</h3>
      <ul class="flex flex-wrap">
        <li class="w-48 lg:w-1/5" :class="{ 'md:mt-6': index % 2 === 0 }" v-for="(sponsor, index) in platinumSponsors" :key="sponsor.uuid" v-editable="sponsor.content">
          <a class="block shadow-lg focus:shadow-xl hover:shadow-xl mr-6 md:mr-8 p-6 rounded-full overflow-hidden" :href="$options.filters.url(sponsor.content.link)">
            <img loading="lazy" :src="$options.filters.transformImage(sponsor.content.logo, 'fit-in/176x176/filters:fill(FFFFFF)')" :alt="sponsor.name">
          </a>
        </li>
      </ul>

      <div class="flex flex-wrap mt-24">
        <div class="w-full md:w-1/2">
          <template v-if="goldSponsors.length > 0">
            <h3 class="text-red font-semibold text-1xl mb-3">Gold Sponsor</h3>
            <ul class="flex">
              <li class="w-1/3 mr-6" v-for="sponsor in goldSponsors" :key="sponsor.uuid" v-editable="sponsor.content">
                <a class="block shadow-lg focus:shadow-xl hover:shadow-xl p-6" :href="$options.filters.url(sponsor.content.link)">
                  <img loading="lazy" :src="$options.filters.transformImage(sponsor.content.logo, 'fit-in/144x80/filters:fill(FFFFFF)')" :alt="sponsor.name">
                </a>
              </li>
            </ul>
          </template>
        </div>

        <div class="w-full md:w-1/2">
          <template v-if="silverSponsors.length > 0">
          <h3 class="text-red font-semibold text-1xl mb-3">Silver Sponsor</h3>
          <ul class="flex mb-12">
            <li class="w-1/3 mr-6" v-for="sponsor in silverSponsors" :key="sponsor.uuid" v-editable="sponsor.content">
              <a class="block p-6" :href="$options.filters.url(sponsor.content.link)">
                <img loading="lazy" :src="$options.filters.transformImage(sponsor.content.logo, 'fit-in/144x80/filters:fill(FFFFFF)')" :alt="sponsor.name">
              </a>
            </li>
          </ul>
          </template>

          <template v-if="bronzeSponsors.length > 0">
            <h3 class="text-red font-semibold text-1xl mb-3">Bronze Sponsor</h3>
            <ul class="flex">
              <li class="w-1/4 mr-6" v-for="sponsor in bronzeSponsors" :key="sponsor.uuid" v-editable="sponsor.content">
                <a class="block p-6" :href="$options.filters.url(sponsor.content.link)">
                  <img loading="lazy" :src="$options.filters.transformImage(sponsor.content.logo, 'fit-in/144x80/filters:fill(FFFFFF)')" :alt="sponsor.name">
                </a>
              </li>
            </ul>  
          </template>  
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  props: ['blok'],
  computed: {
    sponsors() {
      return this.$store.state.references.sponsors
    },
    platinumSponsors() {
      return this.sponsors.filter((sponsor) => {
        return sponsor.content.type === 'platinum'
      })
    },
    goldSponsors() {
      return this.sponsors.filter((sponsor) => {
        return sponsor.content.type === 'gold'
      })
    },
    silverSponsors() {
      return this.sponsors.filter((sponsor) => {
        return sponsor.content.type === 'silver'
      })
    },
    bronzeSponsors() {
      return this.sponsors.filter((sponsor) => {
        return sponsor.content.type === 'bronze'
      })
    },
    otherSponsors() {
      return this.sponsors.filter((sponsor) => {
        return ['platinum', 'gold', 'silver', 'bronze'].indexOf(sponsor.content.type) < 0
      })
    }
  }
}
</script>
