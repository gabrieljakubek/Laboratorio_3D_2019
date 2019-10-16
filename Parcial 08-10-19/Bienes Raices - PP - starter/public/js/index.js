//ATRIBUTOS DE ANUNCIO
//id,titulo,transaccion,descripcion,precio,num_wc,num_estacionamiento,num_dormitorio;
let frm;
window.addEventListener("load", inicializarManejadores);

function inicializarManejadores() {
    frm = document.forms[0];
    limpiarForm();
    document.getElementById("limpiar").addEventListener("click", limpiarForm);
    frm.addEventListener('submit', guardar);
    document.getElementById("eliminar").addEventListener("click", bajaAnuncio);
    document.getElementById("eliminar").hidden = true;
    cargarDatos();
}


function limpiarForm() {
    let inputs = document.getElementsByTagName("input");
    for (let index = 0; index < inputs.length; index++) {
        inputs[index].value = "";
        if (inputs[index].checked) {
            inputs[index].checked = false;
        }
    }
    document.getElementById("id").value = 0;
    document.getElementById("rdoAlquiler").value = "alquiler";
    document.getElementById("rdoVenta").value = "venta";
    document.getElementById("eliminar").hidden = true;
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
                precio = `$${elemento.value}`;
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
    for (elemento of frm.elements) {
        switch (elemento.name) {
            case "id":
                elemento.value = tds[0].innerText;
                break;
            case "txtTitulo":
                elemento.value = tds[1].innerText;
                break;
            case "transaccion":
                if (elemento.value == tds[2].innerHTML.toLowerCase()) {
                    elemento.checked = true;
                }
                break;
            case "txtDescripcion":
                elemento.value = tds[3].innerText;
                break;
            case "txtPrecio":
                elemento.value = tds[4].innerText;
                break;
            case "numAutos":
                elemento.value = tds[5].innerText;
                break;
            case "numBaños":
                elemento.value = tds[6].innerText;
                break;
            case "numDormitorios":
                elemento.value = tds[7].innerText;
                break;
        }
    }
    document.getElementById("eliminar").hidden = false;
}
//////////////////////LLAMADAS AJAX/////////////////////////////////

function cargarDatos() {
    let xhr = new XMLHttpRequest();
    let spinner = document.getElementById("spinner");
    let tabla = document.getElementById("tabla");
    xhr.onreadystatechange = function() {
        //validar readyState y status
        //si todo está OK, parseo la respuesta(responseText) y genero el array de anuncios
        if (xhr.readyState == 4) {
            spinner.innerHTML = "";
            spinner.style.display = "none";
            if (xhr.status == 200) {
                let json = JSON.parse(xhr.responseText);
                tabla.style.visibility = "visible";
                tabla.innerHTML = "";
                tabla.appendChild(crearTabla(json.data));
                let tds = document.getElementsByTagName("td");
                for (let i = 0; i < tds.length; i++) {
                    tds[i].addEventListener("click", cargarAnuncio);
                }
            } else {
                console.log(`Error: ${xhr.status} - ${xhr.statusText}`);
            }

        } else {
            if (spinner.style.display == "none") {
                spinner.style.display = "";
            }
            document.getElementById("tabla").style.visibility = "hidden";
            spinner.innerHTML = '<img src="./img/831.gif" alt="spinner"/>';
        }
    };
    //Envio la peticion get
    let url = "http://localhost:3000/traerAnuncios";
    xhr.open("GET", url, true);
    xhr.send();
}

function altaAnuncio(anuncio) {
    let xhr = new XMLHttpRequest();
    let tabla = document.getElementById("tabla");
    let spinner = document.getElementById("spinner");
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            spinner.innerHTML = "";
            spinner.style.display = "none";
            if (xhr.status == 200) {
                tabla.innerHTML = "";
                cargarDatos();
                limpiarForm();
            }
        } else {
            if (spinner.style.display == "none") {
                spinner.style.display = "";
            }
            spinner.innerHTML = '<img src="./img/831.gif" alt="spinner"/>';
        }
    };
    let url = "http://localhost:3000/altaAnuncio";
    xhr.open("POST", url, true);
    xhr.setRequestHeader('Content-type', 'Application/json');
    xhr.send(JSON.stringify(anuncio));
}

function modificarAnuncio(anuncio) {
    let xhr = new XMLHttpRequest();
    let tabla = document.getElementById("tabla");
    let spinner = document.getElementById("spinner");
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            spinner.innerHTML = "";
            spinner.style.display = "none";
            if (xhr.status == 200) {
                tabla.innerHTML = "";
                cargarDatos();
                limpiarForm();
            }
        } else {
            if (spinner.style.display == "none") {
                spinner.style.display = "";
            }
            spinner.innerHTML = '<img src="./img/831.gif" alt="spinner"/>';
        }
    };
    let url = "http://localhost:3000/modificarAnuncio";
    xhr.open("POST", url, true);
    xhr.setRequestHeader('Content-type', 'Application/json');
    xhr.send(JSON.stringify(anuncio));
}

function bajaAnuncio() {
    let xhr = new XMLHttpRequest();
    let tabla = document.getElementById("tabla");
    let spinner = document.getElementById("spinner");
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            spinner.innerHTML = "";
            spinner.style.display = "none";
            if (xhr.status == 200) {
                tabla.innerHTML = "";
                cargarDatos();
                limpiarForm();
            }
        } else {
            if (spinner.style.display == "none") {
                spinner.style.display = "";
            }
            spinner.innerHTML = '<img src="./img/831.gif" alt="spinner"/>';
        }
    };
    let url = "http://localhost:3000/bajaAnuncio";
    xhr.open("POST", url, true);
    xhr.setRequestHeader('Content-type', 'Application/x-www-form-urlencoded');
    xhr.send(`id=${document.getElementById("id").value}`);
}