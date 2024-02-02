(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[2576],{27280:function(t){t.exports=function(){"use strict";return function(t,e){var n=e.prototype,i=n.format;n.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return i.bind(this)(t);var s=this.$utils(),r=(t||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,(function(t){switch(t){case"Q":return Math.ceil((e.$M+1)/3);case"Do":return n.ordinal(e.$D);case"gggg":return e.weekYear();case"GGGG":return e.isoWeekYear();case"wo":return n.ordinal(e.week(),"W");case"w":case"ww":return s.s(e.week(),"w"===t?1:2,"0");case"W":case"WW":return s.s(e.isoWeek(),"W"===t?1:2,"0");case"k":case"kk":return s.s(String(0===e.$H?24:e.$H),"k"===t?1:2,"0");case"X":return Math.floor(e.$d.getTime()/1e3);case"x":return e.$d.getTime();case"z":return"["+e.offsetName()+"]";case"zzz":return"["+e.offsetName("long")+"]";default:return t}}));return i.bind(this)(r)}}}()},75816:function(t){t.exports=function(){"use strict";var t={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},e=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,i=/\d\d?/,s=/\d*[^-_:/,()\s\d]+/,r={},a=function(t){return(t=+t)+(t>68?1900:2e3)},o=function(t){return function(e){this[t]=+e}},c=[/[+-]\d\d:?(\d\d)?|Z/,function(t){(this.zone||(this.zone={})).offset=function(t){if(!t)return 0;if("Z"===t)return 0;var e=t.match(/([+-]|\d\d)/g),n=60*e[1]+(+e[2]||0);return 0===n?0:"+"===e[0]?-n:n}(t)}],l=function(t){var e=r[t];return e&&(e.indexOf?e:e.s.concat(e.f))},u=function(t,e){var n,i=r.meridiem;if(i){for(var s=1;s<=24;s+=1)if(t.indexOf(i(s,0,e))>-1){n=s>12;break}}else n=t===(e?"pm":"PM");return n},d={A:[s,function(t){this.afternoon=u(t,!1)}],a:[s,function(t){this.afternoon=u(t,!0)}],S:[/\d/,function(t){this.milliseconds=100*+t}],SS:[n,function(t){this.milliseconds=10*+t}],SSS:[/\d{3}/,function(t){this.milliseconds=+t}],s:[i,o("seconds")],ss:[i,o("seconds")],m:[i,o("minutes")],mm:[i,o("minutes")],H:[i,o("hours")],h:[i,o("hours")],HH:[i,o("hours")],hh:[i,o("hours")],D:[i,o("day")],DD:[n,o("day")],Do:[s,function(t){var e=r.ordinal,n=t.match(/\d+/);if(this.day=n[0],e)for(var i=1;i<=31;i+=1)e(i).replace(/\[|\]/g,"")===t&&(this.day=i)}],M:[i,o("month")],MM:[n,o("month")],MMM:[s,function(t){var e=l("months"),n=(l("monthsShort")||e.map((function(t){return t.slice(0,3)}))).indexOf(t)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[s,function(t){var e=l("months").indexOf(t)+1;if(e<1)throw new Error;this.month=e%12||e}],Y:[/[+-]?\d+/,o("year")],YY:[n,function(t){this.year=a(t)}],YYYY:[/\d{4}/,o("year")],Z:c,ZZ:c};function h(n){var i,s;i=n,s=r&&r.formats;for(var a=(n=i.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(e,n,i){var r=i&&i.toUpperCase();return n||s[i]||t[i]||s[r].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(t,e,n){return e||n.slice(1)}))}))).match(e),o=a.length,c=0;c<o;c+=1){var l=a[c],u=d[l],h=u&&u[0],f=u&&u[1];a[c]=f?{regex:h,parser:f}:l.replace(/^\[|\]$/g,"")}return function(t){for(var e={},n=0,i=0;n<o;n+=1){var s=a[n];if("string"==typeof s)i+=s.length;else{var r=s.regex,c=s.parser,l=t.slice(i),u=r.exec(l)[0];c.call(e,u),t=t.replace(u,"")}}return function(t){var e=t.afternoon;if(void 0!==e){var n=t.hours;e?n<12&&(t.hours+=12):12===n&&(t.hours=0),delete t.afternoon}}(e),e}}return function(t,e,n){n.p.customParseFormat=!0,t&&t.parseTwoDigitYear&&(a=t.parseTwoDigitYear);var i=e.prototype,s=i.parse;i.parse=function(t){var e=t.date,i=t.utc,a=t.args;this.$u=i;var o=a[1];if("string"==typeof o){var c=!0===a[2],l=!0===a[3],u=c||l,d=a[2];l&&(d=a[2]),r=this.$locale(),!c&&d&&(r=n.Ls[d]),this.$d=function(t,e,n){try{if(["x","X"].indexOf(e)>-1)return new Date(("X"===e?1e3:1)*t);var i=h(e)(t),s=i.year,r=i.month,a=i.day,o=i.hours,c=i.minutes,l=i.seconds,u=i.milliseconds,d=i.zone,f=new Date,m=a||(s||r?1:f.getDate()),p=s||f.getFullYear(),y=0;s&&!r||(y=r>0?r-1:f.getMonth());var k=o||0,g=c||0,v=l||0,b=u||0;return d?new Date(Date.UTC(p,y,m,k,g,v,b+60*d.offset*1e3)):n?new Date(Date.UTC(p,y,m,k,g,v,b)):new Date(p,y,m,k,g,v,b)}catch(t){return new Date("")}}(e,o,i),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),u&&e!=this.format(o)&&(this.$d=new Date("")),r={}}else if(o instanceof Array)for(var f=o.length,m=1;m<=f;m+=1){a[1]=o[m-1];var p=n.apply(this,a);if(p.isValid()){this.$d=p.$d,this.$L=p.$L,this.init();break}m===f&&(this.$d=new Date(""))}else s.call(this,t)}}}()},18268:function(t){t.exports=function(){"use strict";var t="day";return function(e,n,i){var s=function(e){return e.add(4-e.isoWeekday(),t)},r=n.prototype;r.isoWeekYear=function(){return s(this).year()},r.isoWeek=function(e){if(!this.$utils().u(e))return this.add(7*(e-this.isoWeek()),t);var n,r,a,o=s(this),c=(n=this.isoWeekYear(),a=4-(r=(this.$u?i.utc:i)().year(n).startOf("year")).isoWeekday(),r.isoWeekday()>4&&(a+=7),r.add(a,t));return o.diff(c,"week")+1},r.isoWeekday=function(t){return this.$utils().u(t)?this.day()||7:this.day(this.day()%7?t:t-7)};var a=r.startOf;r.startOf=function(t,e){var n=this.$utils(),i=!!n.u(e)||e;return"isoweek"===n.p(t)?i?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):a.bind(this)(t,e)}}}()},82576:(t,e,n)=>{"use strict";n.d(e,{diagram:()=>Z});var i=n(86208),s=n(62264),r=n(18268),a=n(75816),o=n(27280),c=n(71582),l=n(66408),u=(n(24300),function(){var t=function(t,e,n,i){for(n=n||{},i=t.length;i--;n[t[i]]=e);return n},e=[1,3],n=[1,5],i=[7,9,11,12,13,14,15,16,17,18,19,20,21,23,25,26,28,35,40],s=[1,15],r=[1,16],a=[1,17],o=[1,18],c=[1,19],l=[1,20],u=[1,21],d=[1,22],h=[1,23],f=[1,24],m=[1,25],p=[1,26],y=[1,27],k=[1,29],g=[1,31],v=[1,34],b=[5,7,9,11,12,13,14,15,16,17,18,19,20,21,23,25,26,28,35,40],x={trace:function(){},yy:{},symbols_:{error:2,start:3,directive:4,gantt:5,document:6,EOF:7,line:8,SPACE:9,statement:10,NL:11,dateFormat:12,inclusiveEndDates:13,topAxis:14,axisFormat:15,tickInterval:16,excludes:17,includes:18,todayMarker:19,title:20,acc_title:21,acc_title_value:22,acc_descr:23,acc_descr_value:24,acc_descr_multiline_value:25,section:26,clickStatement:27,taskTxt:28,taskData:29,openDirective:30,typeDirective:31,closeDirective:32,":":33,argDirective:34,click:35,callbackname:36,callbackargs:37,href:38,clickStatementDebug:39,open_directive:40,type_directive:41,arg_directive:42,close_directive:43,$accept:0,$end:1},terminals_:{2:"error",5:"gantt",7:"EOF",9:"SPACE",11:"NL",12:"dateFormat",13:"inclusiveEndDates",14:"topAxis",15:"axisFormat",16:"tickInterval",17:"excludes",18:"includes",19:"todayMarker",20:"title",21:"acc_title",22:"acc_title_value",23:"acc_descr",24:"acc_descr_value",25:"acc_descr_multiline_value",26:"section",28:"taskTxt",29:"taskData",33:":",35:"click",36:"callbackname",37:"callbackargs",38:"href",40:"open_directive",41:"type_directive",42:"arg_directive",43:"close_directive"},productions_:[0,[3,2],[3,3],[6,0],[6,2],[8,2],[8,1],[8,1],[8,1],[10,1],[10,1],[10,1],[10,1],[10,1],[10,1],[10,1],[10,1],[10,1],[10,2],[10,2],[10,1],[10,1],[10,1],[10,2],[10,1],[4,4],[4,6],[27,2],[27,3],[27,3],[27,4],[27,3],[27,4],[27,2],[39,2],[39,3],[39,3],[39,4],[39,3],[39,4],[39,2],[30,1],[31,1],[34,1],[32,1]],performAction:function(t,e,n,i,s,r,a){var o=r.length-1;switch(s){case 2:return r[o-1];case 3:case 7:case 8:this.$=[];break;case 4:r[o-1].push(r[o]),this.$=r[o-1];break;case 5:case 6:this.$=r[o];break;case 9:i.setDateFormat(r[o].substr(11)),this.$=r[o].substr(11);break;case 10:i.enableInclusiveEndDates(),this.$=r[o].substr(18);break;case 11:i.TopAxis(),this.$=r[o].substr(8);break;case 12:i.setAxisFormat(r[o].substr(11)),this.$=r[o].substr(11);break;case 13:i.setTickInterval(r[o].substr(13)),this.$=r[o].substr(13);break;case 14:i.setExcludes(r[o].substr(9)),this.$=r[o].substr(9);break;case 15:i.setIncludes(r[o].substr(9)),this.$=r[o].substr(9);break;case 16:i.setTodayMarker(r[o].substr(12)),this.$=r[o].substr(12);break;case 17:i.setDiagramTitle(r[o].substr(6)),this.$=r[o].substr(6);break;case 18:this.$=r[o].trim(),i.setAccTitle(this.$);break;case 19:case 20:this.$=r[o].trim(),i.setAccDescription(this.$);break;case 21:i.addSection(r[o].substr(8)),this.$=r[o].substr(8);break;case 23:i.addTask(r[o-1],r[o]),this.$="task";break;case 27:this.$=r[o-1],i.setClickEvent(r[o-1],r[o],null);break;case 28:this.$=r[o-2],i.setClickEvent(r[o-2],r[o-1],r[o]);break;case 29:this.$=r[o-2],i.setClickEvent(r[o-2],r[o-1],null),i.setLink(r[o-2],r[o]);break;case 30:this.$=r[o-3],i.setClickEvent(r[o-3],r[o-2],r[o-1]),i.setLink(r[o-3],r[o]);break;case 31:this.$=r[o-2],i.setClickEvent(r[o-2],r[o],null),i.setLink(r[o-2],r[o-1]);break;case 32:this.$=r[o-3],i.setClickEvent(r[o-3],r[o-1],r[o]),i.setLink(r[o-3],r[o-2]);break;case 33:this.$=r[o-1],i.setLink(r[o-1],r[o]);break;case 34:case 40:this.$=r[o-1]+" "+r[o];break;case 35:case 36:case 38:this.$=r[o-2]+" "+r[o-1]+" "+r[o];break;case 37:case 39:this.$=r[o-3]+" "+r[o-2]+" "+r[o-1]+" "+r[o];break;case 41:i.parseDirective("%%{","open_directive");break;case 42:i.parseDirective(r[o],"type_directive");break;case 43:r[o]=r[o].trim().replace(/'/g,'"'),i.parseDirective(r[o],"arg_directive");break;case 44:i.parseDirective("}%%","close_directive","gantt")}},table:[{3:1,4:2,5:e,30:4,40:n},{1:[3]},{3:6,4:2,5:e,30:4,40:n},t(i,[2,3],{6:7}),{31:8,41:[1,9]},{41:[2,41]},{1:[2,1]},{4:30,7:[1,10],8:11,9:[1,12],10:13,11:[1,14],12:s,13:r,14:a,15:o,16:c,17:l,18:u,19:d,20:h,21:f,23:m,25:p,26:y,27:28,28:k,30:4,35:g,40:n},{32:32,33:[1,33],43:v},t([33,43],[2,42]),t(i,[2,8],{1:[2,2]}),t(i,[2,4]),{4:30,10:35,12:s,13:r,14:a,15:o,16:c,17:l,18:u,19:d,20:h,21:f,23:m,25:p,26:y,27:28,28:k,30:4,35:g,40:n},t(i,[2,6]),t(i,[2,7]),t(i,[2,9]),t(i,[2,10]),t(i,[2,11]),t(i,[2,12]),t(i,[2,13]),t(i,[2,14]),t(i,[2,15]),t(i,[2,16]),t(i,[2,17]),{22:[1,36]},{24:[1,37]},t(i,[2,20]),t(i,[2,21]),t(i,[2,22]),{29:[1,38]},t(i,[2,24]),{36:[1,39],38:[1,40]},{11:[1,41]},{34:42,42:[1,43]},{11:[2,44]},t(i,[2,5]),t(i,[2,18]),t(i,[2,19]),t(i,[2,23]),t(i,[2,27],{37:[1,44],38:[1,45]}),t(i,[2,33],{36:[1,46]}),t(b,[2,25]),{32:47,43:v},{43:[2,43]},t(i,[2,28],{38:[1,48]}),t(i,[2,29]),t(i,[2,31],{37:[1,49]}),{11:[1,50]},t(i,[2,30]),t(i,[2,32]),t(b,[2,26])],defaultActions:{5:[2,41],6:[2,1],34:[2,44],43:[2,43]},parseError:function(t,e){if(!e.recoverable){var n=new Error(t);throw n.hash=e,n}this.trace(t)},parse:function(t){var e=this,n=[0],i=[],s=[null],r=[],a=this.table,o="",c=0,l=0,u=r.slice.call(arguments,1),d=Object.create(this.lexer),h={yy:{}};for(var f in this.yy)Object.prototype.hasOwnProperty.call(this.yy,f)&&(h.yy[f]=this.yy[f]);d.setInput(t,h.yy),h.yy.lexer=d,h.yy.parser=this,void 0===d.yylloc&&(d.yylloc={});var m=d.yylloc;r.push(m);var p=d.options&&d.options.ranges;"function"==typeof h.yy.parseError?this.parseError=h.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;for(var y,k,g,v,b,x,T,_,D,$={};;){if(k=n[n.length-1],this.defaultActions[k]?g=this.defaultActions[k]:(null==y&&(D=void 0,"number"!=typeof(D=i.pop()||d.lex()||1)&&(D instanceof Array&&(D=(i=D).pop()),D=e.symbols_[D]||D),y=D),g=a[k]&&a[k][y]),void 0===g||!g.length||!g[0]){var w="";for(b in _=[],a[k])this.terminals_[b]&&b>2&&_.push("'"+this.terminals_[b]+"'");w=d.showPosition?"Parse error on line "+(c+1)+":\n"+d.showPosition()+"\nExpecting "+_.join(", ")+", got '"+(this.terminals_[y]||y)+"'":"Parse error on line "+(c+1)+": Unexpected "+(1==y?"end of input":"'"+(this.terminals_[y]||y)+"'"),this.parseError(w,{text:d.match,token:this.terminals_[y]||y,line:d.yylineno,loc:m,expected:_})}if(g[0]instanceof Array&&g.length>1)throw new Error("Parse Error: multiple actions possible at state: "+k+", token: "+y);switch(g[0]){case 1:n.push(y),s.push(d.yytext),r.push(d.yylloc),n.push(g[1]),y=null,l=d.yyleng,o=d.yytext,c=d.yylineno,m=d.yylloc;break;case 2:if(x=this.productions_[g[1]][1],$.$=s[s.length-x],$._$={first_line:r[r.length-(x||1)].first_line,last_line:r[r.length-1].last_line,first_column:r[r.length-(x||1)].first_column,last_column:r[r.length-1].last_column},p&&($._$.range=[r[r.length-(x||1)].range[0],r[r.length-1].range[1]]),void 0!==(v=this.performAction.apply($,[o,l,c,h.yy,g[1],s,r].concat(u))))return v;x&&(n=n.slice(0,-1*x*2),s=s.slice(0,-1*x),r=r.slice(0,-1*x)),n.push(this.productions_[g[1]][0]),s.push($.$),r.push($._$),T=a[n[n.length-2]][n[n.length-1]],n.push(T);break;case 3:return!0}}return!0}},T={EOF:1,parseError:function(t,e){if(!this.yy.parser)throw new Error(t);this.yy.parser.parseError(t,e)},setInput:function(t,e){return this.yy=e||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},unput:function(t){var e=t.length,n=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e),this.offset-=e;var i=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),n.length-1&&(this.yylineno-=n.length-1);var s=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:n?(n.length===i.length?this.yylloc.first_column:0)+i[i.length-n.length].length-n[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[s[0],s[0]+this.yyleng-e]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},less:function(t){this.unput(this.match.slice(t))},pastInput:function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var t=this.pastInput(),e=new Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"},test_match:function(t,e){var n,i,s;if(this.options.backtrack_lexer&&(s={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(s.yylloc.range=this.yylloc.range.slice(0))),(i=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=i.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:i?i[i.length-1].length-i[i.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],n=this.performAction.call(this,this.yy,this,e,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),n)return n;if(this._backtrack){for(var r in s)this[r]=s[r];return!1}return!1},next:function(){if(this.done)return this.EOF;var t,e,n,i;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var s=this._currentRules(),r=0;r<s.length;r++)if((n=this._input.match(this.rules[s[r]]))&&(!e||n[0].length>e[0].length)){if(e=n,i=r,this.options.backtrack_lexer){if(!1!==(t=this.test_match(n,s[r])))return t;if(this._backtrack){e=!1;continue}return!1}if(!this.options.flex)break}return e?!1!==(t=this.test_match(e,s[i]))&&t:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var t=this.next();return t||this.lex()},begin:function(t){this.conditionStack.push(t)},popState:function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(t){return(t=this.conditionStack.length-1-Math.abs(t||0))>=0?this.conditionStack[t]:"INITIAL"},pushState:function(t){this.begin(t)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(t,e,n,i){switch(n){case 0:return this.begin("open_directive"),40;case 1:return this.begin("type_directive"),41;case 2:return this.popState(),this.begin("arg_directive"),33;case 3:return this.popState(),this.popState(),43;case 4:return 42;case 5:return this.begin("acc_title"),21;case 6:return this.popState(),"acc_title_value";case 7:return this.begin("acc_descr"),23;case 8:return this.popState(),"acc_descr_value";case 9:this.begin("acc_descr_multiline");break;case 10:case 20:case 23:case 26:case 29:this.popState();break;case 11:return"acc_descr_multiline_value";case 12:case 13:case 14:case 16:case 17:case 18:break;case 15:return 11;case 19:this.begin("href");break;case 21:return 38;case 22:this.begin("callbackname");break;case 24:this.popState(),this.begin("callbackargs");break;case 25:return 36;case 27:return 37;case 28:this.begin("click");break;case 30:return 35;case 31:return 5;case 32:return 12;case 33:return 13;case 34:return 14;case 35:return 15;case 36:return 16;case 37:return 18;case 38:return 17;case 39:return 19;case 40:return"date";case 41:return 20;case 42:return"accDescription";case 43:return 26;case 44:return 28;case 45:return 29;case 46:return 33;case 47:return 7;case 48:return"INVALID"}},rules:[/^(?:%%\{)/i,/^(?:((?:(?!\}%%)[^:.])*))/i,/^(?::)/i,/^(?:\}%%)/i,/^(?:((?:(?!\}%%).|\n)*))/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:%%(?!\{)*[^\n]*)/i,/^(?:[^\}]%%*[^\n]*)/i,/^(?:%%*[^\n]*[\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:#[^\n]*)/i,/^(?:%[^\n]*)/i,/^(?:href[\s]+["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:call[\s]+)/i,/^(?:\([\s]*\))/i,/^(?:\()/i,/^(?:[^(]*)/i,/^(?:\))/i,/^(?:[^)]*)/i,/^(?:click[\s]+)/i,/^(?:[\s\n])/i,/^(?:[^\s\n]*)/i,/^(?:gantt\b)/i,/^(?:dateFormat\s[^#\n;]+)/i,/^(?:inclusiveEndDates\b)/i,/^(?:topAxis\b)/i,/^(?:axisFormat\s[^#\n;]+)/i,/^(?:tickInterval\s[^#\n;]+)/i,/^(?:includes\s[^#\n;]+)/i,/^(?:excludes\s[^#\n;]+)/i,/^(?:todayMarker\s[^\n;]+)/i,/^(?:\d\d\d\d-\d\d-\d\d\b)/i,/^(?:title\s[^#\n;]+)/i,/^(?:accDescription\s[^#\n;]+)/i,/^(?:section\s[^#:\n;]+)/i,/^(?:[^#:\n;]+)/i,/^(?::[^#\n;]+)/i,/^(?::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{acc_descr_multiline:{rules:[10,11],inclusive:!1},acc_descr:{rules:[8],inclusive:!1},acc_title:{rules:[6],inclusive:!1},close_directive:{rules:[],inclusive:!1},arg_directive:{rules:[3,4],inclusive:!1},type_directive:{rules:[2,3],inclusive:!1},open_directive:{rules:[1],inclusive:!1},callbackargs:{rules:[26,27],inclusive:!1},callbackname:{rules:[23,24,25],inclusive:!1},href:{rules:[20,21],inclusive:!1},click:{rules:[29,30],inclusive:!1},INITIAL:{rules:[0,5,7,9,12,13,14,15,16,17,18,19,22,28,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48],inclusive:!0}}};function _(){this.yy={}}return x.lexer=T,_.prototype=x,x.Parser=_,new _}());u.parser=u;const d=u;s.extend(r),s.extend(a),s.extend(o);let h,f="",m="",p="",y=[],k=[],g={},v=[],b=[],x="",T="";const _=["active","done","crit","milestone"];let D=[],$=!1,w=!1,S=0;const C=function(t,e,n,i){return!i.includes(t.format(e.trim()))&&(!!(t.isoWeekday()>=6&&n.includes("weekends"))||(!!n.includes(t.format("dddd").toLowerCase())||n.includes(t.format(e.trim()))))},M=function(t,e,n,i){if(!n.length||t.manualEndTime)return;let r,a;r=t.startTime instanceof Date?s(t.startTime):s(t.startTime,e,!0),r=r.add(1,"d"),a=t.endTime instanceof Date?s(t.endTime):s(t.endTime,e,!0);const[o,c]=E(r,a,e,n,i);t.endTime=o.toDate(),t.renderEndTime=c},E=function(t,e,n,i,s){let r=!1,a=null;for(;t<=e;)r||(a=e.toDate()),r=C(t,n,i,s),r&&(e=e.add(1,"d")),t=t.add(1,"d");return[e,a]},A=function(t,e,n){n=n.trim();const i=/^after\s+([\d\w- ]+)/.exec(n.trim());if(null!==i){let t=null;if(i[1].split(" ").forEach((function(e){let n=B(e);void 0!==n&&(t?n.endTime>t.endTime&&(t=n):t=n)})),t)return t.endTime;{const t=new Date;return t.setHours(0,0,0,0),t}}let r=s(n,e.trim(),!0);if(r.isValid())return r.toDate();{c.l.debug("Invalid date:"+n),c.l.debug("With date format:"+e.trim());const t=new Date(n);if(void 0===t||isNaN(t.getTime())||t.getFullYear()<-1e4||t.getFullYear()>1e4)throw new Error("Invalid date:"+n);return t}},Y=function(t){const e=/^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/.exec(t.trim());return null!==e?[Number.parseFloat(e[1]),e[2]]:[NaN,"ms"]},L=function(t,e,n,i=!1){n=n.trim();let r=s(n,e.trim(),!0);if(r.isValid())return i&&(r=r.add(1,"d")),r.toDate();let a=s(t);const[o,c]=Y(n);if(!Number.isNaN(o)){const t=a.add(o,c);t.isValid()&&(a=t)}return a.toDate()};let I=0;const F=function(t){return void 0===t?(I+=1,"task"+I):t};let O,z,P=[];const W={},B=function(t){const e=W[t];return P[e]},N=function(){const t=function(t){const e=P[t];let n="";switch(P[t].raw.startTime.type){case"prevTaskEnd":{const t=B(e.prevTaskId);e.startTime=t.endTime;break}case"getStartDate":n=A(0,f,P[t].raw.startTime.startData),n&&(P[t].startTime=n)}return P[t].startTime&&(P[t].endTime=L(P[t].startTime,f,P[t].raw.endTime.data,$),P[t].endTime&&(P[t].processed=!0,P[t].manualEndTime=s(P[t].raw.endTime.data,"YYYY-MM-DD",!0).isValid(),M(P[t],f,k,y))),P[t].processed};let e=!0;for(const[n,i]of P.entries())t(n),e=e&&i.processed;return e},H=function(t,e){t.split(",").forEach((function(t){let n=B(t);void 0!==n&&n.classes.push(e)}))},j=function(t,e){D.push((function(){const n=document.querySelector(`[id="${t}"]`);null!==n&&n.addEventListener("click",(function(){e()}))}),(function(){const n=document.querySelector(`[id="${t}-text"]`);null!==n&&n.addEventListener("click",(function(){e()}))}))},G={parseDirective:function(t,e,n){c.m.parseDirective(this,t,e,n)},getConfig:()=>(0,c.c)().gantt,clear:function(){v=[],b=[],x="",D=[],I=0,O=void 0,z=void 0,P=[],f="",m="",T="",h=void 0,p="",y=[],k=[],$=!1,w=!1,S=0,g={},(0,c.v)()},setDateFormat:function(t){f=t},getDateFormat:function(){return f},enableInclusiveEndDates:function(){$=!0},endDatesAreInclusive:function(){return $},enableTopAxis:function(){w=!0},topAxisEnabled:function(){return w},setAxisFormat:function(t){m=t},getAxisFormat:function(){return m},setTickInterval:function(t){h=t},getTickInterval:function(){return h},setTodayMarker:function(t){p=t},getTodayMarker:function(){return p},setAccTitle:c.s,getAccTitle:c.g,setDiagramTitle:c.r,getDiagramTitle:c.t,setDisplayMode:function(t){T=t},getDisplayMode:function(){return T},setAccDescription:c.b,getAccDescription:c.a,addSection:function(t){x=t,v.push(t)},getSections:function(){return v},getTasks:function(){let t=N();let e=0;for(;!t&&e<10;)t=N(),e++;return b=P,b},addTask:function(t,e){const n={section:x,type:x,processed:!1,manualEndTime:!1,renderEndTime:null,raw:{data:e},task:t,classes:[]},i=function(t,e){let n;n=":"===e.substr(0,1)?e.substr(1,e.length):e;const i=n.split(","),s={};V(i,s,_);for(let r=0;r<i.length;r++)i[r]=i[r].trim();switch(i.length){case 1:s.id=F(),s.startTime={type:"prevTaskEnd",id:t},s.endTime={data:i[0]};break;case 2:s.id=F(),s.startTime={type:"getStartDate",startData:i[0]},s.endTime={data:i[1]};break;case 3:s.id=F(i[0]),s.startTime={type:"getStartDate",startData:i[1]},s.endTime={data:i[2]}}return s}(z,e);n.raw.startTime=i.startTime,n.raw.endTime=i.endTime,n.id=i.id,n.prevTaskId=z,n.active=i.active,n.done=i.done,n.crit=i.crit,n.milestone=i.milestone,n.order=S,S++;const s=P.push(n);z=n.id,W[n.id]=s-1},findTaskById:B,addTaskOrg:function(t,e){const n={section:x,type:x,description:t,task:t,classes:[]},i=function(t,e){let n;n=":"===e.substr(0,1)?e.substr(1,e.length):e;const i=n.split(","),r={};V(i,r,_);for(let s=0;s<i.length;s++)i[s]=i[s].trim();let a="";switch(i.length){case 1:r.id=F(),r.startTime=t.endTime,a=i[0];break;case 2:r.id=F(),r.startTime=A(0,f,i[0]),a=i[1];break;case 3:r.id=F(i[0]),r.startTime=A(0,f,i[1]),a=i[2]}return a&&(r.endTime=L(r.startTime,f,a,$),r.manualEndTime=s(a,"YYYY-MM-DD",!0).isValid(),M(r,f,k,y)),r}(O,e);n.startTime=i.startTime,n.endTime=i.endTime,n.id=i.id,n.active=i.active,n.done=i.done,n.crit=i.crit,n.milestone=i.milestone,O=n,b.push(n)},setIncludes:function(t){y=t.toLowerCase().split(/[\s,]+/)},getIncludes:function(){return y},setExcludes:function(t){k=t.toLowerCase().split(/[\s,]+/)},getExcludes:function(){return k},setClickEvent:function(t,e,n){t.split(",").forEach((function(t){!function(t,e,n){if("loose"!==(0,c.c)().securityLevel)return;if(void 0===e)return;let i=[];if("string"==typeof n){i=n.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);for(let t=0;t<i.length;t++){let e=i[t].trim();'"'===e.charAt(0)&&'"'===e.charAt(e.length-1)&&(e=e.substr(1,e.length-2)),i[t]=e}}0===i.length&&i.push(t),void 0!==B(t)&&j(t,(()=>{c.u.runFunc(e,...i)}))}(t,e,n)})),H(t,"clickable")},setLink:function(t,e){let n=e;"loose"!==(0,c.c)().securityLevel&&(n=(0,i.o)(e)),t.split(",").forEach((function(t){void 0!==B(t)&&(j(t,(()=>{window.open(n,"_self")})),g[t]=n)})),H(t,"clickable")},getLinks:function(){return g},bindFunctions:function(t){D.forEach((function(e){e(t)}))},parseDuration:Y,isInvalidDate:C};function V(t,e,n){let i=!0;for(;i;)i=!1,n.forEach((function(n){const s=new RegExp("^\\s*"+n+"\\s*$");t[0].match(s)&&(e[n]=!0,t.shift(1),i=!0)}))}const q=(t,e)=>{let n=[...t].map((()=>-1/0)),i=[...t].sort(((t,e)=>t.startTime-e.startTime||t.order-e.order)),s=0;for(const r of i)for(let t=0;t<n.length;t++)if(r.startTime>=n[t]){n[t]=r.endTime,r.order=t+e,t>s&&(s=t);break}return s};let R;const Z={parser:d,db:G,renderer:{setConf:function(){c.l.debug("Something is calling, setConf, remove the call")},draw:function(t,e,n,i){const r=(0,c.c)().gantt,a=(0,c.c)().securityLevel;let o;"sandbox"===a&&(o=(0,l.MlD)("#i"+e));const u="sandbox"===a?(0,l.MlD)(o.nodes()[0].contentDocument.body):(0,l.MlD)("body"),d="sandbox"===a?o.nodes()[0].contentDocument:document,h=d.getElementById(e);R=h.parentElement.offsetWidth,void 0===R&&(R=1200),void 0!==r.useWidth&&(R=r.useWidth);const f=i.db.getTasks();let m=[];for(const s of f)m.push(s.type);m=function(t){const e={},n=[];for(let i=0,s=t.length;i<s;++i)Object.prototype.hasOwnProperty.call(e,t[i])||(e[t[i]]=!0,n.push(t[i]));return n}(m);const p={};let y=2*r.topPadding;if("compact"===i.db.getDisplayMode()||"compact"===r.displayMode){const t={};for(const n of f)void 0===t[n.section]?t[n.section]=[n]:t[n.section].push(n);let e=0;for(const n of Object.keys(t)){const i=q(t[n],e)+1;e+=i,y+=i*(r.barHeight+r.barGap),p[n]=i}}else{y+=f.length*(r.barHeight+r.barGap);for(const t of m)p[t]=f.filter((e=>e.type===t)).length}h.setAttribute("viewBox","0 0 "+R+" "+y);const k=u.select(`[id="${e}"]`),g=(0,l.sle)().domain([(0,l.SYq)(f,(function(t){return t.startTime})),(0,l.kvL)(f,(function(t){return t.endTime}))]).rangeRound([0,R-r.leftPadding-r.rightPadding]);f.sort((function(t,e){const n=t.startTime,i=e.startTime;let s=0;return n>i?s=1:n<i&&(s=-1),s})),function(t,n,a){const o=r.barHeight,u=o+r.barGap,h=r.topPadding,f=r.leftPadding;(0,l.M89)().domain([0,m.length]).range(["#00B9FA","#F95002"]).interpolate(l.mqd);(function(t,e,n,a,o,c,l,u){const d=c.reduce(((t,{startTime:e})=>t?Math.min(t,e):e),0),h=c.reduce(((t,{endTime:e})=>t?Math.max(t,e):e),0),f=i.db.getDateFormat();if(!d||!h)return;const m=[];let p=null,y=s(d);for(;y.valueOf()<=h;)i.db.isInvalidDate(y,f,l,u)?p?p.end=y:p={start:y,end:y}:p&&(m.push(p),p=null),y=y.add(1,"d");k.append("g").selectAll("rect").data(m).enter().append("rect").attr("id",(function(t){return"exclude-"+t.start.format("YYYY-MM-DD")})).attr("x",(function(t){return g(t.start)+n})).attr("y",r.gridLineStartPadding).attr("width",(function(t){const e=t.end.add(1,"day");return g(e)-g(t.start)})).attr("height",o-e-r.gridLineStartPadding).attr("transform-origin",(function(e,i){return(g(e.start)+n+.5*(g(e.end)-g(e.start))).toString()+"px "+(i*t+.5*o).toString()+"px"})).attr("class","exclude-range")})(u,h,f,0,a,t,i.db.getExcludes(),i.db.getIncludes()),function(t,e,n,s){let a=(0,l.s5Y)(g).tickSize(-s+e+r.gridLineStartPadding).tickFormat((0,l.Yn0)(i.db.getAxisFormat()||r.axisFormat||"%Y-%m-%d"));const o=/^([1-9]\d*)(minute|hour|day|week|month)$/.exec(i.db.getTickInterval()||r.tickInterval);if(null!==o){const t=o[1];switch(o[2]){case"minute":a.ticks(l.i_y.every(t));break;case"hour":a.ticks(l.Weq.every(t));break;case"day":a.ticks(l.oLF.every(t));break;case"week":a.ticks(l.slV.every(t));break;case"month":a.ticks(l.IBc.every(t))}}if(k.append("g").attr("class","grid").attr("transform","translate("+t+", "+(s-50)+")").call(a).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10).attr("dy","1em"),i.db.topAxisEnabled()||r.topAxis){let n=(0,l.kP7)(g).tickSize(-s+e+r.gridLineStartPadding).tickFormat((0,l.Yn0)(i.db.getAxisFormat()||r.axisFormat||"%Y-%m-%d"));if(null!==o){const t=o[1];switch(o[2]){case"minute":n.ticks(l.i_y.every(t));break;case"hour":n.ticks(l.Weq.every(t));break;case"day":n.ticks(l.oLF.every(t));break;case"week":n.ticks(l.slV.every(t));break;case"month":n.ticks(l.IBc.every(t))}}k.append("g").attr("class","grid").attr("transform","translate("+t+", "+e+")").call(n).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10)}}(f,h,0,a),function(t,n,s,a,o,u,d){const h=[...new Set(t.map((t=>t.order)))].map((e=>t.find((t=>t.order===e))));k.append("g").selectAll("rect").data(h).enter().append("rect").attr("x",0).attr("y",(function(t,e){return t.order*n+s-2})).attr("width",(function(){return d-r.rightPadding/2})).attr("height",n).attr("class",(function(t){for(const[e,n]of m.entries())if(t.type===n)return"section section"+e%r.numberSectionStyles;return"section section0"}));const f=k.append("g").selectAll("rect").data(t).enter(),p=i.db.getLinks();f.append("rect").attr("id",(function(t){return t.id})).attr("rx",3).attr("ry",3).attr("x",(function(t){return t.milestone?g(t.startTime)+a+.5*(g(t.endTime)-g(t.startTime))-.5*o:g(t.startTime)+a})).attr("y",(function(t,e){return t.order*n+s})).attr("width",(function(t){return t.milestone?o:g(t.renderEndTime||t.endTime)-g(t.startTime)})).attr("height",o).attr("transform-origin",(function(t,e){return e=t.order,(g(t.startTime)+a+.5*(g(t.endTime)-g(t.startTime))).toString()+"px "+(e*n+s+.5*o).toString()+"px"})).attr("class",(function(t){const e="task";let n="";t.classes.length>0&&(n=t.classes.join(" "));let i=0;for(const[a,o]of m.entries())t.type===o&&(i=a%r.numberSectionStyles);let s="";return t.active?t.crit?s+=" activeCrit":s=" active":t.done?s=t.crit?" doneCrit":" done":t.crit&&(s+=" crit"),0===s.length&&(s=" task"),t.milestone&&(s=" milestone "+s),s+=i,s+=" "+n,e+s})),f.append("text").attr("id",(function(t){return t.id+"-text"})).text((function(t){return t.task})).attr("font-size",r.fontSize).attr("x",(function(t){let e=g(t.startTime),n=g(t.renderEndTime||t.endTime);t.milestone&&(e+=.5*(g(t.endTime)-g(t.startTime))-.5*o),t.milestone&&(n=e+o);const i=this.getBBox().width;return i>n-e?n+i+1.5*r.leftPadding>d?e+a-5:n+a+5:(n-e)/2+e+a})).attr("y",(function(t,e){return t.order*n+r.barHeight/2+(r.fontSize/2-2)+s})).attr("text-height",o).attr("class",(function(t){const e=g(t.startTime);let n=g(t.endTime);t.milestone&&(n=e+o);const i=this.getBBox().width;let s="";t.classes.length>0&&(s=t.classes.join(" "));let a=0;for(const[o,l]of m.entries())t.type===l&&(a=o%r.numberSectionStyles);let c="";return t.active&&(c=t.crit?"activeCritText"+a:"activeText"+a),t.done?c=t.crit?c+" doneCritText"+a:c+" doneText"+a:t.crit&&(c=c+" critText"+a),t.milestone&&(c+=" milestoneText"),i>n-e?n+i+1.5*r.leftPadding>d?s+" taskTextOutsideLeft taskTextOutside"+a+" "+c:s+" taskTextOutsideRight taskTextOutside"+a+" "+c+" width-"+i:s+" taskText taskText"+a+" "+c+" width-"+i}));if("sandbox"===(0,c.c)().securityLevel){let t;t=(0,l.MlD)("#i"+e);const n=t.nodes()[0].contentDocument;f.filter((function(t){return void 0!==p[t.id]})).each((function(t){var e=n.querySelector("#"+t.id),i=n.querySelector("#"+t.id+"-text");const s=e.parentNode;var r=n.createElement("a");r.setAttribute("xlink:href",p[t.id]),r.setAttribute("target","_top"),s.appendChild(r),r.appendChild(e),r.appendChild(i)}))}}(t,u,h,f,o,0,n),function(t,e){let n=0;const i=Object.keys(p).map((t=>[t,p[t]]));k.append("g").selectAll("text").data(i).enter().append((function(t){const e=t[0].split(c.e.lineBreakRegex),n=-(e.length-1)/2,i=d.createElementNS("http://www.w3.org/2000/svg","text");i.setAttribute("dy",n+"em");for(const[s,r]of e.entries()){const t=d.createElementNS("http://www.w3.org/2000/svg","tspan");t.setAttribute("alignment-baseline","central"),t.setAttribute("x","10"),s>0&&t.setAttribute("dy","1em"),t.textContent=r,i.appendChild(t)}return i})).attr("x",10).attr("y",(function(s,r){if(!(r>0))return s[1]*t/2+e;for(let a=0;a<r;a++)return n+=i[r-1][1],s[1]*t/2+n*t+e})).attr("font-size",r.sectionFontSize).attr("class",(function(t){for(const[e,n]of m.entries())if(t[0]===n)return"sectionTitle sectionTitle"+e%r.numberSectionStyles;return"sectionTitle"}))}(u,h),function(t,e,n,s){const a=i.db.getTodayMarker();if("off"===a)return;const o=k.append("g").attr("class","today"),c=new Date,l=o.append("line");l.attr("x1",g(c)+t).attr("x2",g(c)+t).attr("y1",r.titleTopMargin).attr("y2",s-r.titleTopMargin).attr("class","today"),""!==a&&l.attr("style",a.replace(/,/g,";"))}(f,0,0,a)}(f,R,y),(0,c.i)(k,y,R,r.useMaxWidth),k.append("text").text(i.db.getDiagramTitle()).attr("x",R/2).attr("y",r.titleTopMargin).attr("class","titleText")}},styles:t=>`\n  .mermaid-main-font {\n    font-family: "trebuchet ms", verdana, arial, sans-serif;\n    font-family: var(--mermaid-font-family);\n  }\n  .exclude-range {\n    fill: ${t.excludeBkgColor};\n  }\n\n  .section {\n    stroke: none;\n    opacity: 0.2;\n  }\n\n  .section0 {\n    fill: ${t.sectionBkgColor};\n  }\n\n  .section2 {\n    fill: ${t.sectionBkgColor2};\n  }\n\n  .section1,\n  .section3 {\n    fill: ${t.altSectionBkgColor};\n    opacity: 0.2;\n  }\n\n  .sectionTitle0 {\n    fill: ${t.titleColor};\n  }\n\n  .sectionTitle1 {\n    fill: ${t.titleColor};\n  }\n\n  .sectionTitle2 {\n    fill: ${t.titleColor};\n  }\n\n  .sectionTitle3 {\n    fill: ${t.titleColor};\n  }\n\n  .sectionTitle {\n    text-anchor: start;\n    // font-size: ${t.ganttFontSize};\n    // text-height: 14px;\n    font-family: 'trebuchet ms', verdana, arial, sans-serif;\n    font-family: var(--mermaid-font-family);\n\n  }\n\n\n  /* Grid and axis */\n\n  .grid .tick {\n    stroke: ${t.gridColor};\n    opacity: 0.8;\n    shape-rendering: crispEdges;\n    text {\n      font-family: ${t.fontFamily};\n      fill: ${t.textColor};\n    }\n  }\n\n  .grid path {\n    stroke-width: 0;\n  }\n\n\n  /* Today line */\n\n  .today {\n    fill: none;\n    stroke: ${t.todayLineColor};\n    stroke-width: 2px;\n  }\n\n\n  /* Task styling */\n\n  /* Default task */\n\n  .task {\n    stroke-width: 2;\n  }\n\n  .taskText {\n    text-anchor: middle;\n    font-family: 'trebuchet ms', verdana, arial, sans-serif;\n    font-family: var(--mermaid-font-family);\n  }\n\n  // .taskText:not([font-size]) {\n  //   font-size: ${t.ganttFontSize};\n  // }\n\n  .taskTextOutsideRight {\n    fill: ${t.taskTextDarkColor};\n    text-anchor: start;\n    // font-size: ${t.ganttFontSize};\n    font-family: 'trebuchet ms', verdana, arial, sans-serif;\n    font-family: var(--mermaid-font-family);\n\n  }\n\n  .taskTextOutsideLeft {\n    fill: ${t.taskTextDarkColor};\n    text-anchor: end;\n    // font-size: ${t.ganttFontSize};\n  }\n\n  /* Special case clickable */\n  .task.clickable {\n    cursor: pointer;\n  }\n  .taskText.clickable {\n    cursor: pointer;\n    fill: ${t.taskTextClickableColor} !important;\n    font-weight: bold;\n  }\n\n  .taskTextOutsideLeft.clickable {\n    cursor: pointer;\n    fill: ${t.taskTextClickableColor} !important;\n    font-weight: bold;\n  }\n\n  .taskTextOutsideRight.clickable {\n    cursor: pointer;\n    fill: ${t.taskTextClickableColor} !important;\n    font-weight: bold;\n  }\n\n  /* Specific task settings for the sections*/\n\n  .taskText0,\n  .taskText1,\n  .taskText2,\n  .taskText3 {\n    fill: ${t.taskTextColor};\n  }\n\n  .task0,\n  .task1,\n  .task2,\n  .task3 {\n    fill: ${t.taskBkgColor};\n    stroke: ${t.taskBorderColor};\n  }\n\n  .taskTextOutside0,\n  .taskTextOutside2\n  {\n    fill: ${t.taskTextOutsideColor};\n  }\n\n  .taskTextOutside1,\n  .taskTextOutside3 {\n    fill: ${t.taskTextOutsideColor};\n  }\n\n\n  /* Active task */\n\n  .active0,\n  .active1,\n  .active2,\n  .active3 {\n    fill: ${t.activeTaskBkgColor};\n    stroke: ${t.activeTaskBorderColor};\n  }\n\n  .activeText0,\n  .activeText1,\n  .activeText2,\n  .activeText3 {\n    fill: ${t.taskTextDarkColor} !important;\n  }\n\n\n  /* Completed task */\n\n  .done0,\n  .done1,\n  .done2,\n  .done3 {\n    stroke: ${t.doneTaskBorderColor};\n    fill: ${t.doneTaskBkgColor};\n    stroke-width: 2;\n  }\n\n  .doneText0,\n  .doneText1,\n  .doneText2,\n  .doneText3 {\n    fill: ${t.taskTextDarkColor} !important;\n  }\n\n\n  /* Tasks on the critical line */\n\n  .crit0,\n  .crit1,\n  .crit2,\n  .crit3 {\n    stroke: ${t.critBorderColor};\n    fill: ${t.critBkgColor};\n    stroke-width: 2;\n  }\n\n  .activeCrit0,\n  .activeCrit1,\n  .activeCrit2,\n  .activeCrit3 {\n    stroke: ${t.critBorderColor};\n    fill: ${t.activeTaskBkgColor};\n    stroke-width: 2;\n  }\n\n  .doneCrit0,\n  .doneCrit1,\n  .doneCrit2,\n  .doneCrit3 {\n    stroke: ${t.critBorderColor};\n    fill: ${t.doneTaskBkgColor};\n    stroke-width: 2;\n    cursor: pointer;\n    shape-rendering: crispEdges;\n  }\n\n  .milestone {\n    transform: rotate(45deg) scale(0.8,0.8);\n  }\n\n  .milestoneText {\n    font-style: italic;\n  }\n  .doneCritText0,\n  .doneCritText1,\n  .doneCritText2,\n  .doneCritText3 {\n    fill: ${t.taskTextDarkColor} !important;\n  }\n\n  .activeCritText0,\n  .activeCritText1,\n  .activeCritText2,\n  .activeCritText3 {\n    fill: ${t.taskTextDarkColor} !important;\n  }\n\n  .titleText {\n    text-anchor: middle;\n    font-size: 18px;\n    fill: ${t.textColor}    ;\n    font-family: 'trebuchet ms', verdana, arial, sans-serif;\n    font-family: var(--mermaid-font-family);\n  }\n`}}}]);