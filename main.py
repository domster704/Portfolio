from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')


@app.route('/projectList')
def projectList():
    return render_template('projectList.html')


app.run('0.0.0.0', port=8000, debug=True)