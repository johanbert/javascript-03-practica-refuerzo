// 2. Crear un script que muestre una palabra o frase ingresada al revés y que indique cuántas letras y espacios tiene. 
// ej: Ingrese una palabra o frase Hola mundo 
// Tu palabra al revés es: odnum aloh Tiene 9 letras y 1 espacio

// let texto = 'EVA'
// texto.split("") toma el texto y lo separa pero lo retorna como array. Ejemplo:
// Retornaria de 'EVA' : ['E','V','A']

// function showTextoAlReves() {
// }
/** FUNCION DE FLECHA o funcion anónima
 (params) => {
}
*  */
const showTextoAlReves = () => {
    let texto = prompt('ESCRIBA EL TEXTO')
    alert(fraseAlReves(texto))
}

// const fraseAlReves = (frase) => frase.split("").reverse().join("")
const fraseAlReves = (frase) => {
    return frase.split("").reverse().join("")
}