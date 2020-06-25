<template>
    <div></div>
</template>
<script>
export default {
    mounted: function(){
      var self = this

      // 定义一个请求拦截器
      this.$axios.interceptors.request.use(function (request) {
        return request
      })

      // 定义一个响应拦截器
      this.$axios.interceptors.response.use(function (response) {
        if (response.data.code === self.$con.CODE_UNAUTHORIZED) {
          self.$router.push('/login')
        }
        return response
      })
    }
}
</script>
