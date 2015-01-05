$(document).ready(function(){

	

	var url = "https://www.googleapis.com/youtube/v3/search";

	var getRequest = function(userSearch) {

		var params = {
			part: 'snippet',
			key: 'AIzaSyCG4LqBEaQfGwDuGaAttsevasCJ9jZVxpw',
			q: userSearch,
			maxResults: 50 
		};

		$.getJSON(url, params, function(data){
	    	showResults(data.items);
	    	//console.log(data);
		});

	};

	var showResults = function(results) {

		$.each(results, function(index, value){
				//console.log(value.snippet.thumbnails.default.url);
				//console.log(value.id.videoId);
				$("#results-container").append("<a href='https://www.youtube.com/watch?v=" + value.id.videoId + "' target='_blank'><img src='" + value.snippet.thumbnails.default.url + "'></a>");
			});
		};

	var clearResults = function(){
		$("#results-container").find('a', 'img').remove();
	};

	$("#query").dblclick(function(){
		$(this).val('');
	});

	$("#search-form").submit(function(event) {
		var userSearch = $("#query").val();
		event.preventDefault();
		clearResults();
		getRequest(userSearch);
	});

});