//ATRIBUTOS DE ANUNCIO
//id,titulo,transaccion,descripcion,precio,num_wc,num_estacionamiento,num_dormitorio;
let frm;
var listado = [];
window.addEventListener("load", inicializarManejadores);

function inicializarManejadores() {
    frm = document.forms[0];
    limpiarForm();
    document.getElementById("limpiar").addEventListener("click", limpiarForm);
    frm.addEventListener('submit', guardar);
    document.getElementById("eliminar").addEventListener("click", bajaAnuncio);
    document.getElementById("selTransaccion").addEventListener('change', filtrarTabla);
    $("#eliminar").hide();
    cargarDatos(true);
}


function limpiarForm() {
    frm = document.forms[0];
    for (elemento of frm.elements) {
        switch (elemento.name) {
            case "id":
                elemento.value = 0;
                break;
            case "txtTitulo":
                elemento.value = "";
                break;
            case "transaccion":
                if (elemento.checked) {
                    elemento.checked = false;
                }
                break;
            case "txtDescripcion":
                elemento.value = "";
                break;
            case "txtPrecio":
                elemento.value = "";
                break;
            case "numAutos":
                elemento.value = "";
                break;
            case "numBaños":
                elemento.value = "";
                break;
            case "numDormitorios":
                elemento.value = "";
                break;
        }
    }
    $("#eliminar").hide();
}

function crearAnuncio(frm) {
    let id;
    let titulo;
    let transaccion;
    let descripcion;
    let precio;
    let num_wc;
    let num_estacionamiento;
    let num_dormitorio;
    for (elemento of frm.elements) {
        switch (elemento.name) {
            case "id":
                id = elemento.value;
                break;
            case "txtTitulo":
                titulo = elemento.value;
                break;
            case "transaccion":
                if (elemento.checked) {
                    transaccion = elemento.value;
                }
                break;
            case "txtDescripcion":
                descripcion = elemento.value;
                break;
            case "txtPrecio":
                precio = elemento.value;
                break;
            case "numAutos":
                num_estacionamiento = elemento.value;
                break;
            case "numBaños":
                num_wc = elemento.value;
                break;
            case "numDormitorios":
                num_dormitorio = elemento.value;
                break;
        }
    }
    return new Anuncio(id, titulo, transaccion, descripcion, precio, num_wc, num_estacionamiento, num_dormitorio);
}

function guardar(e) {
    e.preventDefault();
    let anuncio = crearAnuncio(e.target);
    if (anuncio.id != 0) {
        modificarAnuncio(anuncio);
    } else {
        altaAnuncio(anuncio);
    }
}

function cargarAnuncio(e) {
    let tr = e.target.parentElement;
    let tds = tr.childNodes;
    filtro = listado.filter(element => element.id == tds[0].innerText);
    filtro.forEach(dato => {
        console.log(dato)
        for (elemento of frm.elements) {
            switch (elemento.name) {
                case "id":
                    elemento.value = dato.id;
                    break;
                case "txtTitulo":
                    elemento.value = dato.titulo;
                    break;
                case "transaccion":
                    if (elemento.value == dato.transaccion.toLowerCase()) {
                        elemento.checked = true;
                    }
                    break;
                case "txtDescripcion":
                    elemento.value = dato.descripcion;
                    break;
                case "txtPrecio":
                    elemento.value = dato.precio;
                    break;
                case "numAutos":
                    elemento.value = dato.num_estacionamiento;
                    break;
                case "numBaños":
                    elemento.value = dato.num_wc;
                    break;
                case "numDormitorios":
                    elemento.value = dato.num_dormitorio;
                    break;
            }
        }
    });
    $("#eliminar").show();
}

function cargarTabla(datos) {
    let tabla = $("#tabla");
    tabla.show();
    tabla.html("");
    tabla.append(crearTabla(datos));
    let tds = document.getElementsByTagName("td");
    for (let i = 0; i < tds.length; i++) {
        tds[i].addEventListener("click", cargarAnuncio);
    };
}

function filtrarTabla() {
    let opciones = ['id'];
    $('.box input:checked').each(function() {
        if ($(this).prop('checked') == true) {
            opciones.push($(this).val());
        }
    })
    let selOpcion = document.getElementById('selTransaccion').value;
    if (selOpcion == 'todas') {
        cargarTabla(listado.map(function(dato) {
            let retorno = new Object();
            opciones.forEach(elemento => {
                retorno[elemento] = dato[elemento];
            });
            return retorno;
        }))
    } else {
        cargarTabla(listado.filter(dato => dato.transaccion.toLowerCase() == selOpcion)
            .map(function(dato) {
                let retorno = new Object();
                opciones.forEach(elemento => {
                    retorno[elemento] = dato[elemento];
                });
                return retorno;
            }))
    }

}