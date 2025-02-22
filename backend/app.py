from flask import Flask, request, jsonify
from flask_cors import CORS  # Import the CORS package

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/submit', methods=['POST'])
def submit_form():
    # Handling JSON data (instead of form data)
    data = request.json
    name = data.get('name')
    email = data.get('email')

    # Process the data (just an example)
    return jsonify({"message": f"Received data: Name = {name}, Email = {email}"}), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)