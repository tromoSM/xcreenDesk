window.addEventListener("DOMContentLoaded",function(){
    document.querySelector('[tromoSM="scrn"]').addEventListener("click",printscr)
    document.querySelector('[tromoSM="mess"]').addEventListener("click",function(){
        let temp$$pr$$mes=prompt("Send a message to the host")
        message(temp$$pr$$mes)
    })
})
