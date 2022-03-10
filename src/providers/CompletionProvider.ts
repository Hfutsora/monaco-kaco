import * as monaco from 'monaco-editor';

export class CompletionItemProvider implements monaco.languages.CompletionItemProvider {
  provideCompletionItems(model: monaco.editor.IModel, position: monaco.Position) {
    const word = model.getWordAtPosition(position);

    return {
      suggestions: [{
        label: 'OpenForm',
        kind: monaco.languages.CompletionItemKind.Function,
        insertText: 'OpenForm[\'\']()()();',
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        detail: '打开表单',
        range: new monaco.Range(
          position.lineNumber,
          word?.startColumn ?? position.column,
          model.getLineCount(),
          model.getLineMaxColumn(model.getLineCount())
        )
      }]
    };
  }
}
