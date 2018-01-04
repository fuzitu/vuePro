// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//引入museui 框架
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
// import 'muse-ui/dist/theme-teal.css'

//引入store
import store from './store/store'
import API from './lib/API'

import openform from './components/openform'





Vue.use(MuseUI)
Vue.use(openform)
    //全局变量
Vue.prototype.api = API;
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})