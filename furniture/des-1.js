var clickDes1=document.querySelector("#section-two .click-des1")   
var clickActive2=document.querySelector("#section-two .des-text .des-text2")
var clickActive1=document.querySelector("#section-two .des-text .des-text1")
var clickDes2=document.querySelector("#section-two .click-des2")

clickDes1.onclick=function(){
    clickDes1.classList.add("des1-add")
    clickDes2.classList.remove("des2-add")
    
    clickActive1.classList.remove("active-des1")
    clickActive2.classList.remove("active-des2")
}
    
clickDes2.onclick=function(){
        clickDes2.classList.add("des2-add")
        clickDes1.classList.remove("des1-add")
    
        clickActive1.classList.add("active-des1")
        clickActive2.classList.add("active-des2")
}