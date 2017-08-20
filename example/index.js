import Vue from 'vue'
import Tippy from '../src'
import 'tippy.js/dist/tippy.css'
import App from './App.vue'

Vue.use(Tippy)

new Vue({
  el: '#app',
  data: {
    show: true
  },
  methods: {
    handleChange(e) {
      this.show = e.target.checked
    }
  },
  render() {
    return <div>
      <input type="checkbox" checked={this.show} onChange={this.handleChange} /> Toggle
      {this.show ? <App /> : null}
    </div>
  }
})
