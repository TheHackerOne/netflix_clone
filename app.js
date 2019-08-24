var tab_1=document.querySelector(".button_1");
var tab_2=document.querySelector(".button_2");
var tab_3=document.querySelector(".button_3");
var content_1=document.querySelector(".tab-content");
var content_2=document.querySelector(".tab_content_2");
var content_3=document.querySelector(".tab_content_3");


tab_1.addEventListener("click",function(){
    console.log("hello tab-1");
    content_1.style.display="inline";
    content_2.style.display="none";
    content_3.style.display="none";
    
})

tab_2.addEventListener("click",function(){
    console.log("helllo tab_2");
    content_2.style.display="inline";
    content_3.style.display="none";
    content_1.style.display="none";
    
})

tab_3.addEventListener("click",function(){
    console.log("helllo tab_3");
    content_3.style.display="inline";
    content_2.style.display="none";
    content_1.style.display="none";
    
})