// primitives

function is_atom(atom) {
	return typeof(atom) != 'object'
}

function is_eq(a, b) {
	return a === b
}

function is_symbol(atom) {
	return typeof(atom) == 'string'
}

// lists

function cons(a, b) {
	return [a, b]
}

function car(p) {
	return p[0]
}

function cdr(p) {
	return p[1]
}

function length(p) {
	var len = 0
	while(p != null) {
		if(is_atom(p)) {
			return null
		}
		len++
		p = cdr(p)
	}
	return len
}

// control flow

function cond() {}

function lambda() {}

// util

function read(str) {
	return jisp.parse(str)
}

function print(value) {
	
	if(is_atom(value)) {
		
		if(value === true) {
			return '#true'
		} else if(value === false) {
			return '#false'
		} else {
			return value
		}
		
	} else {
		
		var str = ''
		var here = value
		
		if(value !== null && is_eq(car(value), 'quote')) {
			return "'" + print(car(cdr(value)))
		}
		
		do {
			if(here === null) {
				return '(' + str + ')'
			}
			if(str != '') {
				str += ' '
			}
			str += print(car(here))
			var more = cdr(here)
			if(is_atom(more)) {
				return '(' + str + ' . ' + print(more) + ')'
			} else {
				here = more
			}
		} while(true);
		
	}
}

// lookup (looks up a symbol in a list of key value pairs returns the pair)

function lookup(env, symbol) {
	while(env != null) {
		var entry = car(env)
		if(car(entry) === symbol) {
			return entry
		}
		env = cdr(env)
	}
	return null
}

function extend(env, symbol, value) {
	return cons(cons(symbol, value), env)
}

// eval

function eval(code, env) {
	
	if(is_atom(code)) {
		
		if(! is_symbol(code)) {
			return code
		}
		
		var entry = lookup(env, code)
		if(entry != null) {
			return cdr(entry)
		}
		
		var entry = lookup(global_environment, code)
		if(entry != null) {
			return cdr(entry)
		}

		throw code + ': symbol undefined'
		
	} else {
		
		if(code === null) {
			return null
		}

		var syntax = car(code)
		var rest = cdr(code)
		
		switch(syntax) {
			
			// quoting in r6rs
			// quote('), unquote(,), quasiquote(`), unquote-splicing(,@)
			
			case 'quote':
				return car(rest)
			
			case 'unquote':
				throw 'unquote: not in quasiquote'
				
			case 'unquote-splicing':
				throw 'unquote-splicing: not in quasiquote'
			
			case 'quasiquote':
				return quasiquote(car(rest))
				
			case 'quote':
				return car(rest)
				
			case 'let':
			
				// local variable
				
				if(length(rest) !== 3) {
					throw 'let: syntax requires three elements: a symbol and a value and an expression'
				}

				var symbol = car(rest)
				var code = car(cdr(rest))
				var expr = car(cdr(cdr(rest)))
				var val = eval(code)
				
				env = extend(env, symbol, val)

				return eval(expr, env)
			
			case 'def':

				// global variable
				
				if(length(rest) !== 2) {
					throw 'def: syntax requires two elements: a symbol and a value'
				}

				var symbol = car(rest)
				var code = car(cdr(rest))
				var val = eval(code)
				global_environment = extend(global_environment, symbol, val)

				return val

			case 'set!':
				
				if(length(rest) !== 2) {
					throw 'set!: syntax requires two elements: a symbol and a value'
				}
				
				var symbol = car(rest)
				var code = car(cdr(rest))
				
				var entry = lookup(env, symbol)
				if(entry === null) {
					throw symbol + ': undefined symbol'
				}
				
				var val = eval(code)
				entry[1] = val
				
				return val
		}
		
		var args = []
		while(code != null) {
			args.push(eval(car(code), env))
			code = cdr(code)
		}

		var fun = args.shift()
		
		if(typeof(fun) != 'function') {
			throw 'Call made to a non-function value: ' + print(fun)
		}
		
		if(fun.length != args.length) {
			throw 'Call made to a function with arity: ' + fun.length + ' got ' + args.length + ' values'
		}

		return fun.apply(this, args)
		
	}
}

// Multiple nestings of quasiquote require multiple nestings of unquote or unquote-splicing to escape.

function quasiquote(p) {
	
	if(is_atom(p)) {
		
		return p
		
	} else {

		if(p === null) {
			return null
		}

		// lets first implement apply and map ?

		return p
		
	}
	
}

// map to dict (convert object into a list of key value pairs)

function map2dict(map) {
	var dict = null
	for(var key in map) {
		dict = extend(dict, key, map[key])
	}
	return dict
}

var initial_environment = map2dict({
	
	// primitives

	'atom?': is_atom,
	'eq?': is_eq,
	'symbol?': is_symbol,
	
	// list
	
	'cons': cons,
	'car': car,
	'cdr': cdr,
	'length': length,
	
	// numeric

	'+': function(a, b) { return a + b },
	'-': function(a, b) { return a - b },
	'*': function(a, b) { return a * b },
	'/': function(a, b) { return a / b },
	'%': function(a, b) { return a % b },
	
	// util
	
	'print': print,
	'read': read,	// implement string literals
	'eval': eval,
	
})

var global_environment = map2dict({

	// test

	'a': 10,

})
