<template>
  <div class="ticket-reference" v-editable="blok">
    <h2>TicketReference</h2>
    {{blok.headline}}<br>
    {{blok.notice}}
  </div>
</template>

<script>
export default {
  props: ['blok']

  // todo: load and access tickets
}
</script>
