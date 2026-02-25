window.refresh$$ico=function(){
    document.querySelectorAll("icon").forEach(dih=>{
    let temp$$ic$$data=dih.getAttribute("i").toLowerCase()
    if(temp$$ic$$data=='error'){
        dih.innerHTML="×"
    }
    })
}

window.addEventListener("DOMContentLoaded",function(){

    window.errorr= function(t){    
       let temp$$el$notiff=document.createElement("notify")
       let temp$$el$notif=document.createElement("notification")
       temp$$el$notif.setAttribute("sys",'error')
       let temp$$el$row=document.createElement("row")
       let temp$$el$ic=document.createElement('icon')
       temp$$el$ic.setAttribute('i','error')
       let temp$$el$$sysm=document.createElement("sys-msg")
       temp$$el$row.appendChild(temp$$el$ic)
       temp$$el$row.appendChild(temp$$el$$sysm) 
       let temp$$el$$dc=document.createElement("dialcon")
       let temp$$el$$bt=document.createElement("button")
       temp$$el$$bt.innerHTML='OK'
       temp$$el$$dc.appendChild(temp$$el$$bt)
       temp$$el$$sysm.innerHTML=t
       temp$$el$$bt.addEventListener("click",function(){
        temp$$el$notiff.remove()
       })
      temp$$el$notif.appendChild(temp$$el$row) 
      temp$$el$notif.appendChild(temp$$el$$dc) 
      temp$$el$notiff.appendChild(temp$$el$notif)
       document.body.appendChild(temp$$el$notiff)

       refresh$$ico()
    }
    window.loader=function(dihh,dih){
      if(dih.toLowerCase()=="s"){
        let temp$$el$$not=document.createElement(`notify`)
        let temp$$el$$spi=document.createElement('div')
        temp$$el$$spi.className="spinner"
        for(let dh=1;dh<13;dh++){
        let temp$$el$$each=document.createElement("div")
        temp$$el$$each.className=`bar${dh}`
        temp$$el$$spi.appendChild(temp$$el$$each)
        }
        let temp$$el$$ms=document.createElement("message")
        temp$$el$$ms.innerHTML=dihh
        temp$$el$$spi.appendChild(temp$$el$$ms)
        temp$$el$$not.appendChild(temp$$el$$spi)
        document.body.appendChild(temp$$el$$not)
        temp$$$active$$r=temp$$el$$not
    }
    else{
        if(temp$$$active$$r){
            temp$$$active$$r.remove()
            temp$$$active$$r=null
        }
    }
    }
    function sleep(dih){
        return new Promise(resolve=>setTimeout(resolve,dih))
    }
    window.success=async function(dihh){//must await users cro
        let temp$$el$$not=document.createElement(`notify`)
        let temp$$el$$spi=document.createElement('div')
        temp$$el$$spi.setAttribute('tromoSM','normalxdialog')
        lottie.loadAnimation({
            container:temp$$el$$spi,
            renderer:"svg",
            loop:false,
            autoplay:true,
            path: "/static/sys-checkmark.json"
        })
        let temp$$el$$ms=document.createElement("message")
        temp$$el$$ms.innerHTML=dihh
        temp$$el$$spi.appendChild(temp$$el$$ms)
        temp$$el$$not.appendChild(temp$$el$$spi)
        document.body.appendChild(temp$$el$$not)
        await sleep(3000)
        temp$$el$$spi.style.transform='scale(0.8)'
        temp$$el$$spi.style.opacity='0'
        await sleep(310)
        temp$$el$$not.remove()
    }

    window.fail=async function(dihh){
        let temp$$el$$not=document.createElement(`notify`)
        let temp$$el$$spi=document.createElement('div')
        temp$$el$$spi.setAttribute('tromoSM','normalxdialog')
        lottie.loadAnimation({
            container:temp$$el$$spi,
            renderer:"svg",
            loop:false,
            autoplay:true,
            path: "/static/sys-fail.json"
        })
        let temp$$el$$ms=document.createElement("message")
        temp$$el$$ms.innerHTML=dihh
        temp$$el$$spi.appendChild(temp$$el$$ms)
        temp$$el$$not.appendChild(temp$$el$$spi)
        document.body.appendChild(temp$$el$$not)
        await sleep(3000)
        temp$$el$$spi.style.transform='scale(0.8)'
        temp$$el$$spi.style.opacity='0'
        await sleep(310)
        temp$$el$$not.remove()
    }
    window.iOSprompt=async function(dihh){
        return new Promise((resolve)=>{
        let temp$$el$$not=document.createElement(`notify`)
        let temp$$el$$spi=document.createElement('div')
        temp$$el$$spi.setAttribute('tromoSM','promptSYS')
        let main$temp$inp=document.createElement('input')
        let temp$$el$$ms=document.createElement("non-abs-message")
        let temp$$ac$$send=document.createElement('button')
        temp$$ac$$send.innerHTML="Send"
        temp$$ac$$send.setAttribute("tromoSM",'sys-btn-fcs')
        let temp$$ac$$cancel=document.createElement('button')
        temp$$ac$$cancel.innerHTML='Cancel'
        temp$$ac$$cancel.setAttribute('tromoSM','sys-btn-non')
        let temp$$btn$cont=document.createElement('tromoSM-container')
        temp$$btn$cont.appendChild(temp$$ac$$cancel)
        temp$$btn$cont.appendChild(temp$$ac$$send)
        temp$$el$$ms.innerHTML=dihh
        temp$$el$$spi.appendChild(temp$$el$$ms)
        temp$$el$$spi.appendChild(main$temp$inp)
        temp$$el$$spi.appendChild(temp$$btn$cont)
        temp$$el$$not.appendChild(temp$$el$$spi)
        document.body.appendChild(temp$$el$$not)
        temp$$ac$$cancel.addEventListener('click',async function(){
         temp$$el$$spi.style.transform='scale(0.8)'
         temp$$el$$spi.style.opacity='0'
         await sleep(310)
         temp$$el$$not.remove()
         resolve(null)
        })
        temp$$ac$$send.addEventListener('click',async function(){
         let temp$$ins$val=main$temp$inp.value
         temp$$el$$spi.style.transform='scale(0.8)'
         temp$$el$$spi.style.opacity='0'
         await sleep(310)
         temp$$el$$not.remove()
         resolve(temp$$ins$val)
        })
        main$temp$inp.addEventListener('keydown',function(dih){
            if(dih.key=='Enter'){
                temp$$ac$$send.click()
            }
        })
    })
    }
    
    window.showKeyboard=function(){
      temp$$a$$dih=document.createElement('input')
      document.body.appendChild(temp$$a$$dih)
      temp$$a$$dih.setAttribute("tromoSM",'sys$hide')
      temp$$a$$dih.focus()  
    }
})
