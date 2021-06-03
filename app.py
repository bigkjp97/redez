from flask import Flask
from flask_cors import cross_origin
from redsql import db, RedisInfo
import config

app = Flask(__name__)
app.config.from_object(config.Config)
db.init_app(app)


@app.route('/')
def index():
    return "Hello World!"


@app.route('/api', methods=['POST'])
@cross_origin()
def api():
    dataset = RedisInfo.query.all()
    r = []
    for data in dataset:
        d = {
            "ip": data.ip,
            "host": data.host,
            "port": data.port,
            "description": data.description,
            "operator": data.operator,
            "work": data.work
        }
        print(d)
        r.append(d)
    res = {
        "status": "success",
        "totals": len(r),
        "data": r
    }
    return res


if __name__ == '__main__':
    # with app.app_context():
    #     redis1 = RedisInfo()
    #     redis1.query.all()
    app.run(debug=True)
