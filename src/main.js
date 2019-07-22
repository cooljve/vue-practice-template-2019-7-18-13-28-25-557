import Vue from 'vue' //引入vue的框架
import Vuex from 'vuex'
import App from './App.vue'


Vue.use(Vuex);
Vue.config.productionTip = false

const store = new Vuex.Store({
    state: {
        sum: 0
    },
    mutations: {
        increase(state) {
            state.sum++;
        },
        decrease(state) {
            state.sum--;
        }
    }
});

new Vue({
    render: h => h(App),
    store
}).$mount('#app')
