$(function () {

    $("#btnCambiar").click(function(){
       
        var boton = $("<input>").val("Nuevo Boton").attr("type","button").addClass("azul").css("margin","100px");
        $("body").append(boton);
        // $("body").prepend(boton);
    })    
    $("#btnEnviar").click(function(){
        $("input:last").toggleClass("azul");
        console.log($("input:last").css("margin"));
    })    
});