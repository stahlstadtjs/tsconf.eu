<template>
  <div class="ticket-reference" v-editable="blok">
    <div class="container px-8 my-24">
      <h2 class="text-red uppercase font-bold text-6xl">{{blok.headline}}</h2>
      <ul>
        <li v-for="ticket in tickets" :key="ticket._uid" v-editable="ticket.content">
          <div class="flex bg-light-gray mt-6 -mx-8 p-8">
            <div class="w-1/6">
              <h3 class="text-red uppercase font-semibold text-3xl leading-none" v-html="breakEachWord(ticket.name)"></h3>
            </div>
            <div class="w-3/6 text-blue">
              <div v-html="$md.render(ticket.content.description)"></div>
            </div>
            <div class="w-4/12">

            </div>
            <div v-if="ticket.content.sold_out" class="w-2/12 text-center -m-8 min-h-full">
              <div class="text-blue font-semibold text-3xl uppercase p-8">sold<br>out</div>
            </div>
            <div v-else class="w-2/12 text-center -m-8 bg-red focus:bg-blue hover:bg-blue text-white min-h-full">
              <a class="block p-8" href="">
                <span class="text-white font-semibold text-3xl uppercase">{{ticket.content.price}}</span>
                <span class="text-white font-semibold text-1xl uppercase">Ticket </span>
              </a>
            </div>
          </div>
        </li>
      </ul>
      <div class="text-right text-blue text-1xl font-bold whitespace-pre-line">
        {{blok.notice}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['blok'],
  computed: {
    tickets() {
      return this.$store.state.references.tickets
    }
  },
  methods: {
   breakEachWord(string) {
     return string.replace(/ /g, '<br>')
   } 
  }
}
</script>
