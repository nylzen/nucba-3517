// saludar con una alerta
// alert('Hola Mundo!')

// saludar por la consola
// console.log('Hola Mundo')
// console.log(true)
// console.log(false)
// console.log('true')

/*
    Tipos de datos:
    - Number: 1, 2, 3, 4, 5, 6.7
    - String: 'Hola', "Hola", `Hola` => `` (backtick)
    - Booleans: true, false
    - undefined
    - null
*/

// Concatenar
// console.log("Hola" + 10)
// console.log("Hola" + 'Mundo')
// console.log(10 + 8)
// console.log(10 + {})
// console.log(10 + [])
// console.log("10" + "8")
// console.log(10 + 8)

// Variables
// var let o const

// FINES DIDACTICOS ARRANCAMOS CON VAR
var nombre = 'Gaston'
// console.log(nombre)

var numeroA = 5
var numeroB = 2
var resultado = numeroA + numeroB
// console.log(resultado)
// console.log(5 + 2)


var textoA = "Messi"
var textoB = 'Campeon del mundo'
var resultado = textoA + " " + textoB
// console.log(resultado)

// var | let | const
var tipoVar = 'Hola soy var'
// console.log(tipoVar)
var tipoVar = "Hola soy var y estoy cambiando el valor"
// console.log(tipoVar)

// let
let tipoLet = 'Hola soy let'
// console.log(tipoLet)

// No podemos volver a re-declarar este tipo de variable
// let tipoLet = "Hola soy let y no me puedo re-declarar"
tipoLet = "Hola soy let y estoy cambiando el valor"
// console.log(tipoLet)

// const
const tipoConst = 'Tipo const'
// console.log(tipoConst)
// const tipoConst = ' No se puede'
// tipoConst = 'No se puede'

// Operadores
/*
    + Suma
    - Resta
    * Multiplicacion
    / Division
    % Modulo o el resto => lo que resta de una division
    ++ Incremento
    -- Decremento
    ** Potencia
*/

let numero1 = 10
const numero2 = 23

// Sumar
// console.log(numero1 + numero2)

// Restar
// console.log(numero1 - numero2) // -13

// Multiplicar
// console.log(numero1 * numero2) // 230

// Dividir
// console.log(numero1 / numero2) // 0.43478260869565216

// Modulo
// console.log(numero1 % numero2) // 10

// Incremento
// console.log(++numero1)

// Decremento
// console.log(--numero1)

// Potencia
// console.log(numero1 ** 4)

// Ver que tipo de datos estamos usando
// console.log(typeof numero1)
// console.log(numero1)
// console.log(typeof 'Hola')

// let result = "1" + numero1 // '1' + 10 => '110'
// console.log(typeof result)

// prompt('Ingrese su nombre')
// Quiero que el usuario ingrese su nombre y quiero imprimir por consola hola nombre del usuario

// Pseudocodigo
/*
1. Pedir el nombre del usuario
2. Guardar el nombre del usuario para poder usarlo
3. Mostrar en consola el nombre del usuario
*/

const nombreUsuario = prompt('Ingresa tu nombre')
// console.log(nombreUsuario)

// console.log("Hola" + " " + nombreUsuario + " " + "Saludos!")
// La forma mas facil para concatenar
console.log(`Hola ${nombreUsuario} Saludos!`)
console.log("Hola ${nombreUsuario}")