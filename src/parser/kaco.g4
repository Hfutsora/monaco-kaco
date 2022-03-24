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

QueryData
    : 'QueryData'
    ;

CarryData
    : 'CarryData'
    ;

SQLExecute
    : 'SQLExecute'
    ;

GetCoder
    : 'GetCoder'
    ;

SetCoder
    : 'SetCoder'
    ;

ResetCtrlValue
    : 'ResetCtrlValue'
    ;

SaveLastValue
    : 'SaveLastValue'
    ;

LoadLastValue
    : 'LoadLastValue'
    ;

SetVisiable
    : 'SetVisiable'
    ;

SetEnable
    : 'SetEnable'
    ;

SetFocus
    : 'SetFocus'
    ;

SetColor
    : 'SetColor'
    ;

ChangeTab
    : 'ChangeTab'
    ;

SwitchDisplay
    : 'SwitchDisplay'
    ;

StringSub
    : 'StringSub'
    ;

StringLen
    : 'StringLen'
    ;

StringStr
    : 'StringStr'
    ;

StringRep
    : 'StringRep'
    ;

StringCat
    : 'StringCat'
    ;

EncodeBase64
    : 'EncodeBase64'
    ;

DecodeBase64
    : 'DecodeBase64'
    ;

GetGridRows
    : 'GetGridRows'
    ;

AddGridRow
    : 'AddGridRow'
    ;

DelGridRow
    : 'DelGridRow'
    ;

SelGridRow
    : 'SelGridRow'
    ;

ExportXls
    : 'ExportXls'
    ;

ImportXls
    : 'ImportXls'
    ;

FlowTran
    : 'FlowTran'
    ;

FlowSave
    : 'FlowSave'
    ;

FlowFresh
    : 'FlowFresh'
    ;

FlowSend
    : 'FlowSend'
    ;

FlowBack
    : 'FlowBack'
    ;

FlowBack2
    : 'FlowBack2'
    ;

FlowMend
    : 'FlowMend'
    ;

FlowPrint
    : 'FlowPrint'
    ;

FlowForm
    : 'FlowForm'
    ;

FlowQuery
    : 'FlowQuery'
    ;

TaskHang
    : 'TaskHang'
    ;

TaskFree
    : 'TaskFree'
    ;

FlowTest
    : 'FlowTest'
    ;

FlowDrop
    : 'FlowDrop'
    ;

FlowClose
    : 'FlowClose'
    ;

FlowAgent
    : 'FlowAgent'
    ;

AgentCancel
    : 'AgentCancel'
    ;

FlowRefact
    : 'FlowRefact'
    ;

TestCommit
    : 'TestCommit'
    ;

ChangeInstFlow
    : 'ChangeInstFlow'
    ;

InstFlow
    : 'InstFlow'
    ;

Selected
    : 'selected'
    | 'SELECTED'
    ;

If
    : 'if'
    ;

While
    : 'While'
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
    | queryDataStatement
    | carryDataStatement
    | sqlExecuteStatement
    | getCoderStatement
    | setCoderStatement
    | resetCtrlValueStatement
    | saveLastValueStatement
    | loadLastValueStatement
    | setVisiableStatement
    | setEnableStatement
    | setFocusStatement
    | setColorStatement
    | changeTabStatement
    | switchDisplayStatement
    | stringSubStatement
    | stringLenStatement
    | stringStrStatement
    | stringRepStatement
    | stringCatStatement
    | encodeBase64Statement
    | decodeBase64Statement
    | getGridRowsStatement
    | addGridRowStatement
    | delGridRowStatement
    | selGridRowStatement
    | exportXlsStatement
    | importXlsStatement
    | whileStatement
    | flowTranStatement
    | flowSaveStatement
    | flowFreshStatement
    | flowSendStatement
    | flowBackStatement
    | flowBack2Statement
    | flowMendStatement
    | flowPrintStatement
    | flowFormStatement
    | flowQueryStatement
    | taskHangStatement
    | taskFreeStatement
    | flowTestStatement
    | flowDropStatement
    | flowCloseStatement
    | flowAgentStatement
    | agentCancelStatement
    | flowRefactStatement
    | testCommitStatement
    | changeInstFlowStatement
    | instFlowStatement
    | assignStatement
    ;

ifStatement
    : 'if' '(' expressionSequence ')' blockStatement
    ;

whileStatement
    : 'While' '(' ctrlQuoteDotLiteral ')' blockStatement
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

Natural
    : '0'
    | [1-9][0-9]*
    ;

quoteNaturalExpr
    : '(' Natural? ')'
    ;

openFormStatement
    : 'OpenForm' '[' (StringLiteral | DecimalLiteral | Natural) ']' quoteEllipsisExpr? quoteEllipsisExpr? quoteEllipsisExpr? ';'
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
    : 'GetComboDic' '(' ctrlQuoteLiteral ',' SqlLiteral ')' ';'
    ;

