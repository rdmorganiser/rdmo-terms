import Vue from 'vue'

import 'bootstrap/dist/css/bootstrap.css'
import _ from 'lodash'

import routes from './routes'

import Home from './pages/Home'
import Main from './pages/Main'
import NotFound from './pages/NotFound'

Vue.mixin({
  methods: {
    capitalize (string) {
      return _.capitalize(string)
    }
  }
})

new Vue({
  el: '#app',
  data: {
    route: '/'
  },
  computed: {
    ViewComponent () {
      if (this.route == '/') {
        return Home
      } else if (Object.keys(routes).includes(this.route)) {
        return Main
      } else {
        return NotFound
      }
    }
  },
  render (h) {
    return h(this.ViewComponent, {props: routes[this.route] || {}})
  }
})
