$(document).ready(function() {
	/**
	 * Obtenemos todas las personas para mostrarlas en una tabla html
	 * 
     */
	$.ajax({
		url: "http://localhost:8080/api/person/all",
		//url: "https://java-spring-1.herokuapp.com/api/person/all",
        type: "GET",
        dataType: "json",
        success: function (data) {
        	//alert("Datos "+ data.id);
        	//
        	$.each(data, function(i,item){
        		$('#table-person tbody').append('<tr><td for="dui">' + data[i].id + '</td><td for="email">' + data[i].email + '</td><td for="name">' + data[i].name + '</td><td for="city">' + data[i].city.name + '</td><td><a href="#" id="select">Modificar</a></td></tr>');
    		});
          },
          error: function (xhr, status) {
              alert('Disculpe, existió un problema');
          },

	});

    



});