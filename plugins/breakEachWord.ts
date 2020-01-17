import Vue from 'vue';

Vue.filter('breakEachWord', function (string: string): string {
  return string.replace(/ /g, '<br>')
})