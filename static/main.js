window.addEventListener("DOMContentLoaded",function(){
    const sdih=io()
    sdih.on("imim_main",function(imim){
     window.usg=imim.length/(1024*1024)
     document.querySelector('[tromoSM="mainvid"]').src=`data:image/jpeg;base64,${imim}`
    })
    window.printscr=function(){
     let temp$$instant$scr=document.querySelector('[tromoSM="mainvid"]').src
     let temp$$el$scr=document.createElement('a')
     let temp$$all$date=new Date()
     temp$$el$scr.download=`ScreenCapture - ${temp$$all$date.toLocaleString()}`
     temp$$el$scr.href=temp$$instant$scr
     temp$$el$scr.click()
     document.body.appendChild(temp$$el$scr)
     temp$$el$scr.remove()
    }
    window.message=function(x){
     sdih.emit("message",x,username)
    }
})
