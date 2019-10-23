$(function () {
    //seleccion por ID
    console.log($("#btnEnviar"));

    //seleccion por Tag

    console.log($("p"));

    //seleccion por clase

    console.log($(".rojo"));

    //seleccion por pseudoclase
    console.log($("p:last"));

    //seleccion por atributo

    console.log($("p[class=rojo]"));
});