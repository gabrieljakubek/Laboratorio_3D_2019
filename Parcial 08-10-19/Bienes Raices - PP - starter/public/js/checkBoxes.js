function crearBoxes(array, seccionId) {
    var divBox = document.getElementById(seccionId);
    for (atributo in array[0]) {
        if (atributo != "id") {
            let div = document.createElement("div");
            div.classList.add("box");
            let labelA = document.createElement("label");
            labelA.htmlFor = "chk_" + atributo;
            labelA.appendChild(document.createTextNode(atributo));
            let checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.name = "chk_" + atributo;
            checkbox.id = "chk_" + atributo;
            checkbox.value = atributo;
            div.appendChild(labelA);
            div.appendChild(checkbox);
            divBox.appendChild(div);
        }
    }
    return divBox;
}