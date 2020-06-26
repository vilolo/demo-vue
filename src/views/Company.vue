<template>
  <form role="form" enctype="multipart/form-data">
    <div class="card-body">
      <div class="form-group">
        <label for="company-name">公司名</label>
        <input v-model="name" class="form-control" id="company-name" type="text" placeholder="Company name">
      </div>
      <div class="form-group">
        <label for="email">邮箱</label>
        <input v-model="email" class="form-control" id="email" type="email" placeholder="Enter email">
      </div>
      <div class="form-group">
        <label for="phone">电话</label>
        <input v-model="phone" class="form-control" id="phone" type="phone" placeholder="Enter phone">
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
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      logo: "",
      fileName: ""
    }
  },
  methods: {
    addImg(event){
      let file = event.target.files[0]
      var reader = new FileReader()
      reader.readAsDataURL(file)
      let that = this;
      this.fileName = file.name
      reader.onload = function(e) {
        var url = this.result.substring(this.result.indexOf(",") + 1);
        that.logo = "data:image/png;base64," + url;
      }
    },

    doSubmit(){
      let postData = this.$data
      delete postData.logoShow
      this.$api.subCompany(postData).then(res => {
        console.log(res)
      })
    }
  },
  mounted: function () {
    this.$api.getCompanyInfo().then(res => {
      this.$data.phone = res.data.phone
      this.$data.email = res.data.email
      this.$data.name = res.data.name
      this.$data.logo = res.data.logo
    })
  }
}
</script>
