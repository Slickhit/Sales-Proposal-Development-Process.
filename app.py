from flask import Flask, render_template, request
import os

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/story', methods=['POST'])
def story():
    job_description = request.form.get('Job_description')
    cover_letter = request.form.get('Cover_letter')
    client_name = request.form.get('client_name') or 'N/A'
    return render_template('result.html', Job_description=job_description,
                           Cover_letter=cover_letter, clientName=client_name)

@app.errorhandler(404)
def not_found(e):
    return 'Page not found', 404

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 3000))
    app.run(host='0.0.0.0', port=port)
