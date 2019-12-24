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
          
          <ul class="schedule__item">
            <li v-for="scheduleItem in schedule.schedule_items" :key="scheduleItem._uid" v-editable="scheduleItem">
              {{scheduleItem.time}}
              {{scheduleItem.headline}}
              {{scheduleItem.text}}
              {{scheduleItem.image}}
              {{scheduleItem.speaker}}
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
