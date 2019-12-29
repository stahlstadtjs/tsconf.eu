<template>
  <div class="super-hero" v-editable="blok">
    <div class="container p-8 pt-32 pb-48">
      <div class="flex">
        <div class="w-1/2">
          <h1 class="text-red uppercase font-bold text-6xl leading-tight mb-5">{{blok.headline}}</h1>
          <p class="text-blue font-bold text-2xl">Linz, AT</p>
          <p class="text-blue font-bold text-2xl">31th March, 2020</p>

          <a href="" class="inline-block py-2 px-3 mt-6 bg-red text-white focus:bg-blue hover:bg-blue">Get your ticket!</a>
        </div>
        <div class="w-1/2">
          <img loading="lazy" :src="$options.filters.transformImage(blok.image, '500x400')" alt />
          <div class="text-red font-bold -mt-12 ml-12 text-6xl pl-12 leading-none mb-6 whitespace-pre" v-html="blok.tagline"></div>

          <div class="flex text-center text-white font-bold" v-if="!finished">
            <div class="w-1/5">
            </div>
            <div class="w-1/5">
              <span class="block text-4xl">{{days}}</span>
              <span class="block text-xl">Days</span>
            </div>
            <div class="w-1/5">
              <span class="block text-4xl">{{hours}}</span>
              <span class="block text-xl">Hours</span>
            </div>
            <div class="w-1/5">
              <span class="block text-4xl">{{minutes}}</span>
              <span class="block text-xl">Minutes</span>
            </div>
            <div class="w-1/5">
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
</style>
