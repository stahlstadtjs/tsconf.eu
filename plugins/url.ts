import Vue from 'vue';

Vue.filter('url', function (linkObject: any) {
  if (typeof linkObject === 'string') {
    return '/' + linkObject
  }
  if (linkObject?.linktype === 'story') {
    return linkObject?.story?.url === 'home' ? '/' : '/' + linkObject?.story?.url
  } else if (linkObject?.linktype === 'url') {
    return linkObject?.url
  } else {
    return ''
  }
})