/* Simple Lisp */

%lex

%%
';'[^\n]*[\n]         /* comment */;
[\s]+                 /* whitespace */;
[0-9]+("."[0-9]+)?\b  return 'NUMBER';
[a-zA-Z/_=\+\-\*]+    return 'SYMBOL';
'('                   return '(';
'.'                   return '.';
')'                   return ')';
"'"                   return "'";
'#t'                  return '#t';
'#f'                  return '#f';
<<EOF>>               return 'EOF';

/lex

%start jisp

%%

atom
  : NUMBER { $$ = Number(yytext) }
  | SYMBOL { $$ = yytext }
  | '#t'   { $$ = true }
  | '#f'   { $$ = false }
  ;

list
  : sexpr list      { $$ = cons( $1, $2 ) }
  | sexpr '.' sexpr { $$ = cons( $1, $3 ) }
  |                 { $$ = NIL }
  ;

sexpr
  : atom         { $$ = $1 }
  | '(' list ')' { $$ = $2 }
  | "'" sexpr    { $$ = cons('quote', $2) }
  ;

jisp
  : sexpr EOF { return $1 }
  ;
