"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[5920],{25920:(t,e,a)=>{a.d(e,{a:()=>d,b:()=>M,c:()=>o,d:()=>C,e:()=>v,f:()=>P,g:()=>_,h:()=>D,i:()=>x,l:()=>c,p:()=>T,s:()=>S,u:()=>h});var r=a(71582),n=a(66408),i=a(88664),s=a(80956);const l={extension:(t,e,a)=>{r.l.trace("Making markers for ",a),t.append("defs").append("marker").attr("id",e+"-extensionStart").attr("class","marker extension "+e).attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 1,7 L18,13 V 1 Z"),t.append("defs").append("marker").attr("id",e+"-extensionEnd").attr("class","marker extension "+e).attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 1,1 V 13 L18,7 Z")},composition:(t,e)=>{t.append("defs").append("marker").attr("id",e+"-compositionStart").attr("class","marker composition "+e).attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id",e+"-compositionEnd").attr("class","marker composition "+e).attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z")},aggregation:(t,e)=>{t.append("defs").append("marker").attr("id",e+"-aggregationStart").attr("class","marker aggregation "+e).attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id",e+"-aggregationEnd").attr("class","marker aggregation "+e).attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z")},dependency:(t,e)=>{t.append("defs").append("marker").attr("id",e+"-dependencyStart").attr("class","marker dependency "+e).attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 5,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id",e+"-dependencyEnd").attr("class","marker dependency "+e).attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L14,7 L9,1 Z")},lollipop:(t,e)=>{t.append("defs").append("marker").attr("id",e+"-lollipopStart").attr("class","marker lollipop "+e).attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("circle").attr("stroke","black").attr("fill","white").attr("cx",6).attr("cy",7).attr("r",6)},point:(t,e)=>{t.append("marker").attr("id",e+"-pointEnd").attr("class","marker "+e).attr("viewBox","0 0 10 10").attr("refX",10).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",12).attr("markerHeight",12).attr("orient","auto").append("path").attr("d","M 0 0 L 10 5 L 0 10 z").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0"),t.append("marker").attr("id",e+"-pointStart").attr("class","marker "+e).attr("viewBox","0 0 10 10").attr("refX",0).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",12).attr("markerHeight",12).attr("orient","auto").append("path").attr("d","M 0 5 L 10 10 L 10 0 z").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0")},circle:(t,e)=>{t.append("marker").attr("id",e+"-circleEnd").attr("class","marker "+e).attr("viewBox","0 0 10 10").attr("refX",11).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("circle").attr("cx","5").attr("cy","5").attr("r","5").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0"),t.append("marker").attr("id",e+"-circleStart").attr("class","marker "+e).attr("viewBox","0 0 10 10").attr("refX",-1).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("circle").attr("cx","5").attr("cy","5").attr("r","5").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0")},cross:(t,e)=>{t.append("marker").attr("id",e+"-crossEnd").attr("class","marker cross "+e).attr("viewBox","0 0 11 11").attr("refX",12).attr("refY",5.2).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("path").attr("d","M 1,1 l 9,9 M 10,1 l -9,9").attr("class","arrowMarkerPath").style("stroke-width",2).style("stroke-dasharray","1,0"),t.append("marker").attr("id",e+"-crossStart").attr("class","marker cross "+e).attr("viewBox","0 0 11 11").attr("refX",-1).attr("refY",5.2).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("path").attr("d","M 1,1 l 9,9 M 10,1 l -9,9").attr("class","arrowMarkerPath").style("stroke-width",2).style("stroke-dasharray","1,0")},barb:(t,e)=>{t.append("defs").append("marker").attr("id",e+"-barbEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",14).attr("markerUnits","strokeWidth").attr("orient","auto").append("path").attr("d","M 19,7 L9,13 L14,7 L9,1 Z")}},d=(t,e,a,r)=>{e.forEach((e=>{l[e](t,a,r)}))};const o=(t,e,a,i)=>{let s=t||"";if("object"==typeof s&&(s=s[0]),(0,r.n)((0,r.c)().flowchart.htmlLabels)){s=s.replace(/\\n|\n/g,"<br />"),r.l.info("vertexText"+s);let t=function(t){const e=(0,n.MlD)(document.createElementNS("http://www.w3.org/2000/svg","foreignObject")),a=e.append("xhtml:div"),r=t.label,i=t.isNode?"nodeLabel":"edgeLabel";var s,l;return a.html('<span class="'+i+'" '+(t.labelStyle?'style="'+t.labelStyle+'"':"")+">"+r+"</span>"),s=a,(l=t.labelStyle)&&s.attr("style",l),a.style("display","inline-block"),a.style("white-space","nowrap"),a.attr("xmlns","http://www.w3.org/1999/xhtml"),e.node()}({isNode:i,label:(0,r.H)(s).replace(/fa[blrs]?:fa-[\w-]+/g,(t=>`<i class='${t.replace(":"," ")}'></i>`)),labelStyle:e.replace("fill:","color:")});return t}{const t=document.createElementNS("http://www.w3.org/2000/svg","text");t.setAttribute("style",e.replace("color:","fill:"));let r=[];r="string"==typeof s?s.split(/\\n|\n|<br\s*\/?>/gi):Array.isArray(s)?s:[];for(const e of r){const r=document.createElementNS("http://www.w3.org/2000/svg","tspan");r.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),r.setAttribute("dy","1em"),r.setAttribute("x","0"),a?r.setAttribute("class","title-row"):r.setAttribute("class","row"),r.textContent=e.trim(),t.appendChild(r)}return t}},c=async(t,e,a,s)=>{let l;const d=e.useHtmlLabels||(0,r.n)((0,r.c)().flowchart.htmlLabels);l=a||"node default";const c=t.insert("g").attr("class",l).attr("id",e.domId||e.id),h=c.insert("g").attr("class","label").attr("style",e.labelStyle);let p;p=void 0===e.labelText?"":"string"==typeof e.labelText?e.labelText:e.labelText[0];const g=h.node();let y;y="markdown"===e.labelType?(0,i.c)(h,(0,r.d)((0,r.H)(p),(0,r.c)()),{useHtmlLabels:d,width:e.width||(0,r.c)().flowchart.wrappingWidth,classes:"markdown-node-label"}):g.appendChild(o((0,r.d)((0,r.H)(p),(0,r.c)()),e.labelStyle,!1,s));let f=y.getBBox();const x=e.padding/2;if((0,r.n)((0,r.c)().flowchart.htmlLabels)){const t=y.children[0],e=(0,n.MlD)(y),a=t.getElementsByTagName("img");if(a){const t=""===p.replace(/<img[^>]*>/g,"").trim();await Promise.all([...a].map((e=>new Promise((a=>e.addEventListener("load",(function(){if(e.style.display="flex",e.style.flexDirection="column",t){const t=(0,r.c)().fontSize?(0,r.c)().fontSize:window.getComputedStyle(document.body).fontSize,a=5;e.style.width=parseInt(t,10)*a+"px"}else e.style.width="100%";a(e)})))))))}f=t.getBoundingClientRect(),e.attr("width",f.width),e.attr("height",f.height)}return d?h.attr("transform","translate("+-f.width/2+", "+-f.height/2+")"):h.attr("transform","translate(0, "+-f.height/2+")"),e.centerLabel&&h.attr("transform","translate("+-f.width/2+", "+-f.height/2+")"),h.insert("rect",":first-child"),{shapeSvg:c,bbox:f,halfPadding:x,label:h}},h=(t,e)=>{const a=e.node().getBBox();t.width=a.width,t.height=a.height};function p(t,e,a,r){return t.insert("polygon",":first-child").attr("points",r.map((function(t){return t.x+","+t.y})).join(" ")).attr("class","label-container").attr("transform","translate("+-e/2+","+a/2+")")}function g(t,e,a,r){var n=t.x,i=t.y,s=n-r.x,l=i-r.y,d=Math.sqrt(e*e*l*l+a*a*s*s),o=Math.abs(e*a*s/d);r.x<n&&(o=-o);var c=Math.abs(e*a*l/d);return r.y<i&&(c=-c),{x:n+o,y:i+c}}function y(t,e,a,r){var n,i,s,l,d,o,c,h,p,g,y,x,u;if(n=e.y-t.y,s=t.x-e.x,d=e.x*t.y-t.x*e.y,p=n*a.x+s*a.y+d,g=n*r.x+s*r.y+d,!(0!==p&&0!==g&&f(p,g)||(i=r.y-a.y,l=a.x-r.x,o=r.x*a.y-a.x*r.y,c=i*t.x+l*t.y+o,h=i*e.x+l*e.y+o,0!==c&&0!==h&&f(c,h)||0==(y=n*l-i*s))))return x=Math.abs(y/2),{x:(u=s*o-l*d)<0?(u-x)/y:(u+x)/y,y:(u=i*d-n*o)<0?(u-x)/y:(u+x)/y}}function f(t,e){return t*e>0}const x=(t,e)=>{var a,r,n=t.x,i=t.y,s=e.x-n,l=e.y-i,d=t.width/2,o=t.height/2;return Math.abs(l)*d>Math.abs(s)*o?(l<0&&(o=-o),a=0===l?0:o*s/l,r=o):(s<0&&(d=-d),a=d,r=0===s?0:d*l/s),{x:n+a,y:i+r}},u={node:function(t,e){return t.intersect(e)},circle:function(t,e,a){return g(t,e,e,a)},ellipse:g,polygon:function(t,e,a){var r=t.x,n=t.y,i=[],s=Number.POSITIVE_INFINITY,l=Number.POSITIVE_INFINITY;"function"==typeof e.forEach?e.forEach((function(t){s=Math.min(s,t.x),l=Math.min(l,t.y)})):(s=Math.min(s,e.x),l=Math.min(l,e.y));for(var d=r-t.width/2-s,o=n-t.height/2-l,c=0;c<e.length;c++){var h=e[c],p=e[c<e.length-1?c+1:0],g=y(t,a,{x:d+h.x,y:o+h.y},{x:d+p.x,y:o+p.y});g&&i.push(g)}return i.length?(i.length>1&&i.sort((function(t,e){var r=t.x-a.x,n=t.y-a.y,i=Math.sqrt(r*r+n*n),s=e.x-a.x,l=e.y-a.y,d=Math.sqrt(s*s+l*l);return i<d?-1:i===d?0:1})),i[0]):t},rect:x},b=async(t,e)=>{const{shapeSvg:a,bbox:n}=await c(t,e,void 0,!0),i=n.width+e.padding+(n.height+e.padding),s=[{x:i/2,y:0},{x:i,y:-i/2},{x:i/2,y:-i},{x:0,y:-i/2}];r.l.info("Question main (Circle)");const l=p(a,i,i,s);return l.attr("style",e.style),h(e,l),e.intersect=function(t){return r.l.warn("Intersect called"),u.polygon(e,s,t)},a};function w(t,e,a,n){const i=[],s=t=>{i.push(t,0)},l=t=>{i.push(0,t)};e.includes("t")?(r.l.debug("add top border"),s(a)):l(a),e.includes("r")?(r.l.debug("add right border"),s(n)):l(n),e.includes("b")?(r.l.debug("add bottom border"),s(a)):l(a),e.includes("l")?(r.l.debug("add left border"),s(n)):l(n),t.attr("stroke-dasharray",i.join(" "))}const m=(t,e,a)=>{const r=t.insert("g").attr("class","node default").attr("id",e.domId||e.id);let n=70,i=10;"LR"===a&&(n=10,i=70);const s=r.append("rect").attr("x",-1*n/2).attr("y",-1*i/2).attr("width",n).attr("height",i).attr("class","fork-join");return h(e,s),e.height=e.height+e.padding/2,e.width=e.width+e.padding/2,e.intersect=function(t){return u.rect(e,t)},r},k={rhombus:b,question:b,rect:async(t,e)=>{const{shapeSvg:a,bbox:n,halfPadding:i}=await c(t,e,"node "+e.classes,!0),s=a.insert("rect",":first-child"),l=n.width+e.padding,d=n.height+e.padding;if(s.attr("class","basic label-container").attr("style",e.style).attr("rx",e.rx).attr("ry",e.ry).attr("x",-n.width/2-i).attr("y",-n.height/2-i).attr("width",l).attr("height",d),e.props){const t=new Set(Object.keys(e.props));e.props.borders&&(w(s,e.props.borders,l,d),t.delete("borders")),t.forEach((t=>{r.l.warn(`Unknown node property ${t}`)}))}return h(e,s),e.intersect=function(t){return u.rect(e,t)},a},labelRect:async(t,e)=>{const{shapeSvg:a}=await c(t,e,"label",!0);r.l.trace("Classes = ",e.classes);const n=a.insert("rect",":first-child");if(n.attr("width",0).attr("height",0),a.attr("class","label edgeLabel"),e.props){const t=new Set(Object.keys(e.props));e.props.borders&&(w(n,e.props.borders,0,0),t.delete("borders")),t.forEach((t=>{r.l.warn(`Unknown node property ${t}`)}))}return h(e,n),e.intersect=function(t){return u.rect(e,t)},a},rectWithTitle:(t,e)=>{let a;a=e.classes?"node "+e.classes:"node default";const i=t.insert("g").attr("class",a).attr("id",e.domId||e.id),s=i.insert("rect",":first-child"),l=i.insert("line"),d=i.insert("g").attr("class","label"),c=e.labelText.flat?e.labelText.flat():e.labelText;let p="";p="object"==typeof c?c[0]:c,r.l.info("Label text abc79",p,c,"object"==typeof c);const g=d.node().appendChild(o(p,e.labelStyle,!0,!0));let y={width:0,height:0};if((0,r.n)((0,r.c)().flowchart.htmlLabels)){const t=g.children[0],e=(0,n.MlD)(g);y=t.getBoundingClientRect(),e.attr("width",y.width),e.attr("height",y.height)}r.l.info("Text 2",c);const f=c.slice(1,c.length);let x=g.getBBox();const b=d.node().appendChild(o(f.join?f.join("<br/>"):f,e.labelStyle,!0,!0));if((0,r.n)((0,r.c)().flowchart.htmlLabels)){const t=b.children[0],e=(0,n.MlD)(b);y=t.getBoundingClientRect(),e.attr("width",y.width),e.attr("height",y.height)}const w=e.padding/2;return(0,n.MlD)(b).attr("transform","translate( "+(y.width>x.width?0:(x.width-y.width)/2)+", "+(x.height+w+5)+")"),(0,n.MlD)(g).attr("transform","translate( "+(y.width<x.width?0:-(x.width-y.width)/2)+", 0)"),y=d.node().getBBox(),d.attr("transform","translate("+-y.width/2+", "+(-y.height/2-w+3)+")"),s.attr("class","outer title-state").attr("x",-y.width/2-w).attr("y",-y.height/2-w).attr("width",y.width+e.padding).attr("height",y.height+e.padding),l.attr("class","divider").attr("x1",-y.width/2-w).attr("x2",y.width/2+w).attr("y1",-y.height/2-w+x.height+w).attr("y2",-y.height/2-w+x.height+w),h(e,s),e.intersect=function(t){return u.rect(e,t)},i},choice:(t,e)=>{const a=t.insert("g").attr("class","node default").attr("id",e.domId||e.id),r=[{x:0,y:14},{x:14,y:0},{x:0,y:-14},{x:-14,y:0}];return a.insert("polygon",":first-child").attr("points",r.map((function(t){return t.x+","+t.y})).join(" ")).attr("class","state-start").attr("r",7).attr("width",28).attr("height",28),e.width=28,e.height=28,e.intersect=function(t){return u.circle(e,14,t)},a},circle:async(t,e)=>{const{shapeSvg:a,bbox:n,halfPadding:i}=await c(t,e,void 0,!0),s=a.insert("circle",":first-child");return s.attr("style",e.style).attr("rx",e.rx).attr("ry",e.ry).attr("r",n.width/2+i).attr("width",n.width+e.padding).attr("height",n.height+e.padding),r.l.info("Circle main"),h(e,s),e.intersect=function(t){return r.l.info("Circle intersect",e,n.width/2+i,t),u.circle(e,n.width/2+i,t)},a},doublecircle:async(t,e)=>{const{shapeSvg:a,bbox:n,halfPadding:i}=await c(t,e,void 0,!0),s=a.insert("g",":first-child"),l=s.insert("circle"),d=s.insert("circle");return s.attr("class",e.class),l.attr("style",e.style).attr("rx",e.rx).attr("ry",e.ry).attr("r",n.width/2+i+5).attr("width",n.width+e.padding+10).attr("height",n.height+e.padding+10),d.attr("style",e.style).attr("rx",e.rx).attr("ry",e.ry).attr("r",n.width/2+i).attr("width",n.width+e.padding).attr("height",n.height+e.padding),r.l.info("DoubleCircle main"),h(e,l),e.intersect=function(t){return r.l.info("DoubleCircle intersect",e,n.width/2+i+5,t),u.circle(e,n.width/2+i+5,t)},a},stadium:async(t,e)=>{const{shapeSvg:a,bbox:r}=await c(t,e,void 0,!0),n=r.height+e.padding,i=r.width+n/4+e.padding,s=a.insert("rect",":first-child").attr("style",e.style).attr("rx",n/2).attr("ry",n/2).attr("x",-i/2).attr("y",-n/2).attr("width",i).attr("height",n);return h(e,s),e.intersect=function(t){return u.rect(e,t)},a},hexagon:async(t,e)=>{const{shapeSvg:a,bbox:r}=await c(t,e,void 0,!0),n=r.height+e.padding,i=n/4,s=r.width+2*i+e.padding,l=[{x:i,y:0},{x:s-i,y:0},{x:s,y:-n/2},{x:s-i,y:-n},{x:i,y:-n},{x:0,y:-n/2}],d=p(a,s,n,l);return d.attr("style",e.style),h(e,d),e.intersect=function(t){return u.polygon(e,l,t)},a},rect_left_inv_arrow:async(t,e)=>{const{shapeSvg:a,bbox:r}=await c(t,e,void 0,!0),n=r.width+e.padding,i=r.height+e.padding,s=[{x:-i/2,y:0},{x:n,y:0},{x:n,y:-i},{x:-i/2,y:-i},{x:0,y:-i/2}];return p(a,n,i,s).attr("style",e.style),e.width=n+i,e.height=i,e.intersect=function(t){return u.polygon(e,s,t)},a},lean_right:async(t,e)=>{const{shapeSvg:a,bbox:r}=await c(t,e,void 0,!0),n=r.width+e.padding,i=r.height+e.padding,s=[{x:-2*i/6,y:0},{x:n-i/6,y:0},{x:n+2*i/6,y:-i},{x:i/6,y:-i}],l=p(a,n,i,s);return l.attr("style",e.style),h(e,l),e.intersect=function(t){return u.polygon(e,s,t)},a},lean_left:async(t,e)=>{const{shapeSvg:a,bbox:r}=await c(t,e,void 0,!0),n=r.width+e.padding,i=r.height+e.padding,s=[{x:2*i/6,y:0},{x:n+i/6,y:0},{x:n-2*i/6,y:-i},{x:-i/6,y:-i}],l=p(a,n,i,s);return l.attr("style",e.style),h(e,l),e.intersect=function(t){return u.polygon(e,s,t)},a},trapezoid:async(t,e)=>{const{shapeSvg:a,bbox:r}=await c(t,e,void 0,!0),n=r.width+e.padding,i=r.height+e.padding,s=[{x:-2*i/6,y:0},{x:n+2*i/6,y:0},{x:n-i/6,y:-i},{x:i/6,y:-i}],l=p(a,n,i,s);return l.attr("style",e.style),h(e,l),e.intersect=function(t){return u.polygon(e,s,t)},a},inv_trapezoid:async(t,e)=>{const{shapeSvg:a,bbox:r}=await c(t,e,void 0,!0),n=r.width+e.padding,i=r.height+e.padding,s=[{x:i/6,y:0},{x:n-i/6,y:0},{x:n+2*i/6,y:-i},{x:-2*i/6,y:-i}],l=p(a,n,i,s);return l.attr("style",e.style),h(e,l),e.intersect=function(t){return u.polygon(e,s,t)},a},rect_right_inv_arrow:async(t,e)=>{const{shapeSvg:a,bbox:r}=await c(t,e,void 0,!0),n=r.width+e.padding,i=r.height+e.padding,s=[{x:0,y:0},{x:n+i/2,y:0},{x:n,y:-i/2},{x:n+i/2,y:-i},{x:0,y:-i}],l=p(a,n,i,s);return l.attr("style",e.style),h(e,l),e.intersect=function(t){return u.polygon(e,s,t)},a},cylinder:async(t,e)=>{const{shapeSvg:a,bbox:r}=await c(t,e,void 0,!0),n=r.width+e.padding,i=n/2,s=i/(2.5+n/50),l=r.height+s+e.padding,d="M 0,"+s+" a "+i+","+s+" 0,0,0 "+n+" 0 a "+i+","+s+" 0,0,0 "+-n+" 0 l 0,"+l+" a "+i+","+s+" 0,0,0 "+n+" 0 l 0,"+-l,o=a.attr("label-offset-y",s).insert("path",":first-child").attr("style",e.style).attr("d",d).attr("transform","translate("+-n/2+","+-(l/2+s)+")");return h(e,o),e.intersect=function(t){const a=u.rect(e,t),r=a.x-e.x;if(0!=i&&(Math.abs(r)<e.width/2||Math.abs(r)==e.width/2&&Math.abs(a.y-e.y)>e.height/2-s)){let n=s*s*(1-r*r/(i*i));0!=n&&(n=Math.sqrt(n)),n=s-n,t.y-e.y>0&&(n=-n),a.y+=n}return a},a},start:(t,e)=>{const a=t.insert("g").attr("class","node default").attr("id",e.domId||e.id),r=a.insert("circle",":first-child");return r.attr("class","state-start").attr("r",7).attr("width",14).attr("height",14),h(e,r),e.intersect=function(t){return u.circle(e,7,t)},a},end:(t,e)=>{const a=t.insert("g").attr("class","node default").attr("id",e.domId||e.id),r=a.insert("circle",":first-child"),n=a.insert("circle",":first-child");return n.attr("class","state-start").attr("r",7).attr("width",14).attr("height",14),r.attr("class","state-end").attr("r",5).attr("width",10).attr("height",10),h(e,n),e.intersect=function(t){return u.circle(e,7,t)},a},note:async(t,e)=>{e.useHtmlLabels||(0,r.c)().flowchart.htmlLabels||(e.centerLabel=!0);const{shapeSvg:a,bbox:n,halfPadding:i}=await c(t,e,"node "+e.classes,!0);r.l.info("Classes = ",e.classes);const s=a.insert("rect",":first-child");return s.attr("rx",e.rx).attr("ry",e.ry).attr("x",-n.width/2-i).attr("y",-n.height/2-i).attr("width",n.width+e.padding).attr("height",n.height+e.padding),h(e,s),e.intersect=function(t){return u.rect(e,t)},a},subroutine:async(t,e)=>{const{shapeSvg:a,bbox:r}=await c(t,e,void 0,!0),n=r.width+e.padding,i=r.height+e.padding,s=[{x:0,y:0},{x:n,y:0},{x:n,y:-i},{x:0,y:-i},{x:0,y:0},{x:-8,y:0},{x:n+8,y:0},{x:n+8,y:-i},{x:-8,y:-i},{x:-8,y:0}],l=p(a,n,i,s);return l.attr("style",e.style),h(e,l),e.intersect=function(t){return u.polygon(e,s,t)},a},fork:m,join:m,class_box:(t,e)=>{const a=e.padding/2;let i;i=e.classes?"node "+e.classes:"node default";const l=t.insert("g").attr("class",i).attr("id",e.domId||e.id),d=l.insert("rect",":first-child"),c=l.insert("line"),p=l.insert("line");let g=0,y=4;const f=l.insert("g").attr("class","label");let x=0;const b=e.classData.annotations&&e.classData.annotations[0],w=e.classData.annotations[0]?"\xab"+e.classData.annotations[0]+"\xbb":"",m=f.node().appendChild(o(w,e.labelStyle,!0,!0));let k=m.getBBox();if((0,r.n)((0,r.c)().flowchart.htmlLabels)){const t=m.children[0],e=(0,n.MlD)(m);k=t.getBoundingClientRect(),e.attr("width",k.width),e.attr("height",k.height)}e.classData.annotations[0]&&(y+=k.height+4,g+=k.width);let L=e.classData.label;void 0!==e.classData.type&&""!==e.classData.type&&((0,r.c)().flowchart.htmlLabels?L+="&lt;"+e.classData.type+"&gt;":L+="<"+e.classData.type+">");const v=f.node().appendChild(o(L,e.labelStyle,!0,!0));(0,n.MlD)(v).attr("class","classTitle");let S=v.getBBox();if((0,r.n)((0,r.c)().flowchart.htmlLabels)){const t=v.children[0],e=(0,n.MlD)(v);S=t.getBoundingClientRect(),e.attr("width",S.width),e.attr("height",S.height)}y+=S.height+4,S.width>g&&(g=S.width);const M=[];e.classData.members.forEach((t=>{const a=(0,s.p)(t);let i=a.displayText;(0,r.c)().flowchart.htmlLabels&&(i=i.replace(/</g,"&lt;").replace(/>/g,"&gt;"));const l=f.node().appendChild(o(i,a.cssStyle?a.cssStyle:e.labelStyle,!0,!0));let d=l.getBBox();if((0,r.n)((0,r.c)().flowchart.htmlLabels)){const t=l.children[0],e=(0,n.MlD)(l);d=t.getBoundingClientRect(),e.attr("width",d.width),e.attr("height",d.height)}d.width>g&&(g=d.width),y+=d.height+4,M.push(l)})),y+=8;const T=[];if(e.classData.methods.forEach((t=>{const a=(0,s.p)(t);let i=a.displayText;(0,r.c)().flowchart.htmlLabels&&(i=i.replace(/</g,"&lt;").replace(/>/g,"&gt;"));const l=f.node().appendChild(o(i,a.cssStyle?a.cssStyle:e.labelStyle,!0,!0));let d=l.getBBox();if((0,r.n)((0,r.c)().flowchart.htmlLabels)){const t=l.children[0],e=(0,n.MlD)(l);d=t.getBoundingClientRect(),e.attr("width",d.width),e.attr("height",d.height)}d.width>g&&(g=d.width),y+=d.height+4,T.push(l)})),y+=8,b){let t=(g-k.width)/2;(0,n.MlD)(m).attr("transform","translate( "+(-1*g/2+t)+", "+-1*y/2+")"),x=k.height+4}let B=(g-S.width)/2;return(0,n.MlD)(v).attr("transform","translate( "+(-1*g/2+B)+", "+(-1*y/2+x)+")"),x+=S.height+4,c.attr("class","divider").attr("x1",-g/2-a).attr("x2",g/2+a).attr("y1",-y/2-a+8+x).attr("y2",-y/2-a+8+x),x+=8,M.forEach((t=>{(0,n.MlD)(t).attr("transform","translate( "+-g/2+", "+(-1*y/2+x+4)+")"),x+=S.height+4})),x+=8,p.attr("class","divider").attr("x1",-g/2-a).attr("x2",g/2+a).attr("y1",-y/2-a+8+x).attr("y2",-y/2-a+8+x),x+=8,T.forEach((t=>{(0,n.MlD)(t).attr("transform","translate( "+-g/2+", "+(-1*y/2+x)+")"),x+=S.height+4})),d.attr("class","outer title-state").attr("x",-g/2-a).attr("y",-y/2-a).attr("width",g+e.padding).attr("height",y+e.padding),h(e,d),e.intersect=function(t){return u.rect(e,t)},l}};let L={};const v=async(t,e,a)=>{let n,i;if(e.link){let s;"sandbox"===(0,r.c)().securityLevel?s="_top":e.linkTarget&&(s=e.linkTarget||"_blank"),n=t.insert("svg:a").attr("xlink:href",e.link).attr("target",s),i=await k[e.shape](n,e,a)}else i=await k[e.shape](t,e,a),n=i;return e.tooltip&&i.attr("title",e.tooltip),e.class&&i.attr("class","node default "+e.class),L[e.id]=n,e.haveCallback&&L[e.id].attr("class",L[e.id].attr("class")+" clickable"),n},S=(t,e)=>{L[e.id]=t},M=()=>{L={}},T=t=>{const e=L[t.id];r.l.trace("Transforming node",t.diff,t,"translate("+(t.x-t.width/2-5)+", "+t.width/2+")");const a=t.diff||0;return t.clusterNode?e.attr("transform","translate("+(t.x+a-t.width/2)+", "+(t.y-t.height/2-8)+")"):e.attr("transform","translate("+t.x+", "+t.y+")"),a};let B={},E={};const C=()=>{B={},E={}},P=(t,e)=>{const a=(0,r.n)((0,r.c)().flowchart.htmlLabels),s="markdown"===e.labelType?(0,i.c)(t,e.label,{style:e.labelStyle,useHtmlLabels:a,addSvgBackground:!0}):o(e.label,e.labelStyle);r.l.info("abc82",e,e.labelType);const l=t.insert("g").attr("class","edgeLabel"),d=l.insert("g").attr("class","label");d.node().appendChild(s);let c,h=s.getBBox();if(a){const t=s.children[0],e=(0,n.MlD)(s);h=t.getBoundingClientRect(),e.attr("width",h.width),e.attr("height",h.height)}if(d.attr("transform","translate("+-h.width/2+", "+-h.height/2+")"),B[e.id]=l,e.width=h.width,e.height=h.height,e.startLabelLeft){const a=o(e.startLabelLeft,e.labelStyle),r=t.insert("g").attr("class","edgeTerminals"),n=r.insert("g").attr("class","inner");c=n.node().appendChild(a);const i=a.getBBox();n.attr("transform","translate("+-i.width/2+", "+-i.height/2+")"),E[e.id]||(E[e.id]={}),E[e.id].startLeft=r,N(c,e.startLabelLeft)}if(e.startLabelRight){const a=o(e.startLabelRight,e.labelStyle),r=t.insert("g").attr("class","edgeTerminals"),n=r.insert("g").attr("class","inner");c=r.node().appendChild(a),n.node().appendChild(a);const i=a.getBBox();n.attr("transform","translate("+-i.width/2+", "+-i.height/2+")"),E[e.id]||(E[e.id]={}),E[e.id].startRight=r,N(c,e.startLabelRight)}if(e.endLabelLeft){const a=o(e.endLabelLeft,e.labelStyle),r=t.insert("g").attr("class","edgeTerminals"),n=r.insert("g").attr("class","inner");c=n.node().appendChild(a);const i=a.getBBox();n.attr("transform","translate("+-i.width/2+", "+-i.height/2+")"),r.node().appendChild(a),E[e.id]||(E[e.id]={}),E[e.id].endLeft=r,N(c,e.endLabelLeft)}if(e.endLabelRight){const a=o(e.endLabelRight,e.labelStyle),r=t.insert("g").attr("class","edgeTerminals"),n=r.insert("g").attr("class","inner");c=n.node().appendChild(a);const i=a.getBBox();n.attr("transform","translate("+-i.width/2+", "+-i.height/2+")"),r.node().appendChild(a),E[e.id]||(E[e.id]={}),E[e.id].endRight=r,N(c,e.endLabelRight)}return s};function N(t,e){(0,r.c)().flowchart.htmlLabels&&t&&(t.style.width=9*e.length+"px",t.style.height="12px")}const D=(t,e)=>{r.l.info("Moving label abc78 ",t.id,t.label,B[t.id]);let a=e.updatedPath?e.updatedPath:e.originalPath;if(t.label){const n=B[t.id];let i=t.x,s=t.y;if(a){const n=r.u.calcLabelPosition(a);r.l.info("Moving label "+t.label+" from (",i,",",s,") to (",n.x,",",n.y,") abc78"),e.updatedPath&&(i=n.x,s=n.y)}n.attr("transform","translate("+i+", "+s+")")}if(t.startLabelLeft){const e=E[t.id].startLeft;let n=t.x,i=t.y;if(a){const e=r.u.calcTerminalLabelPosition(t.arrowTypeStart?10:0,"start_left",a);n=e.x,i=e.y}e.attr("transform","translate("+n+", "+i+")")}if(t.startLabelRight){const e=E[t.id].startRight;let n=t.x,i=t.y;if(a){const e=r.u.calcTerminalLabelPosition(t.arrowTypeStart?10:0,"start_right",a);n=e.x,i=e.y}e.attr("transform","translate("+n+", "+i+")")}if(t.endLabelLeft){const e=E[t.id].endLeft;let n=t.x,i=t.y;if(a){const e=r.u.calcTerminalLabelPosition(t.arrowTypeEnd?10:0,"end_left",a);n=e.x,i=e.y}e.attr("transform","translate("+n+", "+i+")")}if(t.endLabelRight){const e=E[t.id].endRight;let n=t.x,i=t.y;if(a){const e=r.u.calcTerminalLabelPosition(t.arrowTypeEnd?10:0,"end_right",a);n=e.x,i=e.y}e.attr("transform","translate("+n+", "+i+")")}},H=(t,e)=>{r.l.warn("abc88 cutPathAtIntersect",t,e);let a=[],n=t[0],i=!1;return t.forEach((t=>{if(r.l.info("abc88 checking point",t,e),((t,e)=>{const a=t.x,r=t.y,n=Math.abs(e.x-a),i=Math.abs(e.y-r),s=t.width/2,l=t.height/2;return n>=s||i>=l})(e,t)||i)r.l.warn("abc88 outside",t,n),n=t,i||a.push(t);else{const s=((t,e,a)=>{r.l.warn(`intersection calc abc89:\n  outsidePoint: ${JSON.stringify(e)}\n  insidePoint : ${JSON.stringify(a)}\n  node        : x:${t.x} y:${t.y} w:${t.width} h:${t.height}`);const n=t.x,i=t.y,s=Math.abs(n-a.x),l=t.width/2;let d=a.x<e.x?l-s:l+s;const o=t.height/2,c=Math.abs(e.y-a.y),h=Math.abs(e.x-a.x);if(Math.abs(i-e.y)*l>Math.abs(n-e.x)*o){let t=a.y<e.y?e.y-o-i:i-o-e.y;d=h*t/c;const n={x:a.x<e.x?a.x+d:a.x-h+d,y:a.y<e.y?a.y+c-t:a.y-c+t};return 0===d&&(n.x=e.x,n.y=e.y),0===h&&(n.x=e.x),0===c&&(n.y=e.y),r.l.warn(`abc89 topp/bott calc, Q ${c}, q ${t}, R ${h}, r ${d}`,n),n}{d=a.x<e.x?e.x-l-n:n-l-e.x;let t=c*d/h,i=a.x<e.x?a.x+h-d:a.x-h+d,s=a.y<e.y?a.y+t:a.y-t;return r.l.warn(`sides calc abc89, Q ${c}, q ${t}, R ${h}, r ${d}`,{_x:i,_y:s}),0===d&&(i=e.x,s=e.y),0===h&&(i=e.x),0===c&&(s=e.y),{x:i,y:s}}})(e,n,t);r.l.warn("abc88 inside",t,n,s),r.l.warn("abc88 intersection",s);let l=!1;a.forEach((t=>{l=l||t.x===s.x&&t.y===s.y})),a.some((t=>t.x===s.x&&t.y===s.y))?r.l.warn("abc88 no intersect",s,a):a.push(s),i=!0}})),r.l.warn("abc88 returning points",a),a},_=function(t,e,a,i,s,l){let d=a.points,o=!1;const c=l.node(e.v);var h=l.node(e.w);r.l.info("abc88 InsertEdge: ",a),h.intersect&&c.intersect&&(d=d.slice(1,a.points.length-1),d.unshift(c.intersect(d[0])),r.l.info("Last point",d[d.length-1],h,h.intersect(d[d.length-1])),d.push(h.intersect(d[d.length-1]))),a.toCluster&&(r.l.info("to cluster abc88",i[a.toCluster]),d=H(a.points,i[a.toCluster].node),o=!0),a.fromCluster&&(r.l.info("from cluster abc88",i[a.fromCluster]),d=H(d.reverse(),i[a.fromCluster].node).reverse(),o=!0);const p=d.filter((t=>!Number.isNaN(t.y)));let g;g=("graph"===s||"flowchart"===s)&&a.curve||n.k7;const y=(0,n.cFK)().x((function(t){return t.x})).y((function(t){return t.y})).curve(g);let f;switch(a.thickness){case"normal":f="edge-thickness-normal";break;case"thick":case"invisible":f="edge-thickness-thick";break;default:f=""}switch(a.pattern){case"solid":f+=" edge-pattern-solid";break;case"dotted":f+=" edge-pattern-dotted";break;case"dashed":f+=" edge-pattern-dashed"}const x=t.append("path").attr("d",y(p)).attr("id",a.id).attr("class"," "+f+(a.classes?" "+a.classes:"")).attr("style",a.style);let u="";switch(((0,r.c)().flowchart.arrowMarkerAbsolute||(0,r.c)().state.arrowMarkerAbsolute)&&(u=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search,u=u.replace(/\(/g,"\\("),u=u.replace(/\)/g,"\\)")),r.l.info("arrowTypeStart",a.arrowTypeStart),r.l.info("arrowTypeEnd",a.arrowTypeEnd),a.arrowTypeStart){case"arrow_cross":x.attr("marker-start","url("+u+"#"+s+"-crossStart)");break;case"arrow_point":x.attr("marker-start","url("+u+"#"+s+"-pointStart)");break;case"arrow_barb":x.attr("marker-start","url("+u+"#"+s+"-barbStart)");break;case"arrow_circle":x.attr("marker-start","url("+u+"#"+s+"-circleStart)");break;case"aggregation":x.attr("marker-start","url("+u+"#"+s+"-aggregationStart)");break;case"extension":x.attr("marker-start","url("+u+"#"+s+"-extensionStart)");break;case"composition":x.attr("marker-start","url("+u+"#"+s+"-compositionStart)");break;case"dependency":x.attr("marker-start","url("+u+"#"+s+"-dependencyStart)");break;case"lollipop":x.attr("marker-start","url("+u+"#"+s+"-lollipopStart)")}switch(a.arrowTypeEnd){case"arrow_cross":x.attr("marker-end","url("+u+"#"+s+"-crossEnd)");break;case"arrow_point":x.attr("marker-end","url("+u+"#"+s+"-pointEnd)");break;case"arrow_barb":x.attr("marker-end","url("+u+"#"+s+"-barbEnd)");break;case"arrow_circle":x.attr("marker-end","url("+u+"#"+s+"-circleEnd)");break;case"aggregation":x.attr("marker-end","url("+u+"#"+s+"-aggregationEnd)");break;case"extension":x.attr("marker-end","url("+u+"#"+s+"-extensionEnd)");break;case"composition":x.attr("marker-end","url("+u+"#"+s+"-compositionEnd)");break;case"dependency":x.attr("marker-end","url("+u+"#"+s+"-dependencyEnd)");break;case"lollipop":x.attr("marker-end","url("+u+"#"+s+"-lollipopEnd)")}let b={};return o&&(b.updatedPath=d),b.originalPath=a.points,b}},80956:(t,e,a)=>{a.d(e,{p:()=>l,s:()=>c});var r=a(66408),n=a(71582);let i=0;const s=function(t){let e=t.id;return t.type&&(e+="<"+t.type+">"),e},l=function(t){let e="",a="",r="",i="",s=t.substring(0,1),l=t.substring(t.length-1,t.length);s.match(/[#+~-]/)&&(i=s);let d=/[\s\w)~]/;l.match(d)||(a=o(l));const c=""===i?0:1;let h=""===a?t.length:t.length-1;const p=(t=t.substring(c,h)).indexOf("("),g=t.indexOf(")");if(p>1&&g>p&&g<=t.length){let s=t.substring(0,p).trim();const l=t.substring(p+1,g);if(e=i+s+"("+(0,n.x)(l.trim())+")",g<t.length){let i=t.substring(g+1,g+2);""!==a||i.match(d)?r=t.substring(g+1).trim():(a=o(i),r=t.substring(g+2).trim()),""!==r&&(":"===r.charAt(0)&&(r=r.substring(1).trim()),r=" : "+(0,n.x)(r),e+=r)}}else e=i+(0,n.x)(t);return{displayText:e,cssStyle:a}},d=function(t,e,a,r){let n=l(e);const i=t.append("tspan").attr("x",r.padding).text(n.displayText);""!==n.cssStyle&&i.attr("style",n.cssStyle),a||i.attr("dy",r.textHeight)},o=function(t){switch(t){case"*":return"font-style:italic;";case"$":return"text-decoration:underline;";default:return""}},c={getClassTitleString:s,drawClass:function(t,e,a,r){n.l.debug("Rendering class ",e,a);const i=e.id,l={id:i,label:e.id,width:0,height:0},o=t.append("g").attr("id",r.db.lookUpDomId(i)).attr("class","classGroup");let c;c=e.link?o.append("svg:a").attr("xlink:href",e.link).attr("target",e.linkTarget).append("text").attr("y",a.textHeight+a.padding).attr("x",0):o.append("text").attr("y",a.textHeight+a.padding).attr("x",0);let h=!0;e.annotations.forEach((function(t){const e=c.append("tspan").text("\xab"+t+"\xbb");h||e.attr("dy",a.textHeight),h=!1}));let p=s(e);const g=c.append("tspan").text(p).attr("class","title");h||g.attr("dy",a.textHeight);const y=c.node().getBBox().height,f=o.append("line").attr("x1",0).attr("y1",a.padding+y+a.dividerMargin/2).attr("y2",a.padding+y+a.dividerMargin/2),x=o.append("text").attr("x",a.padding).attr("y",y+a.dividerMargin+a.textHeight).attr("fill","white").attr("class","classText");h=!0,e.members.forEach((function(t){d(x,t,h,a),h=!1}));const u=x.node().getBBox(),b=o.append("line").attr("x1",0).attr("y1",a.padding+y+a.dividerMargin+u.height).attr("y2",a.padding+y+a.dividerMargin+u.height),w=o.append("text").attr("x",a.padding).attr("y",y+2*a.dividerMargin+u.height+a.textHeight).attr("fill","white").attr("class","classText");h=!0,e.methods.forEach((function(t){d(w,t,h,a),h=!1}));const m=o.node().getBBox();var k=" ";e.cssClasses.length>0&&(k+=e.cssClasses.join(" "));const L=o.insert("rect",":first-child").attr("x",0).attr("y",0).attr("width",m.width+2*a.padding).attr("height",m.height+a.padding+.5*a.dividerMargin).attr("class",k).node().getBBox().width;return c.node().childNodes.forEach((function(t){t.setAttribute("x",(L-t.getBBox().width)/2)})),e.tooltip&&c.insert("title").text(e.tooltip),f.attr("x2",L),b.attr("x2",L),l.width=L,l.height=m.height+a.padding+.5*a.dividerMargin,l},drawEdge:function(t,e,a,s,l){const d=function(t){switch(t){case l.db.relationType.AGGREGATION:return"aggregation";case l.db.relationType.EXTENSION:return"extension";case l.db.relationType.COMPOSITION:return"composition";case l.db.relationType.DEPENDENCY:return"dependency";case l.db.relationType.LOLLIPOP:return"lollipop"}};e.points=e.points.filter((t=>!Number.isNaN(t.y)));const o=e.points,c=(0,r.cFK)().x((function(t){return t.x})).y((function(t){return t.y})).curve(r.k7),h=t.append("path").attr("d",c(o)).attr("id","edge"+i).attr("class","relation");let p,g,y="";s.arrowMarkerAbsolute&&(y=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search,y=y.replace(/\(/g,"\\("),y=y.replace(/\)/g,"\\)")),1==a.relation.lineType&&h.attr("class","relation dashed-line"),10==a.relation.lineType&&h.attr("class","relation dotted-line"),"none"!==a.relation.type1&&h.attr("marker-start","url("+y+"#"+d(a.relation.type1)+"Start)"),"none"!==a.relation.type2&&h.attr("marker-end","url("+y+"#"+d(a.relation.type2)+"End)");const f=e.points.length;let x,u,b,w,m=n.u.calcLabelPosition(e.points);if(p=m.x,g=m.y,f%2!=0&&f>1){let t=n.u.calcCardinalityPosition("none"!==a.relation.type1,e.points,e.points[0]),r=n.u.calcCardinalityPosition("none"!==a.relation.type2,e.points,e.points[f-1]);n.l.debug("cardinality_1_point "+JSON.stringify(t)),n.l.debug("cardinality_2_point "+JSON.stringify(r)),x=t.x,u=t.y,b=r.x,w=r.y}if(void 0!==a.title){const e=t.append("g").attr("class","classLabel"),r=e.append("text").attr("class","label").attr("x",p).attr("y",g).attr("fill","red").attr("text-anchor","middle").text(a.title);window.label=r;const n=r.node().getBBox();e.insert("rect",":first-child").attr("class","box").attr("x",n.x-s.padding/2).attr("y",n.y-s.padding/2).attr("width",n.width+s.padding).attr("height",n.height+s.padding)}if(n.l.info("Rendering relation "+JSON.stringify(a)),void 0!==a.relationTitle1&&"none"!==a.relationTitle1){t.append("g").attr("class","cardinality").append("text").attr("class","type1").attr("x",x).attr("y",u).attr("fill","black").attr("font-size","6").text(a.relationTitle1)}if(void 0!==a.relationTitle2&&"none"!==a.relationTitle2){t.append("g").attr("class","cardinality").append("text").attr("class","type2").attr("x",b).attr("y",w).attr("fill","black").attr("font-size","6").text(a.relationTitle2)}i++},drawNote:function(t,e,a,r){n.l.debug("Rendering note ",e,a);const i=e.id,s={id:i,text:e.text,width:0,height:0},l=t.append("g").attr("id",i).attr("class","classGroup");let d=l.append("text").attr("y",a.textHeight+a.padding).attr("x",0);const o=JSON.parse(`"${e.text}"`).split("\n");o.forEach((function(t){n.l.debug(`Adding line: ${t}`),d.append("tspan").text(t).attr("class","title").attr("dy",a.textHeight)}));const c=l.node().getBBox(),h=l.insert("rect",":first-child").attr("x",0).attr("y",0).attr("width",c.width+2*a.padding).attr("height",c.height+o.length*a.textHeight+a.padding+.5*a.dividerMargin).node().getBBox().width;return d.node().childNodes.forEach((function(t){t.setAttribute("x",(h-t.getBBox().width)/2)})),s.width=h,s.height=c.height+o.length*a.textHeight+a.padding+.5*a.dividerMargin,s},parseMember:l}}}]);