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
    : O P E N F O R M
    ;

SaveForm
    : S A V E F O R M
    ;

Close
    : C L O S E
    ;

Refresh
    : R E F R E S H
    ;

MessageBox
    : M E S S A G E B O X
    ;

ClickButton
    : C L I C K B U T T O N
    ;

GetComboDic
    : G E T C O M B O D I C
    ;

QueryData
    : Q U E R Y D A T A
    ;

CarryData
    : C A R R Y D A T A
    ;

SQLExecute
    : S Q L E X E C U T E
    ;

GetCoder
    : G E T C O D E R
    ;

SetCoder
    : S E T C O D E R
    ;

ResetCtrlValue
    : R E S E T C T R L V A L U E
    ;

SaveLastValue
    : S A V E L A S T V A L U E
    ;

LoadLastValue
    : L O A D L A S T V A L U E
    ;

SetVisiable
    : S E T V I S I A B L E
    ;

SetEnable
    : S E T E N A B L E
    ;

SetFocus
    : S E T F O C U S
    ;

SetColor
    : S E T C O L O R
    ;

ChangeTab
    : C H A N G E T A B
    ;

SwitchDisplay
    : S W I T C H D I S P L A Y
    ;

StringSub
    : S T R I N G S U B
    ;

StringLen
    : S T R I N G L E N
    ;

StringStr
    : S T R I N G S T R
    ;

StringRep
    : S T R I N G R E P
    ;

StringCat
    : S T R I N G C A T
    ;

EncodeBase64
    : E N C O D E B A S E '64'
    ;

DecodeBase64
    : D E C O D E B A S E '64'
    ;

GetGridRows
    : G E T G R I D R O W S
    ;

AddGridRow
    : A D D G R I D R O W
    ;

DelGridRow
    : D E L G R I D R O W
    ;

SelGridRow
    : S E L G R I D R O W
    ;

ExportXls
    : E X P O R T X L S
    ;

ImportXls
    : I M P O R T X L S
    ;

FlowTran
    : F L O W T R A N
    ;

FlowSave
    : F L O W S A V E
    ;

FlowFresh
    : F L O W F R E S H
    ;

FlowSend
    : F L O W S E N D
    ;

FlowBack
    : F L O W B A C K
    ;

FlowBack2
    : F L O W B A C K '2'
    ;

FlowMend
    : F L O W M E N D
    ;

FlowPrint
    : F L O W P R I N T
    ;

FlowForm
    : F L O W F O R M
    ;

FlowQuery
    : F L O W Q U E R Y
    ;

TaskHang
    : T A S K H A N G
    ;

TaskFree
    : T A S K F R E E
    ;

FlowTest
    : F L O W T E S T
    ;

FlowDrop
    : F L O W D R O P
    ;

FlowClose
    : F L O W C L O S E
    ;

FlowAgent
    : F L O W A G E N T
    ;

AgentCancel
    : A G E N T C A N C E L
    ;

FlowRefact
    : F L O W R E F A C T
    ;

TestCommit
    : T E S T C O M M I T
    ;

ChangeInstFlow
    : C H A N G E I N S T F L O W
    ;

InstFlow
    : I N S T F L O W
    ;

TaskDelete
    : T A S K D E L E T E
    ;

TachSend
    : T A C H S E N D
    ;

CommWord
    : C O M M W O R D
    ;

ExecFunc
    : E X E C F U N C
    ;

CmdBreak
    : C M D B R E A K
    ;

OpenUrl
    : O P E N U R L
    ;

OpenLayout
    : O P E N L A Y O U T
    ;

Print
    : P R I N T
    ;

RegeSign
    : R E G E S I G N
    ;

RsetPswdSign
    : R S E T P S W D S I G N
    ;

Selected
    : S E L E C T E D
    ;

If
    : I F
    ;

While
    : W H I L E
    ;

Constant
    : U S E R I D
    | U S E R N A M E
    | U S E R C O D E
    | O R G N A M E '1'
    | O R G C O D E '1'
    | I N S T A N C E
    | C U R T I M E
    | C U R R O L E
    | C U R F L O W
    | C U R F T A S K
    | C U R T A C H E
    | C U R S T A T E
    | U P L O A D F I L E
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
    | taskDeleteStatement
    | tachSendStatement
    | commWordStatement
    | execFuncStatement
    | cmdBreakStatement
    | openUrlStatement
    | openLayoutStatement
    | printStatement
    | regeSignStatement
    | rsetPswdSignStatement
    | assignStatement
    | extendStatement
    ;

ifStatement
    : If '(' expressionSequence ')' blockStatement
    ;

whileStatement
    : While '(' ctrlQuoteDotLiteral ')' blockStatement
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

QueryDataMarke
    : 'POSITIONMARKE'
    ;

queryDataQuoteEllipsisExpr
    : '(' ((commonLiteral | QueryDataMarke) (',' (commonLiteral | QueryDataMarke))* )? ')'
    ;

