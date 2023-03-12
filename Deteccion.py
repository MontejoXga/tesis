import torch
import cv2 
import imutils
import numpy as np

model = torch.hub.load('.', 'custom',
                       path_or_model='./yolov7_custom.pt',
                       
                       source='local',
                     )

#model = torch.hub.load('WongKinYiu/yolov7','custom',
#                       path = 'C:/Users/MackaN/Documents/DetectorCacao/yolov7-custom/yolov7_custom.pt',
#                       force_reload=True, trust_repo=True)

#capturador

#cap = cv2.VideoCapture(0)
ruta = './muestra.mp4'
cap = cv2.VideoCapture(ruta)


while True:
    ##lectura de data
    ret, frame = cap.read()

    detect= model(frame)
    

    ##mostrar fps
    mostrar= np.squeeze(detect.render())

    reduccion = imutils.resize(mostrar, width=400)


    cv2.imshow('Detector de cacao', reduccion)

    ##

    k= cv2.waitKey(27)
    if k==27:
        break
cap.release()
cv2.destroyAllWindows()