queryDataStatement
    : 'QueryData' ctrlQuoteLiteral ',' ctrlQuoteLiteral quoteEllipsisExpr? quoteNaturalExpr? quoteNaturalExpr? ';'
    ;

carryDataStatement
    : 'CarryData' ctrlQuoteLiteral ('(' ctrlQuoteLiteral? ')')? ';'
    ;

sqlExecuteStatement
    : 'SQLExecute' '(' SqlLiteral? ')' ';'
    ;

getCoderStatement
    : 'GetCoder' '(' (ctrlQuoteLiteral ',' StringLiteral)? ')' ';'
    ;

setCoderStatement
    : 'SetCoder' '(' (ctrlQuoteLiteral ',' StringLiteral)? ')' ';'
    ;

resetCtrlValueStatement
    : 'ResetCtrlValue' quoteEllipsisExpr ';'
    ;

saveLastValueStatement
    : 'SaveLastValue' quoteEllipsisExpr ';'
    ;

loadLastValueStatement
    : 'LoadLastValue' quoteEllipsisExpr ';'
    ;

setVisiableStatement
    : 'SetVisiable' '(' ctrlQuoteLiteral ','  Natural ')' ';'
    ;

setEnableStatement
    : 'SetEnable' '(' ctrlQuoteLiteral ','  Natural ')' ';'
    ;

setFocusStatement
    : 'SetFocus' '(' ctrlQuoteLiteral ')' ';'
    ;

setColorStatement
    : 'SetColor' '(' ctrlQuoteLiteral ',' (HexLiteral | StringLiteral) ')' ';'
    ;

changeTabStatement
    : 'ChangeTab' '(' ctrlQuoteLiteral ',' Natural ')' ';'
    ;

switchDisplayStatement
    : 'SwitchDisplay' quoteEllipsisExpr ';'
    ;

stringSubStatement
    : 'StringSub' ctrlQuoteLiteral '(' (ctrlQuoteLiteral | StringLiteral) ',' Natural ',' Natural ')' ';'
    ;

stringLenStatement
    : 'StringLen' ctrlQuoteLiteral '(' (ctrlQuoteLiteral | StringLiteral) ')' ';'
    ;

stringStrStatement
    : 'StringStr' ctrlQuoteLiteral '(' (StringLiteral | ctrlQuoteLiteral) ',' (StringLiteral | ctrlQuoteLiteral) ')' ';'
    ;

stringRepStatement
    : 'StringRep' '(' ctrlQuoteLiteral ',' (StringLiteral | ctrlQuoteLiteral) ',' (StringLiteral | ctrlQuoteLiteral) ')' ';'
    ;

stringCatStatement
    : 'StringCat' '(' ctrlQuoteLiteral (',' (StringLiteral | ctrlQuoteLiteral))+ ')' ';'
    ;

encodeBase64Statement
    : 'EncodeBase64' ctrlQuoteLiteral '(' (StringLiteral | ctrlQuoteLiteral) ')' ';'
    ;

decodeBase64Statement
    : 'DecodeBase64' ctrlQuoteLiteral '(' (StringLiteral | ctrlQuoteLiteral) ')' ';'
    ;

getGridRowsStatement
    : 'GetGridRows' '(' ctrlQuoteLiteral ',' ctrlQuoteDotLiteral ')' ';'
    ;

addGridRowStatement
    : 'AddGridRow' '(' ctrlQuoteDotLiteral ((',' ctrlQuoteDotLiteral) | (',' commonLiteral)*) ')' ';'
    ;

delGridRowStatement
    : 'DelGridRow' '(' ctrlQuoteDotLiteral ')' ';'
    ;

selGridRowStatement
    : 'SelGridRow' '(' ctrlQuoteDotLiteral ')' ';'
    ;

exportXlsStatement
    : 'ExportXls' '(' ctrlQuoteLiteral (',' Natural)? ')' ';'
    ;

importXlsStatement
    : 'ImportXls' '(' ctrlQuoteLiteral ')' ';'
    ;

flowTranStatement
    : 'FlowTran' '(' (ctrlQuoteDotLiteral ',' ctrlQuoteDotLiteral)? ')' ';'
    ;

flowSaveStatement
    : 'FlowSave' '(' ctrlQuoteLiteral? ')' ('(' Natural ')')? ';'
    ;

flowFreshStatement
    : 'FlowFresh' '(' ')' ';'
    ;

flowSendStatement
    : 'FlowSend' '(' (ctrlQuoteDotLiteral ',' ctrlQuoteDotLiteral)? ')' ';'
    ;

flowBackStatement
    : 'FlowBack' '(' (ctrlQuoteDotLiteral ',' ctrlQuoteDotLiteral)? ')' ';'
    ;

