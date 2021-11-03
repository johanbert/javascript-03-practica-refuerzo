/* ------- CICLO FOR ------- */
/*
 TIENE UNA ESTRUCTURA DE LA SIGUIENTE MANERA:
 RECIBE 3 ARGUMENTOS
 - variableInicializada = es la variable que colocaremos generalmente en 0
 - expresionComparada = Es la comparacion para continuar ejecutando el ciclo o la condicion para dejar de ejecutarlo
 - IncrementarODecrementar = incrementaremos o decrementaremos la variableInicializada

 for (variableInicializada; expresionComparada; IncrementarODecrementar){
     // INSTRUCCIONES: LO QUE HARÁ
 }

 OPERADORES DE COMPARACION:
    <  MENOR QUE
    >  MAYOR QUE
    <= MENOR O IGUAL QUE
    >= MAYOR O IGUAL QUE
    == IGUAL QUE
    != NO ES IGUAL QUE ó DIFERENTE QUE
*/
let temporadas = 10
let seasons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] // su tamaño se obtiene con el property .length

for (let numero = 0; numero <= seasons.length; numero++) {

    if (numero == 5) {
        console.log('5 ES LA MEJOR TEMPORADA')
    } else {
        console.log('numero', numero)
    }
}