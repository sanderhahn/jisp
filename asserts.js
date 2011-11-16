function assert(value, message) {
  if(!value) {
    throw 'Assertion failed: ' + message
  }
}

// test read and print

var test = ['#true', '(1 . 2)', '(1 2 . 3)', '(1 2 3)', '()', '((1) (1 . 2) (1 (3 (4))))']
_.each(test, function(item) {
  assert(print(read(item)) === item, item)
})

// null is alias for empty

assert(print(read('#null')) === '()')
assert(eval(null) === null)

// test lookup

assert(lookup(null, 'a') === null, 'empty lookup')
assert(cdr(lookup(read('((b . 10) (a . 5))'), 'a')) === 5, 'lookup a')

// length

assert(length(read('1')) === null)
assert(length(read('(1 2 3)')) === 3)

// local variables

assert(eval(read('(let a 5 (let b 7 (* a b)))'), initial_environment) === 35, 'local vars')

// quasiquoting

// assert(print(eval(read('`(1 ,(+ 1 1) 3)'))) === '(1 2 3)', 'unquote')
// assert(print(eval(read('`(1 ,@2)'))) === '(1 . 2)', 'unquote-splicing')
// assert(eval(read('(quasiquote (0 (unquote-splicing 1) 4))')), 'unquote-splicing syntax error')

// error: unquote-splicing: expected argument of type <proper list>; given 1
