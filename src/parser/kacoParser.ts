// Generated from src/parser/kaco.g4 by ANTLR 4.9.0-SNAPSHOT

import { ATN } from 'antlr4ts/atn/ATN';
import { ATNDeserializer } from 'antlr4ts/atn/ATNDeserializer';
import { FailedPredicateException } from 'antlr4ts/FailedPredicateException';
import { NotNull } from 'antlr4ts/Decorators';
import { NoViableAltException } from 'antlr4ts/NoViableAltException';
import { Override } from 'antlr4ts/Decorators';
import { Parser } from 'antlr4ts/Parser';
import { ParserRuleContext } from 'antlr4ts/ParserRuleContext';
import { ParserATNSimulator } from 'antlr4ts/atn/ParserATNSimulator';
import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';
import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor';
import { RecognitionException } from 'antlr4ts/RecognitionException';
import { RuleContext } from 'antlr4ts/RuleContext';
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { Token } from 'antlr4ts/Token';
import { TokenStream } from 'antlr4ts/TokenStream';
import { Vocabulary } from 'antlr4ts/Vocabulary';
import { VocabularyImpl } from 'antlr4ts/VocabularyImpl';

import * as Utils from 'antlr4ts/misc/Utils';

import { kacoListener } from './kacoListener';
import { kacoVisitor } from './kacoVisitor';

export class kacoParser extends Parser {
  public static readonly T__0 = 1;
  public static readonly T__1 = 2;
  public static readonly T__2 = 3;
  public static readonly T__3 = 4;
  public static readonly T__4 = 5;
  public static readonly T__5 = 6;
  public static readonly T__6 = 7;
  public static readonly T__7 = 8;
  public static readonly T__8 = 9;
  public static readonly T__9 = 10;
  public static readonly T__10 = 11;
  public static readonly T__11 = 12;
  public static readonly T__12 = 13;
  public static readonly T__13 = 14;
  public static readonly T__14 = 15;
  public static readonly T__15 = 16;
  public static readonly T__16 = 17;
  public static readonly T__17 = 18;
  public static readonly OpenBracket = 19;
  public static readonly CloseBracket = 20;
  public static readonly OpenParen = 21;
  public static readonly CloseParen = 22;
  public static readonly SemiColon = 23;
  public static readonly Comma = 24;
  public static readonly Assign = 25;
  public static readonly Dot = 26;
  public static readonly Ellipsis = 27;
  public static readonly OpenForm = 28;
  public static readonly StringLiteral = 29;
  public static readonly StringDotLiteral = 30;
  public static readonly BooleanLiteral = 31;
  public static readonly DecimalLiteral = 32;
  public static readonly Decimal = 33;
  public static readonly LineComment = 34;
  public static readonly WhiteSpace = 35;
  public static readonly RULE_program = 0;
  public static readonly RULE_statement = 1;
  public static readonly RULE_ifStatement = 2;
  public static readonly RULE_quoteExpr = 3;
  public static readonly RULE_quoteEllipsisExpr = 4;
  public static readonly RULE_blockStatement = 5;
  public static readonly RULE_assignStatement = 6;
  public static readonly RULE_printStatement = 7;
  public static readonly RULE_openFormStatement = 8;
  public static readonly RULE_commonExpression = 9;
  public static readonly RULE_assignAbleStatement = 10;
  public static readonly RULE_expression = 11;
  public static readonly RULE_andAndExpression = 12;
  public static readonly RULE_cmpExpression = 13;
  public static readonly RULE_addExpression = 14;
  public static readonly RULE_mulExpression = 15;
  public static readonly RULE_unaryExpression = 16;
  public static readonly RULE_primaryExpression = 17;
  public static readonly RULE_variableExpression = 18;
  public static readonly RULE_assign = 19;
  // tslint:disable:no-trailing-whitespace
  public static readonly ruleNames: string[] = [
    'program', 'statement', 'ifStatement', 'quoteExpr', 'quoteEllipsisExpr',
    'blockStatement', 'assignStatement', 'printStatement', 'openFormStatement',
    'commonExpression', 'assignAbleStatement', 'expression', 'andAndExpression',
    'cmpExpression', 'addExpression', 'mulExpression', 'unaryExpression',
    'primaryExpression', 'variableExpression', 'assign'
  ];

