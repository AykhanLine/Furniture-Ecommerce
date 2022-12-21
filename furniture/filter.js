// // product filter icon start
var clickIcon2=document.querySelector("#section-shop .little-text i")
var openMenu=document.querySelector("#section-shop .filter")
var filtMenux=document.querySelector(".filter .filt-menux")
var filtClose=document.querySelector(".filter .filt-menu-head i")


filtClose.onclick=function(){
    openMenu.classList.remove("filt-active")
}
clickIcon2.onclick=function(){
    openMenu.classList.add("filt-active")    
}
filtMenux.onclick=function(){
    openMenu.classList.remove("filt-active")
}
// // product filter icon finish