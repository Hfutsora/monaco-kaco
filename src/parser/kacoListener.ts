// Generated from src/parser/kaco.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ProgramContext } from "./kacoParser";
import { StatementContext } from "./kacoParser";
import { FunctionStatementContext } from "./kacoParser";
import { IfStatementContext } from "./kacoParser";
import { BlockStatementContext } from "./kacoParser";
import { ExpressionSequenceContext } from "./kacoParser";
import { SingleExpressionContext } from "./kacoParser";
import { AssignStatementContext } from "./kacoParser";
import { QuoteEllipsisExprContext } from "./kacoParser";
import { OpenFormStatementContext } from "./kacoParser";
import { SaveFormStatementContext } from "./kacoParser";
import { CloseStatementContext } from "./kacoParser";
import { RefreshStatementContext } from "./kacoParser";
import { MessageStatementContext } from "./kacoParser";
import { ClickButtonStatementContext } from "./kacoParser";
import { GetComboDicStatementContext } from "./kacoParser";
import { ExpressionContext } from "./kacoParser";
import { SubTermContext } from "./kacoParser";
import { AddTermContext } from "./kacoParser";
import { DivTermContext } from "./kacoParser";
import { MulTermContext } from "./kacoParser";
import { ParnTermContext } from "./kacoParser";
import { AssignContext } from "./kacoParser";
import { AssignStartContext } from "./kacoParser";
import { CtrlQuoteLiteralContext } from "./kacoParser";
import { CtrlQuoteDotLiteralContext } from "./kacoParser";
import { CtrlQuoteParamLiteralContext } from "./kacoParser";
import { CtrlConstantLiteralContext } from "./kacoParser";
import { CommonLiteralContext } from "./kacoParser";
import { SqlLiteralContext } from "./kacoParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `kacoParser`.
 */
