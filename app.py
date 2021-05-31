from flask import Flask
from redsql import db, RedisInfo
import config

app = Flask(__name__)
app.config.from_object(config.Config)
db.init_app(app)


@app.route('/')
def index():
    return "Hello World!"


if __name__ == '__main__':
    with app.app_context():
        db.create_all()
        redis1 = RedisInfo(ip="10.89.141.140", host="oa-nginx-1", port=7980, description="first instance", work=True)
        db.session.add(redis1)
        db.session.commit()
    app.run(debug=True)
