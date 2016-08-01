/* Linear Search  */

var linearSearch = function(search_string,data,data_type){
	console.log('linear searching data:'+search_string+' : '+data);
	var datum;
	
	getJSON('data/small.json').then(function(data){
		//console.log(data);
		datum = JSON.parse(data);
		console.log(datum);
	},function(status){
		console.log(status);
	});
}