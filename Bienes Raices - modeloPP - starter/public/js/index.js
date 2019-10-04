var frm;
window.addEventListener("load", () => {
    cargarTabla();
});

function cargarTabla() {
    let xhr = new XMLHttpRequest();
    let info = document.getElementById("tabla");
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                setTimeout(() => {
                    let json = JSON.parse(xhr.responseText);
                    info.innerHTML = "";
                    info.appendChild(crearTabla(json["data"]));
                }, 3000);
            }
            else {
                console.log(`Error: ${xhr.status} - ${xhr.statusText}`);
            }
        }
        else {
            info.innerHTML = '<img src="./img/831.gif" alt="spinner"/>';
        }
    }
    xhr.open('GET', 'http://localhost:3000/traerAnuncios', true);
    xhr.send();
}
