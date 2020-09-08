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
      },
      waiter_info: {
        //保存当前编辑的员工

      },
      dialogVisible: false //控制mt框是否显示
    },
    mutations:{
        SETLIST(state, data) {
          state.list = data;
        },
        
    },
    actions:{
        fetchData(context) {
          // get('/waiter/findAll').then((msg) => {
          //   // console.log(msg);
          //   // context.state.list = msg.data;
          //   context.commit('SETLIST', msg.data);
          // }).catch((err) =>{
          //   console.log(err);
          // })
          post('/waiter/query',{
            page: context.state.listQuery.page,
            pageSize: context.state.listQuery.limit
          }).then((msg) => {
              // console.log(msg);
              // context.state.list = msg.data;
              context.state.total = msg.data.total;
              context.commit('SETLIST', msg.data.list);
          }).catch((err) =>{
              console.log(err);
            })
        },
        handleEdit(context, id){
          get('/waiter/findWaiterById?id='+id).then((msg) => {
            context.state.waiter_info = msg.data;
            context.state.dialogVisible = true;
          }).catch((err) =>{
            console.log(err);
          })
          // console.log(id)
      },
      dialogClose(context) {
        post('/waiter/saveOrUpdate', context.state.waiter_info).then((msg) => {
          // this.$notify({
          //   title: '保存',
          //   message: '保存成功',
          //   type: 'success',
          //   duration: 2000
          // })
          context.dispatch('fetchData')
        context.state.dialogVisible = false;

        }).catch((err) =>{
          console.log(err)
        })
      },
      handleAdd(context) {
        context.state.waiter_info = {}
        context.state.dialogVisible = true;

      }
    }
}
export default waiters