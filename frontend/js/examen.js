$(document).ready(function() {
  $.ajax({
      url: "http://localhost:8080/api/examen/all",
      //url: "https://java-spring-1.herokuapp.com/api/person/all",
          type: "GET",
          dataType: "json",
          success: function (data) {
            //alert("Datos "+ data.id);
            //
            $.each(data, function(i,item){
              $('#table-examen tbody').append('<tr><td for="dui">' + data[i].id + '</td>"'+
                '"<td for="email">' + data[i].tema + '</td><td>'+
                '<a href="form_examen_update.html?id='+data[i].id+'">Modificar</a></td></tr>');


          });
            },
            error: function (xhr, status) {
                alert('Disculpe, existió un problema');
            },

    });
  /**
   * Llamando un servicio rest (POST) para insertar un usuario, con su id y nombre
   * @param  {[type]} "statusUser":{ "id":   "'+id_status+'"}}',                       dataType : 'json',                              success: function(resultdata){            alert("Register inserted "+resultdata);          },          error: function(e){            alert("Hay algun error" [description]
   */
  $("#btn-examen").click(function() {
    
    var tema = $("#tema").val();
    // var name = $("#name").val();
    // var password = $("#password").val();

    // var id_city = $("#user-city").val();
    // var id_status = 1;
    
    $.ajax({
          url: "http://localhost:8080/api/examen/add",
          //url: "http://localhost:8080/api/person/add",
          
          type: "POST",
          contentType : "application/json",
          //Tener cuidado con las malditas llaves del Json
          data: '{"tema": "'+tema+'"}',
          //Al no retornar un json no necesitamos este valor
          //dataType : 'json',          
          
          success: function(){
            alert("Register inserted");
            //window.location.href = "http://localhost:8080/login";
            window.location.href = "examenes.html";
            
          }
        
    });  
  
  });

  $("#btn-examen-update").click(function() {

    var tema = $("#tema").val();
    var id = $("#id").val();

    $.ajax({
          url: "http://localhost:8080/api/examen/update/"+id,          
          type: "PUT",
          contentType : "application/json",
          //Tener cuidado con las malditas llaves del Json
          data: '{"tema": "'+tema+'"}',
          //Al no retornar un json no necesitamos este valor
          //dataType : 'json',          
          
          success: function(){
            alert("Update register");
            //window.location.href = "http://localhost:8080/login";
            window.location.href = "examenes.html";
            
          }
        
    });  
  
  });

  $.ajax({
      type: "GET",
      url: "http://localhost:8080/api/examen/all",
      //url: 'http://localhost:8080/api/city/all',

      dataType: "json",
      success: function(data){
        $.each(data,function(key, registro) {
          $("#examen-lista").append('<option value='+registro.id+'>'+registro.tema+'</option>');
        });        
        },
      error: function(data) {
        alert('error');
        }
      });

});