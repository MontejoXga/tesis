from flask import Flask, render_template, request, jsonify
from PIL import Image
import numpy as np
import cv2
import re
import base64
import io 


app=Flask(__name__)

##rutas css

##Definimos ruta
@app.route('/')
def index():
    return render_template('index.html')

@app.route ('/detect', methods=["POST"])
def disp_pic():

    image_b64 = request.data
    img_b64 = base64.b64encode(image_b64).decode('utf-8')
    img_b64 = 'data:image/jpeg;base64, ' + img_b64
    return jsonify(name='input.jpg', image=str(img_b64))
    

@app.route('/informacion')
def informacion():
    return render_template('informacion.html')

@app.route('/consejos')
def consejos():
    return render_template('consejos.html')


if __name__ == '__main__':
    app.run(debug=True)