  private static readonly _LITERAL_NAMES: Array<string | undefined> = [
    undefined, '\'if\'', '\'else\'', '\'{\'', '\'}\'', '\'print\'', '\'||\'', '\'&&\'',
    '\'==\'', '\'!=\'', '\'<\'', '\'<=\'', '\'>\'', '\'>=\'', '\'+\'', '\'-\'', '\'*\'', '\'/\'',
    '\'!\'', '\'[\'', '\']\'', '\'(\'', '\')\'', '\';\'', '\',\'', '\'=\'', '\'.\'', '\'...\'',
    '\'OpenForm\''
  ];
  private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, 'OpenBracket',
    'CloseBracket', 'OpenParen', 'CloseParen', 'SemiColon', 'Comma', 'Assign',
    'Dot', 'Ellipsis', 'OpenForm', 'StringLiteral', 'StringDotLiteral', 'BooleanLiteral',
    'DecimalLiteral', 'Decimal', 'LineComment', 'WhiteSpace'
  ];
  public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(kacoParser._LITERAL_NAMES, kacoParser._SYMBOLIC_NAMES, []);

  // @Override
  // @NotNull
  public get vocabulary(): Vocabulary {
    return kacoParser.VOCABULARY;
  }
  // tslint:enable:no-trailing-whitespace

  // @Override
  public get grammarFileName(): string { return 'kaco.g4'; }

  // @Override
  public get ruleNames(): string[] { return kacoParser.ruleNames; }

  // @Override
  public get serializedATN(): string { return kacoParser._serializedATN; }

  protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
    return new FailedPredicateException(this, predicate, message);
  }

  constructor(input: TokenStream) {
    super(input);
    this._interp = new ParserATNSimulator(kacoParser._ATN, this);
  }
  // @RuleVersion(0)
  public program(): ProgramContext {
    const _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
    this.enterRule(_localctx, 0, kacoParser.RULE_program);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 41;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 40;
              this.statement();
            }
          }
          this.state = 43;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === kacoParser.OpenForm);
        this.state = 45;
        this.match(kacoParser.EOF);
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }

    return _localctx;
  }
  // @RuleVersion(0)
  public statement(): StatementContext {
    const _localctx: StatementContext = new StatementContext(this._ctx, this.state);
    this.enterRule(_localctx, 2, kacoParser.RULE_statement);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 47;
        this.openFormStatement();
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }

    return _localctx;
  }
  // @RuleVersion(0)
  public ifStatement(): IfStatementContext {
    const _localctx: IfStatementContext = new IfStatementContext(this._ctx, this.state);
    this.enterRule(_localctx, 4, kacoParser.RULE_ifStatement);
    try {
      this.state = 59;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 1, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 49;
            this.match(kacoParser.T__0);
            this.state = 50;
            this.quoteExpr();
            this.state = 51;
            this.blockStatement();
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 53;
            this.match(kacoParser.T__0);
            this.state = 54;
            this.quoteExpr();
            this.state = 55;
            this.blockStatement();
            this.state = 56;
            this.match(kacoParser.T__1);
            this.state = 57;
            this.blockStatement();
          }
          break;
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }

    return _localctx;
  }
  // @RuleVersion(0)
  public quoteExpr(): QuoteExprContext {
    const _localctx: QuoteExprContext = new QuoteExprContext(this._ctx, this.state);
    this.enterRule(_localctx, 6, kacoParser.RULE_quoteExpr);
    let _la: number;
    try {
      this.state = 71;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 3, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 61;
            this.match(kacoParser.OpenParen);
            this.state = 62;
            this.match(kacoParser.OpenBracket);
            this.state = 63;
            this.match(kacoParser.StringDotLiteral);
            this.state = 64;
            this.match(kacoParser.CloseBracket);
            this.state = 65;
            this.match(kacoParser.CloseParen);
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 66;
            this.match(kacoParser.OpenParen);
            this.state = 68;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === kacoParser.StringLiteral) {
              {
                this.state = 67;
                this.match(kacoParser.StringLiteral);
              }
            }

            this.state = 70;
            this.match(kacoParser.CloseParen);
          }
          break;
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }

    return _localctx;
  }
  // @RuleVersion(0)
  public quoteEllipsisExpr(): QuoteEllipsisExprContext {
    const _localctx: QuoteEllipsisExprContext = new QuoteEllipsisExprContext(this._ctx, this.state);
    this.enterRule(_localctx, 8, kacoParser.RULE_quoteEllipsisExpr);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 73;
        this.match(kacoParser.OpenParen);
        this.state = 102;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (((((_la - 19)) & ~0x1F) === 0 && ((1 << (_la - 19)) & ((1 << (kacoParser.OpenBracket - 19)) | (1 << (kacoParser.StringLiteral - 19)) | (1 << (kacoParser.BooleanLiteral - 19)) | (1 << (kacoParser.DecimalLiteral - 19)))) !== 0)) {
          {
            this.state = 83;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 4, this._ctx)) {
              case 1:
                {
                  this.state = 74;
                  this.match(kacoParser.StringLiteral);
                }
                break;

              case 2:
                {
                  this.state = 75;
                  this.match(kacoParser.DecimalLiteral);
                }
                break;

              case 3:
                {
                  this.state = 76;
                  this.match(kacoParser.BooleanLiteral);
                }
                break;

              case 4:
                {
                  this.state = 77;
                  this.match(kacoParser.OpenBracket);
                  this.state = 78;
                  this.match(kacoParser.StringDotLiteral);
                  this.state = 79;
                  this.match(kacoParser.CloseBracket);
                }
                break;

              case 5:
                {
                  this.state = 80;
                  this.match(kacoParser.OpenBracket);
                  this.state = 81;
                  this.match(kacoParser.StringLiteral);
                  this.state = 82;
                  this.match(kacoParser.CloseBracket);
                }
                break;
            }
            this.state = 99;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === kacoParser.Comma) {
              {
                {
                  this.state = 85;
                  this.match(kacoParser.Comma);
                  this.state = 95;
                  this._errHandler.sync(this);
                  switch (this.interpreter.adaptivePredict(this._input, 5, this._ctx)) {
                    case 1:
                      {
                        this.state = 86;
                        this.match(kacoParser.StringLiteral);
                      }
                      break;

                    case 2:
                      {
                        this.state = 87;
                        this.match(kacoParser.DecimalLiteral);
                      }
                      break;

                    case 3:
                      {
                        this.state = 88;
                        this.match(kacoParser.BooleanLiteral);
                      }
                      break;

                    case 4:
                      {
                        this.state = 89;
                        this.match(kacoParser.OpenBracket);
                        this.state = 90;
                        this.match(kacoParser.StringDotLiteral);
                        this.state = 91;
                        this.match(kacoParser.CloseBracket);
                      }
                      break;

                    case 5:
                      {
                        this.state = 92;
                        this.match(kacoParser.OpenBracket);
                        this.state = 93;
                        this.match(kacoParser.StringLiteral);
                        this.state = 94;
                        this.match(kacoParser.CloseBracket);
                      }
                      break;
                  }
                }
              }
              this.state = 101;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
            }
          }
        }

        this.state = 104;
        this.match(kacoParser.CloseParen);
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }

    return _localctx;
  }
  // @RuleVersion(0)
  public blockStatement(): BlockStatementContext {
    const _localctx: BlockStatementContext = new BlockStatementContext(this._ctx, this.state);
    this.enterRule(_localctx, 10, kacoParser.RULE_blockStatement);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 106;
        this.match(kacoParser.T__2);
        this.state = 110;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === kacoParser.OpenForm) {
          {
            {
              this.state = 107;
              this.statement();
            }
          }
          this.state = 112;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 113;
        this.match(kacoParser.T__3);
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }

    return _localctx;
  }
  // @RuleVersion(0)
  public assignStatement(): AssignStatementContext {
    const _localctx: AssignStatementContext = new AssignStatementContext(this._ctx, this.state);
    this.enterRule(_localctx, 12, kacoParser.RULE_assignStatement);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 115;
        this.assign();
        this.state = 116;
        this.match(kacoParser.SemiColon);
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }

    return _localctx;
  }
  // @RuleVersion(0)
  public printStatement(): PrintStatementContext {
    const _localctx: PrintStatementContext = new PrintStatementContext(this._ctx, this.state);
    this.enterRule(_localctx, 14, kacoParser.RULE_printStatement);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 118;
        this.match(kacoParser.T__4);
        this.state = 119;
        this.match(kacoParser.OpenParen);
        this.state = 120;
        this.expression();
        this.state = 121;
        this.match(kacoParser.CloseParen);
        this.state = 122;
        this.match(kacoParser.SemiColon);
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }

    return _localctx;
  }
  // @RuleVersion(0)
  public openFormStatement(): OpenFormStatementContext {
    const _localctx: OpenFormStatementContext = new OpenFormStatementContext(this._ctx, this.state);
    this.enterRule(_localctx, 16, kacoParser.RULE_openFormStatement);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 124;
        this.match(kacoParser.OpenForm);
        this.state = 125;
        this.match(kacoParser.OpenBracket);
        this.state = 126;
        _la = this._input.LA(1);
        if (!(_la === kacoParser.StringLiteral || _la === kacoParser.DecimalLiteral)) {
          this._errHandler.recoverInline(this);
        } else {
          if (this._input.LA(1) === Token.EOF) {
            this.matchedEOF = true;
          }

          this._errHandler.reportMatch(this);
          this.consume();
        }
        this.state = 127;
        this.match(kacoParser.CloseBracket);
        this.state = 129;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 9, this._ctx)) {
          case 1:
            {
              this.state = 128;
              this.quoteEllipsisExpr();
            }
            break;
        }
        this.state = 132;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 10, this._ctx)) {
          case 1:
            {
              this.state = 131;
              this.quoteEllipsisExpr();
            }
            break;
        }
        this.state = 135;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === kacoParser.OpenParen) {
          {
            this.state = 134;
            this.quoteEllipsisExpr();
          }
        }

        this.state = 137;
        this.match(kacoParser.SemiColon);
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }

    return _localctx;
  }
  // @RuleVersion(0)
  public commonExpression(): CommonExpressionContext {
    const _localctx: CommonExpressionContext = new CommonExpressionContext(this._ctx, this.state);
    this.enterRule(_localctx, 18, kacoParser.RULE_commonExpression);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 139;
        this.assignAbleStatement();
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }

    return _localctx;
  }
  // @RuleVersion(0)
  public assignAbleStatement(): AssignAbleStatementContext {
    const _localctx: AssignAbleStatementContext = new AssignAbleStatementContext(this._ctx, this.state);
    this.enterRule(_localctx, 20, kacoParser.RULE_assignAbleStatement);
    try {
      this.state = 143;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 12, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 141;
            this.assign();
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 142;
            this.expression();
          }
          break;
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }

    return _localctx;
  }
  // @RuleVersion(0)
  public expression(): ExpressionContext {
    const _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
    this.enterRule(_localctx, 22, kacoParser.RULE_expression);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 145;
        this.andAndExpression();
        this.state = 150;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === kacoParser.T__5) {
          {
            {
              this.state = 146;
              this.match(kacoParser.T__5);
              this.state = 147;
              this.andAndExpression();
            }
          }
          this.state = 152;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }

    return _localctx;
  }
  // @RuleVersion(0)
  public andAndExpression(): AndAndExpressionContext {
    const _localctx: AndAndExpressionContext = new AndAndExpressionContext(this._ctx, this.state);
    this.enterRule(_localctx, 24, kacoParser.RULE_andAndExpression);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 153;
        this.cmpExpression();
        this.state = 158;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === kacoParser.T__6) {
          {
            {
              this.state = 154;
              this.match(kacoParser.T__6);
              this.state = 155;
              this.cmpExpression();
            }
          }
          this.state = 160;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }

    return _localctx;
  }
  // @RuleVersion(0)
  public cmpExpression(): CmpExpressionContext {
    const _localctx: CmpExpressionContext = new CmpExpressionContext(this._ctx, this.state);
    this.enterRule(_localctx, 26, kacoParser.RULE_cmpExpression);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 161;
        this.addExpression();
        this.state = 164;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << kacoParser.T__7) | (1 << kacoParser.T__8) | (1 << kacoParser.T__9) | (1 << kacoParser.T__10) | (1 << kacoParser.T__11) | (1 << kacoParser.T__12))) !== 0)) {
          {
            this.state = 162;
            _la = this._input.LA(1);
            if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << kacoParser.T__7) | (1 << kacoParser.T__8) | (1 << kacoParser.T__9) | (1 << kacoParser.T__10) | (1 << kacoParser.T__11) | (1 << kacoParser.T__12))) !== 0))) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
            this.state = 163;
            this.addExpression();
          }
        }

      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }

    return _localctx;
  }
  // @RuleVersion(0)
  public addExpression(): AddExpressionContext {
    const _localctx: AddExpressionContext = new AddExpressionContext(this._ctx, this.state);
    this.enterRule(_localctx, 28, kacoParser.RULE_addExpression);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 166;
        this.mulExpression();
        this.state = 171;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === kacoParser.T__13 || _la === kacoParser.T__14) {
          {
            {
              this.state = 167;
              _la = this._input.LA(1);
              if (!(_la === kacoParser.T__13 || _la === kacoParser.T__14)) {
                this._errHandler.recoverInline(this);
              } else {
                if (this._input.LA(1) === Token.EOF) {
                  this.matchedEOF = true;
                }

                this._errHandler.reportMatch(this);
                this.consume();
              }
              this.state = 168;
              this.mulExpression();
            }
          }
          this.state = 173;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }

    return _localctx;
  }
  // @RuleVersion(0)
  public mulExpression(): MulExpressionContext {
    const _localctx: MulExpressionContext = new MulExpressionContext(this._ctx, this.state);
    this.enterRule(_localctx, 30, kacoParser.RULE_mulExpression);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 174;
        this.unaryExpression();
        this.state = 179;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === kacoParser.T__15 || _la === kacoParser.T__16) {
          {
            {
              this.state = 175;
              _la = this._input.LA(1);
              if (!(_la === kacoParser.T__15 || _la === kacoParser.T__16)) {
                this._errHandler.recoverInline(this);
              } else {
                if (this._input.LA(1) === Token.EOF) {
                  this.matchedEOF = true;
                }

                this._errHandler.reportMatch(this);
                this.consume();
              }
              this.state = 176;
              this.unaryExpression();
            }
          }
          this.state = 181;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }

    return _localctx;
  }
  // @RuleVersion(0)
  public unaryExpression(): UnaryExpressionContext {
    const _localctx: UnaryExpressionContext = new UnaryExpressionContext(this._ctx, this.state);
    this.enterRule(_localctx, 32, kacoParser.RULE_unaryExpression);
    let _la: number;
    try {
      this.state = 185;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 18, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 182;
            this.primaryExpression();
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 183;
            _la = this._input.LA(1);
            if (!(_la === kacoParser.T__14 || _la === kacoParser.T__17)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
            this.state = 184;
            this.unaryExpression();
          }
          break;
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }

    return _localctx;
  }
  // @RuleVersion(0)
  public primaryExpression(): PrimaryExpressionContext {
    const _localctx: PrimaryExpressionContext = new PrimaryExpressionContext(this._ctx, this.state);
    this.enterRule(_localctx, 34, kacoParser.RULE_primaryExpression);
    try {
      this.state = 192;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case kacoParser.EOF:
        case kacoParser.T__5:
        case kacoParser.T__6:
        case kacoParser.T__7:
        case kacoParser.T__8:
        case kacoParser.T__9:
        case kacoParser.T__10:
        case kacoParser.T__11:
        case kacoParser.T__12:
        case kacoParser.T__13:
        case kacoParser.T__14:
        case kacoParser.T__15:
        case kacoParser.T__16:
        case kacoParser.CloseParen:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 187;
            this.variableExpression();
          }
          break;
        case kacoParser.OpenParen:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 188;
            this.match(kacoParser.OpenParen);
            this.state = 189;
            this.expression();
            this.state = 190;
            this.match(kacoParser.CloseParen);
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }

    return _localctx;
  }
  // @RuleVersion(0)
  public variableExpression(): VariableExpressionContext {
    const _localctx: VariableExpressionContext = new VariableExpressionContext(this._ctx, this.state);
    this.enterRule(_localctx, 36, kacoParser.RULE_variableExpression);
    try {
      this.enterOuterAlt(_localctx, 1);
      // tslint:disable-next-line:no-empty
      {
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }

    return _localctx;
  }
  // @RuleVersion(0)
  public assign(): AssignContext {
    const _localctx: AssignContext = new AssignContext(this._ctx, this.state);
    this.enterRule(_localctx, 38, kacoParser.RULE_assign);
    try {
      this.enterOuterAlt(_localctx, 1);
      // tslint:disable-next-line:no-empty
      {
      }
    }
    catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    }
    finally {
      this.exitRule();
    }

    return _localctx;
  }

  public static readonly _serializedATN: string =
    '\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03%\xC9\x04\x02' +
		'\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07' +
		'\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04' +
		'\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04' +
		'\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x03\x02\x06\x02,\n\x02\r\x02\x0E' +
		'\x02-\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04' +
		'\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04>\n\x04\x03\x05' +
		'\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05G\n\x05\x03\x05' +
		'\x05\x05J\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06' +
		'\x03\x06\x03\x06\x03\x06\x05\x06V\n\x06\x03\x06\x03\x06\x03\x06\x03\x06' +
		'\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06b\n\x06\x07\x06' +
		'd\n\x06\f\x06\x0E\x06g\v\x06\x05\x06i\n\x06\x03\x06\x03\x06\x03\x07\x03' +
		'\x07\x07\x07o\n\x07\f\x07\x0E\x07r\v\x07\x03\x07\x03\x07\x03\b\x03\b\x03' +
		'\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\n\x05' +
		'\n\x84\n\n\x03\n\x05\n\x87\n\n\x03\n\x05\n\x8A\n\n\x03\n\x03\n\x03\v\x03' +
		'\v\x03\f\x03\f\x05\f\x92\n\f\x03\r\x03\r\x03\r\x07\r\x97\n\r\f\r\x0E\r' +
		'\x9A\v\r\x03\x0E\x03\x0E\x03\x0E\x07\x0E\x9F\n\x0E\f\x0E\x0E\x0E\xA2\v' +
		'\x0E\x03\x0F\x03\x0F\x03\x0F\x05\x0F\xA7\n\x0F\x03\x10\x03\x10\x03\x10' +
		'\x07\x10\xAC\n\x10\f\x10\x0E\x10\xAF\v\x10\x03\x11\x03\x11\x03\x11\x07' +
		'\x11\xB4\n\x11\f\x11\x0E\x11\xB7\v\x11\x03\x12\x03\x12\x03\x12\x05\x12' +
		'\xBC\n\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13\xC3\n\x13\x03' +
		'\x14\x03\x14\x03\x15\x03\x15\x03\x15\x02\x02\x02\x16\x02\x02\x04\x02\x06' +
		'\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02' +
		'\x1A\x02\x1C\x02\x1E\x02 \x02"\x02$\x02&\x02(\x02\x02\x07\x04\x02\x1F' +
		'\x1F""\x03\x02\n\x0F\x03\x02\x10\x11\x03\x02\x12\x13\x04\x02\x11\x11' +
		'\x14\x14\x02\xCE\x02+\x03\x02\x02\x02\x041\x03\x02\x02\x02\x06=\x03\x02' +
		'\x02\x02\bI\x03\x02\x02\x02\nK\x03\x02\x02\x02\fl\x03\x02\x02\x02\x0E' +
		'u\x03\x02\x02\x02\x10x\x03\x02\x02\x02\x12~\x03\x02\x02\x02\x14\x8D\x03' +
		'\x02\x02\x02\x16\x91\x03\x02\x02\x02\x18\x93\x03\x02\x02\x02\x1A\x9B\x03' +
		'\x02\x02\x02\x1C\xA3\x03\x02\x02\x02\x1E\xA8\x03\x02\x02\x02 \xB0\x03' +
		'\x02\x02\x02"\xBB\x03\x02\x02\x02$\xC2\x03\x02\x02\x02&\xC4\x03\x02\x02' +
		'\x02(\xC6\x03\x02\x02\x02*,\x05\x04\x03\x02+*\x03\x02\x02\x02,-\x03\x02' +
		'\x02\x02-+\x03\x02\x02\x02-.\x03\x02\x02\x02./\x03\x02\x02\x02/0\x07\x02' +
		'\x02\x030\x03\x03\x02\x02\x0212\x05\x12\n\x022\x05\x03\x02\x02\x0234\x07' +
		'\x03\x02\x0245\x05\b\x05\x0256\x05\f\x07\x026>\x03\x02\x02\x0278\x07\x03' +
		'\x02\x0289\x05\b\x05\x029:\x05\f\x07\x02:;\x07\x04\x02\x02;<\x05\f\x07' +
		'\x02<>\x03\x02\x02\x02=3\x03\x02\x02\x02=7\x03\x02\x02\x02>\x07\x03\x02' +
		'\x02\x02?@\x07\x17\x02\x02@A\x07\x15\x02\x02AB\x07 \x02\x02BC\x07\x16' +
		'\x02\x02CJ\x07\x18\x02\x02DF\x07\x17\x02\x02EG\x07\x1F\x02\x02FE\x03\x02' +
		'\x02\x02FG\x03\x02\x02\x02GH\x03\x02\x02\x02HJ\x07\x18\x02\x02I?\x03\x02' +
		'\x02\x02ID\x03\x02\x02\x02J\t\x03\x02\x02\x02Kh\x07\x17\x02\x02LV\x07' +
		'\x1F\x02\x02MV\x07"\x02\x02NV\x07!\x02\x02OP\x07\x15\x02\x02PQ\x07 \x02' +
		'\x02QV\x07\x16\x02\x02RS\x07\x15\x02\x02ST\x07\x1F\x02\x02TV\x07\x16\x02' +
		'\x02UL\x03\x02\x02\x02UM\x03\x02\x02\x02UN\x03\x02\x02\x02UO\x03\x02\x02' +
		'\x02UR\x03\x02\x02\x02Ve\x03\x02\x02\x02Wa\x07\x1A\x02\x02Xb\x07\x1F\x02' +
		'\x02Yb\x07"\x02\x02Zb\x07!\x02\x02[\\\x07\x15\x02\x02\\]\x07 \x02\x02' +
		']b\x07\x16\x02\x02^_\x07\x15\x02\x02_`\x07\x1F\x02\x02`b\x07\x16\x02\x02' +
		'aX\x03\x02\x02\x02aY\x03\x02\x02\x02aZ\x03\x02\x02\x02a[\x03\x02\x02\x02' +
		'a^\x03\x02\x02\x02bd\x03\x02\x02\x02cW\x03\x02\x02\x02dg\x03\x02\x02\x02' +
		'ec\x03\x02\x02\x02ef\x03\x02\x02\x02fi\x03\x02\x02\x02ge\x03\x02\x02\x02' +
		'hU\x03\x02\x02\x02hi\x03\x02\x02\x02ij\x03\x02\x02\x02jk\x07\x18\x02\x02' +
		'k\v\x03\x02\x02\x02lp\x07\x05\x02\x02mo\x05\x04\x03\x02nm\x03\x02\x02' +
		'\x02or\x03\x02\x02\x02pn\x03\x02\x02\x02pq\x03\x02\x02\x02qs\x03\x02\x02' +
		'\x02rp\x03\x02\x02\x02st\x07\x06\x02\x02t\r\x03\x02\x02\x02uv\x05(\x15' +
		'\x02vw\x07\x19\x02\x02w\x0F\x03\x02\x02\x02xy\x07\x07\x02\x02yz\x07\x17' +
		'\x02\x02z{\x05\x18\r\x02{|\x07\x18\x02\x02|}\x07\x19\x02\x02}\x11\x03' +
		'\x02\x02\x02~\x7F\x07\x1E\x02\x02\x7F\x80\x07\x15\x02\x02\x80\x81\t\x02' +
		'\x02\x02\x81\x83\x07\x16\x02\x02\x82\x84\x05\n\x06\x02\x83\x82\x03\x02' +
		'\x02\x02\x83\x84\x03\x02\x02\x02\x84\x86\x03\x02\x02\x02\x85\x87\x05\n' +
		'\x06\x02\x86\x85\x03\x02\x02\x02\x86\x87\x03\x02\x02\x02\x87\x89\x03\x02' +
		'\x02\x02\x88\x8A\x05\n\x06\x02\x89\x88\x03\x02\x02\x02\x89\x8A\x03\x02' +
		'\x02\x02\x8A\x8B\x03\x02\x02\x02\x8B\x8C\x07\x19\x02\x02\x8C\x13\x03\x02' +
		'\x02\x02\x8D\x8E\x05\x16\f\x02\x8E\x15\x03\x02\x02\x02\x8F\x92\x05(\x15' +
		'\x02\x90\x92\x05\x18\r\x02\x91\x8F\x03\x02\x02\x02\x91\x90\x03\x02\x02' +
		'\x02\x92\x17\x03\x02\x02\x02\x93\x98\x05\x1A\x0E\x02\x94\x95\x07\b\x02' +
		'\x02\x95\x97\x05\x1A\x0E\x02\x96\x94\x03\x02\x02\x02\x97\x9A\x03\x02\x02' +
		'\x02\x98\x96\x03\x02\x02\x02\x98\x99\x03\x02\x02\x02\x99\x19\x03\x02\x02' +
		'\x02\x9A\x98\x03\x02\x02\x02\x9B\xA0\x05\x1C\x0F\x02\x9C\x9D\x07\t\x02' +
		'\x02\x9D\x9F\x05\x1C\x0F\x02\x9E\x9C\x03\x02\x02\x02\x9F\xA2\x03\x02\x02' +
		'\x02\xA0\x9E\x03\x02\x02\x02\xA0\xA1\x03\x02\x02\x02\xA1\x1B\x03\x02\x02' +
		'\x02\xA2\xA0\x03\x02\x02\x02\xA3\xA6\x05\x1E\x10\x02\xA4\xA5\t\x03\x02' +
		'\x02\xA5\xA7\x05\x1E\x10\x02\xA6\xA4\x03\x02\x02\x02\xA6\xA7\x03\x02\x02' +
		'\x02\xA7\x1D\x03\x02\x02\x02\xA8\xAD\x05 \x11\x02\xA9\xAA\t\x04\x02\x02' +
		'\xAA\xAC\x05 \x11\x02\xAB\xA9\x03\x02\x02\x02\xAC\xAF\x03\x02\x02\x02' +
		'\xAD\xAB\x03\x02\x02\x02\xAD\xAE\x03\x02\x02\x02\xAE\x1F\x03\x02\x02\x02' +
		'\xAF\xAD\x03\x02\x02\x02\xB0\xB5\x05"\x12\x02\xB1\xB2\t\x05\x02\x02\xB2' +
		'\xB4\x05"\x12\x02\xB3\xB1\x03\x02\x02\x02\xB4\xB7\x03\x02\x02\x02\xB5' +
		'\xB3\x03\x02\x02\x02\xB5\xB6\x03\x02\x02\x02\xB6!\x03\x02\x02\x02\xB7' +
		'\xB5\x03\x02\x02\x02\xB8\xBC\x05$\x13\x02\xB9\xBA\t\x06\x02\x02\xBA\xBC' +
		'\x05"\x12\x02\xBB\xB8\x03\x02\x02\x02\xBB\xB9\x03\x02\x02\x02\xBC#\x03' +
		'\x02\x02\x02\xBD\xC3\x05&\x14\x02\xBE\xBF\x07\x17\x02\x02\xBF\xC0\x05' +
		'\x18\r\x02\xC0\xC1\x07\x18\x02\x02\xC1\xC3\x03\x02\x02\x02\xC2\xBD\x03' +
		'\x02\x02\x02\xC2\xBE\x03\x02\x02\x02\xC3%\x03\x02\x02\x02\xC4\xC5\x03' +
		'\x02\x02\x02\xC5\'\x03\x02\x02\x02\xC6\xC7\x03\x02\x02\x02\xC7)\x03\x02' +
		'\x02\x02\x16-=FIUaehp\x83\x86\x89\x91\x98\xA0\xA6\xAD\xB5\xBB\xC2';
  public static __ATN: ATN;
  public static get _ATN(): ATN {
    if (!kacoParser.__ATN) {
      kacoParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(kacoParser._serializedATN));
    }

    return kacoParser.__ATN;
  }

}

