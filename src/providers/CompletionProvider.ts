import * as monaco from 'monaco-editor';

export class CompletionItemProvider implements monaco.languages.CompletionItemProvider {
  provideCompletionItems(model: monaco.editor.IModel, position: monaco.Position): monaco.languages.ProviderResult<monaco.languages.CompletionList> {
    const word = model.getWordUntilPosition(position);

    const range = new monaco.Range(
      position.lineNumber,
      word?.startColumn ?? position.column,
      position.lineNumber,
      word?.startColumn ?? position.column // insert into current position
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
          label: 'LoadLastValue',
          kind: monaco.languages.CompletionItemKind.Function,
          insertText: 'LoadLastValue([\'$1\']);',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          detail: '加载指定控件暂存值',
          range
        }, {
          label: 'SetVisiable',
          kind: monaco.languages.CompletionItemKind.Function,
          insertText: 'SetVisiable([\'$1\'], ${2|0,1|});',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          detail: '设置控件是否可见',
          range
        }, {
          label: 'SetEnable',
          kind: monaco.languages.CompletionItemKind.Function,
          insertText: 'SetEnable([\'$1\'], ${2|0,1|});',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          detail: '设置控件是否可用',
          range
        }, {
          label: 'SetFocus',
          kind: monaco.languages.CompletionItemKind.Function,
          insertText: 'SetFocus([\'$1\']);',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          detail: '设置控件焦点',
          range
        }, {
          label: 'SetColor',
          kind: monaco.languages.CompletionItemKind.Function,
          insertText: 'SetColor([\'$1\'], \'${2:#ffffff}\');',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          detail: '设置字体颜色',
          range
        }, {
          label: 'ChangeTab',
          kind: monaco.languages.CompletionItemKind.Function,
          insertText: 'ChangeTab([\'$1\'], ${2:1});',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          detail: '切换标签页',
          range
        }, {
          label: 'SwitchDisplay',
          kind: monaco.languages.CompletionItemKind.Function,
          insertText: 'SwitchDisplay([\'$1\']);',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          detail: '切换显示',
          range
        }, {
          label: 'StringSub',
          kind: monaco.languages.CompletionItemKind.Function,
          insertText: 'StringSub[\'$1\'](${2:[\'\']}, ${3:0}, ${4:0});',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          detail: '截取字符串',
          range
        }, {
          label: 'StringLen',
          kind: monaco.languages.CompletionItemKind.Function,
          insertText: 'StringLen[\'$1\'](${2:[\'\']});',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          detail: '计算字符串长度',
          range
        }, {
          label: 'StringStr',
          kind: monaco.languages.CompletionItemKind.Function,
          insertText: 'StringStr[\'$1\'](${2:[\'\']}, ${3:[\'\']});',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          detail: '查询关键字位置',
          range
        }, {
          label: 'StringRep',
          kind: monaco.languages.CompletionItemKind.Function,
          insertText: 'StringRep([\'$1\'], ${2:[\'\']}, ${3:[\'\']});',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          detail: '替换字符串',
          range
        }, {
          label: 'StringCat',
          kind: monaco.languages.CompletionItemKind.Function,
          insertText: 'StringCat([\'$1\'], ${2:[\'\']});',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          detail: '拼接字符串',
          range
        }, {
          label: 'StringCat',
          kind: monaco.languages.CompletionItemKind.Function,
          insertText: 'StringCat([\'$1\'], ${2:[\'\']});',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          detail: '拼接字符串',
          range
        }, {
          label: 'EncodeBase64',
          kind: monaco.languages.CompletionItemKind.Function,
          insertText: 'EncodeBase64[\'$1\'](${2:[\'\']});',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          detail: 'Base64编码',
          range
        }, {
          label: 'DecodeBase64',
          kind: monaco.languages.CompletionItemKind.Function,
          insertText: 'DecodeBase64[\'$1\'](${2:[\'\']});',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          detail: 'Base64解码',
          range
        }, {
          label: 'GetGridRows',
          kind: monaco.languages.CompletionItemKind.Function,
          insertText: 'GetGridRows([\'$1\'], [\'$2\'.\'$3\'(selected == ${4|*,-1,0,1|})]);',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          detail: '获取数据列表的行数',
          range
        }, {
          label: 'AddGridRow',
          kind: monaco.languages.CompletionItemKind.Function,
          insertText: 'AddGridRow([\'${1:数据列表}\'.\'${2:列名}\'], ${3:数据});',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          detail: '增加列表数据',
          range
        }, {
          label: 'DelGridRow',
          kind: monaco.languages.CompletionItemKind.Function,
          insertText: 'DelGridRow([\'${1:数据列表}\'.\'${2:列名}\'(selected == ${3|*,-1,0,1|})]);',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          detail: '删除列表行',
          range
        }, {
          label: 'SelGridRow',
          kind: monaco.languages.CompletionItemKind.Function,
          insertText: 'SelGridRow([\'${1:数据列表}\'.\'${2:列名}\'(\'${4:条件}\' == ${5:条件值})]);',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          detail: '选中列表行',
          range
        }, {
          label: 'ExportXls',
          kind: monaco.languages.CompletionItemKind.Function,
          insertText: 'ExportXls([\'${1:列表名称}\'], ${2|0,1,2,3|});',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          detail: '导出excel',
          range
        }, {
          label: 'ImportXls',
          kind: monaco.languages.CompletionItemKind.Function,
          insertText: 'ImportXls([\'${1:列表名称}\']);',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          detail: '导入excel',
          range
        }, {
          label: 'FlowTran',
          kind: monaco.languages.CompletionItemKind.Function,
          insertText: 'FlowTran([\'${1:流程实例编号}\'],[\'${2:流程任务号}\']);',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          detail: '任务办理',
          range
        }, {
          label: 'FlowSave',
          kind: monaco.languages.CompletionItemKind.Function,
          insertText: 'FlowSave([\'${1:流程实例编号}\'])(${2:流程编号});',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          detail: '保存流程数据',
          range
        }, {
          label: 'FlowFresh',
          kind: monaco.languages.CompletionItemKind.Function,
          insertText: 'FlowFresh();',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          detail: '流程刷新',
          range
        }, {
          label: 'FlowSend',
          kind: monaco.languages.CompletionItemKind.Function,
          insertText: 'FlowSend([\'${1:流程实例编号}\'],[\'${2:流程任务编号}\']);',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          detail: '流程转发',
          range
        }, {
          label: 'FlowBack',
          kind: monaco.languages.CompletionItemKind.Function,
          insertText: 'FlowBack([\'${1:流程实例编号}\'],[\'${2:流程任务编号}\']);',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          detail: '流程退回',
          range
        }, {
          label: 'FlowBack2',
          kind: monaco.languages.CompletionItemKind.Function,
          insertText: 'FlowBack2([\'${1:流程实例编号}\'],[\'${2:流程任务编号}\']);',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          detail: '流程退回2',
          range
        }, {
          label: 'FlowMend',
          kind: monaco.languages.CompletionItemKind.Function,
          insertText: 'FlowMend([\'${1:流程实例编号}\'],[\'${2:流程任务编号}\']);',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          detail: '流程补办',
          range
        }, {
          label: 'FlowPrint',
          kind: monaco.languages.CompletionItemKind.Function,
          insertText: 'FlowPrint();',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          detail: '流程打印',
          range
        }, {
          label: 'FlowForm',
          kind: monaco.languages.CompletionItemKind.Function,
          insertText: 'FlowForm([\'${1:流程实例编号}\']);',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          detail: '查看业务表单',
          range
        }, {
          label: 'FlowQuery',
          kind: monaco.languages.CompletionItemKind.Function,
          insertText: 'FlowQuery([\'${1:流程实例编号}\']);',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          detail: '查看流程图',
          range
        }, {
          label: 'TaskHang',
          kind: monaco.languages.CompletionItemKind.Function,
          insertText: 'TaskHang([\'${1:流程实例编号}\'],[\'${2:流程任务编号}\']);',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          detail: '业务挂起',
          range
        }, {
          label: 'TaskFree',
          kind: monaco.languages.CompletionItemKind.Function,
          insertText: 'TaskFree([\'${1:流程实例编号}\'],[\'${2:流程任务编号}\']);',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          detail: '解除挂起',
          range
        }, {
          label: 'FlowTest',
          kind: monaco.languages.CompletionItemKind.Function,
          insertText: 'FlowTest();',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          detail: '启动流程',
          range
        }, {
          label: 'FlowDrop',
          kind: monaco.languages.CompletionItemKind.Function,
          insertText: 'FlowDrop([\'${1:流程实例编号}\']);',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          detail: '删除流程数据',
          range
        }, {
          label: 'FlowClose',
          kind: monaco.languages.CompletionItemKind.Function,
          insertText: 'FlowClose();',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          detail: '关闭流程',
          range
        }, {
          label: 'FlowAgent',
          kind: monaco.languages.CompletionItemKind.Function,
          insertText: 'FlowAgent(${1:被代理人}, ${2:代理人}, ${3:代理流程-节点控件编号}, ${4:开始时间}, ${5:结束时间}, ${6:事由});',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          detail: '流程代理',
          range
        }, {
          label: 'While',
          kind: monaco.languages.CompletionItemKind.Function,
          insertText: 'While ([\'${1:数据列表}\'.\'${2:列名}\'(selected == ${3|*,-1,0,1|})]) {\n$4\n}\n',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          detail: '循环',
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
        }, {
          label: 'Select',
          kind: monaco.languages.CompletionItemKind.Struct,
          insertText: '[\'${1:列表名}\'.\'${2:列名}\'(selected == ${3|*,-1,0,1|})]',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          detail: 'sql',
          range
        }
      ]
    };
  }
}
