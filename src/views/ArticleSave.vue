<template>
  <div class="row">
    <div class="col-md-12">
      <div class="card card-outline card-info">
        <div class="card-body">
          <div class="form-group">
            <label for="navigation-name">标题</label>
            <input v-model="title" class="form-control" id="navigation-name" type="text" placeholder="">
          </div>
          <div class="form-group">
            <label>分类</label>
            <select v-model="category_id" class="custom-select">
              <option value="0">公共分类</option>
              <option v-for="(item, i) in categoryList" v-bind:value="item.id" v-bind:key="i">{{item.name}}</option>
            </select>
          </div>

          <div class="form-group">
            <label for="sort">排序值</label>
            <input v-model="sort" class="form-control" id="sort" type="text" placeholder="">
          </div>

          <div class="form-group">
            <label for="keyword">关键词</label>
            <input v-model="keyword" class="form-control" id="keyword" type="text" placeholder="">
          </div>

          <div class="form-group">
            <label for="exampleInputFile">封面</label>
            <div class="input-group">
              <div class="custom-file">
                <input @change="addImg" class="custom-file-input" id="exampleInputFile" type="file">
                <label class="custom-file-label" for="exampleInputFile">Choose file</label>
              </div>
            </div>
          </div>
          <div class="form-group">
            <img height="100" v-if="cover!=''" :src="cover" />
          </div>
          <div class="mb-3">
            <textarea id="content" v-model="content"></textarea>
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

          <div class="card-footer">
            <div @click="doSubmit" class="btn btn-primary">Submit</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import 'summernote'
import 'summernote/dist/summernote.css'

export default {
  data: function () {
    return {
      id: 0,
      title: '',
      category_id: '',
      categoryList: [],
      cover: '',
      content: '',
      fileName: '',
      status: 1,
      sort: 50,
      keyword: ''
    }
  },
  mounted: function () {
    $('#content').summernote({
      height: 500
    })
  },

  activated: function () {
    Object.assign(this.$data, this.$options.data())
    
    this.$api.getSelectArticleCategory().then(res => {
      this.categoryList = res.data
    })

    var tempId = this.$route.query.id
    if (typeof (tempId) !== 'undefined') {
      this.$api.getArticleDetail({id: tempId}).then(res => {
        this.title = res.data.title
        this.category_id = res.data.category_id
        this.cover = res.data.cover
        this.status = res.data.status
        this.keyword = res.data.keyword
        this.sort = res.data.sort
        $('#content').summernote('code', res.data.content)
      })
      this.id = tempId
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
        that.cover = 'data:image/png;base64,' + url
      }
    },

    doSubmit: function () {
      this.content = $('#content').summernote('code')
      let postData = this.$data
      delete postData.logoShow
      this.$api.subArticle(postData).then(res => {
        alert(res.msg)
        if (res.code === 200) {
          this.$router.push('/Article')
        }
      })
    }
  }
}
</script>
