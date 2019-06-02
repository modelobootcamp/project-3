from flask import Flask, render_template, redirect, jsonify, Response
import json

# Import our pymongo library, which lets us connect our Flask app to our Mongo database.
import pymongo
from flask_pymongo import PyMongo

# Create an instance of our Flask app.
app = Flask(__name__)

# Create connection variable
app.config["MONGO_URI"] = "mongodb://localhost:27017/android_apps"
mongo = PyMongo(app)



@app.route("/")
def index():
    """Return the homepage."""
    return render_template("index.html")

@app.route('/categories') # <- from '/'
def categories():
    return render_template("page_1.html")


@app.route("/top_apps")
def top_apps():
    """Return a list of sample names."""
    top_apps = mongo.db.top_apps.find_one()
    top_apps_clean = {k: v for k, v in top_apps.items() if k !="_id"}
    
    # Return a nested dictionary for tio ten apps for every category
    return jsonify(top_apps_clean)

@app.route("/all_apps")
def all_apps():
    """Return a list of sample names."""
    apps = []
    records = mongo.db.all_apps.find()
    for record in records:
        new_dict = {k: v for k, v in record.items() if k !="_id"}
        # new_dict_clean = {k: v.replace('NaN', "null") for k, v in new_dict.items() if isinstance(v,str) }
        apps.append(new_dict)

    # Return a list dictionaries with records about each app
    return jsonify([app for app in apps])

if __name__ == "__main__":
    app.run(debug=True)