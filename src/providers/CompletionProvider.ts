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
          insertText: 'SaveForm($1);',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          detail: '保存表单',
          range
        }, {
          label: 'Close',
          kind: monaco.languages.CompletionItemKind.Function,
          insertText: 'Close($1);',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          detail: '关闭表单',
          range
        }, {
          label: 'Refresh',
          kind: monaco.languages.CompletionItemKind.Function,
          insertText: 'Refresh($1);',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          detail: '刷新表单',
          range
        }, {
          label: 'MessageBox',
          kind: monaco.languages.CompletionItemKind.Function,
          insertText: 'MessageBox(\'${1|提示,警告,询问|}\', \'$2\');',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          detail: '信息提示框',
          range
        }, {
          label: 'ClickButton',
          kind: monaco.languages.CompletionItemKind.Function,
          insertText: 'ClickButton([\'$1\']);',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          detail: '按钮事件',
          range
        }, {
          label: 'QueryData',
          kind: monaco.languages.CompletionItemKind.Function,
          insertText: 'QueryData[\'$1\'],[\'$2\']([\'$3\'])($4)($5);',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          detail: '查询数据',
          range
        }, {
          label: 'GetComboDic',
          kind: monaco.languages.CompletionItemKind.Function,
          insertText: 'GetComboDic([\'$1\'], [# $2 #]);',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          detail: '获取字典',
          range
        }, {
          label: 'CarryData',
          kind: monaco.languages.CompletionItemKind.Function,
          insertText: 'CarryData[\'$1\']([\'$2\']);',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          detail: '关联模板赋值',
          range
        }, {
          label: 'SQLExecute',
          kind: monaco.languages.CompletionItemKind.Function,
          insertText: 'SQLExecute([# $1 #]);',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          detail: '执行SQL',
          range
        }, {
          label: 'GetCoder',
          kind: monaco.languages.CompletionItemKind.Function,
          insertText: 'GetCoder([\'$1\'], \'%$2[$3]\');',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          detail: '获取计数器编号',
          range
        }, {
          label: 'SetCoder',
          kind: monaco.languages.CompletionItemKind.Function,
          insertText: 'SetCoder([\'$1\'], \'%$2[$3]\');',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          detail: '回收计数器编号',
          range
        }, {
          label: 'ResetCtrlValue',
          kind: monaco.languages.CompletionItemKind.Function,
          insertText: 'ResetCtrlValue([\'$1\']);',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          detail: '清除控件值',
          range
        }, {
          label: 'SaveLastValue',
          kind: monaco.languages.CompletionItemKind.Function,
          insertText: 'SaveLastValue([\'$1\']);',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          detail: '暂存指定控件值',
          range
        }, {
          label: 'If',
          kind: monaco.languages.CompletionItemKind.Struct,
          insertText: 'if (${1:true}) {\n$2\n}\n',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          detail: '条件',
          range
        }, {
          label: 'Variable',
          kind: monaco.languages.CompletionItemKind.Struct,
          insertText: '[$ ${1|USERID,USERNAME,USERCODE,ORGNAME1,ORGCODE1,INSTANCE,CURTIME,CURROLE,CURFLOW,CURFTASK,CURTACHE,CURSTATE,UPLOADFILE|}]',
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
        }, {
          label: 'Sql',
          kind: monaco.languages.CompletionItemKind.Struct,
          insertText: '[# $1 #]',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          detail: 'sql',
          range
        }
      ]
    };
  }
}
