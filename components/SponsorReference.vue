<template>
  <div class="sponsor-reference" v-editable="blok">
    <h2>SponsorReference</h2>
    {{blok.headline}}<br>
    {{blok.subheadline}}
  </div>
</template>

<script>
export default {
  props: ['blok']

  // todo: load and access Sponsors
}
</script>
