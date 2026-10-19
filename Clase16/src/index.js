//FUNCIONES EN JS

// 1 - Funciones de Declarción

function suma() {
    console.log(5 + 2);
}

suma()

function multiplicar(a,b)
{
    return a * b;
}

let resultado = multiplicar(10, 5)
console.log(resultado);


// 2 - Funcion Flecha

const resta = (a,b) => {
    return a - b;
}
let resultadoResta = resta(5,2)
console.log(resultadoResta);


//Callbacks

const a = (cb) => {
    console.log(`Se ejecuto la funcion a`);
    cb()
}

const b = () => {
    console.log(`Se ejecuto el callback, funcion b`);
}

a(b);

// BUSCAR Y APRENDER A USAR EL FOREACH Y MAP
// ADEMAS DEL FILTER Y FIND