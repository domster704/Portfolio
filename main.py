from flask import Flask, render_template

app = Flask(__name__)

# TODO переписать все на React

@app.route('/')
def index():
    return render_template('index.html')


@app.route('/projectList')
def projectList():
    return render_template('projectList.html')


if __name__ == '__main__':
    app.run('0.0.0.0', port=8000, debug=True)