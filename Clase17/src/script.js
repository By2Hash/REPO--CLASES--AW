const personas = [
    {
        nombre: "Bauty",
        edad: 20
    },
    {
        nombre: "Alfo",
        edad: 23
    },
    {
        nombre: "Cesar",
        edad: 21
    },
    {
        nombre: "Agus",
        edad: 23
    },
]


//EL CALLBACK --> SE PASA COMO ARGUMENTO DE OTRA FUNCION

console.log("--- .foreach ---");
//FOREACH --> NO DEVUELVE NADA
personas.forEach((persona) => {
    console.log(persona.nombre);
    console.log(persona.edad);
});

console.log(" --- .map --- ");
//MAP --> DEVUELVE UN NUEVO ARREGLO
const nuevoArregloPersona = personas.map((persona, indice, arreglo) => {
    
    return {
        ...persona,
        nombre: persona.nombre.toUpperCase(),
        edad: persona.edad + 1
    }
});
console.log(nuevoArregloPersona);
//FILTER --> DEVUELVE UN NUEVO ARREGLO


console.log("--- .filter ---");
const arreglo_persona = personas.filter((persona, indice, arreglo) => {
    return persona.edad > 22
});
console.log(arreglo_persona);


//FIND --> DEVUELVE EL PRIMER ELEMENTO QUE CUMPLE LA CONDICION
console.log("--- .find ---");

const ArregloPersona = personas.find((persona, indice, arreglo) => {
    return persona.edad > 22
});
console.log(ArregloPersona);