<template>
  <form role="form" enctype="multipart/form-data">
    <div class="card-body">
      <div class="form-group">
        <label for="desc1">描述一</label>
        <input v-model="desc1" class="form-control" id="desc1" type="text" placeholder="">
      </div>

      <div class="form-group">
        <label for="desc2">描述二</label>
        <input v-model="desc2" class="form-control" id="desc2" type="text" placeholder="">
      </div>

      <div class="form-group">
        <label>分类</label>
        <select v-model="category_id" class="custom-select" :key="this.id">
          <option v-for="(item, i) in categoryList" v-bind:value="item.id" v-bind:key="i">{{item.name}}</option>
        </select>
      </div>

      <div class="form-group">
        <label for="url">url</label>
        <input v-model="url" class="form-control" id="url" type="text" placeholder="">
      </div>

      <div class="form-group">
        <label>url —— 选择文章</label>
        <select @change="selArticle" class="custom-select" :key="this.id">
          <option value="0">--选择文章--</option>
          <option v-for="(item, i) in articleList" v-bind:value="item.id" v-bind:key="i">{{item.title}}</option>
        </select>
      </div>

      <div class="form-group">
        <label for="btn_name">按钮名</label>
        <input v-model="btn_name" class="form-control" id="btn_name" type="text" placeholder="">
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

      <div class="form-group">
        <label for="exampleInputFile">图片</label>
        <div class="input-group">
          <div class="custom-file">
            <input @change="addImg" class="custom-file-input" id="exampleInputFile" type="file">
            <label class="custom-file-label" for="exampleInputFile">Choose file</label>
          </div>
        </div>
      </div>
      <div>
        <img style="height:100%;width:100%;" v-if="img!=''" :src="img" />
      </div>
    </div>
    <!-- /.card-body -->

    <div class="card-footer">
      <dev @click="doSubmit" class="btn btn-primary">Submit</dev>
    </div>
  </form>
</template>

<script>
export default {
  data () {
    return {
      id: 0,
      desc1: '',
      desc2: '',
      status: 1,
      url: '',
      btn_name: '',
      img: '',
      fileName: '',
      category_id: '',
      sort: 20,

      categoryList: [],
      articleList: []
    }
  },
  methods: {
    addImg (event) {
      let file = event.target.files[0]
      var reader = new FileReader()
      reader.readAsDataURL(file)
      let that = this
      this.fileName = file.name
      reader.onload = function (e) {
        var url = this.result.substring(this.result.indexOf(',') + 1)
        that.img = 'data:image/png;base64,' + url
      }
    },

    doSubmit () {
      let postData = this.$data
      // delete postData.logoShow
      delete postData.categoryList
      delete postData.articleList
      this.$api.subImgDesc(postData).then(res => {
        alert(res.msg)
        if (res.code === 200) {
          this.$router.push('/ImgDesc')
        }
      })
    },

    selArticle: function (e) {
      this.url = '/index.php/article?id=' + e.target.value
    }
  },

  activated: function () {
    this.id = this.$route.query.id

    if (typeof (this.id) === 'undefined') {
      Object.assign(this.$data, this.$options.data())
    } else {
      this.$api.getImgDescDetail({id: this.id}).then(res => {
        this.desc1 = res.data.desc1
        this.desc2 = res.data.desc2
        this.url = res.data.url
        this.sort = res.data.sort
        this.btn_name = res.data.btn_name
        this.img = res.data.img
        this.category_id = res.data.category_id
        this.status = res.data.status
      })
    }

    this.$api.getNavigationList({level: 0}).then(res => {
      this.topLevelList = res.data
    })

    this.$api.getImgDescCategoryList().then(res => {
      this.categoryList = res.data
    })

    this.$api.getArticleSelectList().then(res => {
      this.articleList = res.data
    })
  }
}
</script>
