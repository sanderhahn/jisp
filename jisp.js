/* Jison generated parser */
var jisp = (function(){
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"atom":3,"NUMBER":4,"SYMBOL":5,"#true":6,"#false":7,"#null":8,"list":9,"sexpr":10,".":11,"(":12,")":13,"'":14,",@":15,",":16,"`":17,"jisp":18,"EOF":19,"$accept":0,"$end":1},
terminals_: {2:"error",4:"NUMBER",5:"SYMBOL",6:"#true",7:"#false",8:"#null",11:".",12:"(",13:")",14:"'",15:",@",16:",",17:"`",19:"EOF"},
productions_: [0,[3,1],[3,1],[3,1],[3,1],[3,1],[9,2],[9,3],[9,0],[10,1],[10,3],[10,2],[10,2],[10,2],[10,2],[18,2]],
performAction: function anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$) {

var $0 = $$.length - 1;
switch (yystate) {
case 1: this.$ = Number(yytext) 
break;
case 2: this.$ = yytext 
break;
case 3: this.$ = true 
break;
case 4: this.$ = false 
break;
case 5: this.$ = null 
break;
case 6: this.$ = cons( $$[$0-1], $$[$0] ) 
break;
case 7: this.$ = cons( $$[$0-2], $$[$0] ) 
break;
case 8: this.$ = null 
break;
case 9: this.$ = $$[$0] 
break;
case 10: this.$ = $$[$0-1] 
break;
case 11: this.$ = cons('quote', cons($$[$0], null)) 
break;
case 12: this.$ = cons('unquote-splicing', cons($$[$0], null)) 
break;
case 13: this.$ = cons('unquote', cons($$[$0], null)) 
break;
case 14: this.$ = cons('quasiquote', cons($$[$0], null)) 
break;
case 15: return $$[$0-1] 
break;
}
},
table: [{3:3,4:[1,9],5:[1,10],6:[1,11],7:[1,12],8:[1,13],10:2,12:[1,4],14:[1,5],15:[1,6],16:[1,7],17:[1,8],18:1},{1:[3]},{19:[1,14]},{4:[2,9],5:[2,9],6:[2,9],7:[2,9],8:[2,9],11:[2,9],12:[2,9],13:[2,9],14:[2,9],15:[2,9],16:[2,9],17:[2,9],19:[2,9]},{3:3,4:[1,9],5:[1,10],6:[1,11],7:[1,12],8:[1,13],9:15,10:16,12:[1,4],13:[2,8],14:[1,5],15:[1,6],16:[1,7],17:[1,8]},{3:3,4:[1,9],5:[1,10],6:[1,11],7:[1,12],8:[1,13],10:17,12:[1,4],14:[1,5],15:[1,6],16:[1,7],17:[1,8]},{3:3,4:[1,9],5:[1,10],6:[1,11],7:[1,12],8:[1,13],10:18,12:[1,4],14:[1,5],15:[1,6],16:[1,7],17:[1,8]},{3:3,4:[1,9],5:[1,10],6:[1,11],7:[1,12],8:[1,13],10:19,12:[1,4],14:[1,5],15:[1,6],16:[1,7],17:[1,8]},{3:3,4:[1,9],5:[1,10],6:[1,11],7:[1,12],8:[1,13],10:20,12:[1,4],14:[1,5],15:[1,6],16:[1,7],17:[1,8]},{4:[2,1],5:[2,1],6:[2,1],7:[2,1],8:[2,1],11:[2,1],12:[2,1],13:[2,1],14:[2,1],15:[2,1],16:[2,1],17:[2,1],19:[2,1]},{4:[2,2],5:[2,2],6:[2,2],7:[2,2],8:[2,2],11:[2,2],12:[2,2],13:[2,2],14:[2,2],15:[2,2],16:[2,2],17:[2,2],19:[2,2]},{4:[2,3],5:[2,3],6:[2,3],7:[2,3],8:[2,3],11:[2,3],12:[2,3],13:[2,3],14:[2,3],15:[2,3],16:[2,3],17:[2,3],19:[2,3]},{4:[2,4],5:[2,4],6:[2,4],7:[2,4],8:[2,4],11:[2,4],12:[2,4],13:[2,4],14:[2,4],15:[2,4],16:[2,4],17:[2,4],19:[2,4]},{4:[2,5],5:[2,5],6:[2,5],7:[2,5],8:[2,5],11:[2,5],12:[2,5],13:[2,5],14:[2,5],15:[2,5],16:[2,5],17:[2,5],19:[2,5]},{1:[2,15]},{13:[1,21]},{3:3,4:[1,9],5:[1,10],6:[1,11],7:[1,12],8:[1,13],9:22,10:16,11:[1,23],12:[1,4],13:[2,8],14:[1,5],15:[1,6],16:[1,7],17:[1,8]},{4:[2,11],5:[2,11],6:[2,11],7:[2,11],8:[2,11],11:[2,11],12:[2,11],13:[2,11],14:[2,11],15:[2,11],16:[2,11],17:[2,11],19:[2,11]},{4:[2,12],5:[2,12],6:[2,12],7:[2,12],8:[2,12],11:[2,12],12:[2,12],13:[2,12],14:[2,12],15:[2,12],16:[2,12],17:[2,12],19:[2,12]},{4:[2,13],5:[2,13],6:[2,13],7:[2,13],8:[2,13],11:[2,13],12:[2,13],13:[2,13],14:[2,13],15:[2,13],16:[2,13],17:[2,13],19:[2,13]},{4:[2,14],5:[2,14],6:[2,14],7:[2,14],8:[2,14],11:[2,14],12:[2,14],13:[2,14],14:[2,14],15:[2,14],16:[2,14],17:[2,14],19:[2,14]},{4:[2,10],5:[2,10],6:[2,10],7:[2,10],8:[2,10],11:[2,10],12:[2,10],13:[2,10],14:[2,10],15:[2,10],16:[2,10],17:[2,10],19:[2,10]},{13:[2,6]},{3:3,4:[1,9],5:[1,10],6:[1,11],7:[1,12],8:[1,13],10:24,12:[1,4],14:[1,5],15:[1,6],16:[1,7],17:[1,8]},{13:[2,7]}],
defaultActions: {14:[2,15],22:[2,6],24:[2,7]},
parseError: function parseError(str, hash) {
    throw new Error(str);
},
parse: function parse(input) {
    var self = this,
        stack = [0],
        vstack = [null], // semantic value stack
        lstack = [], // location stack
        table = this.table,
        yytext = '',
        yylineno = 0,
        yyleng = 0,
        recovering = 0,
        TERROR = 2,
        EOF = 1;

    //this.reductionCount = this.shiftCount = 0;

    this.lexer.setInput(input);
    this.lexer.yy = this.yy;
    this.yy.lexer = this.lexer;
    if (typeof this.lexer.yylloc == 'undefined')
        this.lexer.yylloc = {};
    var yyloc = this.lexer.yylloc;
    lstack.push(yyloc);

    if (typeof this.yy.parseError === 'function')
        this.parseError = this.yy.parseError;

    function popStack (n) {
        stack.length = stack.length - 2*n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }

    function lex() {
        var token;
        token = self.lexer.lex() || 1; // $end = 1
        // if token isn't its numeric value, convert
        if (typeof token !== 'number') {
            token = self.symbols_[token] || token;
        }
        return token;
    };

    var symbol, preErrorSymbol, state, action, a, r, yyval={},p,len,newState, expected;
    while (true) {
        // retreive state number from top of stack
        state = stack[stack.length-1];

        // use default actions if available
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol == null)
                symbol = lex();
            // read action for current state and first input
            action = table[state] && table[state][symbol];
        }

        // handle parse error
        if (typeof action === 'undefined' || !action.length || !action[0]) {

            if (!recovering) {
                // Report error
                expected = [];
                for (p in table[state]) if (this.terminals_[p] && p > 2) {
                    expected.push("'"+this.terminals_[p]+"'");
                }
                var errStr = '';
                if (this.lexer.showPosition) {
                    errStr = 'Parse error on line '+(yylineno+1)+":\n"+this.lexer.showPosition()+'\nExpecting '+expected.join(', ');
                } else {
                    errStr = 'Parse error on line '+(yylineno+1)+": Unexpected " +
                                  (symbol == 1 /*EOF*/ ? "end of input" :
                                              ("'"+(this.terminals_[symbol] || symbol)+"'"));
                }
                this.parseError(errStr,
                    {text: this.lexer.match, token: this.terminals_[symbol] || symbol, line: this.lexer.yylineno, loc: yyloc, expected: expected});
            }

            // just recovered from another error
            if (recovering == 3) {
                if (symbol == EOF) {
                    throw new Error(errStr || 'Parsing halted.');
                }

                // discard current lookahead and grab another
                yyleng = this.lexer.yyleng;
                yytext = this.lexer.yytext;
                yylineno = this.lexer.yylineno;
                yyloc = this.lexer.yylloc;
                symbol = lex();
            }

            // try to recover from error
            while (1) {
                // check for error recovery rule in this state
                if ((TERROR.toString()) in table[state]) {
                    break;
                }
                if (state == 0) {
                    throw new Error(errStr || 'Parsing halted.');
                }
                popStack(1);
                state = stack[stack.length-1];
            }

            preErrorSymbol = symbol; // save the lookahead token
            symbol = TERROR;         // insert generic error symbol as new lookahead
            state = stack[stack.length-1];
            action = table[state] && table[state][TERROR];
            recovering = 3; // allow 3 real symbols to be shifted before reporting a new error
        }

        // this shouldn't happen, unless resolve defaults are off
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: '+state+', token: '+symbol);
        }

        switch (action[0]) {

            case 1: // shift
                //this.shiftCount++;

                stack.push(symbol);
                vstack.push(this.lexer.yytext);
                lstack.push(this.lexer.yylloc);
                stack.push(action[1]); // push state
                symbol = null;
                if (!preErrorSymbol) { // normal execution/no error
                    yyleng = this.lexer.yyleng;
                    yytext = this.lexer.yytext;
                    yylineno = this.lexer.yylineno;
                    yyloc = this.lexer.yylloc;
                    if (recovering > 0)
                        recovering--;
                } else { // error just occurred, resume old lookahead f/ before error
                    symbol = preErrorSymbol;
                    preErrorSymbol = null;
                }
                break;

            case 2: // reduce
                //this.reductionCount++;

                len = this.productions_[action[1]][1];

                // perform semantic action
                yyval.$ = vstack[vstack.length-len]; // default to $$ = $1
                // default location, uses first token for firsts, last for lasts
                yyval._$ = {
                    first_line: lstack[lstack.length-(len||1)].first_line,
                    last_line: lstack[lstack.length-1].last_line,
                    first_column: lstack[lstack.length-(len||1)].first_column,
                    last_column: lstack[lstack.length-1].last_column
                };
                r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);

                if (typeof r !== 'undefined') {
                    return r;
                }

                // pop off stack
                if (len) {
                    stack = stack.slice(0,-1*len*2);
                    vstack = vstack.slice(0, -1*len);
                    lstack = lstack.slice(0, -1*len);
                }

                stack.push(this.productions_[action[1]][0]);    // push nonterminal (reduce)
                vstack.push(yyval.$);
                lstack.push(yyval._$);
                // goto new state = table[STATE][NONTERMINAL]
                newState = table[stack[stack.length-2]][stack[stack.length-1]];
                stack.push(newState);
                break;

            case 3: // accept
                return true;
        }

    }

    return true;
}};/* Jison generated lexer */
var lexer = (function(){var lexer = ({EOF:1,
parseError:function parseError(str, hash) {
        if (this.yy.parseError) {
            this.yy.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },
setInput:function (input) {
        this._input = input;
        this._more = this._less = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {first_line:1,first_column:0,last_line:1,last_column:0};
        return this;
    },
input:function () {
        var ch = this._input[0];
        this.yytext+=ch;
        this.yyleng++;
        this.match+=ch;
        this.matched+=ch;
        var lines = ch.match(/\n/);
        if (lines) this.yylineno++;
        this._input = this._input.slice(1);
        return ch;
    },
unput:function (ch) {
        this._input = ch + this._input;
        return this;
    },
more:function () {
        this._more = true;
        return this;
    },
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20)+(next.length > 20 ? '...':'')).replace(/\n/g, "");
    },
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c+"^";
    },
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) this.done = true;

        var token,
            match,
            col,
            lines;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i=0;i < rules.length; i++) {
            match = this._input.match(this.rules[rules[i]]);
            if (match) {
                lines = match[0].match(/\n.*/g);
                if (lines) this.yylineno += lines.length;
                this.yylloc = {first_line: this.yylloc.last_line,
                               last_line: this.yylineno+1,
                               first_column: this.yylloc.last_column,
                               last_column: lines ? lines[lines.length-1].length-1 : this.yylloc.last_column + match[0].length}
                this.yytext += match[0];
                this.match += match[0];
                this.matches = match;
                this.yyleng = this.yytext.length;
                this._more = false;
                this._input = this._input.slice(match[0].length);
                this.matched += match[0];
                token = this.performAction.call(this, this.yy, this, rules[i],this.conditionStack[this.conditionStack.length-1]);
                if (token) return token;
                else return;
            }
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            this.parseError('Lexical error on line '+(this.yylineno+1)+'. Unrecognized text.\n'+this.showPosition(), 
                    {text: "", token: null, line: this.yylineno});
        }
    },
