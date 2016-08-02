var binarySearch = function(search_string,data){
	var low = 0,
		high = data.length-1,
		mid;
	while(low <= high){
		mid = Math.floor(low + (high-low)/2);
		if(data[mid] == search_string){
			return {
				'data':mid,
				'time':new Date().getTime()
			};
		}else if(data[mid] < search_string){
			low = mid + 1;
		}else{
			high = mid - 1;
		}
	}
	return -1;
}	