export interface kacoListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `kacoParser.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `kacoParser.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;

	/**
	 * Enter a parse tree produced by `kacoParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `kacoParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `kacoParser.functionStatement`.
	 * @param ctx the parse tree
	 */
	enterFunctionStatement?: (ctx: FunctionStatementContext) => void;
	/**
	 * Exit a parse tree produced by `kacoParser.functionStatement`.
	 * @param ctx the parse tree
	 */
	exitFunctionStatement?: (ctx: FunctionStatementContext) => void;

	/**
	 * Enter a parse tree produced by `kacoParser.ifStatement`.
	 * @param ctx the parse tree
	 */
	enterIfStatement?: (ctx: IfStatementContext) => void;
	/**
	 * Exit a parse tree produced by `kacoParser.ifStatement`.
	 * @param ctx the parse tree
	 */
	exitIfStatement?: (ctx: IfStatementContext) => void;

	/**
	 * Enter a parse tree produced by `kacoParser.blockStatement`.
	 * @param ctx the parse tree
	 */
	enterBlockStatement?: (ctx: BlockStatementContext) => void;
	/**
	 * Exit a parse tree produced by `kacoParser.blockStatement`.
	 * @param ctx the parse tree
	 */
	exitBlockStatement?: (ctx: BlockStatementContext) => void;

	/**
	 * Enter a parse tree produced by `kacoParser.expressionSequence`.
	 * @param ctx the parse tree
	 */
	enterExpressionSequence?: (ctx: ExpressionSequenceContext) => void;
	/**
	 * Exit a parse tree produced by `kacoParser.expressionSequence`.
	 * @param ctx the parse tree
	 */
	exitExpressionSequence?: (ctx: ExpressionSequenceContext) => void;

	/**
	 * Enter a parse tree produced by `kacoParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	enterSingleExpression?: (ctx: SingleExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `kacoParser.singleExpression`.
	 * @param ctx the parse tree
	 */
	exitSingleExpression?: (ctx: SingleExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `kacoParser.assignStatement`.
	 * @param ctx the parse tree
	 */
	enterAssignStatement?: (ctx: AssignStatementContext) => void;
	/**
	 * Exit a parse tree produced by `kacoParser.assignStatement`.
	 * @param ctx the parse tree
	 */
	exitAssignStatement?: (ctx: AssignStatementContext) => void;

	/**
	 * Enter a parse tree produced by `kacoParser.quoteEllipsisExpr`.
	 * @param ctx the parse tree
	 */
	enterQuoteEllipsisExpr?: (ctx: QuoteEllipsisExprContext) => void;
	/**
	 * Exit a parse tree produced by `kacoParser.quoteEllipsisExpr`.
	 * @param ctx the parse tree
	 */
	exitQuoteEllipsisExpr?: (ctx: QuoteEllipsisExprContext) => void;

	/**
	 * Enter a parse tree produced by `kacoParser.openFormStatement`.
	 * @param ctx the parse tree
	 */
	enterOpenFormStatement?: (ctx: OpenFormStatementContext) => void;
	/**
	 * Exit a parse tree produced by `kacoParser.openFormStatement`.
	 * @param ctx the parse tree
	 */
	exitOpenFormStatement?: (ctx: OpenFormStatementContext) => void;

	/**
	 * Enter a parse tree produced by `kacoParser.saveFormStatement`.
	 * @param ctx the parse tree
	 */
	enterSaveFormStatement?: (ctx: SaveFormStatementContext) => void;
	/**
	 * Exit a parse tree produced by `kacoParser.saveFormStatement`.
	 * @param ctx the parse tree
	 */
	exitSaveFormStatement?: (ctx: SaveFormStatementContext) => void;

	/**
	 * Enter a parse tree produced by `kacoParser.closeStatement`.
	 * @param ctx the parse tree
	 */
	enterCloseStatement?: (ctx: CloseStatementContext) => void;
	/**
	 * Exit a parse tree produced by `kacoParser.closeStatement`.
	 * @param ctx the parse tree
	 */
	exitCloseStatement?: (ctx: CloseStatementContext) => void;

	/**
	 * Enter a parse tree produced by `kacoParser.refreshStatement`.
	 * @param ctx the parse tree
	 */
	enterRefreshStatement?: (ctx: RefreshStatementContext) => void;
	/**
	 * Exit a parse tree produced by `kacoParser.refreshStatement`.
	 * @param ctx the parse tree
	 */
	exitRefreshStatement?: (ctx: RefreshStatementContext) => void;

	/**
	 * Enter a parse tree produced by `kacoParser.messageStatement`.
	 * @param ctx the parse tree
	 */
	enterMessageStatement?: (ctx: MessageStatementContext) => void;
	/**
	 * Exit a parse tree produced by `kacoParser.messageStatement`.
	 * @param ctx the parse tree
	 */
	exitMessageStatement?: (ctx: MessageStatementContext) => void;

	/**
	 * Enter a parse tree produced by `kacoParser.clickButtonStatement`.
	 * @param ctx the parse tree
	 */
	enterClickButtonStatement?: (ctx: ClickButtonStatementContext) => void;
	/**
	 * Exit a parse tree produced by `kacoParser.clickButtonStatement`.
	 * @param ctx the parse tree
	 */
	exitClickButtonStatement?: (ctx: ClickButtonStatementContext) => void;

	/**
	 * Enter a parse tree produced by `kacoParser.getComboDicStatement`.
	 * @param ctx the parse tree
	 */
	enterGetComboDicStatement?: (ctx: GetComboDicStatementContext) => void;
	/**
	 * Exit a parse tree produced by `kacoParser.getComboDicStatement`.
	 * @param ctx the parse tree
	 */
	exitGetComboDicStatement?: (ctx: GetComboDicStatementContext) => void;

	/**
	 * Enter a parse tree produced by `kacoParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `kacoParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `kacoParser.subTerm`.
	 * @param ctx the parse tree
	 */
	enterSubTerm?: (ctx: SubTermContext) => void;
	/**
	 * Exit a parse tree produced by `kacoParser.subTerm`.
	 * @param ctx the parse tree
	 */
	exitSubTerm?: (ctx: SubTermContext) => void;

	/**
	 * Enter a parse tree produced by `kacoParser.addTerm`.
	 * @param ctx the parse tree
	 */
	enterAddTerm?: (ctx: AddTermContext) => void;
	/**
	 * Exit a parse tree produced by `kacoParser.addTerm`.
	 * @param ctx the parse tree
	 */
	exitAddTerm?: (ctx: AddTermContext) => void;

	/**
	 * Enter a parse tree produced by `kacoParser.divTerm`.
	 * @param ctx the parse tree
	 */
	enterDivTerm?: (ctx: DivTermContext) => void;
	/**
	 * Exit a parse tree produced by `kacoParser.divTerm`.
	 * @param ctx the parse tree
	 */
	exitDivTerm?: (ctx: DivTermContext) => void;

	/**
	 * Enter a parse tree produced by `kacoParser.mulTerm`.
	 * @param ctx the parse tree
	 */
	enterMulTerm?: (ctx: MulTermContext) => void;
	/**
	 * Exit a parse tree produced by `kacoParser.mulTerm`.
	 * @param ctx the parse tree
	 */
	exitMulTerm?: (ctx: MulTermContext) => void;

	/**
	 * Enter a parse tree produced by `kacoParser.parnTerm`.
	 * @param ctx the parse tree
	 */
	enterParnTerm?: (ctx: ParnTermContext) => void;
	/**
	 * Exit a parse tree produced by `kacoParser.parnTerm`.
	 * @param ctx the parse tree
	 */
	exitParnTerm?: (ctx: ParnTermContext) => void;

	/**
	 * Enter a parse tree produced by `kacoParser.assign`.
	 * @param ctx the parse tree
	 */
	enterAssign?: (ctx: AssignContext) => void;
	/**
	 * Exit a parse tree produced by `kacoParser.assign`.
	 * @param ctx the parse tree
	 */
	exitAssign?: (ctx: AssignContext) => void;

	/**
	 * Enter a parse tree produced by `kacoParser.assignStart`.
	 * @param ctx the parse tree
	 */
	enterAssignStart?: (ctx: AssignStartContext) => void;
	/**
	 * Exit a parse tree produced by `kacoParser.assignStart`.
	 * @param ctx the parse tree
	 */
	exitAssignStart?: (ctx: AssignStartContext) => void;

	/**
	 * Enter a parse tree produced by `kacoParser.ctrlQuoteLiteral`.
	 * @param ctx the parse tree
	 */
	enterCtrlQuoteLiteral?: (ctx: CtrlQuoteLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `kacoParser.ctrlQuoteLiteral`.
	 * @param ctx the parse tree
	 */
	exitCtrlQuoteLiteral?: (ctx: CtrlQuoteLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `kacoParser.ctrlQuoteDotLiteral`.
	 * @param ctx the parse tree
	 */
	enterCtrlQuoteDotLiteral?: (ctx: CtrlQuoteDotLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `kacoParser.ctrlQuoteDotLiteral`.
	 * @param ctx the parse tree
	 */
	exitCtrlQuoteDotLiteral?: (ctx: CtrlQuoteDotLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `kacoParser.ctrlQuoteParamLiteral`.
	 * @param ctx the parse tree
	 */
	enterCtrlQuoteParamLiteral?: (ctx: CtrlQuoteParamLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `kacoParser.ctrlQuoteParamLiteral`.
	 * @param ctx the parse tree
	 */
	exitCtrlQuoteParamLiteral?: (ctx: CtrlQuoteParamLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `kacoParser.ctrlConstantLiteral`.
	 * @param ctx the parse tree
	 */
	enterCtrlConstantLiteral?: (ctx: CtrlConstantLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `kacoParser.ctrlConstantLiteral`.
	 * @param ctx the parse tree
	 */
	exitCtrlConstantLiteral?: (ctx: CtrlConstantLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `kacoParser.commonLiteral`.
	 * @param ctx the parse tree
	 */
	enterCommonLiteral?: (ctx: CommonLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `kacoParser.commonLiteral`.
	 * @param ctx the parse tree
	 */
	exitCommonLiteral?: (ctx: CommonLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `kacoParser.sqlLiteral`.
	 * @param ctx the parse tree
	 */
	enterSqlLiteral?: (ctx: SqlLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `kacoParser.sqlLiteral`.
	 * @param ctx the parse tree
	 */
	exitSqlLiteral?: (ctx: SqlLiteralContext) => void;
}