lex:function lex() {
        var r = this.next();
        if (typeof r !== 'undefined') {
            return r;
        } else {
            return this.lex();
        }
    },
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },
popState:function popState() {
        return this.conditionStack.pop();
    },
_currentRules:function _currentRules() {
        return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules;
    }});
lexer.performAction = function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {

var YYSTATE=YY_START
switch($avoiding_name_collisions) {
case 0:/* comment */;
break;
case 1:/* whitespace */;
break;
case 2:return 4;
break;
case 3:return 11;
break;
case 4:return 5;
break;
case 5:return 12;
break;
case 6:return 13;
break;
case 7:return "'";
break;
case 8:return ",@";
break;
case 9:return ",";
break;
case 10:return "`";
break;
case 11:return 6;
break;
case 12:return 7;
break;
case 13:return 8;
break;
case 14:return 19;
break;
}
};
lexer.rules = [/^;[^\n]*[\n]/,/^[\s]+/,/^[0-9]+(\.[0-9]+)?\b\b/,/^\./,/^[a-zA-Z/_=\+\-\*\?:%.!]+/,/^\(/,/^\)/,/^'/,/^,@/,/^,/,/^`/,/^#true\b/,/^#false\b/,/^#null\b/,/^$/];
lexer.conditions = {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],"inclusive":true}};return lexer;})()
parser.lexer = lexer;
return parser;
})();
if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = jisp;
exports.parse = function () { return jisp.parse.apply(jisp, arguments); }
exports.main = function commonjsMain(args) {
    if (!args[1])
        throw new Error('Usage: '+args[0]+' FILE');
    if (typeof process !== 'undefined') {
        var source = require('fs').readFileSync(require('path').join(process.cwd(), args[1]), "utf8");
    } else {
        var cwd = require("file").path(require("file").cwd());
        var source = cwd.join(args[1]).read({charset: "utf-8"});
    }
    return exports.parser.parse(source);
}
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(typeof process !== 'undefined' ? process.argv.slice(1) : require("system").args);
}
}