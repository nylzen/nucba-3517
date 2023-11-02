// HOISTING
// var nombre; JS hace esto con las variables tipo var y con las funciones
// saludar('Nelson')

// console.log(nombre)
// var nombre = 'Nelson'
// var nombre = 'Pepito'
// var nombre = 'Hola'
// console.log(nombre)

// function saludar(nombre){
//     console.log(nombre)
// }

// Variable global
// const nombre = 'Nelson'

// {
//     // Variable local
//     const hola = 'pepito'
//     console.log(nombre)
// }

// Scope
var a = 'Soy global'

function holi() {
    var b = "Estoy en una funcion"
}

{
    var c = 'Estoy en un bloque'
}

// Este let es global
//  let d = 'hola'
// const e = 'tuki'

{
    // Este let es local, pq esta dentro de un bloque
    let d = 'Estoy en bloque'
    const e = 'Estoy en bloque'
    let f;
    const h = 'HOla'
    // console.log(h)
}

// console.log(a) // Estoy global
// console.log(b) // Not defined
// console.log(c) // Estoy en bloque
// console.log(d)  // Si esta global funciona, si esta local no
// console.log(e) // Si esta global funciona, si esta local no

// Operadores de asignacion
/*
let numero = 10;
numero += (5) sumar => 15
numero -= resta
numero *= multiplica
numero /= divide
numero %= 2 => 0 o 1

*/
// let numero = 9
// console.log(numero %= 2)

// Operadores de comparacion
// == | Es igual a == b
// console.log(18 == "18") // true

// === | Es estrictamente igual a === b
// console.log(18 === '18') // false

// != | Es diferente a != b 
// console.log(18 != '18') // False

// !== | Es estricamente diferente a !== b
// console.log(18 !==  '18')

// > | Es mayor que a > b
// console.log(9 > 20) // false

// < | Es menor que a < b
// console.log(9 < 20) // true

// >= | Es mayor o igual a >= b
// console.log(17 >= 17) // true

// <= | Es menor o igual a <= b
// console.log(2 <= 5)

// Operadores logicos
// && AND - Las condiciones tienen que ser true para que devuelva true

// console.log(18 > 7 && 'hola' === 'hola') // true las dos son true
// console.log(8 < 10 && 5 >= 5) // true las dos true

// || OR - Una condicion es true devuelve true
// console.log(18 > 7 || 10 === '10') // TRUE
// console.log(10 < 1 || 8 < 5) // False

// ! NOT - Negamos lo que devuelve !true = false 
// console.log(!5 > 0)
// console.log(!true)

// Condicionales
// if(condicion){
//     // ejecuta esto
// }


// if
// console.log('Otros codigos')

// if(18 > 10){
//     console.log('Es verdad')
// }

// console.log('Otros codigos')

// If else
// const pepito = 18;

// if( pepito >= 18) {
//     console.log('Puede tomar un fernesito')
// } else {
//     console.log('No puede tomar alcohol')
// }

// const llueve = true;

// if(llueve) es lo mismo que decir llueve === true
// if(llueve === true){
//     console.log('Esta lloviendo, no te olvides del paragua')
// } else {
//     console.log('Sali tranqui que no llueve')
// }

// Verificar si un numero es par

// Primero tener un numero para ver si es par
// Ese numero dividirlo x 2 si el resto es 0 es par si no no

// const numero = 21
// if( numero % 2 === 0){
//     console.log('Es par')
// } else {
//     console.log('Es impar')
// }

// if | if else | if else if
// const numeroDeDia = 5
// let dia;

// if(numeroDeDia === 1) {
//     dia = 'Lunes'
// } else if (numeroDeDia === 2) {
//     dia = 'Martes'
// } else if (numeroDeDia === 3) {
//     dia = 'Miercoles'
// } else {
//     dia = 'Dia no valido'
// }

// Otra forma
// if(numeroDeDia === 1) {
//     dia = 'Lunes'
// }
// if(numeroDeDia === 2) {
//     dia = 'Martes'
// }

// console.log(`El dia es ${dia}`)

// Switch


// switch(condicion){
    //     case caso a evaluar:
    //         codigo a ejecutar
    //         break;
    //     default:
    //         caso a ejecutar
    // }
    
//    const numeroDeDia = 3
//    let dia;

//    switch(numeroDeDia) {
//     case 1:
//         dia = "Lunes";
//         break;
//     case 2:
//         dia = "Martes";
//         break;
//     case 3:
//         dia = "Miercoles";
//         break;
//     default: 
//         dia = "Dia no valido";
//    }

//    console.log(`El dia es ${dia}`)

// const mascota = 'Murcielago'
const mascota = 'Lagarto'

// switch(mascota) {
//     case "Lagarto":
//         console.log("Tengo un lagarto")
//         break;
//     case "Coballo":
//         console.log("Tengo un coballo")
//         break;
//     case "Perro":
//         console.log('Tengo un perro')
//     default:
//         console.log('Tengo un dragon')
// }

// Operador ternario

// Vamos a convertir este if else if a ternario
// if(numeroDeDia === 1) {
//     dia = 'Lunes'
// } else if (numeroDeDia === 2) {
//     dia = 'Martes'
// } else if (numeroDeDia === 3) {
//     dia = 'Miercoles'
// } else {
//     dia = 'Dia no valido'
// }

const numeroDeDia = 2;
let dia;

// dia = numeroDeDia === 1 ? 'Si' : 'No'
// console.log(dia)

dia = numeroDeDia === 1 
    ? "Lunes"
    : numeroDeDia === 4
    ? "Jueves"
    : numeroDeDia === 7
    ? "Boca boca"
    : "Dia no valido"

    // console.log(dia)

// Calificar una prueba en base a lo que saco

// Arriba de 9 crack
// 7 aprobado ahi no mas
// desaprobado
const notaHTML = document.getElementById('nota')
const nota = Math.floor(Math.random() * 10);

if(nota >= 9){
    console.log(`Te sacaste un ${nota} CRACK`)
    notaHTML.textContent = `Te sacaste un ${nota} FEBRERO DIRECTO`
} else if (nota >= 7){
    console.log(`Te sacaste un ${nota} Aprobado ahi nomas`)
    notaHTML.textContent = `Te sacaste un ${nota} FEBRERO DIRECTO`
} else if(nota >= 4){
    console.log(`Te sacaste un ${nota} Recuperatorio`)
    notaHTML.textContent = `Te sacaste un ${nota} FEBRERO DIRECTO`
}else {
    console.log(`Te sacaste un ${nota} FEBRERO DIRECTO`)
    notaHTML.textContent = `Te sacaste un ${nota} FEBRERO DIRECTO`
}

// 'Te sacaste un '+ nota