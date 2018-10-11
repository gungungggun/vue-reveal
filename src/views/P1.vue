<template lang="pug">
  div.slides
    section(
      data-markdown="md/p1.md"
      data-separator="\n---$"
      data-separator-vertical="\n>>>$"
      data-separator-notes="^Note:"
    )
    section
      h1 aaa
    section
      h1 bbb
</template>

<script lang="coffee">
import Reveal from 'reveal.js/js/reveal'

export default
  methods:
    slide5: () ->
      alert()
    slidechanged: (e) ->
      if e.indexh == 5
        this.slide5()
  mounted: () ->
    Reveal.addEventListener('slidechanged', this.slidechanged)
</script>
