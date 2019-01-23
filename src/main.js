import Vue from 'vue'


import App from './App.vue'
import store from './store'

// vue 를 연결하자.

new Vue({
    el:'#app',
    store:store,
    render : h => h(App),

})

