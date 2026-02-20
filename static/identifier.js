window.addEventListener("DOMContentLoaded",async function(){
    if(!localStorage.getItem("username")){
     let temp$$pr$usr=prompt("choose an username")
    await localStorage.setItem("username",temp$$pr$usr.trim())    
    }
    window.username=localStorage.getItem("username")
})