Natural
    : '0'
    | [1-9][0-9]*
    ;

quoteNaturalExpr
    : '(' Natural? ')'
    ;

openFormStatement
    : OpenForm '[' (StringLiteral | DecimalLiteral | Natural) ']' quoteEllipsisExpr? quoteEllipsisExpr? quoteEllipsisExpr? ';'
    ;

saveFormStatement
    : SaveForm quoteEllipsisExpr ';'
    ;

closeStatement
    : Close '(' StringLiteral? ')' ';'
    ;

refreshStatement
    : Refresh '(' StringLiteral? ')' ';'
    ;

messageStatement
    : MessageBox '(' MessageLiteral ',' StringLiteral ')' ';'
    ;

clickButtonStatement
    : ClickButton '(' ctrlQuoteLiteral ')' ';'
    ;

getComboDicStatement
    : GetComboDic '(' ctrlQuoteLiteral ',' SqlLiteral ')' ';'
    ;

queryDataStatement
    : QueryData ctrlQuoteLiteral ',' ctrlQuoteLiteral queryDataQuoteEllipsisExpr? quoteNaturalExpr? quoteNaturalExpr? ';'
    ;

carryDataStatement
    : CarryData ctrlQuoteLiteral ('(' ctrlQuoteLiteral? ')')? ';'
    ;

sqlExecuteStatement
    : SQLExecute '(' SqlLiteral? ')' ';'
    ;

getCoderStatement
    : GetCoder '(' (ctrlQuoteLiteral ',' StringLiteral)? ')' ';'
    ;

setCoderStatement
    : SetCoder '(' (ctrlQuoteLiteral ',' StringLiteral)? ')' ';'
    ;

resetCtrlValueStatement
    : ResetCtrlValue quoteEllipsisExpr ';'
    ;

saveLastValueStatement
    : SaveLastValue quoteEllipsisExpr ';'
    ;

loadLastValueStatement
    : LoadLastValue quoteEllipsisExpr ';'
    ;

setVisiableStatement
    : SetVisiable '(' ctrlQuoteLiteral ','  Natural ')' ';'
    ;

setEnableStatement
    : SetEnable '(' ctrlQuoteLiteral ','  Natural ')' ';'
    ;

setFocusStatement
    : SetFocus '(' ctrlQuoteLiteral ')' ';'
    ;

setColorStatement
    : SetColor '(' ctrlQuoteLiteral ',' (HexLiteral | StringLiteral) ')' ';'
    ;

changeTabStatement
    : ChangeTab '(' ctrlQuoteLiteral ',' Natural ')' ';'
    ;

switchDisplayStatement
    : SwitchDisplay quoteEllipsisExpr ';'
    ;

stringSubStatement
    : StringSub ctrlQuoteLiteral '(' (ctrlQuoteLiteral | StringLiteral) ',' Natural ',' Natural ')' ';'
    ;

stringLenStatement
    : StringLen ctrlQuoteLiteral '(' (ctrlQuoteLiteral | StringLiteral) ')' ';'
    ;

stringStrStatement
    : StringStr ctrlQuoteLiteral '(' (StringLiteral | ctrlQuoteLiteral) ',' (StringLiteral | ctrlQuoteLiteral) ')' ';'
    ;

stringRepStatement
    : StringRep '(' ctrlQuoteLiteral ',' (StringLiteral | ctrlQuoteLiteral) ',' (StringLiteral | ctrlQuoteLiteral) ')' ';'
    ;

stringCatStatement
    : StringCat '(' ctrlQuoteLiteral (',' (StringLiteral | ctrlQuoteLiteral))+ ')' ';'
    ;

encodeBase64Statement
    : EncodeBase64 ctrlQuoteLiteral '(' (StringLiteral | ctrlQuoteLiteral) ')' ';'
    ;

decodeBase64Statement
    : DecodeBase64 ctrlQuoteLiteral '(' (StringLiteral | ctrlQuoteLiteral) ')' ';'
    ;

getGridRowsStatement
    : GetGridRows '(' ctrlQuoteLiteral ',' ctrlQuoteDotLiteral ')' ';'
    ;

addGridRowStatement
    : AddGridRow '(' ctrlQuoteDotLiteral ((',' ctrlQuoteDotLiteral) | (',' commonLiteral)*) ')' ';'
    ;

delGridRowStatement
    : DelGridRow '(' ctrlQuoteDotLiteral ')' ';'
    ;

selGridRowStatement
    : SelGridRow '(' ctrlQuoteDotLiteral ')' ';'
    ;

exportXlsStatement
    : ExportXls '(' ctrlQuoteLiteral (',' Natural)? ')' ';'
    ;

importXlsStatement
    : ImportXls '(' ctrlQuoteLiteral ')' ';'
    ;

flowTranStatement
    : FlowTran '(' (ctrlQuoteDotLiteral ',' ctrlQuoteDotLiteral)? ')' ';'
    ;

flowSaveStatement
    : FlowSave '(' commonLiteral? (',' commonLiteral)? ')' ';'
    ;

