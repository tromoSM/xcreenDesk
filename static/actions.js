window.addEventListener("DOMContentLoaded",function(){
    document.querySelector('[tromoSM="scrn"]').addEventListener("click",printscr)
    document.querySelector('[tromoSM="mess"]').addEventListener("click",async function(){
        let temp$$pr$$mes=await iOSprompt("Send a message to the host")
        message(temp$$pr$$mes)
    })
    document.querySelector('[tromoSM="obfi"]').addEventListener('click',function(){
    document.querySelector('[tromoSM="mainvid"]').toggleAttribute('cover')
    document.querySelector('[tromoSM="mainvid"]').toggleAttribute('scale')
    })
})
