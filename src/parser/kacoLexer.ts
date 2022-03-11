// Generated from src/parser/kaco.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class kacoLexer extends Lexer {
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

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
		"T__9", "T__10", "T__11", "T__12", "T__13", "T__14", "T__15", "T__16", 
		"T__17", "OpenBracket", "CloseBracket", "OpenParen", "CloseParen", "SemiColon", 
		"Comma", "Assign", "Dot", "Ellipsis", "OpenForm", "SaveForm", "StringLiteral", 
		"StringDotLiteral", "BooleanLiteral", "DecimalLiteral", "QuoteLiteral", 
		"Decimal", "NonZeroDigit", "DigitChar", "LineComment", "WhiteSpace",
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
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(kacoLexer._LITERAL_NAMES, kacoLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return kacoLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(kacoLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "kaco.g4"; }

	// @Override
	public get ruleNames(): string[] { return kacoLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return kacoLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return kacoLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return kacoLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\'\u010F\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
		"\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
		"\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
		"\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t" +
		"\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t" +
		"\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t" +
		"\"\x04#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x03\x02\x03\x02\x03" +
		"\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03" +
		"\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03" +
		"\x07\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\v\x03\v" +
		"\x03\f\x03\f\x03\f\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F" +
		"\x03\x10\x03\x10\x03\x11\x03\x11\x03\x12\x03\x12\x03\x13\x03\x13\x03\x14" +
		"\x03\x14\x03\x15\x03\x15\x03\x16\x03\x16\x03\x17\x03\x17\x03\x18\x03\x18" +
		"\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C" +
		"\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D" +
		"\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E" +
		"\x03\x1E\x03\x1F\x03\x1F\x07\x1F\xAC\n\x1F\f\x1F\x0E\x1F\xAF\v\x1F\x03" +
		"\x1F\x03\x1F\x03 \x03 \x03 \x07 \xB6\n \f \x0E \xB9\v \x03!\x03!\x03!" +
		"\x03!\x03!\x03!\x03!\x03!\x03!\x05!\xC4\n!\x03\"\x03\"\x03#\x03#\x03#" +
		"\x03#\x03#\x03#\x03#\x03#\x07#\xD0\n#\f#\x0E#\xD3\v#\x05#\xD5\n#\x03$" +
		"\x03$\x03$\x07$\xDA\n$\f$\x0E$\xDD\v$\x03$\x05$\xE0\n$\x03$\x03$\x07$" +
		"\xE4\n$\f$\x0E$\xE7\v$\x03$\x03$\x07$\xEB\n$\f$\x0E$\xEE\v$\x03$\x05$" +
		"\xF1\n$\x05$\xF3\n$\x03%\x03%\x03&\x03&\x03&\x05&\xFA\n&\x03\'\x03\'\x03" +
		"\'\x03\'\x07\'\u0100\n\'\f\'\x0E\'\u0103\v\'\x03\'\x05\'\u0106\n\'\x03" +
		"\'\x03\'\x03\'\x03\'\x03(\x03(\x03(\x03(\x03\xAD\x02\x02)\x03\x02\x03" +
		"\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02" +
		"\n\x13\x02\v\x15\x02\f\x17\x02\r\x19\x02\x0E\x1B\x02\x0F\x1D\x02\x10\x1F" +
		"\x02\x11!\x02\x12#\x02\x13%\x02\x14\'\x02\x15)\x02\x16+\x02\x17-\x02\x18" +
		"/\x02\x191\x02\x1A3\x02\x1B5\x02\x1C7\x02\x1D9\x02\x1E;\x02\x1F=\x02 " +
		"?\x02!A\x02\"C\x02#E\x02$G\x02%I\x02\x02K\x02\x02M\x02&O\x02\'\x03\x02" +
		"\x05\x05\x02\f\f\x0F\x0F^^\x04\x02\f\f\x0F\x0F\x05\x02\v\f\x0F\x0F\"\"" +
		"\x02\u011B\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03" +
		"\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02" +
		"\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02" +
		"\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02" +
		"\x02\x02\x02\x1B\x03\x02\x02\x02\x02\x1D\x03\x02\x02\x02\x02\x1F\x03\x02" +
		"\x02\x02\x02!\x03\x02\x02\x02\x02#\x03\x02\x02\x02\x02%\x03\x02\x02\x02" +
		"\x02\'\x03\x02\x02\x02\x02)\x03\x02\x02\x02\x02+\x03\x02\x02\x02\x02-" +
		"\x03\x02\x02\x02\x02/\x03\x02\x02\x02\x021\x03\x02\x02\x02\x023\x03\x02" +
		"\x02\x02\x025\x03\x02\x02\x02\x027\x03\x02\x02\x02\x029\x03\x02\x02\x02" +
		"\x02;\x03\x02\x02\x02\x02=\x03\x02\x02\x02\x02?\x03\x02\x02\x02\x02A\x03" +
		"\x02\x02\x02\x02C\x03\x02\x02\x02\x02E\x03\x02\x02\x02\x02G\x03\x02\x02" +
		"\x02\x02M\x03\x02\x02\x02\x02O\x03\x02\x02\x02\x03Q\x03\x02\x02\x02\x05" +
		"T\x03\x02\x02\x02\x07Y\x03\x02\x02\x02\t[\x03\x02\x02\x02\v]\x03\x02\x02" +
		"\x02\rc\x03\x02\x02\x02\x0Ff\x03\x02\x02\x02\x11i\x03\x02\x02\x02\x13" +
		"l\x03\x02\x02\x02\x15o\x03\x02\x02\x02\x17q\x03\x02\x02\x02\x19t\x03\x02" +
		"\x02\x02\x1Bv\x03\x02\x02\x02\x1Dy\x03\x02\x02\x02\x1F{\x03\x02\x02\x02" +
		"!}\x03\x02\x02\x02#\x7F\x03\x02\x02\x02%\x81\x03\x02\x02\x02\'\x83\x03" +
		"\x02\x02\x02)\x85\x03\x02\x02\x02+\x87\x03\x02\x02\x02-\x89\x03\x02\x02" +
		"\x02/\x8B\x03\x02\x02\x021\x8D\x03\x02\x02\x023\x8F\x03\x02\x02\x025\x91" +
		"\x03\x02\x02\x027\x93\x03\x02\x02\x029\x97\x03\x02\x02\x02;\xA0\x03\x02" +
		"\x02\x02=\xA9\x03\x02\x02\x02?\xB2\x03\x02\x02\x02A\xC3\x03\x02\x02\x02" +
		"C\xC5\x03\x02\x02\x02E\xD4\x03\x02\x02\x02G\xF2\x03\x02\x02\x02I\xF4\x03" +
		"\x02\x02\x02K\xF9\x03\x02\x02\x02M\xFB\x03\x02\x02\x02O\u010B\x03\x02" +
		"\x02\x02QR\x07k\x02\x02RS\x07h\x02\x02S\x04\x03\x02\x02\x02TU\x07g\x02" +
		"\x02UV\x07n\x02\x02VW\x07u\x02\x02WX\x07g\x02\x02X\x06\x03\x02\x02\x02" +
		"YZ\x07}\x02\x02Z\b\x03\x02\x02\x02[\\\x07\x7F\x02\x02\\\n\x03\x02\x02" +
		"\x02]^\x07r\x02\x02^_\x07t\x02\x02_`\x07k\x02\x02`a\x07p\x02\x02ab\x07" +
		"v\x02\x02b\f\x03\x02\x02\x02cd\x07~\x02\x02de\x07~\x02\x02e\x0E\x03\x02" +
		"\x02\x02fg\x07(\x02\x02gh\x07(\x02\x02h\x10\x03\x02\x02\x02ij\x07?\x02" +
		"\x02jk\x07?\x02\x02k\x12\x03\x02\x02\x02lm\x07#\x02\x02mn\x07?\x02\x02" +
		"n\x14\x03\x02\x02\x02op\x07>\x02\x02p\x16\x03\x02\x02\x02qr\x07>\x02\x02" +
		"rs\x07?\x02\x02s\x18\x03\x02\x02\x02tu\x07@\x02\x02u\x1A\x03\x02\x02\x02" +
		"vw\x07@\x02\x02wx\x07?\x02\x02x\x1C\x03\x02\x02\x02yz\x07-\x02\x02z\x1E" +
		"\x03\x02\x02\x02{|\x07/\x02\x02| \x03\x02\x02\x02}~\x07,\x02\x02~\"\x03" +
		"\x02\x02\x02\x7F\x80\x071\x02\x02\x80$\x03\x02\x02\x02\x81\x82\x07#\x02" +
		"\x02\x82&\x03\x02\x02\x02\x83\x84\x07]\x02\x02\x84(\x03\x02\x02\x02\x85" +
		"\x86\x07_\x02\x02\x86*\x03\x02\x02\x02\x87\x88\x07*\x02\x02\x88,\x03\x02" +
		"\x02\x02\x89\x8A\x07+\x02\x02\x8A.\x03\x02\x02\x02\x8B\x8C\x07=\x02\x02" +
		"\x8C0\x03\x02\x02\x02\x8D\x8E\x07.\x02\x02\x8E2\x03\x02\x02\x02\x8F\x90" +
		"\x07?\x02\x02\x904\x03\x02\x02\x02\x91\x92\x070\x02\x02\x926\x03\x02\x02" +
		"\x02\x93\x94\x070\x02\x02\x94\x95\x070\x02\x02\x95\x96\x070\x02\x02\x96" +
		"8\x03\x02\x02\x02\x97\x98\x07Q\x02\x02\x98\x99\x07r\x02\x02\x99\x9A\x07" +
		"g\x02\x02\x9A\x9B\x07p\x02\x02\x9B\x9C\x07H\x02\x02\x9C\x9D\x07q\x02\x02" +
		"\x9D\x9E\x07t\x02\x02\x9E\x9F\x07o\x02\x02\x9F:\x03\x02\x02\x02\xA0\xA1" +
		"\x07U\x02\x02\xA1\xA2\x07c\x02\x02\xA2\xA3\x07x\x02\x02\xA3\xA4\x07g\x02" +
		"\x02\xA4\xA5\x07H\x02\x02\xA5\xA6\x07q\x02\x02\xA6\xA7\x07t\x02\x02\xA7" +
		"\xA8\x07o\x02\x02\xA8<\x03\x02\x02\x02\xA9\xAD\x07)\x02\x02\xAA\xAC\n" +
		"\x02\x02\x02\xAB\xAA\x03\x02\x02\x02\xAC\xAF\x03\x02\x02\x02\xAD\xAE\x03" +
		"\x02\x02\x02\xAD\xAB\x03\x02\x02\x02\xAE\xB0\x03\x02\x02\x02\xAF\xAD\x03" +
		"\x02\x02\x02\xB0\xB1\x07)\x02\x02\xB1>\x03\x02\x02\x02\xB2\xB7\x05=\x1F" +
		"\x02\xB3\xB4\x070\x02\x02\xB4\xB6\x05=\x1F\x02\xB5\xB3\x03\x02\x02\x02" +
		"\xB6\xB9\x03\x02\x02\x02\xB7\xB5\x03\x02\x02\x02\xB7\xB8\x03\x02\x02\x02" +
		"\xB8@\x03\x02\x02\x02\xB9\xB7\x03\x02\x02\x02\xBA\xBB\x07v\x02\x02\xBB" +
		"\xBC\x07t\x02\x02\xBC\xBD\x07w\x02\x02\xBD\xC4\x07g\x02\x02\xBE\xBF\x07" +
		"h\x02\x02\xBF\xC0\x07c\x02\x02\xC0\xC1\x07n\x02\x02\xC1\xC2\x07u\x02\x02" +
		"\xC2\xC4\x07g\x02\x02\xC3\xBA\x03\x02\x02\x02\xC3\xBE\x03\x02\x02\x02" +
		"\xC4B\x03\x02\x02\x02\xC5\xC6\x05G$\x02\xC6D\x03\x02\x02\x02\xC7\xC8\x07" +
		"B\x02\x02\xC8\xC9\x05O(\x02\xC9\xCA\x072\x02\x02\xCA\xD5\x03\x02\x02\x02" +
		"\xCB\xCC\x07B\x02\x02\xCC\xCD\x05O(\x02\xCD\xD1\x05I%\x02\xCE\xD0\x05" +
		"K&\x02\xCF\xCE\x03\x02\x02\x02\xD0\xD3\x03\x02\x02\x02\xD1\xCF\x03\x02" +
		"\x02\x02\xD1\xD2\x03\x02\x02\x02\xD2\xD5\x03\x02\x02\x02\xD3\xD1\x03\x02" +
		"\x02\x02\xD4\xC7\x03\x02\x02\x02\xD4\xCB\x03\x02\x02\x02\xD5F\x03\x02" +
		"\x02\x02\xD6\xDF\x072\x02\x02\xD7\xDB\x070\x02\x02\xD8\xDA\x05K&\x02\xD9" +
		"\xD8\x03\x02\x02\x02\xDA\xDD\x03\x02\x02\x02\xDB\xD9\x03\x02\x02\x02\xDB" +
		"\xDC\x03\x02\x02\x02\xDC\xDE\x03\x02\x02\x02\xDD\xDB\x03\x02\x02\x02\xDE" +
		"\xE0\x05I%\x02\xDF\xD7\x03\x02\x02\x02\xDF\xE0\x03\x02\x02\x02\xE0\xF3" +
		"\x03\x02\x02\x02\xE1\xE5\x05I%\x02\xE2\xE4\x05K&\x02\xE3\xE2\x03\x02\x02" +
		"\x02\xE4\xE7\x03\x02\x02\x02\xE5\xE3\x03\x02\x02\x02\xE5\xE6\x03\x02\x02" +
		"\x02\xE6\xF0\x03\x02\x02\x02\xE7\xE5\x03\x02\x02\x02\xE8\xEC\x070\x02" +
		"\x02\xE9\xEB\x05K&\x02\xEA\xE9\x03\x02\x02\x02\xEB\xEE\x03\x02\x02\x02" +
		"\xEC\xEA\x03\x02\x02\x02\xEC\xED\x03\x02\x02\x02\xED\xEF\x03\x02\x02\x02" +
		"\xEE\xEC\x03\x02\x02\x02\xEF\xF1\x05I%\x02\xF0\xE8\x03\x02\x02\x02\xF0" +
		"\xF1\x03\x02\x02\x02\xF1\xF3\x03\x02\x02\x02\xF2\xD6\x03\x02\x02\x02\xF2" +
		"\xE1\x03\x02\x02\x02\xF3H\x03\x02\x02\x02\xF4\xF5\x043;\x02\xF5J\x03\x02" +
		"\x02\x02\xF6\xFA\x072\x02\x02\xF7\xFA\x05I%\x02\xF8\xFA\x07a\x02\x02\xF9" +
		"\xF6\x03\x02\x02\x02\xF9\xF7\x03\x02\x02\x02\xF9\xF8\x03\x02\x02\x02\xFA" +
		"L\x03\x02\x02\x02\xFB\xFC\x071\x02\x02\xFC\xFD\x071\x02\x02\xFD\u0101" +
		"\x03\x02\x02\x02\xFE\u0100\n\x03\x02\x02\xFF\xFE\x03\x02\x02\x02\u0100" +
		"\u0103\x03\x02\x02\x02\u0101\xFF\x03\x02\x02\x02\u0101\u0102\x03\x02\x02" +
		"\x02\u0102\u0105\x03\x02\x02\x02\u0103\u0101\x03\x02\x02\x02\u0104\u0106" +
		"\x07\x0F\x02\x02\u0105\u0104\x03\x02\x02\x02\u0105\u0106\x03\x02\x02\x02" +
		"\u0106\u0107\x03\x02\x02\x02\u0107\u0108\x07\f\x02\x02\u0108\u0109\x03" +
		"\x02\x02\x02\u0109\u010A\b\'\x02\x02\u010AN\x03\x02\x02\x02\u010B\u010C" +
		"\t\x04\x02\x02\u010C\u010D\x03\x02\x02\x02\u010D\u010E\b(\x02\x02\u010E" +
		"P\x03\x02\x02\x02\x11\x02\xAD\xB7\xC3\xD1\xD4\xDB\xDF\xE5\xEC\xF0\xF2" +
		"\xF9\u0101\u0105\x03\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!kacoLexer.__ATN) {
			kacoLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(kacoLexer._serializedATN));
		}

		return kacoLexer.__ATN;
	}

}

