var clickIcon=document.querySelector("#res-header .res-left i");
var active=document.querySelector(".res-big")
var resMenux=document.querySelector(".res-big .res-menux")
var resX=document.querySelector(".res-big .res-menu-head i")

//btn click open close start>>>>>>>>>>>>>>>>>>>>>>>>>>>
clickIcon.onclick=function(){
    active.classList.add("active");
}

resX.onclick=function () {
    active.classList.remove("active")
}

resMenux.onclick=function(){
    active.classList.remove("active");
}
//btn click open close finish>>>>>>>>>>>>>>>>>>>>>>>>>>>>



    
