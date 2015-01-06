$(document).ready(function(){
	

	var url = "https://www.googleapis.com/youtube/v3/search";

	/* search youtube API using user input from form */
	var getRequest = function(userSearch) {

		var params = {
			part: 'snippet',
			key: 'AIzaSyCG4LqBEaQfGwDuGaAttsevasCJ9jZVxpw',
			q: userSearch,
			maxResults: 50 
		};

		$.getJSON(url, params, function(data){
	    	showResults(data.items);
		});

	};

	/* append thumbnail and link to results div*/

	var showResults = function(results) {

		$.each(results, function(index, value){
				$("#results-container").append("<a href='https://www.youtube.com/watch?v=" + value.id.videoId + "' target='_blank'><img src='" + value.snippet.thumbnails.default.url + "'></a>");
			});
		};

	/* clear results div*/

	var clearResults = function(){
		$("#results-container").find('a', 'img').remove();
	};

	/* clear searcj field on double-slick*/

	$("#query").dblclick(function(){
		$(this).val('');
	});

	/* function on user's submission of search query */

	$("#search-form").submit(function(event) {
		var userSearch = $("#query").val();
		event.preventDefault();
		clearResults();
		getRequest(userSearch);
	});

});