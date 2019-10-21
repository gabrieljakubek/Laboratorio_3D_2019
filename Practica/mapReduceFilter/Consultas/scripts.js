console.log(data);

/*
    realizar las operaciones usando los metodos map,  reduce y filter y combinaciones entre ellos
  */


var soluciones = {};

// Retornar un array con los nombres de los usuarios femeninos

soluciones.usuariosFemeninos = function(usuarios) {
    return usuarios
        .filter(function(user) {
            return user.genero === 'Female';
        })
        .map(function(user) {
            return user.nombre;
        });
}

console.log(soluciones.usuariosFemeninos(data));

// Retornar un array de strings (el email de los usuarios de sexo masculino)

soluciones.mailsVarones = function(usuarios) {
    return usuarios
        .filter(function(user) {
            return user.genero === "Male";
        })
        .map(function(user) {
            return user.email
        });
}

console.log(soluciones.mailsVarones(data));

// Retornar un array de objetos que solo contengan las claves nombre, email y edad, de todos los usuarios mayores que 'edad'

soluciones.usuariosMayores = function(usuarios, edad) {
    return usuarios
        .filter(function(user) {
            return user.edad > edad;
        })
        .map(function(user) {
            return {
                "nombre": user.nombre,
                "email": user.email,
                "edad": user.edad
            };
        });
}

console.log(soluciones.usuariosMayores(data, 40));

// Retornar un objeto que contenga solo el nombre y la edad del usuario mas grande.

soluciones.usuarioMasGrande = function(usuarios) {
    // let max = usuarios.map(function(user) {
    //     return user.edad;
    // });
    return usuarios
        .filter(function(user) {
            return user.edad == Math.max.apply(null, usuarios.map(function(user) {
                return user.edad;
            }))
        })
        .map(function(user) {
            return {
                "nombre": user.nombre,
                "edad": user.edad
            }
        })
}

console.log(soluciones.usuarioMasGrande(data));

// Retornar el promedio de edad de los usuarios (number)

soluciones.promedio = function(usuarios) {
    // let acumEdad = 0;
    // let num = usuarios.map(function(user) {
    //     return user.edad;
    // });
    // num.forEach(element => {
    //     acumEdad += element;
    // });
    // let cantidad = num.length;
    // return (acumEdad / cantidad).toFixed(2);

    return usuarios
        .map(usuario => usuario.edad)
        .reduce((suma, edad, indice, lista) => suma += edad / lista.length, 0).toFixed(2);

}

console.log("Promedio edad usuarios " + soluciones.promedio(data));

// Retornar el promedio de edad de los usuarios hombres (number)

soluciones.promedioVarones = function(usuarios) {
    return soluciones.promedio(usuarios.filter(user => user.genero === "Male"))
}

console.log("Promedio edad Varones " + soluciones.promedioVarones(data));

// Retornar el promedio de edad de los usuarios mujeres (number)

soluciones.promedioMujeres = function(usuarios) {
    return soluciones.promedio(usuarios.filter(user => user.genero === "Female"))

}

console.log("Promedio edad Mujeres " + soluciones.promedioMujeres(data));