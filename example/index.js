import Vue from 'vue'
import Tippy from '../src'
import 'tippy.js/dist/tippy.css'
import App from './App.vue'

Vue.use(Tippy)

new Vue({
  el: '#app',
  render: h => h(App)
})
