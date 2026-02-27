/*
Copyright 2026 tromoSM
https://github.com/tromoSM/xcreenDesk
static/actions.js
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
