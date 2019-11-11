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


//////////////////////LLAMADAS LOCAL STORAGE/////////////////////////////////

function cargarDatos(primer) {
    let anuncios = JSON.parse(localStorage.getItem("anuncios"));
    listado = anuncios;
    if (primer) {
        ocultarSpinner();
        crearBoxes(listado, "checkBoxes");
        filtrarTabla();
    } else {
        ocultarSpinner();
        filtrarTabla();
    }

}

function altaAnuncio(anuncio) {

}

function modificarAnuncio(anuncio) {

}

function bajaAnuncio(id) {

}