<template>
  <div id="app">
    <layout/>
  </div>
</template>

<script>
import layout from './views/base/layout'
export default {
  name: 'App',
  components: {
    layout
  }
}
</script>

<style>
@import './assets/css/main.css';
@import 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css';
</style>
