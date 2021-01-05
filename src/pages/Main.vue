<template>
  <div>
    <Nav />
    <Search v-bind:filter="filter" v-on:update-filter="filter = $event"
                    :resultsCount="searchResults.length" :totalCount="elements.length"/>
    <main>
      <div class="container">

        <h1 class="mt-5 mb-3">{{ title }}</h1>

        <div class="card mb-3"
             v-for="element in filteredElements" :key="element.uri">
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
    props: ['title', 'keys', 'elements'],
    data () {
      return {
        filter: '',
        elementsMap: {},
        searchIndex: [],
        searchResults: []
      }
    },
    created () {
      this.init()
    },
    watch: {
      elements () {
        this.init()
      },
      filter () {
        this.searchResults = filterTerms(this.searchIndex, this.filter)
      },
    },
    computed: {
      filteredElements () {
        return this.searchResults.map(uri => {
          return this.elementsMap[uri]
        })
      }
    },
    components: {
      Nav,
      Search
    },
    methods: {
      init () {
        this.elementsMap = this.elements.reduce((acc, cur) => {
          acc[cur.uri] = cur
          return acc
        }, {})
        this.searchIndex = buildIndex(this.elements, this.keys)
        this.searchResults = filterTerms(this.searchIndex, this.filter)
      }
    }
  }
</script>

<style scoped>
.card-header {
  word-break: break-all;
}
.container {
  padding-top: 100px;
  padding-bottom: 60px;
}
</style>
