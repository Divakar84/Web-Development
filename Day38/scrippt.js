let button = document.getElementById("btn")     

button.addEventListener("dblclick", ()=>{
    document.querySelector(".box").innerHTML= "<b>Yaayyy you were clicked</b>   Enjoy your click!";
})

button.addEventListener("contextmenu", ()=>{
    alert("Do not hack us by Right click please!")
})

document.addEventListener("keydown", (e)=>{
    console.log(e, e.key, e.keyCode)
})