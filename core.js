// primitives

var NIL = null

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
			return '#t'
		} else if(value === false) {
			return '#f'
		} else {
			return value
		}
		
	} else {
		
		var str = ''
		var here = value
		do {
			if(here === NIL) {
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
	while(env != NIL) {
		var entry = car(env)
		if(is_eq(car(entry), symbol)) {
			return entry
		}
		env = cdr(env)
	}
	return NIL
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
		if(entry != NIL) {
			return cdr(entry)
		}
		
		throw 'Undefined symbol: ' + code
		
	} else {
		
		var syntax = car(code)
		
		if(is_eq(syntax, 'quote')) {
			return car(cdr(code))
		}
		
		var args = []
		while(code != NIL) {
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

// map to dict (convert object into a list of key value pairs)

function map2dict(map) {
	var dict = NIL
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
	
	// nummeric
	'+': function(a, b) { return a + b },
	'-': function(a, b) { return a - b },
	'*': function(a, b) { return a * b },
	'/': function(a, b) { return a / b },
	'%': function(a, b) { return a % b },
	
	// util
	
	'print': print

})

