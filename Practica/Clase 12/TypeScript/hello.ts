let mensaje: string;
mensaje = "Hola mundo";
//let mensaje ="Hola mundo";
console.log(mensaje);

//Array
let vector: number[] = [1, 2, 3, 4];

//Tupla
let tupla: [number, string] = [1, "Ironman"];

//Enum

enum EHero {
    Xmen,
    Avenger
}

console.log("Enum...");
console.log(EHero.Avenger);
console.log(EHero[EHero.Avenger]);
for (let key in EHero) {
    console.log(key);
}

//Funcion
let funcionEnviar = function (hero: string = "Spiderman") {
    // let funcionEnviar = function(hero?:string){
    return hero + " enviado";
}

console.log(funcionEnviar(EHero[EHero.Xmen]));
console.log(funcionEnviar());

let funcionEnviarMision2 = function (...heroes: string[]): void {
    for (let i = 0; i < heroes.length; i++) {
        console.log(heroes[i] + " enviar");
    }
};
funcionEnviarMision2('Batman', 'Hulk', 'Iron-man');

let funcionEnviarMision3 = (heroe: string = "Heroe"): string => {
    return heroe + " enviando a la mision";
};
console.log(funcionEnviarMision3());

//tipo objeto
let flash: { nombre: string, edad: number, poderes: string[], getNombre: () => string } =
{
    nombre: "Barry Allen",
    edad: 24,
    poderes: ["Speed Force", "Viaje en el tiempo"],
    getNombre() {
        return this.nombre;
    }
}

console.log(flash.getNombre());
//tipo personalizado
type Heroe = { nombre: string, edad: number, poderes?: string[], getNombre: () => string }
let ironman: Heroe = {
    nombre: "Antonio Stark",
    edad: 35,
    // poderes: ["Armadura", "Super inteligente"],
    getNombre: function () { return this.nombre; }
}

console.log(ironman.getNombre());

//interfaz

interface IHeroe {
    nombre: string;
    poder?: string;
    mostrar?(): string
}

let wolvering: IHeroe = {
    nombre: "Logan"
}

console.log(wolvering.nombre);

///clase
class Avenger implements IHeroe {
    nombre: string = "un avenger";
}

class Mutante implements IHeroe {
    nombre: string = "un mutante";
}

let unAvenger = new Avenger();
let unMutante = new Mutante();

console.log(unAvenger.nombre);
console.log(unMutante.nombre);

///interfaz funcion
interface IFuncDosNumeros {
    (num1: number, num2: number): number;
}
let miFuncion: IFuncDosNumeros;
miFuncion = (num1, num2) => num1 + num2;
console.log(miFuncion(1, 2));

///clase con constructor

class Avenger2 implements IHeroe {
    nombre: string = "un avenger";
    constructor(nombre: string) {
        this.nombre = nombre;
    }
}

let av2 = new Avenger2("Hank Pim");

console.log("Heroe 2: " + av2.nombre);

///Clase con atrib privados
class Avenger3{
    private _nombre:string = "un avenger";
    private _edad:number = 0;
    constructor(nombre:string){
        this._nombre = nombre;
    }
    get edad():number {return this._edad;}
    set edad(e:number){this._edad = e;}

    public mostrar = ()=>this._nombre;
}

let av3 = new Avenger3("Thor");
console.log("Heroe 3: "+ av3.mostrar());
av3.edad = 35;
console.log("Edad: " + av3.edad);

///Clases con metodos estaticos
class Xmen{
    static nombre_de_clase = "Xmen";
}
console.log("Atributo estatico: "+Xmen.nombre_de_clase);

///Herencia
class AvengerHeredado extends Avenger2{

}

let ah = new AvengerHeredado("Goliat");
console.log(ah.nombre);

///Herencia2
class AvengerHeredado2 extends Avenger2{
    edad:number = 0;
    constructor(nombre:string,edad:number){
        super(nombre);
        this.edad = edad;
    }
}

let ah2 = new AvengerHeredado2("Susan Storm",35);
console.log("Heredado2: " + ah2.nombre + " Edad: " +ah2.edad);

///Namespaces
namespace Funciones{
    export function f1(){
        console.log("Yo soy la f1");
    }
    export function f2(){
        console.log("Yo soy la f2");
    }
}

Funciones.f1();
Funciones.f2();
$(function(){
    console.log("Algo");
})