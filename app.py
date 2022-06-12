from flask import Flask, request, make_response, redirect, render_template, session, url_for, flash
from flask_bs4 import Bootstrap
from flask_wtf import FlaskForm
from flask_cors import CORS

app = Flask(__name__)

cors = CORS(app, resources={r"*": {"origins": "*"}})

bootstrap = Bootstrap(app)

@app.route('/')
@app.route('/home')
def homepage():
    return render_template('pages/index.html')

@app.route('/about')
def about():
    return render_template('pages/about.html')
