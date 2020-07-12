<template>
  <form>
      <div class="card-body">
        <div class="form-group">
          <label>LATEST NEWS 1</label>
          <select v-model="news1" class="custom-select">
            <option value="0">-- 不设置 --</option>
            <option v-for="(item, i) in articleList" v-bind:value="item.id" v-bind:key="i">{{item.title}}</option>
          </select>
        </div>
        <div class="form-group">
          <label>LATEST NEWS 2</label>
          <select v-model="news2" class="custom-select">
            <option value="0">-- 不设置 --</option>
            <option v-for="(item, i) in articleList" v-bind:value="item.id" v-bind:key="i">{{item.title}}</option>
          </select>
        </div>
      <div class="card-footer">
        <div @click="doSubmit" class="btn btn-primary">Submit</div>
      </div>
    </div>
  </form>
</template>
<script>
export default {
  data () {
    return {
      news1: 0,
      news2: 0,
      articleList: []
    }
  },
  mounted: function () {
    this.$api.getLatestNews().then(res => {
      if (res.data[0]) {
        if (res.data[0]['news'] === 1) {
          this.news1 = res.data[0]['id']
        } else if (res.data[0]['news'] === 2) {
          this.news2 = res.data[0]['id']
        }
      }
      if (res.data[1]) {
        if (res.data[1]['news'] === 1) {
          this.news1 = res.data[1]['id']
        } else if (res.data[1]['news'] === 2) {
          this.news2 = res.data[1]['id']
        }
      }
    })

    this.$api.getArticleSelectList().then(res => {
      this.articleList = res.data
    })
  },
  methods: {
    doSubmit () {
      let postData = this.$data
      delete postData.articleList
      if (this.news1 === this.news2) {
        alert('两篇文章不能一样')
        return
      }
      this.$api.updateLatestNews(postData).then(res => {
        alert(res.msg)
        if (res.code === 200) {
          location.reload()
        }
      })
    }
  }
}
</script>
