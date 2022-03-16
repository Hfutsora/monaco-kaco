import * as monaco from 'monaco-editor';

export class CompletionItemProvider implements monaco.languages.CompletionItemProvider {
  provideCompletionItems(model: monaco.editor.IModel, position: monaco.Position): monaco.languages.ProviderResult<monaco.languages.CompletionList> {
    const word = model.getWordUntilPosition(position);

    const range = new monaco.Range(
      position.lineNumber,
      word?.startColumn ?? position.column,
      position.lineNumber,
      model.getLineMaxColumn(position.lineNumber)
    );

    return {
      suggestions: [
        {
          label: 'OpenForm',
          kind: monaco.languages.CompletionItemKind.Function,
          insertText: 'OpenForm[\'\']()()();',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          detail: '打开表单',
          range
        }, {
          label: 'SaveForm',
          kind: monaco.languages.CompletionItemKind.Function,
          insertText: 'SaveForm();',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          detail: '保存表单',
          range
        }, {
          label: 'If',
          kind: monaco.languages.CompletionItemKind.Struct,
          insertText: 'if (true) {\n\n}\n',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          detail: '条件',
          range
        }
      ]
    };
  }
}
