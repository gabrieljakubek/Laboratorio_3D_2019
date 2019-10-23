$(function () {

    $("p:last").hide(5000, function () {
        $("p:last").show(5000);
    });

    $("#btnEnviar").toggle(4000, function () {
        $("#btnEnviar").toggle(4000);
    })

    $("#btnCambiar").click(function () {
        $("#btnCambiar").animate({
            height: "+=50px",
            width: "+=50px"

        },2000).animate({
            height: "-=50px",
            width: "-=50px"
    
        },2000);
    })
});