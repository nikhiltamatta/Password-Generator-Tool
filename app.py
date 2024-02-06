# backend/app.py
from flask import Flask, request, jsonify
from flask_cors import CORS
import random
import string
import hashlib

app = Flask(__name__)
CORS(app)

def generate_password(length, use_uppercase, use_digits, use_special_chars):
    chars = string.ascii_lowercase
    if use_uppercase:
        chars += string.ascii_uppercase
    if use_digits:
        chars += string.digits
    if use_special_chars:
        chars += string.punctuation

    password = ''.join(random.choice(chars) for _ in range(length))
    return password

def hash_password(password):
    return hashlib.sha256(password.encode()).hexdigest()

@app.route('/generate-password', methods=['POST'])
def generate_password_route():
    data = request.get_json()
    length = data.get('length', 12)
    use_uppercase = data.get('useUppercase', False)
    use_digits = data.get('useDigits', True)
    use_special_chars = data.get('useSpecialChars', False)

    password = generate_password(length, use_uppercase, use_digits, use_special_chars)
    hashed_password = hash_password(password)

    return jsonify({'password': password, 'hashedPassword': hashed_password})

if __name__ == '__main__':
    app.run(debug=True)
