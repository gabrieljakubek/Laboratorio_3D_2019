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
let funcionEnviarMision2 = function (...heroes) {
    for (let i = 0; i < heroes.length; i++) {
        console.log(heroes[i] + " enviar");
    }
};
funcionEnviarMision2('Batman', 'Hulk', 'Iron-man');
let funcionEnviarMision3 = (heroe = "Heroe") => {
    return heroe + " enviando a la mision";
};
console.log(funcionEnviarMision3());
let flash = {
    nombre: "Barry Allen",
    edad: 24,
    poderes: ["Speed Force", "Viaje en el tiempo"],
    getNombre() {
        return this.nombre;
    }
};
console.log(flash.getNombre());
let ironman = {
    nombre: "Antonio Stark",
    edad: 35,
    getNombre: function () { return this.nombre; }
};
console.log(ironman.getNombre());
let wolvering = {
    nombre: "Logan"
};
console.log(wolvering.nombre);
class Avenger {
    constructor() {
        this.nombre = "un avenger";
    }
}
class Mutante {
    constructor() {
        this.nombre = "un mutante";
    }
}
let unAvenger = new Avenger();
let unMutante = new Mutante();
console.log(unAvenger.nombre);
console.log(unMutante.nombre);
let miFuncion;
miFuncion = (num1, num2) => num1 + num2;
console.log(miFuncion(1, 2));
class Avenger2 {
    constructor(nombre) {
        this.nombre = "un avenger";
        this.nombre = nombre;
    }
}
let av2 = new Avenger2("Hank Pim");
console.log("Heroe 2: " + av2.nombre);
class Avenger3 {
    constructor(nombre) {
        this._nombre = "un avenger";
        this._edad = 0;
        this.mostrar = () => this._nombre;
        this._nombre = nombre;
    }
    get edad() { return this._edad; }
    set edad(e) { this._edad = e; }
}
let av3 = new Avenger3("Thor");
console.log("Heroe 3: " + av3.mostrar());
av3.edad = 35;
console.log("Edad: " + av3.edad);
class Xmen {
}
Xmen.nombre_de_clase = "Xmen";
console.log("Atributo estatico: " + Xmen.nombre_de_clase);
class AvengerHeredado extends Avenger2 {
}
let ah = new AvengerHeredado("Goliat");
console.log(ah.nombre);
class AvengerHeredado2 extends Avenger2 {
    constructor(nombre, edad) {
        super(nombre);
        this.edad = 0;
        this.edad = edad;
    }
}
let ah2 = new AvengerHeredado2("Susan Storm", 35);
console.log("Heredado2: " + ah2.nombre + " Edad: " + ah2.edad);
var Funciones;
(function (Funciones) {
    function f1() {
        console.log("Yo soy la f1");
    }
    Funciones.f1 = f1;
    function f2() {
        console.log("Yo soy la f2");
    }
    Funciones.f2 = f2;
})(Funciones || (Funciones = {}));
Funciones.f1();
Funciones.f2();
$(function () {
    console.log("Algo");
});
let despedida = "Good Bye";
console.log(despedida);
//# sourceMappingURL=output.js.map