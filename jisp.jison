/* Simple Lisp Grammar */

/* to insert into string literal:
\ddd	Octal sequence (3 digits: ddd)
\xdd	Hexadecimal sequence (2 digits: dd)
\udddd	Unicode sequence (4 hex digits: dddd)
*/

%lex

%%
';'[^\n]*[\n]             /* comment */;
[\s]+                     /* whitespace */;

'.'                       return '.';

\"([^\"\\]|\\[\'\"\\bfnrt])+\" return 'STRING';
[0-9]+("."[0-9]+)?\b      return 'NUMBER';
[a-zA-Z/_=\+\-\*\?:%.!]+  return 'SYMBOL';

'('                       return '(';
')'                       return ')';

"'"                       return "'";
",@"                      return ",@";
","                       return ",";
"`"                       return "`";

"#'"                      return "#'";
"#`"                      return "#`";
"#,@"                     return "#,@";
"#,"                      return "#,";

'#true'                   return '#true';
'#false'                  return '#false';
'#null'                   return '#null';
<<EOF>>                   return 'EOF';

/lex

%start jisp

%%

atom
  : NUMBER   { $$ = Number(yytext) }
  | SYMBOL   { $$ = new Symbol(yytext) }
  | STRING   { $$ = JSON.parse(yytext) }
  | '#true'  { $$ = true }
  | '#false' { $$ = false }
  | '#null'  { $$ = null }
  ;

list
  : sexpr list      { $$ = cons( $1, $2 ) }
  | sexpr '.' sexpr { $$ = cons( $1, $3 ) }
  |                 { $$ = null }
  ;

sexpr
  : atom         { $$ = $1 }
  | '(' list ')' { $$ = $2 }
  
  | "'" sexpr    { $$ = cons('quote', cons($2, null)) }
  | ",@" sexpr   { $$ = cons('unquote-splicing', cons($2, null)) }
  | "," sexpr    { $$ = cons('unquote', cons($2, null)) }
  | "`" sexpr    { $$ = cons('quasiquote', cons($2, null)) }
  
  | "#'" sexpr   { $$ = cons('syntax', cons($2, null)) }
  | "#`" sexpr   { $$ = cons('quasisyntax', cons($2, null)) }
  | "#," sexpr   { $$ = cons('unsyntax', cons($2, null)) }
  | "#,@" sexpr  { $$ = cons('unsyntax-splicing', cons($2, null)) }
  ;

jisp
  : sexpr EOF { return $1 }
  ;
