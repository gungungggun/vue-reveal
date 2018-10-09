<template lang="pug">
  div#app
    .reveal
      router-view
</template>

<script lang="coffee">
import Reveal from 'reveal.js/js/reveal'
export default
  mounted: () ->
    Reveal.initialize({
      history: true
    })
</script>

<style>
@import url('../node_modules/reveal.js/css/reveal.css');
@import url('../node_modules/reveal.js/css/theme/white.css');
</style>

<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  width 100vw
  height 100vh
</style>
