// Project Destinations // 
// Vignesh Balasubramanian //
//Image Courtesy: https://images.google.com //
var $page = $('.page');
var $place = $('.place');
var $continent = $('.continent');
var $ordered_landscape=$('.ordered_landscape');
var counter_Title = 1;
var title = document.title;

$page.on('submit', function (event) {
	event.preventDefault();
	var $li = $('<li>');
	var $place_Name = $('<div id="place_Name">').html($place.val());
	var $continent_Name = $('<div id="continent_Name">').html('(' +  $continent.val() + ')');
	var $landscape = $('[name="landscape"]:checked');
	
	$li.append($place_Name).append($continent_Name).addClass($landscape.val());
	$ordered_landscape.append($li);
	$('input[type="text"]').val(''); 	//Resetting inputs//
    $('input[type="radio"]').prop('checked', false);
	
	// Counter delegation //
	
	event.target.value=counter_Title++;
	
	var updated_Title = title + ' (' + event.target.value + ') ';
    document.title = updated_Title;
	if(event.target.value == 1)
		document.getElementById("destination_Count").innerHTML="Successfully added " + event.target.value + " destination";
	else if(event.target.value > 1)
		document.getElementById("destination_Count").innerHTML="Successfully added " + event.target.value + " destinations";
});