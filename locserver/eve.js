var  PORT = process.env.LOCSERVER_PORT | 3030

var express = require('express');
var axios = require('axios');
var app = express();
locserver = "http://lykov.tech:3000/receipts"

app.get('/', function (req, res) {
	  res.send('Hello World!');
});

const getHd=function(res){
	return ()=>{
		axios.get(locserver).then((result)=>{
			rpi = result.data.filter((el)=>{ return el.type=="rpi"})
			console.log(rpi)
			if (rpi.length>0){
				firxt = rpi[0]
				if (firxt.tx=="0"){
					setTimeout(getHd(res) ,1000);
				}else{
					console.log('answering')
					res.send(JSON.stringify({
						"txHash":"0x0",
						"client_addr":"0x1"
					}))

					// Disable that tx
					firxt.tx = '0'
					axios.put(locserver+'/'+firxt.id,
						firxt,
						(res)=>{
							console.log("Tx done")
						}
					)
				}
			}
		})

	}
}

app.get('/payEvent', function (req, res) {
	console.log("payevent")
	setTimeout(getHd(res) ,1000);
});


app.listen(PORT, function () {
	  console.log('ev port'+PORT+'!');
});

