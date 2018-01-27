/*global $ */
/*Level2- Class Assignment
$('#cities').submit(function(event) {
     event.preventDefault();
   $.get('/cities', function(cities) {//using route to make the AJAX call.
       $("#selection").empty();
       for (var i=0;i<cities.length;i++) {
           var option = document.createElement('option');//create a dropdown
           option.innerHTML = cities[i];//populate the dropdown
			$('#selection').append(option);//append for each run
       }
       
   });
});
*/

//Level3 Class assignment.
$('#city').click(function(event) {
    var cityCount = $('#NumberCities').val();
    console.log(cityCount);
     event.preventDefault();
   $.get('/cities?limit=' + cityCount, function(cities) {//using route to make the AJAX call.
       $("#numberofCities").empty();
       for (var i=0;i<cities.length;i++) {
           var list = document.createElement('Li');//create a List item
           list.innerHTML = cities[i];//populate the Li
			$('#numberofCities').append(list);//append for each run
       }
     });  
});


