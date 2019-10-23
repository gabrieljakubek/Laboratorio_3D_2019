$(function () {
    $("#btnEnviar").click(function(){
        console.log($("p.rojo").text());
        console.log($("p.rojo").html());
        console.log($("#btnEnviar").val());
        console.log($("#btnEnviar").attr("id"))
    })

    $("#btnCambiar").click(function(){
        $("p.rojo").text("Hola Cristian!")
        $("p:last").html("<strong>Hola Alejandro!</strong>")
        $("p:last").html(function(i,prevHtml){
            return prevHtml + " Agrego mas Html";
        })
        $("#btnCambiar").val("Nuevo boton!")
        $("#btnCambiar").attr("class","azul")
        $("#btnEnviar").attr({
            "class":"azul",
            "miAtributo":"miValor"
        })
        $("#btnEnviar").attr("class",function(i,prevValue){
            console.log("Clase anterior: " + prevValue);
            return "rojo";
        })

        var boton = $("<input>").val("Nuevo Boton").attr("type","button");
        $("#btnCambiar").before(boton);
        $("body").append(boton);
        $("body").prepend(boton);
    })    
});