var topicId = getParameterByName('topic_id');

var api = {
    url : 'http://examen-laboratoria-sprint-5.herokuapp.com/topics/'+topicId+'
}
var apiRes = {
    url : 'http://examen-laboratoria-sprint-5.herokuapp.com/topics/'+topicId+'/responses'
}
superagent




//Solo por propositos de debug
if(topicId){
  alert("El topic ID es:"+topicId);
}
var $respuestas = $("#nuevaRespuesta");
var plantillaResp = '<div class=" container respuesta">'+
            '<p class="mng-respuesta">__mensajeRespuesta__ <span> Por - __autorResp__</span></p>'+
        '</div>';

var crearTemaNuevo = function (tema) {
    var plantillaFinalResp = "";
    
   

    plantillaFinalNuevo += plantillaResp.replace("__mensajeRespuesta__", $mensajeResp)
        .replace("__autorResp__", $autorResp);

    $respuestas.prepend(plantillaFinalResp);

};

var agregarTema = function (e) {
    e.preventDefault();

    $.post(api.url, {

        content: $mensajeResp,
        author_name: $autorResp

    }, function (tema) {
        crearTemaNuevo(tema);
        $('#modal1').modal('close');
    });
};