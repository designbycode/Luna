import Vue from 'vue'
import VueRouter from 'vue-router'
import Routes from './routes'
import VueProgressBar from 'vue-progressbar'


const options = {
    color: '#16bdca',
    failedColor: '#ca1650',
    thickness: '5px',
    transition: {
        speed: '0.2s',
        opacity: '0.6s',
        termination: 300
    },
    autoRevert: true,
    location: 'top',
    inverse: false
}

Vue.use(VueRouter)
Vue.use(VueProgressBar, options)




const files = require.context('./components', true, /\.vue$/i)
files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))


const router = new VueRouter({
    mode: 'history',
    routes: Routes,
    linkExactActiveClass: 'active',
    base: '/',
})


// router.beforeEach((to, from, next) => {
//
// })
//
// router.beforeResolve((to, from, next) => {
//     if(to.path) {
//
//     }
// })
//
// router.afterEach((to, from) => {
//
// })


var app = new Vue({
    el: '#app',
    router,
    mounted() {
        this.$Progress.finish()
    }

});
