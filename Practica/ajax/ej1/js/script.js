window.addEventListener("load", () => {
    document.getElementById("btnTraer").addEventListener('click', traerTexto);
})

function traerTexto() {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        // aca va el codigo que maneja la peticion
        let info = document.getElementById("info");
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                setTimeout(() => {
                    info.innerText = xhr.responseText;                    
                }, 3000);
            }
            else{
                console.log(`Error: ${xhr.status} - ${xhr.statusText}`);
            }
        }
        else {
            info.innerHTML='<img src="./images/spinner.gif" alt="spinner" />';
        }
    }
    xhr.open('GET', './documento.txt', true);
    xhr.send();
}

