<template>
<div>
    <section class="material-half-bg">
        <div class="cover"></div>
        </section>
        <section class="login-content">
        <div class="logo">
            <h1>Vali</h1>
        </div>
        <div class="login-box">
            <div class="login-form">
            <h3 class="login-head"><i class="fa fa-lg fa-fw fa-user"></i>SIGN IN</h3>
            <div class="form-group">
                <label class="control-label">USERNAME</label>
                <input class="form-control" v-model="username" type="text" placeholder="Email" autofocus>
            </div>
            <div class="form-group">
                <label class="control-label">PASSWORD</label>
                <input @keyup.enter="doLogin" class="form-control" v-model="password" type="password" placeholder="Password">
            </div>
            <div class="form-group">
                <div class="utility">
                <div class="animated-checkbox">
                    <label>
                    <input type="checkbox"><span class="label-text">Stay Signed in</span>
                    </label>
                </div>
                <p class="semibold-text mb-2"><a href="#" data-toggle="flip">Forgot Password ?</a></p>
                </div>
            </div>
            <div class="form-group btn-container">
                <button @click="doLogin" class="btn btn-primary btn-block"><i class="fa fa-sign-in fa-lg fa-fw"></i>SIGN IN</button>
            </div>
            </div>
            <form class="forget-form" action="index.html">
            <h3 class="login-head"><i class="fa fa-lg fa-fw fa-lock"></i>Forgot Password ?</h3>
            <div class="form-group">
                <label class="control-label">EMAIL</label>
                <input class="form-control" type="text" placeholder="Email">
            </div>
            <div class="form-group btn-container">
                <button class="btn btn-primary btn-block"><i class="fa fa-unlock fa-lg fa-fw"></i>RESET</button>
            </div>
            <div class="form-group mt-3">
                <p class="semibold-text mb-0"><a href="#" data-toggle="flip"><i class="fa fa-angle-left fa-fw"></i> Back to Login</a></p>
            </div>
            </form>
        </div>
    </section>
</div>
</template>
<script>
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    doLogin: function () {
      this.$api.doLogin(this.username, this.password).then(res => {
        if (res.code === 200) {
          localStorage.setItem('token', this.username)
          this.$router.push('/Company')
        } else {
          alert(res.msg)
        }
      })
    }
  },
  mounted: function () {
  }
}
</script>
