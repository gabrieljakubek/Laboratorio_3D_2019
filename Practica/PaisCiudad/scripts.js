Array.prototype.unique = function() { return [...new Set(this)] };

var paises = data.map(function(dato) {
    return dato.pais
}).unique().sort()

window.addEventListener("load", () => {
    paises.forEach(element => {
        opcion = document.createElement("option");
        opcion.value = element;
        opcion.innerText = element;
        document.getElementById("selectPais").appendChild(opcion);
    });
    document.getElementById("selectPais").onchange = cargarCiudades;
    cargarCiudades();
});

function cargarCiudades() {
    document.getElementById("selectCiudad").innerHTML = "";
    let ciudades = data
        .filter(dato => dato.pais === document.getElementById("selectPais").value)
        .map(dato => dato.ciudad).sort();
    ciudades.forEach(element => {
        opcion = document.createElement("option");
        opcion.value = element;
        opcion.innerText = element;
        document.getElementById("selectCiudad").appendChild(opcion);
    });
}