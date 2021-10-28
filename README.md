
# DUDAS
## 1 SOBRE EL for
## 2 SOBRE EL if else
## 3 SOBRE EL let
## 4 document.write
## 5 ++ function
## 6 el punto 2 del ejercicio
## 7 comparaciones o acciones dentro de un for
## 8 operador ternario como aplicarlo
## 9 function stringRev2
```
function stringRev2 (str) {
    let myMessage = str.split ('');
    let reversedMyMessage = myMessage.reverse ();
    let finalReverse = reversedMyMessage.join ('');
    return finalReverse;
  }

```


# Javascript Practicas 3

## Ejercicios


1. Crear un algoritmo mediante JS que me permita saber si un año será Bisiesto o no. El usuario 
debe ingresar el año a través de un input y mediante un mensaje en el HTML se le confirmara al 
usuario si es o no un año bisiesto (Cualquier año).


LA LOGICA DE LOS AÑOS BISIESTOS ES:
Cuando el año sea múltiplo de cuatro y no sea múltiplo de cien entonces es bisiesto

Un año es bisiesto si cumple los siguientes criterios:

Es bisiesto si es divisible entre 4.
Pero no es bisiesto si es divisible entre 100.


Puede usar el módulo para encontrar el resto después de una división y luego, si el resto es igual a cero, entonces es un múltiplo.

//x and y are both integers
let remainder = 4 % 4;
if (remainder == 0){
//x is a multiple of y
} else {
//x is not a multiple of y
}


if (3020 % 4 == 0 && 3020 % 100 != 0) {
    console.log('SI ES BISIESTO')
}
else{
 console.log(' NO ES')
}


2. Crear un algoritmo que me permita saber si el numero ingresado por el usuario es PAR o IMPAR

3. Crear un algoritmo que me permita saber si una palabra ingresada es Palíndromo o no

PALINDROMO
SI ES ANA = ANA
NO ES BETO = OTEB