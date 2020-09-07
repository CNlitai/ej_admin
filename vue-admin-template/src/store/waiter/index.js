import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
// 引入封装好的网络请求文件
import {get} from '@/utils/axios'
const waiters = {
    namespaced: true,
    state:{
        waiters:[]
    },
    mutations:{
        SET_WAITER(state, waiters) {
            state.waiters = waiters
          }
    },
    actions:{
        fetchData(context) {
            get('/waiter/findAll').then((msg)=>{
                context.commit('SET_WAITER',msg.data)
            })
        }
    }
}
export default waiters