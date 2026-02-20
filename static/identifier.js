window.addEventListener("DOMContentLoaded",async function(){
    if(!localStorage.getItem("username")){
    try{
      let temp$$pr$usr=await iOSprompt("choose an username")
     await localStorage.setItem("username",temp$$pr$usr.trim())    
    }
    catch(dih){
     errorr(dih)
      let temp$$pr$usr=prompt("choose an username")
     await localStorage.setItem("username",temp$$pr$usr.trim())    
    }
    
    }
    window.username=localStorage.getItem("username")
})
