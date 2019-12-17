<template>
  <div class="newsletter" v-editable="blok">
    <h2>Newsletter</h2>

    {{blok.headline}}<br>
    {{blok.description}}<br>
    {{blok.disclaimer}}<br>
    {{blok.cta_link}}<br>
    {{blok.cta_text}}<br>
    {{blok.cta_title}}

  </div>
</template>

<script>
export default {
  props: ['blok']
}
</script>
