<template lang="pug">
  div.slides
    section(
      data-markdown="/md/p2.md"
      data-separator="\n---$"
      data-separator-vertical="\n>>>$"
      data-separator-notes="^Note:"
    )
</template>

<script lang="coffee">
export default
  name: 'p2'
</script>
