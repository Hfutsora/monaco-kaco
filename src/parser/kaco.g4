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
Dot:                            '.';
Ellipsis:                       '...';

/// Keywords

OpenForm
    : 'OpenForm'
    ;

SaveForm
    : 'SaveForm'
    ;


//==============================================================

statement
    // : ifStatement
    // | blockStatement
    // | assignStatement
    // | printStatement
    : openFormStatement
    | saveFormStatement
    ;
ifStatement
    : 'if' quoteExpr blockStatement
    | 'if' quoteExpr blockStatement 'else' blockStatement
    ;
quoteExpr
    : '(' '[' StringDotLiteral ']' ')'
    | '(' StringLiteral? ')'
    ;

quoteEllipsisExpr
    : '(' ((StringLiteral | DecimalLiteral | BooleanLiteral | '[' QuoteLiteral ']' | '[' StringDotLiteral ']' | '[' StringLiteral ']') (',' (StringLiteral | DecimalLiteral | BooleanLiteral | '[' QuoteLiteral ']' | '[' StringDotLiteral ']' | '[' StringLiteral ']'))* )? ')'
    ;

blockStatement
    : '{' (statement)* '}'
    ;
assignStatement
    : assign ';'
    ;

printStatement
    : 'print' '(' expression ')' ';'
    ;

openFormStatement
    : 'OpenForm' '[' (StringLiteral | DecimalLiteral) ']' quoteEllipsisExpr? quoteEllipsisExpr? quoteEllipsisExpr? ';'
    ;

saveFormStatement
    : 'SaveForm' quoteEllipsisExpr ';'
    ;

commonExpression
    : assignAbleStatement
    ;
assignAbleStatement
    : assign
    | expression
    ;

//==============================================================

expression
    : andAndExpression ('||' andAndExpression)*
    ;
andAndExpression
    : cmpExpression ('&&' cmpExpression)*
    ;
cmpExpression
    : addExpression (('==' | '!=' | '<' | '<=' | '>' | '>=') addExpression)?
    ;
addExpression
    : mulExpression (('+' | '-') mulExpression)*
    ;
mulExpression
    : unaryExpression (('*' | '/') unaryExpression)*
    ;
unaryExpression
    : primaryExpression
    | ('-' | '!') unaryExpression
    ;
primaryExpression
    : variableExpression
    | '(' expression ')'
    ;
variableExpression
    : 
    ;
//==============================================================

assign
    :
    // : Identifier Assign Identifier
    ;

//==============================================================

// Identifier
//     :
//     ;

StringLiteral
    : '\'' (~[\\\r\n])*? '\''
    ;

StringDotLiteral
    :  StringLiteral ('.' StringLiteral)*
    ;

BooleanLiteral
    : 'true'
    | 'false'
    ;

DecimalLiteral
    : Decimal
    ;

QuoteLiteral
    : '@' WhiteSpace '0'
    | '@' WhiteSpace NonZeroDigit (DigitChar)*
    ;

Decimal
	: '0' ('.' (DigitChar)* NonZeroDigit)?
	| NonZeroDigit (DigitChar)* ('.' (DigitChar)* NonZeroDigit)?
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