<template>
  <div class="app-container">
    <h3>员工管理</h3>
    <el-button type="primary" icon="el-icon-edit" size="small" @click="handleAdd()">增加</el-button>
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
          @click="handleEdit(scope.row.id)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <!-- 分页 -->
  <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="fetchData" />
  <!-- 模态框 -->
  <el-dialog
    title="修改员工信息"
    :visible.sync="dialogVisible"
    width="30%"
    :before-close="handleClose"
    >
    <p>用户名：<el-input v-model="waiter_info.username" placeholder="请输入内容"></el-input></p>
    <p v-if="waiter_info.status == '启用'">状态：
      <el-radio v-model="waiter_info.status" label="启用" checked="1">启用</el-radio>
      <el-radio v-model="waiter_info.status" label="禁用">禁用</el-radio>
    </p>
    <p v-else>状态：
      <el-radio v-model="waiter_info.status" label="启用">启用</el-radio>
      <el-radio v-model="waiter_info.status" label="禁用" checked>禁用</el-radio>
    </p>
    <span slot="footer" class="dialog-footer">
      <el-button @click="$store.state.waiters.dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogClose">确 定</el-button>
    </span>
  </el-dialog>
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
    ...mapState('waiters', ['list', 'total', 'listQuery', 'dialogVisible', 'waiter_info'])
  },
  created() {
    this.fetchData()
  },
  methods: {
    ...mapActions('waiters', ['fetchData', 'handleEdit', 'dialogClose', 'handleAdd']),
    handleClose() {
      this.$store.state.waiters.dialogVisible = false
    }
    
  }
}
</script>
