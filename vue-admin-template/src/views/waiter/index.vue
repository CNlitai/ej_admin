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
      prop="gender"
      label="性别">
    </el-table-column>
    <el-table-column
      prop="status"
      label="状态">
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <!-- 分页 -->
  <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="fetchData" />

  </div>
</template>

<script>
import Pagination from '@/components/Pagination'
import { mapActions, mapState } from 'vuex'
// import { getList } from '@/api/table'

export default {
  
  data() {
    return {
      
      listLoading: false
    }
  },
  components: { Pagination },
  
  computed: {
    ...mapState('waiters', ['list', 'total', 'listQuery'])
  },
  created() {
    this.fetchData()
  },
  methods: {
    ...mapActions('waiters', ['fetchData'])
  }
}
</script>
