<template>
  <div>
    <form>
      <div class="card-body">
        <div class="form-group">
          <label>上级导航</label>
          <select v-model="level" class="custom-select" :key="this.id">
            <option value="-1">--为底部导航--</option>
          </select>
        </div>
        <div class="form-group">
          <label for="navigation-name">导航名</label>
          <input v-model="name"  :key="this.id" class="form-control" id="navigation-name" type="text" placeholder="">
        </div>
        <div class="form-group">
          <label for="navigation-name">url —— 自定义</label>
          <input v-model="url" class="form-control" id="navigation-name" type="text" placeholder="">
        </div>

        <div class="form-group">
          <label>url —— 选择文章</label>
          <select @change="selArticle" class="custom-select" :key="this.id">
            <option value="0">--选择文章--</option>
            <option v-for="(item, i) in articleList" v-bind:value="item.id" v-bind:key="i">{{item.title}}</option>
          </select>
        </div>

        <div class="form-group">
          <label for="sort">排序</label>
          <input v-model="sort" class="form-control" id="sort" type="number" placeholder="">
        </div>

        <div class="form-group">
          <div class="custom-control custom-radio">
            <input class="custom-control-input" value="1" type="radio" id="customRadio1" name="status" v-model="status">
            <label for="customRadio1" class="custom-control-label">开启</label>
          </div>
          <div class="custom-control custom-radio">
            <input class="custom-control-input" value="2"  type="radio" id="customRadio2" name="status" v-model="status">
            <label for="customRadio2" class="custom-control-label">停用</label>
          </div>
        </div>

      </div>
      <!-- /.card-body -->

      <div class="card-footer">
        <div @click="doSubmit" class="btn btn-primary">Submit</div>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data () {
    return {
      topLevelList: [],
      articleList: [],

      id: 0,
      name: '',
      url: '',
      level: -1,
      sort: 50,
      pid: 0,
      status: 1
    }
  },

  activated: function () {
    Object.assign(this.$data, this.$options.data())
    var tempId = this.$route.query.id
    if (typeof (tempId) !== 'undefined') {
      this.$api.getNavigationDetail({id: tempId}).then(res => {
        this.name = res.data.name
        this.url = res.data.url
        this.level = res.data.level
        this.status = res.data.status
      })
      this.id = tempId
    }

    this.$api.getNavigationList({level: 0}).then(res => {
      this.topLevelList = res.data
    })

    this.$api.getArticleSelectList().then(res => {
      this.articleList = res.data
    })
  },

  methods: {
    doSubmit: function () {
      let postData = this.$data
      this.$api.subNavigation(postData).then(res => {
        alert(res.msg)
        if (res.code === 200) {
          this.$router.push('/FootNavigation')
        }
      })
    },

    selArticle: function (e) {
      this.url = '/index.php/article?id=' + e.target.value
    }
  }

}
</script>
