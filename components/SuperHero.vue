<template>
  <div class="super-hero" v-editable="blok">
    <div class="container pt-12 lg:pb-32 lg:pt-32 lg:px-8">
      <div class="flex flex-wrap">
        <div class="lg:w-1/2 px-8">
          <h1 class="headline leading-tight mb-5">{{blok.headline}}</h1>
          <p v-for="line in info" :key="line" class="text-blue font-bold text-2xl">{{line}}</p>
          <a :href="$options.filters.url(blok.cta_link)" target="_blank" rel="noopener noreferrer" class="inline-block py-2 px-3 mt-6 bg-red text-white focus:bg-blue hover:bg-blue">{{blok.cta_text}}</a>
        </div>
        <div class="countdown pb-12 lg:pb-0 lg:w-1/2 bg-transparent pt-12 mt-12 px-8 lg:pt-0 lg:px-0 lg:mt-0 w-full">
          <img loading="lazy" class="w-full" :src="$options.filters.transformImage(blok.image, '500x400')" alt />
          <div class="lg:ml-12 lg:pl-12 lg:mb-6 lg:-mt-12 text-4xl sm:text-5xl lg:text-6xl text-red font-bold leading-none whitespace-pre -mt-24" v-html="blok.tagline"></div>

          <div class="flex flex-wrap text-center text-white font-bold pt-8" v-if="!finished">
            <div class="w-1/5 hidden lg:block"></div>
            <div class="w-1/2 md:w-1/4 lg:w-1/5">
              <span class="block text-4xl">{{days}}</span>
              <span class="block text-xl">Days</span>
            </div>
            <div class="w-1/2 md:w-1/4 lg:w-1/5">
              <span class="block text-4xl">{{hours}}</span>
              <span class="block text-xl">Hours</span>
            </div>
            <div class="w-1/2 md:w-1/4 lg:w-1/5">
              <span class="block text-4xl">{{minutes}}</span>
              <span class="block text-xl">Minutes</span>
            </div>
            <div class="w-1/2 md:w-1/4 lg:w-1/5">
              <span class="block text-4xl">{{seconds}}</span>
              <span class="block text-xl">Seconds</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['blok'],
  data() {
    return {
      days: '',
      hours: '',
      minutes: '',
      seconds: '',
      finished: false
    }
  },
  computed: {
    info() {
      return this.blok.info.split('\n')
    }
  },
  mounted() {
    const countdownDate = new Date(this.blok.countdown.replace(' ', 'T') + ':00+01:00').getTime()
    this.calcDistance(countdownDate)

    const interval = setInterval(() => {
      if (this.calcDistance(countdownDate) < 0) {
        this.finished = true
        clearInterval(interval)
      }
    }, 1000)
  },
  methods: {
    calcDistance(countdownDate) {
      let now = new Date().getTime()
      let distance = countdownDate - now

      this.days = Math.floor(distance / (1000 * 60 * 60 * 24))
      this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      this.seconds = Math.floor((distance % (1000 * 60)) / 1000)

      return distance
    }
  }
}
</script>

<style>
.countdown {
  background: #133179;
}

@media (min-width: 1024px) {
  .super-hero {
    background-image:
    linear-gradient(
      to right, 
      #ffffff,
      #ffffff 55%,
      #133179 45%,
      #133179
    );
  }
  .countdown {
    background: transparent;
  }
}
</style>
