(function(t){function e(e){for(var n,l,s=e[0],i=e[1],r=e[2],d=0,b=[];d<s.length;d++)l=s[d],Object.prototype.hasOwnProperty.call(c,l)&&c[l]&&b.push(c[l][0]),c[l]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);u&&u(e);while(b.length)b.shift()();return o.push.apply(o,r||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,s=1;s<a.length;s++){var i=a[s];0!==c[i]&&(n=!1)}n&&(o.splice(e--,1),t=l(l.s=a[0]))}return t}var n={},c={app:0},o=[];function l(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=t,l.c=n,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(a,n,function(e){return t[e]}.bind(null,n));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/tikets/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=e,s=s.slice();for(var r=0;r<s.length;r++)e(s[r]);var u=i;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0d30":function(t,e,a){"use strict";a("e000")},"35bb":function(t,e,a){},3748:function(t,e,a){"use strict";a("bca3")},"40e8":function(t,e,a){"use strict";a("e0d8")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("7a23");function c(t,e,a,c,o,l){var s=Object(n["k"])("AppButton"),i=Object(n["k"])("AppTikets"),r=Object(n["k"])("ModalAddTiket");return Object(n["h"])(),Object(n["c"])("div",{onKeyup:e[1]||(e[1]=Object(n["r"])((function(){return l.closeModal&&l.closeModal.apply(l,arguments)}),["esc"])),class:"app"},[Object(n["f"])(s,{onClickButton:l.showModal,buttonName:o.buttonNameAdd,class:"app__btn btn_create"},null,8,["onClickButton","buttonName"]),Object(n["f"])(i,{class:"app__tikets"}),o.showModalAddTiket?(Object(n["h"])(),Object(n["c"])(r,{key:0,onCloseModal:l.closeModal,class:"app__modal-add-tiket"},null,8,["onCloseModal"])):Object(n["d"])("",!0)],32)}a("b0c0");var o={class:"tikets"};function l(t,e,a,c,l,s){var i=Object(n["k"])("AppTiket");return Object(n["h"])(),Object(n["c"])("div",o,[(Object(n["h"])(!0),Object(n["c"])(n["a"],null,Object(n["j"])(s.tikets,(function(t){return Object(n["h"])(),Object(n["c"])(i,{key:t.name,tiket:t,class:"tikets__tiket"},null,8,["tiket"])})),128))])}var s={class:"tiket"},i={class:"display-table-cell"},r={class:"tiket__serial-number"},u={class:"display-table-cell"},d={class:"tiket__full-name"},b={class:"display-table-cell"},m={class:"tiket__type-of-appeal-and-message"},f={class:"tiket__type-of-appeal"},p=Object(n["e"])(" Тип обращения: "),j={class:"tiket__message"},k={class:"display-table-cell"},O={class:"tiket__status"},_={class:"tiket__status-text"},h={class:"display-table-cell"},y={class:"tiket__priority"},v={class:"display-table-cell"},E={datetime:"2021-03-31 10:04",class:"tiket__date-added"};function A(t,e,a,c,o,l){return Object(n["h"])(),Object(n["c"])("div",s,[Object(n["f"])("div",i,[Object(n["f"])("p",r,"#"+Object(n["l"])(a.tiket.ticket_number),1)]),Object(n["f"])("div",u,[Object(n["f"])("p",d,Object(n["l"])(a.tiket.user.name),1)]),Object(n["f"])("div",b,[Object(n["f"])("div",m,[Object(n["f"])("p",f,[p,Object(n["f"])("span",null,Object(n["l"])(a.tiket.subject),1)]),Object(n["f"])("p",j,Object(n["l"])(a.tiket.body_subject),1)])]),Object(n["f"])("div",k,[Object(n["f"])("div",O,[Object(n["f"])("span",{class:[l.statusIcon,"tiket__status-icon"]},null,2),Object(n["f"])("p",_,Object(n["l"])(l.appealStatus),1)])]),Object(n["f"])("div",h,[Object(n["f"])("p",y,"!"+Object(n["l"])(l.callPriority),1)]),Object(n["f"])("div",v,[Object(n["f"])("time",E,Object(n["l"])(a.tiket.date_added),1)])])}var g={name:"AppTiket",props:{tiket:{type:Object}},computed:{callPriority:function(){var t=null;switch(this.tiket.priority){case"0":t="Низкий";break;case"1":t="Средний";break;case"2":t="Высокий";break;case"3":t="Критический";break;default:break}return t},statusIcon:function(){return{"tiket__status-icon_new":"0"===this.tiket.status,"tiket__status-icon_in-processing":"1"===this.tiket.status,"tiket__status-icon_postponed":"2"===this.tiket.status,"tiket__status-icon_closed":"3"===this.tiket.status}},appealStatus:function(){var t=null;switch(this.tiket.status){case"0":t="Новый";break;case"1":t="В обработке";break;case"2":t="Отложено";break;case"3":t="Закрыто";break;default:break}return t}}};a("8d30");g.render=A;var M=g,T={name:"AppTikets",components:{AppTiket:M},computed:{tikets:function(){return this.$store.getters.tikets}}};a("3748");T.render=l;var U=T,w={class:"modal-add-tiket"};function D(t,e,a,c,o,l){var s=Object(n["k"])("AddForm");return Object(n["h"])(),Object(n["c"])("div",w,[Object(n["f"])("div",{onClick:e[1]||(e[1]=function(){return l.closeModal&&l.closeModal.apply(l,arguments)}),class:"modal-add-tiket__background"}),Object(n["f"])(s,{onCloseModal:l.closeModal,class:"modal-add-tiket__add-form"},null,8,["onCloseModal"])])}var B=Object(n["f"])("h3",{class:"add-form__title-h3"},"Новый тикет",-1),N={class:"add-form__row-btns"};function C(t,e,a,c,o,l){var s=Object(n["k"])("LabelAndInputAddForm"),i=Object(n["k"])("AppButton");return Object(n["h"])(),Object(n["c"])("form",{onSubmit:e[1]||(e[1]=Object(n["s"])((function(){return l.addTiket&&l.addTiket.apply(l,arguments)}),["prevent"])),class:"add-form"},[B,(Object(n["h"])(!0),Object(n["c"])(n["a"],null,Object(n["j"])(t.inputList,(function(t){return Object(n["h"])(),Object(n["c"])(s,{key:t.idEl,formEl:t,setDefaultValueForm:o.setDefaultValueForm,onAddDataUser:l.addDataUser,class:"add-form__label-and-input-add-form"},null,8,["formEl","setDefaultValueForm","onAddDataUser"])})),128)),Object(n["f"])("div",N,[Object(n["f"])(i,{buttonName:o.buttonNameCreate,typeButton:o.typeButtonSubmit,class:"add-form__btn btn_create"},null,8,["buttonName","typeButton"]),Object(n["f"])(i,{onClickButton:l.closeModal,buttonName:o.buttonNameCancel,class:"add-form__btn btn_cancel"},null,8,["onClickButton","buttonName"])])],32)}a("99af"),a("fb6a");function x(t,e,a,c,o,l){return Object(n["h"])(),Object(n["c"])("button",{type:a.typeButton,onClick:e[1]||(e[1]=function(){return l.clickButton&&l.clickButton.apply(l,arguments)}),class:"btn"},Object(n["l"])(a.buttonName),9,["type"])}var F={name:"AppButton",props:{buttonName:{type:String},typeButton:{type:String,default:"button"}},methods:{clickButton:function(){this.$emit("clickButton")}}};a("c44c");F.render=x;var L=F,S={class:"label-and-input-add-form"};function V(t,e,a,c,o,l){return Object(n["h"])(),Object(n["c"])("div",S,[Object(n["f"])("label",{for:a.formEl.nameEl,class:"label-and-input-add-form__label"},Object(n["l"])(a.formEl.nameLabel)+": ",9,["for"]),"input"===a.formEl.formElement?Object(n["q"])((Object(n["h"])(),Object(n["c"])("input",{key:0,name:a.formEl.nameEl,id:a.formEl.nameEl,type:a.formEl.typeInput,"onUpdate:modelValue":e[1]||(e[1]=function(t){return o.dataUser[a.formEl.nameEl]=t}),onChange:e[2]||(e[2]=function(){return l.addDataUser&&l.addDataUser.apply(l,arguments)}),onInput:e[3]||(e[3]=function(){return l.onlyText&&l.onlyText.apply(l,arguments)}),required:"",class:"label-and-input-add-form__input"},null,40,["name","id","type"])),[[n["m"],o.dataUser[a.formEl.nameEl],void 0,{trim:!0}]]):Object(n["d"])("",!0),"textarea"===a.formEl.formElement?Object(n["q"])((Object(n["h"])(),Object(n["c"])("textarea",{key:1,name:a.formEl.nameEl,id:a.formEl.nameEl,"onUpdate:modelValue":e[4]||(e[4]=function(t){return o.dataUser[a.formEl.nameEl]=t}),onChange:e[5]||(e[5]=function(){return l.addDataUser&&l.addDataUser.apply(l,arguments)}),required:"",class:"label-and-input-add-form__input label-and-input-add-form__input_textarea"},"\n    ",40,["name","id"])),[[n["o"],o.dataUser[a.formEl.nameEl],void 0,{trim:!0}]]):Object(n["d"])("",!0),"select"===a.formEl.formElement?Object(n["q"])((Object(n["h"])(),Object(n["c"])("select",{key:2,name:a.formEl.nameEl,id:a.formEl.nameEl,"onUpdate:modelValue":e[6]||(e[6]=function(t){return o.dataUser[a.formEl.nameEl]=t}),onChange:e[7]||(e[7]=function(){return l.addDataUser&&l.addDataUser.apply(l,arguments)}),required:"",class:"label-and-input-add-form__input"},[(Object(n["h"])(!0),Object(n["c"])(n["a"],null,Object(n["j"])(a.formEl.options,(function(t,e){return Object(n["h"])(),Object(n["c"])("option",{key:e,value:e},Object(n["l"])(t),9,["value"])})),128))],40,["name","id"])),[[n["n"],o.dataUser[a.formEl.nameEl]]]):Object(n["d"])("",!0)])}a("5319"),a("ac1f");var I={name:"LabelAndInputAddForm",props:{formEl:{type:Object},setDefaultValueForm:{type:Boolean}},data:function(){return{dataUser:{}}},methods:{onlyText:function(){this.dataUser.name&&(this.dataUser.name=this.dataUser.name.replace(/[^a-zа-я ]/gi,""))},addDataUser:function(){this.$emit("addDataUser",this.dataUser)}},watch:{setDefaultValueForm:function(){this.dataUser={}}}};a("df2d");I.render=V;var P=I,$=[{formElement:"input",nameEl:"name",idEl:"name",typeInput:"text",nameLabel:"Имя"},{formElement:"input",nameEl:"email",idEl:"email",typeInput:"email",nameLabel:"Email"},{formElement:"textarea",nameEl:"body_subject",idEl:"body_subject",nameLabel:"Сообщение"},{formElement:"select",nameEl:"subject",idEl:"subject",nameLabel:"Тип обращения",options:{"Жалоба на пользователя":"Жалоба на пользователя","Жалоба на приложение":"Жалоба на приложение","Жалоба на сайт":"Жалоба на сайт","Оплата":"Оплата","Функционал":"Функционал","Авторизация":"Авторизация","Модерация":"Модерация","Другое":"Другое"}},{formElement:"select",nameEl:"priority",idEl:"priority",nameLabel:"Приоритет",options:{0:"Низкий",1:"Средний",2:"Высокий",3:"Критический"}},{formElement:"select",nameEl:"status",idEl:"status",nameLabel:"Статус",options:{0:"Новый",1:"В обработке",2:"Отложено",3:"Закрыто"}}],q={name:"AddForm",components:{AppButton:L,LabelAndInputAddForm:P},data:function(){return{buttonNameCreate:"Создать",buttonNameCancel:"Отмена",typeButtonSubmit:"submit",setDefaultValueForm:!1,dataTiket:{user:{name:"",email:""},body_subject:"",subject:"",status:0,priority:2,ticket_number:0,date_added:null}}},methods:{closeModal:function(){this.$emit("closeModal")},dateAdd:function(){var t=new Date;this.dataTiket.date_added="\n        ".concat(("0"+t.getDate()).slice(-2),".").concat(("0"+(t.getMonth()+1)).slice(-2),".").concat(t.getFullYear(),", \n        ").concat(("0"+t.getHours()).slice(-2),":").concat(("0"+t.getMinutes()).slice(-2),"\n        ")},addTiket:function(){this.dateAdd(),this.dataTiket.ticket_number=this.$store.getters.ticketNumber;var t=Object.assign({},this.dataTiket);this.$store.commit("addTiket",t),this.setDefaultValueForm=!this.setDefaultValueForm,this.dataTiket={user:{name:"",email:""},body_subject:"",subject:"",status:0,priority:2,ticket_number:0,date_added:null}},addDataUser:function(t){t.name||t.email?Object.assign(this.dataTiket.user,t):Object.assign(this.dataTiket,t)}},created:function(){this.inputList=$}};a("0d30");q.render=C;var J=q,z={components:{AddForm:J},name:"ModalAddTiket",methods:{closeModal:function(){this.$emit("closeModal")}}};a("40e8");z.render=D;var H=z,K={name:"App",components:{AppTikets:U,ModalAddTiket:H,AppButton:L},data:function(){return{showModalAddTiket:!1,buttonNameAdd:"Добавить"}},methods:{closeModal:function(){this.showModalAddTiket=!1},showModal:function(){this.showModalAddTiket=!0}}};a("5712");K.render=c;var Y=K,G=a("5502"),Q=Object(G["a"])({state:{tikets:[],ticketNumber:1},getters:{tikets:function(t){return t.tikets},ticketNumber:function(t){return t.ticketNumber}},mutations:{addTiket:function(t,e){t.ticketNumber++,t.tikets.push(e)}},actions:{},modules:{}});Object(n["b"])(Y).use(Q).mount("#app")},5712:function(t,e,a){"use strict";a("a62f")},"8d30":function(t,e,a){"use strict";a("edb6")},a62f:function(t,e,a){},bca3:function(t,e,a){},c44c:function(t,e,a){"use strict";a("f692")},df2d:function(t,e,a){"use strict";a("35bb")},e000:function(t,e,a){},e0d8:function(t,e,a){},edb6:function(t,e,a){},f692:function(t,e,a){}});
//# sourceMappingURL=app.8447a0f4.js.map