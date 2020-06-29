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
            <div class="tile-body">
              <div class="table-responsive">
                <table class="table table-hover table-bordered" id="sampleTable">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>email</th>
                      <th>主题</th>
                      <th>消息留言</th>
                      <th>ip</th>
                      <th>ip位置信息</th>
                      <th>创建时间</th>
                      <th>修改时间</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in tableData" v-bind:key="item.id">
                      <td>{{item.name}}</td>
                      <td>{{item.email}}</td>
                      <td>{{item.subject}}</td>
                      <td>{{item.message}}</td>
                      <td>{{item.ip}}</td>
                      <td>{{item.position}}</td>
                      <td>{{item.created_at}}</td>
                      <td>{{item.updated_at}}</td>
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
    data: function(){
        return {
            tableData: [],
            dt: ''
        }
    },

    mounted: function(){
      this.$api.getCustomerMessageList().then(res => {
        this.tableData = res.data
      }).then(res => {
        this.dt = $("#sampleTable").DataTable({
          ordering: false
        })
      })
    },

    activated: function(){
      this.$api.getCustomerMessageList().then(res => {
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
