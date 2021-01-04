import lunr from 'lunr'

function buildIndex (elements, keys) {
  return lunr(function () {
    this.ref('uri')

    keys.forEach(key => {
      this.field(key)
    })

    elements.forEach(function (term) {
      this.add(term)
    }, this)
  })
}

function filterTerms (idx, filter = '') {
  if (filter.length > 0) {
    filter = '*' + filter + '*'
  }

  return idx.search(filter).map(result => {
    return result.ref
  })
}

export { buildIndex, filterTerms }
