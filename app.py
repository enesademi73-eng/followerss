from flask import Flask, request, jsonify
import os
import logging

app = Flask(__name__)

# Configure logging
logging.basicConfig(filename='app.log', level=logging.INFO, format='%(asctime)s:%(levelname)s:%(message)s')

@app.route('/gain_followers', methods=['POST'])
def gain_followers():
    data = request.json
    platform = data.get('platform')
    email = data.get('email')
    password = data.get('password')
    num_followers = data.get('num_followers', 10)

    # Simulate gaining followers
    logging.info(f"Simulating gaining {num_followers} followers for {platform}: Email: {email}, Password: {password}")

    return jsonify({"message": f"Gained {num_followers} followers on {platform}"}), 200

if __name__ == '__main__':
    app.run(port=5000)
