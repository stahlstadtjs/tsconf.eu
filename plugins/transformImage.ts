import Vue from 'vue';

Vue.filter('transformImage', function (image: string, option: string) {
  if (!image) return '';
  if (!option) return '';

  let imageService = '//img2.storyblok.com/';
  let path = image.replace('//a.storyblok.com', '');
  return imageService + option + path;
})