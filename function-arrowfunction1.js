// 1. Crear un algoritmo que almacene una lista de nombres en un arreglo y luego ordenarlos alfabéticamente.

// var ó let ó const
// DECLARO LA FUNCION ordernar
function ordenar() {
    // const lista = ['RAMON', 'ZAPATA', 'BETANIA', 'PEDRO', 'JOSE', 'ALFONSO', 'XAVIER']
    const lista = ['n', 'C', 'Z', 'e']

    // LISTA POR DEFECTO
    console.log('lista desordenada', lista)

    // ORDEN ASCENDENTE  = .sort con a.localeCompare(b)
    // ORDEN DESCENDENTE = .sort con b.localeCompare(a)
    lista.sort((a, b) => b.localeCompare(a))

    // LISTA DESPUES DE HABER SIDO ORDENADA
    console.log('lista ordenada', lista)
}

const order = () => {
    const lista = ['n', 'C', 'Z', 'e']
    console.log('lista desordenada', lista)
    lista.sort((a, b) => b.localeCompare(a))
    console.log('lista ordenada', lista)
}


// EJECUTA LA FUNCION ordenar
ordenar()
order()