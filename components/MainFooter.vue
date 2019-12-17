<template>
  <div class="main-footer" v-editable="blok">
    <h2>Main Footer</h2>

    <div v-for="footerColumn in blok.columns" :key="footerColumn._uid" v-editable="footerColumn">
      {{footerColumn.headline}}
      {{footerColumn.text}}
      <ul>
        <li v-for="footerLink in footerColumn.links" :key="footerLink._uid" v-editable="footerLink">
          {{footerLink.name}}
          {{footerLink.link}}
          {{footerLink.title}}
        </li>  
      </ul>  
    </div>
  </div>
</template>

<script>
export default {
  props: ['blok']
}
</script>
