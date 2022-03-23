import * as monaco from 'monaco-editor';
import { CompletionItemProvider } from './CompletionProvider';
import { HoverProvider } from './HoverProvider';
import { Linter } from './Linter';
import { TokensProviders } from './TokenProvider';

const disposeAll = (disposables: monaco.IDisposable[]) => {
  disposables.forEach(item => item.dispose());
};

const registerDispose = (disposables: monaco.IDisposable[]) => ({
  dispose: () => disposeAll(disposables)
});

export const registerProvier = (id: string) => {
  monaco.languages.register({ id: 'kaco' });
  monaco.languages.setLanguageConfiguration('kaco', {
    brackets: [
      ['[', ']'],
      ['(', ')'],
      ['{', '}'],
      ['"', '"'],
      ['\'', '\'']
    ],
    surroundingPairs: [
      { open: '[', close: ']' },
      { open: '(', close: ')' },
      { open: '{', close: '}' },
      { open: '"', close: '"' },
      { open: '\'', close: '\'' }
    ]
  });

  monaco.languages.registerDocumentFormattingEditProvider('kaco', { // TODO:
    provideDocumentFormattingEdits(model, option, token) {
      const result: monaco.languages.TextEdit[] = [];

      return result;
    }
  });

  const disposables: monaco.IDisposable[] = [];

  disposables.push(monaco.languages.setTokensProvider(id, new TokensProviders()));
  disposables.push(monaco.languages.registerHoverProvider(id, HoverProvider));
  disposables.push(monaco.languages.registerCompletionItemProvider(id, new CompletionItemProvider()));
  disposables.push(new Linter(id));

  return registerDispose(disposables);
};
