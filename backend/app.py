from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/submit', methods=['POST'])
def submit_form():
    data = request.form
    name = data.get('name')
    email = data.get('email')

    # Process the data (just an example)
    return jsonify({"message": f"Received data: Name = {name}, Email = {email}"}), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)