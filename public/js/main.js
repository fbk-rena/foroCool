var api = {
    url: "http://examen-laboratoria-sprint-5.herokuapp.com/topics"
};
var $temasListados = $("#lista-temas");


var cargarPagina = function () {
    cargarTemas();
    $('.modal').modal();
    $("#btn-agregar-form").click(agregarTema);
};

var cargarTemas = function () {
    $.getJSON(api.url, function (temas) {
        temas.forEach(crearTema);
    });
};
/*plantilla*/
var plantilla = '<tr>' +
    '<td>__tema__</td>' +
    '<td>Por - __autor__</td>' +
    '<td> __numero__ han respondido</td>' +
    '</tr>';

var crearTema = function (tema){
    var plantillaFinal = "";
    
    plantillaFinal += plantilla.replace("__tema__", tema.content)
    .replace("__autor__", tema.author_name)
    .replace("__numero__", tema.responses_count);
    
    $temasListados.append(plantillaFinal);
};

var plantillaNuevo = '<tr>' +
    '<td>__tema__</td>' +
    '<td>Por - __autor__</td>' +
    '<td><span class="new badge"></td>' +
    '</tr>';

var crearTemaNuevo = function (tema){
    var plantillaFinalNuevo = "";
    
    plantillaFinalNuevo += plantillaNuevo.replace("__tema__", tema.content)
    .replace("__autor__", tema.author_name)
    .replace("__numero__", tema.responses_count);
    
    $temasListados.append(plantillaFinalNuevo);
};



    
var agregarTema = function (e){
    e.preventDefault();
    
    var tema = $("#nombre-tema").val();
    var autor = $("#autor").val();
    $.post(api.url, {
        
        content: tema, 
        author_name: autor, 
        
    }, function (tema){
        crearTemaNuevo(tema);
        $('#modal1').modal('close');
    });
}
$(document).ready(cargarPagina);
