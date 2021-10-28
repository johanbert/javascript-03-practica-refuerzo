/* ------- DECLARAMOS FUNCIONES ------- */
function anadirTexto(parametro, parametroNuevo) {
    return parametro + parametroNuevo
}

const addText = (parameter, newParam) => {
    return parameter + newParam
}

/* ------- DECLARAR VARIABLES ------- */
let palabra = 'CURSO'
let nuevoTexto = ' Y REPASO'
let response;

/* ------- EJECUTAMOS FUNCIONES ------- */
console.log(palabra)

response = anadirTexto(palabra, nuevoTexto)
console.log(response)