flowFreshStatement
    : FlowFresh '(' ')' ';'
    ;

flowSendStatement
    : FlowSend '(' (ctrlQuoteDotLiteral ',' ctrlQuoteDotLiteral)? ')' ';'
    ;

flowBackStatement
    : FlowBack '(' (ctrlQuoteDotLiteral ',' ctrlQuoteDotLiteral)? ')' ';'
    ;

flowBack2Statement
    : FlowBack2 '(' (ctrlQuoteDotLiteral ',' ctrlQuoteDotLiteral)? ')' ';'
    ;

flowMendStatement
    : FlowMend '(' (ctrlQuoteDotLiteral ',' ctrlQuoteDotLiteral)? ')' ';'
    ;

flowPrintStatement
    : FlowPrint '(' ')' ';'
    ;

flowFormStatement
    : FlowForm '(' ctrlQuoteDotLiteral? ')' ';'
    ;

flowQueryStatement
    : FlowQuery '(' ctrlQuoteDotLiteral? ')' ';'
    ;

taskHangStatement
    : TaskHang '(' (ctrlQuoteDotLiteral ',' ctrlQuoteDotLiteral)? ')' ';'
    ;

taskFreeStatement
    : TaskFree '(' (ctrlQuoteDotLiteral ',' ctrlQuoteDotLiteral)? ')' ';'
    ;

flowTestStatement
    : FlowTest '(' ')' ';'
    ;

flowDropStatement
    : FlowDrop '(' ctrlQuoteDotLiteral? ')' ';'
    ;

flowCloseStatement
    : FlowClose '(' ')' ';'
    ;

flowAgentStatement
    : FlowAgent '(' commonLiteral ',' commonLiteral ',' commonLiteral ',' commonLiteral ',' commonLiteral (',' commonLiteral)? ')' ';'
    ;

agentCancelStatement
    : AgentCancel '(' ctrlQuoteLiteral ')' ';'
    ;

flowRefactStatement
    : FlowRefact '(' ctrlQuoteDotLiteral ',' Natural ')' ';'
    ;

testCommitStatement
    : TestCommit '(' commonLiteral ',' StringLiteral ')' ';'
    ;

changeInstFlowStatement
    : ChangeInstFlow '(' ctrlQuoteDotLiteral ',' ctrlQuoteDotLiteral ',' commonLiteral ')' ';'
    ;

instFlowStatement
    : InstFlow '(' StringLiteral ',' StringLiteral ')' '(' StringLiteral ',' ctrlQuoteLiteral ')' ';'
    ;

taskDeleteStatement
    : TaskDelete '(' commonLiteral ',' commonLiteral ')' ';'
    ;

tachSendStatement
    : TachSend '(' (commonLiteral ',' commonLiteral)? ')' ';'
    ;

commWordStatement
    : CommWord '(' ')' ';'
    ;

execFuncStatement
    : ExecFunc ctrlQuoteLiteral '(' commonLiteral ')' ('(' commonLiteral? (',' commonLiteral)* ')')? ';'
    ;

cmdBreakStatement
    : CmdBreak '(' ')' ';'
    ;

openUrlStatement
    : OpenUrl '(' (StringLiteral ',')? expression ')' ';' 
    ;

openLayoutStatement
    : OpenLayout ctrlQuoteLiteral ';'
    ;

printStatement
    : Print ctrlQuoteLiteral quoteEllipsisExpr ('(' PrintLiteral ')')? ';'
    ;

regeSignStatement
    : RegeSign '(' commonLiteral ')' ';'
    ;

rsetPswdSignStatement
    : RsetPswdSign '(' commonLiteral ',' StringLiteral ')' ';'
    ;

extendStatement
    : Extend '(' (commonLiteral (',' commonLiteral)*)? ')' ';'
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
    | negationExpr
    | BooleanLiteral
    | NullLiteral
    | StringLiteral
    ;

//==============================================================

MessageLiteral
    : '\'' ( '警告' | '提示' | '询问') '\''
    ;

PrintLiteral
    : 'TD'
    | 'XD'
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

negationExpr
    : ('-')? (DecimalLiteral | Natural)
    ;

DecimalLiteral
    : Decimal
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

Extend
    : [A-Za-z0-9_]+
    ;

//=============================================================
fragment A : [aA];
fragment B : [bB];
fragment C : [cC];
fragment D : [dD];
fragment E : [eE];
fragment F : [fF];
fragment G : [gG];
fragment H : [hH];
fragment I : [iI];
fragment J : [jJ];
fragment K : [kK];
fragment L : [lL];
fragment M : [mM];
fragment N : [nN];
fragment O : [oO];
fragment P : [pP];
fragment Q : [qQ];
fragment R : [rR];
fragment S : [sS];
fragment T : [tT];
fragment U : [uU];
fragment V : [vV];
fragment W : [wW];
fragment X : [xX];
fragment Y : [yY];
fragment Z : [zZ];
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
