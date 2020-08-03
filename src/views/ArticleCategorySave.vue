<template>
  <div class="row">
    <div class="col-md-12">
      <div class="card card-outline card-info">
        <div class="card-body">
          <div class="form-group">
            <label for="name">标题</label>
            <input v-model="name" class="form-control" id="name" type="text" placeholder="">
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

export default {
  data: function () {
    return {
      id: 0,
      name: '',
      status: 1
    }
  },

  activated: function () {
    this.id = this.$route.query.id

    if (typeof (this.id) === 'undefined') {
      Object.assign(this.$data, this.$options.data())
    } else {
      this.$api.getArticleCategoryDetail({id: this.id}).then(res => {
        this.name = res.data.name
        this.status = res.data.status
      })
    }
  },

  methods: {
    doSubmit: function () {
      let postData = this.$data
      this.$api.subArticleCategory(postData).then(res => {
        alert(res.msg)
        if (res.code === 200) {
          this.$router.push('/ArticleCategory')
        }
      })
    }
  }
}
</script>
