// length
const arr = [1,2,3,4,5,6,7,8,9,10];
// const string = 'hola mundo'
// console.log(arr.length)
// console.log(string.length)

// indexOf()
// const nombres = ['Dante','Stefi','Carlos']
// console.log(nombres.indexOf('Stefi'))
// console.log(nombres.indexOf('Carlos'))

// if(nombres.indexOf('Dante') === 0) {
//     console.log('Dante es el primero')
//     console.log(nombres[0].toUpperCase())
// }

// .toString()
// const nombres = ['Dante','Stefi','Carlos']
// console.log(nombres.length)
// console.log(nombres.toString().length)

// .concat()
const listaDeReproduccion1 = ['cancion1','cancion2','cancion3']
const listaDeReproduccion2 = ['cancion4','cancion5','cancion6']

// const listaSpoty = listaDeReproduccion1.concat(listaDeReproduccion2)
// console.log(listaSpoty)
const listaSpoty = [...listaDeReproduccion1, ...listaDeReproduccion2, 'cancion 7']
// console.log(listaSpoty)

// console.log(listaDeReproduccion1, listaDeReproduccion2)

// .push()
// const animales = ['gato', 'perro', 'vaca']
// const masAnimales = ['tigre', 'leon', 'mono']

// console.log(animales.push('caballo'))
// console.log(animales)
// console.log(animales.push('elefante', 'jirafa',7, 10))
// console.log(animales)
// console.log(animales.push(masAnimales))
// console.log(animales)

// .unshift()
// const animales = ['gato', 'perro', 'vaca']
// console.log(animales.unshift('caballo'))
// console.log(animales)
// console.log(animales.unshift(['tigre', 'leon', 'mono']))
// console.log(animales)

// .pop()
// const animales = ['gato', 'perro', 'vaca']
// const ultimoAnimal = animales.pop()
// console.log(animales)
// console.log(ultimoAnimal)

// .shift()
// const animales = ['gato', 'perro', 'vaca']
// console.log(animales.shift())
// console.log(animales)

// join()
// const nombres = ['Dante','Stefi','Carlos']
// console.log(nombres.toString())
// console.log('---')
// console.log(nombres.join(''))
// console.log(nombres.join(' '))
// console.log(nombres.join(' / '))
// console.log(nombres.join(' /MESSI/ '))

// .reverse()
// const nombres = ['Dante','Stefi','Carlos']
// console.log(nombres)
// console.log(nombres.reverse())

// const string = 'Da/vuelta/un/string'
// console.log(string.split('/').reverse().join(''))

// slice()
// const nombres = ['Dante','Stefi','Carlos','Juan','Pedro','Maria','Jose','Luis','Ana','Lucia','Marta','Miguel','Pablo','Jorge','Alberto','Fernando','Raul','Ricardo','Ramon','Roberto','Rosa','Sara','Sandra','Sonia','Susana','Teresa','Tomas','Victor','Vicente','Yolanda','Zacarias','Zulema']
// console.log(nombres.slice(1,5))
// console.log(nombres.slice(-5))
// console.log(nombres.slice(1,6))
// console.log(nombres)


// =============================================
// METODOS CALLBACK
// .forEach()

const nombres = ['Dante','Stefi','Carlos','Juan','Pedro','Maria','Jose','Luis','Ana','Lucia','Marta','Miguel','Pablo','Jorge','Alberto','Fernando','Raul','Ricardo','Ramon','Roberto','Rosa','Sara','Sandra','Sonia','Susana','Teresa','Tomas','Victor','Vicente','Yolanda','Zacarias','Zulema']

// for(let i = 0; i < nombres.length; i++) {
//     console.log(nombres[i])
// }

// nombres.forEach((nombre) => {
//     console.log(`Hola ${nombre}`)
// })

// nombres.forEach(nombre => console.log(`Hola ${nombre}`))

// const numeros = [1,2,3,4]
// numeros.forEach(numero => console.log(numero * 2))

// .map()
// const numeros = [1,2,3,4,5,6,7]
// const duplicados = numeros.map(numero => {
//     return numero * 2
// })
// console.log(numeros)
// console.log(duplicados)


// .filter ()
// const numeros = [1,2,3,4,5,6,7]
// const pares = numeros.filter(numero => {
//     return numero % 2 === 0
// })

// const impares = numeros.filter(numero => {
//     return numero % 2 !== 0
// })

// const mayoresA4 = numeros.filter(numero => {
//     return numero > 4
// })

