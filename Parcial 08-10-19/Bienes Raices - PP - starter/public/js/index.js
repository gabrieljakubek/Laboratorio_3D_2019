//ATRIBUTOS DE ANUNCIO
//id,titulo,transaccion,descripcion,precio,num_wc,num_estacionamiento,num_dormitorio;

//////////////////////LLAMADAS AJAX/////////////////////////////////

function cargarDatos() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        //validar readyState y status
        //si todo está OK, parseo la respuesta(responseText) y genero el array de anuncios
        if (xhr.readyState == 4 && xhr.status == 200) {
            setTimeout(() => {
                document.getElementById("tabla").appendChild(response.send({"message" : "Carga Exitosa", "data":array}))
            }, 5000);
        }
    };
    //Envio la peticion get
    var url = "http://localhost:3000/traerAnuncios";
    xhr.open("GET", url, true);
    xhr.send();
}