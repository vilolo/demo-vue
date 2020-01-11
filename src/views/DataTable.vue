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
                      <th>Position</th>
                      <th>Office</th>
                      <th>Age</th>
                      <th>Start date</th>
                      <th>Salary</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in tableData" v-bind:key="item.id">
                      <td>{{item.column1}}</td>
                      <td>{{item.column2}}</td>
                      <td>{{item.column3}}</td>
                      <td>{{item.column4}}</td>
                      <td>{{item.column5}}</td>
                      <td>{{item.column6}}</td>
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
import 'datatables'
import '../assets/js/plugins/dataTables.bootstrap.min.js'
export default {
    data: function(){
        return {
            tableData: [{
                column1: 'aa',
                column2: '111',
                column3: '222',
                column4: '222',
                column5: '222',
                column6: '222',
            },
            {
                column1: 'bb',
                column2: '111',
                column3: '222',
                column4: '222',
                column5: '222',
                column6: '222',
            },
            {
                column1: 'cc',
                column2: '111',
                column3: '222',
                column4: '222',
                column5: '222',
                column6: '222',
            },
            {
                column1: 'bb',
                column2: '111',
                column3: '222',
                column4: '222',
                column5: '222',
                column6: '222',
            },
            {
                column1: 'cc',
                column2: '111',
                column3: '222',
                column4: '222',
                column5: '222',
                column6: '222',
            },
            {
                column1: 'bb',
                column2: '111',
                column3: '222',
                column4: '222',
                column5: '222',
                column6: '222',
            },
            {
                column1: 'cc',
                column2: '111',
                column3: '222',
                column4: '222',
                column5: '222',
                column6: '222',
            },
            {
                column1: 'bb',
                column2: '111',
                column3: '222',
                column4: '222',
                column5: '222',
                column6: '222',
            },
            {
                column1: 'cc',
                column2: '111',
                column3: '222',
                column4: '222',
                column5: '222',
                column6: '222',
            },
            {
                column1: 'bb',
                column2: '111',
                column3: '222',
                column4: '222',
                column5: '222',
                column6: '222',
            },
            {
                column1: 'cc',
                column2: '111',
                column3: '222',
                column4: '222',
                column5: '222',
                column6: '222',
            },
            {
                column1: 'bb',
                column2: '111',
                column3: '222',
                column4: '222',
                column5: '222',
                column6: '222',
            },
            {
                column1: 'cc',
                column2: '111',
                column3: '222',
                column4: '222',
                column5: '222',
                column6: '222',
            },
            {
                column1: 'bb',
                column2: '111',
                column3: '222',
                column4: '222',
                column5: '222',
                column6: '222',
            },
            {
                column1: 'cc',
                column2: '111',
                column3: '222',
                column4: '222',
                column5: '222',
                column6: '222',
            },
            {
                column1: 'bb',
                column2: '111',
                column3: '222',
                column4: '222',
                column5: '222',
                column6: '222',
            },
            {
                column1: 'cc',
                column2: '111',
                column3: '222',
                column4: '222',
                column5: '222',
                column6: '222',
            },
            {
                column1: 'bb',
                column2: '111',
                column3: '222',
                column4: '222',
                column5: '222',
                column6: '222',
            },
            {
                column1: 'cc',
                column2: '111',
                column3: '222',
                column4: '222',
                column5: '222',
                column6: '222',
            }]
        }
    },
    mounted: function(){
        $('#sampleTable').DataTable();
    }
}
</script>