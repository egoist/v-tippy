# v-tippy

[![NPM version](https://img.shields.io/npm/v/v-tippy.svg?style=flat)](https://npmjs.com/package/v-tippy) [![NPM downloads](https://img.shields.io/npm/dm/v-tippy.svg?style=flat)](https://npmjs.com/package/v-tippy) [![CircleCI](https://circleci.com/gh/egoist/v-tippy/tree/master.svg?style=shield)](https://circleci.com/gh/egoist/v-tippy/tree/master)  [![donate](https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&style=flat)](https://github.com/egoist/donate)

> Vue.js binding for [Tippy.js](https://atomiks.github.io/tippyjs/) which is a powerful and elegant tooltip library.

## Install

```bash
yarn add v-tippy
```

## Usage

First, use the plugin to register `v-tippy` directive:

```js
import Tippy from 'v-tippy'
// Don't forget to include CSS somewhere!
// Basically it's a copy of `tippy.js/dist/tippy.css`
import 'v-tippy/dist/tippy.css'

Vue.use(Tippy)
```

Then, use it:

```vue
<button title="will appear on the top" v-tippy>hover me</button>
```

### Supply Tippy.js options

You can pass **all** [Tippy.js](https://atomiks.github.io/tippyjs/) [options](https://atomiks.github.io/tippyjs/#all-settings) as `v-tippy` directive's arguments:

```vue
<button 
  title="I'm on the left!" 
  v-tippy="{position: 'left'}">
  hover me
</button>
```

You can also directly set `title` in the arguments: `v-tippy="{title: 'hi'}"`.

### Default settings

You can tweak default settings globally while installing the plugin:

```js
Vue.use(Tippy, {
  position: 'left',
  onShown: () => console.log('lol'),
  // ... other options you wanna change globally
})
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## Author

**v-tippy** © [egoist](https://github.com/egoist), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by egoist with help from contributors ([list](https://github.com/egoist/v-tippy/contributors)).

> [egoistian.com](https://egoistian.com) · GitHub [@egoist](https://github.com/egoist) · Twitter [@rem_rin_rin](https://twitter.com/rem_rin_rin)
