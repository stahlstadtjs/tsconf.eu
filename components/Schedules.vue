<template>
  <div class="schedules bg-light-gray" v-editable="blok">
    <div class="container px-8 pt-12 pb-24">
      <div class="flex">
        
        <div class="w-1/2 schedule" v-for="schedule in blok.schedules" :key="schedule._uid" v-editable="schedule">
          <h3>
            <div class="text-blue float-right mt-2">{{schedule.notice}}</div>
            <span class="text-blue font-bold text-3xl uppercase block">{{schedule.headline}}</span>
            <span class="text-blue font-bold text-6xl block" v-html="schedule.date"></span>
          </h3>
          
          <ul>
            <li class="flex py-6 pr-12" v-for="scheduleItem in schedule.schedule_items" :key="scheduleItem._uid" v-editable="scheduleItem">
              <div class="w-1/4">
                <span class="text-blue font-bold text-2xl">{{scheduleItem.time}}</span>
              </div>
              <div class="w-3/4" v-if="!scheduleItem.speaker">
                <h4 class="text-red font-semibold leading-tight text-3xl mb-4">{{scheduleItem.headline}}</h4>
                <div class="flex">
                  <img class="rounded-full" v-if="scheduleItem.image" :src="$options.filters.transformImage(scheduleItem.image, '80x80')" alt="">
                  <p v-if="scheduleItem.text" class="text-blue">{{scheduleItem.text}}</p>
                </div>
              </div>
              <div class="w-3/4" v-if="scheduleItem.speaker">
                <h4 class="text-red font-semibold leading-tight text-3xl mb-4">{{speakers[scheduleItem.speaker].name}}</h4>
                <div class="flex">
                  <img class="rounded-full" :src="$options.filters.transformImage(speakers[scheduleItem.speaker].content.image, '80x80')" :alt="speakers[scheduleItem.speaker].name">
                  <p v-if="scheduleItem.text" class="text-blue pl-4">{{scheduleItem.text}}</p>
                </div>
              </div> 
            </li>
          </ul>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['blok'],
  computed: {
    speakers() {
      return this.generateUuidMapFromArray(this.$store.state.references.speakers)
    }
  },
  methods: {
    generateUuidMapFromArray(entries) {
      return entries.reduce((map, entry) => {
        map[entry.uuid] = entry
        return map
      }, {})
    }
  }
}
</script>
