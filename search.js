$('#type').change(function(){
	switch($('#type').val()){
		case 'linear':
			$('.array').removeClass('hide');
			$('.for').removeClass('show').addClass('hide');
			$('.for-linear').removeClass('hide').addClass('show');
			break;
		case 'binary':
			$('.for').removeClass('show').addClass('hide');
			$('.for-binary').removeClass('hide').addClass('show');
	}
});
var search = function(){
	var start = new Date().getTime();
	var search_type=$('#type').val(),
		search_string=$('#search').val(),
		data = $('#data').val(),
		data_source;
	 var data_sorted = $('#data_sorted').val();
	 var array_data=[2,10,32,11,35,755,21234,87623,123,5674,12367,123298,1,236];
	 if(data_sorted === 'ordered'){
	 	array_data.sort(function(a,b){ return a-b; });
	 }
	
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
			data_source = array_data.slice();
			data_type='array';
			
			var result = linearSearch(search_string,data_type,data_sorted,data_source);
			break;
		case 'binary':
			var result = binarySearch(search_string,array_data.sort(function(a,b){ return a-b; }));
			break;
	}
	var milliseconds = result.time - start;
	var exec_time = milliseconds/1000;
	console.log(result);
	$('.answer').empty();
	if(result != -1){
		$('.answer').append('Found the searched string at '+parseInt(result.data+1)+' position');
		$('.answer').append('(<i>'+exec_time+' secs</i>)');
	}else{
		$('.answer').append('String not found');
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
/*
	getJSON('data/small.json').then(function(data){
		//console.log(data);
		datum = JSON.parse(data);
		console.log(datum);
	},function(status){
		console.log(status);
	});*/