<template>
  <div class="newsletter text-white bg-blue">
    <div class="container mx-auto pt-24" v-editable="blok">
      <div class="max-w-md text-red text-5xl pl-8 font-bold uppercase">{{blok.headline}}</div>
      <div class="bg-white p-8 mt-12">
        <div class="flex">
          <div class="w-1/2">
            <p class="text-blue font-semibold text-3xl">{{blok.description}}</p>
            <p class="text-red font-semibold text-3xl">{{blok.disclaimer}}</p>
          </div>
          <div class="w-1/2">
            <form class="w-full" :action="$options.filters.url(blok.cta_link)" method="post" name="mc-embedded-subscribe-form" target="_blank">
              <div class="flex pt-12 items-center border-b border-b-2 py-2 mx-auto max-w-md">
                <input class="hidden" type="checkbox" checked="" value="2" name="group[13385][2]" id="mce-group[13385]-13385-1">
                <input class="hidden" type="text" name="b_f5bed0058ba0f92552c55c755_cc56f4a027" tabindex="-1" value="">
                <input class="text-blue bg-light-gray w-full py-2 px-3" name="EMAIL" type="email" required="required" placeholder="Enter your E-Mail ..." aria-label="Your E-Mail for Newsletter subscription">
                <button class="py-2 px-3 bg-red text-white focus:bg-blue hover:bg-blue inline-block" type="button">
                  {{blok.cta_text}}
                </button>
              </div>
            </form>
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
