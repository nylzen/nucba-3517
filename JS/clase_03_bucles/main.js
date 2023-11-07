// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)
// console.log(9)
// console.log(10)

// For
// for(inicio; condicion; actualizacion){
//     // Bloque de codigo
//     // Bloque de codigo
// }

// Hacer un contador del 1 al 10
// for(let i = 1; i <= 10; i++){
//     console.log(`El numero que estamos iterando es el ${i}`)
// }

/*
1. Inicio, creamos una variable i con el valor de 1;
2. Condicion, preguntamos si i es menor o igual a 10;
3. Si la condicion es falsa termina el bucle;
4. Si es verdadera ejecuta lo que esta adentro del for;
5. Actualizacion, incrementamos el varlor de i en 1 con el i++;
6. Volvemos desde el paso 2 (evalua nuevamente la condicion preguntando si i = 2 es menor o igual a 10)
*/

// Break
// Dependiendo una condicion podemos cortar el bucle
// for(let i = 1; i < 10; i++){
//     if(i === 5) {
//         break;
//     }
    
//     console.log(i)
// }

// Continue
// Dependiendo una condicion podemos saltear la itearacion
// for(let i = 1; i < 10; i++){
//     if( i === 8) continue;
//     if( i === 6) continue;
//     if( i === 4) continue;
//     if( i === 2) continue;
//     console.log(i)
// }

// Ejercicio, imprimir numeros pares
// for (let i = 1; i <= 200; i++){
//     // continue after pairs numbers
//     if(i % 2 === 0){
//         console.log(`El numero ${i} es par`)
//     } else {
//         console.log(`El numero ${i} es impar`)
//     }
// }

// Multiplos de un numero
// const multiplo = 5;

// for(let i = 1; i <= 20; i++){
//     if(i % 5 === 0) {
//         console.log(`El numero ${i} es multiplo de 5`)
//     }
// }

// Sumar varios numeros
// 1,2,3,4,5,6,,7,8,9,
// 
// let suma = 0;

// for(let i = 1; i <= 20; i++){
//     console.log(`Vuelta numero ${i}`)
//     console.log(`Suma vale: ${suma}`)
//     console.log(`Numero a sumar: ${i}`)
//     // console.log(`Ahora suma vale: ${suma = suma + i}`)
//     console.log(`Ahora suma vale: ${suma += i}`)
//     console.log(`============`)
// }

// While
// Sintaxis
// while(condicion){
//     // bloque de codigo
//     // actualizar
// }

// Contador ascendente

// let i = 1;

// while(i <= 10){
//     console.log(`El numero iterado es: ${i}`);
//     i++;
// }


// Contador descendente
// let i = 10;
// while(i >= 1 ){
//     console.log(`El numero iterado es: ${i}`)
//     i--;
// }

// Do.. while
// do {
//     // codigo a ejecutar
// } while (condicion)

// let i = 1;
// do {
//     console.log(`El numero es: ${i}`)
//     i++
// } while(i <= 0)

// Dado que lo tiremos hasta que salga 4
// let resultado;
// let intentos = 0;

// while(resultado !== 4){
//     resultado = Math.floor(Math.random() * 6)
//     console.log(resultado)
//     intentos++;
// }

// console.log(`Se necesitaron ${intentos} para sacar un 4`)

//  Arrays
const otroArray = [10, 'Messi', 'celu', true]
const nombres = [
    'dante',
    'seba',
    'nico',
    'nelson',
    'rolando',
    'Messi',
    'Dibu',
    'Cuti',
    'Scaloni',
    'Enzo',
    'Otamendi',
    'Angelito del gol',
    'Mcallister',
    'Almiron'

]

// console.log(nombres)
// console.log(nombres[2])
// console.log(nombres[0])

// Acordarse como escribir length
// Gallina Tiene Huevo
// console.log(nombres.length)
// for(let i = 0; i < nombres.length; i++ ){
//     if(nombres[i] == 'Almiron'){
//         continue;
//     }
//     console.log(nombres[i])
// }

// const dias = ['Lunes', 'Martes','Miercoles','Jueves','Viernes']

// for(let dia of dias){
//     console.log(dia)
// }

const scaloneta = [
    'messi',
    'dibu',
    'cuti',
    'enzo',
    'julian',
    'fideo',
    'taglia',
    'de paul',
    'paredes',
    'dybala',
    'montiel'
]

// Buscar jugadores
// El usuario escriba el nombre del jugador a buscar y lo guardo en una variable
// Recorrer el array

const buscarJugador = prompt('Que jugador estas buscando?').toLowerCase()
// console.log(buscarJugador)
let jugadorEncontrado = false;

for(let jugador of scaloneta){
    // console.log(juga
    // if('messi' === 'messi'){}
    if(jugador === buscarJugador){
        // console.log('lo encontre')
        jugadorEncontrado = true;
        break;
    }
}

if(jugadorEncontrado === true){
    console.log(`El jugador "${buscarJugador}" esta en el plantel`)
} else {
    console.log(`El jugador "${buscarJugador}" no esta en el plantel`)
}


// const hola = 'HOLA'
// console.log(hola.toLowerCase())
// console.log(hola.toUpperCase())
