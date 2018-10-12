<template lang="pug">
  div#app
    .reveal
      router-view
</template>

<script lang="coffee">
import Reveal from 'reveal.js/js/reveal'
window.Reveal = Reveal

export default
  mounted: () ->
    Reveal.initialize({
      history: true
      showNotes: true
      dependencies: [
        { src: '/reveal/plugin/markdown/marked.js' }
        { src: '/reveal/plugin/markdown/markdown.js' }
        { src: '/reveal/plugin/notes/notes.js' }
        { src: '/reveal/plugin/highlight/highlight.js', async: true, callback: () -> hljs.initHighlightingOnLoad() }
      ]
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
  .reveal
    ul, ol
      li
        line-height 1.5
    img
      border none
      box-shadow none

</style>
