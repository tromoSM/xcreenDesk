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
    document.querySelector('[tromoSM="curs"]').addEventListener("click",function(){
        document.querySelector('pointer').toggleAttribute('activate')
        document.querySelector('pointer').toggleAttribute('deactivate')
        document.querySelector('[tromoSM="curs"]').toggleAttribute('active-a')
        document.querySelector('[tromoSM="curs"]').toggleAttribute('active-b')
    })
    document.querySelector('[tromoSM="keys"]').addEventListener("click",function(){
        showKeyboard()
    })
})
