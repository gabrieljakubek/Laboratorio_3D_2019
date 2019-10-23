var datos = [];
function cargarDatos(manejador) {
    datos = []
    $.getJSON("http://localhost:3000/traerAnuncios", function (resp, status) {
        for (let i = 0; i < resp.data.length; i++) {
            datos.push(new Anuncio(resp.data[i].id,resp.data[i].titulo, resp.data[i].transaccion,resp.data[i].descripcion,resp.data[i].precio, resp.data[i].num_wc, resp.data[i].num_estacionamiento, resp.data[i].num_dormitorio));
        }
        if(manejador)
        {
            manejador();
        }
    })
}
function guardarDatos(dato,cb){
    $.post("http://localhost:3000/altaAnuncio",dato,function(data,status){
        // if(cb){
        //     cb();
        // }
    })
}

function bajaDatos(id){
    $.post("http://localhost:3000/bajaAnuncio",id,function(data,status){})
}