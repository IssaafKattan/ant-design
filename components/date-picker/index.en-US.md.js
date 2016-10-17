webpackJsonp([168,197],{1499:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}var o=n(1),s=(a(o),n(2));a(s);t.exports={content:["section",["p","To select/input a date."],["h2","When To Use"],["p","By clicking the input box, you can select a date from a popup calendar."]],meta:{category:"Components",type:"Form Controls",title:"DatePicker",filename:"components/date-picker/index.en-US.md"},toc:["ul",["li",["a",{href:"#When-To-Use"},"When To Use"]],["li",["a",{href:"#API"},"API"]]],api:["section",["h2","API"],["h3","DatePicker"],["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> moment <span class="token keyword" >from</span> <span class="token string" >\'moment-timezone/moment-timezone\'</span><span class="token punctuation" >;</span>\n\n<span class="token comment" spellcheck="true">// It\'s recommended to set locale and timezone in entry file globaly.</span>\n<span class="token keyword" >import</span> <span class="token string" >\'moment/locale/zh-cn\'</span><span class="token punctuation" >;</span>\nmoment<span class="token punctuation" >.</span><span class="token function" >locale</span><span class="token punctuation" >(</span><span class="token string" >\'zh-cn\'</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n<span class="token comment" spellcheck="true">// The following data is copied from https://github.com/moment/moment-timezone/blob/develop/data/packed/latest.json</span>\nmoment<span class="token punctuation" >.</span>tz<span class="token punctuation" >.</span><span class="token function" >add</span><span class="token punctuation" >(</span><span class="token string" >\'Asia/Shanghai|CST CDT|-80 -90|01010101010101010|-1c1I0 LX0 16p0 1jz0 1Myp0 Rb0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0|23e6\'</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\nmoment<span class="token punctuation" >.</span>tz<span class="token punctuation" >.</span><span class="token function" >setDefault</span><span class="token punctuation" >(</span><span class="token string" >\'Asia/Shanghai\'</span><span class="token punctuation" >)</span>\n\n<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>DatePicker</span> <span class="token attr-name" >defaultValue</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token function" >moment</span><span class="token punctuation" >(</span><span class="token string" >\'2015-01-01\'</span><span class="token punctuation" >,</span> <span class="token string" >\'YYYY-MM-DD\'</span><span class="token punctuation" >)</span><span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>'},["code","import moment from 'moment-timezone/moment-timezone';\n\n// It's recommended to set locale and timezone in entry file globaly.\nimport 'moment/locale/zh-cn';\nmoment.locale('zh-cn');\n// The following data is copied from https://github.com/moment/moment-timezone/blob/develop/data/packed/latest.json\nmoment.tz.add('Asia/Shanghai|CST CDT|-80 -90|01010101010101010|-1c1I0 LX0 16p0 1jz0 1Myp0 Rb0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0|23e6');\nmoment.tz.setDefault('Asia/Shanghai')\n\n<DatePicker defaultValue={moment('2015-01-01', 'YYYY-MM-DD')} />"]],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","value"],["td","to set date"],["td",["a",{title:null,href:"http://momentjs.com/"},"moment"]],["td","-"]],["tr",["td","defaultValue"],["td","to set default date"],["td",["a",{title:null,href:"http://momentjs.com/"},"moment"]],["td","-"]],["tr",["td","format"],["td","to set the date format, refer to ",["a",{title:null,href:"http://momentjs.com/"},"moment.js"]],["td","String"],["td",'"YYYY-MM-DD"']],["tr",["td","disabledDate"],["td","to specify the date that cannot be selected"],["td","function"],["td","-"]],["tr",["td","onChange"],["td","a callback function, can be executed when the selected time is changing"],["td","function(date: moment, dateString: string)"],["td","-"]],["tr",["td","disabled"],["td","determine whether the DatePicker is disabled"],["td","Boolean"],["td","false"]],["tr",["td","style"],["td","to customize the style of the input box"],["td","Object"],["td","{}"]],["tr",["td","popupStyle"],["td","to customize the style of the popup calendar"],["td","Object"],["td","{}"]],["tr",["td","size"],["td","determine the size of the input box, the height of ",["code","large"]," and ",["code","small"],", are 32px and 22px respectively, while default size is 28px"],["td","String"],["td","-"]],["tr",["td","locale"],["td","localization configuration"],["td","Object"],["td",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/424"},"default"]]],["tr",["td","onOk"],["td","a callback function, can be executed when OK-button is clicked"],["td","function(Date value)"],["td","-"]],["tr",["td","open"],["td","open state of picker"],["td","bool"],["td","-"]],["tr",["td","onOpenChange"],["td","a callback function, can be executed whether the popup calendar is popped up or closed"],["td","function(status)"],["td","-"]],["tr",["td","getCalendarContainer"],["td","to set the container of the floating layer, while the default is to create a ",["code","div"]," element in ",["code","body"]],["td","function(trigger)"],["td","-"]],["tr",["td","showTime"],["td","to provide an additional time selection"],["td","Object/Boolean"],["td",["a",{title:null,href:"/components/time-picker/#api"},"TimePicker Options"]]]]],["h3","MonthPicker"],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","value"],["td","to set date"],["td",["a",{title:null,href:"http://momentjs.com/"},"moment"]],["td","-"]],["tr",["td","defaultValue"],["td","to set default date"],["td",["a",{title:null,href:"http://momentjs.com/"},"moment"]],["td","-"]],["tr",["td","format"],["td","to set the date format, refer to ",["a",{title:null,href:"http://momentjs.com/"},"moment.js"]],["td","String"],["td",'"YYYY-MM"']],["tr",["td","disabledDate"],["td","to specify the date that cannot be selected"],["td","function"],["td","-"]],["tr",["td","onChange"],["td","a callback function, can be executed when the selected time is changing"],["td","function(date: moment, dateString: string)"],["td","-"]],["tr",["td","disabled"],["td","determine whether the MonthPicker is disabled"],["td","Boolean"],["td","false"]],["tr",["td","style"],["td","to customize the style of the input box"],["td","Object"],["td","{}"]],["tr",["td","popupStyle"],["td","to customize the style of the popup calendar"],["td","Object"],["td","{}"]],["tr",["td","size"],["td","determine the size of the input box, the height of ",["code","large"]," and ",["code","small"],", are 32px and 22px respectively, while default size is 28px"],["td","String"],["td","-"]],["tr",["td","locale"],["td","localization configuration"],["td","Object"],["td",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/424"},"default"]]],["tr",["td","getCalendarContainer"],["td","to set the container of the floating layer, while the default is to create a ",["code","div"]," element in ",["code","body"]],["td","function(trigger)"],["td","-"]]]],["h3","RangePicker"],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","value"],["td","to set date"],["td","[moment, moment]"],["td","-"]],["tr",["td","defaultValue"],["td","to set default date"],["td","[moment, moment]"],["td","-"]],["tr",["td","format"],["td","to set the date format"],["td","String"],["td",'"YYYY-MM-DD HH:mm:ss"']],["tr",["td","onChange"],["td","a callback function, can be executed when the selected time is changing"],["td","function(dates: ","[moment, moment]",", dateStrings: ","[string, string]",")"],["td","-"]],["tr",["td","showTime"],["td","to provide an additional time selection"],["td","Object/Boolean"],["td",["a",{title:null,href:"/components/time-picker/#api"},"TimePicker Options"]]]]],["p","The following properties are the same with ",["code","DatePicker"],": ",["code","disabled"]," ",["code","style"]," ",["code","popupStyle"]," ",["code","size"]," ",["code","locale"]," ",["code","showTime"]," ",["code","onOk"]," ",["code","getCalendarContainer"]],["style","\n.code-box-demo .ant-calendar-picker {\n  margin: 0 8px 12px 0;\n}\n"]]}}});