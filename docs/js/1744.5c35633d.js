"use strict";(self["webpackChunkmonaco_kaco"]=self["webpackChunkmonaco_kaco"]||[]).push([[1744],{21744:function(e,n,o){o.r(n),o.d(n,{conf:function(){return t},language:function(){return r}});
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.32.1(29a273516805a852aa8edc5e05059f119b13eff0)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
var t={comments:{lineComment:"'"},brackets:[["(",")"],["[","]"],["If","EndIf"],["While","EndWhile"],["For","EndFor"],["Sub","EndSub"]],autoClosingPairs:[{open:'"',close:'"',notIn:["string","comment"]},{open:"(",close:")",notIn:["string","comment"]},{open:"[",close:"]",notIn:["string","comment"]}]},r={defaultToken:"",tokenPostfix:".sb",ignoreCase:!0,brackets:[{token:"delimiter.array",open:"[",close:"]"},{token:"delimiter.parenthesis",open:"(",close:")"},{token:"keyword.tag-if",open:"If",close:"EndIf"},{token:"keyword.tag-while",open:"While",close:"EndWhile"},{token:"keyword.tag-for",open:"For",close:"EndFor"},{token:"keyword.tag-sub",open:"Sub",close:"EndSub"}],keywords:["Else","ElseIf","EndFor","EndIf","EndSub","EndWhile","For","Goto","If","Step","Sub","Then","To","While"],tagwords:["If","Sub","While","For"],operators:[">","<","<>","<=",">=","And","Or","+","-","*","/","="],identifier:/[a-zA-Z_][\w]*/,symbols:/[=><:+\-*\/%\.,]+/,escapes:/\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,tokenizer:{root:[{include:"@whitespace"},[/(@identifier)(?=[.])/,"type"],[/@identifier/,{cases:{"@keywords":{token:"keyword.$0"},"@operators":"operator","@default":"variable.name"}}],[/([.])(@identifier)/,{cases:{$2:["delimiter","type.member"],"@default":""}}],[/\d*\.\d+/,"number.float"],[/\d+/,"number"],[/[()\[\]]/,"@brackets"],[/@symbols/,{cases:{"@operators":"operator","@default":"delimiter"}}],[/"([^"\\]|\\.)*$/,"string.invalid"],[/"/,"string","@string"]],whitespace:[[/[ \t\r\n]+/,""],[/(\').*$/,"comment"]],string:[[/[^\\"]+/,"string"],[/@escapes/,"string.escape"],[/\\./,"string.escape.invalid"],[/"C?/,"string","@pop"]]}}}}]);
//# sourceMappingURL=1744.5c35633d.js.map