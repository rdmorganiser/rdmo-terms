<template>
  <a v-on:click="go">
    <slot></slot>
  </a>
</template>

<script>
  export default {
    props: {
      dataRoute: {
        type: String,
        required: true
      }
    },
    methods: {
      go (event) {
        event.preventDefault()
        this.$root.route = this.dataRoute
      }
    }
  }
</script>
