/*
Copyright 2026 tromoSM
https://github.com/tromoSM/xcreenDesk
static/admin.js
v1 GUI

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
window.addEventListener("DOMContentLoaded",function(){
    loader("please wait",'s')
     window.addEventListener('pywebviewready',async function(){
     loader("sybau",'idk cro')
    })
    const sdih=io()
    let all$$banned$$=[]
    sdih.on("autoban",function(u){
      all$$banned$$.push(u)
    })
    sdih.on("unban",function(u){
      all$$banned$$.splice(all$$banned$$.indexOf(u))
    })
    let temp$main$ind=document.querySelector('mainindicate')
    temp$main$ind.setAttribute("share",'fuhnaw')
    temp$main$ind.addEventListener("click",async function(){
     if(temp$main$ind.getAttribute("share")=="fuhnaw"){
         await window.pywebview.api.start0main()
         temp$main$ind.innerHTML=`<ani-cir></ani-cir>Stop sharing`
         temp$main$ind.setAttribute("share",'sybau')
     }
     else{
         loader("stopping screenshare",'s')
         await window.pywebview.api.stopcro()
         loader("dih",'dih')
         temp$main$ind.innerHTML=`<ani-tri></ani-tri>Start sharing`
         temp$main$ind.setAttribute("share",'fuhnaw')
        }
    })
    sdih.on("imim_main",function(imim){
     window.usg=imim.length/(1024*1024)
      document.querySelector('[tromoSM="mainvid"]').addEventListener('click',function(){
        console.log('yo')
      })
     document.querySelector('[tromoSM="mainvid"]').src=`data:image/jpeg;base64,${imim}`
    })
     document.querySelector('[tromoSM="mainvid"]').addEventListener("error",function(){
     document.querySelector('[tromoSM="mainvid"]').src="data:image/png;base64,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"
     })
    document.querySelector('[tromoSM="view"]').addEventListener('click',async function(){
      await window.pywebview.api.chngremote("f")
    })
    document.querySelector('[tromoSM="full"]').addEventListener('click',async function(){
      await window.pywebview.api.chngremote("t")
    })
    stored$count=0
    stored$ahh=[]
    sdih.on('viewerahh',function(dih){
        stored$ahh=dih[1]
        stored$count=dih[0]
        if(dih[0]>0){
         document.querySelector('[auto-ad="viewR"]').title=`See viewers (${dih[0]})`        
        }
    })
    window.lottieFill=async function(eldih){
     document.querySelectorAll(`[ani-icon='${eldih}']`).forEach(dih=>{
            lottie.loadAnimation({
            container:dih,
            renderer:"svg",
            loop:false,
            autoplay:true,
            path: `/static/aniCON/${eldih}.json/`
        })
     })
    }
    lottieFill('phone')
    lottieFill('pc')
    document.querySelector('[auto-ad="viewR"]').addEventListener("click",function(){
    if(document.querySelector('popup-adm')){
     document.querySelectorAll('popup-adm').forEach(yo=>{
        yo.remove()
     })
    }
     let temp$$el$$pop=document.createElement('popup-adm')
     let temp$$tran$clos=document.createElement("transparentcloser")  
     let temp$$cardfi=document.createElement("cardih")
     let temp$$doc$titl=document.createElement("h3")
     temp$$doc$titl.innerHTML='Viewers'
     temp$$cardfi.appendChild(temp$$doc$titl)
     stored$ahh.forEach(yo=>{
      let temp$$eac$op=document.createElement("writ")
      let temp$$cir=document.createElement('circle')
      temp$$eac$op.appendChild(temp$$cir)
      let aniconani=document.createElement('anicon')
      temp$$cir.appendChild(aniconani)
      if(yo["mobiledih"]==true){
       aniconani.setAttribute("ani-icon",'phone')
      }
      else{
       aniconani.setAttribute("ani-icon",'pc')
      }
      let sideopti=document.createElement('tag')
      sideopti.innerHTML=yo["userdih"]
      temp$$eac$op.appendChild(sideopti)
      temp$$cardfi.appendChild(temp$$eac$op)
     })
     temp$$tran$clos.addEventListener("click",function(){
        temp$$el$$pop.remove()
     })
     temp$$el$$pop.appendChild(temp$$tran$clos)
     temp$$el$$pop.append(temp$$cardfi)

     document.body.appendChild(temp$$el$$pop)
     lottieFill('phone')
     lottieFill('pc')
    })
    document.querySelector('[tromoSM="almess"]').addEventListener('click',async function(){
     await window.pywebview.api.chngmsg('t')
    })
    document.querySelector('[tromoSM="nomess"]').addEventListener('click',async function(){
     await window.pywebview.api.chngmsg('f')
    })
    let constin=''
    function refreshpla(){
      constin=document.querySelector('[inban="appear"]').value
      if(all$$banned$$.includes(constin)){
        document.querySelector('[unor="ban"]').innerHTML='Unban'
      }
      else{
        document.querySelector('[unor="ban"]').innerHTML='Ban'

      }
    }

    document.querySelector('[inban="appear"]').addEventListener("input",function(){refreshpla()})
    document.querySelector('[unor="ban"]').addEventListener("click",async function(){
      constin=document.querySelector('[inban="appear"]').value.trim()
      if(!constin){
        return
      }
      if(all$$banned$$.includes(constin)){
        await window.pywebview.api.BAN(['u',constin])
        all$$banned$$=all$$banned$$.filter(dihdih=>dihdih!==constin)
      }
      else{
        await window.pywebview.api.BAN(['b',constin])
        all$$banned$$.push(constin)
      }
      refreshpla()
    })
    document.querySelector('[inban]').addEventListener('keydown',function(dih){
      if(dih.key=="Enter"){
        document.querySelector('[unor="ban"]').click()
      }
    })
})
