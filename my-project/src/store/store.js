//引入vue和vuex
import Vue from 'vue'
import Vuex from 'vuex'
//引入user
import user from './modules/user'
import layout from './modules/layout'
import list from './modules/list'
Vue.use(Vuex);
export default new Vuex.Store({
    modules: {
        user,
        layout,
        list
    }
})