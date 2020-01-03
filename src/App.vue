<template>
  <div id="app">
    <common/>
    <router-view/>
  </div>
</template>

<script>
import common from './views/base/common'
export default {
  name: 'App',
  components: {
    common
  }
}
</script>

<style>
@import './assets/css/main.css';
@import 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css';
</style>
