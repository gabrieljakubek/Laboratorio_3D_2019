function cargarSelect(select, datos) {
    //limpiarSelect(select);
    datos.forEach(data => {
        let opcion = document.createElement("option");
        opcion.setAttribute('value', data.toLowerCase());
        let texto = document.createTextNode(data);
        opcion.appendChild(texto);
        select.appendChild(opcion);
    });
}

function limpiarSelect(select) {
    while (select.hasChildNodes()) {
        select.remove(select.firstChild);
    }
}