from flask import Flask, render_template, send_from_directory

app=Flask(__name__)

##rutas css

##Definimos ruta
@app.route('/')
def home():
    return render_template('index.html')

@app.route('/informacion')
def informacion():
    return render_template('informacion.html')

@app.route('/consejos')
def consejos():
    return render_template('consejos.html')


if __name__ == '__main__':
    app.run(debug=True,port=5017)

