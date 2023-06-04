from flask import Flask, render_template
import subprocess

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/run-main')
def run_main():
    subprocess.Popen(['python', 'pose_tracking/main.py'])
    return 'Running main.py'

if __name__ == '__main__':
    app.run()
