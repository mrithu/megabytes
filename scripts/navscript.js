const burger=document.querySelector('.burger-menu');
const links=document.querySelector('.links');
const linkindex = document.querySelectorAll(".links li");
const body=document.querySelector("body");
initial=0;
burger.addEventListener("click", ()=>{
    
    links.classList.toggle("open");
    
    if(initial==0)
    {
        body.style.overflow="hidden";
        initial=1;
    }
    else
    {
        body.style.overflow="auto";
        initial=0;
    }

})