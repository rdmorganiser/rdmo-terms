<template>
  <div>
    <Nav />
    <Search v-bind:filter="filter" v-on:update-filter="filter = $event"
                    :resultsCount="results.length" :totalCount="elements.length"/>
    <main>
      <div class="container">

        <h1 class="mb-3">{{ title }}</h1>

        <div class="card mb-3"
             v-for="element in elements" :key="element.uri"
             v-show="results.includes(element.uri)">
          <div class="card-header">
            <div class="row">
              <div class="col-2 text-right"><strong>{{ capitalize(element.type) }}</strong></div>
              <div class="col-10">{{ element.uri }}</div>
            </div>
          </div>

          <ul class="list-group list-group-flush">
            <li class="list-group-item"
                v-for="key in keys" :key="key"
                v-show="element[key]">
              <div class="row">
                <div class="col-2 text-right"><strong>{{ key }}</strong></div>
                <div class="col-10">{{ element[key] }}</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  import { buildIndex, filterTerms } from '../utils/filter'

  import Nav from '../components/Nav'
  import Search from '../components/Search'

  export default {
    props: ['title', 'keys', 'filterKeys', 'elements'],
    data () {
      return {
        filter: '',
        idx: [],
        results: []
      }
    },
    created () {
      this.idx = buildIndex(this.elements, this.filterKeys)
      this.results = filterTerms(this.idx)
    },
    watch: {
      elements () {
        this.idx = buildIndex(this.elements, this.filterKeys)
        this.results = filterTerms(this.idx)
      },
      filter () {
        this.results = filterTerms(this.idx, this.filter)
      }
    },
    components: {
      Nav,
      Search
    }
  }
</script>

<style>
.card-header {
  word-break: break-all;
}
main .container {
  padding-top: 140px;
  padding-bottom: 60px;
}
</style>
