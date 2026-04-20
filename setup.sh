#!/bin/bash

# Install frontend dependencies
npm install

# Install Flask
pip install flask

# Start the frontend server
npm start &
echo "Frontend server started."

# Start the backend server
python src/app.py &
echo "Backend server started."

echo "Setup complete. Application is running."
