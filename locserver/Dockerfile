
from node:alpine
workdir locserver
copy  . .

expose 3000
run npm i -g json-server
run npm i
cmd ["json-server", "--host","0.0.0.0", "db.json"]

