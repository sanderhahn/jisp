// primitives

var NIL = []

function quote(list) {
	return list
}

function is_atom(atom) {
	return typeof(atom) != 'object'
}

function is_eq(a, b) {
	return a === b
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
			if(here.length == 0) {
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