export class ProgramContext extends ParserRuleContext {
  public EOF(): TerminalNode { return this.getToken(kacoParser.EOF, 0); }
  public statement(): StatementContext[];
  public statement(i: number): StatementContext;
  public statement(i?: number): StatementContext | StatementContext[] {
    if (i === undefined) {
      return this.getRuleContexts(StatementContext);
    } else {
      return this.getRuleContext(i, StatementContext);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number { return kacoParser.RULE_program; }
  // @Override
  public enterRule(listener: kacoListener): void {
    if (listener.enterProgram) {
      listener.enterProgram(this);
    }
  }
  // @Override
  public exitRule(listener: kacoListener): void {
    if (listener.exitProgram) {
      listener.exitProgram(this);
    }
  }
  // @Override
  public accept<Result>(visitor: kacoVisitor<Result>): Result {
    if (visitor.visitProgram) {
      return visitor.visitProgram(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class StatementContext extends ParserRuleContext {
  public openFormStatement(): OpenFormStatementContext {
    return this.getRuleContext(0, OpenFormStatementContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number { return kacoParser.RULE_statement; }
  // @Override
  public enterRule(listener: kacoListener): void {
    if (listener.enterStatement) {
      listener.enterStatement(this);
    }
  }
  // @Override
  public exitRule(listener: kacoListener): void {
    if (listener.exitStatement) {
      listener.exitStatement(this);
    }
  }
  // @Override
  public accept<Result>(visitor: kacoVisitor<Result>): Result {
    if (visitor.visitStatement) {
      return visitor.visitStatement(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class IfStatementContext extends ParserRuleContext {
  public quoteExpr(): QuoteExprContext {
    return this.getRuleContext(0, QuoteExprContext);
  }
  public blockStatement(): BlockStatementContext[];
  public blockStatement(i: number): BlockStatementContext;
  public blockStatement(i?: number): BlockStatementContext | BlockStatementContext[] {
    if (i === undefined) {
      return this.getRuleContexts(BlockStatementContext);
    } else {
      return this.getRuleContext(i, BlockStatementContext);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number { return kacoParser.RULE_ifStatement; }
  // @Override
  public enterRule(listener: kacoListener): void {
    if (listener.enterIfStatement) {
      listener.enterIfStatement(this);
    }
  }
  // @Override
  public exitRule(listener: kacoListener): void {
    if (listener.exitIfStatement) {
      listener.exitIfStatement(this);
    }
  }
  // @Override
  public accept<Result>(visitor: kacoVisitor<Result>): Result {
    if (visitor.visitIfStatement) {
      return visitor.visitIfStatement(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class QuoteExprContext extends ParserRuleContext {
  public OpenParen(): TerminalNode { return this.getToken(kacoParser.OpenParen, 0); }
  public OpenBracket(): TerminalNode | undefined { return this.tryGetToken(kacoParser.OpenBracket, 0); }
  public StringDotLiteral(): TerminalNode | undefined { return this.tryGetToken(kacoParser.StringDotLiteral, 0); }
  public CloseBracket(): TerminalNode | undefined { return this.tryGetToken(kacoParser.CloseBracket, 0); }
  public CloseParen(): TerminalNode { return this.getToken(kacoParser.CloseParen, 0); }
  public StringLiteral(): TerminalNode | undefined { return this.tryGetToken(kacoParser.StringLiteral, 0); }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number { return kacoParser.RULE_quoteExpr; }
  // @Override
  public enterRule(listener: kacoListener): void {
    if (listener.enterQuoteExpr) {
      listener.enterQuoteExpr(this);
    }
  }
  // @Override
  public exitRule(listener: kacoListener): void {
    if (listener.exitQuoteExpr) {
      listener.exitQuoteExpr(this);
    }
  }
  // @Override
  public accept<Result>(visitor: kacoVisitor<Result>): Result {
    if (visitor.visitQuoteExpr) {
      return visitor.visitQuoteExpr(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class QuoteEllipsisExprContext extends ParserRuleContext {
  public OpenParen(): TerminalNode { return this.getToken(kacoParser.OpenParen, 0); }
  public CloseParen(): TerminalNode { return this.getToken(kacoParser.CloseParen, 0); }
  public StringLiteral(): TerminalNode[];
  public StringLiteral(i: number): TerminalNode;
  public StringLiteral(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(kacoParser.StringLiteral);
    } else {
      return this.getToken(kacoParser.StringLiteral, i);
    }
  }
  public DecimalLiteral(): TerminalNode[];
  public DecimalLiteral(i: number): TerminalNode;
  public DecimalLiteral(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(kacoParser.DecimalLiteral);
    } else {
      return this.getToken(kacoParser.DecimalLiteral, i);
    }
  }
  public BooleanLiteral(): TerminalNode[];
  public BooleanLiteral(i: number): TerminalNode;
  public BooleanLiteral(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(kacoParser.BooleanLiteral);
    } else {
      return this.getToken(kacoParser.BooleanLiteral, i);
    }
  }
  public OpenBracket(): TerminalNode[];
  public OpenBracket(i: number): TerminalNode;
  public OpenBracket(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(kacoParser.OpenBracket);
    } else {
      return this.getToken(kacoParser.OpenBracket, i);
    }
  }
  public StringDotLiteral(): TerminalNode[];
  public StringDotLiteral(i: number): TerminalNode;
  public StringDotLiteral(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(kacoParser.StringDotLiteral);
    } else {
      return this.getToken(kacoParser.StringDotLiteral, i);
    }
  }
  public CloseBracket(): TerminalNode[];
  public CloseBracket(i: number): TerminalNode;
  public CloseBracket(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(kacoParser.CloseBracket);
    } else {
      return this.getToken(kacoParser.CloseBracket, i);
    }
  }
  public Comma(): TerminalNode[];
  public Comma(i: number): TerminalNode;
  public Comma(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(kacoParser.Comma);
    } else {
      return this.getToken(kacoParser.Comma, i);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number { return kacoParser.RULE_quoteEllipsisExpr; }
  // @Override
  public enterRule(listener: kacoListener): void {
    if (listener.enterQuoteEllipsisExpr) {
      listener.enterQuoteEllipsisExpr(this);
    }
  }
  // @Override
  public exitRule(listener: kacoListener): void {
    if (listener.exitQuoteEllipsisExpr) {
      listener.exitQuoteEllipsisExpr(this);
    }
  }
  // @Override
  public accept<Result>(visitor: kacoVisitor<Result>): Result {
    if (visitor.visitQuoteEllipsisExpr) {
      return visitor.visitQuoteEllipsisExpr(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class BlockStatementContext extends ParserRuleContext {
  public statement(): StatementContext[];
  public statement(i: number): StatementContext;
  public statement(i?: number): StatementContext | StatementContext[] {
    if (i === undefined) {
      return this.getRuleContexts(StatementContext);
    } else {
      return this.getRuleContext(i, StatementContext);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number { return kacoParser.RULE_blockStatement; }
  // @Override
  public enterRule(listener: kacoListener): void {
    if (listener.enterBlockStatement) {
      listener.enterBlockStatement(this);
    }
  }
  // @Override
  public exitRule(listener: kacoListener): void {
    if (listener.exitBlockStatement) {
      listener.exitBlockStatement(this);
    }
  }
  // @Override
  public accept<Result>(visitor: kacoVisitor<Result>): Result {
    if (visitor.visitBlockStatement) {
      return visitor.visitBlockStatement(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class AssignStatementContext extends ParserRuleContext {
  public assign(): AssignContext {
    return this.getRuleContext(0, AssignContext);
  }
  public SemiColon(): TerminalNode { return this.getToken(kacoParser.SemiColon, 0); }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number { return kacoParser.RULE_assignStatement; }
  // @Override
  public enterRule(listener: kacoListener): void {
    if (listener.enterAssignStatement) {
      listener.enterAssignStatement(this);
    }
  }
  // @Override
  public exitRule(listener: kacoListener): void {
    if (listener.exitAssignStatement) {
      listener.exitAssignStatement(this);
    }
  }
  // @Override
  public accept<Result>(visitor: kacoVisitor<Result>): Result {
    if (visitor.visitAssignStatement) {
      return visitor.visitAssignStatement(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class PrintStatementContext extends ParserRuleContext {
  public OpenParen(): TerminalNode { return this.getToken(kacoParser.OpenParen, 0); }
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext);
  }
  public CloseParen(): TerminalNode { return this.getToken(kacoParser.CloseParen, 0); }
  public SemiColon(): TerminalNode { return this.getToken(kacoParser.SemiColon, 0); }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number { return kacoParser.RULE_printStatement; }
  // @Override
  public enterRule(listener: kacoListener): void {
    if (listener.enterPrintStatement) {
      listener.enterPrintStatement(this);
    }
  }
  // @Override
  public exitRule(listener: kacoListener): void {
    if (listener.exitPrintStatement) {
      listener.exitPrintStatement(this);
    }
  }
  // @Override
  public accept<Result>(visitor: kacoVisitor<Result>): Result {
    if (visitor.visitPrintStatement) {
      return visitor.visitPrintStatement(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class OpenFormStatementContext extends ParserRuleContext {
  public OpenForm(): TerminalNode { return this.getToken(kacoParser.OpenForm, 0); }
  public OpenBracket(): TerminalNode { return this.getToken(kacoParser.OpenBracket, 0); }
  public CloseBracket(): TerminalNode { return this.getToken(kacoParser.CloseBracket, 0); }
  public SemiColon(): TerminalNode { return this.getToken(kacoParser.SemiColon, 0); }
  public StringLiteral(): TerminalNode | undefined { return this.tryGetToken(kacoParser.StringLiteral, 0); }
  public DecimalLiteral(): TerminalNode | undefined { return this.tryGetToken(kacoParser.DecimalLiteral, 0); }
  public quoteEllipsisExpr(): QuoteEllipsisExprContext[];
  public quoteEllipsisExpr(i: number): QuoteEllipsisExprContext;
  public quoteEllipsisExpr(i?: number): QuoteEllipsisExprContext | QuoteEllipsisExprContext[] {
    if (i === undefined) {
      return this.getRuleContexts(QuoteEllipsisExprContext);
    } else {
      return this.getRuleContext(i, QuoteEllipsisExprContext);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number { return kacoParser.RULE_openFormStatement; }
  // @Override
  public enterRule(listener: kacoListener): void {
    if (listener.enterOpenFormStatement) {
      listener.enterOpenFormStatement(this);
    }
  }
  // @Override
  public exitRule(listener: kacoListener): void {
    if (listener.exitOpenFormStatement) {
      listener.exitOpenFormStatement(this);
    }
  }
  // @Override
  public accept<Result>(visitor: kacoVisitor<Result>): Result {
    if (visitor.visitOpenFormStatement) {
      return visitor.visitOpenFormStatement(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class CommonExpressionContext extends ParserRuleContext {
  public assignAbleStatement(): AssignAbleStatementContext {
    return this.getRuleContext(0, AssignAbleStatementContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number { return kacoParser.RULE_commonExpression; }
  // @Override
  public enterRule(listener: kacoListener): void {
    if (listener.enterCommonExpression) {
      listener.enterCommonExpression(this);
    }
  }
  // @Override
  public exitRule(listener: kacoListener): void {
    if (listener.exitCommonExpression) {
      listener.exitCommonExpression(this);
    }
  }
  // @Override
  public accept<Result>(visitor: kacoVisitor<Result>): Result {
    if (visitor.visitCommonExpression) {
      return visitor.visitCommonExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class AssignAbleStatementContext extends ParserRuleContext {
  public assign(): AssignContext | undefined {
    return this.tryGetRuleContext(0, AssignContext);
  }
  public expression(): ExpressionContext | undefined {
    return this.tryGetRuleContext(0, ExpressionContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number { return kacoParser.RULE_assignAbleStatement; }
  // @Override
  public enterRule(listener: kacoListener): void {
    if (listener.enterAssignAbleStatement) {
      listener.enterAssignAbleStatement(this);
    }
  }
  // @Override
  public exitRule(listener: kacoListener): void {
    if (listener.exitAssignAbleStatement) {
      listener.exitAssignAbleStatement(this);
    }
  }
  // @Override
  public accept<Result>(visitor: kacoVisitor<Result>): Result {
    if (visitor.visitAssignAbleStatement) {
      return visitor.visitAssignAbleStatement(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class ExpressionContext extends ParserRuleContext {
  public andAndExpression(): AndAndExpressionContext[];
  public andAndExpression(i: number): AndAndExpressionContext;
  public andAndExpression(i?: number): AndAndExpressionContext | AndAndExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(AndAndExpressionContext);
    } else {
      return this.getRuleContext(i, AndAndExpressionContext);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number { return kacoParser.RULE_expression; }
  // @Override
  public enterRule(listener: kacoListener): void {
    if (listener.enterExpression) {
      listener.enterExpression(this);
    }
  }
  // @Override
  public exitRule(listener: kacoListener): void {
    if (listener.exitExpression) {
      listener.exitExpression(this);
    }
  }
  // @Override
  public accept<Result>(visitor: kacoVisitor<Result>): Result {
    if (visitor.visitExpression) {
      return visitor.visitExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class AndAndExpressionContext extends ParserRuleContext {
  public cmpExpression(): CmpExpressionContext[];
  public cmpExpression(i: number): CmpExpressionContext;
  public cmpExpression(i?: number): CmpExpressionContext | CmpExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(CmpExpressionContext);
    } else {
      return this.getRuleContext(i, CmpExpressionContext);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number { return kacoParser.RULE_andAndExpression; }
  // @Override
  public enterRule(listener: kacoListener): void {
    if (listener.enterAndAndExpression) {
      listener.enterAndAndExpression(this);
    }
  }
  // @Override
  public exitRule(listener: kacoListener): void {
    if (listener.exitAndAndExpression) {
      listener.exitAndAndExpression(this);
    }
  }
  // @Override
  public accept<Result>(visitor: kacoVisitor<Result>): Result {
    if (visitor.visitAndAndExpression) {
      return visitor.visitAndAndExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class CmpExpressionContext extends ParserRuleContext {
  public addExpression(): AddExpressionContext[];
  public addExpression(i: number): AddExpressionContext;
  public addExpression(i?: number): AddExpressionContext | AddExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(AddExpressionContext);
    } else {
      return this.getRuleContext(i, AddExpressionContext);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number { return kacoParser.RULE_cmpExpression; }
  // @Override
  public enterRule(listener: kacoListener): void {
    if (listener.enterCmpExpression) {
      listener.enterCmpExpression(this);
    }
  }
  // @Override
  public exitRule(listener: kacoListener): void {
    if (listener.exitCmpExpression) {
      listener.exitCmpExpression(this);
    }
  }
  // @Override
  public accept<Result>(visitor: kacoVisitor<Result>): Result {
    if (visitor.visitCmpExpression) {
      return visitor.visitCmpExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class AddExpressionContext extends ParserRuleContext {
  public mulExpression(): MulExpressionContext[];
  public mulExpression(i: number): MulExpressionContext;
  public mulExpression(i?: number): MulExpressionContext | MulExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(MulExpressionContext);
    } else {
      return this.getRuleContext(i, MulExpressionContext);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number { return kacoParser.RULE_addExpression; }
  // @Override
  public enterRule(listener: kacoListener): void {
    if (listener.enterAddExpression) {
      listener.enterAddExpression(this);
    }
  }
  // @Override
  public exitRule(listener: kacoListener): void {
    if (listener.exitAddExpression) {
      listener.exitAddExpression(this);
    }
  }
  // @Override
  public accept<Result>(visitor: kacoVisitor<Result>): Result {
    if (visitor.visitAddExpression) {
      return visitor.visitAddExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class MulExpressionContext extends ParserRuleContext {
  public unaryExpression(): UnaryExpressionContext[];
  public unaryExpression(i: number): UnaryExpressionContext;
  public unaryExpression(i?: number): UnaryExpressionContext | UnaryExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(UnaryExpressionContext);
    } else {
      return this.getRuleContext(i, UnaryExpressionContext);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number { return kacoParser.RULE_mulExpression; }
  // @Override
  public enterRule(listener: kacoListener): void {
    if (listener.enterMulExpression) {
      listener.enterMulExpression(this);
    }
  }
  // @Override
  public exitRule(listener: kacoListener): void {
    if (listener.exitMulExpression) {
      listener.exitMulExpression(this);
    }
  }
  // @Override
  public accept<Result>(visitor: kacoVisitor<Result>): Result {
    if (visitor.visitMulExpression) {
      return visitor.visitMulExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class UnaryExpressionContext extends ParserRuleContext {
  public primaryExpression(): PrimaryExpressionContext | undefined {
    return this.tryGetRuleContext(0, PrimaryExpressionContext);
  }
  public unaryExpression(): UnaryExpressionContext | undefined {
    return this.tryGetRuleContext(0, UnaryExpressionContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number { return kacoParser.RULE_unaryExpression; }
  // @Override
  public enterRule(listener: kacoListener): void {
    if (listener.enterUnaryExpression) {
      listener.enterUnaryExpression(this);
    }
  }
  // @Override
  public exitRule(listener: kacoListener): void {
    if (listener.exitUnaryExpression) {
      listener.exitUnaryExpression(this);
    }
  }
  // @Override
  public accept<Result>(visitor: kacoVisitor<Result>): Result {
    if (visitor.visitUnaryExpression) {
      return visitor.visitUnaryExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class PrimaryExpressionContext extends ParserRuleContext {
  public variableExpression(): VariableExpressionContext | undefined {
    return this.tryGetRuleContext(0, VariableExpressionContext);
  }
  public OpenParen(): TerminalNode | undefined { return this.tryGetToken(kacoParser.OpenParen, 0); }
  public expression(): ExpressionContext | undefined {
    return this.tryGetRuleContext(0, ExpressionContext);
  }
  public CloseParen(): TerminalNode | undefined { return this.tryGetToken(kacoParser.CloseParen, 0); }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number { return kacoParser.RULE_primaryExpression; }
  // @Override
  public enterRule(listener: kacoListener): void {
    if (listener.enterPrimaryExpression) {
      listener.enterPrimaryExpression(this);
    }
  }
  // @Override
  public exitRule(listener: kacoListener): void {
    if (listener.exitPrimaryExpression) {
      listener.exitPrimaryExpression(this);
    }
  }
  // @Override
  public accept<Result>(visitor: kacoVisitor<Result>): Result {
    if (visitor.visitPrimaryExpression) {
      return visitor.visitPrimaryExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class VariableExpressionContext extends ParserRuleContext {
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number { return kacoParser.RULE_variableExpression; }
  // @Override
  public enterRule(listener: kacoListener): void {
    if (listener.enterVariableExpression) {
      listener.enterVariableExpression(this);
    }
  }
  // @Override
  public exitRule(listener: kacoListener): void {
    if (listener.exitVariableExpression) {
      listener.exitVariableExpression(this);
    }
  }
  // @Override
  public accept<Result>(visitor: kacoVisitor<Result>): Result {
    if (visitor.visitVariableExpression) {
      return visitor.visitVariableExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

export class AssignContext extends ParserRuleContext {
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number { return kacoParser.RULE_assign; }
  // @Override
  public enterRule(listener: kacoListener): void {
    if (listener.enterAssign) {
      listener.enterAssign(this);
    }
  }
  // @Override
  public exitRule(listener: kacoListener): void {
    if (listener.exitAssign) {
      listener.exitAssign(this);
    }
  }
  // @Override
  public accept<Result>(visitor: kacoVisitor<Result>): Result {
    if (visitor.visitAssign) {
      return visitor.visitAssign(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

