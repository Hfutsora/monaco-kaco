// Generated from src/parser/kaco.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
	 * Enter a parse tree produced by `kacoParser.whileStatement`.
	 * @param ctx the parse tree
	 */
	enterWhileStatement?: (ctx: WhileStatementContext) => void;
	/**
	 * Exit a parse tree produced by `kacoParser.whileStatement`.
	 * @param ctx the parse tree
	 */
	exitWhileStatement?: (ctx: WhileStatementContext) => void;

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
	 * Enter a parse tree produced by `kacoParser.queryDataQuoteEllipsisExpr`.
	 * @param ctx the parse tree
	 */
	enterQueryDataQuoteEllipsisExpr?: (ctx: QueryDataQuoteEllipsisExprContext) => void;
	/**
	 * Exit a parse tree produced by `kacoParser.queryDataQuoteEllipsisExpr`.
	 * @param ctx the parse tree
	 */
	exitQueryDataQuoteEllipsisExpr?: (ctx: QueryDataQuoteEllipsisExprContext) => void;

	/**
	 * Enter a parse tree produced by `kacoParser.quoteNaturalExpr`.
	 * @param ctx the parse tree
	 */
	enterQuoteNaturalExpr?: (ctx: QuoteNaturalExprContext) => void;
	/**
	 * Exit a parse tree produced by `kacoParser.quoteNaturalExpr`.
	 * @param ctx the parse tree
	 */
	exitQuoteNaturalExpr?: (ctx: QuoteNaturalExprContext) => void;

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
	 * Enter a parse tree produced by `kacoParser.queryDataStatement`.
	 * @param ctx the parse tree
	 */
	enterQueryDataStatement?: (ctx: QueryDataStatementContext) => void;
	/**
	 * Exit a parse tree produced by `kacoParser.queryDataStatement`.
	 * @param ctx the parse tree
	 */
	exitQueryDataStatement?: (ctx: QueryDataStatementContext) => void;

	/**
	 * Enter a parse tree produced by `kacoParser.carryDataStatement`.
	 * @param ctx the parse tree
	 */
	enterCarryDataStatement?: (ctx: CarryDataStatementContext) => void;
	/**
	 * Exit a parse tree produced by `kacoParser.carryDataStatement`.
	 * @param ctx the parse tree
	 */
	exitCarryDataStatement?: (ctx: CarryDataStatementContext) => void;

	/**
	 * Enter a parse tree produced by `kacoParser.sqlExecuteStatement`.
	 * @param ctx the parse tree
	 */
	enterSqlExecuteStatement?: (ctx: SqlExecuteStatementContext) => void;
	/**
	 * Exit a parse tree produced by `kacoParser.sqlExecuteStatement`.
	 * @param ctx the parse tree
	 */
	exitSqlExecuteStatement?: (ctx: SqlExecuteStatementContext) => void;

	/**
	 * Enter a parse tree produced by `kacoParser.getCoderStatement`.
	 * @param ctx the parse tree
	 */
	enterGetCoderStatement?: (ctx: GetCoderStatementContext) => void;
	/**
	 * Exit a parse tree produced by `kacoParser.getCoderStatement`.
	 * @param ctx the parse tree
	 */
	exitGetCoderStatement?: (ctx: GetCoderStatementContext) => void;

	/**
	 * Enter a parse tree produced by `kacoParser.setCoderStatement`.
	 * @param ctx the parse tree
	 */
	enterSetCoderStatement?: (ctx: SetCoderStatementContext) => void;
	/**
	 * Exit a parse tree produced by `kacoParser.setCoderStatement`.
	 * @param ctx the parse tree
	 */
	exitSetCoderStatement?: (ctx: SetCoderStatementContext) => void;

	/**
	 * Enter a parse tree produced by `kacoParser.resetCtrlValueStatement`.
	 * @param ctx the parse tree
	 */
	enterResetCtrlValueStatement?: (ctx: ResetCtrlValueStatementContext) => void;
	/**
	 * Exit a parse tree produced by `kacoParser.resetCtrlValueStatement`.
	 * @param ctx the parse tree
	 */
	exitResetCtrlValueStatement?: (ctx: ResetCtrlValueStatementContext) => void;

	/**
	 * Enter a parse tree produced by `kacoParser.saveLastValueStatement`.
	 * @param ctx the parse tree
	 */
	enterSaveLastValueStatement?: (ctx: SaveLastValueStatementContext) => void;
	/**
	 * Exit a parse tree produced by `kacoParser.saveLastValueStatement`.
	 * @param ctx the parse tree
	 */
	exitSaveLastValueStatement?: (ctx: SaveLastValueStatementContext) => void;

	/**
	 * Enter a parse tree produced by `kacoParser.loadLastValueStatement`.
	 * @param ctx the parse tree
	 */
	enterLoadLastValueStatement?: (ctx: LoadLastValueStatementContext) => void;
	/**
	 * Exit a parse tree produced by `kacoParser.loadLastValueStatement`.
	 * @param ctx the parse tree
	 */
	exitLoadLastValueStatement?: (ctx: LoadLastValueStatementContext) => void;

	/**
	 * Enter a parse tree produced by `kacoParser.setVisiableStatement`.
	 * @param ctx the parse tree
	 */
	enterSetVisiableStatement?: (ctx: SetVisiableStatementContext) => void;
	/**
	 * Exit a parse tree produced by `kacoParser.setVisiableStatement`.
	 * @param ctx the parse tree
	 */
	exitSetVisiableStatement?: (ctx: SetVisiableStatementContext) => void;

	/**
	 * Enter a parse tree produced by `kacoParser.setEnableStatement`.
	 * @param ctx the parse tree
	 */
	enterSetEnableStatement?: (ctx: SetEnableStatementContext) => void;
	/**
	 * Exit a parse tree produced by `kacoParser.setEnableStatement`.
	 * @param ctx the parse tree
	 */
	exitSetEnableStatement?: (ctx: SetEnableStatementContext) => void;

	/**
	 * Enter a parse tree produced by `kacoParser.setFocusStatement`.
	 * @param ctx the parse tree
	 */
	enterSetFocusStatement?: (ctx: SetFocusStatementContext) => void;
	/**
	 * Exit a parse tree produced by `kacoParser.setFocusStatement`.
	 * @param ctx the parse tree
	 */
	exitSetFocusStatement?: (ctx: SetFocusStatementContext) => void;

	/**
	 * Enter a parse tree produced by `kacoParser.setColorStatement`.
	 * @param ctx the parse tree
	 */
	enterSetColorStatement?: (ctx: SetColorStatementContext) => void;
	/**
	 * Exit a parse tree produced by `kacoParser.setColorStatement`.
	 * @param ctx the parse tree
	 */
	exitSetColorStatement?: (ctx: SetColorStatementContext) => void;

	/**
	 * Enter a parse tree produced by `kacoParser.changeTabStatement`.
	 * @param ctx the parse tree
	 */
	enterChangeTabStatement?: (ctx: ChangeTabStatementContext) => void;
	/**
	 * Exit a parse tree produced by `kacoParser.changeTabStatement`.
	 * @param ctx the parse tree
	 */
	exitChangeTabStatement?: (ctx: ChangeTabStatementContext) => void;

	/**
	 * Enter a parse tree produced by `kacoParser.switchDisplayStatement`.
	 * @param ctx the parse tree
	 */
	enterSwitchDisplayStatement?: (ctx: SwitchDisplayStatementContext) => void;
	/**
	 * Exit a parse tree produced by `kacoParser.switchDisplayStatement`.
	 * @param ctx the parse tree
	 */
	exitSwitchDisplayStatement?: (ctx: SwitchDisplayStatementContext) => void;

	/**
	 * Enter a parse tree produced by `kacoParser.stringSubStatement`.
	 * @param ctx the parse tree
	 */
	enterStringSubStatement?: (ctx: StringSubStatementContext) => void;
	/**
	 * Exit a parse tree produced by `kacoParser.stringSubStatement`.
	 * @param ctx the parse tree
	 */
	exitStringSubStatement?: (ctx: StringSubStatementContext) => void;

	/**
	 * Enter a parse tree produced by `kacoParser.stringLenStatement`.
	 * @param ctx the parse tree
	 */
	enterStringLenStatement?: (ctx: StringLenStatementContext) => void;
	/**
	 * Exit a parse tree produced by `kacoParser.stringLenStatement`.
	 * @param ctx the parse tree
	 */
	exitStringLenStatement?: (ctx: StringLenStatementContext) => void;

	/**
	 * Enter a parse tree produced by `kacoParser.stringStrStatement`.
	 * @param ctx the parse tree
	 */
	enterStringStrStatement?: (ctx: StringStrStatementContext) => void;
	/**
	 * Exit a parse tree produced by `kacoParser.stringStrStatement`.
	 * @param ctx the parse tree
	 */
	exitStringStrStatement?: (ctx: StringStrStatementContext) => void;

	/**
	 * Enter a parse tree produced by `kacoParser.stringRepStatement`.
	 * @param ctx the parse tree
	 */
	enterStringRepStatement?: (ctx: StringRepStatementContext) => void;
	/**
	 * Exit a parse tree produced by `kacoParser.stringRepStatement`.
	 * @param ctx the parse tree
	 */
	exitStringRepStatement?: (ctx: StringRepStatementContext) => void;

	/**
	 * Enter a parse tree produced by `kacoParser.stringCatStatement`.
	 * @param ctx the parse tree
	 */
	enterStringCatStatement?: (ctx: StringCatStatementContext) => void;
	/**
	 * Exit a parse tree produced by `kacoParser.stringCatStatement`.
	 * @param ctx the parse tree
	 */
	exitStringCatStatement?: (ctx: StringCatStatementContext) => void;

	/**
	 * Enter a parse tree produced by `kacoParser.encodeBase64Statement`.
	 * @param ctx the parse tree
	 */
	enterEncodeBase64Statement?: (ctx: EncodeBase64StatementContext) => void;
	/**
	 * Exit a parse tree produced by `kacoParser.encodeBase64Statement`.
	 * @param ctx the parse tree
	 */
	exitEncodeBase64Statement?: (ctx: EncodeBase64StatementContext) => void;

	/**
	 * Enter a parse tree produced by `kacoParser.decodeBase64Statement`.
	 * @param ctx the parse tree
	 */
	enterDecodeBase64Statement?: (ctx: DecodeBase64StatementContext) => void;
	/**
	 * Exit a parse tree produced by `kacoParser.decodeBase64Statement`.
	 * @param ctx the parse tree
	 */
	exitDecodeBase64Statement?: (ctx: DecodeBase64StatementContext) => void;

	/**
	 * Enter a parse tree produced by `kacoParser.getGridRowsStatement`.
	 * @param ctx the parse tree
	 */
	enterGetGridRowsStatement?: (ctx: GetGridRowsStatementContext) => void;
	/**
	 * Exit a parse tree produced by `kacoParser.getGridRowsStatement`.
	 * @param ctx the parse tree
	 */
	exitGetGridRowsStatement?: (ctx: GetGridRowsStatementContext) => void;

	/**
	 * Enter a parse tree produced by `kacoParser.addGridRowStatement`.
	 * @param ctx the parse tree
	 */
	enterAddGridRowStatement?: (ctx: AddGridRowStatementContext) => void;
	/**
	 * Exit a parse tree produced by `kacoParser.addGridRowStatement`.
	 * @param ctx the parse tree
	 */
	exitAddGridRowStatement?: (ctx: AddGridRowStatementContext) => void;

	/**
	 * Enter a parse tree produced by `kacoParser.delGridRowStatement`.
	 * @param ctx the parse tree
	 */
	enterDelGridRowStatement?: (ctx: DelGridRowStatementContext) => void;
	/**
	 * Exit a parse tree produced by `kacoParser.delGridRowStatement`.
	 * @param ctx the parse tree
	 */
	exitDelGridRowStatement?: (ctx: DelGridRowStatementContext) => void;

	/**
	 * Enter a parse tree produced by `kacoParser.selGridRowStatement`.
	 * @param ctx the parse tree
	 */
	enterSelGridRowStatement?: (ctx: SelGridRowStatementContext) => void;
	/**
	 * Exit a parse tree produced by `kacoParser.selGridRowStatement`.
	 * @param ctx the parse tree
	 */
	exitSelGridRowStatement?: (ctx: SelGridRowStatementContext) => void;

	/**
	 * Enter a parse tree produced by `kacoParser.exportXlsStatement`.
	 * @param ctx the parse tree
	 */
	enterExportXlsStatement?: (ctx: ExportXlsStatementContext) => void;
	/**
	 * Exit a parse tree produced by `kacoParser.exportXlsStatement`.
	 * @param ctx the parse tree
	 */
	exitExportXlsStatement?: (ctx: ExportXlsStatementContext) => void;

	/**
	 * Enter a parse tree produced by `kacoParser.importXlsStatement`.
	 * @param ctx the parse tree
	 */
	enterImportXlsStatement?: (ctx: ImportXlsStatementContext) => void;
	/**
	 * Exit a parse tree produced by `kacoParser.importXlsStatement`.
	 * @param ctx the parse tree
	 */
	exitImportXlsStatement?: (ctx: ImportXlsStatementContext) => void;

	/**
	 * Enter a parse tree produced by `kacoParser.flowTranStatement`.
	 * @param ctx the parse tree
	 */
	enterFlowTranStatement?: (ctx: FlowTranStatementContext) => void;
	/**
	 * Exit a parse tree produced by `kacoParser.flowTranStatement`.
	 * @param ctx the parse tree
	 */
	exitFlowTranStatement?: (ctx: FlowTranStatementContext) => void;

	/**
	 * Enter a parse tree produced by `kacoParser.flowSaveStatement`.
	 * @param ctx the parse tree
	 */
	enterFlowSaveStatement?: (ctx: FlowSaveStatementContext) => void;
	/**
	 * Exit a parse tree produced by `kacoParser.flowSaveStatement`.
	 * @param ctx the parse tree
	 */
	exitFlowSaveStatement?: (ctx: FlowSaveStatementContext) => void;

	/**
	 * Enter a parse tree produced by `kacoParser.flowFreshStatement`.
	 * @param ctx the parse tree
	 */
	enterFlowFreshStatement?: (ctx: FlowFreshStatementContext) => void;
	/**
	 * Exit a parse tree produced by `kacoParser.flowFreshStatement`.
	 * @param ctx the parse tree
	 */
	exitFlowFreshStatement?: (ctx: FlowFreshStatementContext) => void;

	/**
	 * Enter a parse tree produced by `kacoParser.flowSendStatement`.
	 * @param ctx the parse tree
	 */
	enterFlowSendStatement?: (ctx: FlowSendStatementContext) => void;
	/**
	 * Exit a parse tree produced by `kacoParser.flowSendStatement`.
	 * @param ctx the parse tree
	 */
	exitFlowSendStatement?: (ctx: FlowSendStatementContext) => void;

	/**
	 * Enter a parse tree produced by `kacoParser.flowBackStatement`.
	 * @param ctx the parse tree
	 */
	enterFlowBackStatement?: (ctx: FlowBackStatementContext) => void;
	/**
	 * Exit a parse tree produced by `kacoParser.flowBackStatement`.
	 * @param ctx the parse tree
	 */
	exitFlowBackStatement?: (ctx: FlowBackStatementContext) => void;

	/**
	 * Enter a parse tree produced by `kacoParser.flowBack2Statement`.
	 * @param ctx the parse tree
	 */
	enterFlowBack2Statement?: (ctx: FlowBack2StatementContext) => void;
	/**
	 * Exit a parse tree produced by `kacoParser.flowBack2Statement`.
	 * @param ctx the parse tree
	 */
	exitFlowBack2Statement?: (ctx: FlowBack2StatementContext) => void;

	/**
	 * Enter a parse tree produced by `kacoParser.flowMendStatement`.
	 * @param ctx the parse tree
	 */
	enterFlowMendStatement?: (ctx: FlowMendStatementContext) => void;
	/**
	 * Exit a parse tree produced by `kacoParser.flowMendStatement`.
	 * @param ctx the parse tree
	 */
	exitFlowMendStatement?: (ctx: FlowMendStatementContext) => void;

	/**
	 * Enter a parse tree produced by `kacoParser.flowPrintStatement`.
	 * @param ctx the parse tree
	 */
	enterFlowPrintStatement?: (ctx: FlowPrintStatementContext) => void;
	/**
	 * Exit a parse tree produced by `kacoParser.flowPrintStatement`.
	 * @param ctx the parse tree
	 */
	exitFlowPrintStatement?: (ctx: FlowPrintStatementContext) => void;

	/**
	 * Enter a parse tree produced by `kacoParser.flowFormStatement`.
	 * @param ctx the parse tree
	 */
	enterFlowFormStatement?: (ctx: FlowFormStatementContext) => void;
	/**
	 * Exit a parse tree produced by `kacoParser.flowFormStatement`.
	 * @param ctx the parse tree
	 */
	exitFlowFormStatement?: (ctx: FlowFormStatementContext) => void;

	/**
	 * Enter a parse tree produced by `kacoParser.flowQueryStatement`.
	 * @param ctx the parse tree
	 */
	enterFlowQueryStatement?: (ctx: FlowQueryStatementContext) => void;
	/**
	 * Exit a parse tree produced by `kacoParser.flowQueryStatement`.
	 * @param ctx the parse tree
	 */
	exitFlowQueryStatement?: (ctx: FlowQueryStatementContext) => void;

	/**
	 * Enter a parse tree produced by `kacoParser.taskHangStatement`.
	 * @param ctx the parse tree
	 */
	enterTaskHangStatement?: (ctx: TaskHangStatementContext) => void;
	/**
	 * Exit a parse tree produced by `kacoParser.taskHangStatement`.
	 * @param ctx the parse tree
	 */
	exitTaskHangStatement?: (ctx: TaskHangStatementContext) => void;

	/**
	 * Enter a parse tree produced by `kacoParser.taskFreeStatement`.
	 * @param ctx the parse tree
	 */
	enterTaskFreeStatement?: (ctx: TaskFreeStatementContext) => void;
	/**
	 * Exit a parse tree produced by `kacoParser.taskFreeStatement`.
	 * @param ctx the parse tree
	 */
	exitTaskFreeStatement?: (ctx: TaskFreeStatementContext) => void;

	/**
	 * Enter a parse tree produced by `kacoParser.flowTestStatement`.
	 * @param ctx the parse tree
	 */
	enterFlowTestStatement?: (ctx: FlowTestStatementContext) => void;
	/**
	 * Exit a parse tree produced by `kacoParser.flowTestStatement`.
	 * @param ctx the parse tree
	 */
	exitFlowTestStatement?: (ctx: FlowTestStatementContext) => void;

	/**
	 * Enter a parse tree produced by `kacoParser.flowDropStatement`.
	 * @param ctx the parse tree
	 */
	enterFlowDropStatement?: (ctx: FlowDropStatementContext) => void;
	/**
	 * Exit a parse tree produced by `kacoParser.flowDropStatement`.
	 * @param ctx the parse tree
	 */
	exitFlowDropStatement?: (ctx: FlowDropStatementContext) => void;

	/**
	 * Enter a parse tree produced by `kacoParser.flowCloseStatement`.
	 * @param ctx the parse tree
	 */
	enterFlowCloseStatement?: (ctx: FlowCloseStatementContext) => void;
	/**
	 * Exit a parse tree produced by `kacoParser.flowCloseStatement`.
	 * @param ctx the parse tree
	 */
	exitFlowCloseStatement?: (ctx: FlowCloseStatementContext) => void;

	/**
	 * Enter a parse tree produced by `kacoParser.flowAgentStatement`.
	 * @param ctx the parse tree
	 */
	enterFlowAgentStatement?: (ctx: FlowAgentStatementContext) => void;
	/**
	 * Exit a parse tree produced by `kacoParser.flowAgentStatement`.
	 * @param ctx the parse tree
	 */
	exitFlowAgentStatement?: (ctx: FlowAgentStatementContext) => void;

	/**
	 * Enter a parse tree produced by `kacoParser.agentCancelStatement`.
	 * @param ctx the parse tree
	 */
	enterAgentCancelStatement?: (ctx: AgentCancelStatementContext) => void;
	/**
	 * Exit a parse tree produced by `kacoParser.agentCancelStatement`.
	 * @param ctx the parse tree
	 */
	exitAgentCancelStatement?: (ctx: AgentCancelStatementContext) => void;

	/**
	 * Enter a parse tree produced by `kacoParser.flowRefactStatement`.
	 * @param ctx the parse tree
	 */
	enterFlowRefactStatement?: (ctx: FlowRefactStatementContext) => void;
	/**
	 * Exit a parse tree produced by `kacoParser.flowRefactStatement`.
	 * @param ctx the parse tree
	 */
	exitFlowRefactStatement?: (ctx: FlowRefactStatementContext) => void;

	/**
	 * Enter a parse tree produced by `kacoParser.testCommitStatement`.
	 * @param ctx the parse tree
	 */
	enterTestCommitStatement?: (ctx: TestCommitStatementContext) => void;
	/**
	 * Exit a parse tree produced by `kacoParser.testCommitStatement`.
	 * @param ctx the parse tree
	 */
	exitTestCommitStatement?: (ctx: TestCommitStatementContext) => void;

	/**
	 * Enter a parse tree produced by `kacoParser.changeInstFlowStatement`.
	 * @param ctx the parse tree
	 */
	enterChangeInstFlowStatement?: (ctx: ChangeInstFlowStatementContext) => void;
	/**
	 * Exit a parse tree produced by `kacoParser.changeInstFlowStatement`.
	 * @param ctx the parse tree
	 */
	exitChangeInstFlowStatement?: (ctx: ChangeInstFlowStatementContext) => void;

	/**
	 * Enter a parse tree produced by `kacoParser.instFlowStatement`.
	 * @param ctx the parse tree
	 */
	enterInstFlowStatement?: (ctx: InstFlowStatementContext) => void;
	/**
	 * Exit a parse tree produced by `kacoParser.instFlowStatement`.
	 * @param ctx the parse tree
	 */
	exitInstFlowStatement?: (ctx: InstFlowStatementContext) => void;

	/**
	 * Enter a parse tree produced by `kacoParser.taskDeleteStatement`.
	 * @param ctx the parse tree
	 */
	enterTaskDeleteStatement?: (ctx: TaskDeleteStatementContext) => void;
	/**
	 * Exit a parse tree produced by `kacoParser.taskDeleteStatement`.
	 * @param ctx the parse tree
	 */
	exitTaskDeleteStatement?: (ctx: TaskDeleteStatementContext) => void;

	/**
	 * Enter a parse tree produced by `kacoParser.tachSendStatement`.
	 * @param ctx the parse tree
	 */
	enterTachSendStatement?: (ctx: TachSendStatementContext) => void;
	/**
	 * Exit a parse tree produced by `kacoParser.tachSendStatement`.
	 * @param ctx the parse tree
	 */
	exitTachSendStatement?: (ctx: TachSendStatementContext) => void;

	/**
	 * Enter a parse tree produced by `kacoParser.commWordStatement`.
	 * @param ctx the parse tree
	 */
	enterCommWordStatement?: (ctx: CommWordStatementContext) => void;
	/**
	 * Exit a parse tree produced by `kacoParser.commWordStatement`.
	 * @param ctx the parse tree
	 */
	exitCommWordStatement?: (ctx: CommWordStatementContext) => void;

	/**
	 * Enter a parse tree produced by `kacoParser.execFuncStatement`.
	 * @param ctx the parse tree
	 */
	enterExecFuncStatement?: (ctx: ExecFuncStatementContext) => void;
	/**
	 * Exit a parse tree produced by `kacoParser.execFuncStatement`.
	 * @param ctx the parse tree
	 */
	exitExecFuncStatement?: (ctx: ExecFuncStatementContext) => void;

	/**
	 * Enter a parse tree produced by `kacoParser.cmdBreakStatement`.
	 * @param ctx the parse tree
	 */
	enterCmdBreakStatement?: (ctx: CmdBreakStatementContext) => void;
	/**
	 * Exit a parse tree produced by `kacoParser.cmdBreakStatement`.
	 * @param ctx the parse tree
	 */
	exitCmdBreakStatement?: (ctx: CmdBreakStatementContext) => void;

	/**
	 * Enter a parse tree produced by `kacoParser.openUrlStatement`.
	 * @param ctx the parse tree
	 */
	enterOpenUrlStatement?: (ctx: OpenUrlStatementContext) => void;
	/**
	 * Exit a parse tree produced by `kacoParser.openUrlStatement`.
	 * @param ctx the parse tree
	 */
	exitOpenUrlStatement?: (ctx: OpenUrlStatementContext) => void;

	/**
	 * Enter a parse tree produced by `kacoParser.openLayoutStatement`.
	 * @param ctx the parse tree
	 */
	enterOpenLayoutStatement?: (ctx: OpenLayoutStatementContext) => void;
	/**
	 * Exit a parse tree produced by `kacoParser.openLayoutStatement`.
	 * @param ctx the parse tree
	 */
	exitOpenLayoutStatement?: (ctx: OpenLayoutStatementContext) => void;

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
	 * Enter a parse tree produced by `kacoParser.regeSignStatement`.
	 * @param ctx the parse tree
	 */
	enterRegeSignStatement?: (ctx: RegeSignStatementContext) => void;
	/**
	 * Exit a parse tree produced by `kacoParser.regeSignStatement`.
	 * @param ctx the parse tree
	 */
	exitRegeSignStatement?: (ctx: RegeSignStatementContext) => void;

	/**
	 * Enter a parse tree produced by `kacoParser.rsetPswdSignStatement`.
	 * @param ctx the parse tree
	 */
	enterRsetPswdSignStatement?: (ctx: RsetPswdSignStatementContext) => void;
	/**
	 * Exit a parse tree produced by `kacoParser.rsetPswdSignStatement`.
	 * @param ctx the parse tree
	 */
	exitRsetPswdSignStatement?: (ctx: RsetPswdSignStatementContext) => void;

	/**
	 * Enter a parse tree produced by `kacoParser.extendStatement`.
	 * @param ctx the parse tree
	 */
	enterExtendStatement?: (ctx: ExtendStatementContext) => void;
	/**
	 * Exit a parse tree produced by `kacoParser.extendStatement`.
	 * @param ctx the parse tree
	 */
	exitExtendStatement?: (ctx: ExtendStatementContext) => void;

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
	 * Enter a parse tree produced by `kacoParser.supplierStatement`.
	 * @param ctx the parse tree
	 */
	enterSupplierStatement?: (ctx: SupplierStatementContext) => void;
	/**
	 * Exit a parse tree produced by `kacoParser.supplierStatement`.
	 * @param ctx the parse tree
	 */
	exitSupplierStatement?: (ctx: SupplierStatementContext) => void;

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
	 * Enter a parse tree produced by `kacoParser.negationExpr`.
	 * @param ctx the parse tree
	 */
	enterNegationExpr?: (ctx: NegationExprContext) => void;
	/**
	 * Exit a parse tree produced by `kacoParser.negationExpr`.
	 * @param ctx the parse tree
	 */
	exitNegationExpr?: (ctx: NegationExprContext) => void;

	/**
	 * Enter a parse tree produced by `kacoParser.sqlTemplateExpr`.
	 * @param ctx the parse tree
	 */
	enterSqlTemplateExpr?: (ctx: SqlTemplateExprContext) => void;
	/**
	 * Exit a parse tree produced by `kacoParser.sqlTemplateExpr`.
	 * @param ctx the parse tree
	 */
	exitSqlTemplateExpr?: (ctx: SqlTemplateExprContext) => void;

	/**
	 * Enter a parse tree produced by `kacoParser.sqlStatement`.
	 * @param ctx the parse tree
	 */
	enterSqlStatement?: (ctx: SqlStatementContext) => void;
	/**
	 * Exit a parse tree produced by `kacoParser.sqlStatement`.
	 * @param ctx the parse tree
	 */
	exitSqlStatement?: (ctx: SqlStatementContext) => void;

	/**
	 * Enter a parse tree produced by `kacoParser.sqlQuoteStatement`.
	 * @param ctx the parse tree
	 */
	enterSqlQuoteStatement?: (ctx: SqlQuoteStatementContext) => void;
	/**
	 * Exit a parse tree produced by `kacoParser.sqlQuoteStatement`.
	 * @param ctx the parse tree
	 */
	exitSqlQuoteStatement?: (ctx: SqlQuoteStatementContext) => void;
}

