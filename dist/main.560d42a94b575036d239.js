(()=>{"use strict";var e={948:(e,t,c)=>{e.exports=c.p+"assets/check-mark.cf523d68ad92423f8bc3..svg"},217:(e,t,c)=>{e.exports=c.p+"assets/delete.dc4e461c0c2e14f60685..svg"},71:(e,t,c)=>{e.exports=c.p+"assets/editIcon.3a016870a521060f5eab..svg"},547:(e,t,c)=>{e.exports=c.p+"assets/three-dots.feaafa2d6a90b7c9253d..svg"}},t={};function c(a){var r=t[a];if(void 0!==r)return r.exports;var s=t[a]={exports:{}};return e[a](s,s.exports,c),s.exports}c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var e;c.g.importScripts&&(e=c.g.location+"");var t=c.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");a.length&&(e=a[a.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),c.p=e})(),(()=>{const e=[{index:0,completed:!1,description:"Add your first task 0"},{index:1,completed:!0,description:"This task is complete 1"}],t=()=>{let t;return t=null===localStorage.getItem("localTasks")?localStorage.setItem("localTasks",JSON.stringify(e)):JSON.parse(localStorage.getItem("localTasks")),t};var a=c(547),r=c(217),s=c(71),o=c(948);function n(e,t,c){this.index=e,this.completed=t,this.description=c}class i{static add(e,c){const a=t(),r=new n(a.length,!1,e.value);""!==e.value&&(c.preventDefault(),a.push(r),localStorage.clear(),localStorage.setItem("localTasks",JSON.stringify(a)),e.value="")}static removeTaskOfList(e){const c=t(),a=e.target.id;e.preventDefault(),c.splice(a,1),c.forEach(((e,t)=>{e.index=t})),localStorage.clear(),localStorage.setItem("localTasks",JSON.stringify(c))}static updateTaskOfList(){document.querySelectorAll(".edit-icon").forEach((e=>{e.addEventListener("click",(e=>{const c=t(),a=e.target.parentElement.previousElementSibling.lastChild,r=e.target.parentElement.previousElementSibling.textContent,n=Number(e.target.id);c.forEach((e=>{n===e.index&&(e.description=r,localStorage.setItem("localTasks",JSON.stringify(c)))})),a.toggleAttribute("contenteditable"),a.hasAttribute("contenteditable")?e.target.src=o:e.target.src=s}))}))}}function l(){const e=t();document.querySelector(".tasks-list").innerHTML="",e.forEach((e=>{!function(e){const t=document.querySelector(".tasks-list"),c=document.createElement("li");c.innerHTML=`\n  <span><input type="checkbox" name="checkbox" class="checkbox" id="${e.index}"><p class="task-description" id="${e.index}">${e.description}</p></span> <span><img src="${s}" class="edit-icon" id="${e.index}" alt="edit icon"><img src="${r}" class="delete-icon" id="${e.index}" alt="delete icon"><img src="${a}" alt="three dots"><span>\n  `,t.appendChild(c)}(e)}));document.querySelectorAll(".delete-icon").forEach((e=>{e.addEventListener("click",(e=>{i.removeTaskOfList(e),e.target.parentElement.parentElement.remove()}))})),i.updateTaskOfList(),function(){const e=document.querySelectorAll(".checkbox"),c=t();c.forEach((e=>{if(!0===e.completed){const t=e.index,c=document.getElementById(`${t}`);c.checked=!0,c.nextElementSibling.classList.add("checked-box")}})),e.forEach((e=>{e.addEventListener("change",(e=>{!0===e.target.checked?(e.target.nextSibling.classList.add("checked-box"),c.forEach((t=>{Number(e.target.id)===t.index&&(t.completed=!0,localStorage.clear(),localStorage.setItem("localTasks",JSON.stringify(c)))}))):!1===e.target.checked&&(e.target.nextSibling.classList.remove("checked-box"),c.forEach((t=>{Number(e.target.id)===t.index&&(t.completed=!1,localStorage.clear(),localStorage.setItem("localTasks",JSON.stringify(c)))})))}))}))}()}l();const d=document.getElementById("add-input");d.addEventListener("keypress",(e=>{"Enter"===e.key&&(i.add(d,e),l())}));document.querySelector(".clear-button").addEventListener("click",(()=>{!function(){const e=t();e.filter((e=>!0===e.completed)).forEach((t=>{e.splice(t.index),e.forEach(((e,t)=>{e.index=t})),localStorage.clear(),localStorage.setItem("localTasks",JSON.stringify(e))}))}(),l()}))})()})();