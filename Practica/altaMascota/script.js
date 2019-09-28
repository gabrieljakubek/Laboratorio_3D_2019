var frm;
window.addEventListener("load", inicializarManejadores);

function inicializarManejadores() {
    frm = document.forms[0];
    frm.addEventListener("submit", manejadorSubmit);
    // console.log(document.forms[0]);
    // console.log(document.getElementsByTagName("form")[0]);
    // console.log(document.getElementsByName("frm"));
    // console.log(document.getElementById("frmAlta"));
}

function manejadorSubmit(e) {
    e.preventDefault();
    let nuevaMascota = obtenerMascota(e.target);
    mascotas.push(nuevaMascota);
    document.getElementById("divTabla").innerHTML = "";
    document.getElementById("divTabla").appendChild(crearTabla(mascotas));
    console.table(mascotas);
}

function obtenerMascota(frm) {
    let nombre;
    let edad;
    let tipo;
    let vacunado;
    let desparacitado;
    let castrado;
    let alimento;
    for (elemento of frm.elements) {
        switch (elemento.name) {
            case "nombre":
                nombre = elemento.value;
                break;
            case "edad":
                edad = parseInt(elemento.value);
                break;
            case "tipo":
                if (elemento.checked) {
                    tipo = elemento.value;
                }
                break;
            case "castrado":
                castrado = elemento.checked;
                break;
            case "vacunado":
                vacunado = elemento.checked;
                break;
            case "desparasitado":
                desparacitado = elemento.checked;
                break;
            case "alimento":
                alimento = elemento.value;
                break;
        }
        //console.log(elemento)
    }
    return new Mascota(nombre, edad, tipo, castrado, vacunado, desparacitado, alimento);
}
/*function operar(a, b, callBack) {
    return callBack(a, b);
}
console.log("La respuesta es " + operar(4, 5, restar));

function sumar(x, y) {
    return x + y;
}

function restar(x, y) {
    return x - y;
}

function multiplicar(x, y) {
    return x * y;
}

function dividir(x, y) {
    let z;
    if (y != 0) {
        z = x / y;
    }
    return z;
}*/