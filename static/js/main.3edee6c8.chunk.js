(this["webpackJsonpcal-todo"]=this["webpackJsonpcal-todo"]||[]).push([[0],{16:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(5),i=n.n(r),d=(n(16),n(3)),s=n(2),o=n(8),l=n(7),u="ADD_QUEST",j="DELETE_QUEST",b="EDIT_QUEST",m="DONE_QUEST",h=Object(o.a)({rates:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[{id:1,quest:"Do shopping",date:"2021-12-05",time:"18:30",done:!1},{id:2,quest:"Walk the dog",date:"2022-02-10",time:"16:30",done:!0},{id:3,quest:"Wash the dishes",date:"2022-01-15",time:"12:00",done:!1},{id:4,quest:"Play chess",date:"2022-01-03",time:"10:00",done:!1},{id:5,quest:"Take out the trash",date:"2022-04-05",time:"18:30",done:!1},{id:6,quest:"Clean the house",date:"2022-03-04",time:"18:30",done:!1},{id:7,quest:"Cook lunch",date:"2022-01-05",time:"18:30",done:!1},{id:8,quest:"Meet up with friends",date:"2022-02-05",time:"18:30",done:!1}],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return[].concat(Object(l.a)(e),[t.payload]);case j:return e.filter((function(e){return e.id!==t.payload.id}));case b:return e.map((function(e){return e.id==t.payload.id?{id:e.id,quest:e.quest,date:e.date,time:e.time,done:!0}:e}));case m:return e.map((function(n){if(n.id!==t.payload.id)return e;var a=t.payload;return{id:a.id,done:a.done}}));default:return console.log("Nie ma takiego typu akcji"),e}}}),f=Object(o.b)(h),v=function(e){var t=document.querySelectorAll("input");console.log(t);for(var n=0;n<t.length;n++)t[n].classList.remove("empty-field");var a=document.getElementById(e);null!==a&&(console.log(a),a.classList.add("empty-field"))},O=n(1),p=Math.floor(1e3*Math.random());var g=function(){var e=Object(a.useState)(""),t=Object(d.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),i=Object(d.a)(r,2),o=i[0],l=i[1],j=Object(a.useState)(""),b=Object(d.a)(j,2),m=b[0],h=b[1],f=Object(s.c)((function(e){return e.rates})),g=Object(s.b)(),x=function(e){switch(e.target.id){case"quest":return c(e.target.value);case"time":return l(e.target.value);case"date":return h(e.target.value);default:return}};return Object(O.jsxs)("div",{className:"form",children:[Object(O.jsx)("h2",{children:"Dodaj zadanie"}),Object(O.jsxs)("form",{children:[Object(O.jsx)("div",{id:"quest_add",children:Object(O.jsxs)("label",{children:[Object(O.jsx)("p",{children:"Nazwa zadania:"}),Object(O.jsx)("input",{id:"quest",onChange:x,type:"text",value:n})]})}),Object(O.jsxs)("div",{id:"quest_time",children:[Object(O.jsxs)("label",{children:[Object(O.jsx)("p",{children:"Godzina"}),Object(O.jsx)("input",{id:"time",onChange:x,type:"time",value:o})]}),Object(O.jsxs)("label",{children:[Object(O.jsx)("p",{children:"Data:"}),Object(O.jsx)("input",{id:"date",onChange:x,type:"date",value:m})]}),Object(O.jsx)("button",{onClick:function(e){if(e.preventDefault(),n.length)if(o)if(m.length){g(function(e){var t=e.id,n=e.quest,a=e.date,c=e.time,r=e.done;return{type:u,payload:{id:t,quest:n,date:a,time:c,done:r}}}({id:p,quest:n,date:m,time:o,done:!1})),p=Math.floor(1e3*Math.random());for(var t=0;t<f.length;t++)f[t].id===p&&(p=Math.floor(1e3*Math.random()),t=0);c(""),l(""),h(""),v("")}else v("date");else v("time");else v("quest")},children:"Dodaj"})]})]})]})},x=function(e,t){var n=e.date,a=t.date,c=e.time,r=t.time;return n<a?1:n>a?-1:c>r?1:c<r?-1:0};var y=function(e){var t=e.dateFilter,n=Object(s.b)(),c=Object(s.c)((function(e){return e.rates})),r=Object(a.useState)("todo"),i=Object(d.a)(r,2),o=i[0],u=i[1],j=Object(a.useState)(""),m=Object(d.a)(j,2),h=m[0],f=m[1],v="";c.sort(x);var p=function(){for(var e,n=arguments.length>0&&void 0!==arguments[0]&&arguments[0],a=arguments.length>1?arguments[1]:void 0,c=arguments.length>2?arguments[2]:void 0,r=document.getElementsByClassName("top-button"),i=0;i<r.length;i++)r[i].classList.remove("active");e=n?n.target.classList[1]:a;var d=Object(l.a)(c);v="done"===e?d.filter((function(e){return!0===e.done})):"btn"===e?d.filter((function(e){return e.date===t})):d.filter((function(e){return!1===e.done}));var s=document.getElementsByClassName("top-button ".concat(e));void 0!==s[0].classList&&s[0].classList.add("active"),u(e),g(v)},g=function(e){var t=e.map((function(e){return Object(O.jsxs)("div",{className:"List__element",children:[Object(O.jsx)("span",{className:"List__element__data",children:e.date})," ",Object(O.jsx)("span",{className:"List__element__quest",children:e.quest})," ",Object(O.jsx)("span",{className:"List__element__time",children:e.time}),e.done?null:Object(O.jsx)("button",{className:e.id,onClick:function(e){return n(function(e){var t=e.id,n=e.quest,a=e.date,c=e.time;return{type:b,payload:{id:t,quest:n,date:a,time:c}}}(function(e){return{id:e,done:!0}}(e.target.classList[0])))},children:"zako\u0144cz"})]},e.id)}));f(t)};Object(a.useEffect)((function(){p(!1,o,c)}),[c]),Object(a.useEffect)((function(){p(!1,"btn",c)}),[t]);var y=[["todo","Do zrobienia"],["done","Zako\u0144czone"],["btn","Z dnia ".concat(t)]].map((function(e){return Object(O.jsx)("button",{onClick:function(e){return p(e,o,c)},className:"top-button ".concat(e[0]),children:e[1]},e[0])}));return Object(O.jsxs)("div",{className:"List",children:[Object(O.jsx)("h2",{children:"Lista zada\u0144"}),Object(O.jsx)("div",{children:y}),0===h.length?"brak zada\u0144":h]})};var E=function(e){var t=e.click,n=e.month,a=e.year;return Object(O.jsxs)("div",{className:"CalendarHeader",children:[Object(O.jsx)("button",{onClick:t,className:"prevMonth",children:"prev"}),Object(O.jsxs)("h3",{children:[["stycze\u0144","luty","marzec","kwiecie\u0144","maj","czerwiec","lipiec","siepie\u0144","wrzesie\u0144","pa\u017adziernik","listopad","grudzie\u0144"][n]," ",a]}),Object(O.jsx)("button",{onClick:t,className:"nextMonth",children:"next"})]})},C=function(e){var t,n=document.querySelectorAll("#CalendarTable .day"),a=null===(t=document.querySelector(".CalendarHeader h3"))||void 0===t?void 0:t.innerHTML.split(" ");if(void 0!==a)for(var c=["stycze\u0144","luty","marzec","kwiecie\u0144","maj","czerwiec","lipiec","sierpie\u0144","wrzesie\u0144","pa\u017adziernik","listopad","grudzie\u0144"].indexOf(a[0])+1,r=a[1],i=0;i<e.length;i++)if(!1===e[i].done){var d=e[i].date.split("-"),s=d[2];if("0"===s[0]){var o=s.split("");s=o[1]}for(var l=Number(d[1]),u=d[0],j=0;j<n.length;j++)n[j].innerHTML===s&&l===c&&u===r&&n[j].classList.add("todos")}};var q=function(e){var t=e.year,n=e.month,c=e.day,r=e.now,i=Object(s.c)((function(e){return e.rates})),d=["Pon","Wto","\u015aro","Czw","Pi\u0105","Sob","Nie"];return Object(a.useEffect)((function(){!function(e,t,n,a,c){var r=document.getElementById("CalendarTable");if(null!==r){r.innerHTML="";var i=document.createElement("table");r.appendChild(i);var d=new Date(e,t+1,0).getDate(),s=new Date(e,t,1).getDay();0===s&&(s=7);var o=document.createElement("tr");c.forEach((function(e){var t=document.createElement("th");t.innerHTML=e,o.appendChild(t)})),i.appendChild(o),s-1!==0&&(o=document.createElement("tr"),i.appendChild(o));for(var l=0;l<s-1;l++){var u=document.createElement("td");u.innerHTML="",o.appendChild(u)}for(var j=d+s-1,b=s-1;b<j;b++){b%7===0&&(o=document.createElement("tr"),i.appendChild(o));var m=document.createElement("td");m.innerText="".concat(b-s+2),m.classList.add("day"),m.classList.add("".concat(b-s+2)),e===a.getFullYear()&&t===a.getMonth()&&n===b-s+2&&m.classList.add("today"),o.appendChild(m)}}}(t,n,c,r,d),C(i)})),Object(O.jsx)("div",{id:"CalendarTable"})};var L=function(e){var t=e.setDateFilter,n=Object(s.c)((function(e){return e.rates})),c=new Date,r=Object(a.useState)(c.getMonth()),i=Object(d.a)(r,2),o=i[0],l=i[1],u=Object(a.useState)(c.getFullYear()),j=Object(d.a)(u,2),b=j[0],m=j[1];12===o&&l(0),-1===o&&l(11);var h=c.getDate(),f=function(e){var n=e.target.classList[1];1===n.length&&(n="0"+n);var a=o+1;a<10&&(a="0"+a);var c=b+"-"+a+"-"+n;t(""),t(c)},v=Object(a.useRef)();return Object(a.useEffect)((function(){v.current=document.getElementsByClassName("day");for(var e=0;e<v.current.length;e++)v.current[e].addEventListener("click",f)})),Object(O.jsxs)("div",{className:"Calendar",children:[Object(O.jsx)(E,{click:function(e){var t=e.target;"nextMonth"===t.className?(11===o&&m((function(e){return++e})),l((function(e){return++e}))):"prevMonth"===t.className&&(0===o&&m((function(e){return--e})),l((function(e){return--e}))),C(n)},month:o,year:b}),Object(O.jsx)(q,{month:o,year:b,day:h,now:c})]})};var z=function(){var e=new Date,t=e.getDay();t<10&&(t="0"+t);var n=e.getFullYear(),c=e.getMonth();e=t+"-"+c+"-"+n;var r=Object(a.useState)(e),i=Object(d.a)(r,2),o=i[0],l=i[1];return Object(O.jsx)("div",{className:"app",children:Object(O.jsxs)(s.a,{store:f,children:[Object(O.jsxs)("div",{class:"col_1",children:[Object(O.jsx)(g,{}),Object(O.jsx)(L,{setDateFilter:l})]}),Object(O.jsx)("div",{class:"col_2",children:Object(O.jsx)(y,{dateFilter:o})})]})})};i.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(z,{})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.3edee6c8.chunk.js.map