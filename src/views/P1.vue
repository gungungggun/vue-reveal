<template lang="pug">
  div.slides
    section(
      data-markdown="md/p1.md"
      data-separator="\n---$"
      data-separator-vertical="\n>>>$"
      data-separator-notes="^Note:"
    )
</template>

<script lang="coffee">
import Reveal from 'reveal.js/js/reveal'

export default
  methods:
    slidechanged: (e) ->
      console.log(e.indexh)
  mounted: () ->
    Reveal.addEventListener('slidechanged', this.slidechanged)
</script>
