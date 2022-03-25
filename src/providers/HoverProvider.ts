import { Token } from 'antlr4ts';
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker';
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
          type: match.ctx.start.text.toUpperCase(),
          name: match.ctx.start.text
        };
      }
    }
  }

  visitErrorNode() { /** pass */ }
}

export const kacoKeywords = [
  'OPENFORM',
  'SAVEFORM',
  'CLOSE',
  'REFRESH',
  'MESSAGEBOX',
  'CLICKBUTTON',
  'GETCOMBODIC',
  'QUERYDATA',
  'CARRYDATA',
  'SQLEXECUTE',
  'GETCODER',
  'SETCODER',
  'RESETCTRLVALUE',
  'SAVELASTVALUE',
  'LOADLASTVALUE',
  'SETVISIABLE',
  'SETENABLE',
  'SETFOCUS',
  'SETCOLOR',
  'CHANGETAB',
  'SWITCHDISPLAY',
  'STRINGSUB',
  'STRINGLEN',
  'STRINGSTR',
  'STRINGREP',
  'STRINGCAT',
  'ENCODEBASE64',
  'DECODEBASE64',
  'GETGRIDROWS',
  'ADDGRIDROW',
  'DELGRIDROW',
  'SELGRIDROW',
  'WHILE',
  'EXPORTXLS',
  'IMPORTXLS',
  'FLOWTRAN',
  'FLOWSAVE',
  'FLOWFRESH',
  'FLOWSEND',
  'FLOWBACK',
  'FLOWBACK2',
  'FLOWMEND',
  'FLOWPRINT',
  'FLOWFORM',
  'FLOWQUERY',
  'TASKHANG',
  'TASKFREE',
  'FLOWTEST',
  'FLOWDROP',
  'FLOWCLOSE',
  'FLOWAGENT',
  'AGENTCANCEL',
  'FLOWREFACT',
  'TESTCOMMIT',
  'CHANGEINSTFLOW',
  'INSTFLOW',
  'TASKDELETE',
  'TACHSEND',
  'COMMWORD',
  'EXECFUNC',
  'CMDBREAK',
  'OPENURL',
  'OPENLAYOUT',
  'PRINT',
  'REGESIGN',
  'RSETPSWDSIGN'
] as const;

