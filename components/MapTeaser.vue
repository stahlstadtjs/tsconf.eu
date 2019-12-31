<template>
  <div class="bg-light-gray" v-editable="blok">
    <div class="container px-8 py-24">
      <h2 class="text-red uppercase font-semibold text-5xl lg:text-6xl mb-4">{{blok.headline}}</h2>
      <div class="relative hidden lg:block">
        <img :src="blok.gmaps_image" :alt="blok.gmaps_image_alt">
        <div class="text-red text-3xl font-semibold whitespace-pre-line my-4">{{blok.address}}</div>
        <a class="text-red underline text-2xl" :href="$options.filters.url(blok.gmaps_link)" target="_blank" rel="noopener noreferrer">Open Google Maps</a>
        <div class="absolute w-1/2 top-0 right-0 mt-24">
          <ul>
            <li class="bg-white p-8" v-for="instruction in blok.instructions" :key="instruction._uid" v-editable="instruction">
              <span class="text-red uppercase font-semibold text-2xl" v-html="instruction.headline"></span>
              <div class="text-blue" v-html="$md.render(instruction.text)"></div>
            </li>
          </ul>
        </div>
      </div>

      <div class="block lg:hidden">
        
        <div class="flex flex-wrap">
          <div class="w-full md:w-1/3">
            <div class="text-red text-3xl font-semibold whitespace-pre-line my-4">{{blok.address}}</div>
            <a class="text-red underline text-2xl" :href="$options.filters.url(blok.gmaps_link)" target="_blank" rel="noopener noreferrer">Open Google Maps</a>
          </div>
          <div class="w-full md:w-2/3">
            <ul class="pt-8 md:pt-0 md:pl-4">
              <li class="bg-white p-8" v-for="instruction in blok.instructions" :key="instruction._uid" v-editable="instruction">
                <span class="text-red uppercase font-semibold text-2xl" v-html="instruction.headline"></span>
                <div class="text-blue" v-html="$md.render(instruction.text)"></div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['blok']
}
</script>
