import { Token } from 'antlr4ts';
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker';
import { range } from 'lodash-es';
import * as monaco from 'monaco-editor';
import { getAST } from '../common';
import { kacoListener } from '../parser/kacoListener';
import { ProgramContext } from '../parser/kacoParser';

export const HoverProvider = {
  provideHover(model: monaco.editor.IModel, position: monaco.Position) {
    const content = model.getValue();
    const AST = getAST(content || '');
    const finder = new HoverFinder(position);
    ParseTreeWalker.DEFAULT.walk(finder, AST); // 遍历AST
    const { result } = finder;
    const type = result?.type as typeof kacoKeywords[number];

    if (result && type && schema[type]) {
      return {
        contents: schema[type],
        range: result.range
      };
    }

    const word = model.getWordAtPosition(position)?.word;

    return word ? {
      contents: [{
        value: word
      }]
    } : undefined;
  }
};

const getRangeFromToken = (input: Token) => {
  const startLineNumber = input.line;
  const startColumn = input.charPositionInLine + 1;
  const length = input.text?.length || 1;

  return new monaco.Range(startLineNumber, startColumn, startLineNumber, startColumn + length);
};

function findMatch(ctx: ProgramContext, position: monaco.Position): undefined | { ctx: ProgramContext, range: monaco.Range }  {
  if (!ctx.start) return;

  const range =  getRangeFromToken(ctx.start);

  if (monaco.Range.containsPosition(range, position)) {
    return {
      ctx,
      range
    };
  } else if (ctx.children?.length) {
    for (const child of ctx.children) {
      const match = findMatch(child as ProgramContext, position);

      if (match) return match;
    }
  }

  return;
}

class HoverFinder implements kacoListener {
  result?: {
    range: monaco.Range;
    type: string;
    name?: string;
  };
  private position: monaco.Position;
  constructor(position: monaco.Position) {
    this.position = position;
  }

  enterProgram(context: ProgramContext) {
    if (!this.result) {
      const match = findMatch(context, this.position);

      if (match && match?.ctx.start.text) {
        this.result = {
          range: match.range,
          type: match.ctx.start.text,
          name: match.ctx.start.text
        };
      }
    }
  }

  visitErrorNode() { /** pass */ }
}

export const kacoKeywords = [
  'OpenForm',
  'SaveForm',
  'Close',
  'Refresh',
  'MessageBox',
  'ClickButton',
  'GetComboDic',
  'QueryData',
  'CarryData',
  'SQLExecute',
  'GetCoder',
  'SetCoder',
  'ResetCtrlValue',
  'SaveLastValue',
  'LoadLastValue',
  'SetVisiable',
  'SetEnable',
  'SetFocus',
  'SetColor',
  'ChangeTab',
  'SwitchDisplay',
  'StringSub',
  'StringLen',
  'StringStr',
  'StringRep',
  'StringCat',
  'EncodeBase64',
  'DecodeBase64',
  'GetGridRows',
  'AddGridRow',
  'DelGridRow',
  'SelGridRow',
  'While',
  'ExportXls',
  'ImportXls',
  'FlowTran',
  'FlowSave',
  'FlowFresh',
  'FlowSend',
  'FlowBack'
] as const;

