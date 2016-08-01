var search = function(){
	console.log('searching '+$('#search').val()+' with '+$('#type').val()+' search');
	var search_type=$('#type').val(),
		search_string=$('#search').val(),
		data = $('#data').val(),
		data_source;

	switch(data){
		case 'small':
			data_source="small.json"
			break;
		case 'medium':
			data_source="medium.json"
			break;
		default:
			data_source="small.json"
	}
	
	switch(search_type){
		case 'linear':
			var result = linearSearch(search_string,data_source);
			break;
	}
}

var getJSON = function(url){
	return new Promise(function(resolve,reject){
		var xhr = new XMLHttpRequest();
		xhr.open('get',url,true);
		xhr.responseType = 'json';
		xhr.onload = function(){
			var status=xhr.status;
			if(status ==200){
				resolve(xhr.response);
			}else{
				reject(status);
			}

		};
		xhr.send();
	});
}