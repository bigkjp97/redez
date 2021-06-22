import redis


class Conn:
    def __init__(self, ip, port, auth):
        self.ip = ip
        self.port = port
        self.auth = auth
        self.redis_init = redis.StrictRedis(self.ip, self.port, password=self.auth)

    def setup(self):
        try:
            redis.Connection(self.ip, self.port, password=self.auth, decode_responses=True).on_connect()
            if self.redis_init.execute_command("PING"):
                return True
        except:
            return False

    def info(self):
        """
        返回json类型数据
       """
        return self.redis_init.execute_command("INFO")
