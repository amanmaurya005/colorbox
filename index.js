let colorbox=document.querySelectorAll(".box");
const color=["red","green","blue","yellow","orange"]

colorbox.forEach(box =>{
    box.addEventListener("click",()=>{
      const randomColor = color[Math.floor(Math.random() * color.length)];
    box.style.backgroundColor = randomColor;

    // box.style.border="solid ";
    // box.style.backgroundImage="url(one.jpg)";
    // box.style.backgroundRepeat="no-repeat"
    // box.style.backgroundSize="cover";
    })
})