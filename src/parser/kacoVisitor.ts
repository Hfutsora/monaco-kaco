// Generated from src/parser/kaco.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { ProgramContext } from "./kacoParser";
import { StatementContext } from "./kacoParser";
import { FunctionStatementContext } from "./kacoParser";
import { IfStatementContext } from "./kacoParser";
import { WhileStatementContext } from "./kacoParser";
import { BlockStatementContext } from "./kacoParser";
import { ExpressionSequenceContext } from "./kacoParser";
import { SingleExpressionContext } from "./kacoParser";
import { AssignStatementContext } from "./kacoParser";
import { QuoteEllipsisExprContext } from "./kacoParser";
import { QueryDataQuoteEllipsisExprContext } from "./kacoParser";
import { QuoteNaturalExprContext } from "./kacoParser";
import { OpenFormStatementContext } from "./kacoParser";
import { SaveFormStatementContext } from "./kacoParser";
import { CloseStatementContext } from "./kacoParser";
import { RefreshStatementContext } from "./kacoParser";
import { MessageStatementContext } from "./kacoParser";
import { ClickButtonStatementContext } from "./kacoParser";
import { GetComboDicStatementContext } from "./kacoParser";
import { QueryDataStatementContext } from "./kacoParser";
import { CarryDataStatementContext } from "./kacoParser";
import { SqlExecuteStatementContext } from "./kacoParser";
import { GetCoderStatementContext } from "./kacoParser";
import { SetCoderStatementContext } from "./kacoParser";
import { ResetCtrlValueStatementContext } from "./kacoParser";
import { SaveLastValueStatementContext } from "./kacoParser";
import { LoadLastValueStatementContext } from "./kacoParser";
import { SetVisiableStatementContext } from "./kacoParser";
import { SetEnableStatementContext } from "./kacoParser";
import { SetFocusStatementContext } from "./kacoParser";
import { SetColorStatementContext } from "./kacoParser";
import { ChangeTabStatementContext } from "./kacoParser";
import { SwitchDisplayStatementContext } from "./kacoParser";
import { StringSubStatementContext } from "./kacoParser";
import { StringLenStatementContext } from "./kacoParser";
import { StringStrStatementContext } from "./kacoParser";
import { StringRepStatementContext } from "./kacoParser";
import { StringCatStatementContext } from "./kacoParser";
import { EncodeBase64StatementContext } from "./kacoParser";
import { DecodeBase64StatementContext } from "./kacoParser";
import { GetGridRowsStatementContext } from "./kacoParser";
import { AddGridRowStatementContext } from "./kacoParser";
import { DelGridRowStatementContext } from "./kacoParser";
import { SelGridRowStatementContext } from "./kacoParser";
import { ExportXlsStatementContext } from "./kacoParser";
import { ImportXlsStatementContext } from "./kacoParser";
import { FlowTranStatementContext } from "./kacoParser";
import { FlowSaveStatementContext } from "./kacoParser";
import { FlowFreshStatementContext } from "./kacoParser";
import { FlowSendStatementContext } from "./kacoParser";
import { FlowBackStatementContext } from "./kacoParser";
import { FlowBack2StatementContext } from "./kacoParser";
import { FlowMendStatementContext } from "./kacoParser";
import { FlowPrintStatementContext } from "./kacoParser";
import { FlowFormStatementContext } from "./kacoParser";
import { FlowQueryStatementContext } from "./kacoParser";
import { TaskHangStatementContext } from "./kacoParser";
import { TaskFreeStatementContext } from "./kacoParser";
import { FlowTestStatementContext } from "./kacoParser";
import { FlowDropStatementContext } from "./kacoParser";
import { FlowCloseStatementContext } from "./kacoParser";
import { FlowAgentStatementContext } from "./kacoParser";
import { AgentCancelStatementContext } from "./kacoParser";
import { FlowRefactStatementContext } from "./kacoParser";
import { TestCommitStatementContext } from "./kacoParser";
import { ChangeInstFlowStatementContext } from "./kacoParser";
import { InstFlowStatementContext } from "./kacoParser";
import { TaskDeleteStatementContext } from "./kacoParser";
import { TachSendStatementContext } from "./kacoParser";
import { CommWordStatementContext } from "./kacoParser";
import { ExecFuncStatementContext } from "./kacoParser";
import { CmdBreakStatementContext } from "./kacoParser";
import { OpenUrlStatementContext } from "./kacoParser";
import { OpenLayoutStatementContext } from "./kacoParser";
import { PrintStatementContext } from "./kacoParser";
import { RegeSignStatementContext } from "./kacoParser";
import { RsetPswdSignStatementContext } from "./kacoParser";
import { ExtendStatementContext } from "./kacoParser";
import { ExpressionContext } from "./kacoParser";
import { SubTermContext } from "./kacoParser";
import { AddTermContext } from "./kacoParser";
import { DivTermContext } from "./kacoParser";
import { MulTermContext } from "./kacoParser";
import { SupplierStatementContext } from "./kacoParser";
import { ParnTermContext } from "./kacoParser";
import { AssignContext } from "./kacoParser";
import { AssignStartContext } from "./kacoParser";
import { CtrlQuoteLiteralContext } from "./kacoParser";
import { CtrlQuoteDotLiteralContext } from "./kacoParser";
import { CtrlQuoteParamLiteralContext } from "./kacoParser";
import { CtrlConstantLiteralContext } from "./kacoParser";
import { CommonLiteralContext } from "./kacoParser";
import { NegationExprContext } from "./kacoParser";
import { SqlTemplateExprContext } from "./kacoParser";
import { SqlStatementContext } from "./kacoParser";
import { SqlQuoteStatementContext } from "./kacoParser";


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
	 * Visit a parse tree produced by `kacoParser.whileStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhileStatement?: (ctx: WhileStatementContext) => Result;

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
	 * Visit a parse tree produced by `kacoParser.queryDataQuoteEllipsisExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQueryDataQuoteEllipsisExpr?: (ctx: QueryDataQuoteEllipsisExprContext) => Result;

	/**
	 * Visit a parse tree produced by `kacoParser.quoteNaturalExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuoteNaturalExpr?: (ctx: QuoteNaturalExprContext) => Result;

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
	 * Visit a parse tree produced by `kacoParser.closeStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCloseStatement?: (ctx: CloseStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `kacoParser.refreshStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRefreshStatement?: (ctx: RefreshStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `kacoParser.messageStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMessageStatement?: (ctx: MessageStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `kacoParser.clickButtonStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClickButtonStatement?: (ctx: ClickButtonStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `kacoParser.getComboDicStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGetComboDicStatement?: (ctx: GetComboDicStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `kacoParser.queryDataStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQueryDataStatement?: (ctx: QueryDataStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `kacoParser.carryDataStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCarryDataStatement?: (ctx: CarryDataStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `kacoParser.sqlExecuteStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSqlExecuteStatement?: (ctx: SqlExecuteStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `kacoParser.getCoderStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGetCoderStatement?: (ctx: GetCoderStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `kacoParser.setCoderStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetCoderStatement?: (ctx: SetCoderStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `kacoParser.resetCtrlValueStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitResetCtrlValueStatement?: (ctx: ResetCtrlValueStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `kacoParser.saveLastValueStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSaveLastValueStatement?: (ctx: SaveLastValueStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `kacoParser.loadLastValueStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLoadLastValueStatement?: (ctx: LoadLastValueStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `kacoParser.setVisiableStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetVisiableStatement?: (ctx: SetVisiableStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `kacoParser.setEnableStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetEnableStatement?: (ctx: SetEnableStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `kacoParser.setFocusStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetFocusStatement?: (ctx: SetFocusStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `kacoParser.setColorStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetColorStatement?: (ctx: SetColorStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `kacoParser.changeTabStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitChangeTabStatement?: (ctx: ChangeTabStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `kacoParser.switchDisplayStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitchDisplayStatement?: (ctx: SwitchDisplayStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `kacoParser.stringSubStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringSubStatement?: (ctx: StringSubStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `kacoParser.stringLenStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringLenStatement?: (ctx: StringLenStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `kacoParser.stringStrStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringStrStatement?: (ctx: StringStrStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `kacoParser.stringRepStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringRepStatement?: (ctx: StringRepStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `kacoParser.stringCatStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringCatStatement?: (ctx: StringCatStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `kacoParser.encodeBase64Statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEncodeBase64Statement?: (ctx: EncodeBase64StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `kacoParser.decodeBase64Statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDecodeBase64Statement?: (ctx: DecodeBase64StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `kacoParser.getGridRowsStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGetGridRowsStatement?: (ctx: GetGridRowsStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `kacoParser.addGridRowStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddGridRowStatement?: (ctx: AddGridRowStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `kacoParser.delGridRowStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDelGridRowStatement?: (ctx: DelGridRowStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `kacoParser.selGridRowStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelGridRowStatement?: (ctx: SelGridRowStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `kacoParser.exportXlsStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExportXlsStatement?: (ctx: ExportXlsStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `kacoParser.importXlsStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImportXlsStatement?: (ctx: ImportXlsStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `kacoParser.flowTranStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFlowTranStatement?: (ctx: FlowTranStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `kacoParser.flowSaveStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFlowSaveStatement?: (ctx: FlowSaveStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `kacoParser.flowFreshStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFlowFreshStatement?: (ctx: FlowFreshStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `kacoParser.flowSendStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFlowSendStatement?: (ctx: FlowSendStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `kacoParser.flowBackStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFlowBackStatement?: (ctx: FlowBackStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `kacoParser.flowBack2Statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFlowBack2Statement?: (ctx: FlowBack2StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `kacoParser.flowMendStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFlowMendStatement?: (ctx: FlowMendStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `kacoParser.flowPrintStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFlowPrintStatement?: (ctx: FlowPrintStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `kacoParser.flowFormStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFlowFormStatement?: (ctx: FlowFormStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `kacoParser.flowQueryStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFlowQueryStatement?: (ctx: FlowQueryStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `kacoParser.taskHangStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTaskHangStatement?: (ctx: TaskHangStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `kacoParser.taskFreeStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTaskFreeStatement?: (ctx: TaskFreeStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `kacoParser.flowTestStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFlowTestStatement?: (ctx: FlowTestStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `kacoParser.flowDropStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFlowDropStatement?: (ctx: FlowDropStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `kacoParser.flowCloseStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFlowCloseStatement?: (ctx: FlowCloseStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `kacoParser.flowAgentStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFlowAgentStatement?: (ctx: FlowAgentStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `kacoParser.agentCancelStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAgentCancelStatement?: (ctx: AgentCancelStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `kacoParser.flowRefactStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFlowRefactStatement?: (ctx: FlowRefactStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `kacoParser.testCommitStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTestCommitStatement?: (ctx: TestCommitStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `kacoParser.changeInstFlowStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitChangeInstFlowStatement?: (ctx: ChangeInstFlowStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `kacoParser.instFlowStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstFlowStatement?: (ctx: InstFlowStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `kacoParser.taskDeleteStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTaskDeleteStatement?: (ctx: TaskDeleteStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `kacoParser.tachSendStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTachSendStatement?: (ctx: TachSendStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `kacoParser.commWordStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommWordStatement?: (ctx: CommWordStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `kacoParser.execFuncStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExecFuncStatement?: (ctx: ExecFuncStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `kacoParser.cmdBreakStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCmdBreakStatement?: (ctx: CmdBreakStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `kacoParser.openUrlStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOpenUrlStatement?: (ctx: OpenUrlStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `kacoParser.openLayoutStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOpenLayoutStatement?: (ctx: OpenLayoutStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `kacoParser.printStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrintStatement?: (ctx: PrintStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `kacoParser.regeSignStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRegeSignStatement?: (ctx: RegeSignStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `kacoParser.rsetPswdSignStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRsetPswdSignStatement?: (ctx: RsetPswdSignStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `kacoParser.extendStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExtendStatement?: (ctx: ExtendStatementContext) => Result;

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
	 * Visit a parse tree produced by `kacoParser.supplierStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSupplierStatement?: (ctx: SupplierStatementContext) => Result;

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
	 * Visit a parse tree produced by `kacoParser.negationExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNegationExpr?: (ctx: NegationExprContext) => Result;

	/**
	 * Visit a parse tree produced by `kacoParser.sqlTemplateExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSqlTemplateExpr?: (ctx: SqlTemplateExprContext) => Result;

	/**
	 * Visit a parse tree produced by `kacoParser.sqlStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSqlStatement?: (ctx: SqlStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `kacoParser.sqlQuoteStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSqlQuoteStatement?: (ctx: SqlQuoteStatementContext) => Result;
}

