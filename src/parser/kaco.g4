grammar kaco;

//==============================================================

program
    : statement+ EOF
    ;

//==============================================================

OpenBracket:                    '[';
CloseBracket:                   ']';
OpenParen:                      '(';
CloseParen:                     ')';
SemiColon:                      ';';
Comma:                          ',';
Assign:                         '=';
Equal:                          '==';
Dot:                            '.';
Ellipsis:                       '...';

/// Keywords

OpenForm
    : 'OpenForm'
    ;

SaveForm
    : 'SaveForm'
    ;

Selected
    : 'selected'
    | 'SELECTED'
    ;

All
    : '*'
    ;

//==============================================================

statement
    // : ifStatement
    // | blockStatement
    : openFormStatement
    | saveFormStatement
    | assignStatement
    ;
ifStatement
    : 'if' quoteExpr blockStatement
    | 'if' quoteExpr blockStatement 'else' blockStatement
    ;
quoteExpr
    : '(' ctrlQuoteDotLiteral ')'
    | '(' StringLiteral? ')'
    ;

quoteEllipsisExpr
    : '(' (commonLiteral (',' commonLiteral)* )? ')'
    ;

blockStatement
    : '{' (statement)* '}'
    ;
assignStatement
    : assign ';'
    ;

openFormStatement
    : 'OpenForm' '[' (StringLiteral | DecimalLiteral) ']' quoteEllipsisExpr? quoteEllipsisExpr? quoteEllipsisExpr? ';'
    ;

saveFormStatement
    : 'SaveForm' quoteEllipsisExpr ';'
    ;


//==============================================================

expression
    : subTerm
    ;

subTerm: addTerm ('-' addTerm)*;
addTerm: divTerm('+' divTerm)*;
divTerm: mulTerm ('/' mulTerm)*;
mulTerm: parnTerm ('*' parnTerm)*;

parnTerm: (commonLiteral expression commonLiteral) | commonLiteral | '(' expression ')';

//==============================================================

assign
    : assignStart '=' expression
    ;

assignStart
    : (ctrlQuoteLiteral | ctrlQuoteLiteral '.' ctrlQuoteLiteral) (',' ctrlQuoteLiteral)*
    ;


// composes

ctrlQuoteLiteral
    : '[' StringLiteral ']'
    ;

ctrlQuoteDotLiteral
    : '[' StringDotLiteral ('(' Selected WhiteSpace* '==' WhiteSpace* ('-1' | '*' | Natural) ')')? ']'
    ;

ctrlQuoteParamLiteral
    : '[' ParamLiteral ']'
    ;

commonLiteral
    : ctrlQuoteLiteral | ctrlQuoteDotLiteral | ctrlQuoteParamLiteral | DecimalLiteral | BooleanLiteral | StringLiteral
    ;

//==============================================================

StringLiteral
    : '\'' (~[\\\r\n])*? '\''
    ;

StringDotLiteral
    :  StringLiteral ('.' StringLiteral)? (',' WhiteSpace* StringLiteral)*
    ;


BooleanLiteral
    : 'true'
    | 'false'
    ;

DecimalLiteral
    : Decimal
    ;

ParamLiteral
    : '@' WhiteSpace '0'
    | '@' WhiteSpace NonZeroDigit (DigitChar)*
    ;

Decimal
	: '0' ('.' (DigitChar)* NonZeroDigit)?
	| NonZeroDigit (DigitChar)* ('.' (DigitChar)* NonZeroDigit)?
	;

Natural
    : '0'
    | [1-9][0-9]*
    ;

fragment NonZeroDigit
	: '1'..'9'
	;
fragment DigitChar
	: '0'
	| NonZeroDigit
	| '_'
	;

//==============================================================

LineComment
    : '//' ~('\n'|'\r')* '\r'? '\n' -> skip
    ;
WhiteSpace
    : (' ' | '\r' | '\n' | '\t') -> skip
    ;