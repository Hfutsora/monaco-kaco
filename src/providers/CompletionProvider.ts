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
          insertText: 'OpenForm[\'$1\']($2)($3)($4);',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          detail: '打开表单',
          range
        }, {
          label: 'SaveForm',
          kind: monaco.languages.CompletionItemKind.Function,
          insertText: 'SaveForm($0);',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          detail: '保存表单',
          range
        }, {
          label: 'If',
          kind: monaco.languages.CompletionItemKind.Struct,
          insertText: 'if (${1:true}) {\n$0\n}\n',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          detail: '条件',
          range
        }, {
          label: 'Variable',
          kind: monaco.languages.CompletionItemKind.Struct,
          insertText: '[$ ${1|USERID,USERNAME,USERCODE,ORGNAME1,ORGCODE1,INSTANCE,CURTIME,CURROLE,CURFLOW,CURFTASK,CURTACHE,CURSTATE,UPLOADFILE|}]$0',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          detail: '系统变量',
          range
        }, {
          label: 'Assign',
          kind: monaco.languages.CompletionItemKind.Struct,
          insertText: '[\'$1\'] = ${2:\'\'};',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          detail: '赋值',
          range
        }
      ]
    };
  }
}
