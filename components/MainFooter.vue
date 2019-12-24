<template>
  <div class="footer text-white bg-blue">
    <div class="container mx-auto" v-editable="blok">
      <div class="flex">
        <div class="w-1/4 px-8 py-12" v-editable="footerColumn" v-for="footerColumn in blok.columns" :key="footerColumn._uid" >
          
          <div class="mb-3 font-semibold">{{footerColumn.headline}}</div>
          <p v-if="footerColumn.text" class="pr-4 opacity-75">{{footerColumn.text}}</p>
          
          <ul>
            <li v-editable="footerLink"
              v-for="footerLink in footerColumn.links" :key="footerLink._uid" >
              <nuxt-link class="opacity-75 hover:opacity-100 mb-1 block" :to="$options.filters.url(footerLink.link)" :title="footerLink.title">{{footerLink.name}}</nuxt-link>
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