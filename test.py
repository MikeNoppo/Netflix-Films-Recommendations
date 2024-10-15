import numpy as np
import pandas as pd
from flask import Flask, request, jsonify, render_template
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import json
import bs4 as bs
import urllib.request
import pickle
import requests


def get_suggestions():
    try:
        data = pd.read_csv('dataProcessing_4/main_data.csv')
        print(data['movie_title'].head())  # Debugging output untuk memastikan data dibaca
        return list(data['movie_title'].str.capitalize())
    except Exception as e:
        print(f"Error saat membaca file: {e}")
        return []

app = Flask(__name__)
@app.route('/')
@app.route('/home')
def home():
    suggestions = get_suggestions()
    if not suggestions:  # Jika suggestions kosong, kembalikan nilai default
        suggestions = []
    return render_template('home.html', suggestions=suggestions)
