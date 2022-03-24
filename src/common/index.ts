import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { kacoLexer } from '../parser/kacoLexer';
import { kacoParser } from '../parser/kacoParser';

export const createLexer = (input: string) => {
  const chars = CharStreams.fromString(input);

  return new kacoLexer(chars);
};

export const getParser = (input: string) => {
  const lexer = createLexer(input);
  const tokenStream = new CommonTokenStream(lexer);
  const parser = new kacoParser(tokenStream);
  parser.removeErrorListeners();
  lexer.removeErrorListeners();

  return parser;
};

export const getAST = (input: string) => {
  const parser = getParser(input);
  const ast = parser.program();

  return ast;
};

export const TokenMap: Record<string, string> = {
  // form
  OpenForm: 'keyword',
  SaveForm: 'keyword',
  Close: 'keyword',
  Refresh: 'keyword',
  MessageBox: 'keyword',
  ClickButton: 'keyword',
  GetComboDic: 'keyword',
  QueryData: 'keyword',
  CarryData: 'keyword',
  SQLExecute: 'keyword',
  GetCoder: 'keyword',
  SetCoder: 'keyword',
  ResetCtrlValue: 'keyword',
  SaveLastValue: 'keyword',
  LoadLastValue: 'keyword',
  SetVisiable: 'keyword',
  SetEnable: 'keyword',
  SetFocus: 'keyword',
  SetColor: 'keyword',
  ChangeTab: 'keyword',
  SwitchDisplay: 'keyword',
  StringSub: 'keyword',
  StringLen: 'keyword',
  StringStr: 'keyword',
  StringRep: 'keyword',
  StringCat: 'keyword',
  EncodeBase64: 'keyword',
  DecodeBase64: 'keyword',
  // table
  GetGridRows: 'keyword',
  AddGridRow: 'keyword',
  DelGridRow: 'keyword',
  SelGridRow: 'keyword',
  ExportXls: 'keyword',
  ImportXls: 'keyword',
  // Flow
  FlowTran: 'keyword',
  FlowSave: 'keyword',
  FlowFresh: 'keyword',
  FlowSend : 'keyword',
  FlowBack: 'keyword',
  FlowBack2: 'keyword',
  FlowMend: 'keyword',
  FlowPrint: 'keyword',
  FlowForm: 'keyword',
  FlowQuery: 'keyword',
  TaskHang: 'keyword',
  TaskFree: 'keyword',
  FlowTest: 'keyword',
  FlowDrop: 'keyword',
  FlowClose: 'keyword',
  FlowAgent: 'keyword',
  AgentCancel: 'keyword',
  FlowRefact: 'keyword',
  TestCommit: 'keyword',
  ChangeInstFlow: 'keyword',
  InstFlow: 'keyword',
  TaskDelete: 'keyword',
  TachSend: 'keyword',

  Selected: 'keyword',
  If: 'keyword',
  While: 'keyword',
  Sql: 'keyword',
  Const: 'keyword',
  Constant: 'keyword',

  Assign: 'operator',
  Plus: 'operator',
  Minus: 'operator',
  Multiply: 'operator',
  Divide: 'operator',
  Equal: 'operator',
  NotEqual: 'operator',
  LessThan: 'operator',
  MoreThan: 'operator',
  LessThanEquals: 'operator',
  GreaterThanEquals: 'operator',
  And: 'operator',
  Or: 'operator',

  OpenBracket: 'delimiter.square',
  CloseBracket: 'delimiter.square',
  OpenParen: 'delimiter.parenthesis',
  CloseParen: 'delimiter.parenthesis',
  OpenBrace: 'delimiter.bracket',
  CloseBrace: 'delimiter.bracket',

  Ellipsis: 'delimiter',
  SemiColon: 'delimiter',
  Comma: 'delimiter',
  Dot: 'delimiter',

  BooleanLiteral: 'keyword',
  NullLiteral: 'keyword',

  SINGLE_QUOTE: 'string.quote',
  DOUBLE_QUOTE: 'string.quote',
  REVERSE_QUOTE: 'string.quote',

  StringLiteral: 'string',
  StringDotLiteral: 'string',

  ParamLiteral: 'number',
  QuoteLiteral: 'number',
  DecimalLiteral: 'number',
  Natural: 'number',
  MessageLiteral: 'number',
  BooleanNumberLiteral: 'number',
  HexLiteral: 'number.hex',

  SqlLiteral: 'type',

  COMMENT: 'comment',

  UnexpectedCharacter: 'invalid'
};
