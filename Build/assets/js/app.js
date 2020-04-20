
import Vue from 'vue'
import VueRouter from 'vue-router'
import Routes from './routes'

Vue.use(VueRouter)

const files = require.context('./components', true, /\.vue$/i)
files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))


const router = new VueRouter({
    mode: 'history',
    routes: Routes,
    linkExactActiveClass: 'active',
    base: '/',
})


var app = new Vue({
  el: '#app',
  router,
  data: {
    message: 'Hello Vue!'
  }
})
