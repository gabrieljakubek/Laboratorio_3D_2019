/*var x = function()
{
    return 4*3;
}

x();*/

/*var x = {nombre:"Juan",apellido:"Perez",edad: 30, saludar: function(){ return "Hola, me llamo "+this.nombre}};

console.log(x.saludar());*/

/*function Persona(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.saludar = function () { return "Hola, me llamo " + this.nombre };
}

var p1 = new Persona("Jose","Alvarez",34);
var p2 = new Persona("Ana","Gonzalez",20);
Persona.prototype.altura = 1.50;
p1.altura = 1.67;
console.log(p1.saludar());
console.log(p1.altura);
console.log(p2.saludar());
console.log(p2.altura);*/

var x;
function foo(a,b,c) {
    if (!c) {
        c=10;
    }
    console.log(a,b,c);
    //console.log(arguments.length);
}

x = foo;

x(23,12);