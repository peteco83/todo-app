(this.webpackJsonpundefined=this.webpackJsonpundefined||[]).push([[0],{10:function(e,t,a){e.exports=a(16)},12:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),A=a.n(n),i=a(7),c=a(2),l=a(3),m=a(8),d=a(4),I=a(9),s=(a(12),a(5)),o=a.n(s);function u(){return A.a.createElement("nav",null,A.a.createElement("div",{className:"left"},A.a.createElement("img",{src:o.a,alt:"logo"})),A.a.createElement("div",{className:"right"},A.a.createElement("a",{href:"#"},"Help")))}function E(e){var t=e.item;return A.a.createElement("div",{className:"todo-item",onClick:function(){return e.changeStatus(e.index)}},A.a.createElement("p",null,t.text),A.a.createElement("div",{className:"actions"},A.a.createElement("button",{className:"btn"},"\u2714")))}function r(e){var t=e.items.map((function(t,a){return A.a.createElement(E,{item:t,key:t.text,changeStatus:e.changeStatus,index:t.id})}));return A.a.createElement("div",{className:"todos-container"},A.a.createElement("form",{className:"todo-form"},A.a.createElement("label",{className:"input-item"},A.a.createElement("input",{type:"text",name:"todo"})),A.a.createElement("input",{type:"submit",className:"btn",value:"ADD"})),A.a.createElement("div",{className:"todos"},A.a.createElement("h3",null,"To Do"),t))}function Z(e){var t=e.item;return A.a.createElement("div",{className:"todones-item",onClick:function(){return e.changeStatus(e.index)}},A.a.createElement("p",null,t.text),A.a.createElement("div",{className:"actions"},A.a.createElement("button",{className:"btn"},"\u21bb")))}function b(e){var t=e.items.map((function(t,a){return A.a.createElement(Z,{item:t,key:t.text,changeStatus:e.changeStatus,index:t.id})}));return A.a.createElement("div",{className:"todones-container"},A.a.createElement("h3",null,"Backlog"),t)}var G=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).changeStatus=function(e){var t=Object(i.a)(a.state.items);t.map((function(t){return t.id===e?(t.done=!t.done,t):t})),a.setState({items:t})},a.state={items:[{id:0,text:"Wash my face",done:!1},{id:1,text:"Walk the dog",done:!1},{id:2,text:"Pay the Rent",done:!1},{id:3,text:"Make a website",done:!0},{id:4,text:"Call my mom",done:!0},{id:5,text:"Finish watching the serie",done:!0},{id:6,text:"Make more money",done:!0}]},a}return Object(I.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state.items.filter((function(e){return!e.done})),t=this.state.items.filter((function(e){return e.done}));return A.a.createElement("div",{className:"app"},A.a.createElement(u,null),A.a.createElement(r,{items:e,changeStatus:this.changeStatus}),A.a.createElement(b,{items:t,changeStatus:this.changeStatus}))}}]),t}(n.Component),N=a(6);a.n(N).a.render(A.a.createElement(G,null),document.getElementById("root"))},5:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAAAwCAYAAABUmTXqAAAACXBIWXMAAC4jAAAuIwF4pT92AAAG0mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTktMTAtMjZUMjI6MDU6MDMrMDI6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMTktMTAtMjZUMjI6MTA6MjQrMDI6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDE5LTEwLTI2VDIyOjEwOjI0KzAyOjAwIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmQ5MWUxYmQwLThiNmItNDkyNi04NDU0LTAwNmJkMGZhZjUzOCIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjc3ZTFjNWEwLTAyM2ItMGI0Yy04MWE1LWZjMzZiNWEwNTU3NCIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjAwYWM1MWM1LTAxYjYtNGExOC04YWVlLTIwNmI1YzA0YjNjMCIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MDBhYzUxYzUtMDFiNi00YTE4LThhZWUtMjA2YjVjMDRiM2MwIiBzdEV2dDp3aGVuPSIyMDE5LTEwLTI2VDIyOjA1OjAzKzAyOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoTWFjaW50b3NoKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ODE5YWU3MDUtN2Q2ZC00ZmIwLTllMGUtNWI3YzM2MzMzYTJjIiBzdEV2dDp3aGVuPSIyMDE5LTEwLTI2VDIyOjA1OjAzKzAyOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZDkxZTFiZDAtOGI2Yi00OTI2LTg0NTQtMDA2YmQwZmFmNTM4IiBzdEV2dDp3aGVuPSIyMDE5LTEwLTI2VDIyOjEwOjI0KzAyOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBl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"}},[[10,1,2]]]);
//# sourceMappingURL=main.ded748a5.chunk.js.map