<template>
  <div class="app-container">
    <h3>员工管理</h3>
    <el-table
    :data="list"
    element-loading-text="loading"
    border
    fit
    style="width: 100%">
    <el-table-column
      prop="id"
      label="id"
      width="180">
    </el-table-column>
    <el-table-column
      prop="username"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
  </el-table>
  <!-- <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList" /> -->

  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
// import { getList } from '@/api/table'

export default {
  
  data() {
    return {
      
      listLoading: false
    }
  },
  computed: {
    ...mapState('waiters', ['list'])
  },
  created() {
    this.fetchData()
  },
  methods: {
    ...mapActions('waiters', ['fetchData'])
  }
}
</script>
