"use strict";(self.webpackChunkevaluation_form=self.webpackChunkevaluation_form||[]).push([[166],{166:(re,v,i)=>{i.r(v),i.d(v,{FormModule:()=>ne});var E=i(9808),_=i(5120),w=i(8113),g=i(2930),d=i(7579),B=i(6451),h=i(9718),x=i(8505),C=i(2722),e=i(5e3);let f=(()=>{class t{constructor(){this.decreaseFormStepIndex$=new d.x,this.increaseFormStepIndex$=new d.x,this.canNext$=new d.x,this.canPrev$=new d.x}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=e.\u0275\u0275defineInjectable({token:t,factory:t.\u0275fac}),t})();var F=i(999),u=i(2382),m=i(2711),y=i(6679),D=i(3731),O=i(3639),S=i(5160),M=i(9216),s=i(9886);let $=(()=>{class t{keyNumberEnterOnlyDirective(n){/[0-9]/.test(n.key)||n.preventDefault()}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275dir=e.\u0275\u0275defineDirective({type:t,selectors:[["","schoolEvaluationFormInputNumber",""]],hostBindings:function(n,o){1&n&&e.\u0275\u0275listener("keypress",function(c){return o.keyNumberEnterOnlyDirective(c)})}}),t})();const l=function(){return[]};let A=(()=>{class t{constructor(n){this.formService=n,this.forms={schoolName:new u.FormControl("",m.w.required({text:"\u0e42\u0e23\u0e07\u0e40\u0e23\u0e35\u0e22\u0e19"})),group:new u.FormControl("",m.w.required({text:"\u0e01\u0e25\u0e38\u0e48\u0e21\u0e40\u0e04\u0e23\u0e37\u0e2d\u0e02\u0e48\u0e32\u0e22"})),address:new u.FormControl("",m.w.required({text:"\u0e17\u0e35\u0e48\u0e2d\u0e22\u0e39\u0e48"})),district:new u.FormControl("",m.w.required({text:"\u0e2d\u0e33\u0e40\u0e20\u0e2d"})),province:new u.FormControl({value:"\u0e25\u0e33\u0e1b\u0e32\u0e07",disabled:!0},m.w.required({text:"\u0e08\u0e31\u0e07\u0e2b\u0e27\u0e31\u0e14"})),managerName:new u.FormControl("",m.w.required({text:"\u0e0a\u0e37\u0e48\u0e2d-\u0e2a\u0e01\u0e38\u0e25 \u0e1c\u0e39\u0e49\u0e1a\u0e23\u0e34\u0e2b\u0e32\u0e23\u0e2a\u0e16\u0e32\u0e19\u0e28\u0e36\u0e01\u0e29\u0e32"})),startPostionYear:new u.FormControl("",m.w.required({text:"\u0e14\u0e33\u0e23\u0e07\u0e15\u0e33\u0e41\u0e2b\u0e19\u0e48\u0e07\u0e15\u0e31\u0e49\u0e07\u0e41\u0e15\u0e48\u0e1b\u0e35"})),managerPhone:new u.FormControl("",m.w.required({text:"\u0e40\u0e1a\u0e2d\u0e23\u0e4c\u0e42\u0e17\u0e23"})),fullname:new u.FormControl("",m.w.required({text:"\u0e0a\u0e37\u0e48\u0e2d-\u0e2a\u0e01\u0e38\u0e25 \u0e04\u0e23\u0e39\u0e17\u0e35\u0e48\u0e23\u0e31\u0e1a\u0e1c\u0e34\u0e14\u0e0a\u0e2d\u0e1a"})),startYear:new u.FormControl("",m.w.required({text:"\u0e15\u0e31\u0e49\u0e07\u0e41\u0e15\u0e48\u0e1b\u0e35"})),phone:new u.FormControl("",m.w.required({text:"\u0e40\u0e1a\u0e2d\u0e23\u0e4c\u0e42\u0e17\u0e23"})),time:new u.FormControl("1"),date:new u.FormControl(null,m.w.required({text:"\u0e27\u0e31\u0e19/\u0e40\u0e14\u0e37\u0e2d\u0e19/\u0e1b\u0e35"}))},this.formGroup=new u.FormGroup(this.forms),this.destroy$=new d.x,this.formUser=JSON.parse(localStorage.getItem("formUser")||"{}"),this.formGroup.patchValue(this.formUser),this.onSubmit()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}onSubmit(){this.formService.canNext$.pipe((0,x.b)({next:()=>{m.T.markAsTouched(this.formGroup),!this.formGroup.invalid&&(localStorage.setItem("formUser",JSON.stringify(this.formGroup.value)),this.formService.increaseFormStepIndex$.next(null))}}),(0,C.R)(this.destroy$)).subscribe()}}return t.\u0275fac=function(n){return new(n||t)(e.\u0275\u0275directiveInject(f))},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["school-evaluation-form-user-form"]],decls:104,vars:73,consts:[[3,"formGroup"],[1,"tui-row","tui-row_sme"],[1,"tui-col_12"],[1,"tui-form__row","tui-form__row_multi-fields"],[1,"tui-form__multi-field"],["formControlName","schoolName"],[1,"tui-required"],["formControlName","schoolName",3,"error"],["formControlName","group"],["formControlName","group",3,"error"],[1,"tui-form__row"],["tuiGroup",""],["formControlName","address",1,"tui-group__inherit-item"],["formControlName","address",3,"error"],[1,"tui-group__auto-width-item"],["formControlName","district",1,"tui-group__inherit-item"],["formControlName","district",3,"error"],["formControlName","province",1,"tui-group__inherit-item"],["formControlName","province",3,"error"],["formControlName","managerName",1,"tui-group__inherit-item"],["formControlName","managerName",3,"error"],["formControlName","startPostionYear","schoolEvaluationFormInputNumber","",1,"tui-group__inherit-item"],["formControlName","startPostionYear",3,"error"],["formControlName","managerPhone","schoolEvaluationFormInputNumber","","tuiTextfieldType","tel","tuiTextfieldInputMode","numeric",1,"tui-group__inherit-item"],["formControlName","managerPhone",3,"error"],["formControlName","fullname",1,"tui-group__inherit-item"],["formControlName","fullname",3,"error"],["formControlName","startYear","schoolEvaluationFormInputNumber","",1,"tui-group__inherit-item"],["formControlName","startYear",3,"error"],["formControlName","phone","schoolEvaluationFormInputNumber","","tuiTextfieldType","tel","tuiTextfieldInputMode","numeric",1,"tui-group__inherit-item"],["formControlName","phone",3,"error"],[1,"align-center","tui-space_vertical-7"],[1,"tui-form__multi-field","self-center"],[1,"font-nomal"],["contentAlign","left","formControlName","time","item","1","size","l",1,"tui-group__auto-width-item"],["contentAlign","left","formControlName","time","item","2","size","l",1,"tui-group__auto-width-item"],["toNativeDate","","formControlName","date"],["formControlName","date",3,"error"]],template:function(n,o){1&n&&(e.\u0275\u0275elementStart(0,"form",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"tui-input",5),e.\u0275\u0275text(6," \u0e42\u0e23\u0e07\u0e40\u0e23\u0e35\u0e22\u0e19 "),e.\u0275\u0275element(7,"span",6),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(8,"tui-field-error",7),e.\u0275\u0275pipe(9,"async"),e.\u0275\u0275pipe(10,"tuiFieldError"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(11,"div",4)(12,"tui-input",8),e.\u0275\u0275text(13," \u0e01\u0e25\u0e38\u0e48\u0e21\u0e40\u0e04\u0e23\u0e37\u0e2d\u0e02\u0e48\u0e32\u0e22 "),e.\u0275\u0275element(14,"span",6),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(15,"tui-field-error",9),e.\u0275\u0275pipe(16,"async"),e.\u0275\u0275pipe(17,"tuiFieldError"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(18,"div",10)(19,"div",11)(20,"div")(21,"tui-input",12),e.\u0275\u0275text(22," \u0e17\u0e35\u0e48\u0e2d\u0e22\u0e39\u0e48 "),e.\u0275\u0275element(23,"span",6),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(24,"tui-field-error",13),e.\u0275\u0275pipe(25,"async"),e.\u0275\u0275pipe(26,"tuiFieldError"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(27,"div",14)(28,"tui-input",15),e.\u0275\u0275text(29," \u0e2d\u0e33\u0e40\u0e20\u0e2d "),e.\u0275\u0275element(30,"span",6),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(31,"tui-field-error",16),e.\u0275\u0275pipe(32,"async"),e.\u0275\u0275pipe(33,"tuiFieldError"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(34,"div",14)(35,"tui-input",17),e.\u0275\u0275text(36," \u0e08\u0e31\u0e07\u0e2b\u0e27\u0e31\u0e14 "),e.\u0275\u0275element(37,"span",6),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(38,"tui-field-error",18),e.\u0275\u0275pipe(39,"async"),e.\u0275\u0275pipe(40,"tuiFieldError"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(41,"div",10)(42,"div",11)(43,"div")(44,"tui-input",19),e.\u0275\u0275text(45," \u0e0a\u0e37\u0e48\u0e2d-\u0e2a\u0e01\u0e38\u0e25 \u0e1c\u0e39\u0e49\u0e1a\u0e23\u0e34\u0e2b\u0e32\u0e23\u0e2a\u0e16\u0e32\u0e19\u0e28\u0e36\u0e01\u0e29\u0e32 "),e.\u0275\u0275element(46,"span",6),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(47,"tui-field-error",20),e.\u0275\u0275pipe(48,"async"),e.\u0275\u0275pipe(49,"tuiFieldError"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(50,"div")(51,"tui-input",21),e.\u0275\u0275text(52," \u0e14\u0e33\u0e23\u0e07\u0e15\u0e33\u0e41\u0e2b\u0e19\u0e48\u0e07\u0e15\u0e31\u0e49\u0e07\u0e41\u0e15\u0e48\u0e1b\u0e35 "),e.\u0275\u0275element(53,"span",6),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(54,"tui-field-error",22),e.\u0275\u0275pipe(55,"async"),e.\u0275\u0275pipe(56,"tuiFieldError"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(57,"div")(58,"tui-input",23),e.\u0275\u0275text(59," \u0e40\u0e1a\u0e2d\u0e23\u0e4c\u0e42\u0e17\u0e23 "),e.\u0275\u0275element(60,"span",6),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(61,"tui-field-error",24),e.\u0275\u0275pipe(62,"async"),e.\u0275\u0275pipe(63,"tuiFieldError"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(64,"div",10)(65,"div",11)(66,"div")(67,"tui-input",25),e.\u0275\u0275text(68," \u0e0a\u0e37\u0e48\u0e2d-\u0e2a\u0e01\u0e38\u0e25 \u0e04\u0e23\u0e39\u0e17\u0e35\u0e48\u0e23\u0e31\u0e1a\u0e1c\u0e34\u0e14\u0e0a\u0e2d\u0e1a "),e.\u0275\u0275element(69,"span",6),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(70,"tui-field-error",26),e.\u0275\u0275pipe(71,"async"),e.\u0275\u0275pipe(72,"tuiFieldError"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(73,"div")(74,"tui-input",27),e.\u0275\u0275text(75," \u0e15\u0e31\u0e49\u0e07\u0e41\u0e15\u0e48\u0e1b\u0e35 "),e.\u0275\u0275element(76,"span",6),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(77,"tui-field-error",28),e.\u0275\u0275pipe(78,"async"),e.\u0275\u0275pipe(79,"tuiFieldError"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(80,"div")(81,"tui-input",29),e.\u0275\u0275text(82," \u0e40\u0e1a\u0e2d\u0e23\u0e4c\u0e42\u0e17\u0e23 "),e.\u0275\u0275element(83,"span",6),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(84,"tui-field-error",30),e.\u0275\u0275pipe(85,"async"),e.\u0275\u0275pipe(86,"tuiFieldError"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(87,"h2",31),e.\u0275\u0275text(88," \u0e2a\u0e33\u0e19\u0e31\u0e01\u0e07\u0e32\u0e19\u0e40\u0e02\u0e15\u0e1e\u0e37\u0e49\u0e19\u0e17\u0e35\u0e48\u0e01\u0e32\u0e23\u0e28\u0e36\u0e01\u0e29\u0e32\u0e1b\u0e23\u0e30\u0e16\u0e21\u0e28\u0e36\u0e01\u0e29\u0e32\u0e25\u0e33\u0e1b\u0e32\u0e07 \u0e40\u0e02\u0e15 1 "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(89,"div",3)(90,"div",32)(91,"h3",33),e.\u0275\u0275text(92,"\u0e04\u0e23\u0e31\u0e49\u0e07\u0e17\u0e35\u0e48\u0e19\u0e34\u0e40\u0e17\u0e28 \u0e15\u0e34\u0e14\u0e15\u0e32\u0e21"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(93,"tui-radio-labeled",34),e.\u0275\u0275text(94," \u0e04\u0e23\u0e31\u0e49\u0e07\u0e17\u0e35\u0e48 1 "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(95,"tui-radio-labeled",35),e.\u0275\u0275text(96," \u0e04\u0e23\u0e31\u0e49\u0e07\u0e17\u0e35\u0e48 2 "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(97,"div",4)(98,"tui-input-date",36),e.\u0275\u0275text(99," \u0e27\u0e31\u0e19/\u0e40\u0e14\u0e37\u0e2d\u0e19/\u0e1b\u0e35 "),e.\u0275\u0275element(100,"span",6),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(101,"tui-field-error",37),e.\u0275\u0275pipe(102,"async"),e.\u0275\u0275pipe(103,"tuiFieldError"),e.\u0275\u0275elementEnd()()()()()),2&n&&(e.\u0275\u0275property("formGroup",o.formGroup),e.\u0275\u0275advance(8),e.\u0275\u0275property("error",e.\u0275\u0275pipeBind1(9,13,e.\u0275\u0275pipeBind1(10,15,e.\u0275\u0275pureFunction0(61,l)))),e.\u0275\u0275advance(7),e.\u0275\u0275property("error",e.\u0275\u0275pipeBind1(16,17,e.\u0275\u0275pipeBind1(17,19,e.\u0275\u0275pureFunction0(62,l)))),e.\u0275\u0275advance(9),e.\u0275\u0275property("error",e.\u0275\u0275pipeBind1(25,21,e.\u0275\u0275pipeBind1(26,23,e.\u0275\u0275pureFunction0(63,l)))),e.\u0275\u0275advance(7),e.\u0275\u0275property("error",e.\u0275\u0275pipeBind1(32,25,e.\u0275\u0275pipeBind1(33,27,e.\u0275\u0275pureFunction0(64,l)))),e.\u0275\u0275advance(7),e.\u0275\u0275property("error",e.\u0275\u0275pipeBind1(39,29,e.\u0275\u0275pipeBind1(40,31,e.\u0275\u0275pureFunction0(65,l)))),e.\u0275\u0275advance(9),e.\u0275\u0275property("error",e.\u0275\u0275pipeBind1(48,33,e.\u0275\u0275pipeBind1(49,35,e.\u0275\u0275pureFunction0(66,l)))),e.\u0275\u0275advance(7),e.\u0275\u0275property("error",e.\u0275\u0275pipeBind1(55,37,e.\u0275\u0275pipeBind1(56,39,e.\u0275\u0275pureFunction0(67,l)))),e.\u0275\u0275advance(7),e.\u0275\u0275property("error",e.\u0275\u0275pipeBind1(62,41,e.\u0275\u0275pipeBind1(63,43,e.\u0275\u0275pureFunction0(68,l)))),e.\u0275\u0275advance(9),e.\u0275\u0275property("error",e.\u0275\u0275pipeBind1(71,45,e.\u0275\u0275pipeBind1(72,47,e.\u0275\u0275pureFunction0(69,l)))),e.\u0275\u0275advance(7),e.\u0275\u0275property("error",e.\u0275\u0275pipeBind1(78,49,e.\u0275\u0275pipeBind1(79,51,e.\u0275\u0275pureFunction0(70,l)))),e.\u0275\u0275advance(7),e.\u0275\u0275property("error",e.\u0275\u0275pipeBind1(85,53,e.\u0275\u0275pipeBind1(86,55,e.\u0275\u0275pureFunction0(71,l)))),e.\u0275\u0275advance(17),e.\u0275\u0275property("error",e.\u0275\u0275pipeBind1(102,57,e.\u0275\u0275pipeBind1(103,59,e.\u0275\u0275pureFunction0(72,l)))))},directives:[u.\u0275NgNoValidate,u.NgControlStatusGroup,u.FormGroupDirective,y.K3,y.wU,u.NgControlStatus,u.FormControlName,D.y,M.gZ,$,s.iW,s.D9,O.Y,S.jL,S.k_],pipes:[E.Ov,_.Ag],styles:[""]}),t})(),G=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["school-evaluation-form-form1"]],decls:2,vars:0,template:function(n,o){1&n&&(e.\u0275\u0275elementStart(0,"p"),e.\u0275\u0275text(1,"form1 works!"),e.\u0275\u0275elementEnd())},styles:[""]}),t})();var p=i(9568),I=i(1469),L=i(6772),N=i(767),T=i(6175),V=i(4203);function R(t,r){if(1&t&&e.\u0275\u0275element(0,"tui-data-list-wrapper",19),2&t){const n=e.\u0275\u0275nextContext(5);e.\u0275\u0275property("items",n.operationType)}}const H=function(){return{updateOn:"blur"}};function U(t,r){if(1&t){const n=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"td",16)(1,"tui-select",17),e.\u0275\u0275listener("ngModelChange",function(a){e.\u0275\u0275restoreView(n);const c=e.\u0275\u0275nextContext().$implicit;return e.\u0275\u0275nextContext(3).onValueChange(a,c)}),e.\u0275\u0275template(2,R,1,1,"tui-data-list-wrapper",18),e.\u0275\u0275elementEnd()()}if(2&t){const n=e.\u0275\u0275nextContext().$implicit;e.\u0275\u0275advance(1),e.\u0275\u0275property("ngModel",n.selectedOperation)("ngModelOptions",e.\u0275\u0275pureFunction0(2,H))}}function j(t,r){1&t&&(e.\u0275\u0275elementStart(0,"tr",14),e.\u0275\u0275template(1,U,3,3,"td",15),e.\u0275\u0275elementEnd()),2&t&&(e.\u0275\u0275advance(1),e.\u0275\u0275property("tuiCell","operation"))}function P(t,r){if(1&t&&(e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275elementStart(1,"tbody",12),e.\u0275\u0275template(2,j,2,1,"tr",13),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementContainerEnd()),2&t){const n=r.$implicit;e.\u0275\u0275advance(1),e.\u0275\u0275property("heading",n.tbodyHeading)("data",n.header),e.\u0275\u0275advance(1),e.\u0275\u0275property("tuiRowOf",n.header)}}function Y(t,r){if(1&t&&e.\u0275\u0275element(0,"tui-data-list-wrapper",20),2&t){const n=e.\u0275\u0275nextContext().$implicit;e.\u0275\u0275property("items",n.evidence)}}function k(t,r){if(1&t){const n=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"div",1)(1,"div",2)(2,"h3"),e.\u0275\u0275text(3),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(4,"div",2)(5,"table",3)(6,"thead",4)(7,"tr",5)(8,"th",6),e.\u0275\u0275text(9,"\u0e1b\u0e23\u0e30\u0e40\u0e14\u0e47\u0e19\u0e01\u0e32\u0e23\u0e19\u0e34\u0e40\u0e17\u0e28 \u0e15\u0e34\u0e14\u0e15\u0e32\u0e21"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(10,"th",7),e.\u0275\u0275text(11,"\u0e2a\u0e20\u0e32\u0e1e\u0e01\u0e32\u0e23\u0e14\u0e33\u0e40\u0e19\u0e34\u0e19\u0e07\u0e32\u0e19"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275template(12,P,3,3,"ng-container",8),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(13,"div",2)(14,"h3"),e.\u0275\u0275text(15,"\u0e2b\u0e25\u0e31\u0e01\u0e10\u0e32\u0e19/\u0e23\u0e48\u0e2d\u0e07\u0e23\u0e2d\u0e22"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(16,"div",2)(17,"tui-multi-select",9),e.\u0275\u0275listener("ngModelChange",function(a){return e.\u0275\u0275restoreView(n).$implicit.selectedEvidence=a}),e.\u0275\u0275text(18," \u0e40\u0e25\u0e37\u0e2d\u0e01\u0e2b\u0e25\u0e31\u0e01\u0e10\u0e32\u0e19/\u0e23\u0e48\u0e2d\u0e07\u0e23\u0e2d\u0e22 "),e.\u0275\u0275template(19,Y,1,1,"tui-data-list-wrapper",10),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(20,"div",2)(21,"h3"),e.\u0275\u0275text(22,"\u0e02\u0e49\u0e2d\u0e2a\u0e31\u0e07\u0e40\u0e01\u0e15/\u0e02\u0e49\u0e2d\u0e40\u0e2a\u0e19\u0e2d\u0e41\u0e19\u0e30"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(23,"div",2)(24,"tui-text-area",11),e.\u0275\u0275text(25,"\u0e23\u0e30\u0e1a\u0e38\u0e02\u0e49\u0e2d\u0e2a\u0e31\u0e07\u0e40\u0e01\u0e15/\u0e02\u0e49\u0e2d\u0e40\u0e2a\u0e19\u0e2d\u0e41\u0e19\u0e30 "),e.\u0275\u0275elementEnd()()()}if(2&t){const n=r.$implicit,o=e.\u0275\u0275nextContext();e.\u0275\u0275advance(3),e.\u0275\u0275textInterpolate(n.tableHeader),e.\u0275\u0275advance(2),e.\u0275\u0275property("columns",o.headers),e.\u0275\u0275advance(7),e.\u0275\u0275property("ngForOf",n.tableBody),e.\u0275\u0275advance(5),e.\u0275\u0275property("ngModel",n.selectedEvidence)("editable",!1)("tuiTextfieldLabelOutside",!0)("tuiTextfieldCleaner",!0),e.\u0275\u0275advance(7),e.\u0275\u0275property("expandable",!0)("tuiTextfieldMaxLength",500)("tuiTextfieldLabelOutside",!0)}}let z=(()=>{class t{constructor(){this.operationType=["\u0e14\u0e33\u0e40\u0e19\u0e34\u0e19\u0e01\u0e32\u0e23\u0e41\u0e25\u0e49\u0e27","\u0e2d\u0e22\u0e39\u0e48\u0e23\u0e30\u0e2b\u0e27\u0e48\u0e32\u0e07\u0e14\u0e33\u0e40\u0e19\u0e34\u0e19\u0e01\u0e32\u0e23","\u0e44\u0e21\u0e48\u0e14\u0e33\u0e40\u0e19\u0e34\u0e19\u0e01\u0e32\u0e23"],this.dataTable=[{tableHeader:"1.\u0e14\u0e49\u0e32\u0e19\u0e01\u0e32\u0e23\u0e1a\u0e23\u0e34\u0e2b\u0e32\u0e23\u0e08\u0e31\u0e14\u0e01\u0e32\u0e23\u0e2a\u0e16\u0e32\u0e19\u0e28\u0e36\u0e01\u0e29\u0e32",tableBody:[{tbodyHeading:"1. \u0e14\u0e49\u0e32\u0e19\u0e19\u0e42\u0e22\u0e1a\u0e32\u0e22",header:[{topic:"1.1 \u0e21\u0e35\u0e19\u0e42\u0e22\u0e1a\u0e32\u0e22\u0e19\u0e49\u0e2d\u0e21\u0e19\u0e4d\u0e32\u0e2b\u0e25\u0e31\u0e01\u0e1b\u0e23\u0e31\u0e0a\u0e0d\u0e32\u0e02\u0e2d\u0e07\u0e40\u0e28\u0e23\u0e29\u0e10\u0e01\u0e34\u0e08\u0e1e\u0e2d\u0e40\u0e1e\u0e35\u0e22\u0e07\u0e21\u0e32\u0e02\u0e31\u0e1a\u0e40\u0e04\u0e25\u0e37\u0e48\u0e2d\u0e19\u0e43\u0e19\u0e2a\u0e16\u0e32\u0e19\u0e28\u0e36\u0e01\u0e29\u0e32 \u0e41\u0e25\u0e30\u0e1a\u0e39\u0e23\u0e13\u0e32\u0e01\u0e32\u0e23\u0e43\u0e19\u0e41\u0e1c\u0e19\u0e1b\u0e0f\u0e34\u0e1a\u0e31\u0e15\u0e34\u0e07\u0e32\u0e19\u0e1b\u0e23\u0e30\u0e08\u0e4d\u0e32\u0e1b\u0e35",selectedOperation:""},{topic:"1.2 \u0e14\u0e4d\u0e32\u0e40\u0e19\u0e34\u0e19\u0e01\u0e32\u0e23\u0e15\u0e32\u0e21\u0e19\u0e42\u0e22\u0e1a\u0e32\u0e22 \u0e41\u0e25\u0e30\u0e41\u0e1c\u0e19\u0e1b\u0e0f\u0e34\u0e1a\u0e31\u0e15\u0e34\u0e07\u0e32\u0e19\u0e1b\u0e23\u0e30\u0e08\u0e4d\u0e32\u0e1b\u0e35\u0e17\u0e35\u0e48\u0e19\u0e49\u0e2d\u0e21\u0e19\u0e4d\u0e32\u0e2b\u0e25\u0e31\u0e01\u0e1b\u0e23\u0e31\u0e0a\u0e0d\u0e32\u0e02\u0e2d\u0e07\u0e40\u0e28\u0e23\u0e29\u0e10\u0e01\u0e34\u0e08\u0e1e\u0e2d\u0e40\u0e1e\u0e35\u0e22\u0e07\u0e21\u0e32\u0e02\u0e31\u0e1a\u0e40\u0e04\u0e25\u0e37\u0e48\u0e2d\u0e19\u0e43\u0e19\u0e2a\u0e16\u0e32\u0e19\u0e28\u0e36\u0e01\u0e29\u0e32",selectedOperation:""},{topic:"1.3 \u0e21\u0e35\u0e41\u0e1c\u0e19\u0e01\u0e32\u0e23\u0e19\u0e34\u0e40\u0e17\u0e28\u0e20\u0e32\u0e22\u0e43\u0e19\u0e01\u0e32\u0e23\u0e19\u0e33\u0e2b\u0e25\u0e31\u0e01\u0e1b\u0e23\u0e31\u0e0a\u0e0d\u0e32\u0e02\u0e2d\u0e07\u0e40\u0e28\u0e23\u0e29\u0e10\u0e01\u0e34\u0e08\u0e1e\u0e2d\u0e40\u0e1e\u0e35\u0e22\u0e07\u0e2a\u0e39\u0e48\u0e2a\u0e16\u0e32\u0e19\u0e28\u0e36\u0e01\u0e29\u0e32",selectedOperation:""}]},{tbodyHeading:"2.\u0e14\u0e49\u0e32\u0e19\u0e27\u0e34\u0e0a\u0e32\u0e01\u0e32\u0e23",header:[{topic:"2.1 \u0e21\u0e35\u0e41\u0e1c\u0e19\u0e07\u0e32\u0e19/\u0e42\u0e04\u0e23\u0e07\u0e01\u0e32\u0e23/\u0e01\u0e34\u0e08\u0e01\u0e23\u0e23\u0e21 \u0e14\u0e49\u0e32\u0e19\u0e27\u0e34\u0e0a\u0e32\u0e01\u0e32\u0e23 \u0e17\u0e35\u0e48\u0e2a\u0e48\u0e07\u0e40\u0e2a\u0e23\u0e34\u0e21\u0e01\u0e32\u0e23\u0e1a\u0e39\u0e23\u0e13\u0e32\u0e01\u0e32\u0e23\u0e2b\u0e25\u0e31\u0e01\u0e1b\u0e23\u0e31\u0e0a\u0e0d\u0e32\u0e02\u0e2d\u0e07\u0e40\u0e28\u0e23\u0e29\u0e10\u0e01\u0e34\u0e08\u0e1e\u0e2d\u0e40\u0e1e\u0e35\u0e22\u0e07\u0e2a\u0e39\u0e48\u0e01\u0e32\u0e23\u0e40\u0e23\u0e35\u0e22\u0e19\u0e23\u0e39\u0e49",selectedOperation:""},{topic:"2.2 \u0e14\u0e4d\u0e32\u0e40\u0e19\u0e34\u0e19\u0e01\u0e32\u0e23\u0e15\u0e32\u0e21 \u0e41\u0e1c\u0e19\u0e07\u0e32\u0e19/\u0e42\u0e04\u0e23\u0e07\u0e01\u0e32\u0e23/\u0e01\u0e34\u0e08\u0e01\u0e23\u0e23\u0e21 \u0e14\u0e49\u0e32\u0e19\u0e27\u0e34\u0e0a\u0e32\u0e01\u0e32\u0e23\u0e17\u0e35\u0e48\u0e2a\u0e48\u0e07\u0e40\u0e2a\u0e23\u0e34\u0e21\u0e01\u0e32\u0e23\u0e1a\u0e39\u0e23\u0e13\u0e32\u0e01\u0e32\u0e23\u0e2b\u0e25\u0e31\u0e01\u0e1b\u0e23\u0e31\u0e0a\u0e0d\u0e32\u0e02\u0e2d\u0e07\u0e40\u0e28\u0e23\u0e29\u0e10\u0e01\u0e34\u0e08\u0e1e\u0e2d\u0e40\u0e1e\u0e35\u0e22\u0e07\u0e2a\u0e39\u0e48\u0e01\u0e32\u0e23\u0e40\u0e23\u0e35\u0e22\u0e19\u0e23\u0e39\u0e49",selectedOperation:""}]},{tbodyHeading:"3.\u0e14\u0e49\u0e32\u0e19\u0e07\u0e1a\u0e1b\u0e23\u0e30\u0e21\u0e32\u0e13",header:[{topic:"3.1 \u0e21\u0e35\u0e01\u0e32\u0e23\u0e27\u0e32\u0e07\u0e41\u0e1c\u0e19\u0e01\u0e32\u0e23\u0e1a\u0e23\u0e34\u0e2b\u0e32\u0e23\u0e08\u0e31\u0e14\u0e01\u0e32\u0e23\u0e07\u0e1a\u0e1b\u0e23\u0e30\u0e21\u0e32\u0e13 \u0e02\u0e2d\u0e07\u0e2a\u0e16\u0e32\u0e19\u0e28\u0e36\u0e01\u0e29\u0e32\u0e17\u0e35\u0e48\u0e2a\u0e2d\u0e14\u0e04\u0e25\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e1a\u0e2b\u0e25\u0e31\u0e01\u0e1b\u0e23\u0e31\u0e0a\u0e0d\u0e32\u0e02\u0e2d\u0e07\u0e40\u0e28\u0e23\u0e29\u0e10\u0e01\u0e34\u0e08\u0e1e\u0e2d\u0e40\u0e1e\u0e35\u0e22\u0e07",selectedOperation:""},{topic:"3.2 \u0e14\u0e4d\u0e32\u0e40\u0e19\u0e34\u0e19\u0e01\u0e32\u0e23\u0e15\u0e32\u0e21\u0e41\u0e1c\u0e19\u0e07\u0e1a\u0e1b\u0e23\u0e30\u0e21\u0e32\u0e13\u0e02\u0e2d\u0e07\u0e2a\u0e16\u0e32\u0e19\u0e28\u0e36\u0e01\u0e29\u0e32\u0e15\u0e32\u0e21\u0e2b\u0e25\u0e31\u0e01\u0e1b\u0e23\u0e31\u0e0a\u0e0d\u0e32\u0e02\u0e2d\u0e07\u0e40\u0e28\u0e23\u0e29\u0e10\u0e01\u0e34\u0e08\u0e1e\u0e2d\u0e40\u0e1e\u0e35\u0e22\u0e07",selectedOperation:""}]},{tbodyHeading:"4.\u0e1a\u0e23\u0e34\u0e2b\u0e32\u0e23\u0e07\u0e32\u0e19\u0e17\u0e31\u0e48\u0e27\u0e44\u0e1b",header:[{topic:"4.1 \u0e1a\u0e23\u0e34\u0e2b\u0e32\u0e23\u0e2d\u0e32\u0e04\u0e32\u0e23\u0e2a\u0e16\u0e32\u0e19\u0e17\u0e35\u0e48\u0e41\u0e25\u0e30\u0e08\u0e31\u0e14\u0e01\u0e32\u0e23\u0e41\u0e2b\u0e25\u0e48\u0e07\u0e01\u0e32\u0e23\u0e40\u0e23\u0e35\u0e22\u0e19\u0e23\u0e39\u0e49\u0e43\u0e19\u0e2a\u0e16\u0e32\u0e19\u0e28\u0e36\u0e01\u0e29\u0e32\u0e15\u0e32\u0e21\u0e2b\u0e25\u0e31\u0e01\u0e1b\u0e23\u0e31\u0e0a\u0e0d\u0e32\u0e02\u0e2d\u0e07\u0e40\u0e28\u0e23\u0e29\u0e10\u0e01\u0e34\u0e08\u0e1e\u0e2d\u0e40\u0e1e\u0e35\u0e22\u0e07",selectedOperation:""},{topic:"4.2 \u0e1b\u0e23\u0e30\u0e2a\u0e32\u0e19\u0e2a\u0e31\u0e21\u0e1e\u0e31\u0e19\u0e18\u0e4c\u0e01\u0e31\u0e1a\u0e0a\u0e38\u0e21\u0e0a\u0e19\u0e43\u0e2b\u0e49\u0e21\u0e35\u0e2a\u0e48\u0e27\u0e19\u0e23\u0e48\u0e27\u0e21\u0e43\u0e19\u0e01\u0e32\u0e23\u0e08\u0e31\u0e14\u0e01\u0e34\u0e08\u0e01\u0e23\u0e23\u0e21\u0e01\u0e32\u0e23\u0e40\u0e23\u0e35\u0e22\u0e19\u0e23\u0e39\u0e49\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e40\u0e2a\u0e23\u0e34\u0e21\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e04\u0e38\u0e13\u0e25\u0e31\u0e01\u0e29\u0e13\u0e30\u0e2d\u0e22\u0e39\u0e48\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e1e\u0e2d\u0e40\u0e1e\u0e35\u0e22\u0e07\u0e02\u0e2d\u0e07\u0e1c\u0e39\u0e49\u0e40\u0e23\u0e35\u0e22\u0e19",selectedOperation:""}]}],evidence:["\u0e2b\u0e25\u0e31\u0e01\u0e2a\u0e39\u0e15\u0e23\u0e2a\u0e16\u0e32\u0e19\u0e28\u0e36\u0e01\u0e29\u0e32 / \u0e2b\u0e25\u0e31\u0e01\u0e2a\u0e39\u0e15\u0e23\u0e2a\u0e32\u0e23\u0e30\u0e01\u0e32\u0e23\u0e40\u0e23\u0e35\u0e22\u0e19\u0e23\u0e39\u0e49\u0e17\u0e49\u0e2d\u0e07\u0e16\u0e34\u0e48\u0e19","\u0e41\u0e1c\u0e19\u0e1b\u0e0f\u0e34\u0e1a\u0e31\u0e15\u0e34\u0e01\u0e32\u0e23\u0e1b\u0e23\u0e30\u0e08\u0e4d\u0e32\u0e1b\u0e35","\u0e04\u0e4d\u0e32\u0e2a\u0e31\u0e48\u0e07 / \u0e1b\u0e23\u0e30\u0e01\u0e32\u0e28","\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01\u0e01\u0e32\u0e23\u0e1b\u0e23\u0e30\u0e0a\u0e38\u0e21 / \u0e40\u0e2d\u0e01\u0e2a\u0e32\u0e23\u0e01\u0e32\u0e23\u0e1b\u0e23\u0e30\u0e0a\u0e38\u0e21","\u0e41\u0e1c\u0e19\u0e01\u0e32\u0e23\u0e19\u0e34\u0e40\u0e17\u0e28\u0e20\u0e32\u0e22\u0e43\u0e19 / \u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01\u0e1c\u0e25\u0e01\u0e32\u0e23\u0e19\u0e34\u0e40\u0e17\u0e28","\u0e40\u0e2d\u0e01\u0e2a\u0e32\u0e23\u0e01\u0e32\u0e23\u0e23\u0e30\u0e14\u0e21\u0e17\u0e38\u0e19 / \u0e17\u0e23\u0e31\u0e1e\u0e22\u0e32\u0e01\u0e23","\u0e41\u0e2b\u0e25\u0e48\u0e07\u0e40\u0e23\u0e35\u0e22\u0e19\u0e23\u0e39\u0e49 / \u0e2b\u0e25\u0e31\u0e01\u0e10\u0e32\u0e19\u0e40\u0e0a\u0e34\u0e07\u0e1b\u0e23\u0e30\u0e08\u0e31\u0e01\u0e29\u0e4c","\u0e2a\u0e37\u0e48\u0e2d \u0e19\u0e27\u0e31\u0e15\u0e01\u0e23\u0e23\u0e21\u0e01\u0e32\u0e23\u0e40\u0e23\u0e35\u0e22\u0e19\u0e23\u0e39\u0e49 / \u0e17\u0e30\u0e40\u0e1a\u0e35\u0e22\u0e19\u0e2a\u0e37\u0e48\u0e2d\u0e19\u0e27\u0e31\u0e15\u0e01\u0e23\u0e23\u0e21","\u0e40\u0e2d\u0e01\u0e2a\u0e32\u0e23\u0e40\u0e1c\u0e22\u0e41\u0e1e\u0e23\u0e48\u0e41\u0e25\u0e30\u0e1b\u0e23\u0e30\u0e0a\u0e32\u0e2a\u0e31\u0e21\u0e1e\u0e31\u0e19\u0e18\u0e4c","\u0e2a\u0e31\u0e07\u0e40\u0e01\u0e15\u0e2a\u0e20\u0e32\u0e1e\u0e20\u0e39\u0e21\u0e34\u0e17\u0e31\u0e28\u0e19\u0e4c \u0e2f\u0e25\u0e2f","\u0e2d\u0e37\u0e48\u0e19\u0e46 \u0e23\u0e30\u0e1a\u0e38"]}],this.headers=["topic","operation"]}onValueChange(n,o){o.selectedOperation=n}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["school-evaluation-form-form2"]],decls:1,vars:1,consts:[["class","tui-row tui-row_adaptive",4,"ngFor","ngForOf"],[1,"tui-row","tui-row_adaptive"],[1,"tui-col_lg-12"],["tuiTable","","size","l",3,"columns"],["tuiThead",""],["tuiThGroup",""],["tuiTh","",2,"width","60%"],["tuiTh","",2,"width","40%"],[4,"ngFor","ngForOf"],[3,"ngModel","editable","tuiTextfieldLabelOutside","tuiTextfieldCleaner","ngModelChange"],["tuiMultiSelectGroup","",3,"items",4,"tuiDataList"],["maxlength","500",3,"expandable","tuiTextfieldMaxLength","tuiTextfieldLabelOutside"],["tuiTbody","",3,"heading","data"],["tuiTr","",4,"tuiRow","tuiRowOf"],["tuiTr",""],["tuiTd","",4,"tuiCell"],["tuiTd",""],[1,"select",3,"ngModel","ngModelOptions","ngModelChange"],[3,"items",4,"tuiDataList"],[3,"items"],["tuiMultiSelectGroup","",3,"items"]],template:function(n,o){1&n&&e.\u0275\u0275template(0,k,26,10,"div",0),2&n&&e.\u0275\u0275property("ngForOf",o.dataTable)},directives:[E.sg,p.c4,p.Nx,p.EE,p.Ws,p.jY,p.LU,p.fu,p.Bl,p.Kt,I.uJ,I.OI,u.NgControlStatus,u.NgModel,V.gX,L.eC,N.VT,s.xT,s.be,N.Qp,T.Jl,T.eQ,s.fy],styles:["[_nghost-%COMP%]     button.expand>span.name{left:15rem!important}"]}),t})();var J=i(9367);function Q(t,r){if(1&t&&(e.\u0275\u0275elementStart(0,"button",11),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&t){const n=r.$implicit,o=r.index,a=e.\u0275\u0275nextContext();e.\u0275\u0275property("disabled",a.formStepIndex!==o),e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1(" ",n," ")}}function K(t,r){1&t&&e.\u0275\u0275element(0,"school-evaluation-form-user-form")}function W(t,r){1&t&&e.\u0275\u0275element(0,"school-evaluation-form-form1")}function X(t,r){1&t&&e.\u0275\u0275element(0,"school-evaluation-form-form2")}function Z(t,r){if(1&t){const n=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275elementStart(1,"button",12),e.\u0275\u0275listener("click",function(){return e.\u0275\u0275restoreView(n),e.\u0275\u0275nextContext().nextForm()}),e.\u0275\u0275text(2," \u0e16\u0e31\u0e14\u0e44\u0e1b "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementContainerEnd()}if(2&t){const n=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("disabled",n.formStepIndex===n.listFormStep.length-1)}}function q(t,r){if(1&t){const n=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"button",13),e.\u0275\u0275listener("click",function(){return e.\u0275\u0275restoreView(n),e.\u0275\u0275nextContext().nextForm()}),e.\u0275\u0275text(1," \u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01 "),e.\u0275\u0275elementEnd()}}const ee=[{path:"",component:(()=>{class t{constructor(n){var o;this.formService=n,this.formStepIndex=0,this.listFormStep=["\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e1c\u0e39\u0e49\u0e17\u0e33\u0e41\u0e1a\u0e1a\u0e1b\u0e23\u0e30\u0e40\u0e21\u0e34\u0e19","Second step","Third step","Fourth step"],this.destroy$=new d.x,this.formId=null!==(o=localStorage.getItem("formId"))&&void 0!==o?o:"",(0,B.T)(this.formService.decreaseFormStepIndex$.pipe((0,h.h)(-1)),this.formService.increaseFormStepIndex$.pipe((0,h.h)(1))).pipe((0,x.b)({next:a=>{this.formStepIndex+a!==this.listFormStep.length&&this.formStepIndex+a>0&&(this.formStepIndex+=a)}}),(0,C.R)(this.destroy$)).subscribe()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}prevForm(){this.formService.decreaseFormStepIndex$.next(null)}nextForm(){this.formService.canNext$.next(null)}}return t.\u0275fac=function(n){return new(n||t)(e.\u0275\u0275directiveInject(f))},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["school-evaluation-form-form"]],decls:15,vars:8,consts:[[1,"tui-container"],[1,"stepper"],[3,"activeItemIndex"],["tuiStep","",3,"disabled",4,"ngFor","ngForOf"],[4,"ngIf"],[1,"tui-row","tui-row_adaptive","tui-space_top-10"],[1,"tui-col_lg-6"],["tuiButton","","type","button","appearance","primary","icon","tuiIconChevronLeftLarge",3,"disabled","click"],[1,"tui-col_lg-6","align-end"],[4,"ngIf","ngIfElse"],["elseTemplate",""],["tuiStep","",3,"disabled"],["tuiButton","","type","button","appearance","primary","iconRight","tuiIconChevronRightLarge",3,"disabled","click"],["tuiButton","","type","button","appearance","success","iconRight","tuiIconCheckLarge",3,"click"]],template:function(n,o){if(1&n&&(e.\u0275\u0275elementStart(0,"div",0)(1,"div",1)(2,"tui-stepper",2),e.\u0275\u0275template(3,Q,2,2,"button",3),e.\u0275\u0275elementEnd()(),e.\u0275\u0275template(4,K,1,0,"school-evaluation-form-user-form",4),e.\u0275\u0275template(5,W,1,0,"school-evaluation-form-form1",4),e.\u0275\u0275template(6,X,1,0,"school-evaluation-form-form2",4),e.\u0275\u0275elementStart(7,"div",5)(8,"div",6)(9,"button",7),e.\u0275\u0275listener("click",function(){return o.prevForm()}),e.\u0275\u0275text(10," \u0e22\u0e49\u0e2d\u0e19\u0e01\u0e25\u0e31\u0e1a "),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(11,"div",8),e.\u0275\u0275template(12,Z,3,1,"ng-container",9),e.\u0275\u0275template(13,q,2,0,"ng-template",null,10,e.\u0275\u0275templateRefExtractor),e.\u0275\u0275elementEnd()()()),2&n){const a=e.\u0275\u0275reference(14);e.\u0275\u0275advance(2),e.\u0275\u0275property("activeItemIndex",o.formStepIndex),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngForOf",o.listFormStep),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",0===o.formStepIndex),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",1===o.formStepIndex&&"1"===o.formId),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",1===o.formStepIndex&&"2"===o.formId),e.\u0275\u0275advance(3),e.\u0275\u0275property("disabled",0===o.formStepIndex),e.\u0275\u0275advance(3),e.\u0275\u0275property("ngIf",o.formStepIndex!==o.listFormStep.length-1)("ngIfElse",a)}},directives:[F.He,E.sg,F.Q1,E.O5,A,G,z,J.v0],styles:[".stepper[_ngcontent-%COMP%]{margin-bottom:2rem}.tui-container[_ngcontent-%COMP%]{background-color:#fff;padding:2rem}"],changeDetection:0}),t})()}];let te=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=e.\u0275\u0275defineInjector({imports:[[g.Bz.forChild(ee)],g.Bz]}),t})(),ne=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=e.\u0275\u0275defineInjector({providers:[f],imports:[[E.ez,_.Yu,w.m,te]]}),t})()}}]);