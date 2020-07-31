<template>
    <div>
      <div class="app-title">
        <div>
          <h1><i class="fa fa-th-list"></i> Data Table</h1>
          <p>Table to display analytical data effectively</p>
        </div>
        <ul class="app-breadcrumb breadcrumb side">
          <li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
          <li class="breadcrumb-item">Tables</li>
          <li class="breadcrumb-item active"><a href="#">Data Table</a></li>
        </ul>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="tile">
            <div class="tile">
              <router-link to="/ImgDescSave" class="btn btn-success">添加图文</router-link>
            </div>
            <div class="tile-body">
              <div class="table-responsive">
                <table class="table table-hover table-bordered" id="sampleTable">
                  <thead>
                    <tr>
                      <th>图片</th>
                      <th>分类</th>
                      <th>描述1</th>
                      <th>描述2</th>
                      <th>按钮名</th>
                      <th>url</th>
                      <th>排序</th>
                      <th>状态</th>
                      <th>创建时间</th>
                      <th>修改时间</th>
                      <th>操作</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in tableData" v-bind:key="item.id">
                      <td><img :src="item.img" style="max-width: 150px; max-height: 100px;" /></td>
                      <td>{{item.category_name}}</td>
                      <td>{{item.desc1}}</td>
                      <td>{{item.desc2}}</td>
                      <td>{{item.btn_name}}</td>
                      <td>{{item.url}}</td>
                      <td>{{item.sort}}</td>
                      <td>
                        <span v-if="item.status!=1" style="color:red;">停用</span>
                        <span v-if="item.status==1" style="color:green;">启用</span>
                      </td>
                      <td>{{item.created_at}}</td>
                      <td>{{item.updated_at}}</td>
                      <td><router-link :to="{path:'/ImgDescSave',
                      query:{id:item.id}
                      }"
                      class="btn btn-primary">编辑</router-link>
                      <span @click="del(item.id)" class="btn btn-danger" >删除</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import '../assets/plugins/datatables/jquery.dataTables.min.js'
import '../assets/plugins/datatables-bs4/js/dataTables.bootstrap4.min.js'
export default {
  data: function () {
    return {
      tableData: [],
      dt: ''
    }
  },

  methods: {
    del: function (did) {
      if (confirm('确定要删除吗')) {
        this.$api.delImgDesc({id: did}).then(res => {
          alert(res.msg)
          location.reload()
        })
      }
    }
  },

  mounted: function () {
    this.$api.getImgDescList().then(res => {
      this.tableData = res.data
    }).then(res => {
      this.dt = $('#sampleTable').DataTable({
        order: [1, 'desc']
      })
    })
  },

  activated: function () {
    this.$api.getImgDescList().then(res => {
      this.tableData = res.data
    }).then(res => {
      this.dt.reload()
    })
  }
}
</script>

<style scoped>
@import url('../assets/plugins/datatables-bs4/css/dataTables.bootstrap4.min.css');
</style>
