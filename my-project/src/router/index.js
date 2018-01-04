import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

//引入 四个部分作为路由跳转的组件
import home from '../pages/homeV'
import send from '../pages/send'
import message from '../pages/message'
import my from '../pages/my'


import listV from '../pages/listV.vue'
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/home',
            name: 'Home',
            component: home,
            children: [{
                path: '*',

                component: listV
            }]
        },

        {
            path: '/send',
            name: 'send',
            component: send
        },
        {
            path: '/message',
            name: 'message',
            component: message
        },
        {
            path: '/my',
            name: 'my',
            component: my
        },
        { path: '/', redirect: '/home' },
    ]
})