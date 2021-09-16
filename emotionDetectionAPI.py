from flask import Flask, request, render_template, Response
from fer import FER
import base64
import cv2
from flask_cors import CORS, cross_origin
from flask_ngrok import run_with_ngrok

app = Flask(__name__)
CORS(app, support_credentials=True)
app.config['CORS_HEADERS'] = 'Content-Type'
run_with_ngrok(app)

a={'angry': '😠','disgust': '🤢', 'fear': '😱', 'happy':'😁', 'sad': '☹️', 'surprise': '😮', 'neutral' : '😐'}
  
@app.route('/', methods=['GET','POST'])
def emotion():
    if request.method == 'POST':
        data = request.get_json()
        # print(data)
        byte = data['baseurl']
        byte = byte[22:]
        decodeit = open('hello_future.png', 'wb')
        decodeit.write(base64.b64decode((byte)))
        decodeit.close()    
        img = cv2.imread('hello_future.png')
        detector = FER()
        emotion,score = detector.top_emotion(img)
        if( emotion in a ):
            ans= emotion+"#"+a[emotion]
        else:
            ans = "neutral"+"#"+a['neutral']

	      
    return ans

if __name__ == "__main__":
    app.run( )