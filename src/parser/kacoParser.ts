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
	public static readonly GreaterThan = 19;
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
	public static readonly FlowClose = 74;
	public static readonly FlowAgent = 75;
	public static readonly AgentCancel = 76;
	public static readonly FlowRefact = 77;
	public static readonly TestCommit = 78;
	public static readonly ChangeInstFlow = 79;
	public static readonly InstFlow = 80;
	public static readonly TaskDelete = 81;
	public static readonly TachSend = 82;
	public static readonly CommWord = 83;
	public static readonly ExecFunc = 84;
	public static readonly CmdBreak = 85;
	public static readonly OpenUrl = 86;
	public static readonly OpenLayout = 87;
	public static readonly Print = 88;
	public static readonly RegeSign = 89;
	public static readonly RsetPswdSign = 90;
	public static readonly Selected = 91;
	public static readonly If = 92;
	public static readonly While = 93;
	public static readonly Constant = 94;
	public static readonly QueryDataMarke = 95;
	public static readonly Natural = 96;
	public static readonly COMMENT = 97;
	public static readonly MessageLiteral = 98;
	public static readonly PrintLiteral = 99;
	public static readonly HexLiteral = 100;
	public static readonly StringLiteral = 101;
	public static readonly BooleanLiteral = 102;
	public static readonly NullLiteral = 103;
	public static readonly DecimalLiteral = 104;
	public static readonly ParamLiteral = 105;
	public static readonly Decimal = 106;
	public static readonly NonZeroDigit = 107;
	public static readonly DigitChar = 108;
	public static readonly Extend = 109;
	public static readonly WS = 110;
	public static readonly WHITESPACE = 111;
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
	public static readonly RULE_queryDataQuoteEllipsisExpr = 10;
	public static readonly RULE_quoteNaturalExpr = 11;
	public static readonly RULE_openFormStatement = 12;
	public static readonly RULE_saveFormStatement = 13;
	public static readonly RULE_closeStatement = 14;
	public static readonly RULE_refreshStatement = 15;
	public static readonly RULE_messageStatement = 16;
	public static readonly RULE_clickButtonStatement = 17;
	public static readonly RULE_getComboDicStatement = 18;
	public static readonly RULE_queryDataStatement = 19;
	public static readonly RULE_carryDataStatement = 20;
	public static readonly RULE_sqlExecuteStatement = 21;
	public static readonly RULE_getCoderStatement = 22;
	public static readonly RULE_setCoderStatement = 23;
	public static readonly RULE_resetCtrlValueStatement = 24;
	public static readonly RULE_saveLastValueStatement = 25;
	public static readonly RULE_loadLastValueStatement = 26;
	public static readonly RULE_setVisiableStatement = 27;
	public static readonly RULE_setEnableStatement = 28;
	public static readonly RULE_setFocusStatement = 29;
	public static readonly RULE_setColorStatement = 30;
	public static readonly RULE_changeTabStatement = 31;
	public static readonly RULE_switchDisplayStatement = 32;
	public static readonly RULE_stringSubStatement = 33;
	public static readonly RULE_stringLenStatement = 34;
	public static readonly RULE_stringStrStatement = 35;
	public static readonly RULE_stringRepStatement = 36;
	public static readonly RULE_stringCatStatement = 37;
	public static readonly RULE_encodeBase64Statement = 38;
	public static readonly RULE_decodeBase64Statement = 39;
	public static readonly RULE_getGridRowsStatement = 40;
	public static readonly RULE_addGridRowStatement = 41;
	public static readonly RULE_delGridRowStatement = 42;
	public static readonly RULE_selGridRowStatement = 43;
	public static readonly RULE_exportXlsStatement = 44;
	public static readonly RULE_importXlsStatement = 45;
	public static readonly RULE_flowTranStatement = 46;
	public static readonly RULE_flowSaveStatement = 47;
	public static readonly RULE_flowFreshStatement = 48;
	public static readonly RULE_flowSendStatement = 49;
	public static readonly RULE_flowBackStatement = 50;
	public static readonly RULE_flowBack2Statement = 51;
	public static readonly RULE_flowMendStatement = 52;
	public static readonly RULE_flowPrintStatement = 53;
	public static readonly RULE_flowFormStatement = 54;
	public static readonly RULE_flowQueryStatement = 55;
	public static readonly RULE_taskHangStatement = 56;
	public static readonly RULE_taskFreeStatement = 57;
	public static readonly RULE_flowTestStatement = 58;
	public static readonly RULE_flowDropStatement = 59;
	public static readonly RULE_flowCloseStatement = 60;
	public static readonly RULE_flowAgentStatement = 61;
	public static readonly RULE_agentCancelStatement = 62;
	public static readonly RULE_flowRefactStatement = 63;
	public static readonly RULE_testCommitStatement = 64;
	public static readonly RULE_changeInstFlowStatement = 65;
	public static readonly RULE_instFlowStatement = 66;
	public static readonly RULE_taskDeleteStatement = 67;
	public static readonly RULE_tachSendStatement = 68;
	public static readonly RULE_commWordStatement = 69;
	public static readonly RULE_execFuncStatement = 70;
	public static readonly RULE_cmdBreakStatement = 71;
	public static readonly RULE_openUrlStatement = 72;
	public static readonly RULE_openLayoutStatement = 73;
	public static readonly RULE_printStatement = 74;
	public static readonly RULE_regeSignStatement = 75;
	public static readonly RULE_rsetPswdSignStatement = 76;
	public static readonly RULE_extendStatement = 77;
	public static readonly RULE_expression = 78;
	public static readonly RULE_subTerm = 79;
	public static readonly RULE_addTerm = 80;
	public static readonly RULE_divTerm = 81;
	public static readonly RULE_mulTerm = 82;
	public static readonly RULE_supplierStatement = 83;
	public static readonly RULE_parnTerm = 84;
	public static readonly RULE_assign = 85;
	public static readonly RULE_assignStart = 86;
	public static readonly RULE_ctrlQuoteLiteral = 87;
	public static readonly RULE_ctrlQuoteDotLiteral = 88;
	public static readonly RULE_ctrlQuoteParamLiteral = 89;
	public static readonly RULE_ctrlConstantLiteral = 90;
	public static readonly RULE_commonLiteral = 91;
	public static readonly RULE_negationExpr = 92;
	public static readonly RULE_sqlTemplateExpr = 93;
	public static readonly RULE_sqlStatement = 94;
	public static readonly RULE_sqlQuoteStatement = 95;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "statement", "functionStatement", "ifStatement", "whileStatement", 
		"blockStatement", "expressionSequence", "singleExpression", "assignStatement", 
		"quoteEllipsisExpr", "queryDataQuoteEllipsisExpr", "quoteNaturalExpr", 
		"openFormStatement", "saveFormStatement", "closeStatement", "refreshStatement", 
		"messageStatement", "clickButtonStatement", "getComboDicStatement", "queryDataStatement", 
		"carryDataStatement", "sqlExecuteStatement", "getCoderStatement", "setCoderStatement", 
		"resetCtrlValueStatement", "saveLastValueStatement", "loadLastValueStatement", 
		"setVisiableStatement", "setEnableStatement", "setFocusStatement", "setColorStatement", 
		"changeTabStatement", "switchDisplayStatement", "stringSubStatement", 
		"stringLenStatement", "stringStrStatement", "stringRepStatement", "stringCatStatement", 
		"encodeBase64Statement", "decodeBase64Statement", "getGridRowsStatement", 
		"addGridRowStatement", "delGridRowStatement", "selGridRowStatement", "exportXlsStatement", 
		"importXlsStatement", "flowTranStatement", "flowSaveStatement", "flowFreshStatement", 
		"flowSendStatement", "flowBackStatement", "flowBack2Statement", "flowMendStatement", 
		"flowPrintStatement", "flowFormStatement", "flowQueryStatement", "taskHangStatement", 
		"taskFreeStatement", "flowTestStatement", "flowDropStatement", "flowCloseStatement", 
		"flowAgentStatement", "agentCancelStatement", "flowRefactStatement", "testCommitStatement", 
		"changeInstFlowStatement", "instFlowStatement", "taskDeleteStatement", 
		"tachSendStatement", "commWordStatement", "execFuncStatement", "cmdBreakStatement", 
		"openUrlStatement", "openLayoutStatement", "printStatement", "regeSignStatement", 
		"rsetPswdSignStatement", "extendStatement", "expression", "subTerm", "addTerm", 
		"divTerm", "mulTerm", "supplierStatement", "parnTerm", "assign", "assignStart", 
		"ctrlQuoteLiteral", "ctrlQuoteDotLiteral", "ctrlQuoteParamLiteral", "ctrlConstantLiteral", 
		"commonLiteral", "negationExpr", "sqlTemplateExpr", "sqlStatement", "sqlQuoteStatement",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'['", "']'", "'('", "')'", "'{'", "'}'", "';'", "','", "'+'", 
		"'-'", "'*'", "'/'", "'='", "'.'", "'...'", "'=='", "'!='", "'<'", "'>'", 
		"'<='", "'>='", "'&&'", "'||'", "'#'", "'$'", undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "'POSITIONMARKE'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "OpenBracket", "CloseBracket", "OpenParen", "CloseParen", "OpenBrace", 
		"CloseBrace", "SemiColon", "Comma", "Plus", "Minus", "Multiply", "Divide", 
		"Assign", "Dot", "Ellipsis", "Equal", "NotEqual", "LessThan", "GreaterThan", 
		"LessThanEquals", "GreaterThanEquals", "And", "Or", "Sql", "Const", "OpenForm", 
		"SaveForm", "Close", "Refresh", "MessageBox", "ClickButton", "GetComboDic", 
		"QueryData", "CarryData", "SQLExecute", "GetCoder", "SetCoder", "ResetCtrlValue", 
		"SaveLastValue", "LoadLastValue", "SetVisiable", "SetEnable", "SetFocus", 
		"SetColor", "ChangeTab", "SwitchDisplay", "StringSub", "StringLen", "StringStr", 
		"StringRep", "StringCat", "EncodeBase64", "DecodeBase64", "GetGridRows", 
		"AddGridRow", "DelGridRow", "SelGridRow", "ExportXls", "ImportXls", "FlowTran", 
		"FlowSave", "FlowFresh", "FlowSend", "FlowBack", "FlowBack2", "FlowMend", 
		"FlowPrint", "FlowForm", "FlowQuery", "TaskHang", "TaskFree", "FlowTest", 
		"FlowDrop", "FlowClose", "FlowAgent", "AgentCancel", "FlowRefact", "TestCommit", 
		"ChangeInstFlow", "InstFlow", "TaskDelete", "TachSend", "CommWord", "ExecFunc", 
		"CmdBreak", "OpenUrl", "OpenLayout", "Print", "RegeSign", "RsetPswdSign", 
		"Selected", "If", "While", "Constant", "QueryDataMarke", "Natural", "COMMENT", 
		"MessageLiteral", "PrintLiteral", "HexLiteral", "StringLiteral", "BooleanLiteral", 
		"NullLiteral", "DecimalLiteral", "ParamLiteral", "Decimal", "NonZeroDigit", 
		"DigitChar", "Extend", "WS", "WHITESPACE",
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
			this.state = 193;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 192;
				this.statement();
				}
				}
				this.state = 195;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << kacoParser.OpenBracket) | (1 << kacoParser.OpenForm) | (1 << kacoParser.SaveForm) | (1 << kacoParser.Close) | (1 << kacoParser.Refresh) | (1 << kacoParser.MessageBox) | (1 << kacoParser.ClickButton))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (kacoParser.GetComboDic - 32)) | (1 << (kacoParser.QueryData - 32)) | (1 << (kacoParser.CarryData - 32)) | (1 << (kacoParser.SQLExecute - 32)) | (1 << (kacoParser.GetCoder - 32)) | (1 << (kacoParser.SetCoder - 32)) | (1 << (kacoParser.ResetCtrlValue - 32)) | (1 << (kacoParser.SaveLastValue - 32)) | (1 << (kacoParser.LoadLastValue - 32)) | (1 << (kacoParser.SetVisiable - 32)) | (1 << (kacoParser.SetEnable - 32)) | (1 << (kacoParser.SetFocus - 32)) | (1 << (kacoParser.SetColor - 32)) | (1 << (kacoParser.ChangeTab - 32)) | (1 << (kacoParser.SwitchDisplay - 32)) | (1 << (kacoParser.StringSub - 32)) | (1 << (kacoParser.StringLen - 32)) | (1 << (kacoParser.StringStr - 32)) | (1 << (kacoParser.StringRep - 32)) | (1 << (kacoParser.StringCat - 32)) | (1 << (kacoParser.EncodeBase64 - 32)) | (1 << (kacoParser.DecodeBase64 - 32)) | (1 << (kacoParser.GetGridRows - 32)) | (1 << (kacoParser.AddGridRow - 32)) | (1 << (kacoParser.DelGridRow - 32)) | (1 << (kacoParser.SelGridRow - 32)) | (1 << (kacoParser.ExportXls - 32)) | (1 << (kacoParser.ImportXls - 32)) | (1 << (kacoParser.FlowTran - 32)) | (1 << (kacoParser.FlowSave - 32)) | (1 << (kacoParser.FlowFresh - 32)) | (1 << (kacoParser.FlowSend - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (kacoParser.FlowBack - 64)) | (1 << (kacoParser.FlowBack2 - 64)) | (1 << (kacoParser.FlowMend - 64)) | (1 << (kacoParser.FlowPrint - 64)) | (1 << (kacoParser.FlowForm - 64)) | (1 << (kacoParser.FlowQuery - 64)) | (1 << (kacoParser.TaskHang - 64)) | (1 << (kacoParser.TaskFree - 64)) | (1 << (kacoParser.FlowTest - 64)) | (1 << (kacoParser.FlowDrop - 64)) | (1 << (kacoParser.FlowClose - 64)) | (1 << (kacoParser.FlowAgent - 64)) | (1 << (kacoParser.AgentCancel - 64)) | (1 << (kacoParser.FlowRefact - 64)) | (1 << (kacoParser.TestCommit - 64)) | (1 << (kacoParser.ChangeInstFlow - 64)) | (1 << (kacoParser.InstFlow - 64)) | (1 << (kacoParser.TaskDelete - 64)) | (1 << (kacoParser.TachSend - 64)) | (1 << (kacoParser.CommWord - 64)) | (1 << (kacoParser.ExecFunc - 64)) | (1 << (kacoParser.CmdBreak - 64)) | (1 << (kacoParser.OpenUrl - 64)) | (1 << (kacoParser.OpenLayout - 64)) | (1 << (kacoParser.Print - 64)) | (1 << (kacoParser.RegeSign - 64)) | (1 << (kacoParser.RsetPswdSign - 64)) | (1 << (kacoParser.If - 64)) | (1 << (kacoParser.While - 64)))) !== 0) || _la === kacoParser.Extend);
			this.state = 197;
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
			this.state = 205;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case kacoParser.If:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 199;
				this.ifStatement();
				}
				break;
			case kacoParser.While:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 200;
				this.whileStatement();
				}
				break;
			case kacoParser.OpenBracket:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 201;
				this.assignStatement();
				}
				break;
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
			case kacoParser.FlowClose:
			case kacoParser.FlowAgent:
			case kacoParser.AgentCancel:
			case kacoParser.FlowRefact:
			case kacoParser.TestCommit:
			case kacoParser.ChangeInstFlow:
			case kacoParser.InstFlow:
			case kacoParser.TaskDelete:
			case kacoParser.TachSend:
			case kacoParser.CommWord:
			case kacoParser.ExecFunc:
			case kacoParser.CmdBreak:
			case kacoParser.OpenUrl:
			case kacoParser.OpenLayout:
			case kacoParser.Print:
			case kacoParser.RegeSign:
			case kacoParser.RsetPswdSign:
			case kacoParser.Extend:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 202;
				this.functionStatement();
				this.state = 203;
				this.match(kacoParser.SemiColon);
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
			this.state = 273;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case kacoParser.OpenForm:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 207;
				this.openFormStatement();
				}
				break;
			case kacoParser.SaveForm:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 208;
				this.saveFormStatement();
				}
				break;
			case kacoParser.Close:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 209;
				this.closeStatement();
				}
				break;
			case kacoParser.Refresh:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 210;
				this.refreshStatement();
				}
				break;
			case kacoParser.MessageBox:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 211;
				this.messageStatement();
				}
				break;
			case kacoParser.ClickButton:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 212;
				this.clickButtonStatement();
				}
				break;
			case kacoParser.GetComboDic:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 213;
				this.getComboDicStatement();
				}
				break;
			case kacoParser.QueryData:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 214;
				this.queryDataStatement();
				}
				break;
			case kacoParser.CarryData:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 215;
				this.carryDataStatement();
				}
				break;
			case kacoParser.SQLExecute:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 216;
				this.sqlExecuteStatement();
				}
				break;
			case kacoParser.GetCoder:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 217;
				this.getCoderStatement();
				}
				break;
			case kacoParser.SetCoder:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 218;
				this.setCoderStatement();
				}
				break;
			case kacoParser.ResetCtrlValue:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 219;
				this.resetCtrlValueStatement();
				}
				break;
			case kacoParser.SaveLastValue:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 220;
				this.saveLastValueStatement();
				}
				break;
			case kacoParser.LoadLastValue:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 221;
				this.loadLastValueStatement();
				}
				break;
			case kacoParser.SetVisiable:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 222;
				this.setVisiableStatement();
				}
				break;
			case kacoParser.SetEnable:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 223;
				this.setEnableStatement();
				}
				break;
			case kacoParser.SetFocus:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 224;
				this.setFocusStatement();
				}
				break;
			case kacoParser.SetColor:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 225;
				this.setColorStatement();
				}
				break;
			case kacoParser.ChangeTab:
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 226;
				this.changeTabStatement();
				}
				break;
			case kacoParser.SwitchDisplay:
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 227;
				this.switchDisplayStatement();
				}
				break;
			case kacoParser.StringSub:
				this.enterOuterAlt(_localctx, 22);
				{
				this.state = 228;
				this.stringSubStatement();
				}
				break;
			case kacoParser.StringLen:
				this.enterOuterAlt(_localctx, 23);
				{
				this.state = 229;
				this.stringLenStatement();
				}
				break;
			case kacoParser.StringStr:
				this.enterOuterAlt(_localctx, 24);
				{
				this.state = 230;
				this.stringStrStatement();
				}
				break;
			case kacoParser.StringRep:
				this.enterOuterAlt(_localctx, 25);
				{
				this.state = 231;
				this.stringRepStatement();
				}
				break;
			case kacoParser.StringCat:
				this.enterOuterAlt(_localctx, 26);
				{
				this.state = 232;
				this.stringCatStatement();
				}
				break;
			case kacoParser.EncodeBase64:
				this.enterOuterAlt(_localctx, 27);
				{
				this.state = 233;
				this.encodeBase64Statement();
				}
				break;
			case kacoParser.DecodeBase64:
				this.enterOuterAlt(_localctx, 28);
				{
				this.state = 234;
				this.decodeBase64Statement();
				}
				break;
			case kacoParser.GetGridRows:
				this.enterOuterAlt(_localctx, 29);
				{
				this.state = 235;
				this.getGridRowsStatement();
				}
				break;
			case kacoParser.AddGridRow:
				this.enterOuterAlt(_localctx, 30);
				{
				this.state = 236;
				this.addGridRowStatement();
				}
				break;
			case kacoParser.DelGridRow:
				this.enterOuterAlt(_localctx, 31);
				{
				this.state = 237;
				this.delGridRowStatement();
				}
				break;
			case kacoParser.SelGridRow:
				this.enterOuterAlt(_localctx, 32);
				{
				this.state = 238;
				this.selGridRowStatement();
				}
				break;
			case kacoParser.ExportXls:
				this.enterOuterAlt(_localctx, 33);
				{
				this.state = 239;
				this.exportXlsStatement();
				}
				break;
			case kacoParser.ImportXls:
				this.enterOuterAlt(_localctx, 34);
				{
				this.state = 240;
				this.importXlsStatement();
				}
				break;
			case kacoParser.FlowTran:
				this.enterOuterAlt(_localctx, 35);
				{
				this.state = 241;
				this.flowTranStatement();
				}
				break;
			case kacoParser.FlowSave:
				this.enterOuterAlt(_localctx, 36);
				{
				this.state = 242;
				this.flowSaveStatement();
				}
				break;
			case kacoParser.FlowFresh:
				this.enterOuterAlt(_localctx, 37);
				{
				this.state = 243;
				this.flowFreshStatement();
				}
				break;
			case kacoParser.FlowSend:
				this.enterOuterAlt(_localctx, 38);
				{
				this.state = 244;
				this.flowSendStatement();
				}
				break;
			case kacoParser.FlowBack:
				this.enterOuterAlt(_localctx, 39);
				{
				this.state = 245;
				this.flowBackStatement();
				}
				break;
			case kacoParser.FlowBack2:
				this.enterOuterAlt(_localctx, 40);
				{
				this.state = 246;
				this.flowBack2Statement();
				}
				break;
			case kacoParser.FlowMend:
				this.enterOuterAlt(_localctx, 41);
				{
				this.state = 247;
				this.flowMendStatement();
				}
				break;
			case kacoParser.FlowPrint:
				this.enterOuterAlt(_localctx, 42);
				{
				this.state = 248;
				this.flowPrintStatement();
				}
				break;
			case kacoParser.FlowForm:
				this.enterOuterAlt(_localctx, 43);
				{
				this.state = 249;
				this.flowFormStatement();
				}
				break;
			case kacoParser.FlowQuery:
				this.enterOuterAlt(_localctx, 44);
				{
				this.state = 250;
				this.flowQueryStatement();
				}
				break;
			case kacoParser.TaskHang:
				this.enterOuterAlt(_localctx, 45);
				{
				this.state = 251;
				this.taskHangStatement();
				}
				break;
			case kacoParser.TaskFree:
				this.enterOuterAlt(_localctx, 46);
				{
				this.state = 252;
				this.taskFreeStatement();
				}
				break;
			case kacoParser.FlowTest:
				this.enterOuterAlt(_localctx, 47);
				{
				this.state = 253;
				this.flowTestStatement();
				}
				break;
			case kacoParser.FlowDrop:
				this.enterOuterAlt(_localctx, 48);
				{
				this.state = 254;
				this.flowDropStatement();
				}
				break;
			case kacoParser.FlowClose:
				this.enterOuterAlt(_localctx, 49);
				{
				this.state = 255;
				this.flowCloseStatement();
				}
				break;
			case kacoParser.FlowAgent:
				this.enterOuterAlt(_localctx, 50);
				{
				this.state = 256;
				this.flowAgentStatement();
				}
				break;
			case kacoParser.AgentCancel:
				this.enterOuterAlt(_localctx, 51);
				{
				this.state = 257;
				this.agentCancelStatement();
				}
				break;
			case kacoParser.FlowRefact:
				this.enterOuterAlt(_localctx, 52);
				{
				this.state = 258;
				this.flowRefactStatement();
				}
				break;
			case kacoParser.TestCommit:
				this.enterOuterAlt(_localctx, 53);
				{
				this.state = 259;
				this.testCommitStatement();
				}
				break;
			case kacoParser.ChangeInstFlow:
				this.enterOuterAlt(_localctx, 54);
				{
				this.state = 260;
				this.changeInstFlowStatement();
				}
				break;
			case kacoParser.InstFlow:
				this.enterOuterAlt(_localctx, 55);
				{
				this.state = 261;
				this.instFlowStatement();
				}
				break;
			case kacoParser.TaskDelete:
				this.enterOuterAlt(_localctx, 56);
				{
				this.state = 262;
				this.taskDeleteStatement();
				}
				break;
			case kacoParser.TachSend:
				this.enterOuterAlt(_localctx, 57);
				{
				this.state = 263;
				this.tachSendStatement();
				}
				break;
			case kacoParser.CommWord:
				this.enterOuterAlt(_localctx, 58);
				{
				this.state = 264;
				this.commWordStatement();
				}
				break;
			case kacoParser.ExecFunc:
				this.enterOuterAlt(_localctx, 59);
				{
				this.state = 265;
				this.execFuncStatement();
				}
				break;
			case kacoParser.CmdBreak:
				this.enterOuterAlt(_localctx, 60);
				{
				this.state = 266;
				this.cmdBreakStatement();
				}
				break;
			case kacoParser.OpenUrl:
				this.enterOuterAlt(_localctx, 61);
				{
				this.state = 267;
				this.openUrlStatement();
				}
				break;
			case kacoParser.OpenLayout:
				this.enterOuterAlt(_localctx, 62);
				{
				this.state = 268;
				this.openLayoutStatement();
				}
				break;
			case kacoParser.Print:
				this.enterOuterAlt(_localctx, 63);
				{
				this.state = 269;
				this.printStatement();
				}
				break;
			case kacoParser.RegeSign:
				this.enterOuterAlt(_localctx, 64);
				{
				this.state = 270;
				this.regeSignStatement();
				}
				break;
			case kacoParser.RsetPswdSign:
				this.enterOuterAlt(_localctx, 65);
				{
				this.state = 271;
				this.rsetPswdSignStatement();
				}
				break;
			case kacoParser.Extend:
				this.enterOuterAlt(_localctx, 66);
				{
				this.state = 272;
				this.extendStatement();
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
			this.state = 275;
			this.match(kacoParser.If);
			this.state = 276;
			this.match(kacoParser.OpenParen);
			this.state = 277;
			this.expressionSequence();
			this.state = 278;
			this.match(kacoParser.CloseParen);
			this.state = 279;
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
			this.state = 281;
			this.match(kacoParser.While);
			this.state = 282;
			this.match(kacoParser.OpenParen);
			this.state = 283;
			this.ctrlQuoteDotLiteral();
			this.state = 284;
			this.match(kacoParser.CloseParen);
			this.state = 285;
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
			this.state = 287;
			this.match(kacoParser.OpenBrace);
			this.state = 295;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << kacoParser.OpenBracket) | (1 << kacoParser.OpenForm) | (1 << kacoParser.SaveForm) | (1 << kacoParser.Close) | (1 << kacoParser.Refresh) | (1 << kacoParser.MessageBox) | (1 << kacoParser.ClickButton))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (kacoParser.GetComboDic - 32)) | (1 << (kacoParser.QueryData - 32)) | (1 << (kacoParser.CarryData - 32)) | (1 << (kacoParser.SQLExecute - 32)) | (1 << (kacoParser.GetCoder - 32)) | (1 << (kacoParser.SetCoder - 32)) | (1 << (kacoParser.ResetCtrlValue - 32)) | (1 << (kacoParser.SaveLastValue - 32)) | (1 << (kacoParser.LoadLastValue - 32)) | (1 << (kacoParser.SetVisiable - 32)) | (1 << (kacoParser.SetEnable - 32)) | (1 << (kacoParser.SetFocus - 32)) | (1 << (kacoParser.SetColor - 32)) | (1 << (kacoParser.ChangeTab - 32)) | (1 << (kacoParser.SwitchDisplay - 32)) | (1 << (kacoParser.StringSub - 32)) | (1 << (kacoParser.StringLen - 32)) | (1 << (kacoParser.StringStr - 32)) | (1 << (kacoParser.StringRep - 32)) | (1 << (kacoParser.StringCat - 32)) | (1 << (kacoParser.EncodeBase64 - 32)) | (1 << (kacoParser.DecodeBase64 - 32)) | (1 << (kacoParser.GetGridRows - 32)) | (1 << (kacoParser.AddGridRow - 32)) | (1 << (kacoParser.DelGridRow - 32)) | (1 << (kacoParser.SelGridRow - 32)) | (1 << (kacoParser.ExportXls - 32)) | (1 << (kacoParser.ImportXls - 32)) | (1 << (kacoParser.FlowTran - 32)) | (1 << (kacoParser.FlowSave - 32)) | (1 << (kacoParser.FlowFresh - 32)) | (1 << (kacoParser.FlowSend - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (kacoParser.FlowBack - 64)) | (1 << (kacoParser.FlowBack2 - 64)) | (1 << (kacoParser.FlowMend - 64)) | (1 << (kacoParser.FlowPrint - 64)) | (1 << (kacoParser.FlowForm - 64)) | (1 << (kacoParser.FlowQuery - 64)) | (1 << (kacoParser.TaskHang - 64)) | (1 << (kacoParser.TaskFree - 64)) | (1 << (kacoParser.FlowTest - 64)) | (1 << (kacoParser.FlowDrop - 64)) | (1 << (kacoParser.FlowClose - 64)) | (1 << (kacoParser.FlowAgent - 64)) | (1 << (kacoParser.AgentCancel - 64)) | (1 << (kacoParser.FlowRefact - 64)) | (1 << (kacoParser.TestCommit - 64)) | (1 << (kacoParser.ChangeInstFlow - 64)) | (1 << (kacoParser.InstFlow - 64)) | (1 << (kacoParser.TaskDelete - 64)) | (1 << (kacoParser.TachSend - 64)) | (1 << (kacoParser.CommWord - 64)) | (1 << (kacoParser.ExecFunc - 64)) | (1 << (kacoParser.CmdBreak - 64)) | (1 << (kacoParser.OpenUrl - 64)) | (1 << (kacoParser.OpenLayout - 64)) | (1 << (kacoParser.Print - 64)) | (1 << (kacoParser.RegeSign - 64)) | (1 << (kacoParser.RsetPswdSign - 64)) | (1 << (kacoParser.While - 64)))) !== 0) || _la === kacoParser.Extend) {
				{
				this.state = 293;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
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
				case kacoParser.FlowClose:
				case kacoParser.FlowAgent:
				case kacoParser.AgentCancel:
				case kacoParser.FlowRefact:
				case kacoParser.TestCommit:
				case kacoParser.ChangeInstFlow:
				case kacoParser.InstFlow:
				case kacoParser.TaskDelete:
				case kacoParser.TachSend:
				case kacoParser.CommWord:
				case kacoParser.ExecFunc:
				case kacoParser.CmdBreak:
				case kacoParser.OpenUrl:
				case kacoParser.OpenLayout:
				case kacoParser.Print:
				case kacoParser.RegeSign:
				case kacoParser.RsetPswdSign:
				case kacoParser.Extend:
					{
					this.state = 288;
					this.functionStatement();
					this.state = 289;
					this.match(kacoParser.SemiColon);
					}
					break;
				case kacoParser.While:
					{
					this.state = 291;
					this.whileStatement();
					}
					break;
				case kacoParser.OpenBracket:
					{
					this.state = 292;
					this.assignStatement();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 297;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 298;
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
			this.state = 300;
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
			this.state = 308;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case kacoParser.OpenBracket:
			case kacoParser.Minus:
			case kacoParser.Natural:
			case kacoParser.StringLiteral:
			case kacoParser.BooleanLiteral:
			case kacoParser.NullLiteral:
			case kacoParser.DecimalLiteral:
				{
				this.state = 303;
				this.commonLiteral();
				}
				break;
			case kacoParser.OpenParen:
				{
				this.state = 304;
				this.match(kacoParser.OpenParen);
				this.state = 305;
				this.expressionSequence();
				this.state = 306;
				this.match(kacoParser.CloseParen);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 327;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 325;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
					case 1:
						{
						_localctx = new SingleExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, kacoParser.RULE_singleExpression);
						this.state = 310;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 311;
						_la = this._input.LA(1);
						if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << kacoParser.LessThan) | (1 << kacoParser.GreaterThan) | (1 << kacoParser.LessThanEquals) | (1 << kacoParser.GreaterThanEquals))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 312;
						this.singleExpression(7);
						}
						break;

					case 2:
						{
						_localctx = new SingleExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, kacoParser.RULE_singleExpression);
						this.state = 313;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 314;
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
						this.state = 315;
						this.singleExpression(6);
						}
						break;

					case 3:
						{
						_localctx = new SingleExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, kacoParser.RULE_singleExpression);
						this.state = 316;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 317;
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
						this.state = 318;
						this.singleExpression(5);
						}
						break;

					case 4:
						{
						_localctx = new SingleExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, kacoParser.RULE_singleExpression);
						this.state = 319;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 320;
						this.match(kacoParser.And);
						this.state = 321;
						this.singleExpression(4);
						}
						break;

					case 5:
						{
						_localctx = new SingleExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, kacoParser.RULE_singleExpression);
						this.state = 322;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 323;
						this.match(kacoParser.Or);
						this.state = 324;
						this.singleExpression(3);
						}
						break;
					}
					}
				}
				this.state = 329;
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
			this.state = 330;
			this.assign();
			this.state = 331;
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
			this.state = 333;
			this.match(kacoParser.OpenParen);
			this.state = 342;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === kacoParser.OpenBracket || _la === kacoParser.Minus || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (kacoParser.Natural - 96)) | (1 << (kacoParser.StringLiteral - 96)) | (1 << (kacoParser.BooleanLiteral - 96)) | (1 << (kacoParser.NullLiteral - 96)) | (1 << (kacoParser.DecimalLiteral - 96)))) !== 0)) {
				{
				this.state = 334;
				this.commonLiteral();
				this.state = 339;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === kacoParser.Comma) {
					{
					{
					this.state = 335;
					this.match(kacoParser.Comma);
					this.state = 336;
					this.commonLiteral();
					}
					}
					this.state = 341;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 344;
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
	public queryDataQuoteEllipsisExpr(): QueryDataQuoteEllipsisExprContext {
		let _localctx: QueryDataQuoteEllipsisExprContext = new QueryDataQuoteEllipsisExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, kacoParser.RULE_queryDataQuoteEllipsisExpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 346;
			this.match(kacoParser.OpenParen);
			this.state = 361;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === kacoParser.OpenBracket || _la === kacoParser.Minus || ((((_la - 95)) & ~0x1F) === 0 && ((1 << (_la - 95)) & ((1 << (kacoParser.QueryDataMarke - 95)) | (1 << (kacoParser.Natural - 95)) | (1 << (kacoParser.StringLiteral - 95)) | (1 << (kacoParser.BooleanLiteral - 95)) | (1 << (kacoParser.NullLiteral - 95)) | (1 << (kacoParser.DecimalLiteral - 95)))) !== 0)) {
				{
				this.state = 349;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case kacoParser.OpenBracket:
				case kacoParser.Minus:
				case kacoParser.Natural:
				case kacoParser.StringLiteral:
				case kacoParser.BooleanLiteral:
				case kacoParser.NullLiteral:
				case kacoParser.DecimalLiteral:
					{
					this.state = 347;
					this.commonLiteral();
					}
					break;
				case kacoParser.QueryDataMarke:
					{
					this.state = 348;
					this.match(kacoParser.QueryDataMarke);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 358;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === kacoParser.Comma) {
					{
					{
					this.state = 351;
					this.match(kacoParser.Comma);
					this.state = 354;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case kacoParser.OpenBracket:
					case kacoParser.Minus:
					case kacoParser.Natural:
					case kacoParser.StringLiteral:
					case kacoParser.BooleanLiteral:
					case kacoParser.NullLiteral:
					case kacoParser.DecimalLiteral:
						{
						this.state = 352;
						this.commonLiteral();
						}
						break;
					case kacoParser.QueryDataMarke:
						{
						this.state = 353;
						this.match(kacoParser.QueryDataMarke);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					}
					this.state = 360;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 363;
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
		this.enterRule(_localctx, 22, kacoParser.RULE_quoteNaturalExpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 365;
			this.match(kacoParser.OpenParen);
			this.state = 367;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === kacoParser.Natural) {
				{
				this.state = 366;
				this.match(kacoParser.Natural);
				}
			}

			this.state = 369;
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
		this.enterRule(_localctx, 24, kacoParser.RULE_openFormStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 371;
			this.match(kacoParser.OpenForm);
			this.state = 372;
			this.match(kacoParser.OpenBracket);
			this.state = 373;
			_la = this._input.LA(1);
			if (!(((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (kacoParser.Natural - 96)) | (1 << (kacoParser.StringLiteral - 96)) | (1 << (kacoParser.DecimalLiteral - 96)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 374;
			this.match(kacoParser.CloseBracket);
			this.state = 376;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
			case 1:
				{
				this.state = 375;
				this.quoteEllipsisExpr();
				}
				break;
			}
			this.state = 379;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
			case 1:
				{
				this.state = 378;
				this.quoteEllipsisExpr();
				}
				break;
			}
			this.state = 382;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === kacoParser.OpenParen) {
				{
				this.state = 381;
				this.quoteEllipsisExpr();
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
	public saveFormStatement(): SaveFormStatementContext {
		let _localctx: SaveFormStatementContext = new SaveFormStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, kacoParser.RULE_saveFormStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 384;
			this.match(kacoParser.SaveForm);
			this.state = 385;
			this.quoteEllipsisExpr();
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
		this.enterRule(_localctx, 28, kacoParser.RULE_closeStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 387;
			this.match(kacoParser.Close);
			this.state = 388;
			this.match(kacoParser.OpenParen);
			this.state = 390;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === kacoParser.StringLiteral) {
				{
				this.state = 389;
				this.match(kacoParser.StringLiteral);
				}
			}

			this.state = 392;
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
	public refreshStatement(): RefreshStatementContext {
		let _localctx: RefreshStatementContext = new RefreshStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, kacoParser.RULE_refreshStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 394;
			this.match(kacoParser.Refresh);
			this.state = 395;
			this.match(kacoParser.OpenParen);
			this.state = 397;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === kacoParser.StringLiteral) {
				{
				this.state = 396;
				this.match(kacoParser.StringLiteral);
				}
			}

			this.state = 399;
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
	public messageStatement(): MessageStatementContext {
		let _localctx: MessageStatementContext = new MessageStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, kacoParser.RULE_messageStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 401;
			this.match(kacoParser.MessageBox);
			this.state = 402;
			this.match(kacoParser.OpenParen);
			this.state = 403;
			this.match(kacoParser.MessageLiteral);
			this.state = 404;
			this.match(kacoParser.Comma);
			this.state = 405;
			this.match(kacoParser.StringLiteral);
			this.state = 406;
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
	public clickButtonStatement(): ClickButtonStatementContext {
		let _localctx: ClickButtonStatementContext = new ClickButtonStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, kacoParser.RULE_clickButtonStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 408;
			this.match(kacoParser.ClickButton);
			this.state = 409;
			this.match(kacoParser.OpenParen);
			this.state = 410;
			this.ctrlQuoteLiteral();
			this.state = 411;
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
	public getComboDicStatement(): GetComboDicStatementContext {
		let _localctx: GetComboDicStatementContext = new GetComboDicStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, kacoParser.RULE_getComboDicStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 413;
			this.match(kacoParser.GetComboDic);
			this.state = 414;
			this.match(kacoParser.OpenParen);
			this.state = 415;
			this.ctrlQuoteLiteral();
			this.state = 416;
			this.match(kacoParser.Comma);
			this.state = 417;
			this.sqlQuoteStatement();
			this.state = 418;
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
	public queryDataStatement(): QueryDataStatementContext {
		let _localctx: QueryDataStatementContext = new QueryDataStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, kacoParser.RULE_queryDataStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 420;
			this.match(kacoParser.QueryData);
			this.state = 421;
			this.ctrlQuoteLiteral();
			this.state = 422;
			this.match(kacoParser.Comma);
			this.state = 423;
			this.ctrlQuoteLiteral();
			this.state = 425;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 20, this._ctx) ) {
			case 1:
				{
				this.state = 424;
				this.queryDataQuoteEllipsisExpr();
				}
				break;
			}
			this.state = 428;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 21, this._ctx) ) {
			case 1:
				{
				this.state = 427;
				this.quoteNaturalExpr();
				}
				break;
			}
			this.state = 431;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === kacoParser.OpenParen) {
				{
				this.state = 430;
				this.quoteNaturalExpr();
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
	public carryDataStatement(): CarryDataStatementContext {
		let _localctx: CarryDataStatementContext = new CarryDataStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, kacoParser.RULE_carryDataStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 433;
			this.match(kacoParser.CarryData);
			this.state = 434;
			this.ctrlQuoteLiteral();
			this.state = 440;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === kacoParser.OpenParen) {
				{
				this.state = 435;
				this.match(kacoParser.OpenParen);
				this.state = 437;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === kacoParser.OpenBracket) {
					{
					this.state = 436;
					this.ctrlQuoteLiteral();
					}
				}

				this.state = 439;
				this.match(kacoParser.CloseParen);
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
	public sqlExecuteStatement(): SqlExecuteStatementContext {
		let _localctx: SqlExecuteStatementContext = new SqlExecuteStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, kacoParser.RULE_sqlExecuteStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 442;
			this.match(kacoParser.SQLExecute);
			this.state = 443;
			this.sqlStatement();
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
		this.enterRule(_localctx, 44, kacoParser.RULE_getCoderStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 445;
			this.match(kacoParser.GetCoder);
			this.state = 446;
			this.match(kacoParser.OpenParen);
			this.state = 451;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === kacoParser.OpenBracket) {
				{
				this.state = 447;
				this.ctrlQuoteLiteral();
				this.state = 448;
				this.match(kacoParser.Comma);
				this.state = 449;
				this.match(kacoParser.StringLiteral);
				}
			}

			this.state = 453;
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
	public setCoderStatement(): SetCoderStatementContext {
		let _localctx: SetCoderStatementContext = new SetCoderStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, kacoParser.RULE_setCoderStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 455;
			this.match(kacoParser.SetCoder);
			this.state = 456;
			this.match(kacoParser.OpenParen);
			this.state = 461;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === kacoParser.OpenBracket) {
				{
				this.state = 457;
				this.ctrlQuoteLiteral();
				this.state = 458;
				this.match(kacoParser.Comma);
				this.state = 459;
				this.match(kacoParser.StringLiteral);
				}
			}

			this.state = 463;
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
	public resetCtrlValueStatement(): ResetCtrlValueStatementContext {
		let _localctx: ResetCtrlValueStatementContext = new ResetCtrlValueStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, kacoParser.RULE_resetCtrlValueStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 465;
			this.match(kacoParser.ResetCtrlValue);
			this.state = 466;
			this.quoteEllipsisExpr();
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
		this.enterRule(_localctx, 50, kacoParser.RULE_saveLastValueStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 468;
			this.match(kacoParser.SaveLastValue);
			this.state = 469;
			this.quoteEllipsisExpr();
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
		this.enterRule(_localctx, 52, kacoParser.RULE_loadLastValueStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 471;
			this.match(kacoParser.LoadLastValue);
			this.state = 472;
			this.quoteEllipsisExpr();
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
		this.enterRule(_localctx, 54, kacoParser.RULE_setVisiableStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 474;
			this.match(kacoParser.SetVisiable);
			this.state = 475;
			this.match(kacoParser.OpenParen);
			this.state = 476;
			this.ctrlQuoteLiteral();
			this.state = 477;
			this.match(kacoParser.Comma);
			this.state = 478;
			this.match(kacoParser.Natural);
			this.state = 479;
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
	public setEnableStatement(): SetEnableStatementContext {
		let _localctx: SetEnableStatementContext = new SetEnableStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, kacoParser.RULE_setEnableStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 481;
			this.match(kacoParser.SetEnable);
			this.state = 482;
			this.match(kacoParser.OpenParen);
			this.state = 483;
			this.ctrlQuoteLiteral();
			this.state = 484;
			this.match(kacoParser.Comma);
			this.state = 485;
			this.match(kacoParser.Natural);
			this.state = 486;
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
	public setFocusStatement(): SetFocusStatementContext {
		let _localctx: SetFocusStatementContext = new SetFocusStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, kacoParser.RULE_setFocusStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 488;
			this.match(kacoParser.SetFocus);
			this.state = 489;
			this.match(kacoParser.OpenParen);
			this.state = 490;
			this.ctrlQuoteLiteral();
			this.state = 491;
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
	public setColorStatement(): SetColorStatementContext {
		let _localctx: SetColorStatementContext = new SetColorStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, kacoParser.RULE_setColorStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 493;
			this.match(kacoParser.SetColor);
			this.state = 494;
			this.match(kacoParser.OpenParen);
			this.state = 495;
			this.ctrlQuoteLiteral();
			this.state = 496;
			this.match(kacoParser.Comma);
			this.state = 497;
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
			this.state = 498;
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
	public changeTabStatement(): ChangeTabStatementContext {
		let _localctx: ChangeTabStatementContext = new ChangeTabStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, kacoParser.RULE_changeTabStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 500;
			this.match(kacoParser.ChangeTab);
			this.state = 501;
			this.match(kacoParser.OpenParen);
			this.state = 502;
			this.ctrlQuoteLiteral();
			this.state = 503;
			this.match(kacoParser.Comma);
			this.state = 504;
			this.match(kacoParser.Natural);
			this.state = 505;
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
	public switchDisplayStatement(): SwitchDisplayStatementContext {
		let _localctx: SwitchDisplayStatementContext = new SwitchDisplayStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, kacoParser.RULE_switchDisplayStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 507;
			this.match(kacoParser.SwitchDisplay);
			this.state = 508;
			this.quoteEllipsisExpr();
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
		this.enterRule(_localctx, 66, kacoParser.RULE_stringSubStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 510;
			this.match(kacoParser.StringSub);
			this.state = 511;
			this.ctrlQuoteLiteral();
			this.state = 512;
			this.match(kacoParser.OpenParen);
			this.state = 515;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case kacoParser.OpenBracket:
				{
				this.state = 513;
				this.ctrlQuoteLiteral();
				}
				break;
			case kacoParser.StringLiteral:
				{
				this.state = 514;
				this.match(kacoParser.StringLiteral);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 517;
			this.match(kacoParser.Comma);
			this.state = 518;
			this.match(kacoParser.Natural);
			this.state = 519;
			this.match(kacoParser.Comma);
			this.state = 520;
			this.match(kacoParser.Natural);
			this.state = 521;
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
	public stringLenStatement(): StringLenStatementContext {
		let _localctx: StringLenStatementContext = new StringLenStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, kacoParser.RULE_stringLenStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 523;
			this.match(kacoParser.StringLen);
			this.state = 524;
			this.ctrlQuoteLiteral();
			this.state = 525;
			this.match(kacoParser.OpenParen);
			this.state = 528;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case kacoParser.OpenBracket:
				{
				this.state = 526;
				this.ctrlQuoteLiteral();
				}
				break;
			case kacoParser.StringLiteral:
				{
				this.state = 527;
				this.match(kacoParser.StringLiteral);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 530;
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
	public stringStrStatement(): StringStrStatementContext {
		let _localctx: StringStrStatementContext = new StringStrStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, kacoParser.RULE_stringStrStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 532;
			this.match(kacoParser.StringStr);
			this.state = 533;
			this.ctrlQuoteLiteral();
			this.state = 534;
			this.match(kacoParser.OpenParen);
			this.state = 537;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case kacoParser.StringLiteral:
				{
				this.state = 535;
				this.match(kacoParser.StringLiteral);
				}
				break;
			case kacoParser.OpenBracket:
				{
				this.state = 536;
				this.ctrlQuoteLiteral();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 539;
			this.match(kacoParser.Comma);
			this.state = 542;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case kacoParser.StringLiteral:
				{
				this.state = 540;
				this.match(kacoParser.StringLiteral);
				}
				break;
			case kacoParser.OpenBracket:
				{
				this.state = 541;
				this.ctrlQuoteLiteral();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 544;
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
	public stringRepStatement(): StringRepStatementContext {
		let _localctx: StringRepStatementContext = new StringRepStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, kacoParser.RULE_stringRepStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 546;
			this.match(kacoParser.StringRep);
			this.state = 547;
			this.match(kacoParser.OpenParen);
			this.state = 548;
			this.ctrlQuoteLiteral();
			this.state = 549;
			this.match(kacoParser.Comma);
			this.state = 552;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case kacoParser.StringLiteral:
				{
				this.state = 550;
				this.match(kacoParser.StringLiteral);
				}
				break;
			case kacoParser.OpenBracket:
				{
				this.state = 551;
				this.ctrlQuoteLiteral();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 554;
			this.match(kacoParser.Comma);
			this.state = 557;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case kacoParser.StringLiteral:
				{
				this.state = 555;
				this.match(kacoParser.StringLiteral);
				}
				break;
			case kacoParser.OpenBracket:
				{
				this.state = 556;
				this.ctrlQuoteLiteral();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 559;
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
	public stringCatStatement(): StringCatStatementContext {
		let _localctx: StringCatStatementContext = new StringCatStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, kacoParser.RULE_stringCatStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 561;
			this.match(kacoParser.StringCat);
			this.state = 562;
			this.match(kacoParser.OpenParen);
			this.state = 563;
			this.ctrlQuoteLiteral();
			this.state = 569;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 564;
				this.match(kacoParser.Comma);
				this.state = 567;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case kacoParser.StringLiteral:
					{
					this.state = 565;
					this.match(kacoParser.StringLiteral);
					}
					break;
				case kacoParser.OpenBracket:
					{
					this.state = 566;
					this.ctrlQuoteLiteral();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				}
				this.state = 571;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === kacoParser.Comma);
			this.state = 573;
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
	public encodeBase64Statement(): EncodeBase64StatementContext {
		let _localctx: EncodeBase64StatementContext = new EncodeBase64StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, kacoParser.RULE_encodeBase64Statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 575;
			this.match(kacoParser.EncodeBase64);
			this.state = 576;
			this.ctrlQuoteLiteral();
			this.state = 577;
			this.match(kacoParser.OpenParen);
			this.state = 580;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case kacoParser.StringLiteral:
				{
				this.state = 578;
				this.match(kacoParser.StringLiteral);
				}
				break;
			case kacoParser.OpenBracket:
				{
				this.state = 579;
				this.ctrlQuoteLiteral();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 582;
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
	public decodeBase64Statement(): DecodeBase64StatementContext {
		let _localctx: DecodeBase64StatementContext = new DecodeBase64StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, kacoParser.RULE_decodeBase64Statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 584;
			this.match(kacoParser.DecodeBase64);
			this.state = 585;
			this.ctrlQuoteLiteral();
			this.state = 586;
			this.match(kacoParser.OpenParen);
			this.state = 589;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case kacoParser.StringLiteral:
				{
				this.state = 587;
				this.match(kacoParser.StringLiteral);
				}
				break;
			case kacoParser.OpenBracket:
				{
				this.state = 588;
				this.ctrlQuoteLiteral();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 591;
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
	public getGridRowsStatement(): GetGridRowsStatementContext {
		let _localctx: GetGridRowsStatementContext = new GetGridRowsStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, kacoParser.RULE_getGridRowsStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 593;
			this.match(kacoParser.GetGridRows);
			this.state = 594;
			this.match(kacoParser.OpenParen);
			this.state = 595;
			this.ctrlQuoteLiteral();
			this.state = 596;
			this.match(kacoParser.Comma);
			this.state = 597;
			this.ctrlQuoteDotLiteral();
			this.state = 598;
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
	public addGridRowStatement(): AddGridRowStatementContext {
		let _localctx: AddGridRowStatementContext = new AddGridRowStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, kacoParser.RULE_addGridRowStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 600;
			this.match(kacoParser.AddGridRow);
			this.state = 601;
			this.match(kacoParser.OpenParen);
			this.state = 602;
			this.ctrlQuoteDotLiteral();
			this.state = 612;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 38, this._ctx) ) {
			case 1:
				{
				{
				this.state = 603;
				this.match(kacoParser.Comma);
				this.state = 604;
				this.ctrlQuoteDotLiteral();
				}
				}
				break;

			case 2:
				{
				this.state = 609;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === kacoParser.Comma) {
					{
					{
					this.state = 605;
					this.match(kacoParser.Comma);
					this.state = 606;
					this.commonLiteral();
					}
					}
					this.state = 611;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			}
			this.state = 614;
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
	public delGridRowStatement(): DelGridRowStatementContext {
		let _localctx: DelGridRowStatementContext = new DelGridRowStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, kacoParser.RULE_delGridRowStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 616;
			this.match(kacoParser.DelGridRow);
			this.state = 617;
			this.match(kacoParser.OpenParen);
			this.state = 618;
			this.ctrlQuoteDotLiteral();
			this.state = 619;
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
	public selGridRowStatement(): SelGridRowStatementContext {
		let _localctx: SelGridRowStatementContext = new SelGridRowStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, kacoParser.RULE_selGridRowStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 621;
			this.match(kacoParser.SelGridRow);
			this.state = 622;
			this.match(kacoParser.OpenParen);
			this.state = 623;
			this.ctrlQuoteDotLiteral();
			this.state = 624;
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
	public exportXlsStatement(): ExportXlsStatementContext {
		let _localctx: ExportXlsStatementContext = new ExportXlsStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, kacoParser.RULE_exportXlsStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 626;
			this.match(kacoParser.ExportXls);
			this.state = 627;
			this.match(kacoParser.OpenParen);
			this.state = 628;
			this.ctrlQuoteLiteral();
			this.state = 631;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === kacoParser.Comma) {
				{
				this.state = 629;
				this.match(kacoParser.Comma);
				this.state = 630;
				this.match(kacoParser.Natural);
				}
			}

			this.state = 633;
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
	public importXlsStatement(): ImportXlsStatementContext {
		let _localctx: ImportXlsStatementContext = new ImportXlsStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, kacoParser.RULE_importXlsStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 635;
			this.match(kacoParser.ImportXls);
			this.state = 636;
			this.match(kacoParser.OpenParen);
			this.state = 637;
			this.ctrlQuoteLiteral();
			this.state = 638;
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
	public flowTranStatement(): FlowTranStatementContext {
		let _localctx: FlowTranStatementContext = new FlowTranStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, kacoParser.RULE_flowTranStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 640;
			this.match(kacoParser.FlowTran);
			this.state = 641;
			this.match(kacoParser.OpenParen);
			this.state = 646;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === kacoParser.OpenBracket) {
				{
				this.state = 642;
				this.ctrlQuoteDotLiteral();
				this.state = 643;
				this.match(kacoParser.Comma);
				this.state = 644;
				this.ctrlQuoteDotLiteral();
				}
			}

			this.state = 648;
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
	public flowSaveStatement(): FlowSaveStatementContext {
		let _localctx: FlowSaveStatementContext = new FlowSaveStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, kacoParser.RULE_flowSaveStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 650;
			this.match(kacoParser.FlowSave);
			this.state = 651;
			this.match(kacoParser.OpenParen);
			this.state = 653;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === kacoParser.OpenBracket || _la === kacoParser.Minus || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (kacoParser.Natural - 96)) | (1 << (kacoParser.StringLiteral - 96)) | (1 << (kacoParser.BooleanLiteral - 96)) | (1 << (kacoParser.NullLiteral - 96)) | (1 << (kacoParser.DecimalLiteral - 96)))) !== 0)) {
				{
				this.state = 652;
				this.commonLiteral();
				}
			}

			this.state = 657;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === kacoParser.Comma) {
				{
				this.state = 655;
				this.match(kacoParser.Comma);
				this.state = 656;
				this.commonLiteral();
				}
			}

			this.state = 659;
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
	public flowFreshStatement(): FlowFreshStatementContext {
		let _localctx: FlowFreshStatementContext = new FlowFreshStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, kacoParser.RULE_flowFreshStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 661;
			this.match(kacoParser.FlowFresh);
			this.state = 662;
			this.match(kacoParser.OpenParen);
			this.state = 663;
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
	public flowSendStatement(): FlowSendStatementContext {
		let _localctx: FlowSendStatementContext = new FlowSendStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, kacoParser.RULE_flowSendStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 665;
			this.match(kacoParser.FlowSend);
			this.state = 666;
			this.match(kacoParser.OpenParen);
			this.state = 671;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === kacoParser.OpenBracket) {
				{
				this.state = 667;
				this.ctrlQuoteDotLiteral();
				this.state = 668;
				this.match(kacoParser.Comma);
				this.state = 669;
				this.ctrlQuoteDotLiteral();
				}
			}

			this.state = 673;
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
	public flowBackStatement(): FlowBackStatementContext {
		let _localctx: FlowBackStatementContext = new FlowBackStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, kacoParser.RULE_flowBackStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 675;
			this.match(kacoParser.FlowBack);
			this.state = 676;
			this.match(kacoParser.OpenParen);
			this.state = 681;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === kacoParser.OpenBracket) {
				{
				this.state = 677;
				this.ctrlQuoteDotLiteral();
				this.state = 678;
				this.match(kacoParser.Comma);
				this.state = 679;
				this.ctrlQuoteDotLiteral();
				}
			}

			this.state = 683;
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
	public flowBack2Statement(): FlowBack2StatementContext {
		let _localctx: FlowBack2StatementContext = new FlowBack2StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, kacoParser.RULE_flowBack2Statement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 685;
			this.match(kacoParser.FlowBack2);
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
		this.enterRule(_localctx, 104, kacoParser.RULE_flowMendStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 695;
			this.match(kacoParser.FlowMend);
			this.state = 696;
			this.match(kacoParser.OpenParen);
			this.state = 701;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === kacoParser.OpenBracket) {
				{
				this.state = 697;
				this.ctrlQuoteDotLiteral();
				this.state = 698;
				this.match(kacoParser.Comma);
				this.state = 699;
				this.ctrlQuoteDotLiteral();
				}
			}

			this.state = 703;
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
	public flowPrintStatement(): FlowPrintStatementContext {
		let _localctx: FlowPrintStatementContext = new FlowPrintStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, kacoParser.RULE_flowPrintStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 705;
			this.match(kacoParser.FlowPrint);
			this.state = 706;
			this.match(kacoParser.OpenParen);
			this.state = 707;
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
	public flowFormStatement(): FlowFormStatementContext {
		let _localctx: FlowFormStatementContext = new FlowFormStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, kacoParser.RULE_flowFormStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 709;
			this.match(kacoParser.FlowForm);
			this.state = 710;
			this.match(kacoParser.OpenParen);
			this.state = 712;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === kacoParser.OpenBracket) {
				{
				this.state = 711;
				this.ctrlQuoteDotLiteral();
				}
			}

			this.state = 714;
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
	public flowQueryStatement(): FlowQueryStatementContext {
		let _localctx: FlowQueryStatementContext = new FlowQueryStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, kacoParser.RULE_flowQueryStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 716;
			this.match(kacoParser.FlowQuery);
			this.state = 717;
			this.match(kacoParser.OpenParen);
			this.state = 719;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === kacoParser.OpenBracket) {
				{
				this.state = 718;
				this.ctrlQuoteDotLiteral();
				}
			}

			this.state = 721;
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
	public taskHangStatement(): TaskHangStatementContext {
		let _localctx: TaskHangStatementContext = new TaskHangStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, kacoParser.RULE_taskHangStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 723;
			this.match(kacoParser.TaskHang);
			this.state = 724;
			this.match(kacoParser.OpenParen);
			this.state = 729;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === kacoParser.OpenBracket) {
				{
				this.state = 725;
				this.ctrlQuoteDotLiteral();
				this.state = 726;
				this.match(kacoParser.Comma);
				this.state = 727;
				this.ctrlQuoteDotLiteral();
				}
			}

			this.state = 731;
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
	public taskFreeStatement(): TaskFreeStatementContext {
		let _localctx: TaskFreeStatementContext = new TaskFreeStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, kacoParser.RULE_taskFreeStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 733;
			this.match(kacoParser.TaskFree);
			this.state = 734;
			this.match(kacoParser.OpenParen);
			this.state = 739;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === kacoParser.OpenBracket) {
				{
				this.state = 735;
				this.ctrlQuoteDotLiteral();
				this.state = 736;
				this.match(kacoParser.Comma);
				this.state = 737;
				this.ctrlQuoteDotLiteral();
				}
			}

			this.state = 741;
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
	public flowTestStatement(): FlowTestStatementContext {
		let _localctx: FlowTestStatementContext = new FlowTestStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, kacoParser.RULE_flowTestStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 743;
			this.match(kacoParser.FlowTest);
			this.state = 744;
			this.match(kacoParser.OpenParen);
			this.state = 745;
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
	public flowDropStatement(): FlowDropStatementContext {
		let _localctx: FlowDropStatementContext = new FlowDropStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, kacoParser.RULE_flowDropStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 747;
			this.match(kacoParser.FlowDrop);
			this.state = 748;
			this.match(kacoParser.OpenParen);
			this.state = 750;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === kacoParser.OpenBracket) {
				{
				this.state = 749;
				this.ctrlQuoteDotLiteral();
				}
			}

			this.state = 752;
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
	public flowCloseStatement(): FlowCloseStatementContext {
		let _localctx: FlowCloseStatementContext = new FlowCloseStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, kacoParser.RULE_flowCloseStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 754;
			this.match(kacoParser.FlowClose);
			this.state = 755;
			this.match(kacoParser.OpenParen);
			this.state = 756;
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
	public flowAgentStatement(): FlowAgentStatementContext {
		let _localctx: FlowAgentStatementContext = new FlowAgentStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, kacoParser.RULE_flowAgentStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 758;
			this.match(kacoParser.FlowAgent);
			this.state = 759;
			this.match(kacoParser.OpenParen);
			this.state = 760;
			this.commonLiteral();
			this.state = 761;
			this.match(kacoParser.Comma);
			this.state = 762;
			this.commonLiteral();
			this.state = 763;
			this.match(kacoParser.Comma);
			this.state = 764;
			this.commonLiteral();
			this.state = 765;
			this.match(kacoParser.Comma);
			this.state = 766;
			this.commonLiteral();
			this.state = 767;
			this.match(kacoParser.Comma);
			this.state = 768;
			this.commonLiteral();
			this.state = 771;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === kacoParser.Comma) {
				{
				this.state = 769;
				this.match(kacoParser.Comma);
				this.state = 770;
				this.commonLiteral();
				}
			}

			this.state = 773;
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
	public agentCancelStatement(): AgentCancelStatementContext {
		let _localctx: AgentCancelStatementContext = new AgentCancelStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, kacoParser.RULE_agentCancelStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 775;
			this.match(kacoParser.AgentCancel);
			this.state = 776;
			this.match(kacoParser.OpenParen);
			this.state = 777;
			this.ctrlQuoteLiteral();
			this.state = 778;
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
	public flowRefactStatement(): FlowRefactStatementContext {
		let _localctx: FlowRefactStatementContext = new FlowRefactStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, kacoParser.RULE_flowRefactStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 780;
			this.match(kacoParser.FlowRefact);
			this.state = 781;
			this.match(kacoParser.OpenParen);
			this.state = 782;
			this.ctrlQuoteDotLiteral();
			this.state = 783;
			this.match(kacoParser.Comma);
			this.state = 784;
			this.match(kacoParser.Natural);
			this.state = 785;
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
	public testCommitStatement(): TestCommitStatementContext {
		let _localctx: TestCommitStatementContext = new TestCommitStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, kacoParser.RULE_testCommitStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 787;
			this.match(kacoParser.TestCommit);
			this.state = 788;
			this.match(kacoParser.OpenParen);
			this.state = 789;
			this.commonLiteral();
			this.state = 790;
			this.match(kacoParser.Comma);
			this.state = 791;
			this.match(kacoParser.StringLiteral);
			this.state = 792;
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
	public changeInstFlowStatement(): ChangeInstFlowStatementContext {
		let _localctx: ChangeInstFlowStatementContext = new ChangeInstFlowStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, kacoParser.RULE_changeInstFlowStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 794;
			this.match(kacoParser.ChangeInstFlow);
			this.state = 795;
			this.match(kacoParser.OpenParen);
			this.state = 796;
			this.ctrlQuoteDotLiteral();
			this.state = 797;
			this.match(kacoParser.Comma);
			this.state = 798;
			this.ctrlQuoteDotLiteral();
			this.state = 799;
			this.match(kacoParser.Comma);
			this.state = 800;
			this.commonLiteral();
			this.state = 801;
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
	public instFlowStatement(): InstFlowStatementContext {
		let _localctx: InstFlowStatementContext = new InstFlowStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, kacoParser.RULE_instFlowStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 803;
			this.match(kacoParser.InstFlow);
			this.state = 804;
			this.match(kacoParser.OpenParen);
			this.state = 805;
			this.match(kacoParser.StringLiteral);
			this.state = 806;
			this.match(kacoParser.Comma);
			this.state = 807;
			this.match(kacoParser.StringLiteral);
			this.state = 808;
			this.match(kacoParser.CloseParen);
			this.state = 809;
			this.match(kacoParser.OpenParen);
			this.state = 810;
			this.match(kacoParser.StringLiteral);
			this.state = 811;
			this.match(kacoParser.Comma);
			this.state = 812;
			this.ctrlQuoteLiteral();
			this.state = 813;
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
	public taskDeleteStatement(): TaskDeleteStatementContext {
		let _localctx: TaskDeleteStatementContext = new TaskDeleteStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, kacoParser.RULE_taskDeleteStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 815;
			this.match(kacoParser.TaskDelete);
			this.state = 816;
			this.match(kacoParser.OpenParen);
			this.state = 817;
			this.commonLiteral();
			this.state = 818;
			this.match(kacoParser.Comma);
			this.state = 819;
			this.commonLiteral();
			this.state = 820;
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
	public tachSendStatement(): TachSendStatementContext {
		let _localctx: TachSendStatementContext = new TachSendStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, kacoParser.RULE_tachSendStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 822;
			this.match(kacoParser.TachSend);
			this.state = 823;
			this.match(kacoParser.OpenParen);
			this.state = 828;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === kacoParser.OpenBracket || _la === kacoParser.Minus || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (kacoParser.Natural - 96)) | (1 << (kacoParser.StringLiteral - 96)) | (1 << (kacoParser.BooleanLiteral - 96)) | (1 << (kacoParser.NullLiteral - 96)) | (1 << (kacoParser.DecimalLiteral - 96)))) !== 0)) {
				{
				this.state = 824;
				this.commonLiteral();
				this.state = 825;
				this.match(kacoParser.Comma);
				this.state = 826;
				this.commonLiteral();
				}
			}

			this.state = 830;
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
	public commWordStatement(): CommWordStatementContext {
		let _localctx: CommWordStatementContext = new CommWordStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, kacoParser.RULE_commWordStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 832;
			this.match(kacoParser.CommWord);
			this.state = 833;
			this.match(kacoParser.OpenParen);
			this.state = 834;
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
	public execFuncStatement(): ExecFuncStatementContext {
		let _localctx: ExecFuncStatementContext = new ExecFuncStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, kacoParser.RULE_execFuncStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 836;
			this.match(kacoParser.ExecFunc);
			this.state = 837;
			this.ctrlQuoteLiteral();
			this.state = 838;
			this.match(kacoParser.OpenParen);
			this.state = 839;
			this.commonLiteral();
			this.state = 840;
			this.match(kacoParser.CloseParen);
			this.state = 853;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === kacoParser.OpenParen) {
				{
				this.state = 841;
				this.match(kacoParser.OpenParen);
				this.state = 843;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === kacoParser.OpenBracket || _la === kacoParser.Minus || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (kacoParser.Natural - 96)) | (1 << (kacoParser.StringLiteral - 96)) | (1 << (kacoParser.BooleanLiteral - 96)) | (1 << (kacoParser.NullLiteral - 96)) | (1 << (kacoParser.DecimalLiteral - 96)))) !== 0)) {
					{
					this.state = 842;
					this.commonLiteral();
					}
				}

				this.state = 849;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === kacoParser.Comma) {
					{
					{
					this.state = 845;
					this.match(kacoParser.Comma);
					this.state = 846;
					this.commonLiteral();
					}
					}
					this.state = 851;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 852;
				this.match(kacoParser.CloseParen);
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
	public cmdBreakStatement(): CmdBreakStatementContext {
		let _localctx: CmdBreakStatementContext = new CmdBreakStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, kacoParser.RULE_cmdBreakStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 855;
			this.match(kacoParser.CmdBreak);
			this.state = 856;
			this.match(kacoParser.OpenParen);
			this.state = 857;
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
	public openUrlStatement(): OpenUrlStatementContext {
		let _localctx: OpenUrlStatementContext = new OpenUrlStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, kacoParser.RULE_openUrlStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 859;
			this.match(kacoParser.OpenUrl);
			this.state = 860;
			this.match(kacoParser.OpenParen);
			this.state = 863;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 57, this._ctx) ) {
			case 1:
				{
				this.state = 861;
				this.match(kacoParser.StringLiteral);
				this.state = 862;
				this.match(kacoParser.Comma);
				}
				break;
			}
			this.state = 865;
			this.expression();
			this.state = 866;
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
	public openLayoutStatement(): OpenLayoutStatementContext {
		let _localctx: OpenLayoutStatementContext = new OpenLayoutStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, kacoParser.RULE_openLayoutStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 868;
			this.match(kacoParser.OpenLayout);
			this.state = 869;
			this.ctrlQuoteLiteral();
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
		let _localctx: PrintStatementContext = new PrintStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 148, kacoParser.RULE_printStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 871;
			this.match(kacoParser.Print);
			this.state = 872;
			this.ctrlQuoteLiteral();
			this.state = 873;
			this.quoteEllipsisExpr();
			this.state = 877;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === kacoParser.OpenParen) {
				{
				this.state = 874;
				this.match(kacoParser.OpenParen);
				this.state = 875;
				this.match(kacoParser.PrintLiteral);
				this.state = 876;
				this.match(kacoParser.CloseParen);
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
	public regeSignStatement(): RegeSignStatementContext {
		let _localctx: RegeSignStatementContext = new RegeSignStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, kacoParser.RULE_regeSignStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 879;
			this.match(kacoParser.RegeSign);
			this.state = 880;
			this.match(kacoParser.OpenParen);
			this.state = 881;
			this.commonLiteral();
			this.state = 882;
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
	public rsetPswdSignStatement(): RsetPswdSignStatementContext {
		let _localctx: RsetPswdSignStatementContext = new RsetPswdSignStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, kacoParser.RULE_rsetPswdSignStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 884;
			this.match(kacoParser.RsetPswdSign);
			this.state = 885;
			this.match(kacoParser.OpenParen);
			this.state = 886;
			this.commonLiteral();
			this.state = 887;
			this.match(kacoParser.Comma);
			this.state = 888;
			this.match(kacoParser.StringLiteral);
			this.state = 889;
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
	public extendStatement(): ExtendStatementContext {
		let _localctx: ExtendStatementContext = new ExtendStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, kacoParser.RULE_extendStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 891;
			this.match(kacoParser.Extend);
			this.state = 892;
			this.match(kacoParser.OpenParen);
			this.state = 901;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === kacoParser.OpenBracket || _la === kacoParser.Minus || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (kacoParser.Natural - 96)) | (1 << (kacoParser.StringLiteral - 96)) | (1 << (kacoParser.BooleanLiteral - 96)) | (1 << (kacoParser.NullLiteral - 96)) | (1 << (kacoParser.DecimalLiteral - 96)))) !== 0)) {
				{
				this.state = 893;
				this.commonLiteral();
				this.state = 898;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === kacoParser.Comma) {
					{
					{
					this.state = 894;
					this.match(kacoParser.Comma);
					this.state = 895;
					this.commonLiteral();
					}
					}
					this.state = 900;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 903;
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
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, kacoParser.RULE_expression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 905;
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
		this.enterRule(_localctx, 158, kacoParser.RULE_subTerm);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 907;
			this.addTerm();
			this.state = 912;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 61, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 908;
					this.match(kacoParser.Minus);
					this.state = 909;
					this.addTerm();
					}
					}
				}
				this.state = 914;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 61, this._ctx);
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
		this.enterRule(_localctx, 160, kacoParser.RULE_addTerm);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 915;
			this.divTerm();
			this.state = 920;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === kacoParser.Plus) {
				{
				{
				this.state = 916;
				this.match(kacoParser.Plus);
				this.state = 917;
				this.divTerm();
				}
				}
				this.state = 922;
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
		this.enterRule(_localctx, 162, kacoParser.RULE_divTerm);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 923;
			this.mulTerm();
			this.state = 928;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === kacoParser.Divide) {
				{
				{
				this.state = 924;
				this.match(kacoParser.Divide);
				this.state = 925;
				this.mulTerm();
				}
				}
				this.state = 930;
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
		this.enterRule(_localctx, 164, kacoParser.RULE_mulTerm);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 931;
			this.parnTerm();
			this.state = 936;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === kacoParser.Multiply) {
				{
				{
				this.state = 932;
				this.match(kacoParser.Multiply);
				this.state = 933;
				this.parnTerm();
				}
				}
				this.state = 938;
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
	public supplierStatement(): SupplierStatementContext {
		let _localctx: SupplierStatementContext = new SupplierStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 166, kacoParser.RULE_supplierStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 939;
			this.getGridRowsStatement();
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
		this.enterRule(_localctx, 168, kacoParser.RULE_parnTerm);
		try {
			this.state = 961;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 68, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 944;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 65, this._ctx) ) {
				case 1:
					{
					this.state = 941;
					this.commonLiteral();
					}
					break;

				case 2:
					{
					this.state = 942;
					this.sqlQuoteStatement();
					}
					break;

				case 3:
					{
					this.state = 943;
					this.supplierStatement();
					}
					break;
				}
				this.state = 946;
				this.expression();
				this.state = 950;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 66, this._ctx) ) {
				case 1:
					{
					this.state = 947;
					this.commonLiteral();
					}
					break;

				case 2:
					{
					this.state = 948;
					this.sqlQuoteStatement();
					}
					break;

				case 3:
					{
					this.state = 949;
					this.supplierStatement();
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 955;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 67, this._ctx) ) {
				case 1:
					{
					this.state = 952;
					this.commonLiteral();
					}
					break;

				case 2:
					{
					this.state = 953;
					this.sqlQuoteStatement();
					}
					break;

				case 3:
					{
					this.state = 954;
					this.supplierStatement();
					}
					break;
				}
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 957;
				this.match(kacoParser.OpenParen);
				this.state = 958;
				this.expression();
				this.state = 959;
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
		this.enterRule(_localctx, 170, kacoParser.RULE_assign);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 963;
			this.assignStart();
			this.state = 964;
			this.match(kacoParser.Assign);
			this.state = 965;
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
		this.enterRule(_localctx, 172, kacoParser.RULE_assignStart);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 987;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 72, this._ctx) ) {
			case 1:
				{
				{
				this.state = 972;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 69, this._ctx) ) {
				case 1:
					{
					this.state = 967;
					this.ctrlQuoteLiteral();
					}
					break;

				case 2:
					{
					this.state = 968;
					this.ctrlQuoteLiteral();
					this.state = 969;
					this.match(kacoParser.Dot);
					this.state = 970;
					this.ctrlQuoteLiteral();
					}
					break;
				}
				this.state = 978;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === kacoParser.Comma) {
					{
					{
					this.state = 974;
					this.match(kacoParser.Comma);
					this.state = 975;
					this.ctrlQuoteLiteral();
					}
					}
					this.state = 980;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				}
				break;

			case 2:
				{
				{
				this.state = 984;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 71, this._ctx) ) {
				case 1:
					{
					this.state = 981;
					this.ctrlQuoteLiteral();
					this.state = 982;
					this.match(kacoParser.Dot);
					}
					break;
				}
				this.state = 986;
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
		this.enterRule(_localctx, 174, kacoParser.RULE_ctrlQuoteLiteral);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 989;
			this.match(kacoParser.OpenBracket);
			this.state = 990;
			this.match(kacoParser.StringLiteral);
			this.state = 991;
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
		this.enterRule(_localctx, 176, kacoParser.RULE_ctrlQuoteDotLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 993;
			this.match(kacoParser.OpenBracket);
			this.state = 994;
			this.match(kacoParser.StringLiteral);
			this.state = 997;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === kacoParser.Dot) {
				{
				this.state = 995;
				this.match(kacoParser.Dot);
				this.state = 996;
				this.match(kacoParser.StringLiteral);
				}
			}

			this.state = 1003;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === kacoParser.Comma) {
				{
				{
				this.state = 999;
				this.match(kacoParser.Comma);
				this.state = 1000;
				this.match(kacoParser.StringLiteral);
				}
				}
				this.state = 1005;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1020;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === kacoParser.OpenParen) {
				{
				this.state = 1006;
				this.match(kacoParser.OpenParen);
				this.state = 1017;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case kacoParser.Selected:
					{
					{
					this.state = 1007;
					this.match(kacoParser.Selected);
					this.state = 1008;
					this.match(kacoParser.Equal);
					this.state = 1012;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 75, this._ctx) ) {
					case 1:
						{
						this.state = 1009;
						this.negationExpr();
						}
						break;

					case 2:
						{
						this.state = 1010;
						this.match(kacoParser.Multiply);
						}
						break;

					case 3:
						{
						this.state = 1011;
						this.match(kacoParser.Natural);
						}
						break;
					}
					}
					}
					break;
				case kacoParser.StringLiteral:
					{
					{
					this.state = 1014;
					this.match(kacoParser.StringLiteral);
					this.state = 1015;
					this.match(kacoParser.Equal);
					this.state = 1016;
					this.commonLiteral();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1019;
				this.match(kacoParser.CloseParen);
				}
			}

			this.state = 1022;
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
		this.enterRule(_localctx, 178, kacoParser.RULE_ctrlQuoteParamLiteral);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1024;
			this.match(kacoParser.OpenBracket);
			this.state = 1025;
			this.match(kacoParser.ParamLiteral);
			this.state = 1026;
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
		this.enterRule(_localctx, 180, kacoParser.RULE_ctrlConstantLiteral);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1028;
			this.match(kacoParser.OpenBracket);
			this.state = 1029;
			this.match(kacoParser.Const);
			this.state = 1030;
			this.match(kacoParser.Constant);
			this.state = 1031;
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
		this.enterRule(_localctx, 182, kacoParser.RULE_commonLiteral);
		try {
			this.state = 1041;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 78, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1033;
				this.ctrlQuoteLiteral();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1034;
				this.ctrlQuoteDotLiteral();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1035;
				this.ctrlQuoteParamLiteral();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1036;
				this.ctrlConstantLiteral();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1037;
				this.negationExpr();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1038;
				this.match(kacoParser.BooleanLiteral);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1039;
				this.match(kacoParser.NullLiteral);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1040;
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
	// @RuleVersion(0)
	public negationExpr(): NegationExprContext {
		let _localctx: NegationExprContext = new NegationExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 184, kacoParser.RULE_negationExpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1044;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === kacoParser.Minus) {
				{
				this.state = 1043;
				this.match(kacoParser.Minus);
				}
			}

			this.state = 1046;
			_la = this._input.LA(1);
			if (!(_la === kacoParser.Natural || _la === kacoParser.DecimalLiteral)) {
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
	public sqlTemplateExpr(): SqlTemplateExprContext {
		let _localctx: SqlTemplateExprContext = new SqlTemplateExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 186, kacoParser.RULE_sqlTemplateExpr);
		try {
			let _alt: number;
			this.state = 1115;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 88, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1048;
				this.commonLiteral();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1049;
				this.match(kacoParser.Multiply);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1050;
				this.match(kacoParser.Extend);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1051;
				this.match(kacoParser.Assign);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1052;
				this.match(kacoParser.Dot);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1053;
				this.match(kacoParser.Comma);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1054;
				this.match(kacoParser.Constant);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1055;
				this.match(kacoParser.LessThan);
				this.state = 1059;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 80, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 1056;
						this.sqlTemplateExpr();
						}
						}
					}
					this.state = 1061;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 80, this._ctx);
				}
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1062;
				this.match(kacoParser.LessThanEquals);
				this.state = 1066;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 81, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 1063;
						this.sqlTemplateExpr();
						}
						}
					}
					this.state = 1068;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 81, this._ctx);
				}
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1069;
				this.match(kacoParser.GreaterThan);
				this.state = 1073;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 82, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 1070;
						this.sqlTemplateExpr();
						}
						}
					}
					this.state = 1075;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 82, this._ctx);
				}
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 1076;
				this.match(kacoParser.GreaterThanEquals);
				this.state = 1080;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 83, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 1077;
						this.sqlTemplateExpr();
						}
						}
					}
					this.state = 1082;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 83, this._ctx);
				}
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 1083;
				this.match(kacoParser.LessThan);
				this.state = 1087;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 84, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 1084;
						this.sqlTemplateExpr();
						}
						}
					}
					this.state = 1089;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 84, this._ctx);
				}
				this.state = 1090;
				this.match(kacoParser.GreaterThan);
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 1091;
				this.match(kacoParser.OpenBrace);
				this.state = 1095;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 85, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 1092;
						this.sqlTemplateExpr();
						}
						}
					}
					this.state = 1097;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 85, this._ctx);
				}
				this.state = 1098;
				this.match(kacoParser.CloseBrace);
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 1099;
				this.match(kacoParser.OpenBracket);
				this.state = 1103;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 86, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 1100;
						this.sqlTemplateExpr();
						}
						}
					}
					this.state = 1105;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 86, this._ctx);
				}
				this.state = 1106;
				this.match(kacoParser.CloseBracket);
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 1107;
				this.match(kacoParser.OpenParen);
				this.state = 1111;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 87, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 1108;
						this.sqlTemplateExpr();
						}
						}
					}
					this.state = 1113;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 87, this._ctx);
				}
				this.state = 1114;
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
	public sqlStatement(): SqlStatementContext {
		let _localctx: SqlStatementContext = new SqlStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 188, kacoParser.RULE_sqlStatement);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1117;
			this.match(kacoParser.OpenParen);
			this.state = 1121;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 89, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					{
					this.state = 1118;
					this.sqlTemplateExpr();
					}
					}
				}
				this.state = 1123;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 89, this._ctx);
			}
			this.state = 1124;
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
	public sqlQuoteStatement(): SqlQuoteStatementContext {
		let _localctx: SqlQuoteStatementContext = new SqlQuoteStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 190, kacoParser.RULE_sqlQuoteStatement);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1126;
			this.match(kacoParser.OpenBracket);
			this.state = 1127;
			this.match(kacoParser.Sql);
			this.state = 1131;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 90, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					{
					this.state = 1128;
					this.sqlTemplateExpr();
					}
					}
				}
				this.state = 1133;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 90, this._ctx);
			}
			this.state = 1134;
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

	private static readonly _serializedATNSegments: number = 3;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03q\u0473\x04\x02" +
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
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04" +
		"X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t^\x04_\t_\x04`\t" +
		"`\x04a\ta\x03\x02\x06\x02\xC4\n\x02\r\x02\x0E\x02\xC5\x03\x02\x03\x02" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03\xD0\n\x03\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x05\x04\u0114\n\x04\x03\x05\x03\x05\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x07\x07\u0128\n\x07\f\x07\x0E" +
		"\x07\u012B\v\x07\x03\x07\x03\x07\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x05\t\u0137\n\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x07\t\u0148\n\t\f\t\x0E\t" +
		"\u014B\v\t\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x07\v\u0154\n\v\f" +
		"\v\x0E\v\u0157\v\v\x05\v\u0159\n\v\x03\v\x03\v\x03\f\x03\f\x03\f\x05\f" +
		"\u0160\n\f\x03\f\x03\f\x03\f\x05\f\u0165\n\f\x07\f\u0167\n\f\f\f\x0E\f" +
		"\u016A\v\f\x05\f\u016C\n\f\x03\f\x03\f\x03\r\x03\r\x05\r\u0172\n\r\x03" +
		"\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u017B\n\x0E\x03" +
		"\x0E\x05\x0E\u017E\n\x0E\x03\x0E\x05\x0E\u0181\n\x0E\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x10\x03\x10\x03\x10\x05\x10\u0189\n\x10\x03\x10\x03\x10\x03\x11" +
		"\x03\x11\x03\x11\x05\x11\u0190\n\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03" +
		"\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03" +
		"\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x15\x03" +
		"\x15\x03\x15\x03\x15\x03\x15\x05\x15\u01AC\n\x15\x03\x15\x05\x15\u01AF" +
		"\n\x15\x03\x15\x05\x15\u01B2\n\x15\x03\x16\x03\x16\x03\x16\x03\x16\x05" +
		"\x16\u01B8\n\x16\x03\x16\x05\x16\u01BB\n\x16\x03\x17\x03\x17\x03\x17\x03" +
		"\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x05\x18\u01C6\n\x18\x03\x18" +
		"\x03\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x05\x19\u01D0" +
		"\n\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B" +
		"\x03\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D" +
		"\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1F" +
		"\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03" +
		"!\x03!\x03!\x03!\x03!\x03!\x03!\x03\"\x03\"\x03\"\x03#\x03#\x03#\x03#" +
		"\x03#\x05#\u0206\n#\x03#\x03#\x03#\x03#\x03#\x03#\x03$\x03$\x03$\x03$" +
		"\x03$\x05$\u0213\n$\x03$\x03$\x03%\x03%\x03%\x03%\x03%\x05%\u021C\n%\x03" +
		"%\x03%\x03%\x05%\u0221\n%\x03%\x03%\x03&\x03&\x03&\x03&\x03&\x03&\x05" +
		"&\u022B\n&\x03&\x03&\x03&\x05&\u0230\n&\x03&\x03&\x03\'\x03\'\x03\'\x03" +
		"\'\x03\'\x03\'\x05\'\u023A\n\'\x06\'\u023C\n\'\r\'\x0E\'\u023D\x03\'\x03" +
		"\'\x03(\x03(\x03(\x03(\x03(\x05(\u0247\n(\x03(\x03(\x03)\x03)\x03)\x03" +
		")\x03)\x05)\u0250\n)\x03)\x03)\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x03" +
		"+\x03+\x03+\x03+\x03+\x03+\x03+\x07+\u0262\n+\f+\x0E+\u0265\v+\x05+\u0267" +
		"\n+\x03+\x03+\x03,\x03,\x03,\x03,\x03,\x03-\x03-\x03-\x03-\x03-\x03.\x03" +
		".\x03.\x03.\x03.\x05.\u027A\n.\x03.\x03.\x03/\x03/\x03/\x03/\x03/\x03" +
		"0\x030\x030\x030\x030\x030\x050\u0289\n0\x030\x030\x031\x031\x031\x05" +
		"1\u0290\n1\x031\x031\x051\u0294\n1\x031\x031\x032\x032\x032\x032\x033" +
		"\x033\x033\x033\x033\x033\x053\u02A2\n3\x033\x033\x034\x034\x034\x034" +
		"\x034\x034\x054\u02AC\n4\x034\x034\x035\x035\x035\x035\x035\x035\x055" +
		"\u02B6\n5\x035\x035\x036\x036\x036\x036\x036\x036\x056\u02C0\n6\x036\x03" +
		"6\x037\x037\x037\x037\x038\x038\x038\x058\u02CB\n8\x038\x038\x039\x03" +
		"9\x039\x059\u02D2\n9\x039\x039\x03:\x03:\x03:\x03:\x03:\x03:\x05:\u02DC" +
		"\n:\x03:\x03:\x03;\x03;\x03;\x03;\x03;\x03;\x05;\u02E6\n;\x03;\x03;\x03" +
		"<\x03<\x03<\x03<\x03=\x03=\x03=\x05=\u02F1\n=\x03=\x03=\x03>\x03>\x03" +
		">\x03>\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03" +
		"?\x05?\u0306\n?\x03?\x03?\x03@\x03@\x03@\x03@\x03@\x03A\x03A\x03A\x03" +
		"A\x03A\x03A\x03A\x03B\x03B\x03B\x03B\x03B\x03B\x03B\x03C\x03C\x03C\x03" +
		"C\x03C\x03C\x03C\x03C\x03C\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03" +
		"D\x03D\x03D\x03D\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03F\x03F\x03F\x03" +
		"F\x03F\x03F\x05F\u033F\nF\x03F\x03F\x03G\x03G\x03G\x03G\x03H\x03H\x03" +
		"H\x03H\x03H\x03H\x03H\x05H\u034E\nH\x03H\x03H\x07H\u0352\nH\fH\x0EH\u0355" +
		"\vH\x03H\x05H\u0358\nH\x03I\x03I\x03I\x03I\x03J\x03J\x03J\x03J\x05J\u0362" +
		"\nJ\x03J\x03J\x03J\x03K\x03K\x03K\x03L\x03L\x03L\x03L\x03L\x03L\x05L\u0370" +
		"\nL\x03M\x03M\x03M\x03M\x03M\x03N\x03N\x03N\x03N\x03N\x03N\x03N\x03O\x03" +
		"O\x03O\x03O\x03O\x07O\u0383\nO\fO\x0EO\u0386\vO\x05O\u0388\nO\x03O\x03" +
		"O\x03P\x03P\x03Q\x03Q\x03Q\x07Q\u0391\nQ\fQ\x0EQ\u0394\vQ\x03R\x03R\x03" +
		"R\x07R\u0399\nR\fR\x0ER\u039C\vR\x03S\x03S\x03S\x07S\u03A1\nS\fS\x0ES" +
		"\u03A4\vS\x03T\x03T\x03T\x07T\u03A9\nT\fT\x0ET\u03AC\vT\x03U\x03U\x03" +
		"V\x03V\x03V\x05V\u03B3\nV\x03V\x03V\x03V\x03V\x05V\u03B9\nV\x03V\x03V" +
		"\x03V\x05V\u03BE\nV\x03V\x03V\x03V\x03V\x05V\u03C4\nV\x03W\x03W\x03W\x03" +
		"W\x03X\x03X\x03X\x03X\x03X\x05X\u03CF\nX\x03X\x03X\x07X\u03D3\nX\fX\x0E" +
		"X\u03D6\vX\x03X\x03X\x03X\x05X\u03DB\nX\x03X\x05X\u03DE\nX\x03Y\x03Y\x03" +
		"Y\x03Y\x03Z\x03Z\x03Z\x03Z\x05Z\u03E8\nZ\x03Z\x03Z\x07Z\u03EC\nZ\fZ\x0E" +
		"Z\u03EF\vZ\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x05Z\u03F7\nZ\x03Z\x03Z\x03Z" +
		"\x05Z\u03FC\nZ\x03Z\x05Z\u03FF\nZ\x03Z\x03Z\x03[\x03[\x03[\x03[\x03\\" +
		"\x03\\\x03\\\x03\\\x03\\\x03]\x03]\x03]\x03]\x03]\x03]\x03]\x03]\x05]" +
		"\u0414\n]\x03^\x05^\u0417\n^\x03^\x03^\x03_\x03_\x03_\x03_\x03_\x03_\x03" +
		"_\x03_\x03_\x07_\u0424\n_\f_\x0E_\u0427\v_\x03_\x03_\x07_\u042B\n_\f_" +
		"\x0E_\u042E\v_\x03_\x03_\x07_\u0432\n_\f_\x0E_\u0435\v_\x03_\x03_\x07" +
		"_\u0439\n_\f_\x0E_\u043C\v_\x03_\x03_\x07_\u0440\n_\f_\x0E_\u0443\v_\x03" +
		"_\x03_\x03_\x07_\u0448\n_\f_\x0E_\u044B\v_\x03_\x03_\x03_\x07_\u0450\n" +
		"_\f_\x0E_\u0453\v_\x03_\x03_\x03_\x07_\u0458\n_\f_\x0E_\u045B\v_\x03_" +
		"\x05_\u045E\n_\x03`\x03`\x07`\u0462\n`\f`\x0E`\u0465\v`\x03`\x03`\x03" +
		"a\x03a\x03a\x07a\u046C\na\fa\x0Ea\u046F\va\x03a\x03a\x03a\f\u0425\u042C" +
		"\u0433\u043A\u0441\u0449\u0451\u0459\u0463\u046D\x02\x03\x10b\x02\x02" +
		"\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16" +
		"\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02" +
		".\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02" +
		"J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02" +
		"f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80" +
		"\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92" +
		"\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4" +
		"\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02\xAE\x02\xB0\x02\xB2\x02\xB4\x02\xB6" +
		"\x02\xB8\x02\xBA\x02\xBC\x02\xBE\x02\xC0\x02\x02\b\x03\x02\x14\x17\x03" +
		"\x02\v\f\x03\x02\x12\x13\x05\x02bbggjj\x03\x02fg\x04\x02bbjj\x02\u04CB" +
		"\x02\xC3\x03\x02\x02\x02\x04\xCF\x03\x02\x02\x02\x06\u0113\x03\x02\x02" +
		"\x02\b\u0115\x03\x02\x02\x02\n\u011B\x03\x02\x02\x02\f\u0121\x03\x02\x02" +
		"\x02\x0E\u012E\x03\x02\x02\x02\x10\u0136\x03\x02\x02\x02\x12\u014C\x03" +
		"\x02\x02\x02\x14\u014F\x03\x02\x02\x02\x16\u015C\x03\x02\x02\x02\x18\u016F" +
		"\x03\x02\x02\x02\x1A\u0175\x03\x02\x02\x02\x1C\u0182\x03\x02\x02\x02\x1E" +
		"\u0185\x03\x02\x02\x02 \u018C\x03\x02\x02\x02\"\u0193\x03\x02\x02\x02" +
		"$\u019A\x03\x02\x02\x02&\u019F\x03\x02\x02\x02(\u01A6\x03\x02\x02\x02" +
		"*\u01B3\x03\x02\x02\x02,\u01BC\x03\x02\x02\x02.\u01BF\x03\x02\x02\x02" +
		"0\u01C9\x03\x02\x02\x022\u01D3\x03\x02\x02\x024\u01D6\x03\x02\x02\x02" +
		"6\u01D9\x03\x02\x02\x028\u01DC\x03\x02\x02\x02:\u01E3\x03\x02\x02\x02" +
		"<\u01EA\x03\x02\x02\x02>\u01EF\x03\x02\x02\x02@\u01F6\x03\x02\x02\x02" +
		"B\u01FD\x03\x02\x02\x02D\u0200\x03\x02\x02\x02F\u020D\x03\x02\x02\x02" +
		"H\u0216\x03\x02\x02\x02J\u0224\x03\x02\x02\x02L\u0233\x03\x02\x02\x02" +
		"N\u0241\x03\x02\x02\x02P\u024A\x03\x02\x02\x02R\u0253\x03\x02\x02\x02" +
		"T\u025A\x03\x02\x02\x02V\u026A\x03\x02\x02\x02X\u026F\x03\x02\x02\x02" +
		"Z\u0274\x03\x02\x02\x02\\\u027D\x03\x02\x02\x02^\u0282\x03\x02\x02\x02" +
		"`\u028C\x03\x02\x02\x02b\u0297\x03\x02\x02\x02d\u029B\x03\x02\x02\x02" +
		"f\u02A5\x03\x02\x02\x02h\u02AF\x03\x02\x02\x02j\u02B9\x03\x02\x02\x02" +
		"l\u02C3\x03\x02\x02\x02n\u02C7\x03\x02\x02\x02p\u02CE\x03\x02\x02\x02" +
		"r\u02D5\x03\x02\x02\x02t\u02DF\x03\x02\x02\x02v\u02E9\x03\x02\x02\x02" +
		"x\u02ED\x03\x02\x02\x02z\u02F4\x03\x02\x02\x02|\u02F8\x03\x02\x02\x02" +
		"~\u0309\x03\x02\x02\x02\x80\u030E\x03\x02\x02\x02\x82\u0315\x03\x02\x02" +
		"\x02\x84\u031C\x03\x02\x02\x02\x86\u0325\x03\x02\x02\x02\x88\u0331\x03" +
		"\x02\x02\x02\x8A\u0338\x03\x02\x02\x02\x8C\u0342\x03\x02\x02\x02\x8E\u0346" +
		"\x03\x02\x02\x02\x90\u0359\x03\x02\x02\x02\x92\u035D\x03\x02\x02\x02\x94" +
		"\u0366\x03\x02\x02\x02\x96\u0369\x03\x02\x02\x02\x98\u0371\x03\x02\x02" +
		"\x02\x9A\u0376\x03\x02\x02\x02\x9C\u037D\x03\x02\x02\x02\x9E\u038B\x03" +
		"\x02\x02\x02\xA0\u038D\x03\x02\x02\x02\xA2\u0395\x03\x02\x02\x02\xA4\u039D" +
		"\x03\x02\x02\x02\xA6\u03A5\x03\x02\x02\x02\xA8\u03AD\x03\x02\x02\x02\xAA" +
		"\u03C3\x03\x02\x02\x02\xAC\u03C5\x03\x02\x02\x02\xAE\u03DD\x03\x02\x02" +
		"\x02\xB0\u03DF\x03\x02\x02\x02\xB2\u03E3\x03\x02\x02\x02\xB4\u0402\x03" +
		"\x02\x02\x02\xB6\u0406\x03\x02\x02\x02\xB8\u0413\x03\x02\x02\x02\xBA\u0416" +
		"\x03\x02\x02\x02\xBC\u045D\x03\x02\x02\x02\xBE\u045F\x03\x02\x02\x02\xC0" +
		"\u0468\x03\x02\x02\x02\xC2\xC4\x05\x04\x03\x02\xC3\xC2\x03\x02\x02\x02" +
		"\xC4\xC5\x03\x02\x02\x02\xC5\xC3\x03\x02\x02\x02\xC5\xC6\x03\x02\x02\x02" +
		"\xC6\xC7\x03\x02\x02\x02\xC7\xC8\x07\x02\x02\x03\xC8\x03\x03\x02\x02\x02" +
		"\xC9\xD0\x05\b\x05\x02\xCA\xD0\x05\n\x06\x02\xCB\xD0\x05\x12\n\x02\xCC" +
		"\xCD\x05\x06\x04\x02\xCD\xCE\x07\t\x02\x02\xCE\xD0\x03\x02\x02\x02\xCF" +
		"\xC9\x03\x02\x02\x02\xCF\xCA\x03\x02\x02\x02\xCF\xCB\x03\x02\x02\x02\xCF" +
		"\xCC\x03\x02\x02\x02\xD0\x05\x03\x02\x02\x02\xD1\u0114\x05\x1A\x0E\x02" +
		"\xD2\u0114\x05\x1C\x0F\x02\xD3\u0114\x05\x1E\x10\x02\xD4\u0114\x05 \x11" +
		"\x02\xD5\u0114\x05\"\x12\x02\xD6\u0114\x05$\x13\x02\xD7\u0114\x05&\x14" +
		"\x02\xD8\u0114\x05(\x15\x02\xD9\u0114\x05*\x16\x02\xDA\u0114\x05,\x17" +
		"\x02\xDB\u0114\x05.\x18\x02\xDC\u0114\x050\x19\x02\xDD\u0114\x052\x1A" +
		"\x02\xDE\u0114\x054\x1B\x02\xDF\u0114\x056\x1C\x02\xE0\u0114\x058\x1D" +
		"\x02\xE1\u0114\x05:\x1E\x02\xE2\u0114\x05<\x1F\x02\xE3\u0114\x05> \x02" +
		"\xE4\u0114\x05@!\x02\xE5\u0114\x05B\"\x02\xE6\u0114\x05D#\x02\xE7\u0114" +
		"\x05F$\x02\xE8\u0114\x05H%\x02\xE9\u0114\x05J&\x02\xEA\u0114\x05L\'\x02" +
		"\xEB\u0114\x05N(\x02\xEC\u0114\x05P)\x02\xED\u0114\x05R*\x02\xEE\u0114" +
		"\x05T+\x02\xEF\u0114\x05V,\x02\xF0\u0114\x05X-\x02\xF1\u0114\x05Z.\x02" +
		"\xF2\u0114\x05\\/\x02\xF3\u0114\x05^0\x02\xF4\u0114\x05`1\x02\xF5\u0114" +
		"\x05b2\x02\xF6\u0114\x05d3\x02\xF7\u0114\x05f4\x02\xF8\u0114\x05h5\x02" +
		"\xF9\u0114\x05j6\x02\xFA\u0114\x05l7\x02\xFB\u0114\x05n8\x02\xFC\u0114" +
		"\x05p9\x02\xFD\u0114\x05r:\x02\xFE\u0114\x05t;\x02\xFF\u0114\x05v<\x02" +
		"\u0100\u0114\x05x=\x02\u0101\u0114\x05z>\x02\u0102\u0114\x05|?\x02\u0103" +
		"\u0114\x05~@\x02\u0104\u0114\x05\x80A\x02\u0105\u0114\x05\x82B\x02\u0106" +
		"\u0114\x05\x84C\x02\u0107\u0114\x05\x86D\x02\u0108\u0114\x05\x88E\x02" +
		"\u0109\u0114\x05\x8AF\x02\u010A\u0114\x05\x8CG\x02\u010B\u0114\x05\x8E" +
		"H\x02\u010C\u0114\x05\x90I\x02\u010D\u0114\x05\x92J\x02\u010E\u0114\x05" +
		"\x94K\x02\u010F\u0114\x05\x96L\x02\u0110\u0114\x05\x98M\x02\u0111\u0114" +
		"\x05\x9AN\x02\u0112\u0114\x05\x9CO\x02\u0113\xD1\x03\x02\x02\x02\u0113" +
		"\xD2\x03\x02\x02\x02\u0113\xD3\x03\x02\x02\x02\u0113\xD4\x03\x02\x02\x02" +
		"\u0113\xD5\x03\x02\x02\x02\u0113\xD6\x03\x02\x02\x02\u0113\xD7\x03\x02" +
		"\x02\x02\u0113\xD8\x03\x02\x02\x02\u0113\xD9\x03\x02\x02\x02\u0113\xDA" +
		"\x03\x02\x02\x02\u0113\xDB\x03\x02\x02\x02\u0113\xDC\x03\x02\x02\x02\u0113" +
		"\xDD\x03\x02\x02\x02\u0113\xDE\x03\x02\x02\x02\u0113\xDF\x03\x02\x02\x02" +
		"\u0113\xE0\x03\x02\x02\x02\u0113\xE1\x03\x02\x02\x02\u0113\xE2\x03\x02" +
		"\x02\x02\u0113\xE3\x03\x02\x02\x02\u0113\xE4\x03\x02\x02\x02\u0113\xE5" +
		"\x03\x02\x02\x02\u0113\xE6\x03\x02\x02\x02\u0113\xE7\x03\x02\x02\x02\u0113" +
		"\xE8\x03\x02\x02\x02\u0113\xE9\x03\x02\x02\x02\u0113\xEA\x03\x02\x02\x02" +
		"\u0113\xEB\x03\x02\x02\x02\u0113\xEC\x03\x02\x02\x02\u0113\xED\x03\x02" +
		"\x02\x02\u0113\xEE\x03\x02\x02\x02\u0113\xEF\x03\x02\x02\x02\u0113\xF0" +
		"\x03\x02\x02\x02\u0113\xF1\x03\x02\x02\x02\u0113\xF2\x03\x02\x02\x02\u0113" +
		"\xF3\x03\x02\x02\x02\u0113\xF4\x03\x02\x02\x02\u0113\xF5\x03\x02\x02\x02" +
		"\u0113\xF6\x03\x02\x02\x02\u0113\xF7\x03\x02\x02\x02\u0113\xF8\x03\x02" +
		"\x02\x02\u0113\xF9\x03\x02\x02\x02\u0113\xFA\x03\x02\x02\x02\u0113\xFB" +
		"\x03\x02\x02\x02\u0113\xFC\x03\x02\x02\x02\u0113\xFD\x03\x02\x02\x02\u0113" +
		"\xFE\x03\x02\x02\x02\u0113\xFF\x03\x02\x02\x02\u0113\u0100\x03\x02\x02" +
		"\x02\u0113\u0101\x03\x02\x02\x02\u0113\u0102\x03\x02\x02\x02\u0113\u0103" +
		"\x03\x02\x02\x02\u0113\u0104\x03\x02\x02\x02\u0113\u0105\x03\x02\x02\x02" +
		"\u0113\u0106\x03\x02\x02\x02\u0113\u0107\x03\x02\x02\x02\u0113\u0108\x03" +
		"\x02\x02\x02\u0113\u0109\x03\x02\x02\x02\u0113\u010A\x03\x02\x02\x02\u0113" +
		"\u010B\x03\x02\x02\x02\u0113\u010C\x03\x02\x02\x02\u0113\u010D\x03\x02" +
		"\x02\x02\u0113\u010E\x03\x02\x02\x02\u0113\u010F\x03\x02\x02\x02\u0113" +
		"\u0110\x03\x02\x02\x02\u0113\u0111\x03\x02\x02\x02\u0113\u0112\x03\x02" +
		"\x02\x02\u0114\x07\x03\x02\x02\x02\u0115\u0116\x07^\x02\x02\u0116\u0117" +
		"\x07\x05\x02\x02\u0117\u0118\x05\x0E\b\x02\u0118\u0119\x07\x06\x02\x02" +
		"\u0119\u011A\x05\f\x07\x02\u011A\t\x03\x02\x02\x02\u011B\u011C\x07_\x02" +
		"\x02\u011C\u011D\x07\x05\x02\x02\u011D\u011E\x05\xB2Z\x02\u011E\u011F" +
		"\x07\x06\x02\x02\u011F\u0120\x05\f\x07\x02\u0120\v\x03\x02\x02\x02\u0121" +
		"\u0129\x07\x07\x02\x02\u0122\u0123\x05\x06\x04\x02\u0123\u0124\x07\t\x02" +
		"\x02\u0124\u0128\x03\x02\x02\x02\u0125\u0128\x05\n\x06\x02\u0126\u0128" +
		"\x05\x12\n\x02\u0127\u0122\x03\x02\x02\x02\u0127\u0125\x03\x02\x02\x02" +
		"\u0127\u0126\x03\x02\x02\x02\u0128\u012B\x03\x02\x02\x02\u0129\u0127\x03" +
		"\x02\x02\x02\u0129\u012A\x03\x02\x02\x02\u012A\u012C\x03\x02\x02\x02\u012B" +
		"\u0129\x03\x02\x02\x02\u012C\u012D\x07\b\x02\x02\u012D\r\x03\x02\x02\x02" +
		"\u012E\u012F\x05\x10\t\x02\u012F\x0F\x03\x02\x02\x02\u0130\u0131\b\t\x01" +
		"\x02\u0131\u0137\x05\xB8]\x02\u0132\u0133\x07\x05\x02\x02\u0133\u0134" +
		"\x05\x0E\b\x02\u0134\u0135\x07\x06\x02\x02\u0135\u0137\x03\x02\x02\x02" +
		"\u0136\u0130\x03\x02\x02\x02\u0136\u0132\x03\x02\x02\x02\u0137\u0149\x03" +
		"\x02\x02\x02\u0138\u0139\f\b\x02\x02\u0139\u013A\t\x02\x02\x02\u013A\u0148" +
		"\x05\x10\t\t\u013B\u013C\f\x07\x02\x02\u013C\u013D\t\x03\x02\x02\u013D" +
		"\u0148\x05\x10\t\b\u013E\u013F\f\x06\x02\x02\u013F\u0140\t\x04\x02\x02" +
		"\u0140\u0148\x05\x10\t\x07\u0141\u0142\f\x05\x02\x02\u0142\u0143\x07\x18" +
		"\x02\x02\u0143\u0148\x05\x10\t\x06\u0144\u0145\f\x04\x02\x02\u0145\u0146" +
		"\x07\x19\x02\x02\u0146\u0148\x05\x10\t\x05\u0147\u0138\x03\x02\x02\x02" +
		"\u0147\u013B\x03\x02\x02\x02\u0147\u013E\x03\x02\x02\x02\u0147\u0141\x03" +
		"\x02\x02\x02\u0147\u0144\x03\x02\x02\x02\u0148\u014B\x03\x02\x02\x02\u0149" +
		"\u0147\x03\x02\x02\x02\u0149\u014A\x03\x02\x02\x02\u014A\x11\x03\x02\x02" +
		"\x02\u014B\u0149\x03\x02\x02\x02\u014C\u014D\x05\xACW\x02\u014D\u014E" +
		"\x07\t\x02\x02\u014E\x13\x03\x02\x02\x02\u014F\u0158\x07\x05\x02\x02\u0150" +
		"\u0155\x05\xB8]\x02\u0151\u0152\x07\n\x02\x02\u0152\u0154\x05\xB8]\x02" +
		"\u0153\u0151\x03\x02\x02\x02\u0154\u0157\x03\x02\x02\x02\u0155\u0153\x03" +
		"\x02\x02\x02\u0155\u0156\x03\x02\x02\x02\u0156\u0159\x03\x02\x02\x02\u0157" +
		"\u0155\x03\x02\x02\x02\u0158\u0150\x03\x02\x02\x02\u0158\u0159\x03\x02" +
		"\x02\x02\u0159\u015A\x03\x02\x02\x02\u015A\u015B\x07\x06\x02\x02\u015B" +
		"\x15\x03\x02\x02\x02\u015C\u016B\x07\x05\x02\x02\u015D\u0160\x05\xB8]" +
		"\x02\u015E\u0160\x07a\x02\x02\u015F\u015D\x03\x02\x02\x02\u015F\u015E" +
		"\x03\x02\x02\x02\u0160\u0168\x03\x02\x02\x02\u0161\u0164\x07\n\x02\x02" +
		"\u0162\u0165\x05\xB8]\x02\u0163\u0165\x07a\x02\x02\u0164\u0162\x03\x02" +
		"\x02\x02\u0164\u0163\x03\x02\x02\x02\u0165\u0167\x03\x02\x02\x02\u0166" +
		"\u0161\x03\x02\x02\x02\u0167\u016A\x03\x02\x02\x02\u0168\u0166\x03\x02" +
		"\x02\x02\u0168\u0169\x03\x02\x02\x02\u0169\u016C\x03\x02\x02\x02\u016A" +
		"\u0168\x03\x02\x02\x02\u016B\u015F\x03\x02\x02\x02\u016B\u016C\x03\x02" +
		"\x02\x02\u016C\u016D\x03\x02\x02\x02\u016D\u016E\x07\x06\x02\x02\u016E" +
		"\x17\x03\x02\x02\x02\u016F\u0171\x07\x05\x02\x02\u0170\u0172\x07b\x02" +
		"\x02\u0171\u0170\x03\x02\x02\x02\u0171\u0172\x03\x02\x02\x02\u0172\u0173" +
		"\x03\x02\x02\x02\u0173\u0174\x07\x06\x02\x02\u0174\x19\x03\x02\x02\x02" +
		"\u0175\u0176\x07\x1C\x02\x02\u0176\u0177\x07\x03\x02\x02\u0177\u0178\t" +
		"\x05\x02\x02\u0178\u017A\x07\x04\x02\x02\u0179\u017B\x05\x14\v\x02\u017A" +
		"\u0179\x03\x02\x02\x02\u017A\u017B\x03\x02\x02\x02\u017B\u017D\x03\x02" +
		"\x02\x02\u017C\u017E\x05\x14\v\x02\u017D\u017C\x03\x02\x02\x02\u017D\u017E" +
		"\x03\x02\x02\x02\u017E\u0180\x03\x02\x02\x02\u017F\u0181\x05\x14\v\x02" +
		"\u0180\u017F\x03\x02\x02\x02\u0180\u0181\x03\x02\x02\x02\u0181\x1B\x03" +
		"\x02\x02\x02\u0182\u0183\x07\x1D\x02\x02\u0183\u0184\x05\x14\v\x02\u0184" +
		"\x1D\x03\x02\x02\x02\u0185\u0186\x07\x1E\x02\x02\u0186\u0188\x07\x05\x02" +
		"\x02\u0187\u0189\x07g\x02\x02\u0188\u0187\x03\x02\x02\x02\u0188\u0189" +
		"\x03\x02\x02\x02\u0189\u018A\x03\x02\x02\x02\u018A\u018B\x07\x06\x02\x02" +
		"\u018B\x1F\x03\x02\x02\x02\u018C\u018D\x07\x1F\x02\x02\u018D\u018F\x07" +
		"\x05\x02\x02\u018E\u0190\x07g\x02\x02\u018F\u018E\x03\x02\x02\x02\u018F" +
		"\u0190\x03\x02\x02\x02\u0190\u0191\x03\x02\x02\x02\u0191";
	private static readonly _serializedATNSegment1: string =
		"\u0192\x07\x06\x02\x02\u0192!\x03\x02\x02\x02\u0193\u0194\x07 \x02\x02" +
		"\u0194\u0195\x07\x05\x02\x02\u0195\u0196\x07d\x02\x02\u0196\u0197\x07" +
		"\n\x02\x02\u0197\u0198\x07g\x02\x02\u0198\u0199\x07\x06\x02\x02\u0199" +
		"#\x03\x02\x02\x02\u019A\u019B\x07!\x02\x02\u019B\u019C\x07\x05\x02\x02" +
		"\u019C\u019D\x05\xB0Y\x02\u019D\u019E\x07\x06\x02\x02\u019E%\x03\x02\x02" +
		"\x02\u019F\u01A0\x07\"\x02\x02\u01A0\u01A1\x07\x05\x02\x02\u01A1\u01A2" +
		"\x05\xB0Y\x02\u01A2\u01A3\x07\n\x02\x02\u01A3\u01A4\x05\xC0a\x02\u01A4" +
		"\u01A5\x07\x06\x02\x02\u01A5\'\x03\x02\x02\x02\u01A6\u01A7\x07#\x02\x02" +
		"\u01A7\u01A8\x05\xB0Y\x02\u01A8\u01A9\x07\n\x02\x02\u01A9\u01AB\x05\xB0" +
		"Y\x02\u01AA\u01AC\x05\x16\f\x02\u01AB\u01AA\x03\x02\x02\x02\u01AB\u01AC" +
		"\x03\x02\x02\x02\u01AC\u01AE\x03\x02\x02\x02\u01AD\u01AF\x05\x18\r\x02" +
		"\u01AE\u01AD\x03\x02\x02\x02\u01AE\u01AF\x03\x02\x02\x02\u01AF\u01B1\x03" +
		"\x02\x02\x02\u01B0\u01B2\x05\x18\r\x02\u01B1\u01B0\x03\x02\x02\x02\u01B1" +
		"\u01B2\x03\x02\x02\x02\u01B2)\x03\x02\x02\x02\u01B3\u01B4\x07$\x02\x02" +
		"\u01B4\u01BA\x05\xB0Y\x02\u01B5\u01B7\x07\x05\x02\x02\u01B6\u01B8\x05" +
		"\xB0Y\x02\u01B7\u01B6\x03\x02\x02\x02\u01B7\u01B8\x03\x02\x02\x02\u01B8" +
		"\u01B9\x03\x02\x02\x02\u01B9\u01BB\x07\x06\x02\x02\u01BA\u01B5\x03\x02" +
		"\x02\x02\u01BA\u01BB\x03\x02\x02\x02\u01BB+\x03\x02\x02\x02\u01BC\u01BD" +
		"\x07%\x02\x02\u01BD\u01BE\x05\xBE`\x02\u01BE-\x03\x02\x02\x02\u01BF\u01C0" +
		"\x07&\x02\x02\u01C0\u01C5\x07\x05\x02\x02\u01C1\u01C2\x05\xB0Y\x02\u01C2" +
		"\u01C3\x07\n\x02\x02\u01C3\u01C4\x07g\x02\x02\u01C4\u01C6\x03\x02\x02" +
		"\x02\u01C5\u01C1\x03\x02\x02\x02\u01C5\u01C6\x03\x02\x02\x02\u01C6\u01C7" +
		"\x03\x02\x02\x02\u01C7\u01C8\x07\x06\x02\x02\u01C8/\x03\x02\x02\x02\u01C9" +
		"\u01CA\x07\'\x02\x02\u01CA\u01CF\x07\x05\x02\x02\u01CB\u01CC\x05\xB0Y" +
		"\x02\u01CC\u01CD\x07\n\x02\x02\u01CD\u01CE\x07g\x02\x02\u01CE\u01D0\x03" +
		"\x02\x02\x02\u01CF\u01CB\x03\x02\x02\x02\u01CF\u01D0\x03\x02\x02\x02\u01D0" +
		"\u01D1\x03\x02\x02\x02\u01D1\u01D2\x07\x06\x02\x02\u01D21\x03\x02\x02" +
		"\x02\u01D3\u01D4\x07(\x02\x02\u01D4\u01D5\x05\x14\v\x02\u01D53\x03\x02" +
		"\x02\x02\u01D6\u01D7\x07)\x02\x02\u01D7\u01D8\x05\x14\v\x02\u01D85\x03" +
		"\x02\x02\x02\u01D9\u01DA\x07*\x02\x02\u01DA\u01DB\x05\x14\v\x02\u01DB" +
		"7\x03\x02\x02\x02\u01DC\u01DD\x07+\x02\x02\u01DD\u01DE\x07\x05\x02\x02" +
		"\u01DE\u01DF\x05\xB0Y\x02\u01DF\u01E0\x07\n\x02\x02\u01E0\u01E1\x07b\x02" +
		"\x02\u01E1\u01E2\x07\x06\x02\x02\u01E29\x03\x02\x02\x02\u01E3\u01E4\x07" +
		",\x02\x02\u01E4\u01E5\x07\x05\x02\x02\u01E5\u01E6\x05\xB0Y\x02\u01E6\u01E7" +
		"\x07\n\x02\x02\u01E7\u01E8\x07b\x02\x02\u01E8\u01E9\x07\x06\x02\x02\u01E9" +
		";\x03\x02\x02\x02\u01EA\u01EB\x07-\x02\x02\u01EB\u01EC\x07\x05\x02\x02" +
		"\u01EC\u01ED\x05\xB0Y\x02\u01ED\u01EE\x07\x06\x02\x02\u01EE=\x03\x02\x02" +
		"\x02\u01EF\u01F0\x07.\x02\x02\u01F0\u01F1\x07\x05\x02\x02\u01F1\u01F2" +
		"\x05\xB0Y\x02\u01F2\u01F3\x07\n\x02\x02\u01F3\u01F4\t\x06\x02\x02\u01F4" +
		"\u01F5\x07\x06\x02\x02\u01F5?\x03\x02\x02\x02\u01F6\u01F7\x07/\x02\x02" +
		"\u01F7\u01F8\x07\x05\x02\x02\u01F8\u01F9\x05\xB0Y\x02\u01F9\u01FA\x07" +
		"\n\x02\x02\u01FA\u01FB\x07b\x02\x02\u01FB\u01FC\x07\x06\x02\x02\u01FC" +
		"A\x03\x02\x02\x02\u01FD\u01FE\x070\x02\x02\u01FE\u01FF\x05\x14\v\x02\u01FF" +
		"C\x03\x02\x02\x02\u0200\u0201\x071\x02\x02\u0201\u0202\x05\xB0Y\x02\u0202" +
		"\u0205\x07\x05\x02\x02\u0203\u0206\x05\xB0Y\x02\u0204\u0206\x07g\x02\x02" +
		"\u0205\u0203\x03\x02\x02\x02\u0205\u0204\x03\x02\x02\x02\u0206\u0207\x03" +
		"\x02\x02\x02\u0207\u0208\x07\n\x02\x02\u0208\u0209\x07b\x02\x02\u0209" +
		"\u020A\x07\n\x02\x02\u020A\u020B\x07b\x02\x02\u020B\u020C\x07\x06\x02" +
		"\x02\u020CE\x03\x02\x02\x02\u020D\u020E\x072\x02\x02\u020E\u020F\x05\xB0" +
		"Y\x02\u020F\u0212\x07\x05\x02\x02\u0210\u0213\x05\xB0Y\x02\u0211\u0213" +
		"\x07g\x02\x02\u0212\u0210\x03\x02\x02\x02\u0212\u0211\x03\x02\x02\x02" +
		"\u0213\u0214\x03\x02\x02\x02\u0214\u0215\x07\x06\x02\x02\u0215G\x03\x02" +
		"\x02\x02\u0216\u0217\x073\x02\x02\u0217\u0218\x05\xB0Y\x02\u0218\u021B" +
		"\x07\x05\x02\x02\u0219\u021C\x07g\x02\x02\u021A\u021C\x05\xB0Y\x02\u021B" +
		"\u0219\x03\x02\x02\x02\u021B\u021A\x03\x02\x02\x02\u021C\u021D\x03\x02" +
		"\x02\x02\u021D\u0220\x07\n\x02\x02\u021E\u0221\x07g\x02\x02\u021F\u0221" +
		"\x05\xB0Y\x02\u0220\u021E\x03\x02\x02\x02\u0220\u021F\x03\x02\x02\x02" +
		"\u0221\u0222\x03\x02\x02\x02\u0222\u0223\x07\x06\x02\x02\u0223I\x03\x02" +
		"\x02\x02\u0224\u0225\x074\x02\x02\u0225\u0226\x07\x05\x02\x02\u0226\u0227" +
		"\x05\xB0Y\x02\u0227\u022A\x07\n\x02\x02\u0228\u022B\x07g\x02\x02\u0229" +
		"\u022B\x05\xB0Y\x02\u022A\u0228\x03\x02\x02\x02\u022A\u0229\x03\x02\x02" +
		"\x02\u022B\u022C\x03\x02\x02\x02\u022C\u022F\x07\n\x02\x02\u022D\u0230" +
		"\x07g\x02\x02\u022E\u0230\x05\xB0Y\x02\u022F\u022D\x03\x02\x02\x02\u022F" +
		"\u022E\x03\x02\x02\x02\u0230\u0231\x03\x02\x02\x02\u0231\u0232\x07\x06" +
		"\x02\x02\u0232K\x03\x02\x02\x02\u0233\u0234\x075\x02\x02\u0234\u0235\x07" +
		"\x05\x02\x02\u0235\u023B\x05\xB0Y\x02\u0236\u0239\x07\n\x02\x02\u0237" +
		"\u023A\x07g\x02\x02\u0238\u023A\x05\xB0Y\x02\u0239\u0237\x03\x02\x02\x02" +
		"\u0239\u0238\x03\x02\x02\x02\u023A\u023C\x03\x02\x02\x02\u023B\u0236\x03" +
		"\x02\x02\x02\u023C\u023D\x03\x02\x02\x02\u023D\u023B\x03\x02\x02\x02\u023D" +
		"\u023E\x03\x02\x02\x02\u023E\u023F\x03\x02\x02\x02\u023F\u0240\x07\x06" +
		"\x02\x02\u0240M\x03\x02\x02\x02\u0241\u0242\x076\x02\x02\u0242\u0243\x05" +
		"\xB0Y\x02\u0243\u0246\x07\x05\x02\x02\u0244\u0247\x07g\x02\x02\u0245\u0247" +
		"\x05\xB0Y\x02\u0246\u0244\x03\x02\x02\x02\u0246\u0245\x03\x02\x02\x02" +
		"\u0247\u0248\x03\x02\x02\x02\u0248\u0249\x07\x06\x02\x02\u0249O\x03\x02" +
		"\x02\x02\u024A\u024B\x077\x02\x02\u024B\u024C\x05\xB0Y\x02\u024C\u024F" +
		"\x07\x05\x02\x02\u024D\u0250\x07g\x02\x02\u024E\u0250\x05\xB0Y\x02\u024F" +
		"\u024D\x03\x02\x02\x02\u024F\u024E\x03\x02\x02\x02\u0250\u0251\x03\x02" +
		"\x02\x02\u0251\u0252\x07\x06\x02\x02\u0252Q\x03\x02\x02\x02\u0253\u0254" +
		"\x078\x02\x02\u0254\u0255\x07\x05\x02\x02\u0255\u0256\x05\xB0Y\x02\u0256" +
		"\u0257\x07\n\x02\x02\u0257\u0258\x05\xB2Z\x02\u0258\u0259\x07\x06\x02" +
		"\x02\u0259S\x03\x02\x02\x02\u025A\u025B\x079\x02\x02\u025B\u025C\x07\x05" +
		"\x02\x02\u025C\u0266\x05\xB2Z\x02\u025D\u025E\x07\n\x02\x02\u025E\u0267" +
		"\x05\xB2Z\x02\u025F\u0260\x07\n\x02\x02\u0260\u0262\x05\xB8]\x02\u0261" +
		"\u025F\x03\x02\x02\x02\u0262\u0265\x03\x02\x02\x02\u0263\u0261\x03\x02" +
		"\x02\x02\u0263\u0264\x03\x02\x02\x02\u0264\u0267\x03\x02\x02\x02\u0265" +
		"\u0263\x03\x02\x02\x02\u0266\u025D\x03\x02\x02\x02\u0266\u0263\x03\x02" +
		"\x02\x02\u0267\u0268\x03\x02\x02\x02\u0268\u0269\x07\x06\x02\x02\u0269" +
		"U\x03\x02\x02\x02\u026A\u026B\x07:\x02\x02\u026B\u026C\x07\x05\x02\x02" +
		"\u026C\u026D\x05\xB2Z\x02\u026D\u026E\x07\x06\x02\x02\u026EW\x03\x02\x02" +
		"\x02\u026F\u0270\x07;\x02\x02\u0270\u0271\x07\x05\x02\x02\u0271\u0272" +
		"\x05\xB2Z\x02\u0272\u0273\x07\x06\x02\x02\u0273Y\x03\x02\x02\x02\u0274" +
		"\u0275\x07<\x02\x02\u0275\u0276\x07\x05\x02\x02\u0276\u0279\x05\xB0Y\x02" +
		"\u0277\u0278\x07\n\x02\x02\u0278\u027A\x07b\x02\x02\u0279\u0277\x03\x02" +
		"\x02\x02\u0279\u027A\x03\x02\x02\x02\u027A\u027B\x03\x02\x02\x02\u027B" +
		"\u027C\x07\x06\x02\x02\u027C[\x03\x02\x02\x02\u027D\u027E\x07=\x02\x02" +
		"\u027E\u027F\x07\x05\x02\x02\u027F\u0280\x05\xB0Y\x02\u0280\u0281\x07" +
		"\x06\x02\x02\u0281]\x03\x02\x02\x02\u0282\u0283\x07>\x02\x02\u0283\u0288" +
		"\x07\x05\x02\x02\u0284\u0285\x05\xB2Z\x02\u0285\u0286\x07\n\x02\x02\u0286" +
		"\u0287\x05\xB2Z\x02\u0287\u0289\x03\x02\x02\x02\u0288\u0284\x03\x02\x02" +
		"\x02\u0288\u0289\x03\x02\x02\x02\u0289\u028A\x03\x02\x02\x02\u028A\u028B" +
		"\x07\x06\x02\x02\u028B_\x03\x02\x02\x02\u028C\u028D\x07?\x02\x02\u028D" +
		"\u028F\x07\x05\x02\x02\u028E\u0290\x05\xB8]\x02\u028F\u028E\x03\x02\x02" +
		"\x02\u028F\u0290\x03\x02\x02\x02\u0290\u0293\x03\x02\x02\x02\u0291\u0292" +
		"\x07\n\x02\x02\u0292\u0294\x05\xB8]\x02\u0293\u0291\x03\x02\x02\x02\u0293" +
		"\u0294\x03\x02\x02\x02\u0294\u0295\x03\x02\x02\x02\u0295\u0296\x07\x06" +
		"\x02\x02\u0296a\x03\x02\x02\x02\u0297\u0298\x07@\x02\x02\u0298\u0299\x07" +
		"\x05\x02\x02\u0299\u029A\x07\x06\x02\x02\u029Ac\x03\x02\x02\x02\u029B" +
		"\u029C\x07A\x02\x02\u029C\u02A1\x07\x05\x02\x02\u029D\u029E\x05\xB2Z\x02" +
		"\u029E\u029F\x07\n\x02\x02\u029F\u02A0\x05\xB2Z\x02\u02A0\u02A2\x03\x02" +
		"\x02\x02\u02A1\u029D\x03\x02\x02\x02\u02A1\u02A2\x03\x02\x02\x02\u02A2" +
		"\u02A3\x03\x02\x02\x02\u02A3\u02A4\x07\x06\x02\x02\u02A4e\x03\x02\x02" +
		"\x02\u02A5\u02A6\x07B\x02\x02\u02A6\u02AB\x07\x05\x02\x02\u02A7\u02A8" +
		"\x05\xB2Z\x02\u02A8\u02A9\x07\n\x02\x02\u02A9\u02AA\x05\xB2Z\x02\u02AA" +
		"\u02AC\x03\x02\x02\x02\u02AB\u02A7\x03\x02\x02\x02\u02AB\u02AC\x03\x02" +
		"\x02\x02\u02AC\u02AD\x03\x02\x02\x02\u02AD\u02AE\x07\x06\x02\x02\u02AE" +
		"g\x03\x02\x02\x02\u02AF\u02B0\x07C\x02\x02\u02B0\u02B5\x07\x05\x02\x02" +
		"\u02B1\u02B2\x05\xB2Z\x02\u02B2\u02B3\x07\n\x02\x02\u02B3\u02B4\x05\xB2" +
		"Z\x02\u02B4\u02B6\x03\x02\x02\x02\u02B5\u02B1\x03\x02\x02\x02\u02B5\u02B6" +
		"\x03\x02\x02\x02\u02B6\u02B7\x03\x02\x02\x02\u02B7\u02B8\x07\x06\x02\x02" +
		"\u02B8i\x03\x02\x02\x02\u02B9\u02BA\x07D\x02\x02\u02BA\u02BF\x07\x05\x02" +
		"\x02\u02BB\u02BC\x05\xB2Z\x02\u02BC\u02BD\x07\n\x02\x02\u02BD\u02BE\x05" +
		"\xB2Z\x02\u02BE\u02C0\x03\x02\x02\x02\u02BF\u02BB\x03\x02\x02\x02\u02BF" +
		"\u02C0\x03\x02\x02\x02\u02C0\u02C1\x03\x02\x02\x02\u02C1\u02C2\x07\x06" +
		"\x02\x02\u02C2k\x03\x02\x02\x02\u02C3\u02C4\x07E\x02\x02\u02C4\u02C5\x07" +
		"\x05\x02\x02\u02C5\u02C6\x07\x06\x02\x02\u02C6m\x03\x02\x02\x02\u02C7" +
		"\u02C8\x07F\x02\x02\u02C8\u02CA\x07\x05\x02\x02\u02C9\u02CB\x05\xB2Z\x02" +
		"\u02CA\u02C9\x03\x02\x02\x02\u02CA\u02CB\x03\x02\x02\x02\u02CB\u02CC\x03" +
		"\x02\x02\x02\u02CC\u02CD\x07\x06\x02\x02\u02CDo\x03\x02\x02\x02\u02CE" +
		"\u02CF\x07G\x02\x02\u02CF\u02D1\x07\x05\x02\x02\u02D0\u02D2\x05\xB2Z\x02" +
		"\u02D1\u02D0\x03\x02\x02\x02\u02D1\u02D2\x03\x02\x02\x02\u02D2\u02D3\x03" +
		"\x02\x02\x02\u02D3\u02D4\x07\x06\x02\x02\u02D4q\x03\x02\x02\x02\u02D5" +
		"\u02D6\x07H\x02\x02\u02D6\u02DB\x07\x05\x02\x02\u02D7\u02D8\x05\xB2Z\x02" +
		"\u02D8\u02D9\x07\n\x02\x02\u02D9\u02DA\x05\xB2Z\x02\u02DA\u02DC\x03\x02" +
		"\x02\x02\u02DB\u02D7\x03\x02\x02\x02\u02DB\u02DC\x03\x02\x02\x02\u02DC" +
		"\u02DD\x03\x02\x02\x02\u02DD\u02DE\x07\x06\x02\x02\u02DEs\x03\x02\x02" +
		"\x02\u02DF\u02E0\x07I\x02\x02\u02E0\u02E5\x07\x05\x02\x02\u02E1\u02E2" +
		"\x05\xB2Z\x02\u02E2\u02E3\x07\n\x02\x02\u02E3\u02E4\x05\xB2Z\x02\u02E4" +
		"\u02E6\x03\x02\x02\x02\u02E5\u02E1\x03\x02\x02\x02\u02E5\u02E6\x03\x02" +
		"\x02\x02\u02E6\u02E7\x03\x02\x02\x02\u02E7\u02E8\x07\x06\x02\x02\u02E8" +
		"u\x03\x02\x02\x02\u02E9\u02EA\x07J\x02\x02\u02EA\u02EB\x07\x05\x02\x02" +
		"\u02EB\u02EC\x07\x06\x02\x02\u02ECw\x03\x02\x02\x02\u02ED\u02EE\x07K\x02" +
		"\x02\u02EE\u02F0\x07\x05\x02\x02\u02EF\u02F1\x05\xB2Z\x02\u02F0\u02EF" +
		"\x03\x02\x02\x02\u02F0\u02F1\x03\x02\x02\x02\u02F1\u02F2\x03\x02\x02\x02" +
		"\u02F2\u02F3\x07\x06\x02\x02\u02F3y\x03\x02\x02\x02\u02F4\u02F5\x07L\x02" +
		"\x02\u02F5\u02F6\x07\x05\x02\x02\u02F6\u02F7\x07\x06\x02\x02\u02F7{\x03" +
		"\x02\x02\x02\u02F8\u02F9\x07M\x02\x02\u02F9\u02FA\x07\x05\x02\x02\u02FA" +
		"\u02FB\x05\xB8]\x02\u02FB\u02FC\x07\n\x02\x02\u02FC\u02FD\x05\xB8]\x02" +
		"\u02FD\u02FE\x07\n\x02\x02\u02FE\u02FF\x05\xB8]\x02\u02FF\u0300\x07\n" +
		"\x02\x02\u0300\u0301\x05\xB8]\x02\u0301\u0302\x07\n\x02\x02\u0302\u0305" +
		"\x05\xB8]\x02\u0303\u0304\x07\n\x02\x02\u0304\u0306\x05\xB8]\x02\u0305" +
		"\u0303\x03\x02\x02\x02\u0305\u0306\x03\x02\x02\x02\u0306\u0307\x03\x02" +
		"\x02\x02\u0307\u0308\x07\x06\x02\x02\u0308}\x03\x02\x02\x02\u0309\u030A" +
		"\x07N\x02\x02\u030A\u030B\x07\x05\x02\x02\u030B\u030C\x05\xB0Y\x02\u030C" +
		"\u030D\x07\x06\x02\x02\u030D\x7F\x03\x02\x02\x02\u030E\u030F\x07O\x02" +
		"\x02\u030F\u0310\x07\x05\x02\x02\u0310\u0311\x05\xB2Z\x02\u0311\u0312" +
		"\x07\n\x02\x02\u0312\u0313\x07b\x02\x02\u0313\u0314\x07\x06\x02\x02\u0314" +
		"\x81\x03\x02\x02\x02\u0315\u0316\x07P\x02\x02\u0316\u0317\x07\x05\x02" +
		"\x02\u0317\u0318\x05\xB8]\x02\u0318\u0319\x07\n\x02\x02\u0319\u031A\x07" +
		"g\x02\x02\u031A\u031B\x07\x06\x02\x02\u031B\x83\x03\x02\x02\x02\u031C" +
		"\u031D\x07Q\x02\x02\u031D\u031E\x07\x05\x02\x02\u031E\u031F\x05\xB2Z\x02" +
		"\u031F\u0320\x07\n\x02\x02\u0320\u0321\x05\xB2Z\x02\u0321\u0322\x07\n" +
		"\x02\x02\u0322\u0323\x05\xB8]\x02\u0323\u0324\x07\x06\x02\x02\u0324\x85" +
		"\x03\x02\x02\x02\u0325\u0326\x07R\x02\x02\u0326\u0327\x07\x05\x02\x02" +
		"\u0327\u0328\x07g\x02\x02\u0328\u0329\x07\n\x02\x02\u0329\u032A\x07g\x02" +
		"\x02\u032A\u032B\x07\x06\x02\x02\u032B\u032C\x07\x05\x02\x02\u032C\u032D" +
		"\x07g\x02\x02\u032D\u032E\x07\n\x02\x02\u032E\u032F\x05\xB0Y\x02\u032F" +
		"\u0330\x07\x06\x02\x02\u0330\x87\x03\x02\x02\x02\u0331\u0332\x07S\x02" +
		"\x02\u0332\u0333\x07\x05\x02\x02\u0333\u0334\x05\xB8]\x02\u0334\u0335" +
		"\x07\n\x02\x02\u0335\u0336\x05\xB8]\x02\u0336\u0337\x07\x06\x02\x02\u0337" +
		"\x89\x03\x02\x02\x02\u0338\u0339\x07T\x02\x02\u0339\u033E\x07\x05\x02" +
		"\x02\u033A\u033B\x05\xB8]\x02\u033B\u033C\x07\n\x02\x02\u033C\u033D\x05" +
		"\xB8]\x02\u033D\u033F\x03\x02\x02\x02\u033E\u033A\x03\x02\x02\x02\u033E" +
		"\u033F\x03\x02\x02\x02\u033F\u0340\x03\x02\x02\x02\u0340\u0341\x07\x06" +
		"\x02\x02\u0341\x8B\x03\x02\x02\x02\u0342\u0343\x07U\x02\x02\u0343\u0344" +
		"\x07\x05\x02\x02\u0344\u0345\x07\x06\x02\x02\u0345\x8D\x03\x02\x02\x02" +
		"\u0346\u0347\x07V\x02\x02\u0347\u0348\x05\xB0Y\x02\u0348\u0349\x07\x05" +
		"\x02\x02\u0349\u034A\x05\xB8]\x02\u034A\u0357\x07\x06\x02\x02\u034B\u034D" +
		"\x07\x05\x02\x02\u034C\u034E\x05\xB8]\x02\u034D\u034C\x03\x02\x02\x02" +
		"\u034D\u034E\x03\x02\x02\x02\u034E\u0353\x03\x02\x02\x02\u034F\u0350\x07" +
		"\n\x02\x02\u0350\u0352\x05\xB8]\x02\u0351\u034F\x03\x02\x02\x02\u0352" +
		"\u0355\x03\x02\x02\x02\u0353\u0351\x03\x02\x02\x02\u0353\u0354\x03\x02" +
		"\x02\x02\u0354\u0356\x03\x02\x02\x02\u0355\u0353\x03\x02\x02\x02\u0356" +
		"\u0358\x07\x06\x02\x02\u0357\u034B\x03\x02\x02\x02\u0357\u0358\x03\x02" +
		"\x02\x02\u0358\x8F\x03\x02\x02\x02\u0359\u035A\x07W\x02\x02\u035A\u035B" +
		"\x07\x05\x02\x02\u035B\u035C\x07\x06\x02\x02\u035C\x91\x03\x02\x02\x02" +
		"\u035D\u035E\x07X\x02\x02\u035E\u0361\x07\x05\x02\x02\u035F\u0360\x07" +
		"g\x02\x02\u0360\u0362\x07\n\x02\x02\u0361\u035F\x03\x02\x02\x02\u0361" +
		"\u0362\x03\x02\x02\x02\u0362\u0363\x03\x02\x02\x02\u0363\u0364\x05\x9E" +
		"P\x02\u0364\u0365\x07\x06\x02\x02\u0365\x93\x03\x02\x02\x02\u0366\u0367" +
		"\x07Y\x02\x02\u0367\u0368\x05\xB0Y\x02\u0368\x95\x03\x02\x02\x02\u0369" +
		"\u036A\x07Z\x02\x02\u036A\u036B\x05\xB0Y\x02\u036B\u036F\x05\x14\v\x02" +
		"\u036C\u036D\x07\x05\x02\x02\u036D\u036E\x07e\x02\x02\u036E\u0370\x07" +
		"\x06\x02\x02\u036F\u036C\x03\x02\x02\x02\u036F\u0370\x03\x02\x02\x02\u0370" +
		"\x97\x03\x02\x02\x02\u0371\u0372\x07[\x02\x02\u0372\u0373\x07\x05\x02" +
		"\x02\u0373\u0374\x05\xB8]\x02\u0374\u0375\x07\x06\x02\x02\u0375\x99\x03" +
		"\x02\x02\x02\u0376\u0377\x07\\\x02\x02\u0377\u0378\x07\x05\x02\x02\u0378" +
		"\u0379\x05\xB8]\x02\u0379\u037A\x07\n\x02\x02\u037A\u037B\x07g\x02\x02" +
		"\u037B\u037C\x07\x06\x02\x02\u037C\x9B\x03\x02\x02\x02\u037D\u037E\x07" +
		"o\x02\x02\u037E\u0387\x07\x05\x02\x02\u037F\u0384\x05\xB8]\x02\u0380\u0381" +
		"\x07\n\x02\x02\u0381\u0383\x05\xB8]\x02\u0382\u0380\x03\x02\x02\x02\u0383" +
		"\u0386\x03\x02\x02\x02\u0384\u0382\x03\x02\x02\x02\u0384\u0385\x03\x02" +
		"\x02\x02\u0385\u0388\x03\x02\x02\x02\u0386\u0384\x03\x02\x02\x02\u0387" +
		"\u037F\x03\x02\x02\x02\u0387\u0388\x03\x02\x02\x02\u0388\u0389\x03\x02" +
		"\x02\x02\u0389\u038A\x07\x06\x02\x02\u038A\x9D\x03\x02\x02\x02\u038B\u038C" +
		"\x05\xA0Q\x02\u038C\x9F\x03\x02\x02\x02\u038D\u0392\x05\xA2R\x02\u038E" +
		"\u038F\x07\f\x02\x02\u038F\u0391\x05\xA2R\x02\u0390\u038E\x03\x02\x02" +
		"\x02\u0391\u0394\x03\x02\x02\x02\u0392\u0390\x03\x02\x02\x02\u0392\u0393" +
		"\x03\x02\x02\x02\u0393\xA1\x03\x02\x02\x02\u0394\u0392\x03\x02\x02\x02" +
		"\u0395\u039A\x05\xA4S\x02\u0396\u0397\x07\v\x02\x02\u0397\u0399\x05\xA4" +
		"S\x02\u0398\u0396\x03\x02\x02\x02\u0399\u039C\x03\x02\x02\x02\u039A\u0398" +
		"\x03\x02\x02\x02\u039A\u039B\x03\x02\x02\x02\u039B\xA3\x03\x02\x02\x02" +
		"\u039C\u039A\x03\x02\x02\x02\u039D\u03A2\x05\xA6T\x02\u039E\u039F\x07" +
		"\x0E\x02\x02\u039F\u03A1\x05\xA6T\x02\u03A0\u039E\x03\x02\x02\x02\u03A1" +
		"\u03A4\x03\x02\x02\x02\u03A2\u03A0\x03\x02\x02\x02\u03A2\u03A3\x03\x02" +
		"\x02\x02\u03A3\xA5\x03\x02\x02\x02\u03A4\u03A2\x03\x02\x02\x02\u03A5\u03AA" +
		"\x05\xAAV\x02\u03A6\u03A7\x07\r\x02\x02\u03A7\u03A9\x05\xAAV\x02\u03A8" +
		"\u03A6\x03\x02\x02\x02\u03A9\u03AC\x03\x02\x02\x02\u03AA\u03A8\x03\x02" +
		"\x02\x02\u03AA\u03AB\x03\x02\x02\x02\u03AB\xA7\x03\x02\x02\x02\u03AC\u03AA" +
		"\x03\x02\x02\x02\u03AD\u03AE\x05R*\x02\u03AE\xA9\x03\x02\x02\x02\u03AF" +
		"\u03B3\x05\xB8]\x02\u03B0\u03B3\x05\xC0a\x02\u03B1\u03B3\x05\xA8U\x02" +
		"\u03B2\u03AF\x03\x02\x02\x02\u03B2\u03B0\x03\x02\x02\x02\u03B2\u03B1\x03" +
		"\x02\x02\x02\u03B3\u03B4\x03\x02\x02\x02\u03B4\u03B8\x05\x9EP\x02\u03B5" +
		"\u03B9\x05\xB8]\x02\u03B6\u03B9\x05\xC0a\x02\u03B7\u03B9\x05\xA8U\x02" +
		"\u03B8\u03B5\x03\x02\x02\x02\u03B8\u03B6\x03\x02\x02\x02\u03B8\u03B7\x03" +
		"\x02\x02\x02\u03B9\u03C4\x03\x02\x02\x02\u03BA\u03BE\x05\xB8]\x02\u03BB" +
		"\u03BE\x05\xC0a\x02\u03BC\u03BE\x05\xA8U\x02\u03BD\u03BA\x03\x02\x02\x02" +
		"\u03BD\u03BB\x03\x02\x02\x02\u03BD\u03BC\x03\x02\x02\x02\u03BE\u03C4\x03" +
		"\x02\x02\x02\u03BF\u03C0\x07\x05\x02\x02\u03C0\u03C1\x05\x9EP\x02\u03C1" +
		"\u03C2\x07\x06\x02\x02\u03C2\u03C4\x03\x02\x02\x02\u03C3\u03B2\x03\x02" +
		"\x02\x02\u03C3\u03BD\x03\x02\x02\x02\u03C3\u03BF\x03\x02\x02\x02\u03C4" +
		"\xAB\x03\x02\x02\x02\u03C5\u03C6\x05\xAEX\x02\u03C6\u03C7\x07\x0F\x02" +
		"\x02\u03C7\u03C8\x05\x9EP\x02\u03C8\xAD\x03\x02\x02\x02\u03C9\u03CF\x05" +
		"\xB0Y\x02\u03CA\u03CB\x05\xB0Y\x02\u03CB\u03CC\x07\x10\x02\x02\u03CC\u03CD" +
		"\x05\xB0Y\x02\u03CD\u03CF\x03\x02\x02\x02\u03CE\u03C9\x03\x02\x02\x02" +
		"\u03CE\u03CA\x03\x02\x02\x02\u03CF\u03D4\x03\x02\x02\x02\u03D0\u03D1\x07" +
		"\n\x02\x02\u03D1\u03D3\x05\xB0Y\x02\u03D2\u03D0\x03\x02\x02\x02\u03D3" +
		"\u03D6\x03\x02\x02\x02\u03D4\u03D2\x03\x02\x02\x02\u03D4\u03D5\x03\x02" +
		"\x02\x02\u03D5\u03DE\x03\x02\x02\x02\u03D6\u03D4\x03\x02\x02\x02\u03D7" +
		"\u03D8\x05\xB0Y\x02\u03D8\u03D9\x07\x10\x02\x02\u03D9\u03DB\x03\x02\x02" +
		"\x02\u03DA\u03D7\x03\x02\x02\x02\u03DA\u03DB\x03\x02\x02\x02\u03DB\u03DC" +
		"\x03\x02\x02\x02\u03DC\u03DE\x05\xB2Z\x02\u03DD\u03CE\x03\x02\x02\x02" +
		"\u03DD\u03DA\x03\x02\x02\x02\u03DE\xAF\x03\x02\x02\x02\u03DF\u03E0\x07" +
		"\x03\x02\x02\u03E0\u03E1\x07g\x02\x02\u03E1\u03E2\x07\x04\x02\x02\u03E2" +
		"\xB1\x03\x02\x02\x02\u03E3\u03E4\x07\x03\x02\x02\u03E4\u03E7\x07g\x02" +
		"\x02\u03E5\u03E6\x07\x10\x02\x02\u03E6\u03E8\x07g\x02\x02\u03E7\u03E5" +
		"\x03\x02\x02\x02\u03E7\u03E8\x03\x02\x02\x02\u03E8\u03ED\x03\x02\x02\x02" +
		"\u03E9\u03EA\x07\n\x02\x02\u03EA\u03EC\x07g\x02\x02\u03EB\u03E9\x03\x02" +
		"\x02\x02\u03EC\u03EF\x03\x02\x02\x02\u03ED\u03EB\x03\x02\x02\x02\u03ED" +
		"\u03EE\x03\x02\x02\x02\u03EE\u03FE\x03\x02\x02\x02\u03EF\u03ED\x03\x02" +
		"\x02\x02\u03F0\u03FB\x07\x05\x02\x02\u03F1\u03F2\x07]\x02\x02\u03F2\u03F6" +
		"\x07\x12\x02\x02\u03F3\u03F7\x05\xBA^\x02\u03F4\u03F7\x07\r\x02\x02\u03F5" +
		"\u03F7\x07b\x02\x02\u03F6\u03F3\x03\x02\x02\x02\u03F6\u03F4\x03\x02\x02" +
		"\x02\u03F6\u03F5\x03\x02\x02\x02\u03F7\u03FC\x03\x02\x02\x02\u03F8\u03F9" +
		"\x07g\x02\x02\u03F9\u03FA\x07\x12\x02\x02\u03FA\u03FC\x05\xB8]\x02\u03FB" +
		"\u03F1\x03\x02\x02\x02\u03FB\u03F8\x03\x02\x02\x02\u03FC\u03FD\x03\x02" +
		"\x02\x02\u03FD\u03FF\x07\x06\x02\x02\u03FE\u03F0\x03\x02\x02\x02\u03FE" +
		"\u03FF\x03\x02\x02\x02\u03FF\u0400\x03\x02\x02\x02\u0400\u0401\x07\x04" +
		"\x02\x02\u0401\xB3\x03\x02\x02\x02\u0402\u0403\x07\x03\x02\x02\u0403\u0404" +
		"\x07k\x02\x02\u0404\u0405\x07\x04\x02\x02\u0405\xB5\x03\x02\x02\x02\u0406" +
		"\u0407\x07\x03\x02\x02\u0407\u0408\x07\x1B\x02\x02\u0408\u0409\x07`\x02" +
		"\x02\u0409\u040A\x07\x04\x02\x02\u040A\xB7\x03\x02\x02\x02\u040B\u0414" +
		"\x05\xB0Y\x02\u040C\u0414\x05\xB2Z\x02\u040D\u0414\x05\xB4[\x02\u040E" +
		"\u0414\x05\xB6\\\x02\u040F\u0414\x05\xBA^\x02\u0410\u0414\x07h\x02\x02" +
		"\u0411\u0414\x07i\x02\x02\u0412\u0414\x07g\x02\x02\u0413\u040B\x03\x02" +
		"\x02\x02\u0413\u040C\x03\x02\x02\x02\u0413\u040D\x03\x02\x02\x02\u0413" +
		"\u040E\x03\x02\x02\x02\u0413\u040F\x03\x02\x02\x02\u0413\u0410\x03\x02" +
		"\x02\x02\u0413\u0411\x03\x02\x02\x02\u0413\u0412\x03\x02\x02\x02\u0414" +
		"\xB9\x03\x02\x02\x02\u0415\u0417\x07\f\x02\x02\u0416\u0415\x03\x02\x02" +
		"\x02\u0416\u0417\x03\x02\x02\x02\u0417\u0418\x03\x02\x02\x02\u0418\u0419" +
		"\t\x07\x02\x02\u0419\xBB\x03\x02\x02\x02\u041A\u045E\x05\xB8]\x02\u041B" +
		"\u045E\x07\r\x02\x02\u041C\u045E\x07o\x02\x02\u041D\u045E\x07\x0F\x02" +
		"\x02\u041E\u045E\x07\x10\x02\x02\u041F\u045E\x07\n\x02\x02\u0420\u045E" +
		"\x07`\x02\x02\u0421\u0425\x07\x14\x02\x02\u0422\u0424\x05\xBC_\x02\u0423" +
		"\u0422\x03\x02\x02\x02\u0424\u0427\x03\x02\x02\x02\u0425\u0426\x03\x02" +
		"\x02\x02\u0425\u0423\x03\x02\x02\x02\u0426\u045E\x03\x02\x02\x02\u0427" +
		"\u0425\x03\x02\x02\x02\u0428\u042C\x07\x16\x02\x02\u0429\u042B\x05\xBC" +
		"_\x02\u042A\u0429\x03\x02\x02\x02\u042B\u042E\x03\x02\x02\x02\u042C\u042D" +
		"\x03\x02\x02\x02\u042C\u042A\x03\x02\x02\x02\u042D\u045E\x03\x02\x02\x02" +
		"\u042E\u042C\x03\x02\x02\x02\u042F\u0433\x07\x15\x02\x02\u0430\u0432\x05" +
		"\xBC_\x02\u0431\u0430\x03\x02\x02\x02\u0432\u0435\x03\x02\x02\x02\u0433" +
		"\u0434\x03\x02\x02\x02\u0433\u0431\x03\x02\x02\x02\u0434\u045E\x03\x02" +
		"\x02\x02\u0435\u0433\x03\x02\x02\x02\u0436\u043A\x07\x17\x02\x02\u0437" +
		"\u0439\x05\xBC_\x02\u0438\u0437\x03\x02\x02\x02\u0439\u043C\x03\x02\x02" +
		"\x02\u043A\u043B\x03\x02\x02\x02\u043A\u0438\x03\x02\x02\x02\u043B\u045E" +
		"\x03\x02\x02\x02\u043C\u043A\x03\x02\x02\x02\u043D\u0441\x07\x14\x02\x02" +
		"\u043E\u0440\x05\xBC_\x02\u043F\u043E\x03\x02\x02\x02\u0440\u0443\x03" +
		"\x02\x02\x02\u0441\u0442\x03\x02\x02\x02\u0441\u043F\x03\x02\x02\x02\u0442" +
		"\u0444\x03\x02\x02\x02\u0443\u0441\x03\x02\x02\x02\u0444\u045E\x07\x15" +
		"\x02\x02\u0445\u0449\x07\x07\x02\x02\u0446\u0448\x05\xBC_\x02\u0447\u0446" +
		"\x03\x02\x02\x02\u0448\u044B\x03\x02\x02\x02\u0449\u044A\x03\x02\x02\x02" +
		"\u0449\u0447\x03\x02\x02\x02\u044A\u044C\x03\x02\x02\x02\u044B\u0449\x03" +
		"\x02\x02\x02\u044C\u045E\x07\b\x02\x02\u044D\u0451\x07\x03\x02\x02\u044E" +
		"\u0450\x05\xBC_\x02\u044F\u044E\x03\x02\x02\x02\u0450\u0453\x03\x02\x02" +
		"\x02\u0451\u0452\x03\x02\x02\x02\u0451\u044F\x03\x02\x02\x02\u0452\u0454" +
		"\x03\x02\x02\x02\u0453\u0451\x03\x02\x02\x02\u0454\u045E\x07\x04\x02\x02" +
		"\u0455\u0459\x07\x05\x02\x02\u0456\u0458\x05\xBC_\x02\u0457\u0456\x03" +
		"\x02\x02\x02\u0458\u045B\x03\x02\x02\x02\u0459\u045A\x03\x02\x02\x02\u0459" +
		"\u0457\x03\x02\x02\x02\u045A\u045C\x03\x02\x02\x02\u045B\u0459\x03\x02" +
		"\x02\x02\u045C\u045E\x07\x06\x02\x02\u045D\u041A\x03\x02\x02\x02\u045D" +
		"\u041B\x03\x02\x02\x02\u045D\u041C\x03\x02\x02\x02\u045D\u041D\x03\x02" +
		"\x02\x02\u045D\u041E\x03\x02\x02\x02\u045D\u041F\x03\x02\x02\x02\u045D" +
		"\u0420\x03\x02\x02\x02\u045D\u0421\x03\x02\x02\x02\u045D\u0428\x03\x02" +
		"\x02\x02\u045D\u042F\x03\x02\x02\x02\u045D\u0436\x03\x02\x02\x02\u045D" +
		"\u043D\x03\x02\x02\x02\u045D\u0445\x03\x02\x02\x02\u045D\u044D\x03\x02" +
		"\x02\x02\u045D\u0455\x03\x02\x02\x02\u045E\xBD\x03\x02\x02\x02\u045F\u0463" +
		"\x07\x05\x02\x02\u0460\u0462\x05\xBC_\x02\u0461\u0460\x03\x02\x02\x02" +
		"\u0462\u0465\x03\x02\x02\x02\u0463\u0464\x03\x02\x02\x02\u0463\u0461\x03" +
		"\x02\x02\x02\u0464\u0466\x03\x02\x02\x02\u0465\u0463\x03\x02\x02\x02\u0466" +
		"\u0467\x07\x06\x02\x02\u0467\xBF\x03\x02\x02\x02\u0468\u0469\x07\x03\x02" +
		"\x02\u0469\u046D\x07\x1A\x02\x02\u046A\u046C\x05\xBC_\x02\u046B\u046A" +
		"\x03\x02\x02\x02\u046C\u046F\x03\x02\x02\x02\u046D\u046E\x03\x02\x02\x02" +
		"\u046D\u046B\x03\x02\x02\x02\u046E\u0470\x03\x02\x02\x02\u046F\u046D\x03" +
		"\x02\x02\x02\u0470\u0471\x07\x04\x02\x02\u0471\xC1\x03\x02\x02\x02]\xC5" +
		"\xCF\u0113\u0127\u0129\u0136\u0147\u0149";
	private static readonly _serializedATNSegment2: string =
		"\u0155\u0158\u015F\u0164\u0168\u016B\u0171\u017A\u017D\u0180\u0188\u018F" +
		"\u01AB\u01AE\u01B1\u01B7\u01BA\u01C5\u01CF\u0205\u0212\u021B\u0220\u022A" +
		"\u022F\u0239\u023D\u0246\u024F\u0263\u0266\u0279\u0288\u028F\u0293\u02A1" +
		"\u02AB\u02B5\u02BF\u02CA\u02D1\u02DB\u02E5\u02F0\u0305\u033E\u034D\u0353" +
		"\u0357\u0361\u036F\u0384\u0387\u0392\u039A\u03A2\u03AA\u03B2\u03B8\u03BD" +
		"\u03C3\u03CE\u03D4\u03DA\u03DD\u03E7\u03ED\u03F6\u03FB\u03FE\u0413\u0416" +
		"\u0425\u042C\u0433\u043A\u0441\u0449\u0451\u0459\u045D\u0463\u046D";
	public static readonly _serializedATN: string = Utils.join(
		[
			kacoParser._serializedATNSegment0,
			kacoParser._serializedATNSegment1,
			kacoParser._serializedATNSegment2,
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
	public whileStatement(): WhileStatementContext | undefined {
		return this.tryGetRuleContext(0, WhileStatementContext);
	}
	public assignStatement(): AssignStatementContext | undefined {
		return this.tryGetRuleContext(0, AssignStatementContext);
	}
	public functionStatement(): FunctionStatementContext | undefined {
		return this.tryGetRuleContext(0, FunctionStatementContext);
	}
	public SemiColon(): TerminalNode | undefined { return this.tryGetToken(kacoParser.SemiColon, 0); }
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
	public flowCloseStatement(): FlowCloseStatementContext | undefined {
		return this.tryGetRuleContext(0, FlowCloseStatementContext);
	}
	public flowAgentStatement(): FlowAgentStatementContext | undefined {
		return this.tryGetRuleContext(0, FlowAgentStatementContext);
	}
	public agentCancelStatement(): AgentCancelStatementContext | undefined {
		return this.tryGetRuleContext(0, AgentCancelStatementContext);
	}
	public flowRefactStatement(): FlowRefactStatementContext | undefined {
		return this.tryGetRuleContext(0, FlowRefactStatementContext);
	}
	public testCommitStatement(): TestCommitStatementContext | undefined {
		return this.tryGetRuleContext(0, TestCommitStatementContext);
	}
	public changeInstFlowStatement(): ChangeInstFlowStatementContext | undefined {
		return this.tryGetRuleContext(0, ChangeInstFlowStatementContext);
	}
	public instFlowStatement(): InstFlowStatementContext | undefined {
		return this.tryGetRuleContext(0, InstFlowStatementContext);
	}
	public taskDeleteStatement(): TaskDeleteStatementContext | undefined {
		return this.tryGetRuleContext(0, TaskDeleteStatementContext);
	}
	public tachSendStatement(): TachSendStatementContext | undefined {
		return this.tryGetRuleContext(0, TachSendStatementContext);
	}
	public commWordStatement(): CommWordStatementContext | undefined {
		return this.tryGetRuleContext(0, CommWordStatementContext);
	}
	public execFuncStatement(): ExecFuncStatementContext | undefined {
		return this.tryGetRuleContext(0, ExecFuncStatementContext);
	}
	public cmdBreakStatement(): CmdBreakStatementContext | undefined {
		return this.tryGetRuleContext(0, CmdBreakStatementContext);
	}
	public openUrlStatement(): OpenUrlStatementContext | undefined {
		return this.tryGetRuleContext(0, OpenUrlStatementContext);
	}
	public openLayoutStatement(): OpenLayoutStatementContext | undefined {
		return this.tryGetRuleContext(0, OpenLayoutStatementContext);
	}
	public printStatement(): PrintStatementContext | undefined {
		return this.tryGetRuleContext(0, PrintStatementContext);
	}
	public regeSignStatement(): RegeSignStatementContext | undefined {
		return this.tryGetRuleContext(0, RegeSignStatementContext);
	}
	public rsetPswdSignStatement(): RsetPswdSignStatementContext | undefined {
		return this.tryGetRuleContext(0, RsetPswdSignStatementContext);
	}
	public extendStatement(): ExtendStatementContext | undefined {
		return this.tryGetRuleContext(0, ExtendStatementContext);
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
	public SemiColon(): TerminalNode[];
	public SemiColon(i: number): TerminalNode;
	public SemiColon(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(kacoParser.SemiColon);
		} else {
			return this.getToken(kacoParser.SemiColon, i);
		}
	}
	public whileStatement(): WhileStatementContext[];
	public whileStatement(i: number): WhileStatementContext;
	public whileStatement(i?: number): WhileStatementContext | WhileStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WhileStatementContext);
		} else {
			return this.getRuleContext(i, WhileStatementContext);
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
	public GreaterThan(): TerminalNode | undefined { return this.tryGetToken(kacoParser.GreaterThan, 0); }
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


export class QueryDataQuoteEllipsisExprContext extends ParserRuleContext {
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
	public QueryDataMarke(): TerminalNode[];
	public QueryDataMarke(i: number): TerminalNode;
	public QueryDataMarke(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(kacoParser.QueryDataMarke);
		} else {
			return this.getToken(kacoParser.QueryDataMarke, i);
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
	public get ruleIndex(): number { return kacoParser.RULE_queryDataQuoteEllipsisExpr; }
	// @Override
	public enterRule(listener: kacoListener): void {
		if (listener.enterQueryDataQuoteEllipsisExpr) {
			listener.enterQueryDataQuoteEllipsisExpr(this);
		}
	}
	// @Override
	public exitRule(listener: kacoListener): void {
		if (listener.exitQueryDataQuoteEllipsisExpr) {
			listener.exitQueryDataQuoteEllipsisExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: kacoVisitor<Result>): Result {
		if (visitor.visitQueryDataQuoteEllipsisExpr) {
			return visitor.visitQueryDataQuoteEllipsisExpr(this);
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
	public sqlQuoteStatement(): SqlQuoteStatementContext {
		return this.getRuleContext(0, SqlQuoteStatementContext);
	}
	public CloseParen(): TerminalNode { return this.getToken(kacoParser.CloseParen, 0); }
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
	public queryDataQuoteEllipsisExpr(): QueryDataQuoteEllipsisExprContext | undefined {
		return this.tryGetRuleContext(0, QueryDataQuoteEllipsisExprContext);
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
	public sqlStatement(): SqlStatementContext {
		return this.getRuleContext(0, SqlStatementContext);
	}
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
	public Comma(): TerminalNode | undefined { return this.tryGetToken(kacoParser.Comma, 0); }
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


export class FlowCloseStatementContext extends ParserRuleContext {
	public FlowClose(): TerminalNode { return this.getToken(kacoParser.FlowClose, 0); }
	public OpenParen(): TerminalNode { return this.getToken(kacoParser.OpenParen, 0); }
	public CloseParen(): TerminalNode { return this.getToken(kacoParser.CloseParen, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return kacoParser.RULE_flowCloseStatement; }
	// @Override
	public enterRule(listener: kacoListener): void {
		if (listener.enterFlowCloseStatement) {
			listener.enterFlowCloseStatement(this);
		}
	}
	// @Override
	public exitRule(listener: kacoListener): void {
		if (listener.exitFlowCloseStatement) {
			listener.exitFlowCloseStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: kacoVisitor<Result>): Result {
		if (visitor.visitFlowCloseStatement) {
			return visitor.visitFlowCloseStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FlowAgentStatementContext extends ParserRuleContext {
	public FlowAgent(): TerminalNode { return this.getToken(kacoParser.FlowAgent, 0); }
	public OpenParen(): TerminalNode { return this.getToken(kacoParser.OpenParen, 0); }
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
	public CloseParen(): TerminalNode { return this.getToken(kacoParser.CloseParen, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return kacoParser.RULE_flowAgentStatement; }
	// @Override
	public enterRule(listener: kacoListener): void {
		if (listener.enterFlowAgentStatement) {
			listener.enterFlowAgentStatement(this);
		}
	}
	// @Override
	public exitRule(listener: kacoListener): void {
		if (listener.exitFlowAgentStatement) {
			listener.exitFlowAgentStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: kacoVisitor<Result>): Result {
		if (visitor.visitFlowAgentStatement) {
			return visitor.visitFlowAgentStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AgentCancelStatementContext extends ParserRuleContext {
	public AgentCancel(): TerminalNode { return this.getToken(kacoParser.AgentCancel, 0); }
	public OpenParen(): TerminalNode { return this.getToken(kacoParser.OpenParen, 0); }
	public ctrlQuoteLiteral(): CtrlQuoteLiteralContext {
		return this.getRuleContext(0, CtrlQuoteLiteralContext);
	}
	public CloseParen(): TerminalNode { return this.getToken(kacoParser.CloseParen, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return kacoParser.RULE_agentCancelStatement; }
	// @Override
	public enterRule(listener: kacoListener): void {
		if (listener.enterAgentCancelStatement) {
			listener.enterAgentCancelStatement(this);
		}
	}
	// @Override
	public exitRule(listener: kacoListener): void {
		if (listener.exitAgentCancelStatement) {
			listener.exitAgentCancelStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: kacoVisitor<Result>): Result {
		if (visitor.visitAgentCancelStatement) {
			return visitor.visitAgentCancelStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FlowRefactStatementContext extends ParserRuleContext {
	public FlowRefact(): TerminalNode { return this.getToken(kacoParser.FlowRefact, 0); }
	public OpenParen(): TerminalNode { return this.getToken(kacoParser.OpenParen, 0); }
	public ctrlQuoteDotLiteral(): CtrlQuoteDotLiteralContext {
		return this.getRuleContext(0, CtrlQuoteDotLiteralContext);
	}
	public Comma(): TerminalNode { return this.getToken(kacoParser.Comma, 0); }
	public Natural(): TerminalNode { return this.getToken(kacoParser.Natural, 0); }
	public CloseParen(): TerminalNode { return this.getToken(kacoParser.CloseParen, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return kacoParser.RULE_flowRefactStatement; }
	// @Override
	public enterRule(listener: kacoListener): void {
		if (listener.enterFlowRefactStatement) {
			listener.enterFlowRefactStatement(this);
		}
	}
	// @Override
	public exitRule(listener: kacoListener): void {
		if (listener.exitFlowRefactStatement) {
			listener.exitFlowRefactStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: kacoVisitor<Result>): Result {
		if (visitor.visitFlowRefactStatement) {
			return visitor.visitFlowRefactStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TestCommitStatementContext extends ParserRuleContext {
	public TestCommit(): TerminalNode { return this.getToken(kacoParser.TestCommit, 0); }
	public OpenParen(): TerminalNode { return this.getToken(kacoParser.OpenParen, 0); }
	public commonLiteral(): CommonLiteralContext {
		return this.getRuleContext(0, CommonLiteralContext);
	}
	public Comma(): TerminalNode { return this.getToken(kacoParser.Comma, 0); }
	public StringLiteral(): TerminalNode { return this.getToken(kacoParser.StringLiteral, 0); }
	public CloseParen(): TerminalNode { return this.getToken(kacoParser.CloseParen, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return kacoParser.RULE_testCommitStatement; }
	// @Override
	public enterRule(listener: kacoListener): void {
		if (listener.enterTestCommitStatement) {
			listener.enterTestCommitStatement(this);
		}
	}
	// @Override
	public exitRule(listener: kacoListener): void {
		if (listener.exitTestCommitStatement) {
			listener.exitTestCommitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: kacoVisitor<Result>): Result {
		if (visitor.visitTestCommitStatement) {
			return visitor.visitTestCommitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ChangeInstFlowStatementContext extends ParserRuleContext {
	public ChangeInstFlow(): TerminalNode { return this.getToken(kacoParser.ChangeInstFlow, 0); }
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
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(kacoParser.Comma);
		} else {
			return this.getToken(kacoParser.Comma, i);
		}
	}
	public commonLiteral(): CommonLiteralContext {
		return this.getRuleContext(0, CommonLiteralContext);
	}
	public CloseParen(): TerminalNode { return this.getToken(kacoParser.CloseParen, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return kacoParser.RULE_changeInstFlowStatement; }
	// @Override
	public enterRule(listener: kacoListener): void {
		if (listener.enterChangeInstFlowStatement) {
			listener.enterChangeInstFlowStatement(this);
		}
	}
	// @Override
	public exitRule(listener: kacoListener): void {
		if (listener.exitChangeInstFlowStatement) {
			listener.exitChangeInstFlowStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: kacoVisitor<Result>): Result {
		if (visitor.visitChangeInstFlowStatement) {
			return visitor.visitChangeInstFlowStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InstFlowStatementContext extends ParserRuleContext {
	public InstFlow(): TerminalNode { return this.getToken(kacoParser.InstFlow, 0); }
	public OpenParen(): TerminalNode[];
	public OpenParen(i: number): TerminalNode;
	public OpenParen(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(kacoParser.OpenParen);
		} else {
			return this.getToken(kacoParser.OpenParen, i);
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
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(kacoParser.Comma);
		} else {
			return this.getToken(kacoParser.Comma, i);
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
	public ctrlQuoteLiteral(): CtrlQuoteLiteralContext {
		return this.getRuleContext(0, CtrlQuoteLiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return kacoParser.RULE_instFlowStatement; }
	// @Override
	public enterRule(listener: kacoListener): void {
		if (listener.enterInstFlowStatement) {
			listener.enterInstFlowStatement(this);
		}
	}
	// @Override
	public exitRule(listener: kacoListener): void {
		if (listener.exitInstFlowStatement) {
			listener.exitInstFlowStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: kacoVisitor<Result>): Result {
		if (visitor.visitInstFlowStatement) {
			return visitor.visitInstFlowStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TaskDeleteStatementContext extends ParserRuleContext {
	public TaskDelete(): TerminalNode { return this.getToken(kacoParser.TaskDelete, 0); }
	public OpenParen(): TerminalNode { return this.getToken(kacoParser.OpenParen, 0); }
	public commonLiteral(): CommonLiteralContext[];
	public commonLiteral(i: number): CommonLiteralContext;
	public commonLiteral(i?: number): CommonLiteralContext | CommonLiteralContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CommonLiteralContext);
		} else {
			return this.getRuleContext(i, CommonLiteralContext);
		}
	}
	public Comma(): TerminalNode { return this.getToken(kacoParser.Comma, 0); }
	public CloseParen(): TerminalNode { return this.getToken(kacoParser.CloseParen, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return kacoParser.RULE_taskDeleteStatement; }
	// @Override
	public enterRule(listener: kacoListener): void {
		if (listener.enterTaskDeleteStatement) {
			listener.enterTaskDeleteStatement(this);
		}
	}
	// @Override
	public exitRule(listener: kacoListener): void {
		if (listener.exitTaskDeleteStatement) {
			listener.exitTaskDeleteStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: kacoVisitor<Result>): Result {
		if (visitor.visitTaskDeleteStatement) {
			return visitor.visitTaskDeleteStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TachSendStatementContext extends ParserRuleContext {
	public TachSend(): TerminalNode { return this.getToken(kacoParser.TachSend, 0); }
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
	public Comma(): TerminalNode | undefined { return this.tryGetToken(kacoParser.Comma, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return kacoParser.RULE_tachSendStatement; }
	// @Override
	public enterRule(listener: kacoListener): void {
		if (listener.enterTachSendStatement) {
			listener.enterTachSendStatement(this);
		}
	}
	// @Override
	public exitRule(listener: kacoListener): void {
		if (listener.exitTachSendStatement) {
			listener.exitTachSendStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: kacoVisitor<Result>): Result {
		if (visitor.visitTachSendStatement) {
			return visitor.visitTachSendStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CommWordStatementContext extends ParserRuleContext {
	public CommWord(): TerminalNode { return this.getToken(kacoParser.CommWord, 0); }
	public OpenParen(): TerminalNode { return this.getToken(kacoParser.OpenParen, 0); }
	public CloseParen(): TerminalNode { return this.getToken(kacoParser.CloseParen, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return kacoParser.RULE_commWordStatement; }
	// @Override
	public enterRule(listener: kacoListener): void {
		if (listener.enterCommWordStatement) {
			listener.enterCommWordStatement(this);
		}
	}
	// @Override
	public exitRule(listener: kacoListener): void {
		if (listener.exitCommWordStatement) {
			listener.exitCommWordStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: kacoVisitor<Result>): Result {
		if (visitor.visitCommWordStatement) {
			return visitor.visitCommWordStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExecFuncStatementContext extends ParserRuleContext {
	public ExecFunc(): TerminalNode { return this.getToken(kacoParser.ExecFunc, 0); }
	public ctrlQuoteLiteral(): CtrlQuoteLiteralContext {
		return this.getRuleContext(0, CtrlQuoteLiteralContext);
	}
	public OpenParen(): TerminalNode[];
	public OpenParen(i: number): TerminalNode;
	public OpenParen(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(kacoParser.OpenParen);
		} else {
			return this.getToken(kacoParser.OpenParen, i);
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
	public CloseParen(): TerminalNode[];
	public CloseParen(i: number): TerminalNode;
	public CloseParen(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(kacoParser.CloseParen);
		} else {
			return this.getToken(kacoParser.CloseParen, i);
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
	public get ruleIndex(): number { return kacoParser.RULE_execFuncStatement; }
	// @Override
	public enterRule(listener: kacoListener): void {
		if (listener.enterExecFuncStatement) {
			listener.enterExecFuncStatement(this);
		}
	}
	// @Override
	public exitRule(listener: kacoListener): void {
		if (listener.exitExecFuncStatement) {
			listener.exitExecFuncStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: kacoVisitor<Result>): Result {
		if (visitor.visitExecFuncStatement) {
			return visitor.visitExecFuncStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdBreakStatementContext extends ParserRuleContext {
	public CmdBreak(): TerminalNode { return this.getToken(kacoParser.CmdBreak, 0); }
	public OpenParen(): TerminalNode { return this.getToken(kacoParser.OpenParen, 0); }
	public CloseParen(): TerminalNode { return this.getToken(kacoParser.CloseParen, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return kacoParser.RULE_cmdBreakStatement; }
	// @Override
	public enterRule(listener: kacoListener): void {
		if (listener.enterCmdBreakStatement) {
			listener.enterCmdBreakStatement(this);
		}
	}
	// @Override
	public exitRule(listener: kacoListener): void {
		if (listener.exitCmdBreakStatement) {
			listener.exitCmdBreakStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: kacoVisitor<Result>): Result {
		if (visitor.visitCmdBreakStatement) {
			return visitor.visitCmdBreakStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OpenUrlStatementContext extends ParserRuleContext {
	public OpenUrl(): TerminalNode { return this.getToken(kacoParser.OpenUrl, 0); }
	public OpenParen(): TerminalNode { return this.getToken(kacoParser.OpenParen, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public CloseParen(): TerminalNode { return this.getToken(kacoParser.CloseParen, 0); }
	public StringLiteral(): TerminalNode | undefined { return this.tryGetToken(kacoParser.StringLiteral, 0); }
	public Comma(): TerminalNode | undefined { return this.tryGetToken(kacoParser.Comma, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return kacoParser.RULE_openUrlStatement; }
	// @Override
	public enterRule(listener: kacoListener): void {
		if (listener.enterOpenUrlStatement) {
			listener.enterOpenUrlStatement(this);
		}
	}
	// @Override
	public exitRule(listener: kacoListener): void {
		if (listener.exitOpenUrlStatement) {
			listener.exitOpenUrlStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: kacoVisitor<Result>): Result {
		if (visitor.visitOpenUrlStatement) {
			return visitor.visitOpenUrlStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OpenLayoutStatementContext extends ParserRuleContext {
	public OpenLayout(): TerminalNode { return this.getToken(kacoParser.OpenLayout, 0); }
	public ctrlQuoteLiteral(): CtrlQuoteLiteralContext {
		return this.getRuleContext(0, CtrlQuoteLiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return kacoParser.RULE_openLayoutStatement; }
	// @Override
	public enterRule(listener: kacoListener): void {
		if (listener.enterOpenLayoutStatement) {
			listener.enterOpenLayoutStatement(this);
		}
	}
	// @Override
	public exitRule(listener: kacoListener): void {
		if (listener.exitOpenLayoutStatement) {
			listener.exitOpenLayoutStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: kacoVisitor<Result>): Result {
		if (visitor.visitOpenLayoutStatement) {
			return visitor.visitOpenLayoutStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrintStatementContext extends ParserRuleContext {
	public Print(): TerminalNode { return this.getToken(kacoParser.Print, 0); }
	public ctrlQuoteLiteral(): CtrlQuoteLiteralContext {
		return this.getRuleContext(0, CtrlQuoteLiteralContext);
	}
	public quoteEllipsisExpr(): QuoteEllipsisExprContext {
		return this.getRuleContext(0, QuoteEllipsisExprContext);
	}
	public OpenParen(): TerminalNode | undefined { return this.tryGetToken(kacoParser.OpenParen, 0); }
	public PrintLiteral(): TerminalNode | undefined { return this.tryGetToken(kacoParser.PrintLiteral, 0); }
	public CloseParen(): TerminalNode | undefined { return this.tryGetToken(kacoParser.CloseParen, 0); }
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


export class RegeSignStatementContext extends ParserRuleContext {
	public RegeSign(): TerminalNode { return this.getToken(kacoParser.RegeSign, 0); }
	public OpenParen(): TerminalNode { return this.getToken(kacoParser.OpenParen, 0); }
	public commonLiteral(): CommonLiteralContext {
		return this.getRuleContext(0, CommonLiteralContext);
	}
	public CloseParen(): TerminalNode { return this.getToken(kacoParser.CloseParen, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return kacoParser.RULE_regeSignStatement; }
	// @Override
	public enterRule(listener: kacoListener): void {
		if (listener.enterRegeSignStatement) {
			listener.enterRegeSignStatement(this);
		}
	}
	// @Override
	public exitRule(listener: kacoListener): void {
		if (listener.exitRegeSignStatement) {
			listener.exitRegeSignStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: kacoVisitor<Result>): Result {
		if (visitor.visitRegeSignStatement) {
			return visitor.visitRegeSignStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RsetPswdSignStatementContext extends ParserRuleContext {
	public RsetPswdSign(): TerminalNode { return this.getToken(kacoParser.RsetPswdSign, 0); }
	public OpenParen(): TerminalNode { return this.getToken(kacoParser.OpenParen, 0); }
	public commonLiteral(): CommonLiteralContext {
		return this.getRuleContext(0, CommonLiteralContext);
	}
	public Comma(): TerminalNode { return this.getToken(kacoParser.Comma, 0); }
	public StringLiteral(): TerminalNode { return this.getToken(kacoParser.StringLiteral, 0); }
	public CloseParen(): TerminalNode { return this.getToken(kacoParser.CloseParen, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return kacoParser.RULE_rsetPswdSignStatement; }
	// @Override
	public enterRule(listener: kacoListener): void {
		if (listener.enterRsetPswdSignStatement) {
			listener.enterRsetPswdSignStatement(this);
		}
	}
	// @Override
	public exitRule(listener: kacoListener): void {
		if (listener.exitRsetPswdSignStatement) {
			listener.exitRsetPswdSignStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: kacoVisitor<Result>): Result {
		if (visitor.visitRsetPswdSignStatement) {
			return visitor.visitRsetPswdSignStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExtendStatementContext extends ParserRuleContext {
	public Extend(): TerminalNode { return this.getToken(kacoParser.Extend, 0); }
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
	public get ruleIndex(): number { return kacoParser.RULE_extendStatement; }
	// @Override
	public enterRule(listener: kacoListener): void {
		if (listener.enterExtendStatement) {
			listener.enterExtendStatement(this);
		}
	}
	// @Override
	public exitRule(listener: kacoListener): void {
		if (listener.exitExtendStatement) {
			listener.exitExtendStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: kacoVisitor<Result>): Result {
		if (visitor.visitExtendStatement) {
			return visitor.visitExtendStatement(this);
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


export class SupplierStatementContext extends ParserRuleContext {
	public getGridRowsStatement(): GetGridRowsStatementContext {
		return this.getRuleContext(0, GetGridRowsStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return kacoParser.RULE_supplierStatement; }
	// @Override
	public enterRule(listener: kacoListener): void {
		if (listener.enterSupplierStatement) {
			listener.enterSupplierStatement(this);
		}
	}
	// @Override
	public exitRule(listener: kacoListener): void {
		if (listener.exitSupplierStatement) {
			listener.exitSupplierStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: kacoVisitor<Result>): Result {
		if (visitor.visitSupplierStatement) {
			return visitor.visitSupplierStatement(this);
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
	public sqlQuoteStatement(): SqlQuoteStatementContext[];
	public sqlQuoteStatement(i: number): SqlQuoteStatementContext;
	public sqlQuoteStatement(i?: number): SqlQuoteStatementContext | SqlQuoteStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SqlQuoteStatementContext);
		} else {
			return this.getRuleContext(i, SqlQuoteStatementContext);
		}
	}
	public supplierStatement(): SupplierStatementContext[];
	public supplierStatement(i: number): SupplierStatementContext;
	public supplierStatement(i?: number): SupplierStatementContext | SupplierStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SupplierStatementContext);
		} else {
			return this.getRuleContext(i, SupplierStatementContext);
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
	public negationExpr(): NegationExprContext | undefined {
		return this.tryGetRuleContext(0, NegationExprContext);
	}
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
	public negationExpr(): NegationExprContext | undefined {
		return this.tryGetRuleContext(0, NegationExprContext);
	}
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


export class NegationExprContext extends ParserRuleContext {
	public DecimalLiteral(): TerminalNode | undefined { return this.tryGetToken(kacoParser.DecimalLiteral, 0); }
	public Natural(): TerminalNode | undefined { return this.tryGetToken(kacoParser.Natural, 0); }
	public Minus(): TerminalNode | undefined { return this.tryGetToken(kacoParser.Minus, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return kacoParser.RULE_negationExpr; }
	// @Override
	public enterRule(listener: kacoListener): void {
		if (listener.enterNegationExpr) {
			listener.enterNegationExpr(this);
		}
	}
	// @Override
	public exitRule(listener: kacoListener): void {
		if (listener.exitNegationExpr) {
			listener.exitNegationExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: kacoVisitor<Result>): Result {
		if (visitor.visitNegationExpr) {
			return visitor.visitNegationExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SqlTemplateExprContext extends ParserRuleContext {
	public commonLiteral(): CommonLiteralContext | undefined {
		return this.tryGetRuleContext(0, CommonLiteralContext);
	}
	public Multiply(): TerminalNode | undefined { return this.tryGetToken(kacoParser.Multiply, 0); }
	public Extend(): TerminalNode | undefined { return this.tryGetToken(kacoParser.Extend, 0); }
	public Assign(): TerminalNode | undefined { return this.tryGetToken(kacoParser.Assign, 0); }
	public Dot(): TerminalNode | undefined { return this.tryGetToken(kacoParser.Dot, 0); }
	public Comma(): TerminalNode | undefined { return this.tryGetToken(kacoParser.Comma, 0); }
	public Constant(): TerminalNode | undefined { return this.tryGetToken(kacoParser.Constant, 0); }
	public LessThan(): TerminalNode | undefined { return this.tryGetToken(kacoParser.LessThan, 0); }
	public sqlTemplateExpr(): SqlTemplateExprContext[];
	public sqlTemplateExpr(i: number): SqlTemplateExprContext;
	public sqlTemplateExpr(i?: number): SqlTemplateExprContext | SqlTemplateExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SqlTemplateExprContext);
		} else {
			return this.getRuleContext(i, SqlTemplateExprContext);
		}
	}
	public LessThanEquals(): TerminalNode | undefined { return this.tryGetToken(kacoParser.LessThanEquals, 0); }
	public GreaterThan(): TerminalNode | undefined { return this.tryGetToken(kacoParser.GreaterThan, 0); }
	public GreaterThanEquals(): TerminalNode | undefined { return this.tryGetToken(kacoParser.GreaterThanEquals, 0); }
	public OpenBrace(): TerminalNode | undefined { return this.tryGetToken(kacoParser.OpenBrace, 0); }
	public CloseBrace(): TerminalNode | undefined { return this.tryGetToken(kacoParser.CloseBrace, 0); }
	public OpenBracket(): TerminalNode | undefined { return this.tryGetToken(kacoParser.OpenBracket, 0); }
	public CloseBracket(): TerminalNode | undefined { return this.tryGetToken(kacoParser.CloseBracket, 0); }
	public OpenParen(): TerminalNode | undefined { return this.tryGetToken(kacoParser.OpenParen, 0); }
	public CloseParen(): TerminalNode | undefined { return this.tryGetToken(kacoParser.CloseParen, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return kacoParser.RULE_sqlTemplateExpr; }
	// @Override
	public enterRule(listener: kacoListener): void {
		if (listener.enterSqlTemplateExpr) {
			listener.enterSqlTemplateExpr(this);
		}
	}
	// @Override
	public exitRule(listener: kacoListener): void {
		if (listener.exitSqlTemplateExpr) {
			listener.exitSqlTemplateExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: kacoVisitor<Result>): Result {
		if (visitor.visitSqlTemplateExpr) {
			return visitor.visitSqlTemplateExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SqlStatementContext extends ParserRuleContext {
	public OpenParen(): TerminalNode { return this.getToken(kacoParser.OpenParen, 0); }
	public CloseParen(): TerminalNode { return this.getToken(kacoParser.CloseParen, 0); }
	public sqlTemplateExpr(): SqlTemplateExprContext[];
	public sqlTemplateExpr(i: number): SqlTemplateExprContext;
	public sqlTemplateExpr(i?: number): SqlTemplateExprContext | SqlTemplateExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SqlTemplateExprContext);
		} else {
			return this.getRuleContext(i, SqlTemplateExprContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return kacoParser.RULE_sqlStatement; }
	// @Override
	public enterRule(listener: kacoListener): void {
		if (listener.enterSqlStatement) {
			listener.enterSqlStatement(this);
		}
	}
	// @Override
	public exitRule(listener: kacoListener): void {
		if (listener.exitSqlStatement) {
			listener.exitSqlStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: kacoVisitor<Result>): Result {
		if (visitor.visitSqlStatement) {
			return visitor.visitSqlStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SqlQuoteStatementContext extends ParserRuleContext {
	public OpenBracket(): TerminalNode { return this.getToken(kacoParser.OpenBracket, 0); }
	public Sql(): TerminalNode { return this.getToken(kacoParser.Sql, 0); }
	public CloseBracket(): TerminalNode { return this.getToken(kacoParser.CloseBracket, 0); }
	public sqlTemplateExpr(): SqlTemplateExprContext[];
	public sqlTemplateExpr(i: number): SqlTemplateExprContext;
	public sqlTemplateExpr(i?: number): SqlTemplateExprContext | SqlTemplateExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SqlTemplateExprContext);
		} else {
			return this.getRuleContext(i, SqlTemplateExprContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return kacoParser.RULE_sqlQuoteStatement; }
	// @Override
	public enterRule(listener: kacoListener): void {
		if (listener.enterSqlQuoteStatement) {
			listener.enterSqlQuoteStatement(this);
		}
	}
	// @Override
	public exitRule(listener: kacoListener): void {
		if (listener.exitSqlQuoteStatement) {
			listener.exitSqlQuoteStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: kacoVisitor<Result>): Result {
		if (visitor.visitSqlQuoteStatement) {
			return visitor.visitSqlQuoteStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


