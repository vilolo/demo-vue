<template>
  <div>
    <form>
      <div class="card-body">
        <div class="form-group">
          <label>上级导航</label>
          <select v-model="pid" class="custom-select" :key="this.id">
            <option value="0">--为一级菜单--</option>
            <option v-for="(item, i) in topLevelList" v-bind:value="item.id" v-bind:key="i">{{item.name}}</option>
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
          <select @change="selArticle" v-model="sArticle" class="custom-select" :key="this.id">
            <option value="0">--选择文章--</option>
            <option v-for="(item, i) in articleList" v-bind:value="item.id" v-bind:key="i">{{item.title}}</option>
          </select>
        </div>

        <div class="form-group">
          <label>url —— 选择文章关键词</label>
          <select @change="selArticleKeyword" v-model="sArticleKeyword" class="custom-select" :key="this.id">
            <option value="">--选择文章关键词--</option>
            <option v-for="(item, i) in articleKeywordList" v-bind:value="item.keyword" v-bind:key="i">{{item.keyword}}</option>
          </select>
        </div>

        <div class="form-group">
          <label>url —— 选择文章分类列表</label>
          <select @change="selArticleCategory" v-model="sCategory" class="custom-select" :key="this.id">
            <option value="0">--选择文章--</option>
            <option v-for="(item, i) in categoryList" v-bind:value="item.id" v-bind:key="i">{{item.name}}</option>
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
      categoryList: [],
      articleKeywordList: [],

      id: 0,
      name: '',
      url: '',
      level: 0,
      sort: 50,
      pid: 0,
      status: 1,

      sArticle: 0,
      sCategory: 0,
      sArticleKeyword: ''
    }
  },

  activated: function () {
    Object.assign(this.$data, this.$options.data())

    this.$api.getSelectArticleCategory().then(res => {
      this.categoryList = res.data
    })
    var tempId = this.$route.query.id
    if (typeof (tempId) !== 'undefined') {
      this.$api.getNavigationDetail({id: tempId}).then(res => {
        this.name = res.data.name
        this.url = res.data.url
        this.level = res.data.level
        this.pid = res.data.pid
        this.status = res.data.status
      })
      this.id = tempId
    }

    this.$api.getNavigationList({level: 0}).then(res => {
      this.topLevelList = res.data
    })

    this.$api.getArticleSelectList().then(res => {
      this.articleList = res.data
      this.articleKeywordList = []
      for (const i in res.data) {
        if(typeof res.data[i].keyword == "undefined" || res.data[i].keyword == null || res.data[i].keyword == ""){
          continue
        }
        this.articleKeywordList.push(res.data[i])
      }
    })
  },

  methods: {
    doSubmit: function () {
      let postData = this.$data
      this.$api.subNavigation(postData).then(res => {
        alert(res.msg)
        if (res.code === 200) {
          this.$router.push('/Navigation')
        }
      })
    },

    selArticle: function (e) {
      this.url = '/index.php/article?id=' + e.target.value
      this.sCategory = 0
      this.sArticleKeyword = ''
    },

    selArticleCategory: function (e) {
      this.url = '/index.php/article/category-article?id=' + e.target.value
      this.sArticle = 0
      this.sArticleKeyword = ''
    },

    selArticleKeyword: function (e) {
      this.url = '/index.php/articles/' + e.target.value
      this.sCategory = 0
      this.sArticle = 0
    }
  }

}
</script>
