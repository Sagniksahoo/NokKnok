from flask import Flask, jsonify
from flask_cors import CORS 
from pymongo import MongoClient
import os
from dotenv import load_dotenv


# Load .env
load_dotenv()



app = Flask(__name__)        
CORS(app)                 


# Connect to MongoDB
mongo_uri = os.getenv("MONGO_URI")  
client = MongoClient(mongo_uri)
db = client.get_database() 

# Sample collection
visitors = db.visitors







@app.route('/')
def home():
    return jsonify({"message": "Sushavan Dada!"})


# @app.route('/visitor')

if __name__ == '__main__':
    app.run(debug=True)
