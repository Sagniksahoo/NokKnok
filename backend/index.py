from flask import Flask, jsonify, request
from flask_cors import CORS 
from pymongo import MongoClient
import os
from dotenv import load_dotenv
from flask_pymongo import PyMongo
from datetime import datetime
# Load .env
load_dotenv()



app = Flask(__name__)        
CORS(app)                 


mongodb_client = PyMongo(app, uri="mongodb+srv://motivationalv2000:zFTkIVNY62IIFYhV@cluster1.7amaawb.mongodb.net/nokknok_db?retryWrites=true&w=majority&appName=Cluster1")
db = mongodb_client.db



@app.route('/')
def home():
    return jsonify({"message": "Welcome to nokNock!"})


#register user details
@app.route('/add-visitor', methods=['POST'])
def add_visitor():
    data = request.get_json()
    name = data.get("name")
    email = data.get("email")
    dob = data.get("dob")
    aadhar = data.get("aadhar")

    if not all([name, email, dob, aadhar]):
        return jsonify({"error": "Missing fields"}), 400

    registration_time = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

    db.visitors.insert_one({
        "name": name,
        "email": email,
        "dob": dob,
        "aadhar": aadhar,
        "photo": data.get("photo"),  # base64 image string
        "registered_at": registration_time
    })

    return jsonify({"message": "Visitor added!"}), 201


#get user details

@app.route('/get-all-visitor',methods=['GET'])
def get_visitors():
    visitors = list(db.visitors.find({}, {'_id': 0}))
    return jsonify(visitors)

# Delete User

# DELETE visitor by Aadhar
@app.route('/delete-visitor/<aadhar>', methods=['DELETE'])
def delete_visitor(aadhar):
    result = db.visitors.delete_one({"aadhar": aadhar})
    if result.deleted_count == 1:
        return jsonify({"message": "Visitor deleted successfully."}), 200
    else:
        return jsonify({"error": "Visitor not found."}), 404



if __name__ == '__main__':
    app.run(debug=True)
