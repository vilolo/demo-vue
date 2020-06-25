<template>
  <div id="app">
    <common/>
    <layout/>
  </div>
</template>

<script>
import layout from './views/base/layout'
import common from './views/base/common'
export default {
  name: 'App',
  components: {
    layout,
    common
  }
}
</script>

<style>
@import './assets/css/main.css';
@import 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css';
</style>
