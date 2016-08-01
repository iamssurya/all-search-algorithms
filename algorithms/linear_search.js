/* Linear Search  */

var linearSearch = function(search_string,data_type,data_sorted,data){
	console.log('linear searching data:'+search_string+' : '+data);

	console.log(data_sorted);
	if(data_sorted == 'ordered'){
		for(var i=0;i<data.length;i++){
			console.log('comparing '+search_string+': '+data[i]);
			if(parseInt(search_string) === data[i]){
				return {
					'data':i,
					'time':new Date().getTime()
				};
			}else if(data[i] > search_string){
				return -1;
			}
		}
	}else{
		for(var i=0;i<data.length;i++){
			if(parseInt(search_string) === data[i]){
				return {
					'data':i,
					'time':new Date().getTime()
				};
			}
		}
		return -1;
	}	
}