"use strict";(self["webpackChunkmonaco_kaco"]=self["webpackChunkmonaco_kaco"]||[]).push([[2936],{72936:function(e,t,i){i.r(t),i.d(t,{conf:function(){return p},language:function(){return w}});var n=i(66347),o=i(3336),r=(i(38880),i(36210),i(24603),i(28450),i(74916),i(88386),i(39714),i(69600),i(774)),a=Object.defineProperty,l=Object.getOwnPropertyDescriptor,d=Object.getOwnPropertyNames,s=Object.prototype.hasOwnProperty,c=function(e,t,i,r){if(t&&"object"===(0,o.Z)(t)||"function"===typeof t){var c,u=(0,n.Z)(d(t));try{var m=function(){var n=c.value;s.call(e,n)||!i&&"default"===n||a(e,n,{get:function(){return t[n]},enumerable:!(r=l(t,n))||r.enumerable})};for(u.s();!(c=u.n()).done;)m()}catch(p){u.e(p)}finally{u.f()}}return e},u={};c(u,r);var m=["area","base","br","col","embed","hr","img","input","keygen","link","menuitem","meta","param","source","track","wbr"],p={wordPattern:/(-?\d*\.\d\w*)|([^\`\~\!\@\$\^\&\*\(\)\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\s]+)/g,brackets:[["\x3c!--","--\x3e"],["<",">"],["{{","}}"],["{%","%}"],["{","}"],["(",")"]],autoClosingPairs:[{open:"{",close:"}"},{open:"%",close:"%"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'},{open:"'",close:"'"}],surroundingPairs:[{open:"<",close:">"},{open:'"',close:'"'},{open:"'",close:"'"}],onEnterRules:[{beforeText:new RegExp("<(?!(?:".concat(m.join("|"),"))(\\w[\\w\\d]*)([^/>]*(?!/)>)[^<]*$"),"i"),afterText:/^<\/(\w[\w\d]*)\s*>$/i,action:{indentAction:u.languages.IndentAction.IndentOutdent}},{beforeText:new RegExp("<(?!(?:".concat(m.join("|"),"))(\\w[\\w\\d]*)([^/>]*(?!/)>)[^<]*$"),"i"),action:{indentAction:u.languages.IndentAction.Indent}}]},w={defaultToken:"",tokenPostfix:"",builtinTags:["if","else","elseif","endif","render","assign","capture","endcapture","case","endcase","comment","endcomment","cycle","decrement","for","endfor","include","increment","layout","raw","endraw","render","tablerow","endtablerow","unless","endunless"],builtinFilters:["abs","append","at_least","at_most","capitalize","ceil","compact","date","default","divided_by","downcase","escape","escape_once","first","floor","join","json","last","lstrip","map","minus","modulo","newline_to_br","plus","prepend","remove","remove_first","replace","replace_first","reverse","round","rstrip","size","slice","sort","sort_natural","split","strip","strip_html","strip_newlines","times","truncate","truncatewords","uniq","upcase","url_decode","url_encode","where"],constants:["true","false"],operators:["==","!=",">","<",">=","<="],symbol:/[=><!]+/,identifier:/[a-zA-Z_][\w]*/,tokenizer:{root:[[/\{\%\s*comment\s*\%\}/,"comment.start.liquid","@comment"],[/\{\{/,{token:"@rematch",switchTo:"@liquidState.root"}],[/\{\%/,{token:"@rematch",switchTo:"@liquidState.root"}],[/(<)([\w\-]+)(\/>)/,["delimiter.html","tag.html","delimiter.html"]],[/(<)([:\w]+)/,["delimiter.html",{token:"tag.html",next:"@otherTag"}]],[/(<\/)([\w\-]+)/,["delimiter.html",{token:"tag.html",next:"@otherTag"}]],[/</,"delimiter.html"],[/\{/,"delimiter.html"],[/[^<{]+/]],comment:[[/\{\%\s*endcomment\s*\%\}/,"comment.end.liquid","@pop"],[/./,"comment.content.liquid"]],otherTag:[[/\{\{/,{token:"@rematch",switchTo:"@liquidState.otherTag"}],[/\{\%/,{token:"@rematch",switchTo:"@liquidState.otherTag"}],[/\/?>/,"delimiter.html","@pop"],[/"([^"]*)"/,"attribute.value"],[/'([^']*)'/,"attribute.value"],[/[\w\-]+/,"attribute.name"],[/=/,"delimiter"],[/[ \t\r\n]+/]],liquidState:[[/\{\{/,"delimiter.output.liquid"],[/\}\}/,{token:"delimiter.output.liquid",switchTo:"@$S2.$S3"}],[/\{\%/,"delimiter.tag.liquid"],[/raw\s*\%\}/,"delimiter.tag.liquid","@liquidRaw"],[/\%\}/,{token:"delimiter.tag.liquid",switchTo:"@$S2.$S3"}],{include:"liquidRoot"}],liquidRaw:[[/^(?!\{\%\s*endraw\s*\%\}).+/],[/\{\%/,"delimiter.tag.liquid"],[/@identifier/],[/\%\}/,{token:"delimiter.tag.liquid",next:"@root"}]],liquidRoot:[[/\d+(\.\d+)?/,"number.liquid"],[/"[^"]*"/,"string.liquid"],[/'[^']*'/,"string.liquid"],[/\s+/],[/@symbol/,{cases:{"@operators":"operator.liquid","@default":""}}],[/\./],[/@identifier/,{cases:{"@constants":"keyword.liquid","@builtinFilters":"predefined.liquid","@builtinTags":"predefined.liquid","@default":"variable.liquid"}}],[/[^}|%]/,"variable.liquid"]]}}}}]);