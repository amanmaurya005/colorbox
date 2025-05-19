let colorbox=document.querySelectorAll(".box");
colorbox.forEach(box =>{
    box.addEventListener("click",()=>{
    box.style.backgroundColor="green";
    box.style.border="solid ";
    box.style.backgroundImage="url(one.jpg)";
    box.style.backgroundRepeat="no-repeat"
    box.style.backgroundSize="cover";
    })
})