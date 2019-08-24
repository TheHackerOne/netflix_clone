var tab_1=document.getElementsByClassName("button_1");
var tab_2=document.getElementsByClassName("button_2");
var tab_3=document.getElementsByClassName("button_3");
var content_1=document.getElementsByClassName("tab_content");
var content_2=document.getElementsByClassName("tab_content_2");
var content_3=document.getElementsByClassName("tab_content_3");


tab_1[0].addEventListener("click",function(){

    content_1[0].style.display="inline";
    content_2[0].style.display="none";
    content_3[0].style.display="none";
    
});

tab_2[0].addEventListener("click",function(){
    console.log("helllo tab_2");
    content_1[0].style.display="none";
    content_2[0].style.display="inline";
    content_3[0].style.display="none";
    
});

tab_3[0].addEventListener("click",function(){
    console.log("helllo tab_3");
    content_1[0].style.display="none";
    content_3[0].style.display="inline";
    content_2[0].style.display="none";
    
});
