"use strict";(self["webpackChunkmonaco_kaco"]=self["webpackChunkmonaco_kaco"]||[]).push([[8507],{28507:function(e,t,r){r.r(t),r.d(t,{Adapter:function(){return D},CodeActionAdaptor:function(){return z},DefinitionAdapter:function(){return N},DiagnosticsAdapter:function(){return R},FormatAdapter:function(){return B},FormatHelper:function(){return j},FormatOnTypeAdapter:function(){return U},InlayHintsAdapter:function(){return J},Kind:function(){return E},LibFiles:function(){return F},OccurrencesAdapter:function(){return O},OutlineAdapter:function(){return M},QuickInfoAdapter:function(){return P},ReferenceAdapter:function(){return K},RenameAdapter:function(){return G},SignatureHelpAdapter:function(){return T},SuggestAdapter:function(){return I},WorkerManager:function(){return S},flattenDiagnosticMessageText:function(){return C},getJavaScriptWorker:function(){return X},getTypeScriptWorker:function(){return Y},setupJavaScript:function(){return q},setupTypeScript:function(){return Q}});var n=r(4367),i=r(5498),a=r(43263),s=r(99418),o=r(6812),u=r(16198),c=r(76133),l=r(92751),d=r(23796),p=r(62032),f=r(9726),g=(r(78975),r(38880),r(36210),r(21249),r(57327),r(41539),r(69600),r(47042),r(39714),r(54747),r(78783),r(33948),r(92222),r(68309),r(9653),r(82526),r(41817),r(21703),r(86214)),m=r(30615),h=Object.defineProperty,b=Object.getOwnPropertyDescriptor,v=Object.getOwnPropertyNames,y=Object.prototype.hasOwnProperty,k=function(e,t,r){return t in e?h(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r},x=function(e,t,r,n){if(t&&"object"===(0,f.Z)(t)||"function"===typeof t){var i,a=(0,p.Z)(v(t));try{var s=function(){var a=i.value;y.call(e,a)||!r&&"default"===a||h(e,a,{get:function(){return t[a]},enumerable:!(n=b(t,a))||n.enumerable})};for(a.s();!(i=a.n()).done;)s()}catch(o){a.e(o)}finally{a.f()}}return e},_=function(e,t,r){return k(e,"symbol"!==(0,f.Z)(t)?t+"":t,r),r},w={};x(w,g);var S=function(){function e(t,r){var n=this;(0,c.Z)(this,e),(0,d.Z)(this,"_modeId",void 0),(0,d.Z)(this,"_defaults",void 0),(0,d.Z)(this,"_configChangeListener",void 0),(0,d.Z)(this,"_updateExtraLibsToken",void 0),(0,d.Z)(this,"_extraLibsChangeListener",void 0),(0,d.Z)(this,"_worker",void 0),(0,d.Z)(this,"_client",void 0),this._modeId=t,this._defaults=r,this._worker=null,this._client=null,this._configChangeListener=this._defaults.onDidChange((function(){return n._stopWorker()})),this._updateExtraLibsToken=0,this._extraLibsChangeListener=this._defaults.onDidExtraLibsChange((function(){return n._updateExtraLibs()}))}return(0,l.Z)(e,[{key:"_stopWorker",value:function(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null}},{key:"dispose",value:function(){this._configChangeListener.dispose(),this._extraLibsChangeListener.dispose(),this._stopWorker()}},{key:"_updateExtraLibs",value:function(){var e=(0,u.Z)(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this._worker){e.next=2;break}return e.abrupt("return");case 2:return t=++this._updateExtraLibsToken,e.next=5,this._worker.getProxy();case 5:if(r=e.sent,this._updateExtraLibsToken===t){e.next=8;break}return e.abrupt("return");case 8:r.updateExtraLibs(this._defaults.getExtraLibs());case 9:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"_getClient",value:function(){var e=this;if(!this._client){this._worker=w.editor.createWebWorker({moduleId:"vs/language/typescript/tsWorker",label:this._modeId,keepIdleModels:!0,createData:{compilerOptions:this._defaults.getCompilerOptions(),extraLibs:this._defaults.getExtraLibs(),customWorkerPath:this._defaults.workerOptions.customWorkerPath,inlayHintsOptions:this._defaults.inlayHintsOptions}});var t=this._worker.getProxy();this._defaults.getEagerModelSync()&&(t=t.then((function(t){return e._worker?e._worker.withSyncedResources(w.editor.getModels().filter((function(t){return t.getLanguageId()===e._modeId})).map((function(e){return e.uri}))):t}))),this._client=t}return this._client}},{key:"getLanguageServiceWorker",value:function(){for(var e,t=this,r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return this._getClient().then((function(t){e=t})).then((function(e){if(t._worker)return t._worker.withSyncedResources(n)})).then((function(t){return e}))}}]),e}(),Z={};function C(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;if("string"===typeof e)return e;if(void 0===e)return"";var n="";if(r){n+=t;for(var i=0;i<r;i++)n+="  "}if(n+=e.messageText,r++,e.next){var a,s=(0,p.Z)(e.next);try{for(s.s();!(a=s.n()).done;){var o=a.value;n+=C(o,t,r)}}catch(u){s.e(u)}finally{s.f()}}return n}function A(e){return e?e.map((function(e){return e.text})).join(""):""}Z["lib.d.ts"]=!0,Z["lib.dom.d.ts"]=!0,Z["lib.dom.iterable.d.ts"]=!0,Z["lib.es2015.collection.d.ts"]=!0,Z["lib.es2015.core.d.ts"]=!0,Z["lib.es2015.d.ts"]=!0,Z["lib.es2015.generator.d.ts"]=!0,Z["lib.es2015.iterable.d.ts"]=!0,Z["lib.es2015.promise.d.ts"]=!0,Z["lib.es2015.proxy.d.ts"]=!0,Z["lib.es2015.reflect.d.ts"]=!0,Z["lib.es2015.symbol.d.ts"]=!0,Z["lib.es2015.symbol.wellknown.d.ts"]=!0,Z["lib.es2016.array.include.d.ts"]=!0,Z["lib.es2016.d.ts"]=!0,Z["lib.es2016.full.d.ts"]=!0,Z["lib.es2017.d.ts"]=!0,Z["lib.es2017.full.d.ts"]=!0,Z["lib.es2017.intl.d.ts"]=!0,Z["lib.es2017.object.d.ts"]=!0,Z["lib.es2017.sharedmemory.d.ts"]=!0,Z["lib.es2017.string.d.ts"]=!0,Z["lib.es2017.typedarrays.d.ts"]=!0,Z["lib.es2018.asyncgenerator.d.ts"]=!0,Z["lib.es2018.asynciterable.d.ts"]=!0,Z["lib.es2018.d.ts"]=!0,Z["lib.es2018.full.d.ts"]=!0,Z["lib.es2018.intl.d.ts"]=!0,Z["lib.es2018.promise.d.ts"]=!0,Z["lib.es2018.regexp.d.ts"]=!0,Z["lib.es2019.array.d.ts"]=!0,Z["lib.es2019.d.ts"]=!0,Z["lib.es2019.full.d.ts"]=!0,Z["lib.es2019.object.d.ts"]=!0,Z["lib.es2019.string.d.ts"]=!0,Z["lib.es2019.symbol.d.ts"]=!0,Z["lib.es2020.bigint.d.ts"]=!0,Z["lib.es2020.d.ts"]=!0,Z["lib.es2020.full.d.ts"]=!0,Z["lib.es2020.intl.d.ts"]=!0,Z["lib.es2020.promise.d.ts"]=!0,Z["lib.es2020.sharedmemory.d.ts"]=!0,Z["lib.es2020.string.d.ts"]=!0,Z["lib.es2020.symbol.wellknown.d.ts"]=!0,Z["lib.es2021.d.ts"]=!0,Z["lib.es2021.full.d.ts"]=!0,Z["lib.es2021.intl.d.ts"]=!0,Z["lib.es2021.promise.d.ts"]=!0,Z["lib.es2021.string.d.ts"]=!0,Z["lib.es2021.weakref.d.ts"]=!0,Z["lib.es5.d.ts"]=!0,Z["lib.es6.d.ts"]=!0,Z["lib.esnext.d.ts"]=!0,Z["lib.esnext.full.d.ts"]=!0,Z["lib.esnext.intl.d.ts"]=!0,Z["lib.esnext.promise.d.ts"]=!0,Z["lib.esnext.string.d.ts"]=!0,Z["lib.esnext.weakref.d.ts"]=!0,Z["lib.scripthost.d.ts"]=!0,Z["lib.webworker.d.ts"]=!0,Z["lib.webworker.importscripts.d.ts"]=!0,Z["lib.webworker.iterable.d.ts"]=!0;var D=function(){function e(t){(0,c.Z)(this,e),this._worker=t}return(0,l.Z)(e,[{key:"_textSpanToRange",value:function(e,t){var r=e.getPositionAt(t.start),n=e.getPositionAt(t.start+t.length),i=r.lineNumber,a=r.column,s=n.lineNumber,o=n.column;return{startLineNumber:i,startColumn:a,endLineNumber:s,endColumn:o}}}]),e}(),F=function(){function e(t){(0,c.Z)(this,e),(0,d.Z)(this,"_libFiles",void 0),(0,d.Z)(this,"_hasFetchedLibFiles",void 0),(0,d.Z)(this,"_fetchLibFilesPromise",void 0),this._worker=t,this._libFiles={},this._hasFetchedLibFiles=!1,this._fetchLibFilesPromise=null}return(0,l.Z)(e,[{key:"isLibFile",value:function(e){return!!e&&(0===e.path.indexOf("/lib.")&&!!Z[e.path.slice(1)])}},{key:"getOrCreateModel",value:function(e){var t=w.Uri.parse(e),r=w.editor.getModel(t);if(r)return r;if(this.isLibFile(t)&&this._hasFetchedLibFiles)return w.editor.createModel(this._libFiles[t.path.slice(1)],"typescript",t);var n=m.TG.getExtraLibs()[e];return n?w.editor.createModel(n.content,"typescript",t):null}},{key:"_containsLibFile",value:function(e){var t,r=(0,p.Z)(e);try{for(r.s();!(t=r.n()).done;){var n=t.value;if(this.isLibFile(n))return!0}}catch(i){r.e(i)}finally{r.f()}return!1}},{key:"fetchLibFilesIfNecessary",value:function(){var e=(0,u.Z)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this._containsLibFile(t)){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,this._fetchLibFiles();case 4:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"_fetchLibFiles",value:function(){var e=this;return this._fetchLibFilesPromise||(this._fetchLibFilesPromise=this._worker().then((function(e){return e.getLibFiles()})).then((function(t){e._hasFetchedLibFiles=!0,e._libFiles=t}))),this._fetchLibFilesPromise}}]),e}(),R=function(e){(0,s.Z)(r,e);var t=(0,o.Z)(r);function r(e,n,i,s){var o;(0,c.Z)(this,r),o=t.call(this,s),(0,d.Z)((0,a.Z)(o),"_disposables",[]),(0,d.Z)((0,a.Z)(o),"_listener",Object.create(null)),o._libFiles=e,o._defaults=n,o._selector=i;var u=function(e){if(e.getLanguageId()===i){var t,r=function(){var t=o._defaults.getDiagnosticsOptions(),r=t.onlyVisible;r?e.isAttachedToEditor()&&o._doValidate(e):o._doValidate(e)},n=e.onDidChangeContent((function(){clearTimeout(t),t=window.setTimeout(r,500)})),a=e.onDidChangeAttached((function(){var t=o._defaults.getDiagnosticsOptions(),n=t.onlyVisible;n&&(e.isAttachedToEditor()?r():w.editor.setModelMarkers(e,o._selector,[]))}));o._listener[e.uri.toString()]={dispose:function(){n.dispose(),a.dispose(),clearTimeout(t)}},r()}},l=function(e){w.editor.setModelMarkers(e,o._selector,[]);var t=e.uri.toString();o._listener[t]&&(o._listener[t].dispose(),delete o._listener[t])};o._disposables.push(w.editor.onDidCreateModel((function(e){return u(e)}))),o._disposables.push(w.editor.onWillDisposeModel(l)),o._disposables.push(w.editor.onDidChangeModelLanguage((function(e){l(e.model),u(e.model)}))),o._disposables.push({dispose:function(){var e,t=(0,p.Z)(w.editor.getModels());try{for(t.s();!(e=t.n()).done;){var r=e.value;l(r)}}catch(n){t.e(n)}finally{t.f()}}});var f=function(){var e,t=(0,p.Z)(w.editor.getModels());try{for(t.s();!(e=t.n()).done;){var r=e.value;l(r),u(r)}}catch(n){t.e(n)}finally{t.f()}};return o._disposables.push(o._defaults.onDidChange(f)),o._disposables.push(o._defaults.onDidExtraLibsChange(f)),w.editor.getModels().forEach((function(e){return u(e)})),o}return(0,l.Z)(r,[{key:"dispose",value:function(){this._disposables.forEach((function(e){return e&&e.dispose()})),this._disposables=[]}},{key:"_doValidate",value:function(){var e=(0,u.Z)(regeneratorRuntime.mark((function e(t){var r,n,i,a,s,o,u,c,l,d=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this._worker(t.uri);case 2:if(r=e.sent,!t.isDisposed()){e.next=5;break}return e.abrupt("return");case 5:return n=[],i=this._defaults.getDiagnosticsOptions(),a=i.noSyntaxValidation,s=i.noSemanticValidation,o=i.noSuggestionDiagnostics,a||n.push(r.getSyntacticDiagnostics(t.uri.toString())),s||n.push(r.getSemanticDiagnostics(t.uri.toString())),o||n.push(r.getSuggestionDiagnostics(t.uri.toString())),e.next=12,Promise.all(n);case 12:if(u=e.sent,u&&!t.isDisposed()){e.next=15;break}return e.abrupt("return");case 15:return c=u.reduce((function(e,t){return t.concat(e)}),[]).filter((function(e){return-1===(d._defaults.getDiagnosticsOptions().diagnosticCodesToIgnore||[]).indexOf(e.code)})),l=c.map((function(e){return e.relatedInformation||[]})).reduce((function(e,t){return t.concat(e)}),[]).map((function(e){return e.file?w.Uri.parse(e.file.fileName):null})),e.next=19,this._libFiles.fetchLibFilesIfNecessary(l);case 19:if(!t.isDisposed()){e.next=21;break}return e.abrupt("return");case 21:w.editor.setModelMarkers(t,this._selector,c.map((function(e){return d._convertDiagnostics(t,e)})));case 22:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"_convertDiagnostics",value:function(e,t){var r=t.start||0,n=t.length||1,i=e.getPositionAt(r),a=i.lineNumber,s=i.column,o=e.getPositionAt(r+n),u=o.lineNumber,c=o.column,l=[];return t.reportsUnnecessary&&l.push(w.MarkerTag.Unnecessary),t.reportsDeprecated&&l.push(w.MarkerTag.Deprecated),{severity:this._tsDiagnosticCategoryToMarkerSeverity(t.category),startLineNumber:a,startColumn:s,endLineNumber:u,endColumn:c,message:C(t.messageText,"\n"),code:t.code.toString(),tags:l,relatedInformation:this._convertRelatedInformation(e,t.relatedInformation)}}},{key:"_convertRelatedInformation",value:function(e,t){var r=this;if(!t)return[];var n=[];return t.forEach((function(t){var i=e;if(t.file&&(i=r._libFiles.getOrCreateModel(t.file.fileName)),i){var a=t.start||0,s=t.length||1,o=i.getPositionAt(a),u=o.lineNumber,c=o.column,l=i.getPositionAt(a+s),d=l.lineNumber,p=l.column;n.push({resource:i.uri,startLineNumber:u,startColumn:c,endLineNumber:d,endColumn:p,message:C(t.messageText,"\n")})}})),n}},{key:"_tsDiagnosticCategoryToMarkerSeverity",value:function(e){switch(e){case 1:return w.MarkerSeverity.Error;case 3:return w.MarkerSeverity.Info;case 0:return w.MarkerSeverity.Warning;case 2:return w.MarkerSeverity.Hint}return w.MarkerSeverity.Info}}]),r}(D),I=function(e){(0,s.Z)(r,e);var t=(0,o.Z)(r);function r(){return(0,c.Z)(this,r),t.apply(this,arguments)}return(0,l.Z)(r,[{key:"triggerCharacters",get:function(){return["."]}},{key:"provideCompletionItems",value:function(){var e=(0,u.Z)(regeneratorRuntime.mark((function e(t,n,i,a){var s,o,u,c,l,d,p;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return s=t.getWordUntilPosition(n),o=new w.Range(n.lineNumber,s.startColumn,n.lineNumber,s.endColumn),u=t.uri,c=t.getOffsetAt(n),e.next=6,this._worker(u);case 6:if(l=e.sent,!t.isDisposed()){e.next=9;break}return e.abrupt("return");case 9:return e.next=11,l.getCompletionsAtPosition(u.toString(),c);case 11:if(d=e.sent,d&&!t.isDisposed()){e.next=14;break}return e.abrupt("return");case 14:return p=d.entries.map((function(e){var i,a=o;if(e.replacementSpan){var s=t.getPositionAt(e.replacementSpan.start),l=t.getPositionAt(e.replacementSpan.start+e.replacementSpan.length);a=new w.Range(s.lineNumber,s.column,l.lineNumber,l.column)}var d=[];return-1!==(null===(i=e.kindModifiers)||void 0===i?void 0:i.indexOf("deprecated"))&&d.push(w.languages.CompletionItemTag.Deprecated),{uri:u,position:n,offset:c,range:a,label:e.name,insertText:e.name,sortText:e.sortText,kind:r.convertKind(e.kind),tags:d}})),e.abrupt("return",{suggestions:p});case 16:case"end":return e.stop()}}),e,this)})));function t(t,r,n,i){return e.apply(this,arguments)}return t}()},{key:"resolveCompletionItem",value:function(){var e=(0,u.Z)(regeneratorRuntime.mark((function e(t,n){var i,a,s,o,u,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i=t,a=i.uri,s=i.position,o=i.offset,e.next=6,this._worker(a);case 6:return u=e.sent,e.next=9,u.getCompletionEntryDetails(a.toString(),o,i.label);case 9:if(c=e.sent,c){e.next=12;break}return e.abrupt("return",i);case 12:return e.abrupt("return",{uri:a,position:s,label:c.name,kind:r.convertKind(c.kind),detail:A(c.displayParts),documentation:{value:r.createDocumentationString(c)}});case 13:case"end":return e.stop()}}),e,this)})));function t(t,r){return e.apply(this,arguments)}return t}()}],[{key:"convertKind",value:function(e){switch(e){case E.primitiveType:case E.keyword:return w.languages.CompletionItemKind.Keyword;case E.variable:case E.localVariable:return w.languages.CompletionItemKind.Variable;case E.memberVariable:case E.memberGetAccessor:case E.memberSetAccessor:return w.languages.CompletionItemKind.Field;case E.function:case E.memberFunction:case E.constructSignature:case E.callSignature:case E.indexSignature:return w.languages.CompletionItemKind.Function;case E.enum:return w.languages.CompletionItemKind.Enum;case E.module:return w.languages.CompletionItemKind.Module;case E.class:return w.languages.CompletionItemKind.Class;case E.interface:return w.languages.CompletionItemKind.Interface;case E.warning:return w.languages.CompletionItemKind.File}return w.languages.CompletionItemKind.Property}},{key:"createDocumentationString",value:function(e){var t=A(e.documentation);if(e.tags){var r,n=(0,p.Z)(e.tags);try{for(n.s();!(r=n.n()).done;){var i=r.value;t+="\n\n".concat(L(i))}}catch(a){n.e(a)}finally{n.f()}}return t}}]),r}(D);function L(e){var t="*@".concat(e.name,"*");if("param"===e.name&&e.text){var r=(0,i.Z)(e.text),n=r[0],a=r.slice(1);t+="`".concat(n.text,"`"),a.length>0&&(t+=" — ".concat(a.map((function(e){return e.text})).join(" ")))}else Array.isArray(e.text)?t+=" — ".concat(e.text.map((function(e){return e.text})).join(" ")):e.text&&(t+=" — ".concat(e.text));return t}var T=function(e){(0,s.Z)(r,e);var t=(0,o.Z)(r);function r(){var e;(0,c.Z)(this,r);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return e=t.call.apply(t,[this].concat(i)),(0,d.Z)((0,a.Z)(e),"signatureHelpTriggerCharacters",["(",","]),e}return(0,l.Z)(r,[{key:"provideSignatureHelp",value:function(){var e=(0,u.Z)(regeneratorRuntime.mark((function e(t,n,i,a){var s,o,u,c,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return s=t.uri,o=t.getOffsetAt(n),e.next=4,this._worker(s);case 4:if(u=e.sent,!t.isDisposed()){e.next=7;break}return e.abrupt("return");case 7:return e.next=9,u.getSignatureHelpItems(s.toString(),o,{triggerReason:r._toSignatureHelpTriggerReason(a)});case 9:if(c=e.sent,c&&!t.isDisposed()){e.next=12;break}return e.abrupt("return");case 12:return l={activeSignature:c.selectedItemIndex,activeParameter:c.argumentIndex,signatures:[]},c.items.forEach((function(e){var t={label:"",parameters:[]};t.documentation={value:A(e.documentation)},t.label+=A(e.prefixDisplayParts),e.parameters.forEach((function(r,n,i){var a=A(r.displayParts),s={label:a,documentation:{value:A(r.documentation)}};t.label+=a,t.parameters.push(s),n<i.length-1&&(t.label+=A(e.separatorDisplayParts))})),t.label+=A(e.suffixDisplayParts),l.signatures.push(t)})),e.abrupt("return",{value:l,dispose:function(){}});case 15:case"end":return e.stop()}}),e,this)})));function t(t,r,n,i){return e.apply(this,arguments)}return t}()}],[{key:"_toSignatureHelpTriggerReason",value:function(e){switch(e.triggerKind){case w.languages.SignatureHelpTriggerKind.TriggerCharacter:return e.triggerCharacter?e.isRetrigger?{kind:"retrigger",triggerCharacter:e.triggerCharacter}:{kind:"characterTyped",triggerCharacter:e.triggerCharacter}:{kind:"invoked"};case w.languages.SignatureHelpTriggerKind.ContentChange:return e.isRetrigger?{kind:"retrigger"}:{kind:"invoked"};case w.languages.SignatureHelpTriggerKind.Invoke:default:return{kind:"invoked"}}}}]),r}(D),P=function(e){(0,s.Z)(r,e);var t=(0,o.Z)(r);function r(){return(0,c.Z)(this,r),t.apply(this,arguments)}return(0,l.Z)(r,[{key:"provideHover",value:function(){var e=(0,u.Z)(regeneratorRuntime.mark((function e(t,r,n){var i,a,s,o,u,c,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i=t.uri,a=t.getOffsetAt(r),e.next=4,this._worker(i);case 4:if(s=e.sent,!t.isDisposed()){e.next=7;break}return e.abrupt("return");case 7:return e.next=9,s.getQuickInfoAtPosition(i.toString(),a);case 9:if(o=e.sent,o&&!t.isDisposed()){e.next=12;break}return e.abrupt("return");case 12:return u=A(o.documentation),c=o.tags?o.tags.map((function(e){return L(e)})).join("  \n\n"):"",l=A(o.displayParts),e.abrupt("return",{range:this._textSpanToRange(t,o.textSpan),contents:[{value:"```typescript\n"+l+"\n```\n"},{value:u+(c?"\n\n"+c:"")}]});case 16:case"end":return e.stop()}}),e,this)})));function t(t,r,n){return e.apply(this,arguments)}return t}()}]),r}(D),O=function(e){(0,s.Z)(r,e);var t=(0,o.Z)(r);function r(){return(0,c.Z)(this,r),t.apply(this,arguments)}return(0,l.Z)(r,[{key:"provideDocumentHighlights",value:function(){var e=(0,u.Z)(regeneratorRuntime.mark((function e(t,r,n){var i,a,s,o,u=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i=t.uri,a=t.getOffsetAt(r),e.next=4,this._worker(i);case 4:if(s=e.sent,!t.isDisposed()){e.next=7;break}return e.abrupt("return");case 7:return e.next=9,s.getOccurrencesAtPosition(i.toString(),a);case 9:if(o=e.sent,o&&!t.isDisposed()){e.next=12;break}return e.abrupt("return");case 12:return e.abrupt("return",o.map((function(e){return{range:u._textSpanToRange(t,e.textSpan),kind:e.isWriteAccess?w.languages.DocumentHighlightKind.Write:w.languages.DocumentHighlightKind.Text}})));case 13:case"end":return e.stop()}}),e,this)})));function t(t,r,n){return e.apply(this,arguments)}return t}()}]),r}(D),N=function(e){(0,s.Z)(r,e);var t=(0,o.Z)(r);function r(e,n){var i;return(0,c.Z)(this,r),i=t.call(this,n),i._libFiles=e,i}return(0,l.Z)(r,[{key:"provideDefinition",value:function(){var e=(0,u.Z)(regeneratorRuntime.mark((function e(t,r,n){var i,a,s,o,u,c,l,d,f;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i=t.uri,a=t.getOffsetAt(r),e.next=4,this._worker(i);case 4:if(s=e.sent,!t.isDisposed()){e.next=7;break}return e.abrupt("return");case 7:return e.next=9,s.getDefinitionAtPosition(i.toString(),a);case 9:if(o=e.sent,o&&!t.isDisposed()){e.next=12;break}return e.abrupt("return");case 12:return e.next=14,this._libFiles.fetchLibFilesIfNecessary(o.map((function(e){return w.Uri.parse(e.fileName)})));case 14:if(!t.isDisposed()){e.next=16;break}return e.abrupt("return");case 16:u=[],c=(0,p.Z)(o);try{for(c.s();!(l=c.n()).done;)d=l.value,f=this._libFiles.getOrCreateModel(d.fileName),f&&u.push({uri:f.uri,range:this._textSpanToRange(f,d.textSpan)})}catch(n){c.e(n)}finally{c.f()}return e.abrupt("return",u);case 20:case"end":return e.stop()}}),e,this)})));function t(t,r,n){return e.apply(this,arguments)}return t}()}]),r}(D),K=function(e){(0,s.Z)(r,e);var t=(0,o.Z)(r);function r(e,n){var i;return(0,c.Z)(this,r),i=t.call(this,n),i._libFiles=e,i}return(0,l.Z)(r,[{key:"provideReferences",value:function(){var e=(0,u.Z)(regeneratorRuntime.mark((function e(t,r,n,i){var a,s,o,u,c,l,d,f,g;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t.uri,s=t.getOffsetAt(r),e.next=4,this._worker(a);case 4:if(o=e.sent,!t.isDisposed()){e.next=7;break}return e.abrupt("return");case 7:return e.next=9,o.getReferencesAtPosition(a.toString(),s);case 9:if(u=e.sent,u&&!t.isDisposed()){e.next=12;break}return e.abrupt("return");case 12:return e.next=14,this._libFiles.fetchLibFilesIfNecessary(u.map((function(e){return w.Uri.parse(e.fileName)})));case 14:if(!t.isDisposed()){e.next=16;break}return e.abrupt("return");case 16:c=[],l=(0,p.Z)(u);try{for(l.s();!(d=l.n()).done;)f=d.value,g=this._libFiles.getOrCreateModel(f.fileName),g&&c.push({uri:g.uri,range:this._textSpanToRange(g,f.textSpan)})}catch(n){l.e(n)}finally{l.f()}return e.abrupt("return",c);case 20:case"end":return e.stop()}}),e,this)})));function t(t,r,n,i){return e.apply(this,arguments)}return t}()}]),r}(D),M=function(e){(0,s.Z)(r,e);var t=(0,o.Z)(r);function r(){return(0,c.Z)(this,r),t.apply(this,arguments)}return(0,l.Z)(r,[{key:"provideDocumentSymbols",value:function(){var e=(0,u.Z)(regeneratorRuntime.mark((function e(t,r){var n,i,a,s,o,u=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.uri,e.next=3,this._worker(n);case 3:if(i=e.sent,!t.isDisposed()){e.next=6;break}return e.abrupt("return");case 6:return e.next=8,i.getNavigationBarItems(n.toString());case 8:if(a=e.sent,a&&!t.isDisposed()){e.next=11;break}return e.abrupt("return");case 11:return s=function e(r,n,i){var a={name:n.text,detail:"",kind:H[n.kind]||w.languages.SymbolKind.Variable,range:u._textSpanToRange(t,n.spans[0]),selectionRange:u._textSpanToRange(t,n.spans[0]),tags:[]};if(i&&(a.containerName=i),n.childItems&&n.childItems.length>0){var s,o=(0,p.Z)(n.childItems);try{for(o.s();!(s=o.n()).done;){var c=s.value;e(r,c,a.name)}}catch(l){o.e(l)}finally{o.f()}}r.push(a)},o=[],a.forEach((function(e){return s(o,e)})),e.abrupt("return",o);case 15:case"end":return e.stop()}}),e,this)})));function t(t,r){return e.apply(this,arguments)}return t}()}]),r}(D),E=(0,l.Z)((function e(){(0,c.Z)(this,e)}));_(E,"unknown",""),_(E,"keyword","keyword"),_(E,"script","script"),_(E,"module","module"),_(E,"class","class"),_(E,"interface","interface"),_(E,"type","type"),_(E,"enum","enum"),_(E,"variable","var"),_(E,"localVariable","local var"),_(E,"function","function"),_(E,"localFunction","local function"),_(E,"memberFunction","method"),_(E,"memberGetAccessor","getter"),_(E,"memberSetAccessor","setter"),_(E,"memberVariable","property"),_(E,"constructorImplementation","constructor"),_(E,"callSignature","call"),_(E,"indexSignature","index"),_(E,"constructSignature","construct"),_(E,"parameter","parameter"),_(E,"typeParameter","type parameter"),_(E,"primitiveType","primitive type"),_(E,"label","label"),_(E,"alias","alias"),_(E,"const","const"),_(E,"let","let"),_(E,"warning","warning");var H=Object.create(null);H[E.module]=w.languages.SymbolKind.Module,H[E.class]=w.languages.SymbolKind.Class,H[E.enum]=w.languages.SymbolKind.Enum,H[E.interface]=w.languages.SymbolKind.Interface,H[E.memberFunction]=w.languages.SymbolKind.Method,H[E.memberVariable]=w.languages.SymbolKind.Property,H[E.memberGetAccessor]=w.languages.SymbolKind.Property,H[E.memberSetAccessor]=w.languages.SymbolKind.Property,H[E.variable]=w.languages.SymbolKind.Variable,H[E.const]=w.languages.SymbolKind.Variable,H[E.localVariable]=w.languages.SymbolKind.Variable,H[E.variable]=w.languages.SymbolKind.Variable,H[E.function]=w.languages.SymbolKind.Function,H[E.localFunction]=w.languages.SymbolKind.Function;var V,W,j=function(e){(0,s.Z)(r,e);var t=(0,o.Z)(r);function r(){return(0,c.Z)(this,r),t.apply(this,arguments)}return(0,l.Z)(r,[{key:"_convertTextChanges",value:function(e,t){return{text:t.newText,range:this._textSpanToRange(e,t.span)}}}],[{key:"_convertOptions",value:function(e){return{ConvertTabsToSpaces:e.insertSpaces,TabSize:e.tabSize,IndentSize:e.tabSize,IndentStyle:2,NewLineCharacter:"\n",InsertSpaceAfterCommaDelimiter:!0,InsertSpaceAfterSemicolonInForStatements:!0,InsertSpaceBeforeAndAfterBinaryOperators:!0,InsertSpaceAfterKeywordsInControlFlowStatements:!0,InsertSpaceAfterFunctionKeywordForAnonymousFunctions:!0,InsertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis:!1,InsertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets:!1,InsertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces:!1,PlaceOpenBraceOnNewLineForControlBlocks:!1,PlaceOpenBraceOnNewLineForFunctions:!1}}}]),r}(D),B=function(e){(0,s.Z)(r,e);var t=(0,o.Z)(r);function r(){return(0,c.Z)(this,r),t.apply(this,arguments)}return(0,l.Z)(r,[{key:"provideDocumentRangeFormattingEdits",value:function(){var e=(0,u.Z)(regeneratorRuntime.mark((function e(t,r,n,i){var a,s,o,u,c,l=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t.uri,s=t.getOffsetAt({lineNumber:r.startLineNumber,column:r.startColumn}),o=t.getOffsetAt({lineNumber:r.endLineNumber,column:r.endColumn}),e.next=5,this._worker(a);case 5:if(u=e.sent,!t.isDisposed()){e.next=8;break}return e.abrupt("return");case 8:return e.next=10,u.getFormattingEditsForRange(a.toString(),s,o,j._convertOptions(n));case 10:if(c=e.sent,c&&!t.isDisposed()){e.next=13;break}return e.abrupt("return");case 13:return e.abrupt("return",c.map((function(e){return l._convertTextChanges(t,e)})));case 14:case"end":return e.stop()}}),e,this)})));function t(t,r,n,i){return e.apply(this,arguments)}return t}()}]),r}(j),U=function(e){(0,s.Z)(r,e);var t=(0,o.Z)(r);function r(){return(0,c.Z)(this,r),t.apply(this,arguments)}return(0,l.Z)(r,[{key:"autoFormatTriggerCharacters",get:function(){return[";","}","\n"]}},{key:"provideOnTypeFormattingEdits",value:function(){var e=(0,u.Z)(regeneratorRuntime.mark((function e(t,r,n,i,a){var s,o,u,c,l=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return s=t.uri,o=t.getOffsetAt(r),e.next=4,this._worker(s);case 4:if(u=e.sent,!t.isDisposed()){e.next=7;break}return e.abrupt("return");case 7:return e.next=9,u.getFormattingEditsAfterKeystroke(s.toString(),o,n,j._convertOptions(i));case 9:if(c=e.sent,c&&!t.isDisposed()){e.next=12;break}return e.abrupt("return");case 12:return e.abrupt("return",c.map((function(e){return l._convertTextChanges(t,e)})));case 13:case"end":return e.stop()}}),e,this)})));function t(t,r,n,i,a){return e.apply(this,arguments)}return t}()}]),r}(j),z=function(e){(0,s.Z)(r,e);var t=(0,o.Z)(r);function r(){return(0,c.Z)(this,r),t.apply(this,arguments)}return(0,l.Z)(r,[{key:"provideCodeActions",value:function(){var e=(0,u.Z)(regeneratorRuntime.mark((function e(t,r,n,i){var a,s,o,u,c,l,d,p,f=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t.uri,s=t.getOffsetAt({lineNumber:r.startLineNumber,column:r.startColumn}),o=t.getOffsetAt({lineNumber:r.endLineNumber,column:r.endColumn}),u=j._convertOptions(t.getOptions()),c=n.markers.filter((function(e){return e.code})).map((function(e){return e.code})).map(Number),e.next=7,this._worker(a);case 7:if(l=e.sent,!t.isDisposed()){e.next=10;break}return e.abrupt("return");case 10:return e.next=12,l.getCodeFixesAtPosition(a.toString(),s,o,c,u);case 12:if(d=e.sent,d&&!t.isDisposed()){e.next=15;break}return e.abrupt("return",{actions:[],dispose:function(){}});case 15:return p=d.filter((function(e){return 0===e.changes.filter((function(e){return e.isNewFile})).length})).map((function(e){return f._tsCodeFixActionToMonacoCodeAction(t,n,e)})),e.abrupt("return",{actions:p,dispose:function(){}});case 17:case"end":return e.stop()}}),e,this)})));function t(t,r,n,i){return e.apply(this,arguments)}return t}()},{key:"_tsCodeFixActionToMonacoCodeAction",value:function(e,t,r){var n,i=[],a=(0,p.Z)(r.changes);try{for(a.s();!(n=a.n()).done;){var s,o=n.value,u=(0,p.Z)(o.textChanges);try{for(u.s();!(s=u.n()).done;){var c=s.value;i.push({resource:e.uri,edit:{range:this._textSpanToRange(e,c.span),text:c.newText}})}}catch(d){u.e(d)}finally{u.f()}}}catch(d){a.e(d)}finally{a.f()}var l={title:r.description,edit:{edits:i},diagnostics:t.markers,kind:"quickfix"};return l}}]),r}(j),G=function(e){(0,s.Z)(r,e);var t=(0,o.Z)(r);function r(e,n){var i;return(0,c.Z)(this,r),i=t.call(this,n),i._libFiles=e,i}return(0,l.Z)(r,[{key:"provideRenameEdits",value:function(){var e=(0,u.Z)(regeneratorRuntime.mark((function e(t,r,n,i){var a,s,o,u,c,l,d,f,g,m,h;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t.uri,s=a.toString(),o=t.getOffsetAt(r),e.next=5,this._worker(a);case 5:if(u=e.sent,!t.isDisposed()){e.next=8;break}return e.abrupt("return");case 8:return e.next=10,u.getRenameInfo(s,o,{allowRenameOfImportPath:!1});case 10:if(c=e.sent,!1!==c.canRename){e.next=13;break}return e.abrupt("return",{edits:[],rejectReason:c.localizedErrorMessage});case 13:if(void 0===c.fileToRename){e.next=15;break}throw new Error("Renaming files is not supported.");case 15:return e.next=17,u.findRenameLocations(s,o,!1,!1,!1);case 17:if(l=e.sent,l&&!t.isDisposed()){e.next=20;break}return e.abrupt("return");case 20:d=[],f=(0,p.Z)(l),e.prev=22,f.s();case 24:if((g=f.n()).done){e.next=34;break}if(m=g.value,h=this._libFiles.getOrCreateModel(m.fileName),!h){e.next=31;break}d.push({resource:h.uri,edit:{range:this._textSpanToRange(h,m.textSpan),text:n}}),e.next=32;break;case 31:throw new Error("Unknown file ".concat(m.fileName,"."));case 32:e.next=24;break;case 34:e.next=39;break;case 36:e.prev=36,e.t0=e["catch"](22),f.e(e.t0);case 39:return e.prev=39,f.f(),e.finish(39);case 42:return e.abrupt("return",{edits:d});case 43:case"end":return e.stop()}}),e,this,[[22,36,39,42]])})));function t(t,r,n,i){return e.apply(this,arguments)}return t}()}]),r}(D),J=function(e){(0,s.Z)(r,e);var t=(0,o.Z)(r);function r(){return(0,c.Z)(this,r),t.apply(this,arguments)}return(0,l.Z)(r,[{key:"provideInlayHints",value:function(){var e=(0,u.Z)(regeneratorRuntime.mark((function e(t,r,i){var a,s,o,u,c,l,d,p=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t.uri,s=a.toString(),o=t.getOffsetAt({lineNumber:r.startLineNumber,column:r.startColumn}),u=t.getOffsetAt({lineNumber:r.endLineNumber,column:r.endColumn}),e.next=6,this._worker(a);case 6:if(c=e.sent,!t.isDisposed()){e.next=9;break}return e.abrupt("return",null);case 9:return e.next=11,c.provideInlayHints(s,o,u);case 11:return l=e.sent,d=l.map((function(e){return(0,n.Z)((0,n.Z)({},e),{},{label:e.text,position:t.getPositionAt(e.position),kind:p._convertHintKind(e.kind)})})),e.abrupt("return",{hints:d,dispose:function(){}});case 14:case"end":return e.stop()}}),e,this)})));function t(t,r,n){return e.apply(this,arguments)}return t}()},{key:"_convertHintKind",value:function(e){switch(e){case"Parameter":return w.languages.InlayHintKind.Parameter;case"Type":return w.languages.InlayHintKind.Type;default:return w.languages.InlayHintKind.Other}}}]),r}(D);function Q(e){W=$(e,"typescript")}function q(e){V=$(e,"javascript")}function X(){return new Promise((function(e,t){if(!V)return t("JavaScript not registered!");e(V)}))}function Y(){return new Promise((function(e,t){if(!W)return t("TypeScript not registered!");e(W)}))}function $(e,t){var r=new S(t,e),n=function(){return r.getLanguageServiceWorker.apply(r,arguments)},i=new F(n);return w.languages.registerCompletionItemProvider(t,new I(n)),w.languages.registerSignatureHelpProvider(t,new T(n)),w.languages.registerHoverProvider(t,new P(n)),w.languages.registerDocumentHighlightProvider(t,new O(n)),w.languages.registerDefinitionProvider(t,new N(i,n)),w.languages.registerReferenceProvider(t,new K(i,n)),w.languages.registerDocumentSymbolProvider(t,new M(n)),w.languages.registerDocumentRangeFormattingEditProvider(t,new B(n)),w.languages.registerOnTypeFormattingEditProvider(t,new U(n)),w.languages.registerCodeActionProvider(t,new z(n)),w.languages.registerRenameProvider(t,new G(i,n)),w.languages.registerInlayHintsProvider(t,new J(n)),new R(i,e,t,n),n}}}]);
//# sourceMappingURL=8507-legacy.dd94ee03.js.map