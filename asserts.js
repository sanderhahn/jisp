function assert(value, message) {
  if(!value) {
    throw 'Assertion failed: ' + message
  }
}

// test read and print

var test = ['#t', '(1 . 2)', '(1 2 . 3)', '(1 2 3)', '()', '((1) (1 . 2) (1 (3 (4))))']
_.each(test, function(item) {
  assert(print(read(item)) === item, item)
})

// test lookup

assert(lookup(NIL, 'a') === NIL, 'empty lookup')
assert(cdr(lookup(read('((b . 10) (a . 5))'), 'a')) === 5, 'lookup a')

