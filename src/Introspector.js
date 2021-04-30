export default class Introspector {
  constructor() {
    this.results = []
  }

  start(tree) {
    this.tree = tree
    this.currentResult = []
  }

  end() {
    this.results.push(this.currentResult)
    delete this.tree
    delete this.currentResult
  }

  push(node, result) {
    this.currentResult.push({ name: node.name, result })
  }

  wrapLast(numResults, node, result) {
    const children = this.currentResult.splice(this.currentResult.length - numResults, numResults)
    this.currentResult.push({ name: node.name, result, children })
  }

  get lastResult() {
    if (this.results.length === 0) {
      return null
    }
    return this.results[this.results.length - 1]
  }
}