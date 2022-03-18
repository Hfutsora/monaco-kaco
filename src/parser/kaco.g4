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
OpenBrace:                      '{';
CloseBrace:                     '}';
SemiColon:                      ';';
Comma:                          ',';
Plus:                           '+';
Minus:                          '-';
Multiply:                       '*';
Divide:                         '/';
Assign:                         '=';
Dot:                            '.';
Ellipsis:                       '...';
Equal:                          '==';
NotEqual:                       '!=';
LessThan:                       '<';
MoreThan:                       '>';
LessThanEquals:                 '<=';
GreaterThanEquals:              '>=';
And:                            '&&';
Or:                             '||';
Sql:                            '#';
Const:                          '$';

/// Keywords

OpenForm
    : 'OpenForm'
    ;

SaveForm
    : 'SaveForm'
    ;

Close
    : 'Close'
    ;

Refresh
    : 'Refresh'
    ;

MessageBox
    : 'MessageBox'
    ;

ClickButton
    : 'ClickButton'
    ;

GetComboDic
    : 'GetComboDic'
    ;

Selected
    : 'selected'
    | 'SELECTED'
    ;

If
    : 'if'
    ;

Constant
    : 'USERID'
    | 'USERNAME'
    | 'USERCODE'
    | 'ORGNAME1'
    | 'ORGCODE1'
    | 'INSTANCE'
    | 'CURTIME'
    | 'CURROLE'
    | 'CURFLOW'
    | 'CURFTASK'
    | 'CURTACHE'
    | 'CURSTATE'
    | 'UPLOADFILE'
    ;

//==============================================================

statement
    : ifStatement
    | functionStatement
    ;

functionStatement
    : openFormStatement
    | saveFormStatement
    | closeStatement
    | refreshStatement
    | messageStatement
    | clickButtonStatement
    | getComboDicStatement
    | assignStatement
    ;

ifStatement
    : 'if' '(' expressionSequence ')' blockStatement
    ;

blockStatement
    : '{' (functionStatement | assignStatement)* '}'
    ;

expressionSequence
    : singleExpression
    ;

singleExpression
    : commonLiteral
    | singleExpression ('<' | '>' | '<=' | '>=') singleExpression
    | singleExpression ('+' | '-') singleExpression  
    | singleExpression ('==' | '!=') singleExpression
    | singleExpression '&&' singleExpression
    | singleExpression '||' singleExpression
    | '(' expressionSequence ')'
    ;

assignStatement
    : assign ';'
    ;

quoteEllipsisExpr
    : '(' (commonLiteral (',' commonLiteral)* )? ')'
    ;

openFormStatement
    : 'OpenForm' '[' (StringLiteral | DecimalLiteral) ']' quoteEllipsisExpr? quoteEllipsisExpr? quoteEllipsisExpr? ';'
    ;

saveFormStatement
    : 'SaveForm' quoteEllipsisExpr ';'
    ;

closeStatement
    : 'Close' '(' StringLiteral? ')' ';'
    ;

refreshStatement
    : 'Refresh' '(' StringLiteral? ')' ';'
    ;

messageStatement
    : 'MessageBox' '(' MessageLiteral ',' StringLiteral ')' ';'
    ;

clickButtonStatement
    : 'ClickButton' '(' ctrlQuoteLiteral ')' ';'
    ;

getComboDicStatement
    : 'GetComboDic' '(' ctrlQuoteLiteral ',' sqlLiteral ')' ';'
    ;

//==============================================================

expression
    : subTerm
    ;

subTerm: addTerm ('-' addTerm)*;
addTerm: divTerm('+' divTerm)*;
divTerm: mulTerm ('/' mulTerm)*;
mulTerm: parnTerm ('*' parnTerm)*;

parnTerm
    : (commonLiteral | sqlLiteral) expression (commonLiteral | sqlLiteral)
    | (commonLiteral | sqlLiteral) 
    | '(' expression ')'
    ;

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
    : '[' StringLiteral ('.' StringLiteral)? (',' StringLiteral)* ('(' Selected '==' ('-1' | '*' | Natural) ')')? ']'
    ;

ctrlQuoteParamLiteral
    : '[' ParamLiteral ']'
    ;

ctrlConstantLiteral
    : '[' '$' Constant ']'
    ;

commonLiteral
    : ctrlQuoteLiteral
    | ctrlQuoteDotLiteral
    | ctrlQuoteParamLiteral
    | ctrlConstantLiteral
    | DecimalLiteral
    | BooleanLiteral
    | StringLiteral
    ;

//==============================================================

MessageLiteral
    : '\'' ( '警告' | '提示' | '询问') '\''
    ;

StringLiteral
    : '\'' (~[\\\r\n])*? '\''
    ;

BooleanLiteral
    : 'true'
    | 'false'
    ;

DecimalLiteral
    : Decimal
    ;

ParamLiteral
    : '@' WHITESPACE Natural
    ;

sqlLiteral
    : '[' '#' (.)*? ']'
    ;

Decimal
	: '0' ('.' (DigitChar)* NonZeroDigit)?
	| NonZeroDigit (DigitChar)* ('.' (DigitChar)* NonZeroDigit)?
	;

Natural
    : '0'
    | [1-9][0-9]*
    ;

NonZeroDigit
	: '1'..'9'
	;
DigitChar
	: Natural
	| '_'
	;

//==============================================================


WS 
    : [\t\r\n]+ -> skip 
    ; // skip spaces, newlines

COMMENT
    : '//' ~('\n'|'\r')* '\r'? '\n' -> skip
    ;

WHITESPACE
    : (' ' | '\r' | '\n' | '\t') -> skip
    ;
