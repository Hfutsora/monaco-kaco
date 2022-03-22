// Generated from src/parser/kaco.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { kacoListener } from "./kacoListener";
import { kacoVisitor } from "./kacoVisitor";


export class kacoParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly OpenBracket = 2;
	public static readonly CloseBracket = 3;
	public static readonly OpenParen = 4;
	public static readonly CloseParen = 5;
	public static readonly OpenBrace = 6;
	public static readonly CloseBrace = 7;
	public static readonly SemiColon = 8;
	public static readonly Comma = 9;
	public static readonly Plus = 10;
	public static readonly Minus = 11;
	public static readonly Multiply = 12;
	public static readonly Divide = 13;
	public static readonly Assign = 14;
	public static readonly Dot = 15;
	public static readonly Ellipsis = 16;
	public static readonly Equal = 17;
	public static readonly NotEqual = 18;
	public static readonly LessThan = 19;
	public static readonly MoreThan = 20;
	public static readonly LessThanEquals = 21;
	public static readonly GreaterThanEquals = 22;
	public static readonly And = 23;
	public static readonly Or = 24;
	public static readonly Sql = 25;
	public static readonly Const = 26;
	public static readonly OpenForm = 27;
	public static readonly SaveForm = 28;
	public static readonly Close = 29;
	public static readonly Refresh = 30;
	public static readonly MessageBox = 31;
	public static readonly ClickButton = 32;
	public static readonly GetComboDic = 33;
	public static readonly QueryData = 34;
	public static readonly CarryData = 35;
	public static readonly SQLExecute = 36;
	public static readonly GetCoder = 37;
	public static readonly SetCoder = 38;
	public static readonly ResetCtrlValue = 39;
	public static readonly SaveLastValue = 40;
	public static readonly LoadLastValue = 41;
	public static readonly SetVisiable = 42;
	public static readonly SetEnable = 43;
	public static readonly SetFocus = 44;
	public static readonly SetColor = 45;
	public static readonly ChangeTab = 46;
	public static readonly SwitchDisplay = 47;
	public static readonly Selected = 48;
	public static readonly If = 49;
	public static readonly Constant = 50;
	public static readonly Natural = 51;
	public static readonly MessageLiteral = 52;
	public static readonly CoderLiteral = 53;
	public static readonly HexLiteral = 54;
	public static readonly StringLiteral = 55;
	public static readonly BooleanLiteral = 56;
	public static readonly DecimalLiteral = 57;
	public static readonly ParamLiteral = 58;
	public static readonly SqlLiteral = 59;
	public static readonly Decimal = 60;
	public static readonly NonZeroDigit = 61;
	public static readonly DigitChar = 62;
	public static readonly UpperCaseChar = 63;
	public static readonly LowerCaseChar = 64;
	public static readonly WS = 65;
	public static readonly COMMENT = 66;
	public static readonly WHITESPACE = 67;
	public static readonly RULE_program = 0;
	public static readonly RULE_statement = 1;
	public static readonly RULE_functionStatement = 2;
	public static readonly RULE_ifStatement = 3;
	public static readonly RULE_blockStatement = 4;
	public static readonly RULE_expressionSequence = 5;
	public static readonly RULE_singleExpression = 6;
	public static readonly RULE_assignStatement = 7;
	public static readonly RULE_quoteEllipsisExpr = 8;
	public static readonly RULE_quoteNaturalExpr = 9;
	public static readonly RULE_openFormStatement = 10;
	public static readonly RULE_saveFormStatement = 11;
	public static readonly RULE_closeStatement = 12;
	public static readonly RULE_refreshStatement = 13;
	public static readonly RULE_messageStatement = 14;
	public static readonly RULE_clickButtonStatement = 15;
	public static readonly RULE_getComboDicStatement = 16;
	public static readonly RULE_queryDataStatement = 17;
	public static readonly RULE_carryDataStatement = 18;
	public static readonly RULE_sqlExecuteStatement = 19;
	public static readonly RULE_getCoderStatement = 20;
	public static readonly RULE_setCoderStatement = 21;
	public static readonly RULE_resetCtrlValueStatement = 22;
	public static readonly RULE_saveLastValueStatement = 23;
	public static readonly RULE_loadLastValueStatement = 24;
	public static readonly RULE_setVisiableStatement = 25;
	public static readonly RULE_setEnableStatement = 26;
	public static readonly RULE_setFocusStatement = 27;
	public static readonly RULE_setColorStatement = 28;
	public static readonly RULE_changeTabStatement = 29;
	public static readonly RULE_switchDisplayStatement = 30;
	public static readonly RULE_expression = 31;
	public static readonly RULE_subTerm = 32;
	public static readonly RULE_addTerm = 33;
	public static readonly RULE_divTerm = 34;
	public static readonly RULE_mulTerm = 35;
	public static readonly RULE_parnTerm = 36;
	public static readonly RULE_assign = 37;
	public static readonly RULE_assignStart = 38;
	public static readonly RULE_ctrlQuoteLiteral = 39;
	public static readonly RULE_ctrlQuoteDotLiteral = 40;
	public static readonly RULE_ctrlQuoteParamLiteral = 41;
	public static readonly RULE_ctrlConstantLiteral = 42;
	public static readonly RULE_commonLiteral = 43;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "statement", "functionStatement", "ifStatement", "blockStatement", 
		"expressionSequence", "singleExpression", "assignStatement", "quoteEllipsisExpr", 
		"quoteNaturalExpr", "openFormStatement", "saveFormStatement", "closeStatement", 
		"refreshStatement", "messageStatement", "clickButtonStatement", "getComboDicStatement", 
		"queryDataStatement", "carryDataStatement", "sqlExecuteStatement", "getCoderStatement", 
		"setCoderStatement", "resetCtrlValueStatement", "saveLastValueStatement", 
		"loadLastValueStatement", "setVisiableStatement", "setEnableStatement", 
		"setFocusStatement", "setColorStatement", "changeTabStatement", "switchDisplayStatement", 
		"expression", "subTerm", "addTerm", "divTerm", "mulTerm", "parnTerm", 
		"assign", "assignStart", "ctrlQuoteLiteral", "ctrlQuoteDotLiteral", "ctrlQuoteParamLiteral", 
		"ctrlConstantLiteral", "commonLiteral",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'-1'", "'['", "']'", "'('", "')'", "'{'", "'}'", "';'", "','", 
		"'+'", "'-'", "'*'", "'/'", "'='", "'.'", "'...'", "'=='", "'!='", "'<'", 
		"'>'", "'<='", "'>='", "'&&'", "'||'", "'#'", "'$'", "'OpenForm'", "'SaveForm'", 
		"'Close'", "'Refresh'", "'MessageBox'", "'ClickButton'", "'GetComboDic'", 
		"'QueryData'", "'CarryData'", "'SQLExecute'", "'GetCoder'", "'SetCoder'", 
		"'ResetCtrlValue'", "'SaveLastValue'", "'LoadLastValue'", "'SetVisiable'", 
		"'SetEnable'", "'SetFocus'", "'SetColor'", "'ChangeTab'", "'SwitchDisplay'", 
		undefined, "'if'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, "OpenBracket", "CloseBracket", "OpenParen", "CloseParen", 
		"OpenBrace", "CloseBrace", "SemiColon", "Comma", "Plus", "Minus", "Multiply", 
		"Divide", "Assign", "Dot", "Ellipsis", "Equal", "NotEqual", "LessThan", 
		"MoreThan", "LessThanEquals", "GreaterThanEquals", "And", "Or", "Sql", 
		"Const", "OpenForm", "SaveForm", "Close", "Refresh", "MessageBox", "ClickButton", 
		"GetComboDic", "QueryData", "CarryData", "SQLExecute", "GetCoder", "SetCoder", 
		"ResetCtrlValue", "SaveLastValue", "LoadLastValue", "SetVisiable", "SetEnable", 
		"SetFocus", "SetColor", "ChangeTab", "SwitchDisplay", "Selected", "If", 
		"Constant", "Natural", "MessageLiteral", "CoderLiteral", "HexLiteral", 
		"StringLiteral", "BooleanLiteral", "DecimalLiteral", "ParamLiteral", "SqlLiteral", 
		"Decimal", "NonZeroDigit", "DigitChar", "UpperCaseChar", "LowerCaseChar", 
		"WS", "COMMENT", "WHITESPACE",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(kacoParser._LITERAL_NAMES, kacoParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return kacoParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "kaco.g4"; }

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
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, kacoParser.RULE_program);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 89;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 88;
				this.statement();
				}
				}
				this.state = 91;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << kacoParser.OpenBracket) | (1 << kacoParser.OpenForm) | (1 << kacoParser.SaveForm) | (1 << kacoParser.Close) | (1 << kacoParser.Refresh) | (1 << kacoParser.MessageBox))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (kacoParser.ClickButton - 32)) | (1 << (kacoParser.GetComboDic - 32)) | (1 << (kacoParser.QueryData - 32)) | (1 << (kacoParser.CarryData - 32)) | (1 << (kacoParser.SQLExecute - 32)) | (1 << (kacoParser.GetCoder - 32)) | (1 << (kacoParser.SetCoder - 32)) | (1 << (kacoParser.ResetCtrlValue - 32)) | (1 << (kacoParser.SaveLastValue - 32)) | (1 << (kacoParser.LoadLastValue - 32)) | (1 << (kacoParser.SetVisiable - 32)) | (1 << (kacoParser.SetEnable - 32)) | (1 << (kacoParser.SetFocus - 32)) | (1 << (kacoParser.SetColor - 32)) | (1 << (kacoParser.ChangeTab - 32)) | (1 << (kacoParser.SwitchDisplay - 32)) | (1 << (kacoParser.If - 32)))) !== 0));
			this.state = 93;
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
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, kacoParser.RULE_statement);
		try {
			this.state = 97;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case kacoParser.If:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 95;
				this.ifStatement();
				}
				break;
			case kacoParser.OpenBracket:
			case kacoParser.OpenForm:
			case kacoParser.SaveForm:
			case kacoParser.Close:
			case kacoParser.Refresh:
			case kacoParser.MessageBox:
			case kacoParser.ClickButton:
			case kacoParser.GetComboDic:
			case kacoParser.QueryData:
			case kacoParser.CarryData:
			case kacoParser.SQLExecute:
			case kacoParser.GetCoder:
			case kacoParser.SetCoder:
			case kacoParser.ResetCtrlValue:
			case kacoParser.SaveLastValue:
			case kacoParser.LoadLastValue:
			case kacoParser.SetVisiable:
			case kacoParser.SetEnable:
			case kacoParser.SetFocus:
			case kacoParser.SetColor:
			case kacoParser.ChangeTab:
			case kacoParser.SwitchDisplay:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 96;
				this.functionStatement();
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
	public functionStatement(): FunctionStatementContext {
		let _localctx: FunctionStatementContext = new FunctionStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, kacoParser.RULE_functionStatement);
		try {
			this.state = 121;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case kacoParser.OpenForm:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 99;
				this.openFormStatement();
				}
				break;
			case kacoParser.SaveForm:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 100;
				this.saveFormStatement();
				}
				break;
			case kacoParser.Close:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 101;
				this.closeStatement();
				}
				break;
			case kacoParser.Refresh:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 102;
				this.refreshStatement();
				}
				break;
			case kacoParser.MessageBox:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 103;
				this.messageStatement();
				}
				break;
			case kacoParser.ClickButton:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 104;
				this.clickButtonStatement();
				}
				break;
			case kacoParser.GetComboDic:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 105;
				this.getComboDicStatement();
				}
				break;
			case kacoParser.QueryData:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 106;
				this.queryDataStatement();
				}
				break;
			case kacoParser.CarryData:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 107;
				this.carryDataStatement();
				}
				break;
			case kacoParser.SQLExecute:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 108;
				this.sqlExecuteStatement();
				}
				break;
			case kacoParser.GetCoder:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 109;
				this.getCoderStatement();
				}
				break;
			case kacoParser.SetCoder:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 110;
				this.setCoderStatement();
				}
				break;
			case kacoParser.ResetCtrlValue:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 111;
				this.resetCtrlValueStatement();
				}
				break;
			case kacoParser.SaveLastValue:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 112;
				this.saveLastValueStatement();
				}
				break;
			case kacoParser.LoadLastValue:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 113;
				this.loadLastValueStatement();
				}
				break;
			case kacoParser.SetVisiable:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 114;
				this.setVisiableStatement();
				}
				break;
			case kacoParser.SetEnable:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 115;
				this.setEnableStatement();
				}
				break;
			case kacoParser.SetFocus:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 116;
				this.setFocusStatement();
				}
				break;
			case kacoParser.SetColor:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 117;
				this.setColorStatement();
				}
				break;
			case kacoParser.ChangeTab:
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 118;
				this.changeTabStatement();
				}
				break;
			case kacoParser.SwitchDisplay:
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 119;
				this.switchDisplayStatement();
				}
				break;
			case kacoParser.OpenBracket:
				this.enterOuterAlt(_localctx, 22);
				{
				this.state = 120;
				this.assignStatement();
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
	public ifStatement(): IfStatementContext {
		let _localctx: IfStatementContext = new IfStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, kacoParser.RULE_ifStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 123;
			this.match(kacoParser.If);
			this.state = 124;
			this.match(kacoParser.OpenParen);
			this.state = 125;
			this.expressionSequence();
			this.state = 126;
			this.match(kacoParser.CloseParen);
			this.state = 127;
			this.blockStatement();
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
		let _localctx: BlockStatementContext = new BlockStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, kacoParser.RULE_blockStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 129;
			this.match(kacoParser.OpenBrace);
			this.state = 134;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << kacoParser.OpenBracket) | (1 << kacoParser.OpenForm) | (1 << kacoParser.SaveForm) | (1 << kacoParser.Close) | (1 << kacoParser.Refresh) | (1 << kacoParser.MessageBox))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (kacoParser.ClickButton - 32)) | (1 << (kacoParser.GetComboDic - 32)) | (1 << (kacoParser.QueryData - 32)) | (1 << (kacoParser.CarryData - 32)) | (1 << (kacoParser.SQLExecute - 32)) | (1 << (kacoParser.GetCoder - 32)) | (1 << (kacoParser.SetCoder - 32)) | (1 << (kacoParser.ResetCtrlValue - 32)) | (1 << (kacoParser.SaveLastValue - 32)) | (1 << (kacoParser.LoadLastValue - 32)) | (1 << (kacoParser.SetVisiable - 32)) | (1 << (kacoParser.SetEnable - 32)) | (1 << (kacoParser.SetFocus - 32)) | (1 << (kacoParser.SetColor - 32)) | (1 << (kacoParser.ChangeTab - 32)) | (1 << (kacoParser.SwitchDisplay - 32)))) !== 0)) {
				{
				this.state = 132;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
				case 1:
					{
					this.state = 130;
					this.functionStatement();
					}
					break;

				case 2:
					{
					this.state = 131;
					this.assignStatement();
					}
					break;
				}
				}
				this.state = 136;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 137;
			this.match(kacoParser.CloseBrace);
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
	public expressionSequence(): ExpressionSequenceContext {
		let _localctx: ExpressionSequenceContext = new ExpressionSequenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, kacoParser.RULE_expressionSequence);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 139;
			this.singleExpression(0);
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

	public singleExpression(): SingleExpressionContext;
	public singleExpression(_p: number): SingleExpressionContext;
	// @RuleVersion(0)
	public singleExpression(_p?: number): SingleExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: SingleExpressionContext = new SingleExpressionContext(this._ctx, _parentState);
		let _prevctx: SingleExpressionContext = _localctx;
		let _startState: number = 12;
		this.enterRecursionRule(_localctx, 12, kacoParser.RULE_singleExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 147;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case kacoParser.OpenBracket:
			case kacoParser.Natural:
			case kacoParser.StringLiteral:
			case kacoParser.BooleanLiteral:
			case kacoParser.DecimalLiteral:
				{
				this.state = 142;
				this.commonLiteral();
				}
				break;
			case kacoParser.OpenParen:
				{
				this.state = 143;
				this.match(kacoParser.OpenParen);
				this.state = 144;
				this.expressionSequence();
				this.state = 145;
				this.match(kacoParser.CloseParen);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 166;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 164;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
					case 1:
						{
						_localctx = new SingleExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, kacoParser.RULE_singleExpression);
						this.state = 149;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 150;
						_la = this._input.LA(1);
						if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << kacoParser.LessThan) | (1 << kacoParser.MoreThan) | (1 << kacoParser.LessThanEquals) | (1 << kacoParser.GreaterThanEquals))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 151;
						this.singleExpression(7);
						}
						break;

					case 2:
						{
						_localctx = new SingleExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, kacoParser.RULE_singleExpression);
						this.state = 152;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 153;
						_la = this._input.LA(1);
						if (!(_la === kacoParser.Plus || _la === kacoParser.Minus)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 154;
						this.singleExpression(6);
						}
						break;

					case 3:
						{
						_localctx = new SingleExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, kacoParser.RULE_singleExpression);
						this.state = 155;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 156;
						_la = this._input.LA(1);
						if (!(_la === kacoParser.Equal || _la === kacoParser.NotEqual)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 157;
						this.singleExpression(5);
						}
						break;

					case 4:
						{
						_localctx = new SingleExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, kacoParser.RULE_singleExpression);
						this.state = 158;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 159;
						this.match(kacoParser.And);
						this.state = 160;
						this.singleExpression(4);
						}
						break;

					case 5:
						{
						_localctx = new SingleExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, kacoParser.RULE_singleExpression);
						this.state = 161;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 162;
						this.match(kacoParser.Or);
						this.state = 163;
						this.singleExpression(3);
						}
						break;
					}
					}
				}
				this.state = 168;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
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
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignStatement(): AssignStatementContext {
		let _localctx: AssignStatementContext = new AssignStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, kacoParser.RULE_assignStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 169;
			this.assign();
			this.state = 170;
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
	public quoteEllipsisExpr(): QuoteEllipsisExprContext {
		let _localctx: QuoteEllipsisExprContext = new QuoteEllipsisExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, kacoParser.RULE_quoteEllipsisExpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 172;
			this.match(kacoParser.OpenParen);
			this.state = 181;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === kacoParser.OpenBracket || ((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (kacoParser.Natural - 51)) | (1 << (kacoParser.StringLiteral - 51)) | (1 << (kacoParser.BooleanLiteral - 51)) | (1 << (kacoParser.DecimalLiteral - 51)))) !== 0)) {
				{
				this.state = 173;
				this.commonLiteral();
				this.state = 178;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === kacoParser.Comma) {
					{
					{
					this.state = 174;
					this.match(kacoParser.Comma);
					this.state = 175;
					this.commonLiteral();
					}
					}
					this.state = 180;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 183;
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
	public quoteNaturalExpr(): QuoteNaturalExprContext {
		let _localctx: QuoteNaturalExprContext = new QuoteNaturalExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, kacoParser.RULE_quoteNaturalExpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 185;
			this.match(kacoParser.OpenParen);
			this.state = 187;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === kacoParser.Natural) {
				{
				this.state = 186;
				this.match(kacoParser.Natural);
				}
			}

			this.state = 189;
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
	public openFormStatement(): OpenFormStatementContext {
		let _localctx: OpenFormStatementContext = new OpenFormStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, kacoParser.RULE_openFormStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 191;
			this.match(kacoParser.OpenForm);
			this.state = 192;
			this.match(kacoParser.OpenBracket);
			this.state = 193;
			_la = this._input.LA(1);
			if (!(((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (kacoParser.Natural - 51)) | (1 << (kacoParser.StringLiteral - 51)) | (1 << (kacoParser.DecimalLiteral - 51)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 194;
			this.match(kacoParser.CloseBracket);
			this.state = 196;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				{
				this.state = 195;
				this.quoteEllipsisExpr();
				}
				break;
			}
			this.state = 199;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				{
				this.state = 198;
				this.quoteEllipsisExpr();
				}
				break;
			}
			this.state = 202;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === kacoParser.OpenParen) {
				{
				this.state = 201;
				this.quoteEllipsisExpr();
				}
			}

			this.state = 204;
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
	public saveFormStatement(): SaveFormStatementContext {
		let _localctx: SaveFormStatementContext = new SaveFormStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, kacoParser.RULE_saveFormStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 206;
			this.match(kacoParser.SaveForm);
			this.state = 207;
			this.quoteEllipsisExpr();
			this.state = 208;
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
	public closeStatement(): CloseStatementContext {
		let _localctx: CloseStatementContext = new CloseStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, kacoParser.RULE_closeStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 210;
			this.match(kacoParser.Close);
			this.state = 211;
			this.match(kacoParser.OpenParen);
			this.state = 213;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === kacoParser.StringLiteral) {
				{
				this.state = 212;
				this.match(kacoParser.StringLiteral);
				}
			}

			this.state = 215;
			this.match(kacoParser.CloseParen);
			this.state = 216;
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
	public refreshStatement(): RefreshStatementContext {
		let _localctx: RefreshStatementContext = new RefreshStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, kacoParser.RULE_refreshStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 218;
			this.match(kacoParser.Refresh);
			this.state = 219;
			this.match(kacoParser.OpenParen);
			this.state = 221;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === kacoParser.StringLiteral) {
				{
				this.state = 220;
				this.match(kacoParser.StringLiteral);
				}
			}

			this.state = 223;
			this.match(kacoParser.CloseParen);
			this.state = 224;
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
	public messageStatement(): MessageStatementContext {
		let _localctx: MessageStatementContext = new MessageStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, kacoParser.RULE_messageStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 226;
			this.match(kacoParser.MessageBox);
			this.state = 227;
			this.match(kacoParser.OpenParen);
			this.state = 228;
			this.match(kacoParser.MessageLiteral);
			this.state = 229;
			this.match(kacoParser.Comma);
			this.state = 230;
			this.match(kacoParser.StringLiteral);
			this.state = 231;
			this.match(kacoParser.CloseParen);
			this.state = 232;
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
	public clickButtonStatement(): ClickButtonStatementContext {
		let _localctx: ClickButtonStatementContext = new ClickButtonStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, kacoParser.RULE_clickButtonStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 234;
			this.match(kacoParser.ClickButton);
			this.state = 235;
			this.match(kacoParser.OpenParen);
			this.state = 236;
			this.ctrlQuoteLiteral();
			this.state = 237;
			this.match(kacoParser.CloseParen);
			this.state = 238;
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
	public getComboDicStatement(): GetComboDicStatementContext {
		let _localctx: GetComboDicStatementContext = new GetComboDicStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, kacoParser.RULE_getComboDicStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 240;
			this.match(kacoParser.GetComboDic);
			this.state = 241;
			this.match(kacoParser.OpenParen);
			this.state = 242;
			this.ctrlQuoteLiteral();
			this.state = 243;
			this.match(kacoParser.Comma);
			this.state = 244;
			this.match(kacoParser.SqlLiteral);
			this.state = 245;
			this.match(kacoParser.CloseParen);
			this.state = 246;
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
	public queryDataStatement(): QueryDataStatementContext {
		let _localctx: QueryDataStatementContext = new QueryDataStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, kacoParser.RULE_queryDataStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 248;
			this.match(kacoParser.QueryData);
			this.state = 249;
			this.ctrlQuoteLiteral();
			this.state = 250;
			this.match(kacoParser.Comma);
			this.state = 251;
			this.ctrlQuoteLiteral();
			this.state = 253;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
			case 1:
				{
				this.state = 252;
				this.quoteEllipsisExpr();
				}
				break;
			}
			this.state = 256;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
			case 1:
				{
				this.state = 255;
				this.quoteNaturalExpr();
				}
				break;
			}
			this.state = 259;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === kacoParser.OpenParen) {
				{
				this.state = 258;
				this.quoteNaturalExpr();
				}
			}

			this.state = 261;
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
	public carryDataStatement(): CarryDataStatementContext {
		let _localctx: CarryDataStatementContext = new CarryDataStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, kacoParser.RULE_carryDataStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 263;
			this.match(kacoParser.CarryData);
			this.state = 264;
			this.ctrlQuoteLiteral();
			this.state = 270;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === kacoParser.OpenParen) {
				{
				this.state = 265;
				this.match(kacoParser.OpenParen);
				this.state = 267;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === kacoParser.OpenBracket) {
					{
					this.state = 266;
					this.ctrlQuoteLiteral();
					}
				}

				this.state = 269;
				this.match(kacoParser.CloseParen);
				}
			}

			this.state = 272;
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
	public sqlExecuteStatement(): SqlExecuteStatementContext {
		let _localctx: SqlExecuteStatementContext = new SqlExecuteStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, kacoParser.RULE_sqlExecuteStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 274;
			this.match(kacoParser.SQLExecute);
			this.state = 275;
			this.match(kacoParser.OpenParen);
			this.state = 277;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === kacoParser.SqlLiteral) {
				{
				this.state = 276;
				this.match(kacoParser.SqlLiteral);
				}
			}

			this.state = 279;
			this.match(kacoParser.CloseParen);
			this.state = 280;
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
	public getCoderStatement(): GetCoderStatementContext {
		let _localctx: GetCoderStatementContext = new GetCoderStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, kacoParser.RULE_getCoderStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 282;
			this.match(kacoParser.GetCoder);
			this.state = 283;
			this.match(kacoParser.OpenParen);
			this.state = 288;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === kacoParser.OpenBracket) {
				{
				this.state = 284;
				this.ctrlQuoteLiteral();
				this.state = 285;
				this.match(kacoParser.Comma);
				this.state = 286;
				this.match(kacoParser.CoderLiteral);
				}
			}

			this.state = 290;
			this.match(kacoParser.CloseParen);
			this.state = 291;
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
	public setCoderStatement(): SetCoderStatementContext {
		let _localctx: SetCoderStatementContext = new SetCoderStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, kacoParser.RULE_setCoderStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 293;
			this.match(kacoParser.SetCoder);
			this.state = 294;
			this.match(kacoParser.OpenParen);
			this.state = 299;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === kacoParser.OpenBracket) {
				{
				this.state = 295;
				this.ctrlQuoteLiteral();
				this.state = 296;
				this.match(kacoParser.Comma);
				this.state = 297;
				this.match(kacoParser.CoderLiteral);
				}
			}

			this.state = 301;
			this.match(kacoParser.CloseParen);
			this.state = 302;
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
	public resetCtrlValueStatement(): ResetCtrlValueStatementContext {
		let _localctx: ResetCtrlValueStatementContext = new ResetCtrlValueStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, kacoParser.RULE_resetCtrlValueStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 304;
			this.match(kacoParser.ResetCtrlValue);
			this.state = 305;
			this.quoteEllipsisExpr();
			this.state = 306;
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
	public saveLastValueStatement(): SaveLastValueStatementContext {
		let _localctx: SaveLastValueStatementContext = new SaveLastValueStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, kacoParser.RULE_saveLastValueStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 308;
			this.match(kacoParser.SaveLastValue);
			this.state = 309;
			this.quoteEllipsisExpr();
			this.state = 310;
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
	public loadLastValueStatement(): LoadLastValueStatementContext {
		let _localctx: LoadLastValueStatementContext = new LoadLastValueStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, kacoParser.RULE_loadLastValueStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 312;
			this.match(kacoParser.LoadLastValue);
			this.state = 313;
			this.quoteEllipsisExpr();
			this.state = 314;
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
	public setVisiableStatement(): SetVisiableStatementContext {
		let _localctx: SetVisiableStatementContext = new SetVisiableStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, kacoParser.RULE_setVisiableStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 316;
			this.match(kacoParser.SetVisiable);
			this.state = 317;
			this.match(kacoParser.OpenParen);
			this.state = 318;
			this.ctrlQuoteLiteral();
			this.state = 319;
			this.match(kacoParser.Comma);
			this.state = 320;
			this.match(kacoParser.Natural);
			this.state = 321;
			this.match(kacoParser.CloseParen);
			this.state = 322;
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
	public setEnableStatement(): SetEnableStatementContext {
		let _localctx: SetEnableStatementContext = new SetEnableStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, kacoParser.RULE_setEnableStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 324;
			this.match(kacoParser.SetEnable);
			this.state = 325;
			this.match(kacoParser.OpenParen);
			this.state = 326;
			this.ctrlQuoteLiteral();
			this.state = 327;
			this.match(kacoParser.Comma);
			this.state = 328;
			this.match(kacoParser.Natural);
			this.state = 329;
			this.match(kacoParser.CloseParen);
			this.state = 330;
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
	public setFocusStatement(): SetFocusStatementContext {
		let _localctx: SetFocusStatementContext = new SetFocusStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, kacoParser.RULE_setFocusStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 332;
			this.match(kacoParser.SetFocus);
			this.state = 333;
			this.match(kacoParser.OpenParen);
			this.state = 334;
			this.ctrlQuoteLiteral();
			this.state = 335;
			this.match(kacoParser.CloseParen);
			this.state = 336;
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
	public setColorStatement(): SetColorStatementContext {
		let _localctx: SetColorStatementContext = new SetColorStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, kacoParser.RULE_setColorStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 338;
			this.match(kacoParser.SetColor);
			this.state = 339;
			this.match(kacoParser.OpenParen);
			this.state = 340;
			this.ctrlQuoteLiteral();
			this.state = 341;
			this.match(kacoParser.Comma);
			this.state = 342;
			_la = this._input.LA(1);
			if (!(_la === kacoParser.HexLiteral || _la === kacoParser.StringLiteral)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 343;
			this.match(kacoParser.CloseParen);
			this.state = 344;
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
	public changeTabStatement(): ChangeTabStatementContext {
		let _localctx: ChangeTabStatementContext = new ChangeTabStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, kacoParser.RULE_changeTabStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 346;
			this.match(kacoParser.ChangeTab);
			this.state = 347;
			this.match(kacoParser.OpenParen);
			this.state = 348;
			this.ctrlQuoteLiteral();
			this.state = 349;
			this.match(kacoParser.Comma);
			this.state = 350;
			this.match(kacoParser.Natural);
			this.state = 351;
			this.match(kacoParser.CloseParen);
			this.state = 352;
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
	public switchDisplayStatement(): SwitchDisplayStatementContext {
		let _localctx: SwitchDisplayStatementContext = new SwitchDisplayStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, kacoParser.RULE_switchDisplayStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 354;
			this.match(kacoParser.SwitchDisplay);
			this.state = 355;
			this.quoteEllipsisExpr();
			this.state = 356;
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
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, kacoParser.RULE_expression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 358;
			this.subTerm();
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
	public subTerm(): SubTermContext {
		let _localctx: SubTermContext = new SubTermContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, kacoParser.RULE_subTerm);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 360;
			this.addTerm();
			this.state = 365;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === kacoParser.Minus) {
				{
				{
				this.state = 361;
				this.match(kacoParser.Minus);
				this.state = 362;
				this.addTerm();
				}
				}
				this.state = 367;
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
	public addTerm(): AddTermContext {
		let _localctx: AddTermContext = new AddTermContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, kacoParser.RULE_addTerm);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 368;
			this.divTerm();
			this.state = 373;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === kacoParser.Plus) {
				{
				{
				this.state = 369;
				this.match(kacoParser.Plus);
				this.state = 370;
				this.divTerm();
				}
				}
				this.state = 375;
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
	public divTerm(): DivTermContext {
		let _localctx: DivTermContext = new DivTermContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, kacoParser.RULE_divTerm);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 376;
			this.mulTerm();
			this.state = 381;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === kacoParser.Divide) {
				{
				{
				this.state = 377;
				this.match(kacoParser.Divide);
				this.state = 378;
				this.mulTerm();
				}
				}
				this.state = 383;
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
	public mulTerm(): MulTermContext {
		let _localctx: MulTermContext = new MulTermContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, kacoParser.RULE_mulTerm);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 384;
			this.parnTerm();
			this.state = 389;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === kacoParser.Multiply) {
				{
				{
				this.state = 385;
				this.match(kacoParser.Multiply);
				this.state = 386;
				this.parnTerm();
				}
				}
				this.state = 391;
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
	public parnTerm(): ParnTermContext {
		let _localctx: ParnTermContext = new ParnTermContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, kacoParser.RULE_parnTerm);
		try {
			this.state = 409;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 31, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 394;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case kacoParser.OpenBracket:
				case kacoParser.Natural:
				case kacoParser.StringLiteral:
				case kacoParser.BooleanLiteral:
				case kacoParser.DecimalLiteral:
					{
					this.state = 392;
					this.commonLiteral();
					}
					break;
				case kacoParser.SqlLiteral:
					{
					this.state = 393;
					this.match(kacoParser.SqlLiteral);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 396;
				this.expression();
				this.state = 399;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case kacoParser.OpenBracket:
				case kacoParser.Natural:
				case kacoParser.StringLiteral:
				case kacoParser.BooleanLiteral:
				case kacoParser.DecimalLiteral:
					{
					this.state = 397;
					this.commonLiteral();
					}
					break;
				case kacoParser.SqlLiteral:
					{
					this.state = 398;
					this.match(kacoParser.SqlLiteral);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 403;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case kacoParser.OpenBracket:
				case kacoParser.Natural:
				case kacoParser.StringLiteral:
				case kacoParser.BooleanLiteral:
				case kacoParser.DecimalLiteral:
					{
					this.state = 401;
					this.commonLiteral();
					}
					break;
				case kacoParser.SqlLiteral:
					{
					this.state = 402;
					this.match(kacoParser.SqlLiteral);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 405;
				this.match(kacoParser.OpenParen);
				this.state = 406;
				this.expression();
				this.state = 407;
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
	public assign(): AssignContext {
		let _localctx: AssignContext = new AssignContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, kacoParser.RULE_assign);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 411;
			this.assignStart();
			this.state = 412;
			this.match(kacoParser.Assign);
			this.state = 413;
			this.expression();
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
	public assignStart(): AssignStartContext {
		let _localctx: AssignStartContext = new AssignStartContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, kacoParser.RULE_assignStart);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 420;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 32, this._ctx) ) {
			case 1:
				{
				this.state = 415;
				this.ctrlQuoteLiteral();
				}
				break;

			case 2:
				{
				this.state = 416;
				this.ctrlQuoteLiteral();
				this.state = 417;
				this.match(kacoParser.Dot);
				this.state = 418;
				this.ctrlQuoteLiteral();
				}
				break;
			}
			this.state = 426;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === kacoParser.Comma) {
				{
				{
				this.state = 422;
				this.match(kacoParser.Comma);
				this.state = 423;
				this.ctrlQuoteLiteral();
				}
				}
				this.state = 428;
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
	public ctrlQuoteLiteral(): CtrlQuoteLiteralContext {
		let _localctx: CtrlQuoteLiteralContext = new CtrlQuoteLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, kacoParser.RULE_ctrlQuoteLiteral);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 429;
			this.match(kacoParser.OpenBracket);
			this.state = 430;
			this.match(kacoParser.StringLiteral);
			this.state = 431;
			this.match(kacoParser.CloseBracket);
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
	public ctrlQuoteDotLiteral(): CtrlQuoteDotLiteralContext {
		let _localctx: CtrlQuoteDotLiteralContext = new CtrlQuoteDotLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, kacoParser.RULE_ctrlQuoteDotLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 433;
			this.match(kacoParser.OpenBracket);
			this.state = 434;
			this.match(kacoParser.StringLiteral);
			this.state = 437;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === kacoParser.Dot) {
				{
				this.state = 435;
				this.match(kacoParser.Dot);
				this.state = 436;
				this.match(kacoParser.StringLiteral);
				}
			}

			this.state = 443;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === kacoParser.Comma) {
				{
				{
				this.state = 439;
				this.match(kacoParser.Comma);
				this.state = 440;
				this.match(kacoParser.StringLiteral);
				}
				}
				this.state = 445;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 451;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === kacoParser.OpenParen) {
				{
				this.state = 446;
				this.match(kacoParser.OpenParen);
				this.state = 447;
				this.match(kacoParser.Selected);
				this.state = 448;
				this.match(kacoParser.Equal);
				this.state = 449;
				_la = this._input.LA(1);
				if (!(_la === kacoParser.T__0 || _la === kacoParser.Multiply || _la === kacoParser.Natural)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 450;
				this.match(kacoParser.CloseParen);
				}
			}

			this.state = 453;
			this.match(kacoParser.CloseBracket);
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
	public ctrlQuoteParamLiteral(): CtrlQuoteParamLiteralContext {
		let _localctx: CtrlQuoteParamLiteralContext = new CtrlQuoteParamLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, kacoParser.RULE_ctrlQuoteParamLiteral);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 455;
			this.match(kacoParser.OpenBracket);
			this.state = 456;
			this.match(kacoParser.ParamLiteral);
			this.state = 457;
			this.match(kacoParser.CloseBracket);
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
	public ctrlConstantLiteral(): CtrlConstantLiteralContext {
		let _localctx: CtrlConstantLiteralContext = new CtrlConstantLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, kacoParser.RULE_ctrlConstantLiteral);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 459;
			this.match(kacoParser.OpenBracket);
			this.state = 460;
			this.match(kacoParser.Const);
			this.state = 461;
			this.match(kacoParser.Constant);
			this.state = 462;
			this.match(kacoParser.CloseBracket);
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
	public commonLiteral(): CommonLiteralContext {
		let _localctx: CommonLiteralContext = new CommonLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, kacoParser.RULE_commonLiteral);
		try {
			this.state = 472;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 37, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 464;
				this.ctrlQuoteLiteral();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 465;
				this.ctrlQuoteDotLiteral();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 466;
				this.ctrlQuoteParamLiteral();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 467;
				this.ctrlConstantLiteral();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 468;
				this.match(kacoParser.DecimalLiteral);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 469;
				this.match(kacoParser.Natural);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 470;
				this.match(kacoParser.BooleanLiteral);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 471;
				this.match(kacoParser.StringLiteral);
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

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 6:
			return this.singleExpression_sempred(_localctx as SingleExpressionContext, predIndex);
		}
		return true;
	}
	private singleExpression_sempred(_localctx: SingleExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 6);

		case 1:
			return this.precpred(this._ctx, 5);

		case 2:
			return this.precpred(this._ctx, 4);

		case 3:
			return this.precpred(this._ctx, 3);

		case 4:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03E\u01DD\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x03\x02\x06\x02\\\n\x02\r\x02\x0E\x02]\x03\x02\x03\x02" +
		"\x03\x03\x03\x03\x05\x03d\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04" +
		"|\n\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06" +
		"\x03\x06\x07\x06\x87\n\x06\f\x06\x0E\x06\x8A\v\x06\x03\x06\x03\x06\x03" +
		"\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x05\b\x96\n\b\x03\b\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03" +
		"\b\x03\b\x07\b\xA7\n\b\f\b\x0E\b\xAA\v\b\x03\t\x03\t\x03\t\x03\n\x03\n" +
		"\x03\n\x03\n\x07\n\xB3\n\n\f\n\x0E\n\xB6\v\n\x05\n\xB8\n\n\x03\n\x03\n" +
		"\x03\v\x03\v\x05\v\xBE\n\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03\f\x05" +
		"\f\xC7\n\f\x03\f\x05\f\xCA\n\f\x03\f\x05\f\xCD\n\f\x03\f\x03\f\x03\r\x03" +
		"\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x05\x0E\xD8\n\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x05\x0F\xE0\n\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03" +
		"\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03" +
		"\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03" +
		"\x13\x05\x13\u0100\n\x13\x03\x13\x05\x13\u0103\n\x13\x03\x13\x05\x13\u0106" +
		"\n\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x14\x05\x14\u010E\n" +
		"\x14\x03\x14\x05\x14\u0111\n\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15" +
		"\x05\x15\u0118\n\x15\x03\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03" +
		"\x16\x03\x16\x03\x16\x05\x16\u0123\n\x16\x03\x16\x03\x16\x03\x16\x03\x17" +
		"\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x05\x17\u012E\n\x17\x03\x17\x03" +
		"\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19\x03" +
		"\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03" +
		"\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03" +
		"\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03" +
		"\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1F\x03" +
		"\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03 \x03 \x03 \x03" +
		" \x03!\x03!\x03\"\x03\"\x03\"\x07\"\u016E\n\"\f\"\x0E\"\u0171\v\"\x03" +
		"#\x03#\x03#\x07#\u0176\n#\f#\x0E#\u0179\v#\x03$\x03$\x03$\x07$\u017E\n" +
		"$\f$\x0E$\u0181\v$\x03%\x03%\x03%\x07%\u0186\n%\f%\x0E%\u0189\v%\x03&" +
		"\x03&\x05&\u018D\n&\x03&\x03&\x03&\x05&\u0192\n&\x03&\x03&\x05&\u0196" +
		"\n&\x03&\x03&\x03&\x03&\x05&\u019C\n&\x03\'\x03\'\x03\'\x03\'\x03(\x03" +
		"(\x03(\x03(\x03(\x05(\u01A7\n(\x03(\x03(\x07(\u01AB\n(\f(\x0E(\u01AE\v" +
		"(\x03)\x03)\x03)\x03)\x03*\x03*\x03*\x03*\x05*\u01B8\n*\x03*\x03*\x07" +
		"*\u01BC\n*\f*\x0E*\u01BF\v*\x03*\x03*\x03*\x03*\x03*\x05*\u01C6\n*\x03" +
		"*\x03*\x03+\x03+\x03+\x03+\x03,\x03,\x03,\x03,\x03,\x03-\x03-\x03-\x03" +
		"-\x03-\x03-\x03-\x03-\x05-\u01DB\n-\x03-\x02\x02\x03\x0E.\x02\x02\x04" +
		"\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02" +
		"\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02." +
		"\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02" +
		"J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02\x02\b\x03\x02\x15\x18\x03\x02" +
		"\f\r\x03\x02\x13\x14\x05\x025599;;\x03\x0289\x05\x02\x03\x03\x0E\x0E5" +
		"5\x02\u01F4\x02[\x03\x02\x02\x02\x04c\x03\x02\x02\x02\x06{\x03\x02\x02" +
		"\x02\b}\x03\x02\x02\x02\n\x83\x03\x02\x02\x02\f\x8D\x03\x02\x02\x02\x0E" +
		"\x95\x03\x02\x02\x02\x10\xAB\x03\x02\x02\x02\x12\xAE\x03\x02\x02\x02\x14" +
		"\xBB\x03\x02\x02\x02\x16\xC1\x03\x02\x02\x02\x18\xD0\x03\x02\x02\x02\x1A" +
		"\xD4\x03\x02\x02\x02\x1C\xDC\x03\x02\x02\x02\x1E\xE4\x03\x02\x02\x02 " +
		"\xEC\x03\x02\x02\x02\"\xF2\x03\x02\x02\x02$\xFA\x03\x02\x02\x02&\u0109" +
		"\x03\x02\x02\x02(\u0114\x03\x02\x02\x02*\u011C\x03\x02\x02\x02,\u0127" +
		"\x03\x02\x02\x02.\u0132\x03\x02\x02\x020\u0136\x03\x02\x02\x022\u013A" +
		"\x03\x02\x02\x024\u013E\x03\x02\x02\x026\u0146\x03\x02\x02\x028\u014E" +
		"\x03\x02\x02\x02:\u0154\x03\x02\x02\x02<\u015C\x03\x02\x02\x02>\u0164" +
		"\x03\x02\x02\x02@\u0168\x03\x02\x02\x02B\u016A\x03\x02\x02\x02D\u0172" +
		"\x03\x02\x02\x02F\u017A\x03\x02\x02\x02H\u0182\x03\x02\x02\x02J\u019B" +
		"\x03\x02\x02\x02L\u019D\x03\x02\x02\x02N\u01A6\x03\x02\x02\x02P\u01AF" +
		"\x03\x02\x02\x02R\u01B3\x03\x02\x02\x02T\u01C9\x03\x02\x02\x02V\u01CD" +
		"\x03\x02\x02\x02X\u01DA\x03\x02\x02\x02Z\\\x05\x04\x03\x02[Z\x03\x02\x02" +
		"\x02\\]\x03\x02\x02\x02][\x03\x02\x02\x02]^\x03\x02\x02\x02^_\x03\x02" +
		"\x02\x02_`\x07\x02\x02\x03`\x03\x03\x02\x02\x02ad\x05\b\x05\x02bd\x05" +
		"\x06\x04\x02ca\x03\x02\x02\x02cb\x03\x02\x02\x02d\x05\x03\x02\x02\x02" +
		"e|\x05\x16\f\x02f|\x05\x18\r\x02g|\x05\x1A\x0E\x02h|\x05\x1C\x0F\x02i" +
		"|\x05\x1E\x10\x02j|\x05 \x11\x02k|\x05\"\x12\x02l|\x05$\x13\x02m|\x05" +
		"&\x14\x02n|\x05(\x15\x02o|\x05*\x16\x02p|\x05,\x17\x02q|\x05.\x18\x02" +
		"r|\x050\x19\x02s|\x052\x1A\x02t|\x054\x1B\x02u|\x056\x1C\x02v|\x058\x1D" +
		"\x02w|\x05:\x1E\x02x|\x05<\x1F\x02y|\x05> \x02z|\x05\x10\t\x02{e\x03\x02" +
		"\x02\x02{f\x03\x02\x02\x02{g\x03\x02\x02\x02{h\x03\x02\x02\x02{i\x03\x02" +
		"\x02\x02{j\x03\x02\x02\x02{k\x03\x02\x02\x02{l\x03\x02\x02\x02{m\x03\x02" +
		"\x02\x02{n\x03\x02\x02\x02{o\x03\x02\x02\x02{p\x03\x02\x02\x02{q\x03\x02" +
		"\x02\x02{r\x03\x02\x02\x02{s\x03\x02\x02\x02{t\x03\x02\x02\x02{u\x03\x02" +
		"\x02\x02{v\x03\x02\x02\x02{w\x03\x02\x02\x02{x\x03\x02\x02\x02{y\x03\x02" +
		"\x02\x02{z\x03\x02\x02\x02|\x07\x03\x02\x02\x02}~\x073\x02\x02~\x7F\x07" +
		"\x06\x02\x02\x7F\x80\x05\f\x07\x02\x80\x81\x07\x07\x02\x02\x81\x82\x05" +
		"\n\x06\x02\x82\t\x03\x02\x02\x02\x83\x88\x07\b\x02\x02\x84\x87\x05\x06" +
		"\x04\x02\x85\x87\x05\x10\t\x02\x86\x84\x03\x02\x02\x02\x86\x85\x03\x02" +
		"\x02\x02\x87\x8A\x03\x02\x02\x02\x88\x86\x03\x02\x02\x02\x88\x89\x03\x02" +
		"\x02\x02\x89\x8B\x03\x02\x02\x02\x8A\x88\x03\x02\x02\x02\x8B\x8C\x07\t" +
		"\x02\x02\x8C\v\x03\x02\x02\x02\x8D\x8E\x05\x0E\b\x02\x8E\r\x03\x02\x02" +
		"\x02\x8F\x90\b\b\x01\x02\x90\x96\x05X-\x02\x91\x92\x07\x06\x02\x02\x92" +
		"\x93\x05\f\x07\x02\x93\x94\x07\x07\x02\x02\x94\x96\x03\x02\x02\x02\x95" +
		"\x8F\x03\x02\x02\x02\x95\x91\x03\x02\x02\x02\x96\xA8\x03\x02\x02\x02\x97" +
		"\x98\f\b\x02\x02\x98\x99\t\x02\x02\x02\x99\xA7\x05\x0E\b\t\x9A\x9B\f\x07" +
		"\x02\x02\x9B\x9C\t\x03\x02\x02\x9C\xA7\x05\x0E\b\b\x9D\x9E\f\x06\x02\x02" +
		"\x9E\x9F\t\x04\x02\x02\x9F\xA7\x05\x0E\b\x07\xA0\xA1\f\x05\x02\x02\xA1" +
		"\xA2\x07\x19\x02\x02\xA2\xA7\x05\x0E\b\x06\xA3\xA4\f\x04\x02\x02\xA4\xA5" +
		"\x07\x1A\x02\x02\xA5\xA7\x05\x0E\b\x05\xA6\x97\x03\x02\x02\x02\xA6\x9A" +
		"\x03\x02\x02\x02\xA6\x9D\x03\x02\x02\x02\xA6\xA0\x03\x02\x02\x02\xA6\xA3" +
		"\x03\x02\x02\x02\xA7\xAA\x03\x02\x02\x02\xA8\xA6\x03\x02\x02\x02\xA8\xA9" +
		"\x03\x02\x02\x02\xA9\x0F\x03\x02\x02\x02\xAA\xA8\x03\x02\x02\x02\xAB\xAC" +
		"\x05L\'\x02\xAC\xAD\x07\n\x02\x02\xAD\x11\x03\x02\x02\x02\xAE\xB7\x07" +
		"\x06\x02\x02\xAF\xB4\x05X-\x02\xB0\xB1\x07\v\x02\x02\xB1\xB3\x05X-\x02" +
		"\xB2\xB0\x03\x02\x02\x02\xB3\xB6\x03\x02\x02\x02\xB4\xB2\x03\x02\x02\x02" +
		"\xB4\xB5\x03\x02\x02\x02\xB5\xB8\x03\x02\x02\x02\xB6\xB4\x03\x02\x02\x02" +
		"\xB7\xAF\x03\x02\x02\x02\xB7\xB8\x03\x02\x02\x02\xB8\xB9\x03\x02\x02\x02" +
		"\xB9\xBA\x07\x07\x02\x02\xBA\x13\x03\x02\x02\x02\xBB\xBD\x07\x06\x02\x02" +
		"\xBC\xBE\x075\x02\x02\xBD\xBC\x03\x02\x02\x02\xBD\xBE\x03\x02\x02\x02" +
		"\xBE\xBF\x03\x02\x02\x02\xBF\xC0\x07\x07\x02\x02\xC0\x15\x03\x02\x02\x02" +
		"\xC1\xC2\x07\x1D\x02\x02\xC2\xC3\x07\x04\x02\x02\xC3\xC4\t\x05\x02\x02" +
		"\xC4\xC6\x07\x05\x02\x02\xC5\xC7\x05\x12\n\x02\xC6\xC5\x03\x02\x02\x02" +
		"\xC6\xC7\x03\x02\x02\x02\xC7\xC9\x03\x02\x02\x02\xC8\xCA\x05\x12\n\x02" +
		"\xC9\xC8\x03\x02\x02\x02\xC9\xCA\x03\x02\x02\x02\xCA\xCC\x03\x02\x02\x02" +
		"\xCB\xCD\x05\x12\n\x02\xCC\xCB\x03\x02\x02\x02\xCC\xCD\x03\x02\x02\x02" +
		"\xCD\xCE\x03\x02\x02\x02\xCE\xCF\x07\n\x02\x02\xCF\x17\x03\x02\x02\x02" +
		"\xD0\xD1\x07\x1E\x02\x02\xD1\xD2\x05\x12\n\x02\xD2\xD3\x07\n\x02\x02\xD3" +
		"\x19\x03\x02\x02\x02\xD4\xD5\x07\x1F\x02\x02\xD5\xD7\x07\x06\x02\x02\xD6" +
		"\xD8\x079\x02\x02\xD7\xD6\x03\x02\x02\x02\xD7\xD8\x03\x02\x02\x02\xD8" +
		"\xD9\x03\x02\x02\x02\xD9\xDA\x07\x07\x02\x02\xDA\xDB\x07\n\x02\x02\xDB" +
		"\x1B\x03\x02\x02\x02\xDC\xDD\x07 \x02\x02\xDD\xDF\x07\x06\x02\x02\xDE" +
		"\xE0\x079\x02\x02\xDF\xDE\x03\x02\x02\x02\xDF\xE0\x03\x02\x02\x02\xE0" +
		"\xE1\x03\x02\x02\x02\xE1\xE2\x07\x07\x02\x02\xE2\xE3\x07\n\x02\x02\xE3" +
		"\x1D\x03\x02\x02\x02\xE4\xE5\x07!\x02\x02\xE5\xE6\x07\x06\x02\x02\xE6" +
		"\xE7\x076\x02\x02\xE7\xE8\x07\v\x02\x02\xE8\xE9\x079\x02\x02\xE9\xEA\x07" +
		"\x07\x02\x02\xEA\xEB\x07\n\x02\x02\xEB\x1F\x03\x02\x02\x02\xEC\xED\x07" +
		"\"\x02\x02\xED\xEE\x07\x06\x02\x02\xEE\xEF\x05P)\x02\xEF\xF0\x07\x07\x02" +
		"\x02\xF0\xF1\x07\n\x02\x02\xF1!\x03\x02\x02\x02\xF2\xF3\x07#\x02\x02\xF3" +
		"\xF4\x07\x06\x02\x02\xF4\xF5\x05P)\x02\xF5\xF6\x07\v\x02\x02\xF6\xF7\x07" +
		"=\x02\x02\xF7\xF8\x07\x07\x02\x02\xF8\xF9\x07\n\x02\x02\xF9#\x03\x02\x02" +
		"\x02\xFA\xFB\x07$\x02\x02\xFB\xFC\x05P)\x02\xFC\xFD\x07\v\x02\x02\xFD" +
		"\xFF\x05P)\x02\xFE\u0100\x05\x12\n\x02\xFF\xFE\x03\x02\x02\x02\xFF\u0100" +
		"\x03\x02\x02\x02\u0100\u0102\x03\x02\x02\x02\u0101\u0103\x05\x14\v\x02" +
		"\u0102\u0101\x03\x02\x02\x02\u0102\u0103\x03\x02\x02\x02\u0103\u0105\x03" +
		"\x02\x02\x02\u0104\u0106\x05\x14\v\x02\u0105\u0104\x03\x02\x02\x02\u0105" +
		"\u0106\x03\x02\x02\x02\u0106\u0107\x03\x02\x02\x02\u0107\u0108\x07\n\x02" +
		"\x02\u0108%\x03\x02\x02\x02\u0109\u010A\x07%\x02\x02\u010A\u0110\x05P" +
		")\x02\u010B\u010D\x07\x06\x02\x02\u010C\u010E\x05P)\x02\u010D\u010C\x03" +
		"\x02\x02\x02\u010D\u010E\x03\x02\x02\x02\u010E\u010F\x03\x02\x02\x02\u010F" +
		"\u0111\x07\x07\x02\x02\u0110\u010B\x03\x02\x02\x02\u0110\u0111\x03\x02" +
		"\x02\x02\u0111\u0112\x03\x02\x02\x02\u0112\u0113\x07\n\x02\x02\u0113\'" +
		"\x03\x02\x02\x02\u0114\u0115\x07&\x02\x02\u0115\u0117\x07\x06\x02\x02" +
		"\u0116\u0118\x07=\x02\x02\u0117\u0116\x03\x02\x02\x02\u0117\u0118\x03" +
		"\x02\x02\x02\u0118\u0119\x03\x02\x02\x02\u0119\u011A\x07\x07\x02\x02\u011A" +
		"\u011B\x07\n\x02\x02\u011B)\x03\x02\x02\x02\u011C\u011D\x07\'\x02\x02" +
		"\u011D\u0122\x07\x06\x02\x02\u011E\u011F\x05P)\x02\u011F\u0120\x07\v\x02" +
		"\x02\u0120\u0121\x077\x02\x02\u0121\u0123\x03\x02\x02\x02\u0122\u011E" +
		"\x03\x02\x02\x02\u0122\u0123\x03\x02\x02\x02\u0123\u0124\x03\x02\x02\x02" +
		"\u0124\u0125\x07\x07\x02\x02\u0125\u0126\x07\n\x02\x02\u0126+\x03\x02" +
		"\x02\x02\u0127\u0128\x07(\x02\x02\u0128\u012D\x07\x06\x02\x02\u0129\u012A" +
		"\x05P)\x02\u012A\u012B\x07\v\x02\x02\u012B\u012C\x077\x02\x02\u012C\u012E" +
		"\x03\x02\x02\x02\u012D\u0129\x03\x02\x02\x02\u012D\u012E\x03\x02\x02\x02" +
		"\u012E\u012F\x03\x02\x02\x02\u012F\u0130\x07\x07\x02\x02\u0130\u0131\x07" +
		"\n\x02\x02\u0131-\x03\x02\x02\x02\u0132\u0133\x07)\x02\x02\u0133\u0134" +
		"\x05\x12\n\x02\u0134\u0135\x07\n\x02\x02\u0135/\x03\x02\x02\x02\u0136" +
		"\u0137\x07*\x02\x02\u0137\u0138\x05\x12\n\x02\u0138\u0139\x07\n\x02\x02" +
		"\u01391\x03\x02\x02\x02\u013A\u013B\x07+\x02\x02\u013B\u013C\x05\x12\n" +
		"\x02\u013C\u013D\x07\n\x02\x02\u013D3\x03\x02\x02\x02\u013E\u013F\x07" +
		",\x02\x02\u013F\u0140\x07\x06\x02\x02\u0140\u0141\x05P)\x02\u0141\u0142" +
		"\x07\v\x02\x02\u0142\u0143\x075\x02\x02\u0143\u0144\x07\x07\x02\x02\u0144" +
		"\u0145\x07\n\x02\x02\u01455\x03\x02\x02\x02\u0146\u0147\x07-\x02\x02\u0147" +
		"\u0148\x07\x06\x02\x02\u0148\u0149\x05P)\x02\u0149\u014A\x07\v\x02\x02" +
		"\u014A\u014B\x075\x02\x02\u014B\u014C\x07\x07\x02\x02\u014C\u014D\x07" +
		"\n\x02\x02\u014D7\x03\x02\x02\x02\u014E\u014F\x07.\x02\x02\u014F\u0150" +
		"\x07\x06\x02\x02\u0150\u0151\x05P)\x02\u0151\u0152\x07\x07\x02\x02\u0152" +
		"\u0153\x07\n\x02\x02\u01539\x03\x02\x02\x02\u0154\u0155\x07/\x02\x02\u0155" +
		"\u0156\x07\x06\x02\x02\u0156\u0157\x05P)\x02\u0157\u0158\x07\v\x02\x02" +
		"\u0158\u0159\t\x06\x02\x02\u0159\u015A\x07\x07\x02\x02\u015A\u015B\x07" +
		"\n\x02\x02\u015B;\x03\x02\x02\x02\u015C\u015D\x070\x02\x02\u015D\u015E" +
		"\x07\x06\x02\x02\u015E\u015F\x05P)\x02\u015F\u0160\x07\v\x02\x02\u0160" +
		"\u0161\x075\x02\x02\u0161\u0162\x07\x07\x02\x02\u0162\u0163\x07\n\x02" +
		"\x02\u0163=\x03\x02\x02\x02\u0164\u0165\x071\x02\x02\u0165\u0166\x05\x12" +
		"\n\x02\u0166\u0167\x07\n\x02\x02\u0167?\x03\x02\x02\x02\u0168\u0169\x05" +
		"B\"\x02\u0169A\x03\x02\x02\x02\u016A\u016F\x05D#\x02\u016B\u016C\x07\r" +
		"\x02\x02\u016C\u016E\x05D#\x02\u016D\u016B\x03\x02\x02\x02\u016E\u0171" +
		"\x03\x02\x02\x02\u016F\u016D\x03\x02\x02\x02\u016F\u0170\x03\x02\x02\x02" +
		"\u0170C\x03\x02\x02\x02\u0171\u016F\x03\x02\x02\x02\u0172\u0177\x05F$" +
		"\x02\u0173\u0174\x07\f\x02\x02\u0174\u0176\x05F$\x02\u0175\u0173\x03\x02" +
		"\x02\x02\u0176\u0179\x03\x02\x02\x02\u0177\u0175\x03\x02\x02\x02\u0177" +
		"\u0178\x03\x02\x02\x02\u0178E\x03\x02\x02\x02\u0179\u0177\x03\x02\x02" +
		"\x02\u017A\u017F\x05H%\x02\u017B\u017C\x07\x0F\x02\x02\u017C\u017E\x05" +
		"H%\x02\u017D\u017B\x03\x02\x02\x02\u017E\u0181\x03\x02\x02\x02\u017F\u017D" +
		"\x03\x02\x02\x02\u017F\u0180\x03\x02\x02\x02\u0180G\x03\x02\x02\x02\u0181" +
		"\u017F\x03\x02\x02\x02\u0182\u0187\x05J&\x02\u0183\u0184\x07\x0E\x02\x02" +
		"\u0184\u0186\x05J&\x02\u0185\u0183\x03\x02\x02\x02\u0186\u0189\x03\x02" +
		"\x02\x02\u0187\u0185\x03\x02\x02\x02\u0187\u0188\x03\x02\x02\x02\u0188" +
		"I\x03\x02\x02\x02\u0189\u0187\x03\x02\x02\x02\u018A\u018D\x05X-\x02\u018B" +
		"\u018D\x07=\x02\x02\u018C\u018A\x03\x02\x02\x02\u018C\u018B\x03\x02\x02" +
		"\x02\u018D\u018E\x03\x02\x02\x02\u018E\u0191\x05@!\x02\u018F\u0192\x05" +
		"X-\x02\u0190\u0192\x07=\x02\x02\u0191\u018F\x03\x02\x02\x02\u0191\u0190" +
		"\x03\x02\x02\x02\u0192\u019C\x03\x02\x02\x02\u0193\u0196\x05X-\x02\u0194" +
		"\u0196\x07=\x02\x02\u0195\u0193\x03\x02\x02\x02\u0195\u0194\x03\x02\x02" +
		"\x02\u0196\u019C\x03\x02\x02\x02\u0197\u0198\x07\x06\x02\x02\u0198\u0199" +
		"\x05@!\x02\u0199\u019A\x07\x07\x02\x02\u019A\u019C\x03\x02\x02\x02\u019B" +
		"\u018C\x03\x02\x02\x02\u019B\u0195\x03\x02\x02\x02\u019B\u0197\x03\x02" +
		"\x02\x02\u019CK\x03\x02\x02\x02\u019D\u019E\x05N(\x02\u019E\u019F\x07" +
		"\x10\x02\x02\u019F\u01A0\x05@!\x02\u01A0M\x03\x02\x02\x02\u01A1\u01A7" +
		"\x05P)\x02\u01A2\u01A3\x05P)\x02\u01A3\u01A4\x07\x11\x02\x02\u01A4\u01A5" +
		"\x05P)\x02\u01A5\u01A7\x03\x02\x02\x02\u01A6\u01A1\x03\x02\x02\x02\u01A6" +
		"\u01A2\x03\x02\x02\x02\u01A7\u01AC\x03\x02\x02\x02\u01A8\u01A9\x07\v\x02" +
		"\x02\u01A9\u01AB\x05P)\x02\u01AA\u01A8\x03\x02\x02\x02\u01AB\u01AE\x03" +
		"\x02\x02\x02\u01AC\u01AA\x03\x02\x02\x02\u01AC\u01AD\x03\x02\x02\x02\u01AD" +
		"O\x03\x02\x02\x02\u01AE\u01AC\x03\x02\x02\x02\u01AF\u01B0\x07\x04\x02" +
		"\x02\u01B0\u01B1\x079\x02\x02\u01B1\u01B2\x07\x05\x02\x02\u01B2Q\x03\x02" +
		"\x02\x02\u01B3\u01B4\x07\x04\x02\x02\u01B4\u01B7\x079\x02\x02\u01B5\u01B6" +
		"\x07\x11\x02\x02\u01B6\u01B8\x079\x02\x02\u01B7\u01B5\x03\x02\x02\x02" +
		"\u01B7\u01B8\x03\x02\x02\x02\u01B8\u01BD\x03\x02\x02\x02\u01B9\u01BA\x07" +
		"\v\x02\x02\u01BA\u01BC\x079\x02\x02\u01BB\u01B9\x03\x02\x02\x02\u01BC" +
		"\u01BF\x03\x02\x02\x02\u01BD\u01BB\x03\x02\x02\x02\u01BD\u01BE\x03\x02" +
		"\x02\x02\u01BE\u01C5\x03\x02\x02\x02\u01BF\u01BD\x03\x02\x02\x02\u01C0" +
		"\u01C1\x07\x06\x02\x02\u01C1\u01C2\x072\x02\x02\u01C2\u01C3\x07\x13\x02" +
		"\x02\u01C3\u01C4\t\x07\x02\x02\u01C4\u01C6\x07\x07\x02\x02\u01C5\u01C0" +
		"\x03\x02\x02\x02\u01C5\u01C6\x03\x02\x02\x02\u01C6\u01C7\x03\x02\x02\x02" +
		"\u01C7\u01C8\x07\x05\x02\x02\u01C8S\x03\x02\x02\x02\u01C9\u01CA\x07\x04" +
		"\x02\x02\u01CA\u01CB\x07<\x02\x02\u01CB\u01CC\x07\x05\x02\x02\u01CCU\x03" +
		"\x02\x02\x02\u01CD\u01CE\x07\x04\x02\x02\u01CE\u01CF\x07\x1C\x02\x02\u01CF" +
		"\u01D0\x074\x02\x02\u01D0\u01D1\x07\x05\x02\x02\u01D1W\x03\x02\x02\x02" +
		"\u01D2\u01DB\x05P)\x02\u01D3\u01DB\x05R*\x02\u01D4\u01DB\x05T+\x02\u01D5" +
		"\u01DB\x05V,\x02\u01D6\u01DB\x07;\x02\x02\u01D7\u01DB\x075\x02\x02\u01D8" +
		"\u01DB\x07:\x02\x02\u01D9\u01DB\x079\x02\x02\u01DA\u01D2\x03\x02\x02\x02" +
		"\u01DA\u01D3\x03\x02\x02\x02\u01DA\u01D4\x03\x02\x02\x02\u01DA\u01D5\x03" +
		"\x02\x02\x02\u01DA\u01D6\x03\x02\x02\x02\u01DA\u01D7\x03\x02\x02\x02\u01DA" +
		"\u01D8\x03\x02\x02\x02\u01DA\u01D9\x03\x02\x02\x02\u01DBY\x03\x02\x02" +
		"\x02(]c{\x86\x88\x95\xA6\xA8\xB4\xB7\xBD\xC6\xC9\xCC\xD7\xDF\xFF\u0102" +
		"\u0105\u010D\u0110\u0117\u0122\u012D\u016F\u0177\u017F\u0187\u018C\u0191" +
		"\u0195\u019B\u01A6\u01AC\u01B7\u01BD\u01C5\u01DA";
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
	public ifStatement(): IfStatementContext | undefined {
		return this.tryGetRuleContext(0, IfStatementContext);
	}
	public functionStatement(): FunctionStatementContext | undefined {
		return this.tryGetRuleContext(0, FunctionStatementContext);
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


export class FunctionStatementContext extends ParserRuleContext {
	public openFormStatement(): OpenFormStatementContext | undefined {
		return this.tryGetRuleContext(0, OpenFormStatementContext);
	}
	public saveFormStatement(): SaveFormStatementContext | undefined {
		return this.tryGetRuleContext(0, SaveFormStatementContext);
	}
	public closeStatement(): CloseStatementContext | undefined {
		return this.tryGetRuleContext(0, CloseStatementContext);
	}
	public refreshStatement(): RefreshStatementContext | undefined {
		return this.tryGetRuleContext(0, RefreshStatementContext);
	}
	public messageStatement(): MessageStatementContext | undefined {
		return this.tryGetRuleContext(0, MessageStatementContext);
	}
	public clickButtonStatement(): ClickButtonStatementContext | undefined {
		return this.tryGetRuleContext(0, ClickButtonStatementContext);
	}
	public getComboDicStatement(): GetComboDicStatementContext | undefined {
		return this.tryGetRuleContext(0, GetComboDicStatementContext);
	}
	public queryDataStatement(): QueryDataStatementContext | undefined {
		return this.tryGetRuleContext(0, QueryDataStatementContext);
	}
	public carryDataStatement(): CarryDataStatementContext | undefined {
		return this.tryGetRuleContext(0, CarryDataStatementContext);
	}
	public sqlExecuteStatement(): SqlExecuteStatementContext | undefined {
		return this.tryGetRuleContext(0, SqlExecuteStatementContext);
	}
	public getCoderStatement(): GetCoderStatementContext | undefined {
		return this.tryGetRuleContext(0, GetCoderStatementContext);
	}
	public setCoderStatement(): SetCoderStatementContext | undefined {
		return this.tryGetRuleContext(0, SetCoderStatementContext);
	}
	public resetCtrlValueStatement(): ResetCtrlValueStatementContext | undefined {
		return this.tryGetRuleContext(0, ResetCtrlValueStatementContext);
	}
	public saveLastValueStatement(): SaveLastValueStatementContext | undefined {
		return this.tryGetRuleContext(0, SaveLastValueStatementContext);
	}
	public loadLastValueStatement(): LoadLastValueStatementContext | undefined {
		return this.tryGetRuleContext(0, LoadLastValueStatementContext);
	}
	public setVisiableStatement(): SetVisiableStatementContext | undefined {
		return this.tryGetRuleContext(0, SetVisiableStatementContext);
	}
	public setEnableStatement(): SetEnableStatementContext | undefined {
		return this.tryGetRuleContext(0, SetEnableStatementContext);
	}
	public setFocusStatement(): SetFocusStatementContext | undefined {
		return this.tryGetRuleContext(0, SetFocusStatementContext);
	}
	public setColorStatement(): SetColorStatementContext | undefined {
		return this.tryGetRuleContext(0, SetColorStatementContext);
	}
	public changeTabStatement(): ChangeTabStatementContext | undefined {
		return this.tryGetRuleContext(0, ChangeTabStatementContext);
	}
	public switchDisplayStatement(): SwitchDisplayStatementContext | undefined {
		return this.tryGetRuleContext(0, SwitchDisplayStatementContext);
	}
	public assignStatement(): AssignStatementContext | undefined {
		return this.tryGetRuleContext(0, AssignStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return kacoParser.RULE_functionStatement; }
	// @Override
	public enterRule(listener: kacoListener): void {
		if (listener.enterFunctionStatement) {
			listener.enterFunctionStatement(this);
		}
	}
	// @Override
	public exitRule(listener: kacoListener): void {
		if (listener.exitFunctionStatement) {
			listener.exitFunctionStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: kacoVisitor<Result>): Result {
		if (visitor.visitFunctionStatement) {
			return visitor.visitFunctionStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfStatementContext extends ParserRuleContext {
	public If(): TerminalNode { return this.getToken(kacoParser.If, 0); }
	public OpenParen(): TerminalNode { return this.getToken(kacoParser.OpenParen, 0); }
	public expressionSequence(): ExpressionSequenceContext {
		return this.getRuleContext(0, ExpressionSequenceContext);
	}
	public CloseParen(): TerminalNode { return this.getToken(kacoParser.CloseParen, 0); }
	public blockStatement(): BlockStatementContext {
		return this.getRuleContext(0, BlockStatementContext);
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


export class BlockStatementContext extends ParserRuleContext {
	public OpenBrace(): TerminalNode { return this.getToken(kacoParser.OpenBrace, 0); }
	public CloseBrace(): TerminalNode { return this.getToken(kacoParser.CloseBrace, 0); }
	public functionStatement(): FunctionStatementContext[];
	public functionStatement(i: number): FunctionStatementContext;
	public functionStatement(i?: number): FunctionStatementContext | FunctionStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunctionStatementContext);
		} else {
			return this.getRuleContext(i, FunctionStatementContext);
		}
	}
	public assignStatement(): AssignStatementContext[];
	public assignStatement(i: number): AssignStatementContext;
	public assignStatement(i?: number): AssignStatementContext | AssignStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AssignStatementContext);
		} else {
			return this.getRuleContext(i, AssignStatementContext);
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


export class ExpressionSequenceContext extends ParserRuleContext {
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return kacoParser.RULE_expressionSequence; }
	// @Override
	public enterRule(listener: kacoListener): void {
		if (listener.enterExpressionSequence) {
			listener.enterExpressionSequence(this);
		}
	}
	// @Override
	public exitRule(listener: kacoListener): void {
		if (listener.exitExpressionSequence) {
			listener.exitExpressionSequence(this);
		}
	}
	// @Override
	public accept<Result>(visitor: kacoVisitor<Result>): Result {
		if (visitor.visitExpressionSequence) {
			return visitor.visitExpressionSequence(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SingleExpressionContext extends ParserRuleContext {
	public commonLiteral(): CommonLiteralContext | undefined {
		return this.tryGetRuleContext(0, CommonLiteralContext);
	}
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public LessThan(): TerminalNode | undefined { return this.tryGetToken(kacoParser.LessThan, 0); }
	public MoreThan(): TerminalNode | undefined { return this.tryGetToken(kacoParser.MoreThan, 0); }
	public LessThanEquals(): TerminalNode | undefined { return this.tryGetToken(kacoParser.LessThanEquals, 0); }
	public GreaterThanEquals(): TerminalNode | undefined { return this.tryGetToken(kacoParser.GreaterThanEquals, 0); }
	public Plus(): TerminalNode | undefined { return this.tryGetToken(kacoParser.Plus, 0); }
	public Minus(): TerminalNode | undefined { return this.tryGetToken(kacoParser.Minus, 0); }
	public Equal(): TerminalNode | undefined { return this.tryGetToken(kacoParser.Equal, 0); }
	public NotEqual(): TerminalNode | undefined { return this.tryGetToken(kacoParser.NotEqual, 0); }
	public And(): TerminalNode | undefined { return this.tryGetToken(kacoParser.And, 0); }
	public Or(): TerminalNode | undefined { return this.tryGetToken(kacoParser.Or, 0); }
	public OpenParen(): TerminalNode | undefined { return this.tryGetToken(kacoParser.OpenParen, 0); }
	public expressionSequence(): ExpressionSequenceContext | undefined {
		return this.tryGetRuleContext(0, ExpressionSequenceContext);
	}
	public CloseParen(): TerminalNode | undefined { return this.tryGetToken(kacoParser.CloseParen, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return kacoParser.RULE_singleExpression; }
	// @Override
	public enterRule(listener: kacoListener): void {
		if (listener.enterSingleExpression) {
			listener.enterSingleExpression(this);
		}
	}
	// @Override
	public exitRule(listener: kacoListener): void {
		if (listener.exitSingleExpression) {
			listener.exitSingleExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: kacoVisitor<Result>): Result {
		if (visitor.visitSingleExpression) {
			return visitor.visitSingleExpression(this);
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


export class QuoteEllipsisExprContext extends ParserRuleContext {
	public OpenParen(): TerminalNode { return this.getToken(kacoParser.OpenParen, 0); }
	public CloseParen(): TerminalNode { return this.getToken(kacoParser.CloseParen, 0); }
	public commonLiteral(): CommonLiteralContext[];
	public commonLiteral(i: number): CommonLiteralContext;
	public commonLiteral(i?: number): CommonLiteralContext | CommonLiteralContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CommonLiteralContext);
		} else {
			return this.getRuleContext(i, CommonLiteralContext);
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


export class QuoteNaturalExprContext extends ParserRuleContext {
	public OpenParen(): TerminalNode { return this.getToken(kacoParser.OpenParen, 0); }
	public CloseParen(): TerminalNode { return this.getToken(kacoParser.CloseParen, 0); }
	public Natural(): TerminalNode | undefined { return this.tryGetToken(kacoParser.Natural, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return kacoParser.RULE_quoteNaturalExpr; }
	// @Override
	public enterRule(listener: kacoListener): void {
		if (listener.enterQuoteNaturalExpr) {
			listener.enterQuoteNaturalExpr(this);
		}
	}
	// @Override
	public exitRule(listener: kacoListener): void {
		if (listener.exitQuoteNaturalExpr) {
			listener.exitQuoteNaturalExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: kacoVisitor<Result>): Result {
		if (visitor.visitQuoteNaturalExpr) {
			return visitor.visitQuoteNaturalExpr(this);
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
	public Natural(): TerminalNode | undefined { return this.tryGetToken(kacoParser.Natural, 0); }
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


export class SaveFormStatementContext extends ParserRuleContext {
	public SaveForm(): TerminalNode { return this.getToken(kacoParser.SaveForm, 0); }
	public quoteEllipsisExpr(): QuoteEllipsisExprContext {
		return this.getRuleContext(0, QuoteEllipsisExprContext);
	}
	public SemiColon(): TerminalNode { return this.getToken(kacoParser.SemiColon, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return kacoParser.RULE_saveFormStatement; }
	// @Override
	public enterRule(listener: kacoListener): void {
		if (listener.enterSaveFormStatement) {
			listener.enterSaveFormStatement(this);
		}
	}
	// @Override
	public exitRule(listener: kacoListener): void {
		if (listener.exitSaveFormStatement) {
			listener.exitSaveFormStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: kacoVisitor<Result>): Result {
		if (visitor.visitSaveFormStatement) {
			return visitor.visitSaveFormStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CloseStatementContext extends ParserRuleContext {
	public Close(): TerminalNode { return this.getToken(kacoParser.Close, 0); }
	public OpenParen(): TerminalNode { return this.getToken(kacoParser.OpenParen, 0); }
	public CloseParen(): TerminalNode { return this.getToken(kacoParser.CloseParen, 0); }
	public SemiColon(): TerminalNode { return this.getToken(kacoParser.SemiColon, 0); }
	public StringLiteral(): TerminalNode | undefined { return this.tryGetToken(kacoParser.StringLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return kacoParser.RULE_closeStatement; }
	// @Override
	public enterRule(listener: kacoListener): void {
		if (listener.enterCloseStatement) {
			listener.enterCloseStatement(this);
		}
	}
	// @Override
	public exitRule(listener: kacoListener): void {
		if (listener.exitCloseStatement) {
			listener.exitCloseStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: kacoVisitor<Result>): Result {
		if (visitor.visitCloseStatement) {
			return visitor.visitCloseStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RefreshStatementContext extends ParserRuleContext {
	public Refresh(): TerminalNode { return this.getToken(kacoParser.Refresh, 0); }
	public OpenParen(): TerminalNode { return this.getToken(kacoParser.OpenParen, 0); }
	public CloseParen(): TerminalNode { return this.getToken(kacoParser.CloseParen, 0); }
	public SemiColon(): TerminalNode { return this.getToken(kacoParser.SemiColon, 0); }
	public StringLiteral(): TerminalNode | undefined { return this.tryGetToken(kacoParser.StringLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return kacoParser.RULE_refreshStatement; }
	// @Override
	public enterRule(listener: kacoListener): void {
		if (listener.enterRefreshStatement) {
			listener.enterRefreshStatement(this);
		}
	}
	// @Override
	public exitRule(listener: kacoListener): void {
		if (listener.exitRefreshStatement) {
			listener.exitRefreshStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: kacoVisitor<Result>): Result {
		if (visitor.visitRefreshStatement) {
			return visitor.visitRefreshStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MessageStatementContext extends ParserRuleContext {
	public MessageBox(): TerminalNode { return this.getToken(kacoParser.MessageBox, 0); }
	public OpenParen(): TerminalNode { return this.getToken(kacoParser.OpenParen, 0); }
	public MessageLiteral(): TerminalNode { return this.getToken(kacoParser.MessageLiteral, 0); }
	public Comma(): TerminalNode { return this.getToken(kacoParser.Comma, 0); }
	public StringLiteral(): TerminalNode { return this.getToken(kacoParser.StringLiteral, 0); }
	public CloseParen(): TerminalNode { return this.getToken(kacoParser.CloseParen, 0); }
	public SemiColon(): TerminalNode { return this.getToken(kacoParser.SemiColon, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return kacoParser.RULE_messageStatement; }
	// @Override
	public enterRule(listener: kacoListener): void {
		if (listener.enterMessageStatement) {
			listener.enterMessageStatement(this);
		}
	}
	// @Override
	public exitRule(listener: kacoListener): void {
		if (listener.exitMessageStatement) {
			listener.exitMessageStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: kacoVisitor<Result>): Result {
		if (visitor.visitMessageStatement) {
			return visitor.visitMessageStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClickButtonStatementContext extends ParserRuleContext {
	public ClickButton(): TerminalNode { return this.getToken(kacoParser.ClickButton, 0); }
	public OpenParen(): TerminalNode { return this.getToken(kacoParser.OpenParen, 0); }
	public ctrlQuoteLiteral(): CtrlQuoteLiteralContext {
		return this.getRuleContext(0, CtrlQuoteLiteralContext);
	}
	public CloseParen(): TerminalNode { return this.getToken(kacoParser.CloseParen, 0); }
	public SemiColon(): TerminalNode { return this.getToken(kacoParser.SemiColon, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return kacoParser.RULE_clickButtonStatement; }
	// @Override
	public enterRule(listener: kacoListener): void {
		if (listener.enterClickButtonStatement) {
			listener.enterClickButtonStatement(this);
		}
	}
	// @Override
	public exitRule(listener: kacoListener): void {
		if (listener.exitClickButtonStatement) {
			listener.exitClickButtonStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: kacoVisitor<Result>): Result {
		if (visitor.visitClickButtonStatement) {
			return visitor.visitClickButtonStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GetComboDicStatementContext extends ParserRuleContext {
	public GetComboDic(): TerminalNode { return this.getToken(kacoParser.GetComboDic, 0); }
	public OpenParen(): TerminalNode { return this.getToken(kacoParser.OpenParen, 0); }
	public ctrlQuoteLiteral(): CtrlQuoteLiteralContext {
		return this.getRuleContext(0, CtrlQuoteLiteralContext);
	}
	public Comma(): TerminalNode { return this.getToken(kacoParser.Comma, 0); }
	public SqlLiteral(): TerminalNode { return this.getToken(kacoParser.SqlLiteral, 0); }
	public CloseParen(): TerminalNode { return this.getToken(kacoParser.CloseParen, 0); }
	public SemiColon(): TerminalNode { return this.getToken(kacoParser.SemiColon, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return kacoParser.RULE_getComboDicStatement; }
	// @Override
	public enterRule(listener: kacoListener): void {
		if (listener.enterGetComboDicStatement) {
			listener.enterGetComboDicStatement(this);
		}
	}
	// @Override
	public exitRule(listener: kacoListener): void {
		if (listener.exitGetComboDicStatement) {
			listener.exitGetComboDicStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: kacoVisitor<Result>): Result {
		if (visitor.visitGetComboDicStatement) {
			return visitor.visitGetComboDicStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QueryDataStatementContext extends ParserRuleContext {
	public QueryData(): TerminalNode { return this.getToken(kacoParser.QueryData, 0); }
	public ctrlQuoteLiteral(): CtrlQuoteLiteralContext[];
	public ctrlQuoteLiteral(i: number): CtrlQuoteLiteralContext;
	public ctrlQuoteLiteral(i?: number): CtrlQuoteLiteralContext | CtrlQuoteLiteralContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CtrlQuoteLiteralContext);
		} else {
			return this.getRuleContext(i, CtrlQuoteLiteralContext);
		}
	}
	public Comma(): TerminalNode { return this.getToken(kacoParser.Comma, 0); }
	public SemiColon(): TerminalNode { return this.getToken(kacoParser.SemiColon, 0); }
	public quoteEllipsisExpr(): QuoteEllipsisExprContext | undefined {
		return this.tryGetRuleContext(0, QuoteEllipsisExprContext);
	}
	public quoteNaturalExpr(): QuoteNaturalExprContext[];
	public quoteNaturalExpr(i: number): QuoteNaturalExprContext;
	public quoteNaturalExpr(i?: number): QuoteNaturalExprContext | QuoteNaturalExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(QuoteNaturalExprContext);
		} else {
			return this.getRuleContext(i, QuoteNaturalExprContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return kacoParser.RULE_queryDataStatement; }
	// @Override
	public enterRule(listener: kacoListener): void {
		if (listener.enterQueryDataStatement) {
			listener.enterQueryDataStatement(this);
		}
	}
	// @Override
	public exitRule(listener: kacoListener): void {
		if (listener.exitQueryDataStatement) {
			listener.exitQueryDataStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: kacoVisitor<Result>): Result {
		if (visitor.visitQueryDataStatement) {
			return visitor.visitQueryDataStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CarryDataStatementContext extends ParserRuleContext {
	public CarryData(): TerminalNode { return this.getToken(kacoParser.CarryData, 0); }
	public ctrlQuoteLiteral(): CtrlQuoteLiteralContext[];
	public ctrlQuoteLiteral(i: number): CtrlQuoteLiteralContext;
	public ctrlQuoteLiteral(i?: number): CtrlQuoteLiteralContext | CtrlQuoteLiteralContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CtrlQuoteLiteralContext);
		} else {
			return this.getRuleContext(i, CtrlQuoteLiteralContext);
		}
	}
	public SemiColon(): TerminalNode { return this.getToken(kacoParser.SemiColon, 0); }
	public OpenParen(): TerminalNode | undefined { return this.tryGetToken(kacoParser.OpenParen, 0); }
	public CloseParen(): TerminalNode | undefined { return this.tryGetToken(kacoParser.CloseParen, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return kacoParser.RULE_carryDataStatement; }
	// @Override
	public enterRule(listener: kacoListener): void {
		if (listener.enterCarryDataStatement) {
			listener.enterCarryDataStatement(this);
		}
	}
	// @Override
	public exitRule(listener: kacoListener): void {
		if (listener.exitCarryDataStatement) {
			listener.exitCarryDataStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: kacoVisitor<Result>): Result {
		if (visitor.visitCarryDataStatement) {
			return visitor.visitCarryDataStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SqlExecuteStatementContext extends ParserRuleContext {
	public SQLExecute(): TerminalNode { return this.getToken(kacoParser.SQLExecute, 0); }
	public OpenParen(): TerminalNode { return this.getToken(kacoParser.OpenParen, 0); }
	public CloseParen(): TerminalNode { return this.getToken(kacoParser.CloseParen, 0); }
	public SemiColon(): TerminalNode { return this.getToken(kacoParser.SemiColon, 0); }
	public SqlLiteral(): TerminalNode | undefined { return this.tryGetToken(kacoParser.SqlLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return kacoParser.RULE_sqlExecuteStatement; }
	// @Override
	public enterRule(listener: kacoListener): void {
		if (listener.enterSqlExecuteStatement) {
			listener.enterSqlExecuteStatement(this);
		}
	}
	// @Override
	public exitRule(listener: kacoListener): void {
		if (listener.exitSqlExecuteStatement) {
			listener.exitSqlExecuteStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: kacoVisitor<Result>): Result {
		if (visitor.visitSqlExecuteStatement) {
			return visitor.visitSqlExecuteStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GetCoderStatementContext extends ParserRuleContext {
	public GetCoder(): TerminalNode { return this.getToken(kacoParser.GetCoder, 0); }
	public OpenParen(): TerminalNode { return this.getToken(kacoParser.OpenParen, 0); }
	public CloseParen(): TerminalNode { return this.getToken(kacoParser.CloseParen, 0); }
	public SemiColon(): TerminalNode { return this.getToken(kacoParser.SemiColon, 0); }
	public ctrlQuoteLiteral(): CtrlQuoteLiteralContext | undefined {
		return this.tryGetRuleContext(0, CtrlQuoteLiteralContext);
	}
	public Comma(): TerminalNode | undefined { return this.tryGetToken(kacoParser.Comma, 0); }
	public CoderLiteral(): TerminalNode | undefined { return this.tryGetToken(kacoParser.CoderLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return kacoParser.RULE_getCoderStatement; }
	// @Override
	public enterRule(listener: kacoListener): void {
		if (listener.enterGetCoderStatement) {
			listener.enterGetCoderStatement(this);
		}
	}
	// @Override
	public exitRule(listener: kacoListener): void {
		if (listener.exitGetCoderStatement) {
			listener.exitGetCoderStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: kacoVisitor<Result>): Result {
		if (visitor.visitGetCoderStatement) {
			return visitor.visitGetCoderStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SetCoderStatementContext extends ParserRuleContext {
	public SetCoder(): TerminalNode { return this.getToken(kacoParser.SetCoder, 0); }
	public OpenParen(): TerminalNode { return this.getToken(kacoParser.OpenParen, 0); }
	public CloseParen(): TerminalNode { return this.getToken(kacoParser.CloseParen, 0); }
	public SemiColon(): TerminalNode { return this.getToken(kacoParser.SemiColon, 0); }
	public ctrlQuoteLiteral(): CtrlQuoteLiteralContext | undefined {
		return this.tryGetRuleContext(0, CtrlQuoteLiteralContext);
	}
	public Comma(): TerminalNode | undefined { return this.tryGetToken(kacoParser.Comma, 0); }
	public CoderLiteral(): TerminalNode | undefined { return this.tryGetToken(kacoParser.CoderLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return kacoParser.RULE_setCoderStatement; }
	// @Override
	public enterRule(listener: kacoListener): void {
		if (listener.enterSetCoderStatement) {
			listener.enterSetCoderStatement(this);
		}
	}
	// @Override
	public exitRule(listener: kacoListener): void {
		if (listener.exitSetCoderStatement) {
			listener.exitSetCoderStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: kacoVisitor<Result>): Result {
		if (visitor.visitSetCoderStatement) {
			return visitor.visitSetCoderStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ResetCtrlValueStatementContext extends ParserRuleContext {
	public ResetCtrlValue(): TerminalNode { return this.getToken(kacoParser.ResetCtrlValue, 0); }
	public quoteEllipsisExpr(): QuoteEllipsisExprContext {
		return this.getRuleContext(0, QuoteEllipsisExprContext);
	}
	public SemiColon(): TerminalNode { return this.getToken(kacoParser.SemiColon, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return kacoParser.RULE_resetCtrlValueStatement; }
	// @Override
	public enterRule(listener: kacoListener): void {
		if (listener.enterResetCtrlValueStatement) {
			listener.enterResetCtrlValueStatement(this);
		}
	}
	// @Override
	public exitRule(listener: kacoListener): void {
		if (listener.exitResetCtrlValueStatement) {
			listener.exitResetCtrlValueStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: kacoVisitor<Result>): Result {
		if (visitor.visitResetCtrlValueStatement) {
			return visitor.visitResetCtrlValueStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SaveLastValueStatementContext extends ParserRuleContext {
	public SaveLastValue(): TerminalNode { return this.getToken(kacoParser.SaveLastValue, 0); }
	public quoteEllipsisExpr(): QuoteEllipsisExprContext {
		return this.getRuleContext(0, QuoteEllipsisExprContext);
	}
	public SemiColon(): TerminalNode { return this.getToken(kacoParser.SemiColon, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return kacoParser.RULE_saveLastValueStatement; }
	// @Override
	public enterRule(listener: kacoListener): void {
		if (listener.enterSaveLastValueStatement) {
			listener.enterSaveLastValueStatement(this);
		}
	}
	// @Override
	public exitRule(listener: kacoListener): void {
		if (listener.exitSaveLastValueStatement) {
			listener.exitSaveLastValueStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: kacoVisitor<Result>): Result {
		if (visitor.visitSaveLastValueStatement) {
			return visitor.visitSaveLastValueStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LoadLastValueStatementContext extends ParserRuleContext {
	public LoadLastValue(): TerminalNode { return this.getToken(kacoParser.LoadLastValue, 0); }
	public quoteEllipsisExpr(): QuoteEllipsisExprContext {
		return this.getRuleContext(0, QuoteEllipsisExprContext);
	}
	public SemiColon(): TerminalNode { return this.getToken(kacoParser.SemiColon, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return kacoParser.RULE_loadLastValueStatement; }
	// @Override
	public enterRule(listener: kacoListener): void {
		if (listener.enterLoadLastValueStatement) {
			listener.enterLoadLastValueStatement(this);
		}
	}
	// @Override
	public exitRule(listener: kacoListener): void {
		if (listener.exitLoadLastValueStatement) {
			listener.exitLoadLastValueStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: kacoVisitor<Result>): Result {
		if (visitor.visitLoadLastValueStatement) {
			return visitor.visitLoadLastValueStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SetVisiableStatementContext extends ParserRuleContext {
	public SetVisiable(): TerminalNode { return this.getToken(kacoParser.SetVisiable, 0); }
	public OpenParen(): TerminalNode { return this.getToken(kacoParser.OpenParen, 0); }
	public ctrlQuoteLiteral(): CtrlQuoteLiteralContext {
		return this.getRuleContext(0, CtrlQuoteLiteralContext);
	}
	public Comma(): TerminalNode { return this.getToken(kacoParser.Comma, 0); }
	public Natural(): TerminalNode { return this.getToken(kacoParser.Natural, 0); }
	public CloseParen(): TerminalNode { return this.getToken(kacoParser.CloseParen, 0); }
	public SemiColon(): TerminalNode { return this.getToken(kacoParser.SemiColon, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return kacoParser.RULE_setVisiableStatement; }
	// @Override
	public enterRule(listener: kacoListener): void {
		if (listener.enterSetVisiableStatement) {
			listener.enterSetVisiableStatement(this);
		}
	}
	// @Override
	public exitRule(listener: kacoListener): void {
		if (listener.exitSetVisiableStatement) {
			listener.exitSetVisiableStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: kacoVisitor<Result>): Result {
		if (visitor.visitSetVisiableStatement) {
			return visitor.visitSetVisiableStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SetEnableStatementContext extends ParserRuleContext {
	public SetEnable(): TerminalNode { return this.getToken(kacoParser.SetEnable, 0); }
	public OpenParen(): TerminalNode { return this.getToken(kacoParser.OpenParen, 0); }
	public ctrlQuoteLiteral(): CtrlQuoteLiteralContext {
		return this.getRuleContext(0, CtrlQuoteLiteralContext);
	}
	public Comma(): TerminalNode { return this.getToken(kacoParser.Comma, 0); }
	public Natural(): TerminalNode { return this.getToken(kacoParser.Natural, 0); }
	public CloseParen(): TerminalNode { return this.getToken(kacoParser.CloseParen, 0); }
	public SemiColon(): TerminalNode { return this.getToken(kacoParser.SemiColon, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return kacoParser.RULE_setEnableStatement; }
	// @Override
	public enterRule(listener: kacoListener): void {
		if (listener.enterSetEnableStatement) {
			listener.enterSetEnableStatement(this);
		}
	}
	// @Override
	public exitRule(listener: kacoListener): void {
		if (listener.exitSetEnableStatement) {
			listener.exitSetEnableStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: kacoVisitor<Result>): Result {
		if (visitor.visitSetEnableStatement) {
			return visitor.visitSetEnableStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SetFocusStatementContext extends ParserRuleContext {
	public SetFocus(): TerminalNode { return this.getToken(kacoParser.SetFocus, 0); }
	public OpenParen(): TerminalNode { return this.getToken(kacoParser.OpenParen, 0); }
	public ctrlQuoteLiteral(): CtrlQuoteLiteralContext {
		return this.getRuleContext(0, CtrlQuoteLiteralContext);
	}
	public CloseParen(): TerminalNode { return this.getToken(kacoParser.CloseParen, 0); }
	public SemiColon(): TerminalNode { return this.getToken(kacoParser.SemiColon, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return kacoParser.RULE_setFocusStatement; }
	// @Override
	public enterRule(listener: kacoListener): void {
		if (listener.enterSetFocusStatement) {
			listener.enterSetFocusStatement(this);
		}
	}
	// @Override
	public exitRule(listener: kacoListener): void {
		if (listener.exitSetFocusStatement) {
			listener.exitSetFocusStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: kacoVisitor<Result>): Result {
		if (visitor.visitSetFocusStatement) {
			return visitor.visitSetFocusStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SetColorStatementContext extends ParserRuleContext {
	public SetColor(): TerminalNode { return this.getToken(kacoParser.SetColor, 0); }
	public OpenParen(): TerminalNode { return this.getToken(kacoParser.OpenParen, 0); }
	public ctrlQuoteLiteral(): CtrlQuoteLiteralContext {
		return this.getRuleContext(0, CtrlQuoteLiteralContext);
	}
	public Comma(): TerminalNode { return this.getToken(kacoParser.Comma, 0); }
	public CloseParen(): TerminalNode { return this.getToken(kacoParser.CloseParen, 0); }
	public SemiColon(): TerminalNode { return this.getToken(kacoParser.SemiColon, 0); }
	public HexLiteral(): TerminalNode | undefined { return this.tryGetToken(kacoParser.HexLiteral, 0); }
	public StringLiteral(): TerminalNode | undefined { return this.tryGetToken(kacoParser.StringLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return kacoParser.RULE_setColorStatement; }
	// @Override
	public enterRule(listener: kacoListener): void {
		if (listener.enterSetColorStatement) {
			listener.enterSetColorStatement(this);
		}
	}
	// @Override
	public exitRule(listener: kacoListener): void {
		if (listener.exitSetColorStatement) {
			listener.exitSetColorStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: kacoVisitor<Result>): Result {
		if (visitor.visitSetColorStatement) {
			return visitor.visitSetColorStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ChangeTabStatementContext extends ParserRuleContext {
	public ChangeTab(): TerminalNode { return this.getToken(kacoParser.ChangeTab, 0); }
	public OpenParen(): TerminalNode { return this.getToken(kacoParser.OpenParen, 0); }
	public ctrlQuoteLiteral(): CtrlQuoteLiteralContext {
		return this.getRuleContext(0, CtrlQuoteLiteralContext);
	}
	public Comma(): TerminalNode { return this.getToken(kacoParser.Comma, 0); }
	public Natural(): TerminalNode { return this.getToken(kacoParser.Natural, 0); }
	public CloseParen(): TerminalNode { return this.getToken(kacoParser.CloseParen, 0); }
	public SemiColon(): TerminalNode { return this.getToken(kacoParser.SemiColon, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return kacoParser.RULE_changeTabStatement; }
	// @Override
	public enterRule(listener: kacoListener): void {
		if (listener.enterChangeTabStatement) {
			listener.enterChangeTabStatement(this);
		}
	}
	// @Override
	public exitRule(listener: kacoListener): void {
		if (listener.exitChangeTabStatement) {
			listener.exitChangeTabStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: kacoVisitor<Result>): Result {
		if (visitor.visitChangeTabStatement) {
			return visitor.visitChangeTabStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SwitchDisplayStatementContext extends ParserRuleContext {
	public SwitchDisplay(): TerminalNode { return this.getToken(kacoParser.SwitchDisplay, 0); }
	public quoteEllipsisExpr(): QuoteEllipsisExprContext {
		return this.getRuleContext(0, QuoteEllipsisExprContext);
	}
	public SemiColon(): TerminalNode { return this.getToken(kacoParser.SemiColon, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return kacoParser.RULE_switchDisplayStatement; }
	// @Override
	public enterRule(listener: kacoListener): void {
		if (listener.enterSwitchDisplayStatement) {
			listener.enterSwitchDisplayStatement(this);
		}
	}
	// @Override
	public exitRule(listener: kacoListener): void {
		if (listener.exitSwitchDisplayStatement) {
			listener.exitSwitchDisplayStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: kacoVisitor<Result>): Result {
		if (visitor.visitSwitchDisplayStatement) {
			return visitor.visitSwitchDisplayStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public subTerm(): SubTermContext {
		return this.getRuleContext(0, SubTermContext);
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


export class SubTermContext extends ParserRuleContext {
	public addTerm(): AddTermContext[];
	public addTerm(i: number): AddTermContext;
	public addTerm(i?: number): AddTermContext | AddTermContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AddTermContext);
		} else {
			return this.getRuleContext(i, AddTermContext);
		}
	}
	public Minus(): TerminalNode[];
	public Minus(i: number): TerminalNode;
	public Minus(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(kacoParser.Minus);
		} else {
			return this.getToken(kacoParser.Minus, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return kacoParser.RULE_subTerm; }
	// @Override
	public enterRule(listener: kacoListener): void {
		if (listener.enterSubTerm) {
			listener.enterSubTerm(this);
		}
	}
	// @Override
	public exitRule(listener: kacoListener): void {
		if (listener.exitSubTerm) {
			listener.exitSubTerm(this);
		}
	}
	// @Override
	public accept<Result>(visitor: kacoVisitor<Result>): Result {
		if (visitor.visitSubTerm) {
			return visitor.visitSubTerm(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AddTermContext extends ParserRuleContext {
	public divTerm(): DivTermContext[];
	public divTerm(i: number): DivTermContext;
	public divTerm(i?: number): DivTermContext | DivTermContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DivTermContext);
		} else {
			return this.getRuleContext(i, DivTermContext);
		}
	}
	public Plus(): TerminalNode[];
	public Plus(i: number): TerminalNode;
	public Plus(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(kacoParser.Plus);
		} else {
			return this.getToken(kacoParser.Plus, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return kacoParser.RULE_addTerm; }
	// @Override
	public enterRule(listener: kacoListener): void {
		if (listener.enterAddTerm) {
			listener.enterAddTerm(this);
		}
	}
	// @Override
	public exitRule(listener: kacoListener): void {
		if (listener.exitAddTerm) {
			listener.exitAddTerm(this);
		}
	}
	// @Override
	public accept<Result>(visitor: kacoVisitor<Result>): Result {
		if (visitor.visitAddTerm) {
			return visitor.visitAddTerm(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DivTermContext extends ParserRuleContext {
	public mulTerm(): MulTermContext[];
	public mulTerm(i: number): MulTermContext;
	public mulTerm(i?: number): MulTermContext | MulTermContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MulTermContext);
		} else {
			return this.getRuleContext(i, MulTermContext);
		}
	}
	public Divide(): TerminalNode[];
	public Divide(i: number): TerminalNode;
	public Divide(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(kacoParser.Divide);
		} else {
			return this.getToken(kacoParser.Divide, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return kacoParser.RULE_divTerm; }
	// @Override
	public enterRule(listener: kacoListener): void {
		if (listener.enterDivTerm) {
			listener.enterDivTerm(this);
		}
	}
	// @Override
	public exitRule(listener: kacoListener): void {
		if (listener.exitDivTerm) {
			listener.exitDivTerm(this);
		}
	}
	// @Override
	public accept<Result>(visitor: kacoVisitor<Result>): Result {
		if (visitor.visitDivTerm) {
			return visitor.visitDivTerm(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MulTermContext extends ParserRuleContext {
	public parnTerm(): ParnTermContext[];
	public parnTerm(i: number): ParnTermContext;
	public parnTerm(i?: number): ParnTermContext | ParnTermContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParnTermContext);
		} else {
			return this.getRuleContext(i, ParnTermContext);
		}
	}
	public Multiply(): TerminalNode[];
	public Multiply(i: number): TerminalNode;
	public Multiply(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(kacoParser.Multiply);
		} else {
			return this.getToken(kacoParser.Multiply, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return kacoParser.RULE_mulTerm; }
	// @Override
	public enterRule(listener: kacoListener): void {
		if (listener.enterMulTerm) {
			listener.enterMulTerm(this);
		}
	}
	// @Override
	public exitRule(listener: kacoListener): void {
		if (listener.exitMulTerm) {
			listener.exitMulTerm(this);
		}
	}
	// @Override
	public accept<Result>(visitor: kacoVisitor<Result>): Result {
		if (visitor.visitMulTerm) {
			return visitor.visitMulTerm(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParnTermContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public commonLiteral(): CommonLiteralContext[];
	public commonLiteral(i: number): CommonLiteralContext;
	public commonLiteral(i?: number): CommonLiteralContext | CommonLiteralContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CommonLiteralContext);
		} else {
			return this.getRuleContext(i, CommonLiteralContext);
		}
	}
	public SqlLiteral(): TerminalNode[];
	public SqlLiteral(i: number): TerminalNode;
	public SqlLiteral(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(kacoParser.SqlLiteral);
		} else {
			return this.getToken(kacoParser.SqlLiteral, i);
		}
	}
	public OpenParen(): TerminalNode | undefined { return this.tryGetToken(kacoParser.OpenParen, 0); }
	public CloseParen(): TerminalNode | undefined { return this.tryGetToken(kacoParser.CloseParen, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return kacoParser.RULE_parnTerm; }
	// @Override
	public enterRule(listener: kacoListener): void {
		if (listener.enterParnTerm) {
			listener.enterParnTerm(this);
		}
	}
	// @Override
	public exitRule(listener: kacoListener): void {
		if (listener.exitParnTerm) {
			listener.exitParnTerm(this);
		}
	}
	// @Override
	public accept<Result>(visitor: kacoVisitor<Result>): Result {
		if (visitor.visitParnTerm) {
			return visitor.visitParnTerm(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignContext extends ParserRuleContext {
	public assignStart(): AssignStartContext {
		return this.getRuleContext(0, AssignStartContext);
	}
	public Assign(): TerminalNode { return this.getToken(kacoParser.Assign, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
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


export class AssignStartContext extends ParserRuleContext {
	public ctrlQuoteLiteral(): CtrlQuoteLiteralContext[];
	public ctrlQuoteLiteral(i: number): CtrlQuoteLiteralContext;
	public ctrlQuoteLiteral(i?: number): CtrlQuoteLiteralContext | CtrlQuoteLiteralContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CtrlQuoteLiteralContext);
		} else {
			return this.getRuleContext(i, CtrlQuoteLiteralContext);
		}
	}
	public Dot(): TerminalNode | undefined { return this.tryGetToken(kacoParser.Dot, 0); }
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
	public get ruleIndex(): number { return kacoParser.RULE_assignStart; }
	// @Override
	public enterRule(listener: kacoListener): void {
		if (listener.enterAssignStart) {
			listener.enterAssignStart(this);
		}
	}
	// @Override
	public exitRule(listener: kacoListener): void {
		if (listener.exitAssignStart) {
			listener.exitAssignStart(this);
		}
	}
	// @Override
	public accept<Result>(visitor: kacoVisitor<Result>): Result {
		if (visitor.visitAssignStart) {
			return visitor.visitAssignStart(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CtrlQuoteLiteralContext extends ParserRuleContext {
	public OpenBracket(): TerminalNode { return this.getToken(kacoParser.OpenBracket, 0); }
	public StringLiteral(): TerminalNode { return this.getToken(kacoParser.StringLiteral, 0); }
	public CloseBracket(): TerminalNode { return this.getToken(kacoParser.CloseBracket, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return kacoParser.RULE_ctrlQuoteLiteral; }
	// @Override
	public enterRule(listener: kacoListener): void {
		if (listener.enterCtrlQuoteLiteral) {
			listener.enterCtrlQuoteLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: kacoListener): void {
		if (listener.exitCtrlQuoteLiteral) {
			listener.exitCtrlQuoteLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: kacoVisitor<Result>): Result {
		if (visitor.visitCtrlQuoteLiteral) {
			return visitor.visitCtrlQuoteLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CtrlQuoteDotLiteralContext extends ParserRuleContext {
	public OpenBracket(): TerminalNode { return this.getToken(kacoParser.OpenBracket, 0); }
	public StringLiteral(): TerminalNode[];
	public StringLiteral(i: number): TerminalNode;
	public StringLiteral(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(kacoParser.StringLiteral);
		} else {
			return this.getToken(kacoParser.StringLiteral, i);
		}
	}
	public CloseBracket(): TerminalNode { return this.getToken(kacoParser.CloseBracket, 0); }
	public Dot(): TerminalNode | undefined { return this.tryGetToken(kacoParser.Dot, 0); }
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(kacoParser.Comma);
		} else {
			return this.getToken(kacoParser.Comma, i);
		}
	}
	public OpenParen(): TerminalNode | undefined { return this.tryGetToken(kacoParser.OpenParen, 0); }
	public Selected(): TerminalNode | undefined { return this.tryGetToken(kacoParser.Selected, 0); }
	public Equal(): TerminalNode | undefined { return this.tryGetToken(kacoParser.Equal, 0); }
	public CloseParen(): TerminalNode | undefined { return this.tryGetToken(kacoParser.CloseParen, 0); }
	public Multiply(): TerminalNode | undefined { return this.tryGetToken(kacoParser.Multiply, 0); }
	public Natural(): TerminalNode | undefined { return this.tryGetToken(kacoParser.Natural, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return kacoParser.RULE_ctrlQuoteDotLiteral; }
	// @Override
	public enterRule(listener: kacoListener): void {
		if (listener.enterCtrlQuoteDotLiteral) {
			listener.enterCtrlQuoteDotLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: kacoListener): void {
		if (listener.exitCtrlQuoteDotLiteral) {
			listener.exitCtrlQuoteDotLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: kacoVisitor<Result>): Result {
		if (visitor.visitCtrlQuoteDotLiteral) {
			return visitor.visitCtrlQuoteDotLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CtrlQuoteParamLiteralContext extends ParserRuleContext {
	public OpenBracket(): TerminalNode { return this.getToken(kacoParser.OpenBracket, 0); }
	public ParamLiteral(): TerminalNode { return this.getToken(kacoParser.ParamLiteral, 0); }
	public CloseBracket(): TerminalNode { return this.getToken(kacoParser.CloseBracket, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return kacoParser.RULE_ctrlQuoteParamLiteral; }
	// @Override
	public enterRule(listener: kacoListener): void {
		if (listener.enterCtrlQuoteParamLiteral) {
			listener.enterCtrlQuoteParamLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: kacoListener): void {
		if (listener.exitCtrlQuoteParamLiteral) {
			listener.exitCtrlQuoteParamLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: kacoVisitor<Result>): Result {
		if (visitor.visitCtrlQuoteParamLiteral) {
			return visitor.visitCtrlQuoteParamLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CtrlConstantLiteralContext extends ParserRuleContext {
	public OpenBracket(): TerminalNode { return this.getToken(kacoParser.OpenBracket, 0); }
	public Const(): TerminalNode { return this.getToken(kacoParser.Const, 0); }
	public Constant(): TerminalNode { return this.getToken(kacoParser.Constant, 0); }
	public CloseBracket(): TerminalNode { return this.getToken(kacoParser.CloseBracket, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return kacoParser.RULE_ctrlConstantLiteral; }
	// @Override
	public enterRule(listener: kacoListener): void {
		if (listener.enterCtrlConstantLiteral) {
			listener.enterCtrlConstantLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: kacoListener): void {
		if (listener.exitCtrlConstantLiteral) {
			listener.exitCtrlConstantLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: kacoVisitor<Result>): Result {
		if (visitor.visitCtrlConstantLiteral) {
			return visitor.visitCtrlConstantLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CommonLiteralContext extends ParserRuleContext {
	public ctrlQuoteLiteral(): CtrlQuoteLiteralContext | undefined {
		return this.tryGetRuleContext(0, CtrlQuoteLiteralContext);
	}
	public ctrlQuoteDotLiteral(): CtrlQuoteDotLiteralContext | undefined {
		return this.tryGetRuleContext(0, CtrlQuoteDotLiteralContext);
	}
	public ctrlQuoteParamLiteral(): CtrlQuoteParamLiteralContext | undefined {
		return this.tryGetRuleContext(0, CtrlQuoteParamLiteralContext);
	}
	public ctrlConstantLiteral(): CtrlConstantLiteralContext | undefined {
		return this.tryGetRuleContext(0, CtrlConstantLiteralContext);
	}
	public DecimalLiteral(): TerminalNode | undefined { return this.tryGetToken(kacoParser.DecimalLiteral, 0); }
	public Natural(): TerminalNode | undefined { return this.tryGetToken(kacoParser.Natural, 0); }
	public BooleanLiteral(): TerminalNode | undefined { return this.tryGetToken(kacoParser.BooleanLiteral, 0); }
	public StringLiteral(): TerminalNode | undefined { return this.tryGetToken(kacoParser.StringLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return kacoParser.RULE_commonLiteral; }
	// @Override
	public enterRule(listener: kacoListener): void {
		if (listener.enterCommonLiteral) {
			listener.enterCommonLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: kacoListener): void {
		if (listener.exitCommonLiteral) {
			listener.exitCommonLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: kacoVisitor<Result>): Result {
		if (visitor.visitCommonLiteral) {
			return visitor.visitCommonLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


