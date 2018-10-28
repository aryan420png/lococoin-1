var data = [
	{
		"type":"andr",
		"amount":"500",
		"target_addr":"0xadjl",
		"loc":"12.2092:16.122"
	},
	{
		"type":"rpi",
		"amount":"50",
		"target_addr":"0xadjl",
		"loc":"12.2092:16.122"
	},
	{
		"type":"rpi",
		"amount":"50",
		"target_addr":"0xadjl",
		"loc":"0:0"
	},

]

const LOC_THRESH = 0.01

module.exports={
	get_near:function(loc){
		console.log('finding...');
		res = data.filter(function(elem){
			lc = elem.loc.split(":");
			x = parseFloat( lc[0] )
			y = parseFloat( lc[1] )
			dist = Math.sqrt( (x-loc.x)*(x-loc.x) + (y-loc.y)*(y-loc.y) )
			if (dist<LOC_THRESH){
				return elem
			}
		});
		return res
	},

	add_receipt:function(rcp){
		console.log('adding receipt with keys',Object.keys(rcp))
		data.push(rcp)
	}
}

