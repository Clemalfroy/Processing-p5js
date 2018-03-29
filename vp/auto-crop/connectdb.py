import json
import pymysql
import urllib.request
import re

dbinfo = json.load(open('confdb.json'))
conn = pymysql.connect(host=dbinfo['url'], port=3306, user=dbinfo['username'], passwd=dbinfo['Password'], db=dbinfo['Database'])
cur = conn.cursor()

cur.execute("SELECT item_id FROM articles LIMIT 1")
ids = cur.fetchall()

for id in ids:
    url = "https://looklet.com/studio-api/v3/items/" + re.sub(r"[\(\),]", "", str(id))
    print(url)

with urllib.request.urlopen("http://maps.googleapis.com/maps/api/geocode/json?address=google") as url:
    data = json.loads(url.read().decode())
    print(data)

cur.close()
conn.close()

