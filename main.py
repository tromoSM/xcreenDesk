import cv2 as cdih
from flask import Flask,render_template
from flask_socketio import SocketIO
import mss
from datetime import datetime
import numpy as dihpy
import base64
import threading as threadihn
import ctypes
from colorama import Fore,Style
import pyautogui
ctypes.windll.user32.SetProcessDPIAware()
logging0level0info=True
app=Flask(__name__)
S=SocketIO(app,cors_allowed_origins='*')
a=datetime.now()
print(f"[{Fore.GREEN}{a.time()}{Style.RESET_ALL}] Turning on server")
rl0h=0
rl0w=0
ou0w=0
ou0h=0
temp0inf0offT=0
temp0inf0offL=0
##VAR GUI vChng
chng0monitor=1
chng0NETcap=1280
chng0REMOTE=True
a=datetime.now()
print(f"[{Fore.GREEN}{a.time()}{Style.RESET_ALL}] Getting screenshare ready")
def livetypeshi():
    global rl0w
    global rl0h
    global temp0inf0offL
    global ou0h
    global ou0w
    global temp0inf0offT
    with mss.mss()as diddy:
     maincord=diddy.monitors[chng0monitor]
     rl0w=maincord["width"]
     rl0h=maincord["height"]
     temp0inf0offL=maincord["left"]
     temp0inf0offT=maincord["top"]
     if(chng0REMOTE):
         a=datetime.now()
         print(f"[{Fore.GREEN}{a.time()}{Style.RESET_ALL}] Getting ready for remote clicking")
     if(rl0w>chng0NETcap):
         incaseCAP=chng0NETcap/rl0w
         ou0w=int(rl0w*incaseCAP)
         ou0h=int(rl0h*incaseCAP)
         a=datetime.now()
         print(f"[{Fore.GREEN}{a.time()}{Style.RESET_ALL}] Getting ready to resize screenshare into web efficient quality")
         print(f"[{Fore.GREEN}{a.time()}{Style.RESET_ALL}] Screenshare resized from{rl0w}x{rl0h} to {ou0w}x{ou0h}")
     else:
         ou0h=rl0h
         ou0w=rl0w
     while True:
        if logging0level0info:
         a=datetime.now()
         print(f"[{Fore.BLUE}{a.time()}{Style.RESET_ALL}] Live capture sent")
        ss=diddy.grab(maincord)
        ech=dihpy.array(ss)
        ech=cdih.cvtColor(ech,cdih.COLOR_BGRA2BGR)
        ech=cdih.resize(ech,(ou0w,ou0h))
        markgimmethe,succ=cdih.imencode('.jpg',ech,[cdih.IMWRITE_JPEG_QUALITY,60])
        
        fcs=base64.b64encode(succ).decode('utf-8')
        S.emit('imim_main',fcs)
        S.sleep(0.02)
@S.on("message")
def rec(x,u):
    def bgtsk():
      a=datetime.now()      
      print(f"[{Fore.GREEN}{a.time()}{Style.RESET_ALL}] {u} sent the message '{x}' to host.")
      try:
       from windows_toasts import AudioSource, Toast, ToastAudio,WindowsToaster
       burnttoast = WindowsToaster('xscreenDesk')
       TotЯ = Toast()
       TotЯ.text_fields = [f"{u} sent you a message",x]
       TotЯ.audio=ToastAudio(AudioSource.Default, looping=False)
       burnttoast.show_toast(TotЯ)
       print(f"[{Fore.GREEN}{a.time()}{Style.RESET_ALL}] message notification sent to host")
      except Exception:
        pass
      print(f"[{Fore.GREEN}{a.time()}{Style.RESET_ALL}] message dialog sent to host")
      ctypes.windll.user32.MessageBoxW(0,x,f"{u} via xscreenDesk",0x40) #replace with webviewapi gui
      print(f"[{Fore.GREEN}{a.time()}{Style.RESET_ALL}] message dialog viewed by host")

    tempthead=threadihn.Thread(target=bgtsk,daemon=True)
    tempthead.start()
@S.on("eventclick")
def sybau(datashit):
    global chng0REMOTE
    global rl0w
    global rl0h
    global temp0inf0offL
    global temp0inf0offT
    if chng0REMOTE:
       temp0forinstant0XPOS=datashit["temp$$instant$Xpos"]
       temp0forinstant0YPOS=datashit["temp$$instant$Ypos"]
       temp0absX=int(temp0forinstant0XPOS*rl0w)+temp0inf0offL
       temp0absY=int(temp0forinstant0YPOS*rl0h)+temp0inf0offT
       pyautogui.click(temp0absX,temp0absY)
       print(f"[{Fore.GREEN}{a.time()}{Style.RESET_ALL}] {datashit["temp$$instant$Ypos"]} clicked {temp0absX}x{temp0absY}.")


@app.route('/')
def dih():
   return render_template('index.html')
if __name__=="__main__":
   S.start_background_task(livetypeshi)
   S.run(app,host='0.0.0.0',port=1216)
