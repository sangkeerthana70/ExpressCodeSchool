/*global $ */
<<<<<<< HEAD
/*Level2- Class Assignment
=======
/*Level2 Class assignment
>>>>>>> Level4
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
<<<<<<< HEAD
});
*/

//Level3 Class assignment.
=======
});*/

//Level3 Class assignment.
/*
>>>>>>> Level4
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
<<<<<<< HEAD


=======
*/
// level 4

function appendCity(cities) {
   for (var i=0;i<cities.length;i++) {
    var list = document.createElement('Li');//create a List item
    var city = cities[i];
//    list.innerHTML = '<a href = "/cities/' + cities[i] + '">'+cities[i]+'</a>' ;
     list.innerHTML = '<a href="#" city-name="'+city+'"><img src="delete.jpg" height="15" width="22.5"></a>' +'<a href = "/cities/' + cities[i] + '">'+cities[i]+'</a>';

    $('#numberofCities').append(list);//append for each run
   }
}

$('#cities').submit(function(event) {
    event.preventDefault();
    var cityCount = $('#NumberCities').val();
    //console.log(cityCount);
     event.preventDefault();
   $.get('/cities?limit=' + cityCount, function(cities) {//using route to make the AJAX call.
       $("#numberofCities").empty();
       appendCity(cities);
     });  
});

$('#add').submit(function(event) {
    event.preventDefault();
    var city = $('#iCity').val();
    var state = $('#iState').val();
    if (city == "") {
        alert("City cannot be empty","OK");
        return;
    }
    if (state == "") {
        alert("State cannot be empty","OK");
        return;
    }
    if (city.length < 4) {
        alert("City should have atleast 4 characters","OK");
        return;
    }

    if (state.length < 2) {
        alert("State should have atleast 2 characters","OK");
        return;
    }
    
    var form = $(this);
    var cityData = form.serialize();//generates key value pair from the form input
    //console.log(cityData);
    $.ajax({
       type:'POST',url:'/addCity',data:cityData
    }).done(function(newCity){
        var list = document.createElement('Li');//create a List item
        list.innerHTML = newCity;//populate the Li
       appendCity([newCity]);
       form.trigger('reset');
    });
});

$('#numberofCities').on('click','a[city-name]',(function(event) {
    if (!confirm("Are you sure you want to delete?")){
        return false;
    }
    var target = $(event.currentTarget);
    console.log("city to be deleted is" + target.data('city-name'));
    $.ajax({
        type:'DELETE',url:'/cities/'+target.data('city-name')
    }).done(function(){
        target.parent('li').remove();
    });
})
);
>>>>>>> Level4
