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


function nextId(data) {
    let anuncios = JSON.parse(data)
    id = Math.max.apply(null, anuncios.map(function(anuncio) {
        return anuncio.id;
    }));
    return id + 1;
}

//////////////////////LLAMADAS LOCAL STORAGE/////////////////////////////////

function idIncrement(data) {
    let lastid = localStorage.getItem("lastid");
    if (lastid == null) {
        if (data == null || data == "" || data == "[]") {
            localStorage.setItem("lastid", 1);
            return 1;
        } else {
            let id = nextId(data)
            localStorage.setItem("lastid", id);
            return id;
        }
    } else {
        let id = parseInt(lastid) + 1;
        localStorage.setItem("lastid", id);
        return id;
    }
}

function cargarDatos(primer) {
    let anuncios = localStorage.getItem("anuncios");
    if (anuncios == null || anuncios == "" || anuncios == "[]") {
        listado.push(new Anuncio("", "", "", "", "", "", "", ""));
        ocultarSpinner();
        crearBoxes(listado, "checkBoxes");
        filtrarTabla();
    } else {
        //listado = JSON.parse(anuncios);
        listado = [];
        lista = JSON.parse(anuncios);
        lista.forEach(element => {
            listado.push(new Anuncio(element['_id'], element['_titulo'], element['_transaccion'], element['_descripcion'], element['_precio'], element['_num_wc'], element['_num_estacionamiento'], element['_num_dormitorio']))
        });
        if (primer) {
            ocultarSpinner();
            crearBoxes(listado, "checkBoxes");
            filtrarTabla();
        } else {
            ocultarSpinner();
            filtrarTabla();
        }
    }
    /* Anuncio.generarListado(listado);
    console.log(listado); */
}

function guardarLS(listado) {
    localStorage.setItem("anuncios", JSON.stringify(listado));
}

function altaAnuncio(anuncio) {
    let anuncios = localStorage.getItem("anuncios");
    let id = idIncrement(anuncios);
    anuncio.id = id;
    if (anuncios == null || anuncios == "" || anuncios == "[]") {
        listado = [];
        listado.push(anuncio);
        guardarLS(listado);
        filtrarTabla();
        limpiarForm();
    } else {
        listado.push(anuncio);
        guardarLS(listado);
        filtrarTabla();
        limpiarForm();
    }
}

function modificarAnuncio(anuncio) {
    for (let i = 0; i < listado.length; i++) {
        if (listado[i].id == anuncio.id) {
            listado.splice(i, 1, anuncio);
            guardarLS(listado);
            filtrarTabla();
            limpiarForm();
            break;
        }
    }
}

function bajaAnuncio() {
    for (let i = 0; i < listado.length; i++) {
        if (listado[i].id == $("#id").val()) {
            listado.splice(i, 1);
            guardarLS(listado);
            filtrarTabla();
            limpiarForm();
            break;
        }
    }
}