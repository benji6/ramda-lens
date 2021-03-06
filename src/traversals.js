var R = require('ramda')
var curry = R.curry
var compose = R.compose
var traverse = R.traverse
var map = R.map
var Identity = require('./internal/_identity')

var _getValue = function(x) { return x.value; }

var mapped = curry(function(f, x) {
  return Identity(map(compose(_getValue, f), x));
})
var traversed = curry(function(of, f, x) {
  return Identity(traverse(of, compose(_getValue, f), x));
})

module.exports = {
  mapped: mapped,
  traversed: traversed
}
