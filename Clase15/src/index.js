//Estructura de control de bucles
// Usaremos solo el for

for(let i = 0; i < 10; i++)
{
    console.log(i);
}


console.log("Arreglos");

//Que es un arreglo: es una estructura de datos, utiliza inidces (una posicion)
const numero = [1,2,3,5,8];
console.log(numero[3]);

//Los arreglos son datos NO PRIMITIVOS por que usan un indice

const numero3 = [1,2,[2,5], [1,[2,[4,7,9]]]];
console.log("Busqueda de numero");
console.log(numero3[2][1]);
console.log(numero3[3][1][1][2]);


console.log("Como usar los objetos en JS");
// Objetos : tiene par : clave : valor
const persona = {
    nombre: "Bauty",
    edad: 20,
    estudia: true
};

console.log(`Mi nombre es ${persona.nombre}`);