from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import numpy as np

app = Flask(__name__)
CORS(app)

# Load model
model = pickle.load(open("model.pkl", "rb"))

@app.route("/predict", methods=["POST"])
def predict():
    try:
        data = request.get_json()

        sp500 = float(data["sp500"])
        silver = float(data["silver"])
        usoil = float(data["usoil"])
        eurusd = float(data["eurusd"])   # FIXED KEY NAME

        features = np.array([[sp500, silver, usoil, eurusd]])

        prediction = model.predict(features)[0]

        return jsonify({
            "status": "success",
            "prediction": float(prediction)
        })

    except Exception as e:
        return jsonify({
            "status": "error",
            "message": str(e)
        })

if __name__ == "__main__":
    app.run(debug=True)

