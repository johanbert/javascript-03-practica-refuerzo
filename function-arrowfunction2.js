/* ------- DECLARAMOS FUNCIONES ------- */
function ordenar(parametro) {
    return parametro.sort((a, b) => b.localeCompare(a))
}

const order = (parametro) => {
    return parametro.sort((a, b) => b.localeCompare(a))
}

/* ------- DECLARAR VARIABLES ------- */
let listado = ['JUAN', 'ANGEL', 'NELSON', 'DIEGO']
let respuesta;

/* ------- EJECUTAMOS FUNCIONES ------- */
console.log(listado)

respuesta = order(listado) // ['NELSON', 'JUAN', 'DIEGO', 'ANGEL']
console.log(respuesta)