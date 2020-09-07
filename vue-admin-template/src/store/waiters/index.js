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
        SETLIST(state, data) {
          state.list = data;
        }
    },
    actions:{
        fetchData(context) {
          get('/waiter/findAll').then((msg) => {
            // console.log(msg);
            // context.state.list = msg.data;
            context.commit('SETLIST', msg.data);
          }).catch((err) =>{
            console.log(err);
          })

    }
  }
}
export default waiters