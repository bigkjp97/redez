from flask import Flask
from flask_sqlalchemy import SQLAlchemy
import config

app = Flask(__name__)
app.config.from_object(config.Config)
db = SQLAlchemy()
db.init_app(app)


@app.route('/')
def index():
    return "Hello World!"


if __name__ == '__main__':
    app.run(debug=True)
