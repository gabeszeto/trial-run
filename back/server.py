from flask import Flask
from flask_cors import CORS

app = Flask(__name__)

CORS(app)

@app.route("/names")
def members():
    return{"names": ["Alien", "Child", "Bo", "Charlie"]} 


if __name__ == "__main__":
    app.run(debug=True)
