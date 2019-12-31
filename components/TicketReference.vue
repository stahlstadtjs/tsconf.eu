<template>
  <div class="ticket-reference" v-editable="blok">
    <div class="container px-8 my-24">
      <h2 class="text-red uppercase font-bold text-5xl lg:text-6xl">{{blok.headline}}</h2>
      <ul class="hidden md:block">
        <li v-for="ticket in tickets" :key="ticket._uid" v-editable="ticket.content">
          <div class="flex mt-6">
            <div class="bg-light-gray p-6">
              <h3 class="text-red uppercase font-semibold text-3xl leading-none" v-html="breakEachWord(ticket.name)"></h3>
            </div>
            <div class="flex-grow text-blue bg-light-gray p-6">
              <div v-html="$md.render(ticket.content.description)"></div>
            </div>
            <div v-if="ticket.content.sold_out" class="text-center bg-light-gray p-6">
              <div class="text-blue font-semibold text-3xl uppercase p-8">sold<br>out</div>
            </div>
            <div v-else class="text-center flex bg-red focus:bg-blue hover:bg-blue text-white ">
              <a class="block p-6" :href="ticket.content.link" target="_blank" rel="noopener noreferrer">
                <span class="text-white whitespace-pre font-semibold text-3xl uppercase">{{ticket.content.price}}</span>
                <span class="text-white text-1xl uppercase">incl. 20% VAT</span>
              </a>
            </div>
          </div>
        </li>
      </ul>
      <ul class="block md:hidden mt-8">
        <li v-for="ticket in tickets" :key="ticket._uid" v-editable="ticket.content">
          <div class="bg-light-gray p-5">
            <h3 class="text-red uppercase font-semibold text-3xl mb-2">{{ticket.name}}</h3>
            <hr class="border-1 bg-blue opacity-25 mb-2">

            <div class="text-blue">
              <div v-html="$md.render(ticket.content.description)"></div>
            </div>

            <div v-if="ticket.content.sold_out" class="text-center">
              <div class="text-blue font-semibold text-3xl uppercase p-8">sold<br>out</div>
            </div>
            <div v-else class="text-center bg-red focus:bg-blue hover:bg-blue text-white">
              <a class="block p-4 mt-6" :href="ticket.content.link" target="_blank" rel="noopener noreferrer">
                <span class="text-white font-semibold text-3xl uppercase">{{ticket.content.price}}</span>
                <span class="block text-white font-semibold text-1xl uppercase">incl. 20% VAT </span>
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
