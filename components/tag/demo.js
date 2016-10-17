webpackJsonp([38,197],{541:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var p=s(7),o=t(p),e=s(8),c=t(e),l=s(21),u=t(l),i=s(4),k=t(i),r=s(6),d=t(r),g=s(5),f=t(g),m=s(1),h=t(m),y=s(2),C=t(y),v=s(38),w=t(v),b=s(12),T=t(b),N=s(3),E=t(N),S=s(24),x=t(S),z=s(48),U=t(z),_=function(n){function a(s){(0,k["default"])(this,a);var t=(0,d["default"])(this,n.call(this,s));return t.close=function(n){if(t.props.onClose(n),!n.defaultPrevented){var a=C["default"].findDOMNode(t);a.style.width=a.getBoundingClientRect().width+"px",a.style.width=a.getBoundingClientRect().width+"px",t.setState({closing:!0})}},t.animationEnd=function(n,a){a||t.state.closed||(t.setState({closed:!0,closing:!1}),t.props.afterClose())},t.state={closing:!1,closed:!1},t}return(0,f["default"])(a,n),a.prototype.render=function(){var n,a=(0,x["default"])(this.props,["prefixCls","closable","color","className","children"]),s=(0,u["default"])(a,2),t=s[0],p=t.prefixCls,e=t.closable,l=t.color,i=t.className,k=t.children,r=s[1],d=e?h["default"].createElement(T["default"],{type:"cross",onClick:this.close}):"",g=(0,E["default"])((n={},(0,c["default"])(n,p,!0),(0,c["default"])(n,p+"-"+l,!!l),(0,c["default"])(n,p+"-has-color",!!l),(0,c["default"])(n,p+"-close",this.state.closing),(0,c["default"])(n,i,!!i),n)),f=(0,U["default"])(r,["onClose","afterClose"]);return h["default"].createElement(w["default"],{component:"",showProp:"data-show",transitionName:p+"-zoom",transitionAppear:!0,onEnd:this.animationEnd},this.state.closed?null:h["default"].createElement("div",(0,o["default"])({"data-show":!this.state.closing},f,{className:g,style:{backgroundColor:/blue|red|green|yellow/.test(l)?null:l}}),h["default"].createElement("span",{className:p+"-text"},k),d))},a}(h["default"].Component);a["default"]=_,_.defaultProps={prefixCls:"ant-tag",closable:!1,onClose:function(){},afterClose:function(){}},n.exports=a["default"]},542:function(n,a,s){"use strict";s(11),s(962)},779:function(n,a,s){n.exports={basic:s(1718),colorful:s(1719),control:s(1720)}},962:function(n,a){},1718:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(542),s(541)),o=t(p),e=s(1),c=t(e),l=s(2);t(l);n.exports={content:{"zh-CN":[["p","\u7b80\u5355\u7684\u6807\u7b7e\u5c55\u793a\uff0c\u6dfb\u52a0 closable \u8868\u793a\u53ef\u5173\u95ed\u3002"]],"en-US":[["p","Simple demo of tag, 'closable' property represents which can be closed."]]},meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Basic"},filename:"components/tag/demo/basic.md",id:"components-tag-demo-basic"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Tag <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >function</span> <span class="token function" >onClose</span><span class="token punctuation" >(</span>e<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span>e<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Tag</span><span class="token punctuation" >></span></span>Tag <span class="token number" >1</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Tag</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Tag</span><span class="token punctuation" >></span></span>Tag <span class="token number" >2</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Tag</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Tag</span> <span class="token attr-name" >closable</span> <span class="token attr-name" >onClose</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>onClose<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>Tag <span class="token number" >3</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Tag</span><span class="token punctuation" >></span></span>\n<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){function n(n){console.log(n)}return c["default"].createElement("div",null,c["default"].createElement(o["default"],null,"Tag 1"),c["default"].createElement(o["default"],null,"Tag 2"),c["default"].createElement(o["default"],{closable:!0,onClose:n},"Tag 3"))}}},1719:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(542),s(541)),o=t(p),e=s(1),c=t(e),l=s(2);t(l);n.exports={content:{"zh-CN":[["p","\u56db\u79cd\u989c\u8272\u7684\u6807\u7b7e\u3002"]],"en-US":[["p","Colorful tags."]]},meta:{order:1,title:{"zh-CN":"\u5404\u79cd\u7c7b\u578b","en-US":"Colorful tags"},filename:"components/tag/demo/colorful.md",id:"components-tag-demo-colorful"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Tag <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Tag</span> <span class="token attr-name" >closable</span> <span class="token attr-name" >color</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>blue<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>Blue<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Tag</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Tag</span> <span class="token attr-name" >closable</span> <span class="token attr-name" >color</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>green<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>Green<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Tag</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Tag</span> <span class="token attr-name" >closable</span> <span class="token attr-name" >color</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>yellow<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>a</span> <span class="token attr-name" >href</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>https://github.com/ant-design/ant-design/issues/1862<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>Yellow<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>a</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Tag</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Tag</span> <span class="token attr-name" >closable</span> <span class="token attr-name" >color</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>red<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>Red<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Tag</span><span class="token punctuation" >></span></span>\n<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){return c["default"].createElement("div",null,c["default"].createElement(o["default"],{closable:!0,color:"blue"},"Blue"),c["default"].createElement(o["default"],{closable:!0,color:"green"},"Green"),c["default"].createElement(o["default"],{closable:!0,color:"yellow"},c["default"].createElement("a",{href:"https://github.com/ant-design/ant-design/issues/1862"},"Yellow")),c["default"].createElement(o["default"],{closable:!0,color:"red"},"Red"))}}},1720:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(14),s(13)),o=t(p),e=(s(542),s(541)),c=t(e),l=s(63),u=t(l),i=s(1),k=t(i),r=s(2);t(r);n.exports={content:{"zh-CN":[["p","\u7528\u6570\u7ec4\u751f\u6210\u4e00\u7ec4\u6807\u7b7e\uff0c\u53ef\u4ee5\u52a8\u6001\u6dfb\u52a0\u548c\u5220\u9664\u3002"],["p","\u4f7f\u7528 ",["code","afterClose"]," \u5220\u9664\u65f6\u6709\u52a8\u753b\u6548\u679c\u3002"]],"en-US":[["p","Generating a set of tag by array, you can dynamically add and remove."],["p","Using 'afterClose' property, There are animated when a tag was removed."]]},meta:{order:2,title:{"zh-CN":"\u52a8\u6001\u6dfb\u52a0\u548c\u5220\u9664","en-US":"Dynamically add and remove"},filename:"components/tag/demo/control.md",id:"components-tag-demo-control"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Tag<span class="token punctuation" >,</span> Button <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >let</span> index <span class="token operator" >=</span> <span class="token number" >3</span><span class="token punctuation" >;</span>\n<span class="token keyword" >const</span> App <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >getInitialState</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >{</span>\n      tags<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n        <span class="token punctuation" >{</span> key<span class="token punctuation" >:</span> <span class="token number" >1</span><span class="token punctuation" >,</span> name<span class="token punctuation" >:</span> <span class="token string" >\'Unremovable\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n        <span class="token punctuation" >{</span> key<span class="token punctuation" >:</span> <span class="token number" >2</span><span class="token punctuation" >,</span> name<span class="token punctuation" >:</span> <span class="token string" >\'Tag 2\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n        <span class="token punctuation" >{</span> key<span class="token punctuation" >:</span> <span class="token number" >3</span><span class="token punctuation" >,</span> name<span class="token punctuation" >:</span> <span class="token string" >\'Tag 3\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >handleClose</span><span class="token punctuation" >(</span>key<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >const</span> tags <span class="token operator" >=</span> <span class="token punctuation" >[</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>tags<span class="token punctuation" >]</span><span class="token punctuation" >.</span><span class="token function" >filter</span><span class="token punctuation" >(</span>tag <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >(</span>tag<span class="token punctuation" >.</span>key <span class="token operator" >!==</span> key<span class="token punctuation" >)</span> <span class="token operator" >&amp;&amp;</span> tag<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span>tags<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span> tags <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >addTag</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >const</span> tags <span class="token operator" >=</span> <span class="token punctuation" >[</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>tags<span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n    index <span class="token operator" >+</span><span class="token operator" >=</span> <span class="token number" >1</span><span class="token punctuation" >;</span>\n    tags<span class="token punctuation" >.</span><span class="token function" >push</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span> key<span class="token punctuation" >:</span> index<span class="token punctuation" >,</span> name<span class="token punctuation" >:</span> <span class="token template-string" ><span class="token string" >`New tag </span><span class="token interpolation" ><span class="token interpolation-punctuation punctuation" >${</span>index<span class="token interpolation-punctuation punctuation" >}</span></span><span class="token string" >`</span></span> <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span> tags <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >const</span> <span class="token punctuation" >{</span> tags <span class="token punctuation" >}</span> <span class="token operator" >=</span> <span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >;</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n        <span class="token punctuation" >{</span>tags<span class="token punctuation" >.</span><span class="token function" >map</span><span class="token punctuation" >(</span>tag <span class="token operator" >=</span><span class="token operator" >></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Tag</span> <span class="token attr-name" >key</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>tag<span class="token punctuation" >.</span>key<span class="token punctuation" >}</span></span> <span class="token attr-name" >closable</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>tag<span class="token punctuation" >.</span>key <span class="token operator" >!==</span> <span class="token number" >1</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >afterClose</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >handleClose</span><span class="token punctuation" >(</span>tag<span class="token punctuation" >.</span>key<span class="token punctuation" >)</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n            <span class="token punctuation" >{</span>tag<span class="token punctuation" >.</span>name<span class="token punctuation" >}</span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Tag</span><span class="token punctuation" >></span></span>\n        <span class="token punctuation" >)</span><span class="token punctuation" >}</span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>small<span class="token punctuation" >"</span></span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>dashed<span class="token punctuation" >"</span></span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>addTag<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span><span class="token operator" >+</span> New <span class="token class-name" >tag</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>App</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=3,a=k["default"].createClass({displayName:"App",getInitialState:function(){return{tags:[{key:1,name:"Unremovable"},{key:2,name:"Tag 2"},{key:3,name:"Tag 3"}]}},handleClose:function(n){var a=[].concat((0,u["default"])(this.state.tags)).filter(function(a){return a.key!==n&&a});console.log(a),this.setState({tags:a})},addTag:function(){var a=[].concat((0,u["default"])(this.state.tags));n+=1,a.push({key:n,name:"New tag "+n}),this.setState({tags:a})},render:function(){var n=this,a=this.state.tags;return k["default"].createElement("div",null,a.map(function(a){return k["default"].createElement(c["default"],{key:a.key,closable:1!==a.key,afterClose:function(){return n.handleClose(a.key)}},a.name)}),k["default"].createElement(o["default"],{size:"small",type:"dashed",onClick:this.addTag},"+ New tag"))}});return k["default"].createElement(a,null)}}}});