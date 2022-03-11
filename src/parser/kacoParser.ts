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
	public static readonly SaveForm = 29;
	public static readonly StringLiteral = 30;
	public static readonly StringDotLiteral = 31;
	public static readonly BooleanLiteral = 32;
	public static readonly DecimalLiteral = 33;
	public static readonly QuoteLiteral = 34;
	public static readonly Decimal = 35;
	public static readonly LineComment = 36;
	public static readonly WhiteSpace = 37;
	public static readonly RULE_program = 0;
	public static readonly RULE_statement = 1;
	public static readonly RULE_ifStatement = 2;
	public static readonly RULE_quoteExpr = 3;
	public static readonly RULE_quoteEllipsisExpr = 4;
	public static readonly RULE_blockStatement = 5;
	public static readonly RULE_assignStatement = 6;
	public static readonly RULE_printStatement = 7;
	public static readonly RULE_openFormStatement = 8;
	public static readonly RULE_saveFormStatement = 9;
	public static readonly RULE_commonExpression = 10;
	public static readonly RULE_assignAbleStatement = 11;
	public static readonly RULE_expression = 12;
	public static readonly RULE_andAndExpression = 13;
	public static readonly RULE_cmpExpression = 14;
	public static readonly RULE_addExpression = 15;
	public static readonly RULE_mulExpression = 16;
	public static readonly RULE_unaryExpression = 17;
	public static readonly RULE_primaryExpression = 18;
	public static readonly RULE_variableExpression = 19;
	public static readonly RULE_assign = 20;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "statement", "ifStatement", "quoteExpr", "quoteEllipsisExpr", 
		"blockStatement", "assignStatement", "printStatement", "openFormStatement", 
		"saveFormStatement", "commonExpression", "assignAbleStatement", "expression", 
		"andAndExpression", "cmpExpression", "addExpression", "mulExpression", 
		"unaryExpression", "primaryExpression", "variableExpression", "assign",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'if'", "'else'", "'{'", "'}'", "'print'", "'||'", "'&&'", 
		"'=='", "'!='", "'<'", "'<='", "'>'", "'>='", "'+'", "'-'", "'*'", "'/'", 
		"'!'", "'['", "']'", "'('", "')'", "';'", "','", "'='", "'.'", "'...'", 
		"'OpenForm'", "'SaveForm'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, "OpenBracket", 
		"CloseBracket", "OpenParen", "CloseParen", "SemiColon", "Comma", "Assign", 
		"Dot", "Ellipsis", "OpenForm", "SaveForm", "StringLiteral", "StringDotLiteral", 
		"BooleanLiteral", "DecimalLiteral", "QuoteLiteral", "Decimal", "LineComment", 
		"WhiteSpace",
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
			this.state = 43;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 42;
				this.statement();
				}
				}
				this.state = 45;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << kacoParser.OpenBracket) | (1 << kacoParser.OpenForm) | (1 << kacoParser.SaveForm))) !== 0));
			this.state = 47;
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
			this.state = 52;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case kacoParser.OpenForm:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 49;
				this.openFormStatement();
				}
				break;
			case kacoParser.SaveForm:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 50;
				this.saveFormStatement();
				}
				break;
			case kacoParser.OpenBracket:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 51;
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
		this.enterRule(_localctx, 4, kacoParser.RULE_ifStatement);
		try {
			this.state = 64;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 54;
				this.match(kacoParser.T__0);
				this.state = 55;
				this.quoteExpr();
				this.state = 56;
				this.blockStatement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 58;
				this.match(kacoParser.T__0);
				this.state = 59;
				this.quoteExpr();
				this.state = 60;
				this.blockStatement();
				this.state = 61;
				this.match(kacoParser.T__1);
				this.state = 62;
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
		let _localctx: QuoteExprContext = new QuoteExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, kacoParser.RULE_quoteExpr);
		let _la: number;
		try {
			this.state = 76;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 66;
				this.match(kacoParser.OpenParen);
				this.state = 67;
				this.match(kacoParser.OpenBracket);
				this.state = 68;
				this.match(kacoParser.StringDotLiteral);
				this.state = 69;
				this.match(kacoParser.CloseBracket);
				this.state = 70;
				this.match(kacoParser.CloseParen);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 71;
				this.match(kacoParser.OpenParen);
				this.state = 73;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === kacoParser.StringLiteral) {
					{
					this.state = 72;
					this.match(kacoParser.StringLiteral);
					}
				}

				this.state = 75;
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
		let _localctx: QuoteEllipsisExprContext = new QuoteEllipsisExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, kacoParser.RULE_quoteEllipsisExpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 78;
			this.match(kacoParser.OpenParen);
			this.state = 113;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 19)) & ~0x1F) === 0 && ((1 << (_la - 19)) & ((1 << (kacoParser.OpenBracket - 19)) | (1 << (kacoParser.StringLiteral - 19)) | (1 << (kacoParser.BooleanLiteral - 19)) | (1 << (kacoParser.DecimalLiteral - 19)))) !== 0)) {
				{
				this.state = 91;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
				case 1:
					{
					this.state = 79;
					this.match(kacoParser.StringLiteral);
					}
					break;

				case 2:
					{
					this.state = 80;
					this.match(kacoParser.DecimalLiteral);
					}
					break;

				case 3:
					{
					this.state = 81;
					this.match(kacoParser.BooleanLiteral);
					}
					break;

				case 4:
					{
					this.state = 82;
					this.match(kacoParser.OpenBracket);
					this.state = 83;
					this.match(kacoParser.QuoteLiteral);
					this.state = 84;
					this.match(kacoParser.CloseBracket);
					}
					break;

				case 5:
					{
					this.state = 85;
					this.match(kacoParser.OpenBracket);
					this.state = 86;
					this.match(kacoParser.StringDotLiteral);
					this.state = 87;
					this.match(kacoParser.CloseBracket);
					}
					break;

				case 6:
					{
					this.state = 88;
					this.match(kacoParser.OpenBracket);
					this.state = 89;
					this.match(kacoParser.StringLiteral);
					this.state = 90;
					this.match(kacoParser.CloseBracket);
					}
					break;
				}
				this.state = 110;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === kacoParser.Comma) {
					{
					{
					this.state = 93;
					this.match(kacoParser.Comma);
					this.state = 106;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
					case 1:
						{
						this.state = 94;
						this.match(kacoParser.StringLiteral);
						}
						break;

					case 2:
						{
						this.state = 95;
						this.match(kacoParser.DecimalLiteral);
						}
						break;

					case 3:
						{
						this.state = 96;
						this.match(kacoParser.BooleanLiteral);
						}
						break;

					case 4:
						{
						this.state = 97;
						this.match(kacoParser.OpenBracket);
						this.state = 98;
						this.match(kacoParser.QuoteLiteral);
						this.state = 99;
						this.match(kacoParser.CloseBracket);
						}
						break;

					case 5:
						{
						this.state = 100;
						this.match(kacoParser.OpenBracket);
						this.state = 101;
						this.match(kacoParser.StringDotLiteral);
						this.state = 102;
						this.match(kacoParser.CloseBracket);
						}
						break;

					case 6:
						{
						this.state = 103;
						this.match(kacoParser.OpenBracket);
						this.state = 104;
						this.match(kacoParser.StringLiteral);
						this.state = 105;
						this.match(kacoParser.CloseBracket);
						}
						break;
					}
					}
					}
					this.state = 112;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 115;
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
		let _localctx: BlockStatementContext = new BlockStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, kacoParser.RULE_blockStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 117;
			this.match(kacoParser.T__2);
			this.state = 121;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << kacoParser.OpenBracket) | (1 << kacoParser.OpenForm) | (1 << kacoParser.SaveForm))) !== 0)) {
				{
				{
				this.state = 118;
				this.statement();
				}
				}
				this.state = 123;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 124;
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
		let _localctx: AssignStatementContext = new AssignStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, kacoParser.RULE_assignStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 126;
			this.assign();
			this.state = 127;
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
		let _localctx: PrintStatementContext = new PrintStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, kacoParser.RULE_printStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 129;
			this.match(kacoParser.T__4);
			this.state = 130;
			this.match(kacoParser.OpenParen);
			this.state = 131;
			this.expression();
			this.state = 132;
			this.match(kacoParser.CloseParen);
			this.state = 133;
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
		let _localctx: OpenFormStatementContext = new OpenFormStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, kacoParser.RULE_openFormStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 135;
			this.match(kacoParser.OpenForm);
			this.state = 136;
			this.match(kacoParser.OpenBracket);
			this.state = 137;
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
			this.state = 138;
			this.match(kacoParser.CloseBracket);
			this.state = 140;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				{
				this.state = 139;
				this.quoteEllipsisExpr();
				}
				break;
			}
			this.state = 143;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				{
				this.state = 142;
				this.quoteEllipsisExpr();
				}
				break;
			}
			this.state = 146;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === kacoParser.OpenParen) {
				{
				this.state = 145;
				this.quoteEllipsisExpr();
				}
			}

			this.state = 148;
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
		this.enterRule(_localctx, 18, kacoParser.RULE_saveFormStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 150;
			this.match(kacoParser.SaveForm);
			this.state = 151;
			this.quoteEllipsisExpr();
			this.state = 152;
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
		let _localctx: CommonExpressionContext = new CommonExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, kacoParser.RULE_commonExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 154;
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
		let _localctx: AssignAbleStatementContext = new AssignAbleStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, kacoParser.RULE_assignAbleStatement);
		try {
			this.state = 158;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case kacoParser.OpenBracket:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 156;
				this.assign();
				}
				break;
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
			case kacoParser.T__17:
			case kacoParser.OpenParen:
			case kacoParser.CloseParen:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 157;
				this.expression();
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
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, kacoParser.RULE_expression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 160;
			this.andAndExpression();
			this.state = 165;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === kacoParser.T__5) {
				{
				{
				this.state = 161;
				this.match(kacoParser.T__5);
				this.state = 162;
				this.andAndExpression();
				}
				}
				this.state = 167;
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
		let _localctx: AndAndExpressionContext = new AndAndExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, kacoParser.RULE_andAndExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 168;
			this.cmpExpression();
			this.state = 173;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === kacoParser.T__6) {
				{
				{
				this.state = 169;
				this.match(kacoParser.T__6);
				this.state = 170;
				this.cmpExpression();
				}
				}
				this.state = 175;
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
		let _localctx: CmpExpressionContext = new CmpExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, kacoParser.RULE_cmpExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 176;
			this.addExpression();
			this.state = 179;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << kacoParser.T__7) | (1 << kacoParser.T__8) | (1 << kacoParser.T__9) | (1 << kacoParser.T__10) | (1 << kacoParser.T__11) | (1 << kacoParser.T__12))) !== 0)) {
				{
				this.state = 177;
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
				this.state = 178;
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
		let _localctx: AddExpressionContext = new AddExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, kacoParser.RULE_addExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 181;
			this.mulExpression();
			this.state = 186;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === kacoParser.T__13 || _la === kacoParser.T__14) {
				{
				{
				this.state = 182;
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
				this.state = 183;
				this.mulExpression();
				}
				}
				this.state = 188;
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
		let _localctx: MulExpressionContext = new MulExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, kacoParser.RULE_mulExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 189;
			this.unaryExpression();
			this.state = 194;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === kacoParser.T__15 || _la === kacoParser.T__16) {
				{
				{
				this.state = 190;
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
				this.state = 191;
				this.unaryExpression();
				}
				}
				this.state = 196;
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
		let _localctx: UnaryExpressionContext = new UnaryExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, kacoParser.RULE_unaryExpression);
		let _la: number;
		try {
			this.state = 200;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 19, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 197;
				this.primaryExpression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 198;
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
				this.state = 199;
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
		let _localctx: PrimaryExpressionContext = new PrimaryExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, kacoParser.RULE_primaryExpression);
		try {
			this.state = 207;
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
				this.state = 202;
				this.variableExpression();
				}
				break;
			case kacoParser.OpenParen:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 203;
				this.match(kacoParser.OpenParen);
				this.state = 204;
				this.expression();
				this.state = 205;
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
		let _localctx: VariableExpressionContext = new VariableExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, kacoParser.RULE_variableExpression);
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
		let _localctx: AssignContext = new AssignContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, kacoParser.RULE_assign);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 211;
			this.match(kacoParser.OpenBracket);
			this.state = 212;
			this.match(kacoParser.StringLiteral);
			this.state = 213;
			this.match(kacoParser.CloseBracket);
			this.state = 214;
			this.match(kacoParser.Assign);
			this.state = 227;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 21, this._ctx) ) {
			case 1:
				{
				this.state = 215;
				this.match(kacoParser.OpenBracket);
				this.state = 216;
				this.match(kacoParser.StringLiteral);
				this.state = 217;
				this.match(kacoParser.CloseBracket);
				}
				break;

			case 2:
				{
				this.state = 218;
				this.match(kacoParser.OpenBracket);
				this.state = 219;
				this.match(kacoParser.StringDotLiteral);
				this.state = 220;
				this.match(kacoParser.CloseBracket);
				}
				break;

			case 3:
				{
				this.state = 221;
				this.match(kacoParser.OpenBracket);
				this.state = 222;
				this.match(kacoParser.QuoteLiteral);
				this.state = 223;
				this.match(kacoParser.CloseBracket);
				}
				break;

			case 4:
				{
				this.state = 224;
				this.match(kacoParser.DecimalLiteral);
				}
				break;

			case 5:
				{
				this.state = 225;
				this.match(kacoParser.BooleanLiteral);
				}
				break;

			case 6:
				{
				this.state = 226;
				this.match(kacoParser.StringLiteral);
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

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\'\xE8\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x03\x02\x06\x02." +
		"\n\x02\r\x02\x0E\x02/\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x05\x03" +
		"7\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x05\x04C\n\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x05\x05L\n\x05\x03\x05\x05\x05O\n\x05\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x05\x06^\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06" +
		"m\n\x06\x07\x06o\n\x06\f\x06\x0E\x06r\v\x06\x05\x06t\n\x06\x03\x06\x03" +
		"\x06\x03\x07\x03\x07\x07\x07z\n\x07\f\x07\x0E\x07}\v\x07\x03\x07\x03\x07" +
		"\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x05\n\x8F\n\n\x03\n\x05\n\x92\n\n\x03\n\x05\n\x95\n\n\x03" +
		"\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\r\x03\r\x05\r\xA1\n\r" +
		"\x03\x0E\x03\x0E\x03\x0E\x07\x0E\xA6\n\x0E\f\x0E\x0E\x0E\xA9\v\x0E\x03" +
		"\x0F\x03\x0F\x03\x0F\x07\x0F\xAE\n\x0F\f\x0F\x0E\x0F\xB1\v\x0F\x03\x10" +
		"\x03\x10\x03\x10\x05\x10\xB6\n\x10\x03\x11\x03\x11\x03\x11\x07\x11\xBB" +
		"\n\x11\f\x11\x0E\x11\xBE\v\x11\x03\x12\x03\x12\x03\x12\x07\x12\xC3\n\x12" +
		"\f\x12\x0E\x12\xC6\v\x12\x03\x13\x03\x13\x03\x13\x05\x13\xCB\n\x13\x03" +
		"\x14\x03\x14\x03\x14\x03\x14\x03\x14\x05\x14\xD2\n\x14\x03\x15\x03\x15" +
		"\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16" +
		"\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x05\x16\xE6\n" +
		"\x16\x03\x16\x02\x02\x02\x17\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02" +
		"\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02" +
		" \x02\"\x02$\x02&\x02(\x02*\x02\x02\x07\x04\x02  ##\x03\x02\n\x0F\x03" +
		"\x02\x10\x11\x03\x02\x12\x13\x04\x02\x11\x11\x14\x14\x02\xF5\x02-\x03" +
		"\x02\x02\x02\x046\x03\x02\x02\x02\x06B\x03\x02\x02\x02\bN\x03\x02\x02" +
		"\x02\nP\x03\x02\x02\x02\fw\x03\x02\x02\x02\x0E\x80\x03\x02\x02\x02\x10" +
		"\x83\x03\x02\x02\x02\x12\x89\x03\x02\x02\x02\x14\x98\x03\x02\x02\x02\x16" +
		"\x9C\x03\x02\x02\x02\x18\xA0\x03\x02\x02\x02\x1A\xA2\x03\x02\x02\x02\x1C" +
		"\xAA\x03\x02\x02\x02\x1E\xB2\x03\x02\x02\x02 \xB7\x03\x02\x02\x02\"\xBF" +
		"\x03\x02\x02\x02$\xCA\x03\x02\x02\x02&\xD1\x03\x02\x02\x02(\xD3\x03\x02" +
		"\x02\x02*\xD5\x03\x02\x02\x02,.\x05\x04\x03\x02-,\x03\x02\x02\x02./\x03" +
		"\x02\x02\x02/-\x03\x02\x02\x02/0\x03\x02\x02\x0201\x03\x02\x02\x0212\x07" +
		"\x02\x02\x032\x03\x03\x02\x02\x0237\x05\x12\n\x0247\x05\x14\v\x0257\x05" +
		"\x0E\b\x0263\x03\x02\x02\x0264\x03\x02\x02\x0265\x03\x02\x02\x027\x05" +
		"\x03\x02\x02\x0289\x07\x03\x02\x029:\x05\b\x05\x02:;\x05\f\x07\x02;C\x03" +
		"\x02\x02\x02<=\x07\x03\x02\x02=>\x05\b\x05\x02>?\x05\f\x07\x02?@\x07\x04" +
		"\x02\x02@A\x05\f\x07\x02AC\x03\x02\x02\x02B8\x03\x02\x02\x02B<\x03\x02" +
		"\x02\x02C\x07\x03\x02\x02\x02DE\x07\x17\x02\x02EF\x07\x15\x02\x02FG\x07" +
		"!\x02\x02GH\x07\x16\x02\x02HO\x07\x18\x02\x02IK\x07\x17\x02\x02JL\x07" +
		" \x02\x02KJ\x03\x02\x02\x02KL\x03\x02\x02\x02LM\x03\x02\x02\x02MO\x07" +
		"\x18\x02\x02ND\x03\x02\x02\x02NI\x03\x02\x02\x02O\t\x03\x02\x02\x02Ps" +
		"\x07\x17\x02\x02Q^\x07 \x02\x02R^\x07#\x02\x02S^\x07\"\x02\x02TU\x07\x15" +
		"\x02\x02UV\x07$\x02\x02V^\x07\x16\x02\x02WX\x07\x15\x02\x02XY\x07!\x02" +
		"\x02Y^\x07\x16\x02\x02Z[\x07\x15\x02\x02[\\\x07 \x02\x02\\^\x07\x16\x02" +
		"\x02]Q\x03\x02\x02\x02]R\x03\x02\x02\x02]S\x03\x02\x02\x02]T\x03\x02\x02" +
		"\x02]W\x03\x02\x02\x02]Z\x03\x02\x02\x02^p\x03\x02\x02\x02_l\x07\x1A\x02" +
		"\x02`m\x07 \x02\x02am\x07#\x02\x02bm\x07\"\x02\x02cd\x07\x15\x02\x02d" +
		"e\x07$\x02\x02em\x07\x16\x02\x02fg\x07\x15\x02\x02gh\x07!\x02\x02hm\x07" +
		"\x16\x02\x02ij\x07\x15\x02\x02jk\x07 \x02\x02km\x07\x16\x02\x02l`\x03" +
		"\x02\x02\x02la\x03\x02\x02\x02lb\x03\x02\x02\x02lc\x03\x02\x02\x02lf\x03" +
		"\x02\x02\x02li\x03\x02\x02\x02mo\x03\x02\x02\x02n_\x03\x02\x02\x02or\x03" +
		"\x02\x02\x02pn\x03\x02\x02\x02pq\x03\x02\x02\x02qt\x03\x02\x02\x02rp\x03" +
		"\x02\x02\x02s]\x03\x02\x02\x02st\x03\x02\x02\x02tu\x03\x02\x02\x02uv\x07" +
		"\x18\x02\x02v\v\x03\x02\x02\x02w{\x07\x05\x02\x02xz\x05\x04\x03\x02yx" +
		"\x03\x02\x02\x02z}\x03\x02\x02\x02{y\x03\x02\x02\x02{|\x03\x02\x02\x02" +
		"|~\x03\x02\x02\x02}{\x03\x02\x02\x02~\x7F\x07\x06\x02\x02\x7F\r\x03\x02" +
		"\x02\x02\x80\x81\x05*\x16\x02\x81\x82\x07\x19\x02\x02\x82\x0F\x03\x02" +
		"\x02\x02\x83\x84\x07\x07\x02\x02\x84\x85\x07\x17\x02\x02\x85\x86\x05\x1A" +
		"\x0E\x02\x86\x87\x07\x18\x02\x02\x87\x88\x07\x19\x02\x02\x88\x11\x03\x02" +
		"\x02\x02\x89\x8A\x07\x1E\x02\x02\x8A\x8B\x07\x15\x02\x02\x8B\x8C\t\x02" +
		"\x02\x02\x8C\x8E\x07\x16\x02\x02\x8D\x8F\x05\n\x06\x02\x8E\x8D\x03\x02" +
		"\x02\x02\x8E\x8F\x03\x02\x02\x02\x8F\x91\x03\x02\x02\x02\x90\x92\x05\n" +
		"\x06\x02\x91\x90\x03\x02\x02\x02\x91\x92\x03\x02\x02\x02\x92\x94\x03\x02" +
		"\x02\x02\x93\x95\x05\n\x06\x02\x94\x93\x03\x02\x02\x02\x94\x95\x03\x02" +
		"\x02\x02\x95\x96\x03\x02\x02\x02\x96\x97\x07\x19\x02\x02\x97\x13\x03\x02" +
		"\x02\x02\x98\x99\x07\x1F\x02\x02\x99\x9A\x05\n\x06\x02\x9A\x9B\x07\x19" +
		"\x02\x02\x9B\x15\x03\x02\x02\x02\x9C\x9D\x05\x18\r\x02\x9D\x17\x03\x02" +
		"\x02\x02\x9E\xA1\x05*\x16\x02\x9F\xA1\x05\x1A\x0E\x02\xA0\x9E\x03\x02" +
		"\x02\x02\xA0\x9F\x03\x02\x02\x02\xA1\x19\x03\x02\x02\x02\xA2\xA7\x05\x1C" +
		"\x0F\x02\xA3\xA4\x07\b\x02\x02\xA4\xA6\x05\x1C\x0F\x02\xA5\xA3\x03\x02" +
		"\x02\x02\xA6\xA9\x03\x02\x02\x02\xA7\xA5\x03\x02\x02\x02\xA7\xA8\x03\x02" +
		"\x02\x02\xA8\x1B\x03\x02\x02\x02\xA9\xA7\x03\x02\x02\x02\xAA\xAF\x05\x1E" +
		"\x10\x02\xAB\xAC\x07\t\x02\x02\xAC\xAE\x05\x1E\x10\x02\xAD\xAB\x03\x02" +
		"\x02\x02\xAE\xB1\x03\x02\x02\x02\xAF\xAD\x03\x02\x02\x02\xAF\xB0\x03\x02" +
		"\x02\x02\xB0\x1D\x03\x02\x02\x02\xB1\xAF\x03\x02\x02\x02\xB2\xB5\x05 " +
		"\x11\x02\xB3\xB4\t\x03\x02\x02\xB4\xB6\x05 \x11\x02\xB5\xB3\x03\x02\x02" +
		"\x02\xB5\xB6\x03\x02\x02\x02\xB6\x1F\x03\x02\x02\x02\xB7\xBC\x05\"\x12" +
		"\x02\xB8\xB9\t\x04\x02\x02\xB9\xBB\x05\"\x12\x02\xBA\xB8\x03\x02\x02\x02" +
		"\xBB\xBE\x03\x02\x02\x02\xBC\xBA\x03\x02\x02\x02\xBC\xBD\x03\x02\x02\x02" +
		"\xBD!\x03\x02\x02\x02\xBE\xBC\x03\x02\x02\x02\xBF\xC4\x05$\x13\x02\xC0" +
		"\xC1\t\x05\x02\x02\xC1\xC3\x05$\x13\x02\xC2\xC0\x03\x02\x02\x02\xC3\xC6" +
		"\x03\x02\x02\x02\xC4\xC2\x03\x02\x02\x02\xC4\xC5\x03\x02\x02\x02\xC5#" +
		"\x03\x02\x02\x02\xC6\xC4\x03\x02\x02\x02\xC7\xCB\x05&\x14\x02\xC8\xC9" +
		"\t\x06\x02\x02\xC9\xCB\x05$\x13\x02\xCA\xC7\x03\x02\x02\x02\xCA\xC8\x03" +
		"\x02\x02\x02\xCB%\x03\x02\x02\x02\xCC\xD2\x05(\x15\x02\xCD\xCE\x07\x17" +
		"\x02\x02\xCE\xCF\x05\x1A\x0E\x02\xCF\xD0\x07\x18\x02\x02\xD0\xD2\x03\x02" +
		"\x02\x02\xD1\xCC\x03\x02\x02\x02\xD1\xCD\x03\x02\x02\x02\xD2\'\x03\x02" +
		"\x02\x02\xD3\xD4\x03\x02\x02\x02\xD4)\x03\x02\x02\x02\xD5\xD6\x07\x15" +
		"\x02\x02\xD6\xD7\x07 \x02\x02\xD7\xD8\x07\x16\x02\x02\xD8\xE5\x07\x1B" +
		"\x02\x02\xD9\xDA\x07\x15\x02\x02\xDA\xDB\x07 \x02\x02\xDB\xE6\x07\x16" +
		"\x02\x02\xDC\xDD\x07\x15\x02\x02\xDD\xDE\x07!\x02\x02\xDE\xE6\x07\x16" +
		"\x02\x02\xDF\xE0\x07\x15\x02\x02\xE0\xE1\x07$\x02\x02\xE1\xE6\x07\x16" +
		"\x02\x02\xE2\xE6\x07#\x02\x02\xE3\xE6\x07\"\x02\x02\xE4\xE6\x07 \x02\x02" +
		"\xE5\xD9\x03\x02\x02\x02\xE5\xDC\x03\x02\x02\x02\xE5\xDF\x03\x02\x02\x02" +
		"\xE5\xE2\x03\x02\x02\x02\xE5\xE3\x03\x02\x02\x02\xE5\xE4\x03\x02\x02\x02" +
		"\xE6+\x03\x02\x02\x02\x18/6BKN]lps{\x8E\x91\x94\xA0\xA7\xAF\xB5\xBC\xC4" +
		"\xCA\xD1\xE5";
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
	public openFormStatement(): OpenFormStatementContext | undefined {
		return this.tryGetRuleContext(0, OpenFormStatementContext);
	}
	public saveFormStatement(): SaveFormStatementContext | undefined {
		return this.tryGetRuleContext(0, SaveFormStatementContext);
	}
	public assignStatement(): AssignStatementContext | undefined {
		return this.tryGetRuleContext(0, AssignStatementContext);
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
	public QuoteLiteral(): TerminalNode[];
	public QuoteLiteral(i: number): TerminalNode;
	public QuoteLiteral(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(kacoParser.QuoteLiteral);
		} else {
			return this.getToken(kacoParser.QuoteLiteral, i);
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
	public StringDotLiteral(): TerminalNode[];
	public StringDotLiteral(i: number): TerminalNode;
	public StringDotLiteral(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(kacoParser.StringDotLiteral);
		} else {
			return this.getToken(kacoParser.StringDotLiteral, i);
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
	public OpenBracket(): TerminalNode[];
	public OpenBracket(i: number): TerminalNode;
	public OpenBracket(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(kacoParser.OpenBracket);
		} else {
			return this.getToken(kacoParser.OpenBracket, i);
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
	public CloseBracket(): TerminalNode[];
	public CloseBracket(i: number): TerminalNode;
	public CloseBracket(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(kacoParser.CloseBracket);
		} else {
			return this.getToken(kacoParser.CloseBracket, i);
		}
	}
	public Assign(): TerminalNode { return this.getToken(kacoParser.Assign, 0); }
	public StringDotLiteral(): TerminalNode | undefined { return this.tryGetToken(kacoParser.StringDotLiteral, 0); }
	public QuoteLiteral(): TerminalNode | undefined { return this.tryGetToken(kacoParser.QuoteLiteral, 0); }
	public DecimalLiteral(): TerminalNode | undefined { return this.tryGetToken(kacoParser.DecimalLiteral, 0); }
	public BooleanLiteral(): TerminalNode | undefined { return this.tryGetToken(kacoParser.BooleanLiteral, 0); }
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


