// Generated from src/parser/kaco.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ProgramContext } from "./kacoParser";
import { StatementContext } from "./kacoParser";
import { IfStatementContext } from "./kacoParser";
import { QuoteExprContext } from "./kacoParser";
import { QuoteEllipsisExprContext } from "./kacoParser";
import { BlockStatementContext } from "./kacoParser";
import { AssignStatementContext } from "./kacoParser";
import { PrintStatementContext } from "./kacoParser";
import { OpenFormStatementContext } from "./kacoParser";
import { SaveFormStatementContext } from "./kacoParser";
import { CommonExpressionContext } from "./kacoParser";
import { AssignAbleStatementContext } from "./kacoParser";
import { ExpressionContext } from "./kacoParser";
import { AndAndExpressionContext } from "./kacoParser";
import { CmpExpressionContext } from "./kacoParser";
import { AddExpressionContext } from "./kacoParser";
import { MulExpressionContext } from "./kacoParser";
import { UnaryExpressionContext } from "./kacoParser";
import { PrimaryExpressionContext } from "./kacoParser";
import { VariableExpressionContext } from "./kacoParser";
import { AssignContext } from "./kacoParser";


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
	 * Enter a parse tree produced by `kacoParser.quoteExpr`.
	 * @param ctx the parse tree
	 */
	enterQuoteExpr?: (ctx: QuoteExprContext) => void;
	/**
	 * Exit a parse tree produced by `kacoParser.quoteExpr`.
	 * @param ctx the parse tree
	 */
	exitQuoteExpr?: (ctx: QuoteExprContext) => void;

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
	 * Enter a parse tree produced by `kacoParser.printStatement`.
	 * @param ctx the parse tree
	 */
	enterPrintStatement?: (ctx: PrintStatementContext) => void;
	/**
	 * Exit a parse tree produced by `kacoParser.printStatement`.
	 * @param ctx the parse tree
	 */
	exitPrintStatement?: (ctx: PrintStatementContext) => void;

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
	 * Enter a parse tree produced by `kacoParser.commonExpression`.
	 * @param ctx the parse tree
	 */
	enterCommonExpression?: (ctx: CommonExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `kacoParser.commonExpression`.
	 * @param ctx the parse tree
	 */
	exitCommonExpression?: (ctx: CommonExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `kacoParser.assignAbleStatement`.
	 * @param ctx the parse tree
	 */
	enterAssignAbleStatement?: (ctx: AssignAbleStatementContext) => void;
	/**
	 * Exit a parse tree produced by `kacoParser.assignAbleStatement`.
	 * @param ctx the parse tree
	 */
	exitAssignAbleStatement?: (ctx: AssignAbleStatementContext) => void;

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
	 * Enter a parse tree produced by `kacoParser.andAndExpression`.
	 * @param ctx the parse tree
	 */
	enterAndAndExpression?: (ctx: AndAndExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `kacoParser.andAndExpression`.
	 * @param ctx the parse tree
	 */
	exitAndAndExpression?: (ctx: AndAndExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `kacoParser.cmpExpression`.
	 * @param ctx the parse tree
	 */
	enterCmpExpression?: (ctx: CmpExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `kacoParser.cmpExpression`.
	 * @param ctx the parse tree
	 */
	exitCmpExpression?: (ctx: CmpExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `kacoParser.addExpression`.
	 * @param ctx the parse tree
	 */
	enterAddExpression?: (ctx: AddExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `kacoParser.addExpression`.
	 * @param ctx the parse tree
	 */
	exitAddExpression?: (ctx: AddExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `kacoParser.mulExpression`.
	 * @param ctx the parse tree
	 */
	enterMulExpression?: (ctx: MulExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `kacoParser.mulExpression`.
	 * @param ctx the parse tree
	 */
	exitMulExpression?: (ctx: MulExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `kacoParser.unaryExpression`.
	 * @param ctx the parse tree
	 */
	enterUnaryExpression?: (ctx: UnaryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `kacoParser.unaryExpression`.
	 * @param ctx the parse tree
	 */
	exitUnaryExpression?: (ctx: UnaryExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `kacoParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterPrimaryExpression?: (ctx: PrimaryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `kacoParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitPrimaryExpression?: (ctx: PrimaryExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `kacoParser.variableExpression`.
	 * @param ctx the parse tree
	 */
	enterVariableExpression?: (ctx: VariableExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `kacoParser.variableExpression`.
	 * @param ctx the parse tree
	 */
	exitVariableExpression?: (ctx: VariableExpressionContext) => void;

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
}

