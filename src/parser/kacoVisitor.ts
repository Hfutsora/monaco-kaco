// Generated from src/parser/kaco.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `kacoParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface kacoVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `kacoParser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram?: (ctx: ProgramContext) => Result;

	/**
	 * Visit a parse tree produced by `kacoParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `kacoParser.functionStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionStatement?: (ctx: FunctionStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `kacoParser.ifStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfStatement?: (ctx: IfStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `kacoParser.blockStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlockStatement?: (ctx: BlockStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `kacoParser.expressionSequence`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionSequence?: (ctx: ExpressionSequenceContext) => Result;

	/**
	 * Visit a parse tree produced by `kacoParser.singleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSingleExpression?: (ctx: SingleExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `kacoParser.assignStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignStatement?: (ctx: AssignStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `kacoParser.quoteEllipsisExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuoteEllipsisExpr?: (ctx: QuoteEllipsisExprContext) => Result;

	/**
	 * Visit a parse tree produced by `kacoParser.openFormStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOpenFormStatement?: (ctx: OpenFormStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `kacoParser.saveFormStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSaveFormStatement?: (ctx: SaveFormStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `kacoParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `kacoParser.subTerm`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubTerm?: (ctx: SubTermContext) => Result;

	/**
	 * Visit a parse tree produced by `kacoParser.addTerm`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddTerm?: (ctx: AddTermContext) => Result;

	/**
	 * Visit a parse tree produced by `kacoParser.divTerm`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDivTerm?: (ctx: DivTermContext) => Result;

	/**
	 * Visit a parse tree produced by `kacoParser.mulTerm`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMulTerm?: (ctx: MulTermContext) => Result;

	/**
	 * Visit a parse tree produced by `kacoParser.parnTerm`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParnTerm?: (ctx: ParnTermContext) => Result;

	/**
	 * Visit a parse tree produced by `kacoParser.assign`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssign?: (ctx: AssignContext) => Result;

	/**
	 * Visit a parse tree produced by `kacoParser.assignStart`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignStart?: (ctx: AssignStartContext) => Result;

	/**
	 * Visit a parse tree produced by `kacoParser.ctrlQuoteLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCtrlQuoteLiteral?: (ctx: CtrlQuoteLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `kacoParser.ctrlQuoteDotLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCtrlQuoteDotLiteral?: (ctx: CtrlQuoteDotLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `kacoParser.ctrlQuoteParamLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCtrlQuoteParamLiteral?: (ctx: CtrlQuoteParamLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `kacoParser.ctrlConstantLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCtrlConstantLiteral?: (ctx: CtrlConstantLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `kacoParser.commonLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommonLiteral?: (ctx: CommonLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `kacoParser.sqlLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSqlLiteral?: (ctx: SqlLiteralContext) => Result;
}

