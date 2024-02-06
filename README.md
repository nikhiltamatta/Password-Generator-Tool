# 🌟 Password Generator Tool

This repository contains a simple password generator tool with a Python backend using Flask and a React frontend.

## Table of Contents

- [Setup](#setup)
- [Usage](#usage)
- [Security Considerations](#security-considerations)
- [License](#license)

## Setup 🛠️

### Backend (Python - Flask)

1. Install Flask and Flask-CORS:

   ```bash
   pip install Flask Flask-CORS
   ```

2. Navigate to the `backend` directory:

   ```bash
   cd backend
   ```

3. Run the Flask backend:

   ```bash
   python app.py
   ```

   The backend will be running at `http://localhost:5000`.

### Frontend (React)

1. Install Node.js and npm if not already installed.

2. Navigate to the `frontend` directory:

   ```bash
   cd frontend
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Run the React frontend:

   ```bash
   npm start
   ```

   The frontend will be running at `http://localhost:3000`.

## Usage 🚀

1. Open your web browser and visit `http://localhost:3000`.

2. Adjust the password generation options:
   - Password Length: Set the desired length for the password.
   - Include Uppercase: Check to include uppercase letters.
   - Include Digits: Check to include digits.
   - Include Special Characters: Check to include special characters.

3. Click the "Generate Password" button.

4. The generated password and its hashed version will be displayed.

## Security Considerations 🔒

- This tool is a basic example and may not cover all security aspects for a production environment.
- Ensure to use HTTPS for secure communication between the frontend and backend.
- Validate user inputs to prevent potential security vulnerabilities.
- Store and handle passwords securely according to best practices.

## License 📜

This project is licensed under the [MIT License](LICENSE).
