import cv2 as cdih
from flask import Flask,render_template
from flask_socketio import SocketIO
import mss
import time
import numpy as dihpy
import base64
import threading as threadihn
app=Flask(__name__)
S=SocketIO(app,cors_allowed_origins='*')
print('starting')
##VAR GUI vChng
chng0monitor=1
chng0NETcap=1280
print('getting ready')
def livetypeshi():
    with mss.mss()as diddy:
     maincord=diddy.monitors[chng0monitor]
     rl0w=maincord["width"]
     rl0h=maincord["height"]
     if(rl0w>chng0NETcap):
         incaseCAP=chng0NETcap/rl0w
         ou0w=int(rl0w*incaseCAP)
         ou0h=int(rl0h*incaseCAP)
         print('resizing into web efficiaota')
         print(f'{rl0w}x{rl0h} to {ou0w}x{ou0h}')
     else:
         ou0h=rl0h
         ou0w=rl0w
     while True:
        print('data sent')
        ss=diddy.grab(maincord)
        ech=dihpy.array(ss)
        ech=cdih.cvtColor(ech,cdih.COLOR_BGRA2BGR)
        ech=cdih.resize(ech,(ou0w,ou0h))
        markgimmethe,succ=cdih.imencode('.jpg',ech,[cdih.IMWRITE_JPEG_QUALITY,60])
        
        fcs=base64.b64encode(succ).decode('utf-8')
        S.emit('imim_main',fcs)
        S.sleep(0.02)
@app.route('/')
def dih():
   return render_template('index.html')
if __name__=="__main__":
   S.start_background_task(livetypeshi)
   S.run(app,host='0.0.0.0',port=1216)
