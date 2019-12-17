<template>
  <div>
    <component v-if="story.content.component" 
      :key="story.content._uid" 
      :blok="story.content"
      :is="story.content.component"></component>
  </div>
</template>

<script>
export default {
  data() {
    return {
      story: {}
    }
  },
  async asyncData (context) {
    let fullSlug = context.route.fullPath == '' ? context.route.fullPath : 'home' 

    let { data } = await context.app.$storyapi.get(`cdn/stories/${fullSlug}`, {
      version: 'draft'
    })

    return {
      story: data.story
    }
  }
}
</script>