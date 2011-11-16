/* Simple Lisp Grammar */

%lex

%%
';'[^\n]*[\n]             /* comment */;
[\s]+                     /* whitespace */;
[0-9]+("."[0-9]+)?\b      return 'NUMBER';
'.'                       return '.';
[a-zA-Z/_=\+\-\*\?:%.!]+  return 'SYMBOL';
'('                       return '(';
')'                       return ')';
"'"                       return "'";
",@"                      return ",@";
","                       return ",";
"`"                       return "`";
'#true'                   return '#true';
'#false'                  return '#false';
'#null'                   return '#null';
<<EOF>>                   return 'EOF';

/lex

%start jisp

%%

atom
  : NUMBER   { $$ = Number(yytext) }
  | SYMBOL   { $$ = yytext }
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
  ;

jisp
  : sexpr EOF { return $1 }
  ;