// console.log(pares)
// console.log(impares)
// console.log(mayoresA4)
// console.log(numeros)


// .find()
// const numeros = [1,2,3,4,5,6,7]

// const primerPar = numeros.find(numero => {
//     return numero % 2 === 0
// })

// const primerPar = numeros.find(numero => numero % 2 === 0)
// console.log(primerPar)

// const primerMayora4 = numeros.find(numero => numero > 4)
// console.log(primerMayora4)

// .every()
// const numeros = [1,2,3,4,5,6,7]
// console.log(numeros.every(numero => {
//     return numero > 0
// }))
// console.log(numeros.every(numero => numero > 2))

// .some()
// const numeros = [1,2,3,4,5,6,7]
// console.log(numeros.some(numero => numero > 3))
// console.log(numeros.some(numero => numero >= 7))
// console.log(numeros.some(numero => numero > 17))

// .sort()
// const numeros = [1,2,3,4,5,6,7,10,12,20,34,74]
// console.log(numeros)
// console.log(numeros.sort())
// console.log(numeros.sort((a,b) => a - b))
// console.log(numeros.sort((a,b) => b - a))
// console.log(nombres.sort())

// .reduce()
// const numeros = [1,2,3,4,5,6,7,10,12,20,34,74]

// const sumaTotal = numeros.reduce((acumulador, numero) => {
//     console.log({acumulador})
//     console.log({numero})
//     return acumulador + numero
// }, 0)

// console.log(sumaTotal)

const productos = [
    {
      id: 1,
      nombre: 'Camiseta de algodón',
      precio: 19.99,
      categoria: 'Ropa',
      stock: 50,
    },
    {
      id: 2,
      nombre: 'Zapatillas deportivas',
      precio: 89.99,
      categoria: 'Calzado',
      stock: 25,
    },
    {
      id: 3,
      nombre: 'Teléfono inteligente',
      precio: 599.99,
      categoria: 'Electrónica',
      stock: 10,
    },
    {
      id: 4,
      nombre: 'Portátil',
      precio: 899.99,
      categoria: 'Electrónica',
      stock: 15,
    },
    {
      id: 5,
      nombre: 'Libro de ciencia ficción',
      precio: 12.99,
      categoria: 'Libros',
      stock: 30,
    },
    {
      id: 6,
      nombre: 'Cafetera automática',
      precio: 49.99,
      categoria: 'Electrodomésticos',
      stock: 20,
    },
    {
      id: 7,
      nombre: 'Juego de mesa',
      precio: 24.99,
      categoria: 'Juegos',
      stock: 40,
    },
    {
      id: 8,
      nombre: 'Gafas de sol',
      precio: 29.99,
      categoria: 'Accesorios',
      stock: 35,
    },
    {
      id: 9,
      nombre: 'Mochila resistente al agua',
      precio: 39.99,
      categoria: 'Accesorios',
      stock: 18,
    },
    {
      id: 10,
      nombre: 'Silla de oficina ergonómica',
      precio: 149.99,
      categoria: 'Muebles',
      stock: 12,
    },
  ];

// Imprimir unicamente los nombres de los productos
// productos.forEach(producto => {
//     const {nombre, precio} = producto
//     console.log(`Nombre: ${nombre} - Precio: ${precio}`)
// })

// Quiero guardar en un nuevo array unicamente los nombres de los productos
const nombreProductos = productos.map(producto => producto.nombre)

// console.log(nombreProductos.join(' - '))

// Quiero filtrar todos los mayores a 50
const productosMayoresA50 = productos.filter(producto => producto.precio > 50)

// console.log(productosMayoresA50)

// Producots entre 20 y 100 de la categoria accesorios
const productosEntrePrecioYCategoria = productos.filter(producto => {
    return (producto.precio >= 20 && producto.precio <= 100) && producto.categoria === 'Accesorios'
})

// console.log(productosEntrePrecioYCategoria)

const filtrarCategoria = (categoria) => {
    const productosPorCategoria = productos.filter(producto => producto.categoria === categoria)
    console.log(productosPorCategoria)
    return productosPorCategoria
}

// filtrarCategoria('Accesorios')

const stock = productos.filter(producto => producto.stock > 20)
console.log(stock)

const stockMenorA20 = productos.some(producto => producto.stock < 20)

console.log(stockMenorA20)
// if(stockMenorA20){
//     console.log('Hay productos con stock menor a 20')
// }

const eliminarProducto = productos.filter(producto => {
    return producto.id !== 1
})

console.log(eliminarProducto)