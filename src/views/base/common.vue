<template>
    <div></div>
</template>
<script>
export default {
  created: function () {
    var self = this

    // 定义一个请求拦截器
    this.$axios.interceptors.request.use(function (request) {
      return request
    })

    // 定义一个响应拦截器
    this.$axios.interceptors.response.use(
      function (response) {
        if (response.data.code === self.$con.CODE_UNAUTHORIZED) {
          self.$router.push('/login')
        }
        return response
      }
      ,
      function (error) {
        if (error && error.response && error.response.status === 401) {
          self.$router.push('/login')
        } else {
          alert(error)
        }
      }
    )
  }
}
</script>
