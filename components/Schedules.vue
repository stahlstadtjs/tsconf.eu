<template>
  <div class="schedules" v-editable="blok">
    <h2>Schedules</h2>

    <div class="schedule" v-for="schedule in blok.schedules" :key="schedule._uid" v-editable="schedule">
      {{schedule.headline}}
      <span v-html="schedule.date"></span>
      {{schedule.notice}}
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
</template>

<script>
export default {
  props: ['blok']
}
</script>
