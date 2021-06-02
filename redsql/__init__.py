from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class RedisInfo(db.Model):
    __tablename__ = "redis_info"
    id = db.Column(db.Integer, primary_key=True, comment="主键", nullable=False)
    host = db.Column(db.VARCHAR(20), comment="主机", nullable=False)
    ip = db.Column(db.VARCHAR(20), comment="IP", nullable=False)
    port = db.Column(db.Integer, comment="端口", nullable=False)
    description = db.Column(db.NVARCHAR(100), comment="描述", nullable=True)
    operator = db.Column(db.NVARCHAR(20), comment="管理员", nullable=True)
    work = db.Column(db.BOOLEAN, comment="启动", nullable=False)

    # def __repr__(self):
    #     return "Redis: " + self.__tablename__

    def __init__(self):
        pass
