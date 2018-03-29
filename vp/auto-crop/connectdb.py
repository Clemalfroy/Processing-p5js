import json
import pymysql

dbinfo = json.load(open('confdb.json'))
conn = pymysql.connect(host=dbinfo['url'], port=3306, user=dbinfo['username'], passwd=dbinfo['Password'], db=dbinfo['Database'])
cur = conn.cursor()

cur.execute("SELECT item_id FROM articles LIMIT 10")
result = cur.fetchall()

print(result)

cur.close()
conn.close()

