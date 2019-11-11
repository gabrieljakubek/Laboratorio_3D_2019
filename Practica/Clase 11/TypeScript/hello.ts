let mensaje:string;
 mensaje = "Hola mundo";
//let mensaje ="Hola mundo";
console.log(mensaje);

//Array
let vector : number[] = [1,2,3,4];

//Tupla
let tupla : [number,string] = [1,"Ironman"];

//Enum

enum EHero{
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
let funcionEnviar = function(hero:string = "Spiderman"){
// let funcionEnviar = function(hero?:string){
    return hero + " enviado";
}

console.log(funcionEnviar(EHero[EHero.Xmen]));
console.log(funcionEnviar());