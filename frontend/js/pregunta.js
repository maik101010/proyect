$(document).ready(function() {
  $.ajax({
      url: "http://localhost:8080/api/pregunta/all",
      //url: "https://java-spring-1.herokuapp.com/api/person/all",
          type: "GET",
          dataType: "json",
          success: function (data) {
            //alert("Datos "+ data.id);
            //
            $.each(data, function(i,item){
              $('#table-pregunta tbody').append('<tr><td for="dui">' + data[i].id + '</td><td for="email">' + data[i].consigna + '</td><td for="puntaje">' + data[i].puntaje + '</td><td for="email">' + data[i].respuesta + '</td><td for="email">' + data[i].examen.tema + '</td><td><a href="form_pregunta_update.html?id='+data[i].id+'" id="select">Modificar</a></td></tr>');
          });
            },
            error: function (xhr, status) {
                alert('Disculpe, existió un problema');
            },

    });

  /**
   * Registramos la pregunta
   * @param  {[type]} )               {                                        var email [description]
   * @param  {[type]} "statusUser":{ "id":         "'+id_status+'"}}',                                                             success: function(){            alert("Register inserted" [description]
   * @return
   */
  $("#btn-pregunta").click(function() {
    
    var consigna = $("#consigna").val();
    var respuesta = $("#respuesta").val();
    var puntaje = $("#puntaje").val();

    var idExamen = $("#examen-lista").val();
    
    
    $.ajax({
          url: "http://localhost:8080/api/pregunta/add",
          
          type: "POST",
          contentType : "application/json",
          //Tener cuidado con las malditas llaves del Json
          data: '{"consigna": "'+consigna+'", "puntaje": "'+puntaje+'","respuesta": "'+respuesta+'","examen": {"id": "'+idExamen+'"}}',
          //Al no retornar un json no necesitamos este valor
          //dataType : 'json',          
          
          success: function(){
            alert("Register inserted");
            //window.location.href = "http://localhost:8080/login";
            window.location.href = "pregunta.html";
            
          }
        
    });

  
  
  });

});