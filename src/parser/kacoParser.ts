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
	public static readonly OpenBracket = 1;
	public static readonly CloseBracket = 2;
	public static readonly OpenParen = 3;
	public static readonly CloseParen = 4;
	public static readonly OpenBrace = 5;
	public static readonly CloseBrace = 6;
	public static readonly SemiColon = 7;
	public static readonly Comma = 8;
	public static readonly Plus = 9;
	public static readonly Minus = 10;
	public static readonly Multiply = 11;
	public static readonly Divide = 12;
	public static readonly Assign = 13;
	public static readonly Dot = 14;
	public static readonly Ellipsis = 15;
	public static readonly Equal = 16;
	public static readonly NotEqual = 17;
	public static readonly LessThan = 18;
	public static readonly MoreThan = 19;
	public static readonly LessThanEquals = 20;
	public static readonly GreaterThanEquals = 21;
	public static readonly And = 22;
	public static readonly Or = 23;
	public static readonly Sql = 24;
	public static readonly Const = 25;
	public static readonly OpenForm = 26;
	public static readonly SaveForm = 27;
	public static readonly Close = 28;
	public static readonly Refresh = 29;
	public static readonly MessageBox = 30;
	public static readonly ClickButton = 31;
	public static readonly GetComboDic = 32;
	public static readonly QueryData = 33;
	public static readonly CarryData = 34;
	public static readonly SQLExecute = 35;
	public static readonly GetCoder = 36;
	public static readonly SetCoder = 37;
	public static readonly ResetCtrlValue = 38;
	public static readonly SaveLastValue = 39;
	public static readonly LoadLastValue = 40;
	public static readonly SetVisiable = 41;
	public static readonly SetEnable = 42;
	public static readonly SetFocus = 43;
	public static readonly SetColor = 44;
	public static readonly ChangeTab = 45;
	public static readonly SwitchDisplay = 46;
	public static readonly StringSub = 47;
	public static readonly StringLen = 48;
	public static readonly StringStr = 49;
	public static readonly StringRep = 50;
	public static readonly StringCat = 51;
	public static readonly EncodeBase64 = 52;
	public static readonly DecodeBase64 = 53;
	public static readonly GetGridRows = 54;
	public static readonly AddGridRow = 55;
	public static readonly DelGridRow = 56;
	public static readonly SelGridRow = 57;
	public static readonly ExportXls = 58;
	public static readonly ImportXls = 59;
	public static readonly FlowTran = 60;
	public static readonly FlowSave = 61;
	public static readonly FlowFresh = 62;
	public static readonly FlowSend = 63;
	public static readonly FlowBack = 64;
	public static readonly FlowBack2 = 65;
	public static readonly FlowMend = 66;
	public static readonly FlowPrint = 67;
	public static readonly FlowForm = 68;
	public static readonly FlowQuery = 69;
	public static readonly TaskHang = 70;
	public static readonly TaskFree = 71;
	public static readonly FlowTest = 72;
	public static readonly FlowDrop = 73;
	public static readonly Selected = 74;
	public static readonly If = 75;
	public static readonly While = 76;
	public static readonly Constant = 77;
	public static readonly Natural = 78;
	public static readonly MessageLiteral = 79;
	public static readonly HexLiteral = 80;
	public static readonly StringLiteral = 81;
	public static readonly BooleanLiteral = 82;
	public static readonly NullLiteral = 83;
	public static readonly DecimalLiteral = 84;
	public static readonly ParamLiteral = 85;
	public static readonly SqlLiteral = 86;
	public static readonly Decimal = 87;
	public static readonly NonZeroDigit = 88;
	public static readonly DigitChar = 89;
	public static readonly UpperCaseChar = 90;
	public static readonly LowerCaseChar = 91;
	public static readonly WS = 92;
	public static readonly COMMENT = 93;
	public static readonly WHITESPACE = 94;
	public static readonly RULE_program = 0;
	public static readonly RULE_statement = 1;
	public static readonly RULE_functionStatement = 2;
	public static readonly RULE_ifStatement = 3;
	public static readonly RULE_whileStatement = 4;
	public static readonly RULE_blockStatement = 5;
	public static readonly RULE_expressionSequence = 6;
	public static readonly RULE_singleExpression = 7;
	public static readonly RULE_assignStatement = 8;
	public static readonly RULE_quoteEllipsisExpr = 9;
	public static readonly RULE_quoteNaturalExpr = 10;
	public static readonly RULE_openFormStatement = 11;
	public static readonly RULE_saveFormStatement = 12;
	public static readonly RULE_closeStatement = 13;
	public static readonly RULE_refreshStatement = 14;
	public static readonly RULE_messageStatement = 15;
	public static readonly RULE_clickButtonStatement = 16;
	public static readonly RULE_getComboDicStatement = 17;
	public static readonly RULE_queryDataStatement = 18;
	public static readonly RULE_carryDataStatement = 19;
	public static readonly RULE_sqlExecuteStatement = 20;
	public static readonly RULE_getCoderStatement = 21;
	public static readonly RULE_setCoderStatement = 22;
	public static readonly RULE_resetCtrlValueStatement = 23;
	public static readonly RULE_saveLastValueStatement = 24;
	public static readonly RULE_loadLastValueStatement = 25;
	public static readonly RULE_setVisiableStatement = 26;
	public static readonly RULE_setEnableStatement = 27;
	public static readonly RULE_setFocusStatement = 28;
	public static readonly RULE_setColorStatement = 29;
	public static readonly RULE_changeTabStatement = 30;
	public static readonly RULE_switchDisplayStatement = 31;
	public static readonly RULE_stringSubStatement = 32;
	public static readonly RULE_stringLenStatement = 33;
	public static readonly RULE_stringStrStatement = 34;
	public static readonly RULE_stringRepStatement = 35;
	public static readonly RULE_stringCatStatement = 36;
	public static readonly RULE_encodeBase64Statement = 37;
	public static readonly RULE_decodeBase64Statement = 38;
	public static readonly RULE_getGridRowsStatement = 39;
	public static readonly RULE_addGridRowStatement = 40;
	public static readonly RULE_delGridRowStatement = 41;
	public static readonly RULE_selGridRowStatement = 42;
	public static readonly RULE_exportXlsStatement = 43;
	public static readonly RULE_importXlsStatement = 44;
	public static readonly RULE_flowTranStatement = 45;
	public static readonly RULE_flowSaveStatement = 46;
	public static readonly RULE_flowFreshStatement = 47;
	public static readonly RULE_flowSendStatement = 48;
	public static readonly RULE_flowBackStatement = 49;
	public static readonly RULE_flowBack2Statement = 50;
	public static readonly RULE_flowMendStatement = 51;
	public static readonly RULE_flowPrintStatement = 52;
	public static readonly RULE_flowFormStatement = 53;
	public static readonly RULE_flowQueryStatement = 54;
	public static readonly RULE_taskHangStatement = 55;
	public static readonly RULE_taskFreeStatement = 56;
	public static readonly RULE_flowTestStatement = 57;
	public static readonly RULE_flowDropStatement = 58;
	public static readonly RULE_expression = 59;
	public static readonly RULE_subTerm = 60;
	public static readonly RULE_addTerm = 61;
	public static readonly RULE_divTerm = 62;
	public static readonly RULE_mulTerm = 63;
	public static readonly RULE_parnTerm = 64;
	public static readonly RULE_assign = 65;
	public static readonly RULE_assignStart = 66;
	public static readonly RULE_ctrlQuoteLiteral = 67;
	public static readonly RULE_ctrlQuoteDotLiteral = 68;
	public static readonly RULE_ctrlQuoteParamLiteral = 69;
	public static readonly RULE_ctrlConstantLiteral = 70;
	public static readonly RULE_commonLiteral = 71;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "statement", "functionStatement", "ifStatement", "whileStatement", 
		"blockStatement", "expressionSequence", "singleExpression", "assignStatement", 
		"quoteEllipsisExpr", "quoteNaturalExpr", "openFormStatement", "saveFormStatement", 
		"closeStatement", "refreshStatement", "messageStatement", "clickButtonStatement", 
		"getComboDicStatement", "queryDataStatement", "carryDataStatement", "sqlExecuteStatement", 
		"getCoderStatement", "setCoderStatement", "resetCtrlValueStatement", "saveLastValueStatement", 
		"loadLastValueStatement", "setVisiableStatement", "setEnableStatement", 
		"setFocusStatement", "setColorStatement", "changeTabStatement", "switchDisplayStatement", 
		"stringSubStatement", "stringLenStatement", "stringStrStatement", "stringRepStatement", 
		"stringCatStatement", "encodeBase64Statement", "decodeBase64Statement", 
		"getGridRowsStatement", "addGridRowStatement", "delGridRowStatement", 
		"selGridRowStatement", "exportXlsStatement", "importXlsStatement", "flowTranStatement", 
		"flowSaveStatement", "flowFreshStatement", "flowSendStatement", "flowBackStatement", 
		"flowBack2Statement", "flowMendStatement", "flowPrintStatement", "flowFormStatement", 
		"flowQueryStatement", "taskHangStatement", "taskFreeStatement", "flowTestStatement", 
		"flowDropStatement", "expression", "subTerm", "addTerm", "divTerm", "mulTerm", 
		"parnTerm", "assign", "assignStart", "ctrlQuoteLiteral", "ctrlQuoteDotLiteral", 
		"ctrlQuoteParamLiteral", "ctrlConstantLiteral", "commonLiteral",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'['", "']'", "'('", "')'", "'{'", "'}'", "';'", "','", "'+'", 
		"'-'", "'*'", "'/'", "'='", "'.'", "'...'", "'=='", "'!='", "'<'", "'>'", 
		"'<='", "'>='", "'&&'", "'||'", "'#'", "'$'", "'OpenForm'", "'SaveForm'", 
		"'Close'", "'Refresh'", "'MessageBox'", "'ClickButton'", "'GetComboDic'", 
		"'QueryData'", "'CarryData'", "'SQLExecute'", "'GetCoder'", "'SetCoder'", 
		"'ResetCtrlValue'", "'SaveLastValue'", "'LoadLastValue'", "'SetVisiable'", 
		"'SetEnable'", "'SetFocus'", "'SetColor'", "'ChangeTab'", "'SwitchDisplay'", 
		"'StringSub'", "'StringLen'", "'StringStr'", "'StringRep'", "'StringCat'", 
		"'EncodeBase64'", "'DecodeBase64'", "'GetGridRows'", "'AddGridRow'", "'DelGridRow'", 
		"'SelGridRow'", "'ExportXls'", "'ImportXls'", "'FlowTran'", "'FlowSave'", 
		"'FlowFresh'", "'FlowSend'", "'FlowBack'", "'FlowBack2'", "'FlowMend'", 
		"'FlowPrint'", "'FlowForm'", "'FlowQuery'", "'TaskHang'", "'TaskFree'", 
		"'FlowTest'", "'FlowDrop'", undefined, "'if'", "'While'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "OpenBracket", "CloseBracket", "OpenParen", "CloseParen", "OpenBrace", 
		"CloseBrace", "SemiColon", "Comma", "Plus", "Minus", "Multiply", "Divide", 
		"Assign", "Dot", "Ellipsis", "Equal", "NotEqual", "LessThan", "MoreThan", 
		"LessThanEquals", "GreaterThanEquals", "And", "Or", "Sql", "Const", "OpenForm", 
		"SaveForm", "Close", "Refresh", "MessageBox", "ClickButton", "GetComboDic", 
		"QueryData", "CarryData", "SQLExecute", "GetCoder", "SetCoder", "ResetCtrlValue", 
		"SaveLastValue", "LoadLastValue", "SetVisiable", "SetEnable", "SetFocus", 
		"SetColor", "ChangeTab", "SwitchDisplay", "StringSub", "StringLen", "StringStr", 
		"StringRep", "StringCat", "EncodeBase64", "DecodeBase64", "GetGridRows", 
		"AddGridRow", "DelGridRow", "SelGridRow", "ExportXls", "ImportXls", "FlowTran", 
		"FlowSave", "FlowFresh", "FlowSend", "FlowBack", "FlowBack2", "FlowMend", 
		"FlowPrint", "FlowForm", "FlowQuery", "TaskHang", "TaskFree", "FlowTest", 
		"FlowDrop", "Selected", "If", "While", "Constant", "Natural", "MessageLiteral", 
		"HexLiteral", "StringLiteral", "BooleanLiteral", "NullLiteral", "DecimalLiteral", 
		"ParamLiteral", "SqlLiteral", "Decimal", "NonZeroDigit", "DigitChar", 
		"UpperCaseChar", "LowerCaseChar", "WS", "COMMENT", "WHITESPACE",
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
			this.state = 145;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 144;
				this.statement();
				}
				}
				this.state = 147;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << kacoParser.OpenBracket) | (1 << kacoParser.OpenForm) | (1 << kacoParser.SaveForm) | (1 << kacoParser.Close) | (1 << kacoParser.Refresh) | (1 << kacoParser.MessageBox) | (1 << kacoParser.ClickButton))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (kacoParser.GetComboDic - 32)) | (1 << (kacoParser.QueryData - 32)) | (1 << (kacoParser.CarryData - 32)) | (1 << (kacoParser.SQLExecute - 32)) | (1 << (kacoParser.GetCoder - 32)) | (1 << (kacoParser.SetCoder - 32)) | (1 << (kacoParser.ResetCtrlValue - 32)) | (1 << (kacoParser.SaveLastValue - 32)) | (1 << (kacoParser.LoadLastValue - 32)) | (1 << (kacoParser.SetVisiable - 32)) | (1 << (kacoParser.SetEnable - 32)) | (1 << (kacoParser.SetFocus - 32)) | (1 << (kacoParser.SetColor - 32)) | (1 << (kacoParser.ChangeTab - 32)) | (1 << (kacoParser.SwitchDisplay - 32)) | (1 << (kacoParser.StringSub - 32)) | (1 << (kacoParser.StringLen - 32)) | (1 << (kacoParser.StringStr - 32)) | (1 << (kacoParser.StringRep - 32)) | (1 << (kacoParser.StringCat - 32)) | (1 << (kacoParser.EncodeBase64 - 32)) | (1 << (kacoParser.DecodeBase64 - 32)) | (1 << (kacoParser.GetGridRows - 32)) | (1 << (kacoParser.AddGridRow - 32)) | (1 << (kacoParser.DelGridRow - 32)) | (1 << (kacoParser.SelGridRow - 32)) | (1 << (kacoParser.ExportXls - 32)) | (1 << (kacoParser.ImportXls - 32)) | (1 << (kacoParser.FlowTran - 32)) | (1 << (kacoParser.FlowSave - 32)) | (1 << (kacoParser.FlowFresh - 32)) | (1 << (kacoParser.FlowSend - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (kacoParser.FlowBack - 64)) | (1 << (kacoParser.FlowBack2 - 64)) | (1 << (kacoParser.FlowMend - 64)) | (1 << (kacoParser.FlowPrint - 64)) | (1 << (kacoParser.FlowForm - 64)) | (1 << (kacoParser.FlowQuery - 64)) | (1 << (kacoParser.TaskHang - 64)) | (1 << (kacoParser.TaskFree - 64)) | (1 << (kacoParser.FlowTest - 64)) | (1 << (kacoParser.FlowDrop - 64)) | (1 << (kacoParser.If - 64)) | (1 << (kacoParser.While - 64)))) !== 0));
			this.state = 149;
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
			this.state = 153;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case kacoParser.If:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 151;
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
			case kacoParser.StringSub:
			case kacoParser.StringLen:
			case kacoParser.StringStr:
			case kacoParser.StringRep:
			case kacoParser.StringCat:
			case kacoParser.EncodeBase64:
			case kacoParser.DecodeBase64:
			case kacoParser.GetGridRows:
			case kacoParser.AddGridRow:
			case kacoParser.DelGridRow:
			case kacoParser.SelGridRow:
			case kacoParser.ExportXls:
			case kacoParser.ImportXls:
			case kacoParser.FlowTran:
			case kacoParser.FlowSave:
			case kacoParser.FlowFresh:
			case kacoParser.FlowSend:
			case kacoParser.FlowBack:
			case kacoParser.FlowBack2:
			case kacoParser.FlowMend:
			case kacoParser.FlowPrint:
			case kacoParser.FlowForm:
			case kacoParser.FlowQuery:
			case kacoParser.TaskHang:
			case kacoParser.TaskFree:
			case kacoParser.FlowTest:
			case kacoParser.FlowDrop:
			case kacoParser.While:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 152;
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
			this.state = 205;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case kacoParser.OpenForm:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 155;
				this.openFormStatement();
				}
				break;
			case kacoParser.SaveForm:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 156;
				this.saveFormStatement();
				}
				break;
			case kacoParser.Close:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 157;
				this.closeStatement();
				}
				break;
			case kacoParser.Refresh:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 158;
				this.refreshStatement();
				}
				break;
			case kacoParser.MessageBox:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 159;
				this.messageStatement();
				}
				break;
			case kacoParser.ClickButton:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 160;
				this.clickButtonStatement();
				}
				break;
			case kacoParser.GetComboDic:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 161;
				this.getComboDicStatement();
				}
				break;
			case kacoParser.QueryData:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 162;
				this.queryDataStatement();
				}
				break;
			case kacoParser.CarryData:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 163;
				this.carryDataStatement();
				}
				break;
			case kacoParser.SQLExecute:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 164;
				this.sqlExecuteStatement();
				}
				break;
			case kacoParser.GetCoder:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 165;
				this.getCoderStatement();
				}
				break;
			case kacoParser.SetCoder:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 166;
				this.setCoderStatement();
				}
				break;
			case kacoParser.ResetCtrlValue:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 167;
				this.resetCtrlValueStatement();
				}
				break;
			case kacoParser.SaveLastValue:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 168;
				this.saveLastValueStatement();
				}
				break;
			case kacoParser.LoadLastValue:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 169;
				this.loadLastValueStatement();
				}
				break;
			case kacoParser.SetVisiable:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 170;
				this.setVisiableStatement();
				}
				break;
			case kacoParser.SetEnable:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 171;
				this.setEnableStatement();
				}
				break;
			case kacoParser.SetFocus:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 172;
				this.setFocusStatement();
				}
				break;
			case kacoParser.SetColor:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 173;
				this.setColorStatement();
				}
				break;
			case kacoParser.ChangeTab:
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 174;
				this.changeTabStatement();
				}
				break;
			case kacoParser.SwitchDisplay:
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 175;
				this.switchDisplayStatement();
				}
				break;
			case kacoParser.StringSub:
				this.enterOuterAlt(_localctx, 22);
				{
				this.state = 176;
				this.stringSubStatement();
				}
				break;
			case kacoParser.StringLen:
				this.enterOuterAlt(_localctx, 23);
				{
				this.state = 177;
				this.stringLenStatement();
				}
				break;
			case kacoParser.StringStr:
				this.enterOuterAlt(_localctx, 24);
				{
				this.state = 178;
				this.stringStrStatement();
				}
				break;
			case kacoParser.StringRep:
				this.enterOuterAlt(_localctx, 25);
				{
				this.state = 179;
				this.stringRepStatement();
				}
				break;
			case kacoParser.StringCat:
				this.enterOuterAlt(_localctx, 26);
				{
				this.state = 180;
				this.stringCatStatement();
				}
				break;
			case kacoParser.EncodeBase64:
				this.enterOuterAlt(_localctx, 27);
				{
				this.state = 181;
				this.encodeBase64Statement();
				}
				break;
			case kacoParser.DecodeBase64:
				this.enterOuterAlt(_localctx, 28);
				{
				this.state = 182;
				this.decodeBase64Statement();
				}
				break;
			case kacoParser.GetGridRows:
				this.enterOuterAlt(_localctx, 29);
				{
				this.state = 183;
				this.getGridRowsStatement();
				}
				break;
			case kacoParser.AddGridRow:
				this.enterOuterAlt(_localctx, 30);
				{
				this.state = 184;
				this.addGridRowStatement();
				}
				break;
			case kacoParser.DelGridRow:
				this.enterOuterAlt(_localctx, 31);
				{
				this.state = 185;
				this.delGridRowStatement();
				}
				break;
			case kacoParser.SelGridRow:
				this.enterOuterAlt(_localctx, 32);
				{
				this.state = 186;
				this.selGridRowStatement();
				}
				break;
			case kacoParser.ExportXls:
				this.enterOuterAlt(_localctx, 33);
				{
				this.state = 187;
				this.exportXlsStatement();
				}
				break;
			case kacoParser.ImportXls:
				this.enterOuterAlt(_localctx, 34);
				{
				this.state = 188;
				this.importXlsStatement();
				}
				break;
			case kacoParser.While:
				this.enterOuterAlt(_localctx, 35);
				{
				this.state = 189;
				this.whileStatement();
				}
				break;
			case kacoParser.FlowTran:
				this.enterOuterAlt(_localctx, 36);
				{
				this.state = 190;
				this.flowTranStatement();
				}
				break;
			case kacoParser.FlowSave:
				this.enterOuterAlt(_localctx, 37);
				{
				this.state = 191;
				this.flowSaveStatement();
				}
				break;
			case kacoParser.FlowFresh:
				this.enterOuterAlt(_localctx, 38);
				{
				this.state = 192;
				this.flowFreshStatement();
				}
				break;
			case kacoParser.FlowSend:
				this.enterOuterAlt(_localctx, 39);
				{
				this.state = 193;
				this.flowSendStatement();
				}
				break;
			case kacoParser.FlowBack:
				this.enterOuterAlt(_localctx, 40);
				{
				this.state = 194;
				this.flowBackStatement();
				}
				break;
			case kacoParser.FlowBack2:
				this.enterOuterAlt(_localctx, 41);
				{
				this.state = 195;
				this.flowBack2Statement();
				}
				break;
			case kacoParser.FlowMend:
				this.enterOuterAlt(_localctx, 42);
				{
				this.state = 196;
				this.flowMendStatement();
				}
				break;
			case kacoParser.FlowPrint:
				this.enterOuterAlt(_localctx, 43);
				{
				this.state = 197;
				this.flowPrintStatement();
				}
				break;
			case kacoParser.FlowForm:
				this.enterOuterAlt(_localctx, 44);
				{
				this.state = 198;
				this.flowFormStatement();
				}
				break;
			case kacoParser.FlowQuery:
				this.enterOuterAlt(_localctx, 45);
				{
				this.state = 199;
				this.flowQueryStatement();
				}
				break;
			case kacoParser.TaskHang:
				this.enterOuterAlt(_localctx, 46);
				{
				this.state = 200;
				this.taskHangStatement();
				}
				break;
			case kacoParser.TaskFree:
				this.enterOuterAlt(_localctx, 47);
				{
				this.state = 201;
				this.taskFreeStatement();
				}
				break;
			case kacoParser.FlowTest:
				this.enterOuterAlt(_localctx, 48);
				{
				this.state = 202;
				this.flowTestStatement();
				}
				break;
			case kacoParser.FlowDrop:
				this.enterOuterAlt(_localctx, 49);
				{
				this.state = 203;
				this.flowDropStatement();
				}
				break;
			case kacoParser.OpenBracket:
				this.enterOuterAlt(_localctx, 50);
				{
				this.state = 204;
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
			this.state = 207;
			this.match(kacoParser.If);
			this.state = 208;
			this.match(kacoParser.OpenParen);
			this.state = 209;
			this.expressionSequence();
			this.state = 210;
			this.match(kacoParser.CloseParen);
			this.state = 211;
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
	public whileStatement(): WhileStatementContext {
		let _localctx: WhileStatementContext = new WhileStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, kacoParser.RULE_whileStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 213;
			this.match(kacoParser.While);
			this.state = 214;
			this.match(kacoParser.OpenParen);
			this.state = 215;
			this.ctrlQuoteDotLiteral();
			this.state = 216;
			this.match(kacoParser.CloseParen);
			this.state = 217;
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
		this.enterRule(_localctx, 10, kacoParser.RULE_blockStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 219;
			this.match(kacoParser.OpenBrace);
			this.state = 224;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << kacoParser.OpenBracket) | (1 << kacoParser.OpenForm) | (1 << kacoParser.SaveForm) | (1 << kacoParser.Close) | (1 << kacoParser.Refresh) | (1 << kacoParser.MessageBox) | (1 << kacoParser.ClickButton))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (kacoParser.GetComboDic - 32)) | (1 << (kacoParser.QueryData - 32)) | (1 << (kacoParser.CarryData - 32)) | (1 << (kacoParser.SQLExecute - 32)) | (1 << (kacoParser.GetCoder - 32)) | (1 << (kacoParser.SetCoder - 32)) | (1 << (kacoParser.ResetCtrlValue - 32)) | (1 << (kacoParser.SaveLastValue - 32)) | (1 << (kacoParser.LoadLastValue - 32)) | (1 << (kacoParser.SetVisiable - 32)) | (1 << (kacoParser.SetEnable - 32)) | (1 << (kacoParser.SetFocus - 32)) | (1 << (kacoParser.SetColor - 32)) | (1 << (kacoParser.ChangeTab - 32)) | (1 << (kacoParser.SwitchDisplay - 32)) | (1 << (kacoParser.StringSub - 32)) | (1 << (kacoParser.StringLen - 32)) | (1 << (kacoParser.StringStr - 32)) | (1 << (kacoParser.StringRep - 32)) | (1 << (kacoParser.StringCat - 32)) | (1 << (kacoParser.EncodeBase64 - 32)) | (1 << (kacoParser.DecodeBase64 - 32)) | (1 << (kacoParser.GetGridRows - 32)) | (1 << (kacoParser.AddGridRow - 32)) | (1 << (kacoParser.DelGridRow - 32)) | (1 << (kacoParser.SelGridRow - 32)) | (1 << (kacoParser.ExportXls - 32)) | (1 << (kacoParser.ImportXls - 32)) | (1 << (kacoParser.FlowTran - 32)) | (1 << (kacoParser.FlowSave - 32)) | (1 << (kacoParser.FlowFresh - 32)) | (1 << (kacoParser.FlowSend - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (kacoParser.FlowBack - 64)) | (1 << (kacoParser.FlowBack2 - 64)) | (1 << (kacoParser.FlowMend - 64)) | (1 << (kacoParser.FlowPrint - 64)) | (1 << (kacoParser.FlowForm - 64)) | (1 << (kacoParser.FlowQuery - 64)) | (1 << (kacoParser.TaskHang - 64)) | (1 << (kacoParser.TaskFree - 64)) | (1 << (kacoParser.FlowTest - 64)) | (1 << (kacoParser.FlowDrop - 64)) | (1 << (kacoParser.While - 64)))) !== 0)) {
				{
				this.state = 222;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
				case 1:
					{
					this.state = 220;
					this.functionStatement();
					}
					break;

				case 2:
					{
					this.state = 221;
					this.assignStatement();
					}
					break;
				}
				}
				this.state = 226;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 227;
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
		this.enterRule(_localctx, 12, kacoParser.RULE_expressionSequence);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 229;
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
		let _startState: number = 14;
		this.enterRecursionRule(_localctx, 14, kacoParser.RULE_singleExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 237;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case kacoParser.OpenBracket:
			case kacoParser.Natural:
			case kacoParser.StringLiteral:
			case kacoParser.BooleanLiteral:
			case kacoParser.NullLiteral:
			case kacoParser.DecimalLiteral:
				{
				this.state = 232;
				this.commonLiteral();
				}
				break;
			case kacoParser.OpenParen:
				{
				this.state = 233;
				this.match(kacoParser.OpenParen);
				this.state = 234;
				this.expressionSequence();
				this.state = 235;
				this.match(kacoParser.CloseParen);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 256;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 254;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
					case 1:
						{
						_localctx = new SingleExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, kacoParser.RULE_singleExpression);
						this.state = 239;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 240;
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
						this.state = 241;
						this.singleExpression(7);
						}
						break;

					case 2:
						{
						_localctx = new SingleExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, kacoParser.RULE_singleExpression);
						this.state = 242;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 243;
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
						this.state = 244;
						this.singleExpression(6);
						}
						break;

					case 3:
						{
						_localctx = new SingleExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, kacoParser.RULE_singleExpression);
						this.state = 245;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 246;
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
						this.state = 247;
						this.singleExpression(5);
						}
						break;

					case 4:
						{
						_localctx = new SingleExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, kacoParser.RULE_singleExpression);
						this.state = 248;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 249;
						this.match(kacoParser.And);
						this.state = 250;
						this.singleExpression(4);
						}
						break;

					case 5:
						{
						_localctx = new SingleExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, kacoParser.RULE_singleExpression);
						this.state = 251;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 252;
						this.match(kacoParser.Or);
						this.state = 253;
						this.singleExpression(3);
						}
						break;
					}
					}
				}
				this.state = 258;
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
		this.enterRule(_localctx, 16, kacoParser.RULE_assignStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 259;
			this.assign();
			this.state = 260;
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
		this.enterRule(_localctx, 18, kacoParser.RULE_quoteEllipsisExpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 262;
			this.match(kacoParser.OpenParen);
			this.state = 271;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === kacoParser.OpenBracket || ((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & ((1 << (kacoParser.Natural - 78)) | (1 << (kacoParser.StringLiteral - 78)) | (1 << (kacoParser.BooleanLiteral - 78)) | (1 << (kacoParser.NullLiteral - 78)) | (1 << (kacoParser.DecimalLiteral - 78)))) !== 0)) {
				{
				this.state = 263;
				this.commonLiteral();
				this.state = 268;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === kacoParser.Comma) {
					{
					{
					this.state = 264;
					this.match(kacoParser.Comma);
					this.state = 265;
					this.commonLiteral();
					}
					}
					this.state = 270;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 273;
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
		this.enterRule(_localctx, 20, kacoParser.RULE_quoteNaturalExpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 275;
			this.match(kacoParser.OpenParen);
			this.state = 277;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === kacoParser.Natural) {
				{
				this.state = 276;
				this.match(kacoParser.Natural);
				}
			}

			this.state = 279;
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
		this.enterRule(_localctx, 22, kacoParser.RULE_openFormStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 281;
			this.match(kacoParser.OpenForm);
			this.state = 282;
			this.match(kacoParser.OpenBracket);
			this.state = 283;
			_la = this._input.LA(1);
			if (!(((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & ((1 << (kacoParser.Natural - 78)) | (1 << (kacoParser.StringLiteral - 78)) | (1 << (kacoParser.DecimalLiteral - 78)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 284;
			this.match(kacoParser.CloseBracket);
			this.state = 286;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				{
				this.state = 285;
				this.quoteEllipsisExpr();
				}
				break;
			}
			this.state = 289;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				{
				this.state = 288;
				this.quoteEllipsisExpr();
				}
				break;
			}
			this.state = 292;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === kacoParser.OpenParen) {
				{
				this.state = 291;
				this.quoteEllipsisExpr();
				}
			}

			this.state = 294;
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
		this.enterRule(_localctx, 24, kacoParser.RULE_saveFormStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 296;
			this.match(kacoParser.SaveForm);
			this.state = 297;
			this.quoteEllipsisExpr();
			this.state = 298;
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
		this.enterRule(_localctx, 26, kacoParser.RULE_closeStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 300;
			this.match(kacoParser.Close);
			this.state = 301;
			this.match(kacoParser.OpenParen);
			this.state = 303;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === kacoParser.StringLiteral) {
				{
				this.state = 302;
				this.match(kacoParser.StringLiteral);
				}
			}

			this.state = 305;
			this.match(kacoParser.CloseParen);
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
	public refreshStatement(): RefreshStatementContext {
		let _localctx: RefreshStatementContext = new RefreshStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, kacoParser.RULE_refreshStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 308;
			this.match(kacoParser.Refresh);
			this.state = 309;
			this.match(kacoParser.OpenParen);
			this.state = 311;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === kacoParser.StringLiteral) {
				{
				this.state = 310;
				this.match(kacoParser.StringLiteral);
				}
			}

			this.state = 313;
			this.match(kacoParser.CloseParen);
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
	public messageStatement(): MessageStatementContext {
		let _localctx: MessageStatementContext = new MessageStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, kacoParser.RULE_messageStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 316;
			this.match(kacoParser.MessageBox);
			this.state = 317;
			this.match(kacoParser.OpenParen);
			this.state = 318;
			this.match(kacoParser.MessageLiteral);
			this.state = 319;
			this.match(kacoParser.Comma);
			this.state = 320;
			this.match(kacoParser.StringLiteral);
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
	public clickButtonStatement(): ClickButtonStatementContext {
		let _localctx: ClickButtonStatementContext = new ClickButtonStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, kacoParser.RULE_clickButtonStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 324;
			this.match(kacoParser.ClickButton);
			this.state = 325;
			this.match(kacoParser.OpenParen);
			this.state = 326;
			this.ctrlQuoteLiteral();
			this.state = 327;
			this.match(kacoParser.CloseParen);
			this.state = 328;
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
		this.enterRule(_localctx, 34, kacoParser.RULE_getComboDicStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 330;
			this.match(kacoParser.GetComboDic);
			this.state = 331;
			this.match(kacoParser.OpenParen);
			this.state = 332;
			this.ctrlQuoteLiteral();
			this.state = 333;
			this.match(kacoParser.Comma);
			this.state = 334;
			this.match(kacoParser.SqlLiteral);
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
	public queryDataStatement(): QueryDataStatementContext {
		let _localctx: QueryDataStatementContext = new QueryDataStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, kacoParser.RULE_queryDataStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 338;
			this.match(kacoParser.QueryData);
			this.state = 339;
			this.ctrlQuoteLiteral();
			this.state = 340;
			this.match(kacoParser.Comma);
			this.state = 341;
			this.ctrlQuoteLiteral();
			this.state = 343;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
			case 1:
				{
				this.state = 342;
				this.quoteEllipsisExpr();
				}
				break;
			}
			this.state = 346;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
			case 1:
				{
				this.state = 345;
				this.quoteNaturalExpr();
				}
				break;
			}
			this.state = 349;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === kacoParser.OpenParen) {
				{
				this.state = 348;
				this.quoteNaturalExpr();
				}
			}

			this.state = 351;
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
		this.enterRule(_localctx, 38, kacoParser.RULE_carryDataStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 353;
			this.match(kacoParser.CarryData);
			this.state = 354;
			this.ctrlQuoteLiteral();
			this.state = 360;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === kacoParser.OpenParen) {
				{
				this.state = 355;
				this.match(kacoParser.OpenParen);
				this.state = 357;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === kacoParser.OpenBracket) {
					{
					this.state = 356;
					this.ctrlQuoteLiteral();
					}
				}

				this.state = 359;
				this.match(kacoParser.CloseParen);
				}
			}

			this.state = 362;
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
		this.enterRule(_localctx, 40, kacoParser.RULE_sqlExecuteStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 364;
			this.match(kacoParser.SQLExecute);
			this.state = 365;
			this.match(kacoParser.OpenParen);
			this.state = 367;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === kacoParser.SqlLiteral) {
				{
				this.state = 366;
				this.match(kacoParser.SqlLiteral);
				}
			}

			this.state = 369;
			this.match(kacoParser.CloseParen);
			this.state = 370;
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
		this.enterRule(_localctx, 42, kacoParser.RULE_getCoderStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 372;
			this.match(kacoParser.GetCoder);
			this.state = 373;
			this.match(kacoParser.OpenParen);
			this.state = 378;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === kacoParser.OpenBracket) {
				{
				this.state = 374;
				this.ctrlQuoteLiteral();
				this.state = 375;
				this.match(kacoParser.Comma);
				this.state = 376;
				this.match(kacoParser.StringLiteral);
				}
			}

			this.state = 380;
			this.match(kacoParser.CloseParen);
			this.state = 381;
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
		this.enterRule(_localctx, 44, kacoParser.RULE_setCoderStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 383;
			this.match(kacoParser.SetCoder);
			this.state = 384;
			this.match(kacoParser.OpenParen);
			this.state = 389;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === kacoParser.OpenBracket) {
				{
				this.state = 385;
				this.ctrlQuoteLiteral();
				this.state = 386;
				this.match(kacoParser.Comma);
				this.state = 387;
				this.match(kacoParser.StringLiteral);
				}
			}

			this.state = 391;
			this.match(kacoParser.CloseParen);
			this.state = 392;
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
		this.enterRule(_localctx, 46, kacoParser.RULE_resetCtrlValueStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 394;
			this.match(kacoParser.ResetCtrlValue);
			this.state = 395;
			this.quoteEllipsisExpr();
			this.state = 396;
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
		this.enterRule(_localctx, 48, kacoParser.RULE_saveLastValueStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 398;
			this.match(kacoParser.SaveLastValue);
			this.state = 399;
			this.quoteEllipsisExpr();
			this.state = 400;
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
		this.enterRule(_localctx, 50, kacoParser.RULE_loadLastValueStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 402;
			this.match(kacoParser.LoadLastValue);
			this.state = 403;
			this.quoteEllipsisExpr();
			this.state = 404;
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
		this.enterRule(_localctx, 52, kacoParser.RULE_setVisiableStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 406;
			this.match(kacoParser.SetVisiable);
			this.state = 407;
			this.match(kacoParser.OpenParen);
			this.state = 408;
			this.ctrlQuoteLiteral();
			this.state = 409;
			this.match(kacoParser.Comma);
			this.state = 410;
			this.match(kacoParser.Natural);
			this.state = 411;
			this.match(kacoParser.CloseParen);
			this.state = 412;
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
		this.enterRule(_localctx, 54, kacoParser.RULE_setEnableStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 414;
			this.match(kacoParser.SetEnable);
			this.state = 415;
			this.match(kacoParser.OpenParen);
			this.state = 416;
			this.ctrlQuoteLiteral();
			this.state = 417;
			this.match(kacoParser.Comma);
			this.state = 418;
			this.match(kacoParser.Natural);
			this.state = 419;
			this.match(kacoParser.CloseParen);
			this.state = 420;
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
		this.enterRule(_localctx, 56, kacoParser.RULE_setFocusStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 422;
			this.match(kacoParser.SetFocus);
			this.state = 423;
			this.match(kacoParser.OpenParen);
			this.state = 424;
			this.ctrlQuoteLiteral();
			this.state = 425;
			this.match(kacoParser.CloseParen);
			this.state = 426;
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
		this.enterRule(_localctx, 58, kacoParser.RULE_setColorStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 428;
			this.match(kacoParser.SetColor);
			this.state = 429;
			this.match(kacoParser.OpenParen);
			this.state = 430;
			this.ctrlQuoteLiteral();
			this.state = 431;
			this.match(kacoParser.Comma);
			this.state = 432;
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
			this.state = 433;
			this.match(kacoParser.CloseParen);
			this.state = 434;
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
		this.enterRule(_localctx, 60, kacoParser.RULE_changeTabStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 436;
			this.match(kacoParser.ChangeTab);
			this.state = 437;
			this.match(kacoParser.OpenParen);
			this.state = 438;
			this.ctrlQuoteLiteral();
			this.state = 439;
			this.match(kacoParser.Comma);
			this.state = 440;
			this.match(kacoParser.Natural);
			this.state = 441;
			this.match(kacoParser.CloseParen);
			this.state = 442;
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
		this.enterRule(_localctx, 62, kacoParser.RULE_switchDisplayStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 444;
			this.match(kacoParser.SwitchDisplay);
			this.state = 445;
			this.quoteEllipsisExpr();
			this.state = 446;
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
	public stringSubStatement(): StringSubStatementContext {
		let _localctx: StringSubStatementContext = new StringSubStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, kacoParser.RULE_stringSubStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 448;
			this.match(kacoParser.StringSub);
			this.state = 449;
			this.ctrlQuoteLiteral();
			this.state = 450;
			this.match(kacoParser.OpenParen);
			this.state = 453;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case kacoParser.OpenBracket:
				{
				this.state = 451;
				this.ctrlQuoteLiteral();
				}
				break;
			case kacoParser.StringLiteral:
				{
				this.state = 452;
				this.match(kacoParser.StringLiteral);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 455;
			this.match(kacoParser.Comma);
			this.state = 456;
			this.match(kacoParser.Natural);
			this.state = 457;
			this.match(kacoParser.Comma);
			this.state = 458;
			this.match(kacoParser.Natural);
			this.state = 459;
			this.match(kacoParser.CloseParen);
			this.state = 460;
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
	public stringLenStatement(): StringLenStatementContext {
		let _localctx: StringLenStatementContext = new StringLenStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, kacoParser.RULE_stringLenStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 462;
			this.match(kacoParser.StringLen);
			this.state = 463;
			this.ctrlQuoteLiteral();
			this.state = 464;
			this.match(kacoParser.OpenParen);
			this.state = 467;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case kacoParser.OpenBracket:
				{
				this.state = 465;
				this.ctrlQuoteLiteral();
				}
				break;
			case kacoParser.StringLiteral:
				{
				this.state = 466;
				this.match(kacoParser.StringLiteral);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 469;
			this.match(kacoParser.CloseParen);
			this.state = 470;
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
	public stringStrStatement(): StringStrStatementContext {
		let _localctx: StringStrStatementContext = new StringStrStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, kacoParser.RULE_stringStrStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 472;
			this.match(kacoParser.StringStr);
			this.state = 473;
			this.ctrlQuoteLiteral();
			this.state = 474;
			this.match(kacoParser.OpenParen);
			this.state = 477;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case kacoParser.StringLiteral:
				{
				this.state = 475;
				this.match(kacoParser.StringLiteral);
				}
				break;
			case kacoParser.OpenBracket:
				{
				this.state = 476;
				this.ctrlQuoteLiteral();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 479;
			this.match(kacoParser.Comma);
			this.state = 482;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case kacoParser.StringLiteral:
				{
				this.state = 480;
				this.match(kacoParser.StringLiteral);
				}
				break;
			case kacoParser.OpenBracket:
				{
				this.state = 481;
				this.ctrlQuoteLiteral();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 484;
			this.match(kacoParser.CloseParen);
			this.state = 485;
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
	public stringRepStatement(): StringRepStatementContext {
		let _localctx: StringRepStatementContext = new StringRepStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, kacoParser.RULE_stringRepStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 487;
			this.match(kacoParser.StringRep);
			this.state = 488;
			this.match(kacoParser.OpenParen);
			this.state = 489;
			this.ctrlQuoteLiteral();
			this.state = 490;
			this.match(kacoParser.Comma);
			this.state = 493;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case kacoParser.StringLiteral:
				{
				this.state = 491;
				this.match(kacoParser.StringLiteral);
				}
				break;
			case kacoParser.OpenBracket:
				{
				this.state = 492;
				this.ctrlQuoteLiteral();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 495;
			this.match(kacoParser.Comma);
			this.state = 498;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case kacoParser.StringLiteral:
				{
				this.state = 496;
				this.match(kacoParser.StringLiteral);
				}
				break;
			case kacoParser.OpenBracket:
				{
				this.state = 497;
				this.ctrlQuoteLiteral();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 500;
			this.match(kacoParser.CloseParen);
			this.state = 501;
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
	public stringCatStatement(): StringCatStatementContext {
		let _localctx: StringCatStatementContext = new StringCatStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, kacoParser.RULE_stringCatStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 503;
			this.match(kacoParser.StringCat);
			this.state = 504;
			this.match(kacoParser.OpenParen);
			this.state = 505;
			this.ctrlQuoteLiteral();
			this.state = 511;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 506;
				this.match(kacoParser.Comma);
				this.state = 509;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case kacoParser.StringLiteral:
					{
					this.state = 507;
					this.match(kacoParser.StringLiteral);
					}
					break;
				case kacoParser.OpenBracket:
					{
					this.state = 508;
					this.ctrlQuoteLiteral();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				}
				this.state = 513;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === kacoParser.Comma);
			this.state = 515;
			this.match(kacoParser.CloseParen);
			this.state = 516;
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
	public encodeBase64Statement(): EncodeBase64StatementContext {
		let _localctx: EncodeBase64StatementContext = new EncodeBase64StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, kacoParser.RULE_encodeBase64Statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 518;
			this.match(kacoParser.EncodeBase64);
			this.state = 519;
			this.ctrlQuoteLiteral();
			this.state = 520;
			this.match(kacoParser.OpenParen);
			this.state = 523;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case kacoParser.StringLiteral:
				{
				this.state = 521;
				this.match(kacoParser.StringLiteral);
				}
				break;
			case kacoParser.OpenBracket:
				{
				this.state = 522;
				this.ctrlQuoteLiteral();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 525;
			this.match(kacoParser.CloseParen);
			this.state = 526;
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
	public decodeBase64Statement(): DecodeBase64StatementContext {
		let _localctx: DecodeBase64StatementContext = new DecodeBase64StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, kacoParser.RULE_decodeBase64Statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 528;
			this.match(kacoParser.DecodeBase64);
			this.state = 529;
			this.ctrlQuoteLiteral();
			this.state = 530;
			this.match(kacoParser.OpenParen);
			this.state = 533;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case kacoParser.StringLiteral:
				{
				this.state = 531;
				this.match(kacoParser.StringLiteral);
				}
				break;
			case kacoParser.OpenBracket:
				{
				this.state = 532;
				this.ctrlQuoteLiteral();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 535;
			this.match(kacoParser.CloseParen);
			this.state = 536;
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
	public getGridRowsStatement(): GetGridRowsStatementContext {
		let _localctx: GetGridRowsStatementContext = new GetGridRowsStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, kacoParser.RULE_getGridRowsStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 538;
			this.match(kacoParser.GetGridRows);
			this.state = 539;
			this.match(kacoParser.OpenParen);
			this.state = 540;
			this.ctrlQuoteLiteral();
			this.state = 541;
			this.match(kacoParser.Comma);
			this.state = 542;
			this.ctrlQuoteDotLiteral();
			this.state = 543;
			this.match(kacoParser.CloseParen);
			this.state = 544;
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
	public addGridRowStatement(): AddGridRowStatementContext {
		let _localctx: AddGridRowStatementContext = new AddGridRowStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, kacoParser.RULE_addGridRowStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 546;
			this.match(kacoParser.AddGridRow);
			this.state = 547;
			this.match(kacoParser.OpenParen);
			this.state = 548;
			this.ctrlQuoteDotLiteral();
			this.state = 558;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 35, this._ctx) ) {
			case 1:
				{
				{
				this.state = 549;
				this.match(kacoParser.Comma);
				this.state = 550;
				this.ctrlQuoteDotLiteral();
				}
				}
				break;

			case 2:
				{
				this.state = 555;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === kacoParser.Comma) {
					{
					{
					this.state = 551;
					this.match(kacoParser.Comma);
					this.state = 552;
					this.commonLiteral();
					}
					}
					this.state = 557;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			}
			this.state = 560;
			this.match(kacoParser.CloseParen);
			this.state = 561;
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
	public delGridRowStatement(): DelGridRowStatementContext {
		let _localctx: DelGridRowStatementContext = new DelGridRowStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, kacoParser.RULE_delGridRowStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 563;
			this.match(kacoParser.DelGridRow);
			this.state = 564;
			this.match(kacoParser.OpenParen);
			this.state = 565;
			this.ctrlQuoteDotLiteral();
			this.state = 566;
			this.match(kacoParser.CloseParen);
			this.state = 567;
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
	public selGridRowStatement(): SelGridRowStatementContext {
		let _localctx: SelGridRowStatementContext = new SelGridRowStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, kacoParser.RULE_selGridRowStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 569;
			this.match(kacoParser.SelGridRow);
			this.state = 570;
			this.match(kacoParser.OpenParen);
			this.state = 571;
			this.ctrlQuoteDotLiteral();
			this.state = 572;
			this.match(kacoParser.CloseParen);
			this.state = 573;
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
	public exportXlsStatement(): ExportXlsStatementContext {
		let _localctx: ExportXlsStatementContext = new ExportXlsStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, kacoParser.RULE_exportXlsStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 575;
			this.match(kacoParser.ExportXls);
			this.state = 576;
			this.match(kacoParser.OpenParen);
			this.state = 577;
			this.ctrlQuoteLiteral();
			this.state = 580;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === kacoParser.Comma) {
				{
				this.state = 578;
				this.match(kacoParser.Comma);
				this.state = 579;
				this.match(kacoParser.Natural);
				}
			}

			this.state = 582;
			this.match(kacoParser.CloseParen);
			this.state = 583;
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
	public importXlsStatement(): ImportXlsStatementContext {
		let _localctx: ImportXlsStatementContext = new ImportXlsStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, kacoParser.RULE_importXlsStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 585;
			this.match(kacoParser.ImportXls);
			this.state = 586;
			this.match(kacoParser.OpenParen);
			this.state = 587;
			this.ctrlQuoteLiteral();
			this.state = 588;
			this.match(kacoParser.CloseParen);
			this.state = 589;
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
	public flowTranStatement(): FlowTranStatementContext {
		let _localctx: FlowTranStatementContext = new FlowTranStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, kacoParser.RULE_flowTranStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 591;
			this.match(kacoParser.FlowTran);
			this.state = 592;
			this.match(kacoParser.OpenParen);
			this.state = 597;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === kacoParser.OpenBracket) {
				{
				this.state = 593;
				this.ctrlQuoteDotLiteral();
				this.state = 594;
				this.match(kacoParser.Comma);
				this.state = 595;
				this.ctrlQuoteDotLiteral();
				}
			}

			this.state = 599;
			this.match(kacoParser.CloseParen);
			this.state = 600;
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
	public flowSaveStatement(): FlowSaveStatementContext {
		let _localctx: FlowSaveStatementContext = new FlowSaveStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, kacoParser.RULE_flowSaveStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 602;
			this.match(kacoParser.FlowSave);
			this.state = 603;
			this.match(kacoParser.OpenParen);
			this.state = 605;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === kacoParser.OpenBracket) {
				{
				this.state = 604;
				this.ctrlQuoteLiteral();
				}
			}

			this.state = 607;
			this.match(kacoParser.CloseParen);
			this.state = 611;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === kacoParser.OpenParen) {
				{
				this.state = 608;
				this.match(kacoParser.OpenParen);
				this.state = 609;
				this.match(kacoParser.Natural);
				this.state = 610;
				this.match(kacoParser.CloseParen);
				}
			}

			this.state = 613;
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
	public flowFreshStatement(): FlowFreshStatementContext {
		let _localctx: FlowFreshStatementContext = new FlowFreshStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, kacoParser.RULE_flowFreshStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 615;
			this.match(kacoParser.FlowFresh);
			this.state = 616;
			this.match(kacoParser.OpenParen);
			this.state = 617;
			this.match(kacoParser.CloseParen);
			this.state = 618;
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
	public flowSendStatement(): FlowSendStatementContext {
		let _localctx: FlowSendStatementContext = new FlowSendStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, kacoParser.RULE_flowSendStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 620;
			this.match(kacoParser.FlowSend);
			this.state = 621;
			this.match(kacoParser.OpenParen);
			this.state = 626;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === kacoParser.OpenBracket) {
				{
				this.state = 622;
				this.ctrlQuoteDotLiteral();
				this.state = 623;
				this.match(kacoParser.Comma);
				this.state = 624;
				this.ctrlQuoteDotLiteral();
				}
			}

			this.state = 628;
			this.match(kacoParser.CloseParen);
			this.state = 629;
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
	public flowBackStatement(): FlowBackStatementContext {
		let _localctx: FlowBackStatementContext = new FlowBackStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, kacoParser.RULE_flowBackStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 631;
			this.match(kacoParser.FlowBack);
			this.state = 632;
			this.match(kacoParser.OpenParen);
			this.state = 637;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === kacoParser.OpenBracket) {
				{
				this.state = 633;
				this.ctrlQuoteDotLiteral();
				this.state = 634;
				this.match(kacoParser.Comma);
				this.state = 635;
				this.ctrlQuoteDotLiteral();
				}
			}

			this.state = 639;
			this.match(kacoParser.CloseParen);
			this.state = 640;
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
	public flowBack2Statement(): FlowBack2StatementContext {
		let _localctx: FlowBack2StatementContext = new FlowBack2StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, kacoParser.RULE_flowBack2Statement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 642;
			this.match(kacoParser.FlowBack2);
			this.state = 643;
			this.match(kacoParser.OpenParen);
			this.state = 648;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === kacoParser.OpenBracket) {
				{
				this.state = 644;
				this.ctrlQuoteDotLiteral();
				this.state = 645;
				this.match(kacoParser.Comma);
				this.state = 646;
				this.ctrlQuoteDotLiteral();
				}
			}

			this.state = 650;
			this.match(kacoParser.CloseParen);
			this.state = 651;
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
	public flowMendStatement(): FlowMendStatementContext {
		let _localctx: FlowMendStatementContext = new FlowMendStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, kacoParser.RULE_flowMendStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 653;
			this.match(kacoParser.FlowMend);
			this.state = 654;
			this.match(kacoParser.OpenParen);
			this.state = 659;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === kacoParser.OpenBracket) {
				{
				this.state = 655;
				this.ctrlQuoteDotLiteral();
				this.state = 656;
				this.match(kacoParser.Comma);
				this.state = 657;
				this.ctrlQuoteDotLiteral();
				}
			}

			this.state = 661;
			this.match(kacoParser.CloseParen);
			this.state = 662;
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
	public flowPrintStatement(): FlowPrintStatementContext {
		let _localctx: FlowPrintStatementContext = new FlowPrintStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, kacoParser.RULE_flowPrintStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 664;
			this.match(kacoParser.FlowPrint);
			this.state = 665;
			this.match(kacoParser.OpenParen);
			this.state = 666;
			this.match(kacoParser.CloseParen);
			this.state = 667;
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
	public flowFormStatement(): FlowFormStatementContext {
		let _localctx: FlowFormStatementContext = new FlowFormStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, kacoParser.RULE_flowFormStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 669;
			this.match(kacoParser.FlowForm);
			this.state = 670;
			this.match(kacoParser.OpenParen);
			this.state = 672;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === kacoParser.OpenBracket) {
				{
				this.state = 671;
				this.ctrlQuoteDotLiteral();
				}
			}

			this.state = 674;
			this.match(kacoParser.CloseParen);
			this.state = 675;
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
	public flowQueryStatement(): FlowQueryStatementContext {
		let _localctx: FlowQueryStatementContext = new FlowQueryStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, kacoParser.RULE_flowQueryStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 677;
			this.match(kacoParser.FlowQuery);
			this.state = 678;
			this.match(kacoParser.OpenParen);
			this.state = 680;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === kacoParser.OpenBracket) {
				{
				this.state = 679;
				this.ctrlQuoteDotLiteral();
				}
			}

			this.state = 682;
			this.match(kacoParser.CloseParen);
			this.state = 683;
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
	public taskHangStatement(): TaskHangStatementContext {
		let _localctx: TaskHangStatementContext = new TaskHangStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, kacoParser.RULE_taskHangStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 685;
			this.match(kacoParser.TaskHang);
			this.state = 686;
			this.match(kacoParser.OpenParen);
			this.state = 691;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === kacoParser.OpenBracket) {
				{
				this.state = 687;
				this.ctrlQuoteDotLiteral();
				this.state = 688;
				this.match(kacoParser.Comma);
				this.state = 689;
				this.ctrlQuoteDotLiteral();
				}
			}

			this.state = 693;
			this.match(kacoParser.CloseParen);
			this.state = 694;
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
	public taskFreeStatement(): TaskFreeStatementContext {
		let _localctx: TaskFreeStatementContext = new TaskFreeStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, kacoParser.RULE_taskFreeStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 696;
			this.match(kacoParser.TaskFree);
			this.state = 697;
			this.match(kacoParser.OpenParen);
			this.state = 702;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === kacoParser.OpenBracket) {
				{
				this.state = 698;
				this.ctrlQuoteDotLiteral();
				this.state = 699;
				this.match(kacoParser.Comma);
				this.state = 700;
				this.ctrlQuoteDotLiteral();
				}
			}

			this.state = 704;
			this.match(kacoParser.CloseParen);
			this.state = 705;
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
	public flowTestStatement(): FlowTestStatementContext {
		let _localctx: FlowTestStatementContext = new FlowTestStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, kacoParser.RULE_flowTestStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 707;
			this.match(kacoParser.FlowTest);
			this.state = 708;
			this.match(kacoParser.OpenParen);
			this.state = 709;
			this.match(kacoParser.CloseParen);
			this.state = 710;
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
	public flowDropStatement(): FlowDropStatementContext {
		let _localctx: FlowDropStatementContext = new FlowDropStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, kacoParser.RULE_flowDropStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 712;
			this.match(kacoParser.FlowDrop);
			this.state = 713;
			this.match(kacoParser.OpenParen);
			this.state = 715;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === kacoParser.OpenBracket) {
				{
				this.state = 714;
				this.ctrlQuoteDotLiteral();
				}
			}

			this.state = 717;
			this.match(kacoParser.CloseParen);
			this.state = 718;
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
		this.enterRule(_localctx, 118, kacoParser.RULE_expression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 720;
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
		this.enterRule(_localctx, 120, kacoParser.RULE_subTerm);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 722;
			this.addTerm();
			this.state = 727;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === kacoParser.Minus) {
				{
				{
				this.state = 723;
				this.match(kacoParser.Minus);
				this.state = 724;
				this.addTerm();
				}
				}
				this.state = 729;
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
		this.enterRule(_localctx, 122, kacoParser.RULE_addTerm);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 730;
			this.divTerm();
			this.state = 735;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === kacoParser.Plus) {
				{
				{
				this.state = 731;
				this.match(kacoParser.Plus);
				this.state = 732;
				this.divTerm();
				}
				}
				this.state = 737;
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
		this.enterRule(_localctx, 124, kacoParser.RULE_divTerm);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 738;
			this.mulTerm();
			this.state = 743;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === kacoParser.Divide) {
				{
				{
				this.state = 739;
				this.match(kacoParser.Divide);
				this.state = 740;
				this.mulTerm();
				}
				}
				this.state = 745;
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
		this.enterRule(_localctx, 126, kacoParser.RULE_mulTerm);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 746;
			this.parnTerm();
			this.state = 751;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === kacoParser.Multiply) {
				{
				{
				this.state = 747;
				this.match(kacoParser.Multiply);
				this.state = 748;
				this.parnTerm();
				}
				}
				this.state = 753;
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
		this.enterRule(_localctx, 128, kacoParser.RULE_parnTerm);
		try {
			this.state = 771;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 56, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 756;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case kacoParser.OpenBracket:
				case kacoParser.Natural:
				case kacoParser.StringLiteral:
				case kacoParser.BooleanLiteral:
				case kacoParser.NullLiteral:
				case kacoParser.DecimalLiteral:
					{
					this.state = 754;
					this.commonLiteral();
					}
					break;
				case kacoParser.SqlLiteral:
					{
					this.state = 755;
					this.match(kacoParser.SqlLiteral);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 758;
				this.expression();
				this.state = 761;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case kacoParser.OpenBracket:
				case kacoParser.Natural:
				case kacoParser.StringLiteral:
				case kacoParser.BooleanLiteral:
				case kacoParser.NullLiteral:
				case kacoParser.DecimalLiteral:
					{
					this.state = 759;
					this.commonLiteral();
					}
					break;
				case kacoParser.SqlLiteral:
					{
					this.state = 760;
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
				this.state = 765;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case kacoParser.OpenBracket:
				case kacoParser.Natural:
				case kacoParser.StringLiteral:
				case kacoParser.BooleanLiteral:
				case kacoParser.NullLiteral:
				case kacoParser.DecimalLiteral:
					{
					this.state = 763;
					this.commonLiteral();
					}
					break;
				case kacoParser.SqlLiteral:
					{
					this.state = 764;
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
				this.state = 767;
				this.match(kacoParser.OpenParen);
				this.state = 768;
				this.expression();
				this.state = 769;
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
		this.enterRule(_localctx, 130, kacoParser.RULE_assign);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 773;
			this.assignStart();
			this.state = 774;
			this.match(kacoParser.Assign);
			this.state = 775;
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
		this.enterRule(_localctx, 132, kacoParser.RULE_assignStart);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 797;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 60, this._ctx) ) {
			case 1:
				{
				{
				this.state = 782;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 57, this._ctx) ) {
				case 1:
					{
					this.state = 777;
					this.ctrlQuoteLiteral();
					}
					break;

				case 2:
					{
					this.state = 778;
					this.ctrlQuoteLiteral();
					this.state = 779;
					this.match(kacoParser.Dot);
					this.state = 780;
					this.ctrlQuoteLiteral();
					}
					break;
				}
				this.state = 788;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === kacoParser.Comma) {
					{
					{
					this.state = 784;
					this.match(kacoParser.Comma);
					this.state = 785;
					this.ctrlQuoteLiteral();
					}
					}
					this.state = 790;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				}
				break;

			case 2:
				{
				{
				this.state = 794;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 59, this._ctx) ) {
				case 1:
					{
					this.state = 791;
					this.ctrlQuoteLiteral();
					this.state = 792;
					this.match(kacoParser.Dot);
					}
					break;
				}
				this.state = 796;
				this.ctrlQuoteDotLiteral();
				}
				}
				break;
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
		this.enterRule(_localctx, 134, kacoParser.RULE_ctrlQuoteLiteral);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 799;
			this.match(kacoParser.OpenBracket);
			this.state = 800;
			this.match(kacoParser.StringLiteral);
			this.state = 801;
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
		this.enterRule(_localctx, 136, kacoParser.RULE_ctrlQuoteDotLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 803;
			this.match(kacoParser.OpenBracket);
			this.state = 804;
			this.match(kacoParser.StringLiteral);
			this.state = 807;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === kacoParser.Dot) {
				{
				this.state = 805;
				this.match(kacoParser.Dot);
				this.state = 806;
				this.match(kacoParser.StringLiteral);
				}
			}

			this.state = 813;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === kacoParser.Comma) {
				{
				{
				this.state = 809;
				this.match(kacoParser.Comma);
				this.state = 810;
				this.match(kacoParser.StringLiteral);
				}
				}
				this.state = 815;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 826;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === kacoParser.OpenParen) {
				{
				this.state = 816;
				this.match(kacoParser.OpenParen);
				this.state = 823;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case kacoParser.Selected:
					{
					{
					this.state = 817;
					this.match(kacoParser.Selected);
					this.state = 818;
					this.match(kacoParser.Equal);
					this.state = 819;
					_la = this._input.LA(1);
					if (!(_la === kacoParser.Multiply || _la === kacoParser.Natural || _la === kacoParser.DecimalLiteral)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
					}
					break;
				case kacoParser.StringLiteral:
					{
					{
					this.state = 820;
					this.match(kacoParser.StringLiteral);
					this.state = 821;
					this.match(kacoParser.Equal);
					this.state = 822;
					this.commonLiteral();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 825;
				this.match(kacoParser.CloseParen);
				}
			}

			this.state = 828;
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
		this.enterRule(_localctx, 138, kacoParser.RULE_ctrlQuoteParamLiteral);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 830;
			this.match(kacoParser.OpenBracket);
			this.state = 831;
			this.match(kacoParser.ParamLiteral);
			this.state = 832;
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
		this.enterRule(_localctx, 140, kacoParser.RULE_ctrlConstantLiteral);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 834;
			this.match(kacoParser.OpenBracket);
			this.state = 835;
			this.match(kacoParser.Const);
			this.state = 836;
			this.match(kacoParser.Constant);
			this.state = 837;
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
		this.enterRule(_localctx, 142, kacoParser.RULE_commonLiteral);
		try {
			this.state = 848;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 65, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 839;
				this.ctrlQuoteLiteral();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 840;
				this.ctrlQuoteDotLiteral();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 841;
				this.ctrlQuoteParamLiteral();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 842;
				this.ctrlConstantLiteral();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 843;
				this.match(kacoParser.DecimalLiteral);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 844;
				this.match(kacoParser.Natural);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 845;
				this.match(kacoParser.BooleanLiteral);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 846;
				this.match(kacoParser.NullLiteral);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 847;
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
		case 7:
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

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03`\u0355\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
		"\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x03\x02\x06\x02\x94\n\x02\r\x02\x0E\x02\x95" +
		"\x03\x02\x03\x02\x03\x03\x03\x03\x05\x03\x9C\n\x03\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x05\x04\xD0\n\x04\x03\x05\x03\x05\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07" +
		"\x03\x07\x03\x07\x07\x07\xE1\n\x07\f\x07\x0E\x07\xE4\v\x07\x03\x07\x03" +
		"\x07\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x05\t\xF0\n\t\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x07\t\u0101\n\t\f\t\x0E\t\u0104\v\t\x03\n\x03\n\x03\n\x03" +
		"\v\x03\v\x03\v\x03\v\x07\v\u010D\n\v\f\v\x0E\v\u0110\v\v\x05\v\u0112\n" +
		"\v\x03\v\x03\v\x03\f\x03\f\x05\f\u0118\n\f\x03\f\x03\f\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x05\r\u0121\n\r\x03\r\x05\r\u0124\n\r\x03\r\x05\r\u0127" +
		"\n\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F" +
		"\x05\x0F\u0132\n\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x05" +
		"\x10\u013A\n\x10\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11" +
		"\x03\x11\x03\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
		"\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13" +
		"\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x05\x14\u015A\n\x14\x03\x14\x05" +
		"\x14\u015D\n\x14\x03\x14\x05\x14\u0160\n\x14\x03\x14\x03\x14\x03\x15\x03" +
		"\x15\x03\x15\x03\x15\x05\x15\u0168\n\x15\x03\x15\x05\x15\u016B\n\x15\x03" +
		"\x15\x03\x15\x03\x16\x03\x16\x03\x16\x05\x16\u0172\n\x16\x03\x16\x03\x16" +
		"\x03\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x05\x17\u017D" +
		"\n\x17\x03\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18" +
		"\x03\x18\x05\x18\u0188\n\x18\x03\x18\x03\x18\x03\x18\x03\x19\x03\x19\x03" +
		"\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03" +
		"\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03" +
		"\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1E\x03" +
		"\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03" +
		"\x1F\x03\x1F\x03\x1F\x03\x1F\x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03" +
		"!\x03!\x03!\x03!\x03\"\x03\"\x03\"\x03\"\x03\"\x05\"\u01C8\n\"\x03\"\x03" +
		"\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03#\x03#\x03#\x03#\x03#\x05#\u01D6\n" +
		"#\x03#\x03#\x03#\x03$\x03$\x03$\x03$\x03$\x05$\u01E0\n$\x03$\x03$\x03" +
		"$\x05$\u01E5\n$\x03$\x03$\x03$\x03%\x03%\x03%\x03%\x03%\x03%\x05%\u01F0" +
		"\n%\x03%\x03%\x03%\x05%\u01F5\n%\x03%\x03%\x03%\x03&\x03&\x03&\x03&\x03" +
		"&\x03&\x05&\u0200\n&\x06&\u0202\n&\r&\x0E&\u0203\x03&\x03&\x03&\x03\'" +
		"\x03\'\x03\'\x03\'\x03\'\x05\'\u020E\n\'\x03\'\x03\'\x03\'\x03(\x03(\x03" +
		"(\x03(\x03(\x05(\u0218\n(\x03(\x03(\x03(\x03)\x03)\x03)\x03)\x03)\x03" +
		")\x03)\x03)\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x07*\u022C\n*\f*\x0E*\u022F" +
		"\v*\x05*\u0231\n*\x03*\x03*\x03*\x03+\x03+\x03+\x03+\x03+\x03+\x03,\x03" +
		",\x03,\x03,\x03,\x03,\x03-\x03-\x03-\x03-\x03-\x05-\u0247\n-\x03-\x03" +
		"-\x03-\x03.\x03.\x03.\x03.\x03.\x03.\x03/\x03/\x03/\x03/\x03/\x03/\x05" +
		"/\u0258\n/\x03/\x03/\x03/\x030\x030\x030\x050\u0260\n0\x030\x030\x030" +
		"\x030\x050\u0266\n0\x030\x030\x031\x031\x031\x031\x031\x032\x032\x032" +
		"\x032\x032\x032\x052\u0275\n2\x032\x032\x032\x033\x033\x033\x033\x033" +
		"\x033\x053\u0280\n3\x033\x033\x033\x034\x034\x034\x034\x034\x034\x054" +
		"\u028B\n4\x034\x034\x034\x035\x035\x035\x035\x035\x035\x055\u0296\n5\x03" +
		"5\x035\x035\x036\x036\x036\x036\x036\x037\x037\x037\x057\u02A3\n7\x03" +
		"7\x037\x037\x038\x038\x038\x058\u02AB\n8\x038\x038\x038\x039\x039\x03" +
		"9\x039\x039\x039\x059\u02B6\n9\x039\x039\x039\x03:\x03:\x03:\x03:\x03" +
		":\x03:\x05:\u02C1\n:\x03:\x03:\x03:\x03;\x03;\x03;\x03;\x03;\x03<\x03" +
		"<\x03<\x05<\u02CE\n<\x03<\x03<\x03<\x03=\x03=\x03>\x03>\x03>\x07>\u02D8" +
		"\n>\f>\x0E>\u02DB\v>\x03?\x03?\x03?\x07?\u02E0\n?\f?\x0E?\u02E3\v?\x03" +
		"@\x03@\x03@\x07@\u02E8\n@\f@\x0E@\u02EB\v@\x03A\x03A\x03A\x07A\u02F0\n" +
		"A\fA\x0EA\u02F3\vA\x03B\x03B\x05B\u02F7\nB\x03B\x03B\x03B\x05B\u02FC\n" +
		"B\x03B\x03B\x05B\u0300\nB\x03B\x03B\x03B\x03B\x05B\u0306\nB\x03C\x03C" +
		"\x03C\x03C\x03D\x03D\x03D\x03D\x03D\x05D\u0311\nD\x03D\x03D\x07D\u0315" +
		"\nD\fD\x0ED\u0318\vD\x03D\x03D\x03D\x05D\u031D\nD\x03D\x05D\u0320\nD\x03" +
		"E\x03E\x03E\x03E\x03F\x03F\x03F\x03F\x05F\u032A\nF\x03F\x03F\x07F\u032E" +
		"\nF\fF\x0EF\u0331\vF\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x05F\u033A\nF" +
		"\x03F\x05F\u033D\nF\x03F\x03F\x03G\x03G\x03G\x03G\x03H\x03H\x03H\x03H" +
		"\x03H\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x05I\u0353\nI\x03I" +
		"\x02\x02\x03\x10J\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10" +
		"\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02" +
		"$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02" +
		"@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02" +
		"\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02" +
		"x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C" +
		"\x02\x8E\x02\x90\x02\x02\b\x03\x02\x14\x17\x03\x02\v\f\x03\x02\x12\x13" +
		"\x05\x02PPSSVV\x03\x02RS\x05\x02\r\rPPVV\x02\u0389\x02\x93\x03\x02\x02" +
		"\x02\x04\x9B\x03\x02\x02\x02\x06\xCF\x03\x02\x02\x02\b\xD1\x03\x02\x02" +
		"\x02\n\xD7\x03\x02\x02\x02\f\xDD\x03\x02\x02\x02\x0E\xE7\x03\x02\x02\x02" +
		"\x10\xEF\x03\x02\x02\x02\x12\u0105\x03\x02\x02\x02\x14\u0108\x03\x02\x02" +
		"\x02\x16\u0115\x03\x02\x02\x02\x18\u011B\x03\x02\x02\x02\x1A\u012A\x03" +
		"\x02\x02\x02\x1C\u012E\x03\x02\x02\x02\x1E\u0136\x03\x02\x02\x02 \u013E" +
		"\x03\x02\x02\x02\"\u0146\x03\x02\x02\x02$\u014C\x03\x02\x02\x02&\u0154" +
		"\x03\x02\x02\x02(\u0163\x03\x02\x02\x02*\u016E\x03\x02\x02\x02,\u0176" +
		"\x03\x02\x02\x02.\u0181\x03\x02\x02\x020\u018C\x03\x02\x02\x022\u0190" +
		"\x03\x02\x02\x024\u0194\x03\x02\x02\x026\u0198\x03\x02\x02\x028\u01A0" +
		"\x03\x02\x02\x02:\u01A8\x03\x02\x02\x02<\u01AE\x03\x02\x02\x02>\u01B6" +
		"\x03\x02\x02\x02@\u01BE\x03\x02\x02\x02B\u01C2\x03\x02\x02\x02D\u01D0" +
		"\x03\x02\x02\x02F\u01DA\x03\x02\x02\x02H\u01E9\x03\x02\x02\x02J\u01F9" +
		"\x03\x02\x02\x02L\u0208\x03\x02\x02\x02N\u0212\x03\x02\x02\x02P\u021C" +
		"\x03\x02\x02\x02R\u0224\x03\x02\x02\x02T\u0235\x03\x02\x02\x02V\u023B" +
		"\x03\x02\x02\x02X\u0241\x03\x02\x02\x02Z\u024B\x03\x02\x02\x02\\\u0251" +
		"\x03\x02\x02\x02^\u025C\x03\x02\x02\x02`\u0269\x03\x02\x02\x02b\u026E" +
		"\x03\x02\x02\x02d\u0279\x03\x02\x02\x02f\u0284\x03\x02\x02\x02h\u028F" +
		"\x03\x02\x02\x02j\u029A\x03\x02\x02\x02l\u029F\x03\x02\x02\x02n\u02A7" +
		"\x03\x02\x02\x02p\u02AF\x03\x02\x02\x02r\u02BA\x03\x02\x02\x02t\u02C5" +
		"\x03\x02\x02\x02v\u02CA\x03\x02\x02\x02x\u02D2\x03\x02\x02\x02z\u02D4" +
		"\x03\x02\x02\x02|\u02DC\x03\x02\x02\x02~\u02E4\x03\x02\x02\x02\x80\u02EC" +
		"\x03\x02\x02\x02\x82\u0305\x03\x02\x02\x02\x84\u0307\x03\x02\x02\x02\x86" +
		"\u031F\x03\x02\x02\x02\x88\u0321\x03\x02\x02\x02\x8A\u0325\x03\x02\x02" +
		"\x02\x8C\u0340\x03\x02\x02\x02\x8E\u0344\x03\x02\x02\x02\x90\u0352\x03" +
		"\x02\x02\x02\x92\x94\x05\x04\x03\x02\x93\x92\x03\x02\x02\x02\x94\x95\x03" +
		"\x02\x02\x02\x95\x93\x03\x02\x02\x02\x95\x96\x03\x02\x02\x02\x96\x97\x03" +
		"\x02\x02\x02\x97\x98\x07\x02\x02\x03\x98\x03\x03\x02\x02\x02\x99\x9C\x05" +
		"\b\x05\x02\x9A\x9C\x05\x06\x04\x02\x9B\x99\x03\x02\x02\x02\x9B\x9A\x03" +
		"\x02\x02\x02\x9C\x05\x03\x02\x02\x02\x9D\xD0\x05\x18\r\x02\x9E\xD0\x05" +
		"\x1A\x0E\x02\x9F\xD0\x05\x1C\x0F\x02\xA0\xD0\x05\x1E\x10\x02\xA1\xD0\x05" +
		" \x11\x02\xA2\xD0\x05\"\x12\x02\xA3\xD0\x05$\x13\x02\xA4\xD0\x05&\x14" +
		"\x02\xA5\xD0\x05(\x15\x02\xA6\xD0\x05*\x16\x02\xA7\xD0\x05,\x17\x02\xA8" +
		"\xD0\x05.\x18\x02\xA9\xD0\x050\x19\x02\xAA\xD0\x052\x1A\x02\xAB\xD0\x05" +
		"4\x1B\x02\xAC\xD0\x056\x1C\x02\xAD\xD0\x058\x1D\x02\xAE\xD0\x05:\x1E\x02" +
		"\xAF\xD0\x05<\x1F\x02\xB0\xD0\x05> \x02\xB1\xD0\x05@!\x02\xB2\xD0\x05" +
		"B\"\x02\xB3\xD0\x05D#\x02\xB4\xD0\x05F$\x02\xB5\xD0\x05H%\x02\xB6\xD0" +
		"\x05J&\x02\xB7\xD0\x05L\'\x02\xB8\xD0\x05N(\x02\xB9\xD0\x05P)\x02\xBA" +
		"\xD0\x05R*\x02\xBB\xD0\x05T+\x02\xBC\xD0\x05V,\x02\xBD\xD0\x05X-\x02\xBE" +
		"\xD0\x05Z.\x02\xBF\xD0\x05\n\x06\x02\xC0\xD0\x05\\/\x02\xC1\xD0\x05^0" +
		"\x02\xC2\xD0\x05`1\x02\xC3\xD0\x05b2\x02\xC4\xD0\x05d3\x02\xC5\xD0\x05" +
		"f4\x02\xC6\xD0\x05h5\x02\xC7\xD0\x05j6\x02\xC8\xD0\x05l7\x02\xC9\xD0\x05" +
		"n8\x02\xCA\xD0\x05p9\x02\xCB\xD0\x05r:\x02\xCC\xD0\x05t;\x02\xCD\xD0\x05" +
		"v<\x02\xCE\xD0\x05\x12\n\x02\xCF\x9D\x03\x02\x02\x02\xCF\x9E\x03\x02\x02" +
		"\x02\xCF\x9F\x03\x02\x02\x02\xCF\xA0\x03\x02\x02\x02\xCF\xA1\x03\x02\x02" +
		"\x02\xCF\xA2\x03\x02\x02\x02\xCF\xA3\x03\x02\x02\x02\xCF\xA4\x03\x02\x02" +
		"\x02\xCF\xA5\x03\x02\x02\x02\xCF\xA6\x03\x02\x02\x02\xCF\xA7\x03\x02\x02" +
		"\x02\xCF\xA8\x03\x02\x02\x02\xCF\xA9\x03\x02\x02\x02\xCF\xAA\x03\x02\x02" +
		"\x02\xCF\xAB\x03\x02\x02\x02\xCF\xAC\x03\x02\x02\x02\xCF\xAD\x03\x02\x02" +
		"\x02\xCF\xAE\x03\x02\x02\x02\xCF\xAF\x03\x02\x02\x02\xCF\xB0\x03\x02\x02" +
		"\x02\xCF\xB1\x03\x02\x02\x02\xCF\xB2\x03\x02\x02\x02\xCF\xB3\x03\x02\x02" +
		"\x02\xCF\xB4\x03\x02\x02\x02\xCF\xB5\x03\x02\x02\x02\xCF\xB6\x03\x02\x02" +
		"\x02\xCF\xB7\x03\x02\x02\x02\xCF\xB8\x03\x02\x02\x02\xCF\xB9\x03\x02\x02" +
		"\x02\xCF\xBA\x03\x02\x02\x02\xCF\xBB\x03\x02\x02\x02\xCF\xBC\x03\x02\x02" +
		"\x02\xCF\xBD\x03\x02\x02\x02\xCF\xBE\x03\x02\x02\x02\xCF\xBF\x03\x02\x02" +
		"\x02\xCF\xC0\x03\x02\x02\x02\xCF\xC1\x03\x02\x02\x02\xCF\xC2\x03\x02\x02" +
		"\x02\xCF\xC3\x03\x02\x02\x02\xCF\xC4\x03\x02\x02\x02\xCF\xC5\x03\x02\x02" +
		"\x02\xCF\xC6\x03\x02\x02\x02\xCF\xC7\x03\x02\x02\x02\xCF\xC8\x03\x02\x02" +
		"\x02\xCF\xC9\x03\x02\x02\x02\xCF\xCA\x03\x02\x02\x02\xCF\xCB\x03\x02\x02" +
		"\x02\xCF\xCC\x03\x02\x02\x02\xCF\xCD\x03\x02\x02\x02\xCF\xCE\x03\x02\x02" +
		"\x02\xD0\x07\x03\x02\x02\x02\xD1\xD2\x07M\x02\x02\xD2\xD3\x07\x05\x02" +
		"\x02\xD3\xD4\x05\x0E\b\x02\xD4\xD5\x07\x06\x02\x02\xD5\xD6\x05\f\x07\x02" +
		"\xD6\t\x03\x02\x02\x02\xD7\xD8\x07N\x02\x02\xD8\xD9\x07\x05\x02\x02\xD9" +
		"\xDA\x05\x8AF\x02\xDA\xDB\x07\x06\x02\x02\xDB\xDC\x05\f\x07\x02\xDC\v" +
		"\x03\x02\x02\x02\xDD\xE2\x07\x07\x02\x02\xDE\xE1\x05\x06\x04\x02\xDF\xE1" +
		"\x05\x12\n\x02\xE0\xDE\x03\x02\x02\x02\xE0\xDF\x03\x02\x02\x02\xE1\xE4" +
		"\x03\x02\x02\x02\xE2\xE0\x03\x02\x02\x02\xE2\xE3\x03\x02\x02\x02\xE3\xE5" +
		"\x03\x02\x02\x02\xE4\xE2\x03\x02\x02\x02\xE5\xE6\x07\b\x02\x02\xE6\r\x03" +
		"\x02\x02\x02\xE7\xE8\x05\x10\t\x02\xE8\x0F\x03\x02\x02\x02\xE9\xEA\b\t" +
		"\x01\x02\xEA\xF0\x05\x90I\x02\xEB\xEC\x07\x05\x02\x02\xEC\xED\x05\x0E" +
		"\b\x02\xED\xEE\x07\x06\x02\x02\xEE\xF0\x03\x02\x02\x02\xEF\xE9\x03\x02" +
		"\x02\x02\xEF\xEB\x03\x02\x02\x02\xF0\u0102\x03\x02\x02\x02\xF1\xF2\f\b" +
		"\x02\x02\xF2\xF3\t\x02\x02\x02\xF3\u0101\x05\x10\t\t\xF4\xF5\f\x07\x02" +
		"\x02\xF5\xF6\t\x03\x02\x02\xF6\u0101\x05\x10\t\b\xF7\xF8\f\x06\x02\x02" +
		"\xF8\xF9\t\x04\x02\x02\xF9\u0101\x05\x10\t\x07\xFA\xFB\f\x05\x02\x02\xFB" +
		"\xFC\x07\x18\x02\x02\xFC\u0101\x05\x10\t\x06\xFD\xFE\f\x04\x02\x02\xFE" +
		"\xFF\x07\x19\x02\x02\xFF\u0101\x05\x10\t\x05\u0100\xF1\x03\x02\x02\x02" +
		"\u0100\xF4\x03\x02\x02\x02\u0100\xF7\x03\x02\x02\x02\u0100\xFA\x03\x02" +
		"\x02\x02\u0100\xFD\x03\x02\x02\x02\u0101\u0104\x03\x02\x02\x02\u0102\u0100" +
		"\x03\x02\x02\x02\u0102\u0103\x03\x02\x02\x02\u0103\x11\x03\x02\x02\x02" +
		"\u0104\u0102\x03\x02\x02\x02\u0105\u0106\x05\x84C\x02\u0106\u0107\x07" +
		"\t\x02\x02\u0107\x13\x03\x02\x02\x02\u0108\u0111\x07\x05\x02\x02\u0109" +
		"\u010E\x05\x90I\x02\u010A\u010B\x07\n\x02\x02\u010B\u010D\x05\x90I\x02" +
		"\u010C\u010A\x03\x02\x02\x02\u010D\u0110\x03\x02\x02\x02\u010E\u010C\x03" +
		"\x02\x02\x02\u010E\u010F\x03\x02\x02\x02\u010F\u0112\x03\x02\x02\x02\u0110" +
		"\u010E\x03\x02\x02\x02\u0111\u0109\x03\x02\x02\x02\u0111\u0112\x03\x02" +
		"\x02\x02\u0112\u0113\x03\x02\x02\x02\u0113\u0114\x07\x06\x02\x02\u0114" +
		"\x15\x03\x02\x02\x02\u0115\u0117\x07\x05\x02\x02\u0116\u0118\x07P\x02" +
		"\x02\u0117\u0116\x03\x02\x02\x02\u0117\u0118\x03\x02\x02\x02\u0118\u0119" +
		"\x03\x02\x02\x02\u0119\u011A\x07\x06\x02\x02\u011A\x17\x03\x02\x02\x02" +
		"\u011B\u011C\x07\x1C\x02\x02\u011C\u011D\x07\x03\x02\x02\u011D\u011E\t" +
		"\x05\x02\x02\u011E\u0120\x07\x04\x02\x02\u011F\u0121\x05\x14\v\x02\u0120" +
		"\u011F\x03\x02\x02\x02\u0120\u0121\x03\x02\x02\x02\u0121\u0123\x03\x02" +
		"\x02\x02\u0122\u0124\x05\x14\v\x02\u0123\u0122\x03\x02\x02\x02\u0123\u0124" +
		"\x03\x02\x02\x02\u0124\u0126\x03\x02\x02\x02\u0125\u0127\x05\x14\v\x02" +
		"\u0126\u0125\x03\x02\x02\x02\u0126\u0127\x03\x02\x02\x02\u0127\u0128\x03" +
		"\x02\x02\x02\u0128\u0129\x07\t\x02\x02\u0129\x19\x03\x02\x02\x02\u012A" +
		"\u012B\x07\x1D\x02\x02\u012B\u012C\x05\x14\v\x02\u012C\u012D\x07\t\x02" +
		"\x02\u012D\x1B\x03\x02\x02\x02\u012E\u012F\x07\x1E\x02\x02\u012F\u0131" +
		"\x07\x05\x02\x02\u0130\u0132\x07S\x02\x02\u0131\u0130\x03\x02\x02\x02" +
		"\u0131\u0132\x03\x02\x02\x02\u0132\u0133\x03\x02\x02\x02\u0133\u0134\x07" +
		"\x06\x02\x02\u0134\u0135\x07\t\x02\x02\u0135\x1D\x03\x02\x02\x02\u0136" +
		"\u0137\x07\x1F\x02\x02\u0137\u0139\x07\x05\x02\x02\u0138\u013A\x07S\x02" +
		"\x02\u0139\u0138\x03\x02\x02\x02\u0139\u013A\x03\x02\x02\x02\u013A\u013B" +
		"\x03\x02\x02\x02\u013B\u013C\x07\x06\x02\x02\u013C\u013D\x07\t\x02\x02" +
		"\u013D\x1F\x03\x02\x02\x02\u013E\u013F\x07 \x02\x02\u013F\u0140\x07\x05" +
		"\x02\x02\u0140\u0141\x07Q\x02\x02\u0141\u0142\x07\n\x02\x02\u0142\u0143" +
		"\x07S\x02\x02\u0143\u0144\x07\x06\x02\x02\u0144\u0145\x07\t\x02\x02\u0145" +
		"!\x03\x02\x02\x02\u0146\u0147\x07!\x02\x02\u0147\u0148\x07\x05\x02\x02" +
		"\u0148\u0149\x05\x88E\x02\u0149\u014A\x07\x06\x02\x02\u014A\u014B\x07" +
		"\t\x02\x02\u014B#\x03\x02\x02\x02\u014C\u014D\x07\"\x02\x02\u014D\u014E" +
		"\x07\x05\x02\x02\u014E\u014F\x05\x88E\x02\u014F\u0150\x07\n\x02\x02\u0150" +
		"\u0151\x07X\x02\x02\u0151\u0152\x07\x06\x02\x02\u0152\u0153\x07\t\x02" +
		"\x02\u0153%\x03\x02\x02\x02\u0154\u0155\x07#\x02\x02\u0155\u0156\x05\x88" +
		"E\x02\u0156\u0157\x07\n\x02\x02\u0157\u0159\x05\x88E\x02\u0158\u015A\x05" +
		"\x14\v\x02\u0159\u0158\x03\x02\x02\x02\u0159\u015A\x03\x02\x02\x02\u015A" +
		"\u015C\x03\x02\x02\x02\u015B\u015D\x05\x16\f\x02\u015C\u015B\x03\x02\x02" +
		"\x02\u015C\u015D\x03\x02\x02\x02\u015D\u015F\x03\x02\x02\x02\u015E\u0160" +
		"\x05\x16\f\x02\u015F\u015E\x03\x02\x02\x02\u015F\u0160\x03\x02\x02\x02" +
		"\u0160\u0161\x03\x02\x02\x02\u0161\u0162\x07\t\x02\x02\u0162\'\x03\x02" +
		"\x02\x02\u0163\u0164\x07$\x02\x02\u0164\u016A\x05\x88E\x02\u0165\u0167" +
		"\x07\x05\x02\x02\u0166\u0168\x05\x88E\x02\u0167\u0166\x03\x02\x02\x02" +
		"\u0167\u0168\x03\x02\x02\x02\u0168\u0169\x03\x02\x02\x02\u0169\u016B\x07" +
		"\x06\x02\x02\u016A\u0165\x03\x02\x02\x02\u016A\u016B\x03\x02\x02\x02\u016B" +
		"\u016C\x03\x02\x02\x02\u016C\u016D\x07\t\x02\x02\u016D)\x03\x02\x02\x02" +
		"\u016E\u016F\x07%\x02\x02\u016F\u0171\x07\x05\x02\x02\u0170\u0172\x07" +
		"X\x02\x02\u0171\u0170\x03\x02\x02\x02\u0171\u0172\x03\x02\x02\x02\u0172" +
		"\u0173\x03\x02\x02\x02\u0173\u0174\x07\x06\x02\x02\u0174\u0175\x07\t\x02" +
		"\x02\u0175+\x03\x02\x02\x02\u0176\u0177\x07&\x02\x02\u0177\u017C\x07\x05" +
		"\x02\x02\u0178\u0179\x05\x88E\x02\u0179\u017A\x07\n\x02\x02\u017A\u017B" +
		"\x07S\x02\x02\u017B\u017D\x03\x02\x02\x02\u017C\u0178\x03\x02\x02\x02" +
		"\u017C\u017D\x03\x02\x02\x02\u017D\u017E\x03\x02\x02\x02\u017E\u017F\x07" +
		"\x06\x02\x02\u017F\u0180\x07\t\x02\x02\u0180-\x03\x02\x02\x02\u0181\u0182" +
		"\x07\'\x02\x02\u0182\u0187\x07\x05\x02\x02\u0183\u0184\x05\x88E\x02\u0184" +
		"\u0185\x07\n\x02\x02\u0185\u0186\x07S\x02\x02\u0186\u0188\x03\x02\x02" +
		"\x02\u0187\u0183\x03\x02\x02\x02\u0187\u0188\x03\x02\x02\x02\u0188\u0189" +
		"\x03\x02\x02\x02\u0189\u018A\x07\x06\x02\x02\u018A\u018B\x07\t\x02\x02" +
		"\u018B/\x03\x02\x02\x02\u018C\u018D\x07(\x02\x02\u018D\u018E\x05\x14\v" +
		"\x02\u018E\u018F\x07\t\x02\x02\u018F1\x03\x02\x02\x02\u0190\u0191\x07" +
		")\x02\x02\u0191\u0192\x05\x14\v\x02\u0192\u0193\x07\t\x02\x02\u01933\x03" +
		"\x02\x02\x02\u0194\u0195\x07*\x02\x02\u0195\u0196\x05\x14\v\x02\u0196" +
		"\u0197\x07\t\x02\x02\u01975\x03\x02\x02\x02\u0198\u0199\x07+\x02\x02\u0199" +
		"\u019A\x07\x05\x02\x02\u019A\u019B\x05\x88E\x02\u019B\u019C\x07\n\x02" +
		"\x02\u019C\u019D\x07P\x02\x02\u019D\u019E\x07\x06\x02\x02\u019E\u019F" +
		"\x07\t\x02\x02\u019F7\x03\x02\x02\x02\u01A0\u01A1\x07,\x02\x02\u01A1\u01A2" +
		"\x07\x05\x02\x02\u01A2\u01A3\x05\x88E\x02\u01A3\u01A4\x07\n\x02\x02\u01A4" +
		"\u01A5\x07P\x02\x02\u01A5\u01A6\x07\x06\x02\x02\u01A6\u01A7\x07\t\x02" +
		"\x02\u01A79\x03\x02\x02\x02\u01A8\u01A9\x07-\x02\x02\u01A9\u01AA\x07\x05" +
		"\x02\x02\u01AA\u01AB\x05\x88E\x02\u01AB\u01AC\x07\x06\x02\x02\u01AC\u01AD" +
		"\x07\t\x02\x02\u01AD;\x03\x02\x02\x02\u01AE\u01AF\x07.\x02\x02\u01AF\u01B0" +
		"\x07\x05\x02\x02\u01B0\u01B1\x05\x88E\x02\u01B1\u01B2\x07\n\x02\x02\u01B2" +
		"\u01B3\t\x06\x02\x02\u01B3\u01B4\x07\x06\x02\x02\u01B4\u01B5\x07\t\x02" +
		"\x02\u01B5=\x03\x02\x02\x02\u01B6\u01B7\x07/\x02\x02\u01B7\u01B8\x07\x05" +
		"\x02\x02\u01B8\u01B9\x05\x88E\x02\u01B9\u01BA\x07\n\x02\x02\u01BA\u01BB" +
		"\x07P\x02\x02\u01BB\u01BC\x07\x06\x02\x02\u01BC\u01BD\x07\t\x02\x02\u01BD" +
		"?\x03\x02\x02\x02\u01BE\u01BF\x070\x02\x02\u01BF\u01C0\x05\x14\v\x02\u01C0" +
		"\u01C1\x07\t\x02\x02\u01C1A\x03\x02\x02\x02\u01C2\u01C3\x071\x02\x02\u01C3" +
		"\u01C4\x05\x88E\x02\u01C4\u01C7\x07\x05\x02\x02\u01C5\u01C8\x05\x88E\x02" +
		"\u01C6\u01C8\x07S\x02\x02\u01C7\u01C5\x03\x02\x02\x02\u01C7\u01C6\x03" +
		"\x02\x02\x02\u01C8\u01C9\x03\x02\x02\x02\u01C9\u01CA\x07\n\x02\x02\u01CA" +
		"\u01CB\x07P\x02\x02\u01CB\u01CC\x07\n\x02\x02\u01CC\u01CD\x07P\x02\x02" +
		"\u01CD\u01CE\x07\x06\x02\x02\u01CE\u01CF\x07\t\x02\x02\u01CFC\x03\x02" +
		"\x02\x02\u01D0\u01D1\x072\x02\x02\u01D1\u01D2\x05\x88E\x02\u01D2\u01D5" +
		"\x07\x05\x02\x02\u01D3\u01D6\x05\x88E\x02\u01D4\u01D6\x07S\x02\x02\u01D5" +
		"\u01D3\x03\x02\x02\x02\u01D5\u01D4\x03\x02\x02\x02\u01D6\u01D7\x03\x02" +
		"\x02\x02\u01D7\u01D8\x07\x06\x02\x02\u01D8\u01D9\x07\t\x02\x02\u01D9E" +
		"\x03\x02\x02\x02\u01DA\u01DB\x073\x02\x02\u01DB\u01DC\x05\x88E\x02\u01DC" +
		"\u01DF\x07\x05\x02\x02\u01DD\u01E0\x07S\x02\x02\u01DE\u01E0\x05\x88E\x02" +
		"\u01DF\u01DD\x03\x02\x02\x02\u01DF\u01DE\x03\x02\x02\x02\u01E0\u01E1\x03" +
		"\x02\x02\x02\u01E1\u01E4\x07\n\x02\x02\u01E2\u01E5\x07S\x02\x02\u01E3" +
		"\u01E5\x05\x88E\x02\u01E4\u01E2\x03\x02\x02\x02\u01E4\u01E3\x03\x02\x02" +
		"\x02\u01E5\u01E6\x03\x02\x02\x02\u01E6\u01E7\x07\x06\x02\x02\u01E7\u01E8" +
		"\x07\t\x02\x02\u01E8G\x03\x02\x02\x02\u01E9\u01EA\x074\x02\x02\u01EA\u01EB" +
		"\x07\x05\x02\x02\u01EB\u01EC\x05\x88E\x02\u01EC\u01EF\x07\n\x02\x02\u01ED" +
		"\u01F0\x07S\x02\x02\u01EE\u01F0\x05\x88E\x02\u01EF\u01ED\x03\x02\x02\x02" +
		"\u01EF\u01EE\x03\x02\x02\x02\u01F0\u01F1\x03\x02\x02\x02\u01F1\u01F4\x07" +
		"\n\x02\x02\u01F2";
	private static readonly _serializedATNSegment1: string =
		"\u01F5\x07S\x02\x02\u01F3\u01F5\x05\x88E\x02\u01F4\u01F2\x03\x02\x02\x02" +
		"\u01F4\u01F3\x03\x02\x02\x02\u01F5\u01F6\x03\x02\x02\x02\u01F6\u01F7\x07" +
		"\x06\x02\x02\u01F7\u01F8\x07\t\x02\x02\u01F8I\x03\x02\x02\x02\u01F9\u01FA" +
		"\x075\x02\x02\u01FA\u01FB\x07\x05\x02\x02\u01FB\u0201\x05\x88E\x02\u01FC" +
		"\u01FF\x07\n\x02\x02\u01FD\u0200\x07S\x02\x02\u01FE\u0200\x05\x88E\x02" +
		"\u01FF\u01FD\x03\x02\x02\x02\u01FF\u01FE\x03\x02\x02\x02\u0200\u0202\x03" +
		"\x02\x02\x02\u0201\u01FC\x03\x02\x02\x02\u0202\u0203\x03\x02\x02\x02\u0203" +
		"\u0201\x03\x02\x02\x02\u0203\u0204\x03\x02\x02\x02\u0204\u0205\x03\x02" +
		"\x02\x02\u0205\u0206\x07\x06\x02\x02\u0206\u0207\x07\t\x02\x02\u0207K" +
		"\x03\x02\x02\x02\u0208\u0209\x076\x02\x02\u0209\u020A\x05\x88E\x02\u020A" +
		"\u020D\x07\x05\x02\x02\u020B\u020E\x07S\x02\x02\u020C\u020E\x05\x88E\x02" +
		"\u020D\u020B\x03\x02\x02\x02\u020D\u020C\x03\x02\x02\x02\u020E\u020F\x03" +
		"\x02\x02\x02\u020F\u0210\x07\x06\x02\x02\u0210\u0211\x07\t\x02\x02\u0211" +
		"M\x03\x02\x02\x02\u0212\u0213\x077\x02\x02\u0213\u0214\x05\x88E\x02\u0214" +
		"\u0217\x07\x05\x02\x02\u0215\u0218\x07S\x02\x02\u0216\u0218\x05\x88E\x02" +
		"\u0217\u0215\x03\x02\x02\x02\u0217\u0216\x03\x02\x02\x02\u0218\u0219\x03" +
		"\x02\x02\x02\u0219\u021A\x07\x06\x02\x02\u021A\u021B\x07\t\x02\x02\u021B" +
		"O\x03\x02\x02\x02\u021C\u021D\x078\x02\x02\u021D\u021E\x07\x05\x02\x02" +
		"\u021E\u021F\x05\x88E\x02\u021F\u0220\x07\n\x02\x02\u0220\u0221\x05\x8A" +
		"F\x02\u0221\u0222\x07\x06\x02\x02\u0222\u0223\x07\t\x02\x02\u0223Q\x03" +
		"\x02\x02\x02\u0224\u0225\x079\x02\x02\u0225\u0226\x07\x05\x02\x02\u0226" +
		"\u0230\x05\x8AF\x02\u0227\u0228\x07\n\x02\x02\u0228\u0231\x05\x8AF\x02" +
		"\u0229\u022A\x07\n\x02\x02\u022A\u022C\x05\x90I\x02\u022B\u0229\x03\x02" +
		"\x02\x02\u022C\u022F\x03\x02\x02\x02\u022D\u022B\x03\x02\x02\x02\u022D" +
		"\u022E\x03\x02\x02\x02\u022E\u0231\x03\x02\x02\x02\u022F\u022D\x03\x02" +
		"\x02\x02\u0230\u0227\x03\x02\x02\x02\u0230\u022D\x03\x02\x02\x02\u0231" +
		"\u0232\x03\x02\x02\x02\u0232\u0233\x07\x06\x02\x02\u0233\u0234\x07\t\x02" +
		"\x02\u0234S\x03\x02\x02\x02\u0235\u0236\x07:\x02\x02\u0236\u0237\x07\x05" +
		"\x02\x02\u0237\u0238\x05\x8AF\x02\u0238\u0239\x07\x06\x02\x02\u0239\u023A" +
		"\x07\t\x02\x02\u023AU\x03\x02\x02\x02\u023B\u023C\x07;\x02\x02\u023C\u023D" +
		"\x07\x05\x02\x02\u023D\u023E\x05\x8AF\x02\u023E\u023F\x07\x06\x02\x02" +
		"\u023F\u0240\x07\t\x02\x02\u0240W\x03\x02\x02\x02\u0241\u0242\x07<\x02" +
		"\x02\u0242\u0243\x07\x05\x02\x02\u0243\u0246\x05\x88E\x02\u0244\u0245" +
		"\x07\n\x02\x02\u0245\u0247\x07P\x02\x02\u0246\u0244\x03\x02\x02\x02\u0246" +
		"\u0247\x03\x02\x02\x02\u0247\u0248\x03\x02\x02\x02\u0248\u0249\x07\x06" +
		"\x02\x02\u0249\u024A\x07\t\x02\x02\u024AY\x03\x02\x02\x02\u024B\u024C" +
		"\x07=\x02\x02\u024C\u024D\x07\x05\x02\x02\u024D\u024E\x05\x88E\x02\u024E" +
		"\u024F\x07\x06\x02\x02\u024F\u0250\x07\t\x02\x02\u0250[\x03\x02\x02\x02" +
		"\u0251\u0252\x07>\x02\x02\u0252\u0257\x07\x05\x02\x02\u0253\u0254\x05" +
		"\x8AF\x02\u0254\u0255\x07\n\x02\x02\u0255\u0256\x05\x8AF\x02\u0256\u0258" +
		"\x03\x02\x02\x02\u0257\u0253\x03\x02\x02\x02\u0257\u0258\x03\x02\x02\x02" +
		"\u0258\u0259\x03\x02\x02\x02\u0259\u025A\x07\x06\x02\x02\u025A\u025B\x07" +
		"\t\x02\x02\u025B]\x03\x02\x02\x02\u025C\u025D\x07?\x02\x02\u025D\u025F" +
		"\x07\x05\x02\x02\u025E\u0260\x05\x88E\x02\u025F\u025E\x03\x02\x02\x02" +
		"\u025F\u0260\x03\x02\x02\x02\u0260\u0261\x03\x02\x02\x02\u0261\u0265\x07" +
		"\x06\x02\x02\u0262\u0263\x07\x05\x02\x02\u0263\u0264\x07P\x02\x02\u0264" +
		"\u0266\x07\x06\x02\x02\u0265\u0262\x03\x02\x02\x02\u0265\u0266\x03\x02" +
		"\x02\x02\u0266\u0267\x03\x02\x02\x02\u0267\u0268\x07\t\x02\x02\u0268_" +
		"\x03\x02\x02\x02\u0269\u026A\x07@\x02\x02\u026A\u026B\x07\x05\x02\x02" +
		"\u026B\u026C\x07\x06\x02\x02\u026C\u026D\x07\t\x02\x02\u026Da\x03\x02" +
		"\x02\x02\u026E\u026F\x07A\x02\x02\u026F\u0274\x07\x05\x02\x02\u0270\u0271" +
		"\x05\x8AF\x02\u0271\u0272\x07\n\x02\x02\u0272\u0273\x05\x8AF\x02\u0273" +
		"\u0275\x03\x02\x02\x02\u0274\u0270\x03\x02\x02\x02\u0274\u0275\x03\x02" +
		"\x02\x02\u0275\u0276\x03\x02\x02\x02\u0276\u0277\x07\x06\x02\x02\u0277" +
		"\u0278\x07\t\x02\x02\u0278c\x03\x02\x02\x02\u0279\u027A\x07B\x02\x02\u027A" +
		"\u027F\x07\x05\x02\x02\u027B\u027C\x05\x8AF\x02\u027C\u027D\x07\n\x02" +
		"\x02\u027D\u027E\x05\x8AF\x02\u027E\u0280\x03\x02\x02\x02\u027F\u027B" +
		"\x03\x02\x02\x02\u027F\u0280\x03\x02\x02\x02\u0280\u0281\x03\x02\x02\x02" +
		"\u0281\u0282\x07\x06\x02\x02\u0282\u0283\x07\t\x02\x02\u0283e\x03\x02" +
		"\x02\x02\u0284\u0285\x07C\x02\x02\u0285\u028A\x07\x05\x02\x02\u0286\u0287" +
		"\x05\x8AF\x02\u0287\u0288\x07\n\x02\x02\u0288\u0289\x05\x8AF\x02\u0289" +
		"\u028B\x03\x02\x02\x02\u028A\u0286\x03\x02\x02\x02\u028A\u028B\x03\x02" +
		"\x02\x02\u028B\u028C\x03\x02\x02\x02\u028C\u028D\x07\x06\x02\x02\u028D" +
		"\u028E\x07\t\x02\x02\u028Eg\x03\x02\x02\x02\u028F\u0290\x07D\x02\x02\u0290" +
		"\u0295\x07\x05\x02\x02\u0291\u0292\x05\x8AF\x02\u0292\u0293\x07\n\x02" +
		"\x02\u0293\u0294\x05\x8AF\x02\u0294\u0296\x03\x02\x02\x02\u0295\u0291" +
		"\x03\x02\x02\x02\u0295\u0296\x03\x02\x02\x02\u0296\u0297\x03\x02\x02\x02" +
		"\u0297\u0298\x07\x06\x02\x02\u0298\u0299\x07\t\x02\x02\u0299i\x03\x02" +
		"\x02\x02\u029A\u029B\x07E\x02\x02\u029B\u029C\x07\x05\x02\x02\u029C\u029D" +
		"\x07\x06\x02\x02\u029D\u029E\x07\t\x02\x02\u029Ek\x03\x02\x02\x02\u029F" +
		"\u02A0\x07F\x02\x02\u02A0\u02A2\x07\x05\x02\x02\u02A1\u02A3\x05\x8AF\x02" +
		"\u02A2\u02A1\x03\x02\x02\x02\u02A2\u02A3\x03\x02\x02\x02\u02A3\u02A4\x03" +
		"\x02\x02\x02\u02A4\u02A5\x07\x06\x02\x02\u02A5\u02A6\x07\t\x02\x02\u02A6" +
		"m\x03\x02\x02\x02\u02A7\u02A8\x07G\x02\x02\u02A8\u02AA\x07\x05\x02\x02" +
		"\u02A9\u02AB\x05\x8AF\x02\u02AA\u02A9\x03\x02\x02\x02\u02AA\u02AB\x03" +
		"\x02\x02\x02\u02AB\u02AC\x03\x02\x02\x02\u02AC\u02AD\x07\x06\x02\x02\u02AD" +
		"\u02AE\x07\t\x02\x02\u02AEo\x03\x02\x02\x02\u02AF\u02B0\x07H\x02\x02\u02B0" +
		"\u02B5\x07\x05\x02\x02\u02B1\u02B2\x05\x8AF\x02\u02B2\u02B3\x07\n\x02" +
		"\x02\u02B3\u02B4\x05\x8AF\x02\u02B4\u02B6\x03\x02\x02\x02\u02B5\u02B1" +
		"\x03\x02\x02\x02\u02B5\u02B6\x03\x02\x02\x02\u02B6\u02B7\x03\x02\x02\x02" +
		"\u02B7\u02B8\x07\x06\x02\x02\u02B8\u02B9\x07\t\x02\x02\u02B9q\x03\x02" +
		"\x02\x02\u02BA\u02BB\x07I\x02\x02\u02BB\u02C0\x07\x05\x02\x02\u02BC\u02BD" +
		"\x05\x8AF\x02\u02BD\u02BE\x07\n\x02\x02\u02BE\u02BF\x05\x8AF\x02\u02BF" +
		"\u02C1\x03\x02\x02\x02\u02C0\u02BC\x03\x02\x02\x02\u02C0\u02C1\x03\x02" +
		"\x02\x02\u02C1\u02C2\x03\x02\x02\x02\u02C2\u02C3\x07\x06\x02\x02\u02C3" +
		"\u02C4\x07\t\x02\x02\u02C4s\x03\x02\x02\x02\u02C5\u02C6\x07J\x02\x02\u02C6" +
		"\u02C7\x07\x05\x02\x02\u02C7\u02C8\x07\x06\x02\x02\u02C8\u02C9\x07\t\x02" +
		"\x02\u02C9u\x03\x02\x02\x02\u02CA\u02CB\x07K\x02\x02\u02CB\u02CD\x07\x05" +
		"\x02\x02\u02CC\u02CE\x05\x8AF\x02\u02CD\u02CC\x03\x02\x02\x02\u02CD\u02CE" +
		"\x03\x02\x02\x02\u02CE\u02CF\x03\x02\x02\x02\u02CF\u02D0\x07\x06\x02\x02" +
		"\u02D0\u02D1\x07\t\x02\x02\u02D1w\x03\x02\x02\x02\u02D2\u02D3\x05z>\x02" +
		"\u02D3y\x03\x02\x02\x02\u02D4\u02D9\x05|?\x02\u02D5\u02D6\x07\f\x02\x02" +
		"\u02D6\u02D8\x05|?\x02\u02D7\u02D5\x03\x02\x02\x02\u02D8\u02DB\x03\x02" +
		"\x02\x02\u02D9\u02D7\x03\x02\x02\x02\u02D9\u02DA\x03\x02\x02\x02\u02DA" +
		"{\x03\x02\x02\x02\u02DB\u02D9\x03\x02\x02\x02\u02DC\u02E1\x05~@\x02\u02DD" +
		"\u02DE\x07\v\x02\x02\u02DE\u02E0\x05~@\x02\u02DF\u02DD\x03\x02\x02\x02" +
		"\u02E0\u02E3\x03\x02\x02\x02\u02E1\u02DF\x03\x02\x02\x02\u02E1\u02E2\x03" +
		"\x02\x02\x02\u02E2}\x03\x02\x02\x02\u02E3\u02E1\x03\x02\x02\x02\u02E4" +
		"\u02E9\x05\x80A\x02\u02E5\u02E6\x07\x0E\x02\x02\u02E6\u02E8\x05\x80A\x02" +
		"\u02E7\u02E5\x03\x02\x02\x02\u02E8\u02EB\x03\x02\x02\x02\u02E9\u02E7\x03" +
		"\x02\x02\x02\u02E9\u02EA\x03\x02\x02\x02\u02EA\x7F\x03\x02\x02\x02\u02EB" +
		"\u02E9\x03\x02\x02\x02\u02EC\u02F1\x05\x82B\x02\u02ED\u02EE\x07\r\x02" +
		"\x02\u02EE\u02F0\x05\x82B\x02\u02EF\u02ED\x03\x02\x02\x02\u02F0\u02F3" +
		"\x03\x02\x02\x02\u02F1\u02EF\x03\x02\x02\x02\u02F1\u02F2\x03\x02\x02\x02" +
		"\u02F2\x81\x03\x02\x02\x02\u02F3\u02F1\x03\x02\x02\x02\u02F4\u02F7\x05" +
		"\x90I\x02\u02F5\u02F7\x07X\x02\x02\u02F6\u02F4\x03\x02\x02\x02\u02F6\u02F5" +
		"\x03\x02\x02\x02\u02F7\u02F8\x03\x02\x02\x02\u02F8\u02FB\x05x=\x02\u02F9" +
		"\u02FC\x05\x90I\x02\u02FA\u02FC\x07X\x02\x02\u02FB\u02F9\x03\x02\x02\x02" +
		"\u02FB\u02FA\x03\x02\x02\x02\u02FC\u0306\x03\x02\x02\x02\u02FD\u0300\x05" +
		"\x90I\x02\u02FE\u0300\x07X\x02\x02\u02FF\u02FD\x03\x02\x02\x02\u02FF\u02FE" +
		"\x03\x02\x02\x02\u0300\u0306\x03\x02\x02\x02\u0301\u0302\x07\x05\x02\x02" +
		"\u0302\u0303\x05x=\x02\u0303\u0304\x07\x06\x02\x02\u0304\u0306\x03\x02" +
		"\x02\x02\u0305\u02F6\x03\x02\x02\x02\u0305\u02FF\x03\x02\x02\x02\u0305" +
		"\u0301\x03\x02\x02\x02\u0306\x83\x03\x02\x02\x02\u0307\u0308\x05\x86D" +
		"\x02\u0308\u0309\x07\x0F\x02\x02\u0309\u030A\x05x=\x02\u030A\x85\x03\x02" +
		"\x02\x02\u030B\u0311\x05\x88E\x02\u030C\u030D\x05\x88E\x02\u030D\u030E" +
		"\x07\x10\x02\x02\u030E\u030F\x05\x88E\x02\u030F\u0311\x03\x02\x02\x02" +
		"\u0310\u030B\x03\x02\x02\x02\u0310\u030C\x03\x02\x02\x02\u0311\u0316\x03" +
		"\x02\x02\x02\u0312\u0313\x07\n\x02\x02\u0313\u0315\x05\x88E\x02\u0314" +
		"\u0312\x03\x02\x02\x02\u0315\u0318\x03\x02\x02\x02\u0316\u0314\x03\x02" +
		"\x02\x02\u0316\u0317\x03\x02\x02\x02\u0317\u0320\x03\x02\x02\x02\u0318" +
		"\u0316\x03\x02\x02\x02\u0319\u031A\x05\x88E\x02\u031A\u031B\x07\x10\x02" +
		"\x02\u031B\u031D\x03\x02\x02\x02\u031C\u0319\x03\x02\x02\x02\u031C\u031D" +
		"\x03\x02\x02\x02\u031D\u031E\x03\x02\x02\x02\u031E\u0320\x05\x8AF\x02" +
		"\u031F\u0310\x03\x02\x02\x02\u031F\u031C\x03\x02\x02\x02\u0320\x87\x03" +
		"\x02\x02\x02\u0321\u0322\x07\x03\x02\x02\u0322\u0323\x07S\x02\x02\u0323" +
		"\u0324\x07\x04\x02\x02\u0324\x89\x03\x02\x02\x02\u0325\u0326\x07\x03\x02" +
		"\x02\u0326\u0329\x07S\x02\x02\u0327\u0328\x07\x10\x02\x02\u0328\u032A" +
		"\x07S\x02\x02\u0329\u0327\x03\x02\x02\x02\u0329\u032A\x03\x02\x02\x02" +
		"\u032A\u032F\x03\x02\x02\x02\u032B\u032C\x07\n\x02\x02\u032C\u032E\x07" +
		"S\x02\x02\u032D\u032B\x03\x02\x02\x02\u032E\u0331\x03\x02\x02\x02\u032F" +
		"\u032D\x03\x02\x02\x02\u032F\u0330\x03\x02\x02\x02\u0330\u033C\x03\x02" +
		"\x02\x02\u0331\u032F\x03\x02\x02\x02\u0332\u0339\x07\x05\x02\x02\u0333" +
		"\u0334\x07L\x02\x02\u0334\u0335\x07\x12\x02\x02\u0335\u033A\t\x07\x02" +
		"\x02\u0336\u0337\x07S\x02\x02\u0337\u0338\x07\x12\x02\x02\u0338\u033A" +
		"\x05\x90I\x02\u0339\u0333\x03\x02\x02\x02\u0339\u0336\x03\x02\x02\x02" +
		"\u033A\u033B\x03\x02\x02\x02\u033B\u033D\x07\x06\x02\x02\u033C\u0332\x03" +
		"\x02\x02\x02\u033C\u033D\x03\x02\x02\x02\u033D\u033E\x03\x02\x02\x02\u033E" +
		"\u033F\x07\x04\x02\x02\u033F\x8B\x03\x02\x02\x02\u0340\u0341\x07\x03\x02" +
		"\x02\u0341\u0342\x07W\x02\x02\u0342\u0343\x07\x04\x02\x02\u0343\x8D\x03" +
		"\x02\x02\x02\u0344\u0345\x07\x03\x02\x02\u0345\u0346\x07\x1B\x02\x02\u0346" +
		"\u0347\x07O\x02\x02\u0347\u0348\x07\x04\x02\x02\u0348\x8F\x03\x02\x02" +
		"\x02\u0349\u0353\x05\x88E\x02\u034A\u0353\x05\x8AF\x02\u034B\u0353\x05" +
		"\x8CG\x02\u034C\u0353\x05\x8EH\x02\u034D\u0353\x07V\x02\x02\u034E\u0353" +
		"\x07P\x02\x02\u034F\u0353\x07T\x02\x02\u0350\u0353\x07U\x02\x02\u0351" +
		"\u0353\x07S\x02\x02\u0352\u0349\x03\x02\x02\x02\u0352\u034A\x03\x02\x02" +
		"\x02\u0352\u034B\x03\x02\x02\x02\u0352\u034C\x03\x02\x02\x02\u0352\u034D" +
		"\x03\x02\x02\x02\u0352\u034E\x03\x02\x02\x02\u0352\u034F\x03\x02\x02\x02" +
		"\u0352\u0350\x03\x02\x02\x02\u0352\u0351\x03\x02\x02\x02\u0353\x91\x03" +
		"\x02\x02\x02D\x95\x9B\xCF\xE0\xE2\xEF\u0100\u0102\u010E\u0111\u0117\u0120" +
		"\u0123\u0126\u0131\u0139\u0159\u015C\u015F\u0167\u016A\u0171\u017C\u0187" +
		"\u01C7\u01D5\u01DF\u01E4\u01EF\u01F4\u01FF\u0203\u020D\u0217\u022D\u0230" +
		"\u0246\u0257\u025F\u0265\u0274\u027F\u028A\u0295\u02A2\u02AA\u02B5\u02C0" +
		"\u02CD\u02D9\u02E1\u02E9\u02F1\u02F6\u02FB\u02FF\u0305\u0310\u0316\u031C" +
		"\u031F\u0329\u032F\u0339\u033C\u0352";
	public static readonly _serializedATN: string = Utils.join(
		[
			kacoParser._serializedATNSegment0,
			kacoParser._serializedATNSegment1,
		],
		"",
	);
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
	public stringSubStatement(): StringSubStatementContext | undefined {
		return this.tryGetRuleContext(0, StringSubStatementContext);
	}
	public stringLenStatement(): StringLenStatementContext | undefined {
		return this.tryGetRuleContext(0, StringLenStatementContext);
	}
	public stringStrStatement(): StringStrStatementContext | undefined {
		return this.tryGetRuleContext(0, StringStrStatementContext);
	}
	public stringRepStatement(): StringRepStatementContext | undefined {
		return this.tryGetRuleContext(0, StringRepStatementContext);
	}
	public stringCatStatement(): StringCatStatementContext | undefined {
		return this.tryGetRuleContext(0, StringCatStatementContext);
	}
	public encodeBase64Statement(): EncodeBase64StatementContext | undefined {
		return this.tryGetRuleContext(0, EncodeBase64StatementContext);
	}
	public decodeBase64Statement(): DecodeBase64StatementContext | undefined {
		return this.tryGetRuleContext(0, DecodeBase64StatementContext);
	}
	public getGridRowsStatement(): GetGridRowsStatementContext | undefined {
		return this.tryGetRuleContext(0, GetGridRowsStatementContext);
	}
	public addGridRowStatement(): AddGridRowStatementContext | undefined {
		return this.tryGetRuleContext(0, AddGridRowStatementContext);
	}
	public delGridRowStatement(): DelGridRowStatementContext | undefined {
		return this.tryGetRuleContext(0, DelGridRowStatementContext);
	}
	public selGridRowStatement(): SelGridRowStatementContext | undefined {
		return this.tryGetRuleContext(0, SelGridRowStatementContext);
	}
	public exportXlsStatement(): ExportXlsStatementContext | undefined {
		return this.tryGetRuleContext(0, ExportXlsStatementContext);
	}
	public importXlsStatement(): ImportXlsStatementContext | undefined {
		return this.tryGetRuleContext(0, ImportXlsStatementContext);
	}
	public whileStatement(): WhileStatementContext | undefined {
		return this.tryGetRuleContext(0, WhileStatementContext);
	}
	public flowTranStatement(): FlowTranStatementContext | undefined {
		return this.tryGetRuleContext(0, FlowTranStatementContext);
	}
	public flowSaveStatement(): FlowSaveStatementContext | undefined {
		return this.tryGetRuleContext(0, FlowSaveStatementContext);
	}
	public flowFreshStatement(): FlowFreshStatementContext | undefined {
		return this.tryGetRuleContext(0, FlowFreshStatementContext);
	}
	public flowSendStatement(): FlowSendStatementContext | undefined {
		return this.tryGetRuleContext(0, FlowSendStatementContext);
	}
	public flowBackStatement(): FlowBackStatementContext | undefined {
		return this.tryGetRuleContext(0, FlowBackStatementContext);
	}
	public flowBack2Statement(): FlowBack2StatementContext | undefined {
		return this.tryGetRuleContext(0, FlowBack2StatementContext);
	}
	public flowMendStatement(): FlowMendStatementContext | undefined {
		return this.tryGetRuleContext(0, FlowMendStatementContext);
	}
	public flowPrintStatement(): FlowPrintStatementContext | undefined {
		return this.tryGetRuleContext(0, FlowPrintStatementContext);
	}
	public flowFormStatement(): FlowFormStatementContext | undefined {
		return this.tryGetRuleContext(0, FlowFormStatementContext);
	}
	public flowQueryStatement(): FlowQueryStatementContext | undefined {
		return this.tryGetRuleContext(0, FlowQueryStatementContext);
	}
	public taskHangStatement(): TaskHangStatementContext | undefined {
		return this.tryGetRuleContext(0, TaskHangStatementContext);
	}
	public taskFreeStatement(): TaskFreeStatementContext | undefined {
		return this.tryGetRuleContext(0, TaskFreeStatementContext);
	}
	public flowTestStatement(): FlowTestStatementContext | undefined {
		return this.tryGetRuleContext(0, FlowTestStatementContext);
	}
	public flowDropStatement(): FlowDropStatementContext | undefined {
		return this.tryGetRuleContext(0, FlowDropStatementContext);
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


export class WhileStatementContext extends ParserRuleContext {
	public While(): TerminalNode { return this.getToken(kacoParser.While, 0); }
	public OpenParen(): TerminalNode { return this.getToken(kacoParser.OpenParen, 0); }
	public ctrlQuoteDotLiteral(): CtrlQuoteDotLiteralContext {
		return this.getRuleContext(0, CtrlQuoteDotLiteralContext);
	}
	public CloseParen(): TerminalNode { return this.getToken(kacoParser.CloseParen, 0); }
	public blockStatement(): BlockStatementContext {
		return this.getRuleContext(0, BlockStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return kacoParser.RULE_whileStatement; }
	// @Override
	public enterRule(listener: kacoListener): void {
		if (listener.enterWhileStatement) {
			listener.enterWhileStatement(this);
		}
	}
	// @Override
	public exitRule(listener: kacoListener): void {
		if (listener.exitWhileStatement) {
			listener.exitWhileStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: kacoVisitor<Result>): Result {
		if (visitor.visitWhileStatement) {
			return visitor.visitWhileStatement(this);
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
	public StringLiteral(): TerminalNode | undefined { return this.tryGetToken(kacoParser.StringLiteral, 0); }
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
	public StringLiteral(): TerminalNode | undefined { return this.tryGetToken(kacoParser.StringLiteral, 0); }
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


export class StringSubStatementContext extends ParserRuleContext {
	public StringSub(): TerminalNode { return this.getToken(kacoParser.StringSub, 0); }
	public ctrlQuoteLiteral(): CtrlQuoteLiteralContext[];
	public ctrlQuoteLiteral(i: number): CtrlQuoteLiteralContext;
	public ctrlQuoteLiteral(i?: number): CtrlQuoteLiteralContext | CtrlQuoteLiteralContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CtrlQuoteLiteralContext);
		} else {
			return this.getRuleContext(i, CtrlQuoteLiteralContext);
		}
	}
	public OpenParen(): TerminalNode { return this.getToken(kacoParser.OpenParen, 0); }
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(kacoParser.Comma);
		} else {
			return this.getToken(kacoParser.Comma, i);
		}
	}
	public Natural(): TerminalNode[];
	public Natural(i: number): TerminalNode;
	public Natural(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(kacoParser.Natural);
		} else {
			return this.getToken(kacoParser.Natural, i);
		}
	}
	public CloseParen(): TerminalNode { return this.getToken(kacoParser.CloseParen, 0); }
	public SemiColon(): TerminalNode { return this.getToken(kacoParser.SemiColon, 0); }
	public StringLiteral(): TerminalNode | undefined { return this.tryGetToken(kacoParser.StringLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return kacoParser.RULE_stringSubStatement; }
	// @Override
	public enterRule(listener: kacoListener): void {
		if (listener.enterStringSubStatement) {
			listener.enterStringSubStatement(this);
		}
	}
	// @Override
	public exitRule(listener: kacoListener): void {
		if (listener.exitStringSubStatement) {
			listener.exitStringSubStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: kacoVisitor<Result>): Result {
		if (visitor.visitStringSubStatement) {
			return visitor.visitStringSubStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StringLenStatementContext extends ParserRuleContext {
	public StringLen(): TerminalNode { return this.getToken(kacoParser.StringLen, 0); }
	public ctrlQuoteLiteral(): CtrlQuoteLiteralContext[];
	public ctrlQuoteLiteral(i: number): CtrlQuoteLiteralContext;
	public ctrlQuoteLiteral(i?: number): CtrlQuoteLiteralContext | CtrlQuoteLiteralContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CtrlQuoteLiteralContext);
		} else {
			return this.getRuleContext(i, CtrlQuoteLiteralContext);
		}
	}
	public OpenParen(): TerminalNode { return this.getToken(kacoParser.OpenParen, 0); }
	public CloseParen(): TerminalNode { return this.getToken(kacoParser.CloseParen, 0); }
	public SemiColon(): TerminalNode { return this.getToken(kacoParser.SemiColon, 0); }
	public StringLiteral(): TerminalNode | undefined { return this.tryGetToken(kacoParser.StringLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return kacoParser.RULE_stringLenStatement; }
	// @Override
	public enterRule(listener: kacoListener): void {
		if (listener.enterStringLenStatement) {
			listener.enterStringLenStatement(this);
		}
	}
	// @Override
	public exitRule(listener: kacoListener): void {
		if (listener.exitStringLenStatement) {
			listener.exitStringLenStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: kacoVisitor<Result>): Result {
		if (visitor.visitStringLenStatement) {
			return visitor.visitStringLenStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StringStrStatementContext extends ParserRuleContext {
	public StringStr(): TerminalNode { return this.getToken(kacoParser.StringStr, 0); }
	public ctrlQuoteLiteral(): CtrlQuoteLiteralContext[];
	public ctrlQuoteLiteral(i: number): CtrlQuoteLiteralContext;
	public ctrlQuoteLiteral(i?: number): CtrlQuoteLiteralContext | CtrlQuoteLiteralContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CtrlQuoteLiteralContext);
		} else {
			return this.getRuleContext(i, CtrlQuoteLiteralContext);
		}
	}
	public OpenParen(): TerminalNode { return this.getToken(kacoParser.OpenParen, 0); }
	public Comma(): TerminalNode { return this.getToken(kacoParser.Comma, 0); }
	public CloseParen(): TerminalNode { return this.getToken(kacoParser.CloseParen, 0); }
	public SemiColon(): TerminalNode { return this.getToken(kacoParser.SemiColon, 0); }
	public StringLiteral(): TerminalNode[];
	public StringLiteral(i: number): TerminalNode;
	public StringLiteral(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(kacoParser.StringLiteral);
		} else {
			return this.getToken(kacoParser.StringLiteral, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return kacoParser.RULE_stringStrStatement; }
	// @Override
	public enterRule(listener: kacoListener): void {
		if (listener.enterStringStrStatement) {
			listener.enterStringStrStatement(this);
		}
	}
	// @Override
	public exitRule(listener: kacoListener): void {
		if (listener.exitStringStrStatement) {
			listener.exitStringStrStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: kacoVisitor<Result>): Result {
		if (visitor.visitStringStrStatement) {
			return visitor.visitStringStrStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StringRepStatementContext extends ParserRuleContext {
	public StringRep(): TerminalNode { return this.getToken(kacoParser.StringRep, 0); }
	public OpenParen(): TerminalNode { return this.getToken(kacoParser.OpenParen, 0); }
	public ctrlQuoteLiteral(): CtrlQuoteLiteralContext[];
	public ctrlQuoteLiteral(i: number): CtrlQuoteLiteralContext;
	public ctrlQuoteLiteral(i?: number): CtrlQuoteLiteralContext | CtrlQuoteLiteralContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CtrlQuoteLiteralContext);
		} else {
			return this.getRuleContext(i, CtrlQuoteLiteralContext);
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
	public CloseParen(): TerminalNode { return this.getToken(kacoParser.CloseParen, 0); }
	public SemiColon(): TerminalNode { return this.getToken(kacoParser.SemiColon, 0); }
	public StringLiteral(): TerminalNode[];
	public StringLiteral(i: number): TerminalNode;
	public StringLiteral(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(kacoParser.StringLiteral);
		} else {
			return this.getToken(kacoParser.StringLiteral, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return kacoParser.RULE_stringRepStatement; }
	// @Override
	public enterRule(listener: kacoListener): void {
		if (listener.enterStringRepStatement) {
			listener.enterStringRepStatement(this);
		}
	}
	// @Override
	public exitRule(listener: kacoListener): void {
		if (listener.exitStringRepStatement) {
			listener.exitStringRepStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: kacoVisitor<Result>): Result {
		if (visitor.visitStringRepStatement) {
			return visitor.visitStringRepStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StringCatStatementContext extends ParserRuleContext {
	public StringCat(): TerminalNode { return this.getToken(kacoParser.StringCat, 0); }
	public OpenParen(): TerminalNode { return this.getToken(kacoParser.OpenParen, 0); }
	public ctrlQuoteLiteral(): CtrlQuoteLiteralContext[];
	public ctrlQuoteLiteral(i: number): CtrlQuoteLiteralContext;
	public ctrlQuoteLiteral(i?: number): CtrlQuoteLiteralContext | CtrlQuoteLiteralContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CtrlQuoteLiteralContext);
		} else {
			return this.getRuleContext(i, CtrlQuoteLiteralContext);
		}
	}
	public CloseParen(): TerminalNode { return this.getToken(kacoParser.CloseParen, 0); }
	public SemiColon(): TerminalNode { return this.getToken(kacoParser.SemiColon, 0); }
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(kacoParser.Comma);
		} else {
			return this.getToken(kacoParser.Comma, i);
		}
	}
	public StringLiteral(): TerminalNode[];
	public StringLiteral(i: number): TerminalNode;
	public StringLiteral(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(kacoParser.StringLiteral);
		} else {
			return this.getToken(kacoParser.StringLiteral, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return kacoParser.RULE_stringCatStatement; }
	// @Override
	public enterRule(listener: kacoListener): void {
		if (listener.enterStringCatStatement) {
			listener.enterStringCatStatement(this);
		}
	}
	// @Override
	public exitRule(listener: kacoListener): void {
		if (listener.exitStringCatStatement) {
			listener.exitStringCatStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: kacoVisitor<Result>): Result {
		if (visitor.visitStringCatStatement) {
			return visitor.visitStringCatStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EncodeBase64StatementContext extends ParserRuleContext {
	public EncodeBase64(): TerminalNode { return this.getToken(kacoParser.EncodeBase64, 0); }
	public ctrlQuoteLiteral(): CtrlQuoteLiteralContext[];
	public ctrlQuoteLiteral(i: number): CtrlQuoteLiteralContext;
	public ctrlQuoteLiteral(i?: number): CtrlQuoteLiteralContext | CtrlQuoteLiteralContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CtrlQuoteLiteralContext);
		} else {
			return this.getRuleContext(i, CtrlQuoteLiteralContext);
		}
	}
	public OpenParen(): TerminalNode { return this.getToken(kacoParser.OpenParen, 0); }
	public CloseParen(): TerminalNode { return this.getToken(kacoParser.CloseParen, 0); }
	public SemiColon(): TerminalNode { return this.getToken(kacoParser.SemiColon, 0); }
	public StringLiteral(): TerminalNode | undefined { return this.tryGetToken(kacoParser.StringLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return kacoParser.RULE_encodeBase64Statement; }
	// @Override
	public enterRule(listener: kacoListener): void {
		if (listener.enterEncodeBase64Statement) {
			listener.enterEncodeBase64Statement(this);
		}
	}
	// @Override
	public exitRule(listener: kacoListener): void {
		if (listener.exitEncodeBase64Statement) {
			listener.exitEncodeBase64Statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: kacoVisitor<Result>): Result {
		if (visitor.visitEncodeBase64Statement) {
			return visitor.visitEncodeBase64Statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DecodeBase64StatementContext extends ParserRuleContext {
	public DecodeBase64(): TerminalNode { return this.getToken(kacoParser.DecodeBase64, 0); }
	public ctrlQuoteLiteral(): CtrlQuoteLiteralContext[];
	public ctrlQuoteLiteral(i: number): CtrlQuoteLiteralContext;
	public ctrlQuoteLiteral(i?: number): CtrlQuoteLiteralContext | CtrlQuoteLiteralContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CtrlQuoteLiteralContext);
		} else {
			return this.getRuleContext(i, CtrlQuoteLiteralContext);
		}
	}
	public OpenParen(): TerminalNode { return this.getToken(kacoParser.OpenParen, 0); }
	public CloseParen(): TerminalNode { return this.getToken(kacoParser.CloseParen, 0); }
	public SemiColon(): TerminalNode { return this.getToken(kacoParser.SemiColon, 0); }
	public StringLiteral(): TerminalNode | undefined { return this.tryGetToken(kacoParser.StringLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return kacoParser.RULE_decodeBase64Statement; }
	// @Override
	public enterRule(listener: kacoListener): void {
		if (listener.enterDecodeBase64Statement) {
			listener.enterDecodeBase64Statement(this);
		}
	}
	// @Override
	public exitRule(listener: kacoListener): void {
		if (listener.exitDecodeBase64Statement) {
			listener.exitDecodeBase64Statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: kacoVisitor<Result>): Result {
		if (visitor.visitDecodeBase64Statement) {
			return visitor.visitDecodeBase64Statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GetGridRowsStatementContext extends ParserRuleContext {
	public GetGridRows(): TerminalNode { return this.getToken(kacoParser.GetGridRows, 0); }
	public OpenParen(): TerminalNode { return this.getToken(kacoParser.OpenParen, 0); }
	public ctrlQuoteLiteral(): CtrlQuoteLiteralContext {
		return this.getRuleContext(0, CtrlQuoteLiteralContext);
	}
	public Comma(): TerminalNode { return this.getToken(kacoParser.Comma, 0); }
	public ctrlQuoteDotLiteral(): CtrlQuoteDotLiteralContext {
		return this.getRuleContext(0, CtrlQuoteDotLiteralContext);
	}
	public CloseParen(): TerminalNode { return this.getToken(kacoParser.CloseParen, 0); }
	public SemiColon(): TerminalNode { return this.getToken(kacoParser.SemiColon, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return kacoParser.RULE_getGridRowsStatement; }
	// @Override
	public enterRule(listener: kacoListener): void {
		if (listener.enterGetGridRowsStatement) {
			listener.enterGetGridRowsStatement(this);
		}
	}
	// @Override
	public exitRule(listener: kacoListener): void {
		if (listener.exitGetGridRowsStatement) {
			listener.exitGetGridRowsStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: kacoVisitor<Result>): Result {
		if (visitor.visitGetGridRowsStatement) {
			return visitor.visitGetGridRowsStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AddGridRowStatementContext extends ParserRuleContext {
	public AddGridRow(): TerminalNode { return this.getToken(kacoParser.AddGridRow, 0); }
	public OpenParen(): TerminalNode { return this.getToken(kacoParser.OpenParen, 0); }
	public ctrlQuoteDotLiteral(): CtrlQuoteDotLiteralContext[];
	public ctrlQuoteDotLiteral(i: number): CtrlQuoteDotLiteralContext;
	public ctrlQuoteDotLiteral(i?: number): CtrlQuoteDotLiteralContext | CtrlQuoteDotLiteralContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CtrlQuoteDotLiteralContext);
		} else {
			return this.getRuleContext(i, CtrlQuoteDotLiteralContext);
		}
	}
	public CloseParen(): TerminalNode { return this.getToken(kacoParser.CloseParen, 0); }
	public SemiColon(): TerminalNode { return this.getToken(kacoParser.SemiColon, 0); }
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(kacoParser.Comma);
		} else {
			return this.getToken(kacoParser.Comma, i);
		}
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return kacoParser.RULE_addGridRowStatement; }
	// @Override
	public enterRule(listener: kacoListener): void {
		if (listener.enterAddGridRowStatement) {
			listener.enterAddGridRowStatement(this);
		}
	}
	// @Override
	public exitRule(listener: kacoListener): void {
		if (listener.exitAddGridRowStatement) {
			listener.exitAddGridRowStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: kacoVisitor<Result>): Result {
		if (visitor.visitAddGridRowStatement) {
			return visitor.visitAddGridRowStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DelGridRowStatementContext extends ParserRuleContext {
	public DelGridRow(): TerminalNode { return this.getToken(kacoParser.DelGridRow, 0); }
	public OpenParen(): TerminalNode { return this.getToken(kacoParser.OpenParen, 0); }
	public ctrlQuoteDotLiteral(): CtrlQuoteDotLiteralContext {
		return this.getRuleContext(0, CtrlQuoteDotLiteralContext);
	}
	public CloseParen(): TerminalNode { return this.getToken(kacoParser.CloseParen, 0); }
	public SemiColon(): TerminalNode { return this.getToken(kacoParser.SemiColon, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return kacoParser.RULE_delGridRowStatement; }
	// @Override
	public enterRule(listener: kacoListener): void {
		if (listener.enterDelGridRowStatement) {
			listener.enterDelGridRowStatement(this);
		}
	}
	// @Override
	public exitRule(listener: kacoListener): void {
		if (listener.exitDelGridRowStatement) {
			listener.exitDelGridRowStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: kacoVisitor<Result>): Result {
		if (visitor.visitDelGridRowStatement) {
			return visitor.visitDelGridRowStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SelGridRowStatementContext extends ParserRuleContext {
	public SelGridRow(): TerminalNode { return this.getToken(kacoParser.SelGridRow, 0); }
	public OpenParen(): TerminalNode { return this.getToken(kacoParser.OpenParen, 0); }
	public ctrlQuoteDotLiteral(): CtrlQuoteDotLiteralContext {
		return this.getRuleContext(0, CtrlQuoteDotLiteralContext);
	}
	public CloseParen(): TerminalNode { return this.getToken(kacoParser.CloseParen, 0); }
	public SemiColon(): TerminalNode { return this.getToken(kacoParser.SemiColon, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return kacoParser.RULE_selGridRowStatement; }
	// @Override
	public enterRule(listener: kacoListener): void {
		if (listener.enterSelGridRowStatement) {
			listener.enterSelGridRowStatement(this);
		}
	}
	// @Override
	public exitRule(listener: kacoListener): void {
		if (listener.exitSelGridRowStatement) {
			listener.exitSelGridRowStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: kacoVisitor<Result>): Result {
		if (visitor.visitSelGridRowStatement) {
			return visitor.visitSelGridRowStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExportXlsStatementContext extends ParserRuleContext {
	public ExportXls(): TerminalNode { return this.getToken(kacoParser.ExportXls, 0); }
	public OpenParen(): TerminalNode { return this.getToken(kacoParser.OpenParen, 0); }
	public ctrlQuoteLiteral(): CtrlQuoteLiteralContext {
		return this.getRuleContext(0, CtrlQuoteLiteralContext);
	}
	public CloseParen(): TerminalNode { return this.getToken(kacoParser.CloseParen, 0); }
	public SemiColon(): TerminalNode { return this.getToken(kacoParser.SemiColon, 0); }
	public Comma(): TerminalNode | undefined { return this.tryGetToken(kacoParser.Comma, 0); }
	public Natural(): TerminalNode | undefined { return this.tryGetToken(kacoParser.Natural, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return kacoParser.RULE_exportXlsStatement; }
	// @Override
	public enterRule(listener: kacoListener): void {
		if (listener.enterExportXlsStatement) {
			listener.enterExportXlsStatement(this);
		}
	}
	// @Override
	public exitRule(listener: kacoListener): void {
		if (listener.exitExportXlsStatement) {
			listener.exitExportXlsStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: kacoVisitor<Result>): Result {
		if (visitor.visitExportXlsStatement) {
			return visitor.visitExportXlsStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImportXlsStatementContext extends ParserRuleContext {
	public ImportXls(): TerminalNode { return this.getToken(kacoParser.ImportXls, 0); }
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
	public get ruleIndex(): number { return kacoParser.RULE_importXlsStatement; }
	// @Override
	public enterRule(listener: kacoListener): void {
		if (listener.enterImportXlsStatement) {
			listener.enterImportXlsStatement(this);
		}
	}
	// @Override
	public exitRule(listener: kacoListener): void {
		if (listener.exitImportXlsStatement) {
			listener.exitImportXlsStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: kacoVisitor<Result>): Result {
		if (visitor.visitImportXlsStatement) {
			return visitor.visitImportXlsStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FlowTranStatementContext extends ParserRuleContext {
	public FlowTran(): TerminalNode { return this.getToken(kacoParser.FlowTran, 0); }
	public OpenParen(): TerminalNode { return this.getToken(kacoParser.OpenParen, 0); }
	public CloseParen(): TerminalNode { return this.getToken(kacoParser.CloseParen, 0); }
	public SemiColon(): TerminalNode { return this.getToken(kacoParser.SemiColon, 0); }
	public ctrlQuoteDotLiteral(): CtrlQuoteDotLiteralContext[];
	public ctrlQuoteDotLiteral(i: number): CtrlQuoteDotLiteralContext;
	public ctrlQuoteDotLiteral(i?: number): CtrlQuoteDotLiteralContext | CtrlQuoteDotLiteralContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CtrlQuoteDotLiteralContext);
		} else {
			return this.getRuleContext(i, CtrlQuoteDotLiteralContext);
		}
	}
	public Comma(): TerminalNode | undefined { return this.tryGetToken(kacoParser.Comma, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return kacoParser.RULE_flowTranStatement; }
	// @Override
	public enterRule(listener: kacoListener): void {
		if (listener.enterFlowTranStatement) {
			listener.enterFlowTranStatement(this);
		}
	}
	// @Override
	public exitRule(listener: kacoListener): void {
		if (listener.exitFlowTranStatement) {
			listener.exitFlowTranStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: kacoVisitor<Result>): Result {
		if (visitor.visitFlowTranStatement) {
			return visitor.visitFlowTranStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FlowSaveStatementContext extends ParserRuleContext {
	public FlowSave(): TerminalNode { return this.getToken(kacoParser.FlowSave, 0); }
	public OpenParen(): TerminalNode[];
	public OpenParen(i: number): TerminalNode;
	public OpenParen(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(kacoParser.OpenParen);
		} else {
			return this.getToken(kacoParser.OpenParen, i);
		}
	}
	public CloseParen(): TerminalNode[];
	public CloseParen(i: number): TerminalNode;
	public CloseParen(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(kacoParser.CloseParen);
		} else {
			return this.getToken(kacoParser.CloseParen, i);
		}
	}
	public SemiColon(): TerminalNode { return this.getToken(kacoParser.SemiColon, 0); }
	public ctrlQuoteLiteral(): CtrlQuoteLiteralContext | undefined {
		return this.tryGetRuleContext(0, CtrlQuoteLiteralContext);
	}
	public Natural(): TerminalNode | undefined { return this.tryGetToken(kacoParser.Natural, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return kacoParser.RULE_flowSaveStatement; }
	// @Override
	public enterRule(listener: kacoListener): void {
		if (listener.enterFlowSaveStatement) {
			listener.enterFlowSaveStatement(this);
		}
	}
	// @Override
	public exitRule(listener: kacoListener): void {
		if (listener.exitFlowSaveStatement) {
			listener.exitFlowSaveStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: kacoVisitor<Result>): Result {
		if (visitor.visitFlowSaveStatement) {
			return visitor.visitFlowSaveStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FlowFreshStatementContext extends ParserRuleContext {
	public FlowFresh(): TerminalNode { return this.getToken(kacoParser.FlowFresh, 0); }
	public OpenParen(): TerminalNode { return this.getToken(kacoParser.OpenParen, 0); }
	public CloseParen(): TerminalNode { return this.getToken(kacoParser.CloseParen, 0); }
	public SemiColon(): TerminalNode { return this.getToken(kacoParser.SemiColon, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return kacoParser.RULE_flowFreshStatement; }
	// @Override
	public enterRule(listener: kacoListener): void {
		if (listener.enterFlowFreshStatement) {
			listener.enterFlowFreshStatement(this);
		}
	}
	// @Override
	public exitRule(listener: kacoListener): void {
		if (listener.exitFlowFreshStatement) {
			listener.exitFlowFreshStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: kacoVisitor<Result>): Result {
		if (visitor.visitFlowFreshStatement) {
			return visitor.visitFlowFreshStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FlowSendStatementContext extends ParserRuleContext {
	public FlowSend(): TerminalNode { return this.getToken(kacoParser.FlowSend, 0); }
	public OpenParen(): TerminalNode { return this.getToken(kacoParser.OpenParen, 0); }
	public CloseParen(): TerminalNode { return this.getToken(kacoParser.CloseParen, 0); }
	public SemiColon(): TerminalNode { return this.getToken(kacoParser.SemiColon, 0); }
	public ctrlQuoteDotLiteral(): CtrlQuoteDotLiteralContext[];
	public ctrlQuoteDotLiteral(i: number): CtrlQuoteDotLiteralContext;
	public ctrlQuoteDotLiteral(i?: number): CtrlQuoteDotLiteralContext | CtrlQuoteDotLiteralContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CtrlQuoteDotLiteralContext);
		} else {
			return this.getRuleContext(i, CtrlQuoteDotLiteralContext);
		}
	}
	public Comma(): TerminalNode | undefined { return this.tryGetToken(kacoParser.Comma, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return kacoParser.RULE_flowSendStatement; }
	// @Override
	public enterRule(listener: kacoListener): void {
		if (listener.enterFlowSendStatement) {
			listener.enterFlowSendStatement(this);
		}
	}
	// @Override
	public exitRule(listener: kacoListener): void {
		if (listener.exitFlowSendStatement) {
			listener.exitFlowSendStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: kacoVisitor<Result>): Result {
		if (visitor.visitFlowSendStatement) {
			return visitor.visitFlowSendStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FlowBackStatementContext extends ParserRuleContext {
	public FlowBack(): TerminalNode { return this.getToken(kacoParser.FlowBack, 0); }
	public OpenParen(): TerminalNode { return this.getToken(kacoParser.OpenParen, 0); }
	public CloseParen(): TerminalNode { return this.getToken(kacoParser.CloseParen, 0); }
	public SemiColon(): TerminalNode { return this.getToken(kacoParser.SemiColon, 0); }
	public ctrlQuoteDotLiteral(): CtrlQuoteDotLiteralContext[];
	public ctrlQuoteDotLiteral(i: number): CtrlQuoteDotLiteralContext;
	public ctrlQuoteDotLiteral(i?: number): CtrlQuoteDotLiteralContext | CtrlQuoteDotLiteralContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CtrlQuoteDotLiteralContext);
		} else {
			return this.getRuleContext(i, CtrlQuoteDotLiteralContext);
		}
	}
	public Comma(): TerminalNode | undefined { return this.tryGetToken(kacoParser.Comma, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return kacoParser.RULE_flowBackStatement; }
	// @Override
	public enterRule(listener: kacoListener): void {
		if (listener.enterFlowBackStatement) {
			listener.enterFlowBackStatement(this);
		}
	}
	// @Override
	public exitRule(listener: kacoListener): void {
		if (listener.exitFlowBackStatement) {
			listener.exitFlowBackStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: kacoVisitor<Result>): Result {
		if (visitor.visitFlowBackStatement) {
			return visitor.visitFlowBackStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FlowBack2StatementContext extends ParserRuleContext {
	public FlowBack2(): TerminalNode { return this.getToken(kacoParser.FlowBack2, 0); }
	public OpenParen(): TerminalNode { return this.getToken(kacoParser.OpenParen, 0); }
	public CloseParen(): TerminalNode { return this.getToken(kacoParser.CloseParen, 0); }
	public SemiColon(): TerminalNode { return this.getToken(kacoParser.SemiColon, 0); }
	public ctrlQuoteDotLiteral(): CtrlQuoteDotLiteralContext[];
	public ctrlQuoteDotLiteral(i: number): CtrlQuoteDotLiteralContext;
	public ctrlQuoteDotLiteral(i?: number): CtrlQuoteDotLiteralContext | CtrlQuoteDotLiteralContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CtrlQuoteDotLiteralContext);
		} else {
			return this.getRuleContext(i, CtrlQuoteDotLiteralContext);
		}
	}
	public Comma(): TerminalNode | undefined { return this.tryGetToken(kacoParser.Comma, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return kacoParser.RULE_flowBack2Statement; }
	// @Override
	public enterRule(listener: kacoListener): void {
		if (listener.enterFlowBack2Statement) {
			listener.enterFlowBack2Statement(this);
		}
	}
	// @Override
	public exitRule(listener: kacoListener): void {
		if (listener.exitFlowBack2Statement) {
			listener.exitFlowBack2Statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: kacoVisitor<Result>): Result {
		if (visitor.visitFlowBack2Statement) {
			return visitor.visitFlowBack2Statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FlowMendStatementContext extends ParserRuleContext {
	public FlowMend(): TerminalNode { return this.getToken(kacoParser.FlowMend, 0); }
	public OpenParen(): TerminalNode { return this.getToken(kacoParser.OpenParen, 0); }
	public CloseParen(): TerminalNode { return this.getToken(kacoParser.CloseParen, 0); }
	public SemiColon(): TerminalNode { return this.getToken(kacoParser.SemiColon, 0); }
	public ctrlQuoteDotLiteral(): CtrlQuoteDotLiteralContext[];
	public ctrlQuoteDotLiteral(i: number): CtrlQuoteDotLiteralContext;
	public ctrlQuoteDotLiteral(i?: number): CtrlQuoteDotLiteralContext | CtrlQuoteDotLiteralContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CtrlQuoteDotLiteralContext);
		} else {
			return this.getRuleContext(i, CtrlQuoteDotLiteralContext);
		}
	}
	public Comma(): TerminalNode | undefined { return this.tryGetToken(kacoParser.Comma, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return kacoParser.RULE_flowMendStatement; }
	// @Override
	public enterRule(listener: kacoListener): void {
		if (listener.enterFlowMendStatement) {
			listener.enterFlowMendStatement(this);
		}
	}
	// @Override
	public exitRule(listener: kacoListener): void {
		if (listener.exitFlowMendStatement) {
			listener.exitFlowMendStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: kacoVisitor<Result>): Result {
		if (visitor.visitFlowMendStatement) {
			return visitor.visitFlowMendStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FlowPrintStatementContext extends ParserRuleContext {
	public FlowPrint(): TerminalNode { return this.getToken(kacoParser.FlowPrint, 0); }
	public OpenParen(): TerminalNode { return this.getToken(kacoParser.OpenParen, 0); }
	public CloseParen(): TerminalNode { return this.getToken(kacoParser.CloseParen, 0); }
	public SemiColon(): TerminalNode { return this.getToken(kacoParser.SemiColon, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return kacoParser.RULE_flowPrintStatement; }
	// @Override
	public enterRule(listener: kacoListener): void {
		if (listener.enterFlowPrintStatement) {
			listener.enterFlowPrintStatement(this);
		}
	}
	// @Override
	public exitRule(listener: kacoListener): void {
		if (listener.exitFlowPrintStatement) {
			listener.exitFlowPrintStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: kacoVisitor<Result>): Result {
		if (visitor.visitFlowPrintStatement) {
			return visitor.visitFlowPrintStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FlowFormStatementContext extends ParserRuleContext {
	public FlowForm(): TerminalNode { return this.getToken(kacoParser.FlowForm, 0); }
	public OpenParen(): TerminalNode { return this.getToken(kacoParser.OpenParen, 0); }
	public CloseParen(): TerminalNode { return this.getToken(kacoParser.CloseParen, 0); }
	public SemiColon(): TerminalNode { return this.getToken(kacoParser.SemiColon, 0); }
	public ctrlQuoteDotLiteral(): CtrlQuoteDotLiteralContext | undefined {
		return this.tryGetRuleContext(0, CtrlQuoteDotLiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return kacoParser.RULE_flowFormStatement; }
	// @Override
	public enterRule(listener: kacoListener): void {
		if (listener.enterFlowFormStatement) {
			listener.enterFlowFormStatement(this);
		}
	}
	// @Override
	public exitRule(listener: kacoListener): void {
		if (listener.exitFlowFormStatement) {
			listener.exitFlowFormStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: kacoVisitor<Result>): Result {
		if (visitor.visitFlowFormStatement) {
			return visitor.visitFlowFormStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FlowQueryStatementContext extends ParserRuleContext {
	public FlowQuery(): TerminalNode { return this.getToken(kacoParser.FlowQuery, 0); }
	public OpenParen(): TerminalNode { return this.getToken(kacoParser.OpenParen, 0); }
	public CloseParen(): TerminalNode { return this.getToken(kacoParser.CloseParen, 0); }
	public SemiColon(): TerminalNode { return this.getToken(kacoParser.SemiColon, 0); }
	public ctrlQuoteDotLiteral(): CtrlQuoteDotLiteralContext | undefined {
		return this.tryGetRuleContext(0, CtrlQuoteDotLiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return kacoParser.RULE_flowQueryStatement; }
	// @Override
	public enterRule(listener: kacoListener): void {
		if (listener.enterFlowQueryStatement) {
			listener.enterFlowQueryStatement(this);
		}
	}
	// @Override
	public exitRule(listener: kacoListener): void {
		if (listener.exitFlowQueryStatement) {
			listener.exitFlowQueryStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: kacoVisitor<Result>): Result {
		if (visitor.visitFlowQueryStatement) {
			return visitor.visitFlowQueryStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TaskHangStatementContext extends ParserRuleContext {
	public TaskHang(): TerminalNode { return this.getToken(kacoParser.TaskHang, 0); }
	public OpenParen(): TerminalNode { return this.getToken(kacoParser.OpenParen, 0); }
	public CloseParen(): TerminalNode { return this.getToken(kacoParser.CloseParen, 0); }
	public SemiColon(): TerminalNode { return this.getToken(kacoParser.SemiColon, 0); }
	public ctrlQuoteDotLiteral(): CtrlQuoteDotLiteralContext[];
	public ctrlQuoteDotLiteral(i: number): CtrlQuoteDotLiteralContext;
	public ctrlQuoteDotLiteral(i?: number): CtrlQuoteDotLiteralContext | CtrlQuoteDotLiteralContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CtrlQuoteDotLiteralContext);
		} else {
			return this.getRuleContext(i, CtrlQuoteDotLiteralContext);
		}
	}
	public Comma(): TerminalNode | undefined { return this.tryGetToken(kacoParser.Comma, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return kacoParser.RULE_taskHangStatement; }
	// @Override
	public enterRule(listener: kacoListener): void {
		if (listener.enterTaskHangStatement) {
			listener.enterTaskHangStatement(this);
		}
	}
	// @Override
	public exitRule(listener: kacoListener): void {
		if (listener.exitTaskHangStatement) {
			listener.exitTaskHangStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: kacoVisitor<Result>): Result {
		if (visitor.visitTaskHangStatement) {
			return visitor.visitTaskHangStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TaskFreeStatementContext extends ParserRuleContext {
	public TaskFree(): TerminalNode { return this.getToken(kacoParser.TaskFree, 0); }
	public OpenParen(): TerminalNode { return this.getToken(kacoParser.OpenParen, 0); }
	public CloseParen(): TerminalNode { return this.getToken(kacoParser.CloseParen, 0); }
	public SemiColon(): TerminalNode { return this.getToken(kacoParser.SemiColon, 0); }
	public ctrlQuoteDotLiteral(): CtrlQuoteDotLiteralContext[];
	public ctrlQuoteDotLiteral(i: number): CtrlQuoteDotLiteralContext;
	public ctrlQuoteDotLiteral(i?: number): CtrlQuoteDotLiteralContext | CtrlQuoteDotLiteralContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CtrlQuoteDotLiteralContext);
		} else {
			return this.getRuleContext(i, CtrlQuoteDotLiteralContext);
		}
	}
	public Comma(): TerminalNode | undefined { return this.tryGetToken(kacoParser.Comma, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return kacoParser.RULE_taskFreeStatement; }
	// @Override
	public enterRule(listener: kacoListener): void {
		if (listener.enterTaskFreeStatement) {
			listener.enterTaskFreeStatement(this);
		}
	}
	// @Override
	public exitRule(listener: kacoListener): void {
		if (listener.exitTaskFreeStatement) {
			listener.exitTaskFreeStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: kacoVisitor<Result>): Result {
		if (visitor.visitTaskFreeStatement) {
			return visitor.visitTaskFreeStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FlowTestStatementContext extends ParserRuleContext {
	public FlowTest(): TerminalNode { return this.getToken(kacoParser.FlowTest, 0); }
	public OpenParen(): TerminalNode { return this.getToken(kacoParser.OpenParen, 0); }
	public CloseParen(): TerminalNode { return this.getToken(kacoParser.CloseParen, 0); }
	public SemiColon(): TerminalNode { return this.getToken(kacoParser.SemiColon, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return kacoParser.RULE_flowTestStatement; }
	// @Override
	public enterRule(listener: kacoListener): void {
		if (listener.enterFlowTestStatement) {
			listener.enterFlowTestStatement(this);
		}
	}
	// @Override
	public exitRule(listener: kacoListener): void {
		if (listener.exitFlowTestStatement) {
			listener.exitFlowTestStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: kacoVisitor<Result>): Result {
		if (visitor.visitFlowTestStatement) {
			return visitor.visitFlowTestStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FlowDropStatementContext extends ParserRuleContext {
	public FlowDrop(): TerminalNode { return this.getToken(kacoParser.FlowDrop, 0); }
	public OpenParen(): TerminalNode { return this.getToken(kacoParser.OpenParen, 0); }
	public CloseParen(): TerminalNode { return this.getToken(kacoParser.CloseParen, 0); }
	public SemiColon(): TerminalNode { return this.getToken(kacoParser.SemiColon, 0); }
	public ctrlQuoteDotLiteral(): CtrlQuoteDotLiteralContext | undefined {
		return this.tryGetRuleContext(0, CtrlQuoteDotLiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return kacoParser.RULE_flowDropStatement; }
	// @Override
	public enterRule(listener: kacoListener): void {
		if (listener.enterFlowDropStatement) {
			listener.enterFlowDropStatement(this);
		}
	}
	// @Override
	public exitRule(listener: kacoListener): void {
		if (listener.exitFlowDropStatement) {
			listener.exitFlowDropStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: kacoVisitor<Result>): Result {
		if (visitor.visitFlowDropStatement) {
			return visitor.visitFlowDropStatement(this);
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
	public ctrlQuoteDotLiteral(): CtrlQuoteDotLiteralContext | undefined {
		return this.tryGetRuleContext(0, CtrlQuoteDotLiteralContext);
	}
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
	public CloseParen(): TerminalNode | undefined { return this.tryGetToken(kacoParser.CloseParen, 0); }
	public Selected(): TerminalNode | undefined { return this.tryGetToken(kacoParser.Selected, 0); }
	public Equal(): TerminalNode | undefined { return this.tryGetToken(kacoParser.Equal, 0); }
	public commonLiteral(): CommonLiteralContext | undefined {
		return this.tryGetRuleContext(0, CommonLiteralContext);
	}
	public DecimalLiteral(): TerminalNode | undefined { return this.tryGetToken(kacoParser.DecimalLiteral, 0); }
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
	public NullLiteral(): TerminalNode | undefined { return this.tryGetToken(kacoParser.NullLiteral, 0); }
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


