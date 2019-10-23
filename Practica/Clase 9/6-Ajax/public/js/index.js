$(function(){
    $("#btnCargar").click(function(){
        var impresion_consola = function (){
            console.log(datos);
        }
        cargarDatos(impresion_consola);
    })

    $("#btnAlta").click(function(){
        var anuncio = new Anuncio ("Alfa","Omega","Beta",325678,5,4,3);
        guardarDatos(anuncio);
    })
    $("#btnBaja").click(function(){
        var id = 9;
        guardarDatos(anuncio);
    })


})