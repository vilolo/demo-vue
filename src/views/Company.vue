<template>
  <form role="form" enctype="multipart/form-data">
    <div class="card-body">
      <div class="form-group">
        <label for="company-name">公司名</label>
        <input v-model="name" class="form-control" id="company-name" type="text" placeholder="">
      </div>
      <div class="form-group">
        <label for="description">简述</label>
        <input v-model="description" class="form-control" id="description" type="text" placeholder="">
      </div>
      <div class="form-group">
        <label for="introduce">介绍</label>
        <textarea  style="height:100px" v-model="introduce" class="form-control" id="introduce"></textarea>
      </div>
      <div class="form-group">
        <label for="email">邮箱</label>
        <input v-model="email" class="form-control" id="email" type="text" placeholder="">
      </div>
      <div class="form-group">
        <label for="phone">电话</label>
        <input v-model="phone" class="form-control" id="phone" type="phone" placeholder="">
      </div>
      <div class="form-group">
        <label for="address">地址</label>
        <input v-model="address" class="form-control" id="address" type="text" placeholder="">
      </div>

      <div class="form-group">
        <label for="facebook">facebook</label>
        <input v-model="facebook" class="form-control" id="facebook" type="text" placeholder="">
      </div>
      <div class="form-group">
        <label for="twitter">twitter</label>
        <input v-model="twitter" class="form-control" id="twitter" type="text" placeholder="">
      </div>
      <div class="form-group">
        <label for="instagram">instagram</label>
        <input v-model="instagram" class="form-control" id="instagram" type="text" placeholder="">
      </div>
      <div class="form-group">
        <label for="pinterest">pinterest</label>
        <input v-model="pinterest" class="form-control" id="pinterest" type="text" placeholder="">
      </div>
      <div class="form-group">
        <label for="linkedin">linkedin</label>
        <input v-model="linkedin" class="form-control" id="linkedin" type="text" placeholder="">
      </div>

      <div class="form-group">
        <label for="exampleInputFile">LOGO</label>
        <div class="input-group">
          <div class="custom-file">
            <input @change="addImg" class="custom-file-input" id="exampleInputFile" type="file">
            <label class="custom-file-label" for="exampleInputFile">Choose file</label>
          </div>
        </div>
      </div>
      <div>
        <img style="height:100%;width:100%;" v-if="logo!=''" :src="logo" />
      </div>
    </div>
    <!-- /.card-body -->

    <div class="card-footer">
      <button @click="doSubmit" class="btn btn-primary">Submit</button>
    </div>
  </form>
</template>
<script>
export default {
  data () {
    return {
      name: '',
      email: '',
      phone: '',
      logo: '',
      fileName: '',
      description: '',
      address: '',
      introduce: '',

      facebook: '',
      twitter: '',
      instagram: '',
      pinterest: '',
      linkedin: ''
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
        that.logo = 'data:image/png;base64,' + url
      }
    },

    doSubmit () {
      let postData = this.$data
      delete postData.logoShow
      this.$api.subCompany(postData).then(res => {
        alert(res.msg)
        if (res.code === 200) {
          this.$router.push('/Company')
        }
      })
    }
  },
  created: function () {
    this.$api.getCompanyInfo().then(res => {
      this.$data.phone = res.data.phone
      this.$data.email = res.data.email
      this.$data.name = res.data.name
      this.$data.logo = res.data.logo
      this.$data.description = res.data.description
      this.$data.address = res.data.address
      this.$data.introduce = res.data.introduce

      this.$data.facebook = res.data.facebook
      this.$data.twitter = res.data.twitter
      this.$data.instagram = res.data.instagram
      this.$data.pinterest = res.data.pinterest
      this.$data.linkedin = res.data.linkedin
    })
  }
}
</script>
