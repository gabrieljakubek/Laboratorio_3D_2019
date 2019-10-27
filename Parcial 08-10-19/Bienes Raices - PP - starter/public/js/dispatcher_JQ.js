function mostrarSpinner() {
    let spinner = $("#spinner");
    let tabla = $('#tabla');
    spinner.show();
    tabla.hide();
    spinner.html('<img src="./img/831.gif" alt="spinner"/>');
}

function ocultarSpinner() {
    let spinner = $("#spinner");
    spinner.hide();
    spinner.html('');
}


//////////////////////LLAMADAS JQ.AJAX/////////////////////////////////

function cargarDatos(boolean) {
    $.ajax({
            method: 'GET',
            url: 'http://localhost:3000/traerAnuncios',
            datatype: 'json',
            beforeSend: mostrarSpinner()

        })
        .done(function(d) {
            if (boolean) {
                ocultarSpinner();
                listado = d.data;
                crearBoxes(listado, "checkBoxes");
                cargarTabla(listado);
            } else {
                ocultarSpinner();
                listado = d.data;
                cargarTabla(listado);
            }
        }).fail(function(d, status, jqXht) {
            console.log(`Error: ${status} - ${jqXht.statusText}`);
        });
}

function altaAnuncio(anuncio) {
    $.ajax({
        method: 'POST',
        url: 'http://localhost:3000/altaAnuncio',
        data: anuncio,
        beforeSend: mostrarSpinner()
    }).done(function() {
        cargarDatos(false);
    }).fail(function(d, status, jqXht) {
        console.log(`Error: ${status} - ${jqXht.statusText}`);
    });
}

function modificarAnuncio(anuncio) {
    $.ajax({
        method: 'POST',
        url: 'http://localhost:3000/modificarAnuncio',
        data: anuncio,
        beforeSend: mostrarSpinner()
    }).done(function(d) {
        cargarDatos(false);
    }).fail(function(d, status, jqXht) {
        console.log(`Error: ${status} - ${jqXht.statusText}`);
    });
}

function bajaAnuncio() {
    $.ajax({
        method: 'POST',
        url: 'http://localhost:3000/bajaAnuncio',
        data: `id=${$('#id').val()}`,
        beforeSend: mostrarSpinner()
    }).done(function(d) {
        // ocultarSpinner();
        // listado = d.data;
        // cargarTabla(listado);
        cargarDatos(false);
    }).fail(function(d, status, jqXht) {
        console.log(`Error: ${status} - ${jqXht.statusText}`);
    });
}

//////////////////////LLAMADAS AJAX/////////////////////////////////

//function cargarDatos() {
//     let xhr = new XMLHttpRequest();
//     let spinner = document.getElementById("spinner");
//     let boxes = document.getElementById("checkBoxes");
//     xhr.onreadystatechange = function() {
//         //validar readyState y status
//         //si todo está OK, parseo la respuesta(responseText) y genero el array de anuncios
//         if (xhr.readyState == 4) {
//             spinner.innerHTML = "";
//             spinner.style.display = "none";
//             if (xhr.status == 200) {
//                 let json = JSON.parse(xhr.responseText);
//                 listado = json.data;
//                 crearBoxes(listado, "checkBoxes");
//                 cargarTabla(listado);
//             } else {
//                 console.log(`Error: ${xhr.status} - ${xhr.statusText}`);
//             }
//         }  else {
//             if (spinner.style.display == "none") {
//                 spinner.style.display = "";
//             }
//             document.getElementById("tabla").style.visibility = "hidden";
//             spinner.innerHTML = '<img src="./img/831.gif" alt="spinner"/>';
//         }
//     };
//     //Envio la peticion get
//     let url = "http://localhost:3000/traerAnuncios";
//     xhr.open("GET", url, true);
//     xhr.send();
// }
// function altaAnuncio(anuncio) {
//     let xhr = new XMLHttpRequest();
//     let tabla = document.getElementById("tabla");
//     let spinner = document.getElementById("spinner");
//     xhr.onreadystatechange = function() {
//         if (xhr.readyState == 4) {
//             spinner.innerHTML = "";
//             spinner.style.display = "none";
//             if (xhr.status == 200) {
//                 tabla.innerHTML = "";
//                 cargarDatos();
//                 limpiarForm();
//             }
//         } else {
//             if (spinner.style.display == "none") {
//                 spinner.style.display = "";
//             }
//             spinner.innerHTML = '<img src="./img/831.gif" alt="spinner"/>';
//         }
//     };
//     let url = "http://localhost:3000/altaAnuncio";
//     xhr.open("POST", url, true);
//     xhr.setRequestHeader('Content-type', 'Application/json');
//     xhr.send(JSON.stringify(anuncio));
// }
// function modificarAnuncio(anuncio) {
//     let xhr = new XMLHttpRequest();
//     let tabla = document.getElementById("tabla");
//     let spinner = document.getElementById("spinner");
//     xhr.onreadystatechange = function() {
//         if (xhr.readyState == 4) {
//             spinner.innerHTML = "";
//             spinner.style.display = "none";
//             if (xhr.status == 200) {
//                 tabla.innerHTML = "";
//                 cargarDatos();
//                 limpiarForm();
//             }
//         } else {
//             if (spinner.style.display == "none") {
//                 spinner.style.display = "";
//             }
//             spinner.innerHTML = '<img src="./img/831.gif" alt="spinner"/>';
//         }
//     };
//     let url = "http://localhost:3000/modificarAnuncio";
//     xhr.open("POST", url, true);
//     xhr.setRequestHeader('Content-type', 'Application/json');
//     xhr.send(JSON.stringify(anuncio));
// }
// function bajaAnuncio() {
//     let xhr = new XMLHttpRequest();
//     let tabla = document.getElementById("tabla");
//     let spinner = document.getElementById("spinner");
//     xhr.onreadystatechange = function() {
//         if (xhr.readyState == 4) {
//             spinner.innerHTML = "";
//             spinner.style.display = "none";
//             if (xhr.status == 200) {
//                 tabla.innerHTML = "";
//                 cargarDatos();
//                 limpiarForm();
//             }
//         } else {
//             if (spinner.style.display == "none") {
//                 spinner.style.display = "";
//             }
//             spinner.innerHTML = '<img src="./img/831.gif" alt="spinner"/>';
//         }
//     };
//     let url = "http://localhost:3000/bajaAnuncio";
//     xhr.open("POST", url, true);
//     xhr.setRequestHeader('Content-type', 'Application/x-www-form-urlencoded');
//     xhr.send(`id=${document.getElementById("id").value}`);
// }