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

  enterProgram(ctx: ProgramContext) {
    if (!this.result) {
      let range: monaco.Range | undefined;

      const matched = (ctx.children as ProgramContext[]).find((child) => {
        if (!child.start) return false;

        range = getRangeFromToken(child.start);

        return monaco.Range.containsPosition(range, this.position);
      });

      if (matched?.start.text && range) {
        this.result = {
          range,
          type: matched.start.text,
          name: matched.start.text
        };
      }
    }
  }

  visitErrorNode() { /** pass */ }
}

export const kacoKeywords = [
  'OpenForm',
  'SaveForm'
] as const;

const schema: Record<typeof kacoKeywords[number], monaco.IMarkdownString[]> = {
  OpenForm: [
    { value: '```\nOpenForm[\'表单名称\'](...主键)(...黙认值主键)(...参数)\n```' },
    { value: '打开表单' },
    { value: '```\n示例\nOpenForm[\'基本信息\']([\'受理号\'])()([\'姓名\'])\n```' }
  ],
  SaveForm: [
    { value: '```\nSaveForm(主键)\n```' },
    { value: '保存表单' },
    { value: '```\n有主键时，根据主键值保存表单数据\n无主键时，以当前模型表单保存数据，不会提示"保存成功"\n```' },
    { value: '```\n示例\nSaveForm[\'基本信息\']\n```' }
  ]
};