flowBack2Statement
    : 'FlowBack2' '(' (ctrlQuoteDotLiteral ',' ctrlQuoteDotLiteral)? ')' ';'
    ;

flowMendStatement
    : 'FlowMend' '(' (ctrlQuoteDotLiteral ',' ctrlQuoteDotLiteral)? ')' ';'
    ;

flowPrintStatement
    : 'FlowPrint' '(' ')' ';'
    ;

flowFormStatement
    : 'FlowForm' '(' ctrlQuoteDotLiteral? ')' ';'
    ;

flowQueryStatement
    : 'FlowQuery' '(' ctrlQuoteDotLiteral? ')' ';'
    ;

taskHangStatement
    : 'TaskHang' '(' (ctrlQuoteDotLiteral ',' ctrlQuoteDotLiteral)? ')' ';'
    ;

taskFreeStatement
    : 'TaskFree' '(' (ctrlQuoteDotLiteral ',' ctrlQuoteDotLiteral)? ')' ';'
    ;

flowTestStatement
    : 'FlowTest' '(' ')' ';'
    ;

flowDropStatement
    : 'FlowDrop' '(' ctrlQuoteDotLiteral? ')' ';'
    ;

flowCloseStatement
    : 'FlowClose' '(' ')' ';'
    ;

flowAgentStatement
    : 'FlowAgent' '(' commonLiteral ',' commonLiteral ',' commonLiteral ',' commonLiteral ',' commonLiteral (',' commonLiteral)? ')' ';'
    ;

agentCancelStatement
    : 'AgentCancel' '(' ctrlQuoteLiteral ')' ';'
    ;

flowRefactStatement
    : 'FlowRefact' '(' ctrlQuoteDotLiteral ',' Natural ')' ';'
    ;

testCommitStatement
    : 'TestCommit' '(' commonLiteral ',' StringLiteral ')' ';'
    ;

changeInstFlowStatement
    : 'ChangeInstFlow' '(' ctrlQuoteDotLiteral ',' ctrlQuoteDotLiteral ',' commonLiteral ')' ';'
    ;

instFlowStatement
    : 'InstFlow' '(' StringLiteral ',' StringLiteral ')' '(' StringLiteral ',' ctrlQuoteLiteral ')' ';'
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
    : (commonLiteral | SqlLiteral) expression (commonLiteral | SqlLiteral)
    | (commonLiteral | SqlLiteral) 
    | '(' expression ')'
    ;

//==============================================================

assign
    : assignStart '=' expression
    ;

assignStart
    : (((ctrlQuoteLiteral | ctrlQuoteLiteral '.' ctrlQuoteLiteral) (',' ctrlQuoteLiteral)*) | ((ctrlQuoteLiteral '.')? ctrlQuoteDotLiteral))
    ;


// composes

ctrlQuoteLiteral
    : '[' StringLiteral ']'
    ;

ctrlQuoteDotLiteral
    : '[' StringLiteral ('.' StringLiteral)? (',' StringLiteral)* ('(' ((Selected '==' (DecimalLiteral | '*' | Natural)) | (StringLiteral '==' commonLiteral)) ')')? ']'
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
    | Natural
    | BooleanLiteral
    | NullLiteral
    | StringLiteral
    ;

//==============================================================

MessageLiteral
    : '\'' ( '警告' | '提示' | '询问') '\''
    ;

HexLiteral
    : '\'' '#' [0-9a-fA-F]* '\''
    ;

StringLiteral
    : '\'' (~[\\\r\n])*? '\''
    ;

BooleanLiteral
    : 'true'
    | 'false'
    ;

NullLiteral
    : 'null'
    | 'NULL'
    ;

DecimalLiteral
    : '-'? Decimal
    ;

ParamLiteral
    : '@' WHITESPACE Natural
    ;

SqlLiteral
    : '[' '#' (~[\\\r\n] | '\'' | SqlLiteral | '[' '$' Constant ']' | '[' '@' WHITESPACE Natural ']')*? '#]'
    ;

Decimal
    : '0' ('.' (DigitChar)* NonZeroDigit)?
    | NonZeroDigit (DigitChar)* ('.' (DigitChar)* NonZeroDigit)?
    ;

NonZeroDigit
    : '1'..'9'
    ;
DigitChar
    : Natural
    | '_'
    ;

UpperCaseChar
    : [A-Z]
    ;

LowerCaseChar
    : [a-z]
    ;

//==============================================================


WS
    : [\t\r\n]+ -> skip 
    ; // skip spaces, newlines

COMMENT
    : '//' ~[\r\n\u2028\u2029]* -> channel(HIDDEN)
    ;

WHITESPACE
    : (' ' | '\r' | '\n' | '\t') -> skip
    ;
