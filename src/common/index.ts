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
  OpenForm: 'keyword',

  Assign: 'operator',

  OpenBracket: 'delimiter.square',
  CloseBracket: 'delimiter.square',
  OpenParen: 'delimiter.parenthesis',
  CloseParen: 'delimiter.parenthesis',

  Ellipsis: 'delimiter',
  SemiColon: 'delimiter',
  Comma: 'delimiter',
  Dot: 'delimiter',

  BooleanLiteral: 'keyword',

  SINGLE_QUOTE: 'string.quote',
  DOUBLE_QUOTE: 'string.quote',
  REVERSE_QUOTE: 'string.quote',

  StringLiteral: 'string',
  StringDotLiteral: 'string',

  DecimalLiteral: 'number',

  Comment: 'comment',

  UnexpectedCharacter: 'invalid'
};