const schema: Record<typeof kacoKeywords[number], monaco.IMarkdownString[]> = {
  OpenForm: [
    { value: '```\nOpenForm[\'表单名称\'](主键)(...黙认值主键)(...参数)\n```' },
    { value: '打开表单' },
    { value: '```\n示例\nOpenForm[\'基本信息\']([\'受理号\'])()([\'姓名\'])\n```' }
  ],
  SaveForm: [
    { value: '```\nSaveForm(主键)\n```' },
    { value: '保存表单' },
    { value: '```\n有主键时，根据主键值保存表单数据\n无主键时，以当前模型表单保存数据，不会提示"保存成功"\n```' },
    { value: '```\n示例\nSaveForm[\'基本信息\']\n```' }
  ],
  Close: [
    { value: '```\nClose(\'表单名\')\n```' },
    { value: '关闭表单' },
    { value: '```\n关闭指定的表单申请表，没有参数时默认关闭当前表单\n```' }
  ],
  Refresh: [
    { value: '```\nRefresh(\'表单名\')\n```' },
    { value: '刷新表单' },
    { value: '```\n刷新指定表单，没有参数时默认刷新当前表单\n```' }
  ],
  MessageBox: [
    { value: '```\nMessageBox(\'信息类型\', \'信息内容\')\n```' },
    { value: '弹出信息提示框' },
    {
      value: '```\n\
\'提示\': 继续执行后续事件\n\
\'警告\': 不执行后续事件\n\
\'询问\': "确定" 继续执行后续事件，"取消" 则中断\n```'
    },
    { value: '```\n示例\nMessageBox(\'警告\',\'该调查表已使用!\'); // 弹出警告提示框，警告该调查表已使用\n```' }
  ],
  ClickButton: [
    { value: '```\nClickButton([\'按钮名\'])\n```' },
    { value: '执行按钮事件' },
    { value: '```\n仅支持当前表单按钮调用，不能跨表单调用\n```' }
  ],
  GetComboDic: [
    { value: '```\nGetComboDic([\'下拉框控件名称\'],[# \'select field1,field2 from table where...\'])\n```' },
    { value: '获取动态字典值' },
    { value: '需要在数字字典中配置各项字典值' },
    { value: '```\n示例\nGetComboDic([\'区\'],[# \'select sd_keyno,sd_value from oa2_sysdic where sd_main<>0\'])\n```' }
  ],
  QueryData: [
    { value: '```\nQueryData[\'查询模板名称\'],[\'表格控件名称\'](...参数)(返回行数)(起始位置)\n```' },
    { value: '按查询模板查询数据，并填充至指定的表格控件' },
    { value: '查询数据给表格控件，一般不在指令中设置返回行数与起始位置，省略时表格控件中设置的参数生效' },
    { value: '```\n示例\nQueryData[\'收件单查询\'],[\'结果列表\']([\'受理编号\'],[\'权利人\'])(100)(0)\n```' }
  ],
  CarryData: [
    { value: '```\nCarryData[\'数据关联模板名称\'](源数据对象主键)\n```' },
    { value: '按数据关联模板中映射关系将数据从源对象赋值给目标对象' },
    { value: '\n- 源对象类型是数据模型，目标对象类型是数据模型或者表单模板\n - 关联模板中未设置映射关系，按编号进行映射' },
    { value: '```\n示例\nCarryData[\'国有档案录入数据关联\']([\'受理号\'])\n```' }
  ],
  SQLExecute: [
    { value: '```\nSQLExecute([# SQL语句 #])\n```' },
    { value: 'SQL语句一般是delete 、insert into 、update 等没有数据返回的SQL' },
    { value: '```\n示例\nSQLExecute([# update d_rec set state = 0 where slid =[$ INSTANCE] #])\n```' }
  ],
  GetCoder: [
    { value: '```\nGetCoder([\'控件名称\'],编号规则,是否跳号)\n```' },
    { value: '获取计数器编号' },
    { value: '\n- 编号规则：支持字符常量、年(%4Y)、月(%2M)、日(%2D)\n - 是否跳号：0或者空表示不跳号，编号未使用，下次获取还是此编号，1代表跳号，编号有没有使用，下次获取都是新编号' },
    { value: '```\n示例\nGetCoder([\'受理号\'],\'%11[1001]\')\n```' }
  ],
  SetCoder: [
    { value: '```\nSetCoder([\'控件名称\'],编号规则,是否跳号)\n```' },
    { value: '回收计数器编号' },
    { value: '\n- 编号规则：支持字符常量、年(%4Y)、月(%2M)、日(%2D)\n - 是否跳号：0或者空表示不跳号，编号未使用，下次获取还是此编号，1代表跳号，编号有没有使用，下次获取都是新编号' },
    { value: '```\n示例\nSetCoder([\'受理号\'],\'%11[1001]\')\n```' }
  ],
  ResetCtrlValue: [
    { value: '```\nResetCtrlValue(...[\'控件名称\'])\n```' },
    { value: '清除指定控件的值' }
  ],
  SaveLastValue: [
    { value: '```\nSaveLastValue(...[\'控件名称\'])\n```' },
    { value: '暂存指定控件的值' },
    { value: '暂存的值通过 LoadLastValue 获取' }
  ],
  LoadLastValue: [
    { value: '```\nLoadLastValue(...[\'控件名称\'])\n```' },
    { value: '加载指定控件暂存的值' }
  ],
  SetVisiable: [
    { value: '```\nSetVisiable([\'控件名称\'], 是否可见)\n```' },
    { value: '设置控件是否可见' },
    { value: '是否可见：`0` 为不可见，`1` 为可见' },
    { value: '```\n示例\nSetVisiable([\'Button\'], 1)\n```' }
  ],
  SetEnable: [
    { value: '```\nSetEnable([\'控件名称\'], 是否可用)\n```' },
    { value: '设置控件是否可用' },
    { value: '是否可用：`0` 为不可用，`1` 为可用' },
    { value: '```\n示例\nSetEnable([\'Button\'], 1)\n```' }
  ],
  SetFocus: [
    { value: '```\nSetFocus([\'控件名称\'])\n```' },
    { value: '将焦点设置在指定控件上' },
    { value: '```\n示例\nSetFocus([\'Input\'])\n```' }
  ],
  SetColor: [
    { value: '```\nSetColor([\'控件名称\'], \'字体颜色\')\n```' },
    { value: '设置指定控件的字体颜色' },
    { value: '```\n示例\nSetColor([\'Input\'], \'#ffffff\')\n```' }
  ],
  ChangeTab: [
    { value: '```\nChangeTab([\'控件名称\'], 页编号)\n```' },
    { value: '切换标签页控件至指定页' },
    { value: '```\n示例\nChangeTab([\'tab-1\'], 1)\n```' }
  ],
  SwitchDisplay: [
    { value: '```\nSwitchDisplay(...[\'控件名称\'])\n```' },
    { value: '切换显示控件' },
    { value: '```\n示例\nSwitchDisplay([\'控件1\'],[\'控件2\'],[\'控件3\'],[\'控件4\'])\n```' }
  ],
  StringSub: [
    { value: '```\nStringSub[\'控件名称\'](字符串, 起始位置, 截取长度)\n```' },
    { value: '截取字符串指定位置, 并将结果赋值给控件' },
    { value: '```\n示例\nStringSub[\'A\'] ([\'B\'], 1, 3)\n```' }
  ],
  StringLen: [
    { value: '```\nStringLen[\'控件名称\'](字符串)\n```' },
    { value: '计算字符串长度，并将结果赋值给控件' },
    { value: '```\n示例\nStringLen[\'A\']([\'B\']);\nStringLen[\'A\'](\'一段字符串文本\');\n```' }
  ],
  StringStr: [
    { value: '```\nStringStr[\'控件名称\'](字符串, 关键字)\n```' },
    { value: '查询关键字在字符串第一次出现位置，并将其位置赋值给控件' },
    { value: '```\n示例\nStringStr[\'L\']([\'A\'], \'B\')\n```' }
  ],
  StringRep: [
    { value: '```\nStringRep([\'控件名称\'], 原字符串, 代替字符串)\n```' },
    { value: '将控件值中的原字符串中替换为代替字符串' },
    { value: '```\n示例\nStringRep([\'L\'], \'旧字符串\', \'新字符串\')\n```' }
  ],
  StringCat: [
    { value: '```\nStringCat([\'控件名称\'], ...字符串)\n```' },
    { value: '拼接字符串至控件' },
    { value: '```\n示例\nStringCat([\'L\'], [\'A\'], [\'B\'], \'拼接字符串\')\n```' }
  ],
  EncodeBase64: [
    { value: '```\nEncodeBase64[\'控件名称\'](数据)\n```' },
    { value: '将数据按Base64编码，并赋值给控件' },
    { value: '```\n示例\nEncodeBase64[\'编码\']([\'证号\'])\n```' }
  ],
  DecodeBase64: [
    { value: '```\nDecodeBase64[\'控件名称\'](数据)\n```' },
    { value: '将数据按Base64解码，并赋值给控件' },
    { value: '```\n示例\nDecodeBase64[\'编码\']([\'证号\'])\n```' }
  ],
  GetGridRows: [
    { value: '```\nGetGridRows ([\'控件名称\'],[\'数据列表名称\'.\'列名\'(条件)])\n```' },
    { value: '获取数据列表的行数' },
    { value: '```\n示例\nGetGridRows([\'行数\'],[\'结果列表\'.\'宗海ID\'(selected == -1)])\n```' }
  ],
  AddGridRow: [
    { value: '```\nAddGridRow([\'数据列表名称\'.\'列名\'], 数据)\n```' },
    { value: '增加列表数据' },
    { value: '```\n示例\nAddGridRow([\'记事列表\'.\'证书记事内容\',\'证书记事日期\'], 100, [$ CURTIME])\n```' }
  ],
  DelGridRow: [
    { value: '```\nDelGridRow([\'数据列表名称\'.\'列名\'(条件)])\n```' },
    { value: '删除数据列表符合条件的数据' },
    { value: '```\n示例\nDelGridRow([\'记事列表\'.\'证书记事日期\'(selected == -1)])\n```' }
  ],
  SelGridRow: [
    { value: '```\nSelGridRow([\'数据列表名称\'.\'列名\'(条件)])\n```' },
    { value: '选中数据列表符合条件的行' },
    { value: '```\n示例\nSelGridRow([\'记事列表\'.\'证书记事日期\'(\'办理状态\' == -1)])\n```' }
  ],
  While: [
    { value: '```\nWhile([\'数据列表名称\'.\'列名\'(条件)])\n```' },
    { value: '循环列表中符合条件的行，并执行循环体中的事件内容' }
  ],
  ExportXls: [
    { value: '```\nExportXls([\'列表名称\'], 参数)\n```' },
    { value: '导出excel' },
    { value: '参数：\n- 空 或 `0`：导出当前页\n- `1`：导出所有数据\n- `2`：导出空表\n- `3`：导出选中行' }
  ],
  ImportXls: [
    { value: '```\nImportXls([\'列表名称\'])\n```' },
    { value: '导入Excel' }
  ],
  FlowTran: [
    { value: '```\nFlowTran([\'流程实例编号\'],[\'流程任务号\'])\n```' },
    { value: '任务办理，任务由未阅状态，转变为已阅状态' },
    { value: '```\n示例\nFlowTran([\'TASKLIST\'.\'FI_INST\'],[\'TASKLIST\'.\'FT_IDENT\'])\n```' }
  ],
  FlowSave: [
    { value: '```\nFlowSave([\'流程实例编号\'])(流程编号)\n```' },
    { value: '保存流程数据，和表单数据' },
    { value: '```\n示例\nFlowSave([\'受理ID\'])(110004)\n```' }
  ],
  FlowFresh: [
    { value: '```\nFlowFresh()\n```' },
    { value: '流程办理时刷新当前显示的表单，用于流程办理工具栏上' }
  ],
  FlowSend: [
    { value: '```\nFlowSend([\'流程实例编号\'],[\'流程任务编号\'])\n```' },
    { value: '流程转发，将流程转发至下一环节' },
    { value: '```\n示例\nFlowSend([\'TASKLIST\'.\'FI_INST\'],[\'TASKLIST\'.\'FT_IDENT\'])\n```' }
  ],
  FlowBack: [
    { value: '```\nFlowBack([\'流程实例编号\'],[\'流程任务编号\'])\n```' },
    { value: '流程退回，退回到上一步办理的人' },
    { value: '```\n示例\nFlowBack([\'TASKLIST\'.\'FI_INST\'],[\'TASKLIST\'.\'FT_IDENT\'])\n```' }
  ]
};
