<template>
  <input type="text" placeholder="Filter elements" class="form-control"
         v-bind:value="filter" v-on:input="debounceInput"/>
</template>

<script>
  import _ from 'lodash'

  export default {
    props: ['filter'],
    methods: {
      debounceInput: _.debounce(function(e) {
        this.$emit('update-filter', e.target.value)
      }, 500)
    }
  }
</script>
