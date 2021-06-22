from flask import Flask, request
from flask_cors import cross_origin
from redsql import db, RedisInfo
import config
import redconn

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


@app.route('/api/redis', methods=['POST'])
@cross_origin()
def api_redis():
    ip = request.form.get('ip')
    port = request.form.get('port')
    auth = request.form.get('auth')
    conn = redconn.Conn(ip, port, auth)
    version, uptime, clients, memory, os_ver = '', '', '', '', ''
    if conn.setup():
        info = conn.info()
        RedisInfo.query.filter(RedisInfo.ip == ip, RedisInfo.port == port).update({'work': True})
        db.session.commit()
        status, connection = 200, 1
        version, uptime, clients, memory, os_ver = info['redis_version'], info['uptime_in_days'], info[
            'connected_clients'], \
                                                   info['used_memory'], info['os']
    else:
        status, connection = 400, 0
        RedisInfo.query.filter(RedisInfo.ip == ip, RedisInfo.port == port).update({'work': False})
        db.session.commit()

    res = {
        'status': status,
        'connection': connection,
        'version': version,
        'uptime': uptime,
        'clients': clients,
        'memory': memory,
        'os': os_ver
    }
    return res


if __name__ == '__main__':
    app.run('0.0.0.0', 8010, debug=True)
