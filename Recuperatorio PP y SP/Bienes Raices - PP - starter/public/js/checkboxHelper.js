function crearBoxes(array, boxsId) {
    var divBox = document.getElementById(boxsId);
    for (atributo in array[0]) {
        //console.log(atributo);
        if (atributo != "id" && atributo != '_id') {
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
            checkbox.checked = true;
            checkbox.onclick = filtrarTabla;
            div.appendChild(labelA);
            div.appendChild(checkbox);
            divBox.appendChild(div);
        } else {
            //console.log("hola");
            let div = document.createElement("div");
            div.classList.add("box");
            let labelA = document.createElement("label");
            labelA.htmlFor = "chk_" + atributo;
            labelA.appendChild(document.createTextNode(atributo));
            div.appendChild(labelA);
            divBox.appendChild(div);
        }
    }
    return divBox;
}