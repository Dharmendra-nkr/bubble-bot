from flask import Flask, render_template, request, jsonify

app = Flask(__name__, static_folder='static', template_folder='templates')


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/chat', methods=['POST'])
def chat():
    data = request.get_json(silent=True) or {}
    message = data.get('message', '')
    # Simple echo reply — replace with bot logic as needed
    return jsonify({'reply': f'Echo: {message}'})


if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5000, debug=True)
