/*global $ */

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