window.addEventListener("DOMContentLoaded",function(){
    const sdih=io()
    sdih.on("imim_main",function(imim){
     window.usg=imim.length/(1024*1024)
      document.querySelector('[tromoSM="mainvid"]').addEventListener('click',function(){
        console.log('yo')
      })
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
     if(x!==null){
      if(x.trim()!==''){
       sdih.emit("message",x,username)
       success('message sent')
      }
      else{
        alert("a message cannot be empty.")
      }
    }
  }
    
    document.querySelector('[tromoSM="mainvid"]').addEventListener('click',async function(dih){
      let temp$$clc$targt=dih.target
      let main$$data$$fetch=temp$$clc$targt.getBoundingClientRect()
      const raW=temp$$clc$targt.naturalWidth
      const raH=temp$$clc$targt.naturalHeight
      const temp$ra=raW/raH
      const temp$$e$ra=main$$data$$fetch.width/main$$data$$fetch.height
      let frW=main$$data$$fetch.width
      let frH=main$$data$$fetch.height
      let abs$$findX=0
      let abs$$findY=0
      const COV=temp$$clc$targt.hasAttribute('cover')
      const CON=temp$$clc$targt.hasAttribute('scale')
      if(CON){
        if(temp$ra>temp$$e$ra){
          frH=main$$data$$fetch.width/temp$ra
          abs$$findY=(main$$data$$fetch.height-frH)/2
        }
        else{
          frW=main$$data$$fetch.height*temp$ra
          abs$$findX=(main$$data$$fetch.width-frW)/2
        }
      }
      if(COV){
        if(temp$ra>temp$$e$ra){
          frW=main$$data$$fetch.height*temp$ra
          abs$$findX=(main$$data$$fetch.width-frW)/2
        }
        else{
          frH=main$$data$$fetch.width/temp$ra
          abs$$findY=(main$$data$$fetch.height-frH)/2
        }
      }
      const temp$$cliX=dih.clientX-main$$data$$fetch.left-abs$$findX
      const temp$$cliY=dih.clientY-main$$data$$fetch.top-abs$$findY
      const R0X=temp$$cliX/frW
      const R0Y=temp$$cliY/frH
      if(R0X>=0&& R0X<=1&&R0Y>=0&&R0Y<=1){
      console.log("clicked", R0X, R0Y)
      sdih.emit("eventclick",{temp$$instant$Xpos:R0X,temp$$instant$Ypos:R0Y,dihser:username})
      }
    })

})
