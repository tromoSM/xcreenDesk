/*
Copyright 2026 tromoSM
https://github.com/tromoSM/xcreenDesk
static/identifier.js
v1 GUI/CLI

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