const schema: Record<typeof kacoKeywords[number], monaco.IMarkdownString[]> = {
  OPENFORM: [
    { value: '```\nOpenForm[\'表单名称\'](主键)(...黙认值主键)(...参数)\n```' },
    { value: '打开表单' },
    { value: '```\n示例\nOpenForm[\'基本信息\']([\'受理号\'])()([\'姓名\'])\n```' }
  ],
  SAVEFORM: [
    { value: '```\nSaveForm(主键)\n```' },
    { value: '保存表单' },
    { value: '```\n有主键时，根据主键值保存表单数据\n无主键时，以当前模型表单保存数据，不会提示"保存成功"\n```' },
    { value: '```\n示例\nSaveForm[\'基本信息\']\n```' }
  ],
  CLOSE: [
    { value: '```\nClose(\'表单名\')\n```' },
    { value: '关闭表单' },
    { value: '```\n关闭指定的表单申请表，没有参数时默认关闭当前表单\n```' }
  ],
  REFRESH: [
    { value: '```\nRefresh(\'表单名\')\n```' },
    { value: '刷新表单' },
    { value: '```\n刷新指定表单，没有参数时默认刷新当前表单\n```' }
  ],
  MESSAGEBOX: [
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
  CLICKBUTTON: [
    { value: '```\nClickButton([\'按钮名\'])\n```' },
    { value: '执行按钮事件' },
    { value: '```\n仅支持当前表单按钮调用，不能跨表单调用\n```' }
  ],
  GETCOMBODIC: [
    { value: '```\nGetComboDic([\'下拉框控件名称\'],[# sql语句])\n```' },
    { value: '获取动态字典值' },
    { value: '需要在数字字典中配置各项字典值' },
    { value: '```\n示例\nGetComboDic([\'区\'],[# \'select sd_keyno,sd_value from oa2_sysdic where sd_main<>0\'])\n```' }
  ],
  QUERYDATA: [
    { value: '```\nQueryData[\'查询模板名称\'],[\'表格控件名称\'](...参数)(返回行数)(起始位置)\n```' },
    { value: '按查询模板查询数据，并填充至指定的表格控件' },
    { value: '查询数据给表格控件，一般不在指令中设置返回行数与起始位置，省略时表格控件中设置的参数生效' },
    { value: '```\n示例\nQueryData[\'收件单查询\'],[\'结果列表\']([\'受理编号\'],[\'权利人\'])(100)(0)\n```' }
  ],
  CARRYDATA: [
    { value: '```\nCarryData[\'数据关联模板名称\'](源数据对象主键)\n```' },
    { value: '按数据关联模板中映射关系将数据从源对象赋值给目标对象' },
    { value: '\n- 源对象类型是数据模型，目标对象类型是数据模型或者表单模板\n - 关联模板中未设置映射关系，按编号进行映射' },
    { value: '```\n示例\nCarryData[\'国有档案录入数据关联\']([\'受理号\'])\n```' }
  ],
  SQLEXECUTE: [
    { value: '```\nSQLExecute(SQL语句)\n```' },
    { value: 'SQL语句一般是delete 、insert into 、update 等没有数据返回的SQL' },
    { value: '```\n示例\nSQLExecute(update d_rec set state = 0 where slid =[$ INSTANCE])\n```' }
  ],
  GETCODER: [
    { value: '```\nGetCoder([\'控件名称\'],编号规则,是否跳号)\n```' },
    { value: '获取计数器编号' },
    { value: '\n- 编号规则：支持字符常量、年(%4Y)、月(%2M)、日(%2D)\n - 是否跳号：0或者空表示不跳号，编号未使用，下次获取还是此编号，1代表跳号，编号有没有使用，下次获取都是新编号' },
    { value: '```\n示例\nGetCoder([\'受理号\'],\'%11[1001]\')\n```' }
  ],
  SETCODER: [
    { value: '```\nSetCoder([\'控件名称\'],编号规则,是否跳号)\n```' },
    { value: '回收计数器编号' },
    { value: '\n- 编号规则：支持字符常量、年(%4Y)、月(%2M)、日(%2D)\n - 是否跳号：0或者空表示不跳号，编号未使用，下次获取还是此编号，1代表跳号，编号有没有使用，下次获取都是新编号' },
    { value: '```\n示例\nSetCoder([\'受理号\'],\'%11[1001]\')\n```' }
  ],
  RESETCTRLVALUE: [
    { value: '```\nResetCtrlValue(...[\'控件名称\'])\n```' },
    { value: '清除指定控件的值' }
  ],
  SAVELASTVALUE: [
    { value: '```\nSaveLastValue(...[\'控件名称\'])\n```' },
    { value: '暂存指定控件的值' },
    { value: '暂存的值通过 LoadLastValue 获取' }
  ],
  LOADLASTVALUE: [
    { value: '```\nLoadLastValue(...[\'控件名称\'])\n```' },
    { value: '加载指定控件暂存的值' }
  ],
  SETVISIABLE: [
    { value: '```\nSetVisiable([\'控件名称\'], 是否可见)\n```' },
    { value: '设置控件是否可见' },
    { value: '是否可见：`0` 为不可见，`1` 为可见' },
    { value: '```\n示例\nSetVisiable([\'Button\'], 1)\n```' }
  ],
  SETENABLE: [
    { value: '```\nSetEnable([\'控件名称\'], 是否可用)\n```' },
    { value: '设置控件是否可用' },
    { value: '是否可用：`0` 为不可用，`1` 为可用' },
    { value: '```\n示例\nSetEnable([\'Button\'], 1)\n```' }
  ],
  SETFOCUS: [
    { value: '```\nSetFocus([\'控件名称\'])\n```' },
    { value: '将焦点设置在指定控件上' },
    { value: '```\n示例\nSetFocus([\'Input\'])\n```' }
  ],
  SETCOLOR: [
    { value: '```\nSetColor([\'控件名称\'], \'字体颜色\')\n```' },
    { value: '设置指定控件的字体颜色' },
    { value: '```\n示例\nSetColor([\'Input\'], \'#ffffff\')\n```' }
  ],
  CHANGETAB: [
    { value: '```\nChangeTab([\'控件名称\'], 页编号)\n```' },
    { value: '切换标签页控件至指定页' },
    { value: '```\n示例\nChangeTab([\'tab-1\'], 1)\n```' }
  ],
  SWITCHDISPLAY: [
    { value: '```\nSwitchDisplay(...[\'控件名称\'])\n```' },
    { value: '切换显示控件' },
    { value: '```\n示例\nSwitchDisplay([\'控件1\'],[\'控件2\'],[\'控件3\'],[\'控件4\'])\n```' }
  ],
  STRINGSUB: [
    { value: '```\nStringSub[\'控件名称\'](字符串, 起始位置, 截取长度)\n```' },
    { value: '截取字符串指定位置, 并将结果赋值给控件' },
    { value: '```\n示例\nStringSub[\'A\'] ([\'B\'], 1, 3)\n```' }
  ],
  STRINGLEN: [
    { value: '```\nStringLen[\'控件名称\'](字符串)\n```' },
    { value: '计算字符串长度，并将结果赋值给控件' },
    { value: '```\n示例\nStringLen[\'A\']([\'B\']);\nStringLen[\'A\'](\'一段字符串文本\');\n```' }
  ],
  STRINGSTR: [
    { value: '```\nStringStr[\'控件名称\'](字符串, 关键字)\n```' },
    { value: '查询关键字在字符串第一次出现位置，并将其位置赋值给控件' },
    { value: '```\n示例\nStringStr[\'L\']([\'A\'], \'B\')\n```' }
  ],
  STRINGREP: [
    { value: '```\nStringRep([\'控件名称\'], 原字符串, 代替字符串)\n```' },
    { value: '将控件值中的原字符串中替换为代替字符串' },
    { value: '```\n示例\nStringRep([\'L\'], \'旧字符串\', \'新字符串\')\n```' }
  ],
  STRINGCAT: [
    { value: '```\nStringCat([\'控件名称\'], ...字符串)\n```' },
    { value: '拼接字符串至控件' },
    { value: '```\n示例\nStringCat([\'L\'], [\'A\'], [\'B\'], \'拼接字符串\')\n```' }
  ],
  ENCODEBASE64: [
    { value: '```\nEncodeBase64[\'控件名称\'](数据)\n```' },
    { value: '将数据按Base64编码，并赋值给控件' },
    { value: '```\n示例\nEncodeBase64[\'编码\']([\'证号\'])\n```' }
  ],
  DECODEBASE64: [
    { value: '```\nDecodeBase64[\'控件名称\'](数据)\n```' },
    { value: '将数据按Base64解码，并赋值给控件' },
    { value: '```\n示例\nDecodeBase64[\'编码\']([\'证号\'])\n```' }
  ],
  GETGRIDROWS: [
    { value: '```\nGetGridRows ([\'控件名称\'],[\'数据列表名称\'.\'列名\'(条件)])\n```' },
    { value: '获取数据列表的行数' },
    { value: '```\n示例\nGetGridRows([\'行数\'],[\'结果列表\'.\'宗海ID\'(selected == -1)])\n```' }
  ],
  ADDGRIDROW: [
    { value: '```\nAddGridRow([\'数据列表名称\'.\'列名\'], 数据)\n```' },
    { value: '增加列表数据' },
    { value: '```\n示例\nAddGridRow([\'记事列表\'.\'证书记事内容\',\'证书记事日期\'], 100, [$ CURTIME])\n```' }
  ],
  DELGRIDROW: [
    { value: '```\nDelGridRow([\'数据列表名称\'.\'列名\'(条件)])\n```' },
    { value: '删除数据列表符合条件的数据' },
    { value: '```\n示例\nDelGridRow([\'记事列表\'.\'证书记事日期\'(selected == -1)])\n```' }
  ],
  SELGRIDROW: [
    { value: '```\nSelGridRow([\'数据列表名称\'.\'列名\'(条件)])\n```' },
    { value: '选中数据列表符合条件的行' },
    { value: '```\n示例\nSelGridRow([\'记事列表\'.\'证书记事日期\'(\'办理状态\' == -1)])\n```' }
  ],
  WHILE: [
    { value: '```\nWhile([\'数据列表名称\'.\'列名\'(条件)])\n```' },
    { value: '循环列表中符合条件的行，并执行循环体中的事件内容' }
  ],
  EXPORTXLS: [
    { value: '```\nExportXls([\'列表名称\'], 参数)\n```' },
    { value: '导出excel' },
    { value: '参数：\n- 空 或 `0`：导出当前页\n- `1`：导出所有数据\n- `2`：导出空表\n- `3`：导出选中行' }
  ],
  IMPORTXLS: [
    { value: '```\nImportXls([\'列表名称\'])\n```' },
    { value: '导入Excel' }
  ],
  FLOWTRAN: [
    { value: '```\nFlowTran([\'流程实例编号\'],[\'流程任务号\'])\n```' },
    { value: '任务办理，任务由未阅状态，转变为已阅状态' },
    { value: '```\n示例\nFlowTran([\'TASKLIST\'.\'FI_INST\'],[\'TASKLIST\'.\'FT_IDENT\'])\n```' }
  ],
  FLOWSAVE: [
    { value: '```\nFlowSave(流程实例编号, 流程编号)\n```' },
    { value: '保存流程数据，和表单数据' },
    { value: '```\n示例\nFlowSave([\'受理ID\'], 110004)\n```' }
  ],
  FLOWFRESH: [
    { value: '```\nFlowFresh()\n```' },
    { value: '流程办理时刷新当前显示的表单，用于流程办理工具栏上' }
  ],
  FLOWSEND: [
    { value: '```\nFlowSend([\'流程实例编号\'],[\'流程任务编号\'])\n```' },
    { value: '流程转发，将流程转发至下一环节' },
    { value: '```\n示例\nFlowSend([\'TASKLIST\'.\'FI_INST\'],[\'TASKLIST\'.\'FT_IDENT\'])\n```' }
  ],
  FLOWBACK: [
    { value: '```\nFlowBack([\'流程实例编号\'],[\'流程任务编号\'])\n```' },
    { value: '流程退回，退回到上一步办理的人' },
    { value: '```\n示例\nFlowBack([\'TASKLIST\'.\'FI_INST\'],[\'TASKLIST\'.\'FT_IDENT\'])\n```' }
  ],
  FLOWBACK2: [
    { value: '```\nFlowBack2([\'流程实例编号\'],[\'流程任务编号\'])\n```' },
    { value: '流程退回，退回到任意已办理过的人员，办理完成后按流程图环节重新流转' },
    { value: '```md\nFlowBack 和 FlowBack2的区别，在流程 A——>B——>C 中：\nFlowBack只能从C退回到B，FlowBack2可以将文件从C退还给B和A两个人\n```' },
    { value: '```\n示例\nFlowBack2([\'TASKLIST\'.\'FI_INST\'],[\'TASKLIST\'.\'FT_IDENT\'])\n```' }
  ],
  FLOWMEND: [
    { value: '```\nFlowMend([\'流程实例编号\'],[\'流程任务编号\'])\n```' },
    { value: '流程补办，可将流程转发到任意一个已经办理过的环节，办理完成后可以直接发送到进行补办操作的人员' },
    { value: '```\n示例\nFlowMend([\'TASKLIST\'.\'FI_INST\'],[\'TASKLIST\'.\'FT_IDENT\'])\n```' }
  ],
  FLOWPRINT: [
    { value: '```\nFlowPrint()\n```' },
    { value: '流程办理打印' },
    { value: '在流程工具栏上，配置 FlowPrint，且要打印的表单上以`打印`为控件名称配置按钮控件，实现打印功能'}
  ],
  FLOWFORM: [
    { value: '```\nFlowForm([\'流程实例编号\'])\n```' },
    { value: '查看业务表单信息' },
    { value: '```\n示例\nFlowForm([\'TASKLIST\'.\'FI_INST\'])\n```' }
  ],
  FLOWQUERY: [
    { value: '```\nFlowQuery([\'流程实例编号\'])\n```' },
    { value: '查看流程图' },
    { value: '```\n示例\nFlowQuery([\'TASKLIST\'.\'FI_INST\'])\n```' }
  ],
  TASKHANG: [
    { value: '```\nTaskHang([\'流程实例编号\'],[\'流程任务编号\'])\n```' },
    { value: '业务挂起' },
    { value: '```\n示例\nTaskHang([\'TASKLIST\'.\'FI_INST\'],[\'TASKLIST\'.\'FT_IDENT\'])\n```' }
  ],
  TASKFREE: [
    { value: '```\nTaskFree([\'流程实例编号\'],[\'流程任务编号\'])\n```' },
    { value: '解除挂起' },
    { value: '```\n示例\nTaskFree([\'TASKLIST\'.\'FI_INST\'],[\'TASKLIST\'.\'FT_IDENT\'])\n```' }
  ],
  FLOWTEST: [
    { value: '```\nFlowTest()\n```' },
    { value: '启动已发布流程，用于业务导航上' }
  ],
  FLOWDROP: [
    { value: '```\nFlowDrop([\'流程实例编号\'])\n```' },
    { value: '物理删除流程数据，只能由流程发起人删除。删除此流程相关的系统表数据，不可恢复' },
    { value: '后台业务流程工具栏配置该指令时请配合 `MessageBox` 使用' },
    { value: '```\n示例\nFlowDrop([\'结果列表\'.\'FI_INST\'])\n```' }
  ],
  FLOWCLOSE: [
    { value: '```\nFlowClose()\n```' },
    { value: '关闭当前流程' }
  ],
  FLOWAGENT: [
    { value: '```\nFlowAgent(被代理人, 代理人, 代理流程-节点控件编号, 开始时间, 结束时间, 事由)\n```' },
    { value: '时间格式：yyyy-MM-DD hh:mm:ss' },
    { value: '流程代理。\
使用指令后，与被代理人相关流程任务由代理人接收，被代理人当前收件箱未接收的件和已接收的件会移交代理人的收件箱，\
代理期间被代理人的件会由代理人接收处理，\
直到结束时间或者取消代理，若代理流程中添加节点编号参数，则只代理流程中该节点任务'
    },
    { value: '```\n示例\nFlowAgent([\'被代理人\'],[\'代理人\'],[\'代理流程\'],[\'开始时间\'],[\'结束时间\'],[\'事由\']);\n```' }
  ],
  AGENTCANCEL: [
    { value: '```\nAgentCancel([\'代理序号\'])\n```' },
    { value: '取消代理，参数为 `OA2_AGENT.AG_INDEX` 字段对应数据，即代理序号' }
  ],
  FLOWREFACT: [
    { value: '```\nFlowRefact([\'流程实例编号\'], 重构类型)\n```' },
    { value: '流程重构，重新按流程图构建流程实例相关数据' },
    { value: '重构类型：\n- `0`：按原流程重构\n- `1`：按新流程重构' },
    { value: '```\n示例\nFlowRefact([\'TASKLIST\'.\'FI_INST\'], 1)\n```' }
  ],
  TESTCOMMIT: [
    { value: '```\nTestCommit(流程编号, \'参数\')\n```' },
    { value: '直接发起单个流程' },
    { value: '发送的参数，表单通过 `[@ x]` 接收' },
    { value: '```\n示例\nTestCommit(102001, \'AAA\')\n```' }
  ],
  CHANGEINSTFLOW: [
    { value: '```\nChangeInstFlow([\'流程实例编号\'], [\'流程任务编号\'], 新流程名称/新流程编号)\n```' },
    { value: '重建案卷' },
    { value: '```\n示例\nChangeInstFlow([\'TASKLIST\'.\'FI_INST\'], [\'TASKLIST\'.\'FT_IDENT\'], 12019)\n```' }
  ],
  INSTFLOW: [
    { value: '```\nInstFlow(\'第二个流程名称\', \'获取主键值规则\')(\'数据关联名称\', [\'第一个主键值\'])\n```' },
    { value: '在一个流程办理中启动另一个流程，并且复制你需要数据到另外一个流程' },
    { value: '```\n示例\nInstFlow(\'公务外出\', \'%11[1001]\')(\'公务外出\', [\'SLID\'])\n```' }
  ],
  TASKDELETE: [
    { value: '```\nTaskDelete(实例编号, 任务编号)\n```' },
    { value: '删除任务' },
    { value: '```\n示例\nTaskDelete([\'TASKLIST\'.\'业务号\'], [\'TASKLIST\'.\'FT_IDENT\'])\n```' }
  ],
  TACHSEND: [
    { value: '```\nTachSend(实例编号, 任务编号)\n```' },
    { value: '环节内转发（同级转发）' },
    { value: '配置在工具条时，参数可省略，表示以当前正在办理流程的实例编号和任务编号转发' },
    { value: '```\n示例\nTachSend([\'TASKLIST\'.\'业务号\'], [\'TASKLIST\'.\'FT_IDENT\'])\n```' }
  ],
  COMMWORD: [
    { value: '```\nCommWord()\n```' },
    { value: '打开常用词，可直接选择或添加常用词' }
  ],
  EXECFUNC: [
    { value: '```\nExecFunc[\'函数模板名称\'](主键)(...参数)\n```' },
    { value: '调用函数模板' },
    { value: '```\n示例\nExecFunc[\'testfunc\']([$INSTANCE])([$INSTANCE])\n```' }
  ],
  CMDBREAK: [
    { value: '```\nCmdBreak()\n```' },
    { value: '中断事件执行' }
  ],
  OPENURL: [
    { value: '```\nOpenUrl(\'标题\', \'地址\')\n```' },
    { value: '打开网址' },
    { value: '```\n示例\nOpenUrl(\'title\', \'http://www.\' + [\'title\'] + \'.com\')\n```' }
  ],
  OPENLAYOUT: [
    { value: '```\nOpenLayout[\'导航名称\']\n```' },
    { value: '打开导航第一级目录' }
  ],
  PRINT: [
    { value: '```\nPrint[\'打印模板名称\'](...主键)(模式)\n```' },
    { value: '模板打印' },
    { value: '模式：\n- `TD`：套打\n- `XD`：续打' },
    { value: '```\n示例\nPrint[\'初始登记-审批表\']([\'受理号\'])(TD)\n```' }
  ],
  REGESIGN: [
    { value: '```\nRegeSign(用户ID)\n```' },
    { value: '注册电子签章' },
    { value: '```\n示例\nRegeSign([\'用户ID\'])\n```' }
  ],
  RSETPSWDSIGN: [
    { value: '```\nRsetPswdSign(用户ID, \'新密码\')\n```' },
    { value: '重置电子签章密码' }
  ]
};
