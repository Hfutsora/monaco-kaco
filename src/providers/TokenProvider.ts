import * as monaco from 'monaco-editor';
import { createLexer, TokenMap } from '../common';

function getTokens(input: string) {
  const lexer = createLexer(input);

  // syntax errors
  const errors: number[] = [];
  lexer.removeErrorListeners();
  lexer.addErrorListener({
    syntaxError(_1, _2, _3, charPositionInLine: number) {
      errors.push(charPositionInLine);
    }
  });

  const tokens = lexer.getAllTokens();

  const res: monaco.languages.IToken[] = tokens.map(token => {
    const type = lexer.ruleNames[token.type - 1];
    const typeName = TokenMap[type] || TokenMap.UnexpectedCharacter;

    return {
      scopes: typeName,
      startIndex: token.charPositionInLine
    };
  });

  // catch errors
  errors.forEach(point => res.push({ scopes: 'error', startIndex: point }));

  return res;
}

function tokenForLine(input: string) {
  const tokens = getTokens(input);

  return { tokens, endState: new State() };
}

class State implements monaco.languages.IState {
  clone(): monaco.languages.IState {
    return new State();
  }
  equals(other: State): boolean {
    return true;
  }
}

export class TokensProviders implements monaco.languages.TokensProvider {
  tokenize(line: string, state: State): monaco.languages.ILineTokens {
    return tokenForLine(line);
  }

  getInitialState(): monaco.languages.IState {
    return new State();
  }
}
