let selPaises;
let selCiudades;

window.addEventListener('load', function () {
    selPaises = document.getElementById('selPaises');
    selCiudades = document.getElementById('selCiudades');
    cargarSelect(selPaises, obtenerPaises(datos));
    cargarSelect(selCiudades, obtenerCiudades(datos, document.getElementById("selPaises").value));
    selPaises.addEventListener('change', (e) => {
        cargarSelect(selCiudades, obtenerCiudades(datos, e.target.value));
    });
})

function obtenerPaises(data) {
    // let paises = data.map(function(dato){
    //     return dato.pais;
    // }).unique().sort();
    // }
    return data.map((dato) =>
        dato.pais).unique().sort();
}

function obtenerCiudades(data, pais) {
    return data.filter((dato) => dato.pais === pais)
        .map((dato) => dato.ciudad)
        .unique()
        .sort();

}

function cargarSelect(select, data) {
    limpiarSelect(select);
    data.forEach(element => {
        let opcion = document.createElement('option');
        opcion.setAttribute('value', element);
        let texto = document.createTextNode(element);
        opcion.appendChild(texto);
        select.appendChild(opcion);
    });
}

Array.prototype.unique = function () {
    return [...new Set(this)];
}

function limpiarSelect(select) {
    // for(option in select.children){
    //     select.option.remove(option);
    // }
    while (select.hasChildNodes()) {
        select.remove(select.firstChild);
    }
}