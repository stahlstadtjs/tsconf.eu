<template>
  <div class="footer text-white bg-blue">
    <div class="container mx-auto" v-editable="blok">
      <div class="flex flex-wrap py-12">
        <div class="w-1/2 md:w-1/4 px-8" v-editable="footerColumn" v-for="footerColumn in blok.columns" :key="footerColumn._uid" >
          
          <div class="mb-3 font-semibold">{{footerColumn.headline}}</div>
          <p v-if="footerColumn.text" class="pr-4 opacity-75">{{footerColumn.text}}</p>
          
          <ul>
            <li v-editable="footerLink"
              v-for="footerLink in footerColumn.links" :key="footerLink._uid" >
              <nuxt-link class="opacity-75 focus:opacity-100 hover:opacity-100 mb-1 block" :to="$options.filters.url(footerLink.link)" :title="footerLink.title">{{footerLink.name}}</nuxt-link>
            </li>  
          </ul>  
        </div>
        <div class="w-1/2 md:w-1/4 px-8">
          <ul class="flex">
            <li>
              <a class="p-2 w-10 mr-4 inline-block
                border-solid border-red border-2 rounded-full hover:border-white focus:border-white
                bg-red hover:bg-blue focus:bg-blue" target="_blank" rel="noopener noreferrer" href="https://www.twitter.com/tsconfeu" title="TS:Conf EU - Twitter">
                <img src="https://a.storyblok.com/f/71805/x/08b62f2c3a/twitter.svg" alt="Twitter logo">
              </a>
            </li>
            <li>
              <a class="p-2 w-10 mr-4 inline-block
                border-solid border-red border-2 rounded-full hover:border-white focus:border-white
                bg-red hover:bg-blue focus:bg-blue" target="_blank" rel="noopener noreferrer" href="https://tsconfeu.slack.com/" title="TS:Conf EU - Slack">
                <img src="https://a.storyblok.com/f/71805/x/03dc50177f/slack.svg" alt="Slack logo">
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr class="border-b">
      <div class="p-8 opacity-75">{{blok.copyright}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['blok']
}
</script>