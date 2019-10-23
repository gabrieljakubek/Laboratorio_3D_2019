$(function () {
    $(function () {
        $("#btnEnviar").click(
            function () {
                console.log("Se hizo click!");
            }
        )

        // $("p.rojo").hover(function(){
        //     console.log("hola");
        // }, function(){
        //     console.log("chau");
        // }
        // )

        // $("p").hover(function () {
        //     console.log("hola");
        // }, function () {
        //     console.log("chau");
        // }
        // )

        // $("p.rojo").on("click",function(){
        //     alert("Hola!");
        // })

        $("p.rojo").on({
            "click": function () {
                console.log("realizaste click")
            }, "mouseenter": function () {
                console.log("hola")
            }, "mouseleave": function () {
                console.log("chau");
            }
        })

        $("p.rojo").off("click");
    });
});