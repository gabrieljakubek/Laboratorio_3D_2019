var btnSaludar
var btnDespedir

window.addEventListener('load', function() {
    btnSaludar = this.document.getElementById('btnSaludar');
    btnSaludar.addEventListener('click', saludar);
    btnDespedir = this.document.getElementById('btnDespedir');
    btnDespedir.addEventListener('click', saludar);
})

// btnSaludar.onclick = function() {
//     alert("Hola");
// };

function saludar() {
    console.log("Hola mundo!!!");
}