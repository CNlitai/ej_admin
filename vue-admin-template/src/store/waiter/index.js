import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// 引入封装好的网络请求文件
import {get, post} from '@/utils/axios'
const waiters = {
    namespaced: true,
    // 命名空间我们的模块在使用数据或者方法是，可以使用子模块的名称
    state:{
      waiters:[],
        list: null,//保存返回的数据
        total: 0,//
        listQuery: {
          page: 1,//当前页码
          limit: 5,//一页显示几条
      }
    },
    mutations:{
        SET_WAITER(state, waiters) {
            state.waiters = waiters
          }
    },
    actions:{
        fetchData(context) {
        //     get('/waiter/findAll').then((msg)=>{
        //         context.commit('SET_WAITER',msg.data)
        //     })
        post('/waiter/index',{ 
          page: context.state.listQuery.page,
          pageSize: context.state.listQuery.limit,
        }).then((msg)=>{
          console.log(msg)
        }).catch((err)=>{
          console.log(err)
        })
    }
  }
}
export default waiters