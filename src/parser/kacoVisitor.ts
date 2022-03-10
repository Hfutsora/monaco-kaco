// Generated from src/parser/kaco.g4 by ANTLR 4.9.0-SNAPSHOT

import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor';

import { ProgramContext } from './kacoParser';
import { StatementContext } from './kacoParser';
import { IfStatementContext } from './kacoParser';
import { QuoteExprContext } from './kacoParser';
import { QuoteEllipsisExprContext } from './kacoParser';
import { BlockStatementContext } from './kacoParser';
import { AssignStatementContext } from './kacoParser';
import { PrintStatementContext } from './kacoParser';
import { OpenFormStatementContext } from './kacoParser';
import { CommonExpressionContext } from './kacoParser';
import { AssignAbleStatementContext } from './kacoParser';
import { ExpressionContext } from './kacoParser';
import { AndAndExpressionContext } from './kacoParser';
import { CmpExpressionContext } from './kacoParser';
import { AddExpressionContext } from './kacoParser';
import { MulExpressionContext } from './kacoParser';
import { UnaryExpressionContext } from './kacoParser';
import { PrimaryExpressionContext } from './kacoParser';
import { VariableExpressionContext } from './kacoParser';
import { AssignContext } from './kacoParser';

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
	 * Visit a parse tree produced by `kacoParser.ifStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfStatement?: (ctx: IfStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `kacoParser.quoteExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuoteExpr?: (ctx: QuoteExprContext) => Result;

	/**
	 * Visit a parse tree produced by `kacoParser.quoteEllipsisExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuoteEllipsisExpr?: (ctx: QuoteEllipsisExprContext) => Result;

	/**
	 * Visit a parse tree produced by `kacoParser.blockStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlockStatement?: (ctx: BlockStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `kacoParser.assignStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignStatement?: (ctx: AssignStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `kacoParser.printStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrintStatement?: (ctx: PrintStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `kacoParser.openFormStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOpenFormStatement?: (ctx: OpenFormStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `kacoParser.commonExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommonExpression?: (ctx: CommonExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `kacoParser.assignAbleStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignAbleStatement?: (ctx: AssignAbleStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `kacoParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `kacoParser.andAndExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAndAndExpression?: (ctx: AndAndExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `kacoParser.cmpExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCmpExpression?: (ctx: CmpExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `kacoParser.addExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddExpression?: (ctx: AddExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `kacoParser.mulExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMulExpression?: (ctx: MulExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `kacoParser.unaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryExpression?: (ctx: UnaryExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `kacoParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimaryExpression?: (ctx: PrimaryExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `kacoParser.variableExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableExpression?: (ctx: VariableExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `kacoParser.assign`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssign?: (ctx: AssignContext) => Result;
}

