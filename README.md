# lococoin

Pay to available payees on the map

There are three entities in here:
- User, the one who pays and chooses payee from map (paymentstation)
- Payee, the one who sends receipt to server and waits for money (client-waiter)
- Server, the one who stores all data (locserver)
- Fantom Blockchain, network where Android app sends transaction 

There is docker image in locserver, and an instance is running at  http://lykov.tech:3000.
Supports all REST api methods.

