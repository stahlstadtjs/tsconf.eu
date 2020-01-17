<template>
  <div class="ticket-reference" v-editable="blok">
    <div class="container px-8 my-24">
      <h2 class="headline">{{blok.headline}}</h2>
      <ul class="hidden md:block">
        <li v-for="ticket in tickets" :key="ticket.slug">
          <div class="flex mt-6" :class="{'opacity-50': ticket.sold_out}">
            <div class="bg-light-gray p-6">
              <h3 class="text-red uppercase font-semibold text-3xl leading-none w-165" v-html="$options.filters.breakEachWord(ticket.title + ' ticket')"></h3>
            </div>
            <div class="flex-grow text-blue bg-light-gray p-6">
              <div v-html="$md.render(ticket.description)"></div>
            </div>
            <div v-if="ticket.sold_out" class="text-center bg-light-gray">
              <div class="text-blue font-semibold text-3xl uppercase p-8">sold<br>out</div>
            </div>
            <div v-else class="text-center flex bg-red focus:bg-blue hover:bg-blue text-white">
              <a class="block p-6 w-165" :href="ticket.url" target="_blank" rel="noopener noreferrer">
                <span class="text-white whitespace-pre font-semibold text-3xl uppercase">€ {{ticket.price}}</span>
                <span class="text-white text-1xl uppercase">incl. 20% VAT</span>
                <span v-if="ticket.left > -1" class="text-white font-bold text-1xl uppercase block">{{ticket.left}} tickets left</span>
              </a>
            </div>
          </div>
        </li>
      </ul>
      <ul class="block md:hidden mt-8">
        <li v-for="ticket in tickets" :key="ticket.slug">
          <div class="bg-light-gray p-5" :class="{'opacity-50': ticket.sold_out}">
            <h3 class="text-red uppercase font-semibold text-3xl mb-2">{{ticket.title}}</h3>
            <hr class="border-1 bg-blue opacity-25 mb-2">

            <div class="text-blue">
              <div v-html="$md.render(ticket.description)"></div>
            </div>

            <div v-if="ticket.sold_out" class="text-center">
              <div class="text-blue font-semibold text-3xl uppercase p-8">sold<br>out</div>
            </div>
            <div v-else class="text-center bg-red focus:bg-blue hover:bg-blue text-white">
              <a class="block p-4 mt-6" :href="ticket.url" target="_blank" rel="noopener noreferrer">
                <span class="text-white font-semibold text-3xl uppercase">€ {{ticket.price}}</span>
                <span class="block text-white text-1xl uppercase">incl. 20% VAT </span>
                <span v-if="ticket.left > -1" class="text-white font-bold text-1xl uppercase block">{{ticket.left}} tickets left</span>
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
        .filter(ticket => !ticket.title.toLowerCase().includes('workshop'))
    }
  }
}
</script>
