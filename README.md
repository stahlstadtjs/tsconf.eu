# tsconf.eu

> Website for [TypeScript Conf EU](tsconf.eu)

## Build Setup

``` bash
# install dependencies
$ npm run install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

## Markdown Usage

We're using [@nuxtjs/markdownit](https://www.npmjs.com/package/@nuxtjs/markdownit) to render markdown.

```
<div v-html="$md.render(your_field_goes_here)"></div>
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
