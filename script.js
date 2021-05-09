let input=document.querySelector(".input_box");
let ul =document.querySelector(".list_Box");
input.addEventListener("keydown",function(e){
    if(e.key=="Enter"){
            let task = input.value;
            console.log(task)
            let li = document.createElement("li");
            li.innerText=task;
            ul.appendChild(li);
            li.setAttribute("class","task")
            li.addEventListener("dblclick",function(e){
                li.remove()
            })
            input.value="";
    }
})