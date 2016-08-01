var binarySearch = function(search_string,data,low,high){
	var mid = low + (high-low)/2;
	if(data[mid]==search_string){
		return mid;
	}else if(data[mid] < search_string){
		return binarySearch(search_string,data,mid+1,high);
	}else{
		return binarySearch(search_string,data,mid-1,high);
	}
	return -1;
}	