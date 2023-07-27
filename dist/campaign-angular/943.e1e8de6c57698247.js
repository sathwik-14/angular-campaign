"use strict";(self.webpackChunkcampaign_angular=self.webpackChunkcampaign_angular||[]).push([[943],{943:(_,p,i)=>{i.r(p),i.d(p,{CampaignInfoComponent:()=>l});var r=i(814),e=i(946),d=i(15),u=i(538);function c(t,o){1&t&&(e.TgZ(0,"span"),e._uU(1,"NA"),e.qZA())}function f(t,o){1&t&&e._UZ(0,"i",14)}function g(t,o){1&t&&(e.O4$(),e.TgZ(0,"svg",15),e._UZ(1,"g",16)(2,"g",17),e.TgZ(3,"g",18)(4,"circle",19),e._UZ(5,"animateTransform",20),e.qZA()()())}let l=(()=>{class t{constructor(a,n,s){this.sharedDataService=a,this.route=n,this.router=s,this.deleted=!1}ngOnInit(){this.itemId=this.route.snapshot.paramMap.get("id"),this.sharedDataService.getData().subscribe(a=>{this.campaigns=a}),this.foundObject=this.campaigns.find(a=>a.id===this.itemId)}deleteData(){this.deleted=!0,setTimeout(()=>{this.sharedDataService.deleteData(this.itemId),this.router.navigate(["/campaign"])},1e3)}goBack(){this.router.navigate(["/campaign"])}}return t.\u0275fac=function(a){return new(a||t)(e.Y36(d.g),e.Y36(u.gz),e.Y36(u.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-campaign-info"]],standalone:!0,features:[e.jDz],decls:53,vars:15,consts:[[1,"container"],[1,"hero-container","container","pt-3"],[1,"text-center","h4"],[1,"p-1","p-lg-5"],[1,"fs-7","d-flex","justify-content-between"],[1,"h6"],[4,"ngIf"],[1,"text-center","mb-3"],[1,"btn","btn-outline-danger",3,"click"],["class","bi bi-trash",4,"ngIf"],["version","1.1","xmlns","http://www.w3.org/2000/svg",0,"xmlns","xlink","http://www.w3.org/1999/xlink","viewBox","0 0 100 100",0,"xml","space","preserve","style","enable-background:new 0 0 100 100;","fill","#000000","width","20px","height","20px",4,"ngIf"],[1,"text-center"],[1,"btn","btn-transparent",3,"click"],[1,"bi","bi-chevron-left"],[1,"bi","bi-trash"],["version","1.1","xmlns","http://www.w3.org/2000/svg",0,"xmlns","xlink","http://www.w3.org/1999/xlink","viewBox","0 0 100 100",0,"xml","space","preserve","fill","#000000","width","20px","height","20px",2,"enable-background","new 0 0 100 100"],["id","SVGRepo_bgCarrier","stroke-width","0"],["id","SVGRepo_tracerCarrier","stroke-linecap","round","stroke-linejoin","round"],["id","SVGRepo_gCarrier"],["cx","50","cy","50","r","40","stroke","#ffffff","fill","none","stroke-width","8","stroke-dasharray","226.1946710584651 78.73155701948866","transform","rotate(0.63606 50 50)"],["attributeName","transform","type","rotate","repeatCount","indefinite","dur","1.923076923076923s","keyTimes","0;1","values","0 50 50;360 50 50"]],template:function(a,n){1&a&&(e.TgZ(0,"div",0)(1,"div",1)(2,"p",2),e._uU(3,"Campaign Details"),e.qZA(),e.TgZ(4,"div",3)(5,"p",4)(6,"span",5),e._uU(7,"Id:\xa0"),e.qZA(),e._uU(8),e.qZA(),e.TgZ(9,"p",4)(10,"span",5),e._uU(11,"Name:\xa0"),e.qZA(),e._uU(12),e.qZA(),e.TgZ(13,"p",4)(14,"span",5),e._uU(15,"Objective:\xa0"),e.qZA(),e._uU(16),e.qZA(),e.TgZ(17,"p",4)(18,"span",5),e._uU(19,"Category Type:\xa0"),e.qZA(),e._uU(20),e.qZA(),e.TgZ(21,"p",4)(22,"span",5),e._uU(23,"Offer Type:\xa0"),e.qZA(),e._uU(24),e.qZA(),e.TgZ(25,"p",4)(26,"span",5),e._uU(27,"Locations:\xa0"),e.qZA(),e.YNc(28,c,2,0,"span",6),e.ynx(29),e._uU(30),e.BQk(),e.qZA(),e.TgZ(31,"p",4)(32,"span",5),e._uU(33,"Status:\xa0"),e.qZA(),e._uU(34),e.qZA(),e.TgZ(35,"p",4)(36,"span",5),e._uU(37,"CTR:\xa0"),e.qZA(),e._uU(38),e.qZA(),e.TgZ(39,"p",4)(40,"span",5),e._uU(41,"Start Date:\xa0"),e.qZA(),e._uU(42),e.ALo(43,"date"),e.qZA()(),e.TgZ(44,"div",7)(45,"div",8),e.NdJ("click",function(){return n.deleteData()}),e._uU(46,"Delete Campaign \xa0"),e.YNc(47,f,1,0,"i",9),e.YNc(48,g,6,0,"svg",10),e.qZA()(),e.TgZ(49,"div",11)(50,"div",12),e.NdJ("click",function(){return n.goBack()}),e._UZ(51,"i",13),e._uU(52," \xa0Back "),e.qZA()()()()),2&a&&(e.xp6(8),e.hij(" ",n.foundObject.id?n.foundObject.id:"NA"," "),e.xp6(4),e.hij(" ",n.foundObject.name?n.foundObject.name:"NA"," "),e.xp6(4),e.hij(" ",n.foundObject.objective?n.foundObject.objective:"NA"," "),e.xp6(4),e.hij(" ",n.foundObject.category?n.foundObject.category:"NA"," "),e.xp6(4),e.hij(" ",n.foundObject.offer?n.foundObject.offer:"NA"," "),e.xp6(4),e.Q6J("ngIf",!n.foundObject.location),e.xp6(2),e.hij(" ",n.foundObject.location," "),e.xp6(4),e.hij(" ",n.foundObject.status?n.foundObject.status:"NA"," "),e.xp6(4),e.hij(" ",n.foundObject.ctr?n.foundObject.ctr:"NA"," % "),e.xp6(4),e.hij(" ",n.foundObject["start date"]?e.xi3(43,12,n.foundObject["start date"],"yyyy-MM-dd"):"NA"," "),e.xp6(5),e.Q6J("ngIf",!n.deleted),e.xp6(1),e.Q6J("ngIf",n.deleted))},dependencies:[r.ez,r.O5,r.uU],styles:[".hero-container[_ngcontent-%COMP%]{width:100%;background-color:#fff;border-radius:1rem;box-shadow:#b7cdfd 0 5px 30px -10px}"]}),t})()}}]);