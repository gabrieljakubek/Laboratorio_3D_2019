"use strict";
let mensaje;
mensaje = "Hola mundo";
console.log(mensaje);
let vector = [1, 2, 3, 4];
let tupla = [1, "Ironman"];
var EHero;
(function (EHero) {
    EHero[EHero["Xmen"] = 0] = "Xmen";
    EHero[EHero["Avenger"] = 1] = "Avenger";
})(EHero || (EHero = {}));
console.log("Enum...");
console.log(EHero.Avenger);
console.log(EHero[EHero.Avenger]);
for (let key in EHero) {
    console.log(key);
}
let funcionEnviar = function (hero = "Spiderman") {
    return hero + " enviado";
};
console.log(funcionEnviar(EHero[EHero.Xmen]));
console.log(funcionEnviar());
let despedida = "Good Bye";
console.log(despedida);
//# sourceMappingURL=output.js.map