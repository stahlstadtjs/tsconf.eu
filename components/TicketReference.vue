<template>
  <div class="ticket-reference" v-editable="blok">
    <h2>TicketReference</h2>
    {{blok.headline}}<br>
    {{blok.notice}}

    <ul>
      <li v-for="ticket in tickets" :key="ticket.uuid">
        {{ticket}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['blok'],
  computed: {
    tickets() {
      return this.$store.state.references.tickets
    }
  }
}
</script>
