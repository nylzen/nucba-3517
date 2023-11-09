// const nombre = "Messi"

// console.log(`Hola ${nombre}!`)
// console.log('Como estas?')

// console.log(`Hola Script!`)
// console.log('Como estas?')

// Nomenclatura de variables
/*
    PascalCase = Primera letra de cada palabra en mayuscula
    camelCase = Primera letra en minuscula y la palabra que sigue en mayuscula
    snake_case = Separamos los espacios con un _
    kebab-case = Separamos los espacios con un -
    SCREAMING_SNAKE_CASE = Todo en mayuscula y separado por _
*/

// Declarar funciones
// function saludar(){
//     console.log('Holi')
// }

// Ejecutar / Llamar a la funcion
// saludar()

// function saludar(){
//     let nombre = 'Nelson'
//     console.log(`Hola ${nombre}`)
// }

// saludar()

// function sumar(){
//     let num1 = 5;
//     let num2 = 10;

//     console.log(num1 + num2)
// }

// sumar()

// Refactorizamos para que la funcion sea dinamica
// function sumar(num1, num2) {
//     console.log(num1, num2)
//     console.log(num1 + num2)
// }

// sumar(1,217)
// sumar(148,217)
// sumar(579, 112)
// sumar('Messi', 10)
// sumar(true, 10)
// sumar([1,2,3,4], 10)
// sumar()
// sumar(2,2)

// Funcion para saludar
function saludar(nombre = 'Usuario'){
    // const userName = prompt('nombre?')
    console.log(`Hola desde parametro: ${nombre}`)
    // console.log(`Hola desde el prompt: ${userName}`)
}

// saludar('Nelson')
// saludar()
// saludar('Dante')
// saludar([1,2,3])

// Funcion para multiplicar
function multiplicar(a = 291 ,b = 114){
    // console.log(a * b)
    if(typeof a === 'string' || typeof a === 'boolean') return
    
    return a * b
}

// console.log(multiplicar(2,2)) // 4
// multiplicar(2,10)
// multiplicar(7)
// multiplicar(25,578)
// multiplicar()

function suma(a,b){

    if(a === 2){
        return 'No se puede sumar ese numero'
    }

    const resultado = a + b
    return resultado

    // Esto de acabajo no le interesa a js
    console.log('hola')

}

// console.log(suma)
// console.log(suma(2,2))
// console.log(suma(3,3))

function multiplicar(a,b){
    // console.log( ` Console dentro de la funcion ${a * b}`)
    return a * b
}

function sumar(a,b){
    return a + b
}

// console.log(sumar(2,2))
// console.log(multiplicar(3,2))
// console.log(sumar(multiplicar(2,2), 7)) // multiplicar da 4 y le sumamos 7
// console.log(sumar(undefined, 7))

// Funciones flecha
// () => {} // Esto es una funcion anonima

// const otraVariable = function(a,b){
//     return a + b
// }

// const variable = () => {}

// console.log(otraVariable(2,2))

//FUNCION TRADICIONAL
// function sumar(a,b){
//     return a + b
// }

// Funcion flecha
const sumarFlecha = (a,b) => {
    return a + b
}
// const resultado = sumarFlecha(2,5)
// console.log(resultado)

// Funcion de flecha acortada
const sumarFlechaAcortada = (a,b) => a + b

// console.log(sumarFlechaAcortada(11,290))

// Que pasa si tengo mas lineas en la funcion
const pruebaFlecha = (nombre) => {
    const nombreAMayusculas = nombre.toUpperCase()

    return nombreAMayusculas
}

// console.log(pruebaFlecha('Messi'))
// Contador hacia atras con un for

// for(let i = 5; i >= 0; i--){
//     console.log(i)
// }


// Contador hacia atras con funcion recursiva
const cuentaAtras = (numerito) => {
    // Caso base para indicar cuando termina la recursividad
    if(numerito === 0) return;

    // Lo que hace la funcion
    console.log(numerito)

    // Return y llamado asi mismo
    return cuentaAtras(numerito - 1)
}
// 
// cuentaAtras(5)

/*
1. El parametro actual 5
2. Evaluamos si el 5 es igual a 0
3. No, imprime el numero (5)
4. La funcion se devuelve asi misma con el parametro -1. O sea 5 - 1
5. Proxima ejecucion de la funcion es cuentaAtras(4)
6. repite el proceso hasta que la condicion de true y se termine
*/

// Funcion duplicar numero recursivo
const duplicar = (numero) => {
    // El codigo a hacer
    numero = numero + numero

    console.log(numero)

    // Caso base
    if(numero <= 200) {
        console.log("Te pasaste")
        return;
    }

    // Return
    return duplicar(numero)
}

// duplicar(100)

// CALLBACK
const alertHola = nombre => {
    return alert(`Hola ${nombre}`)
}

// alertHola('Messi')

const consoleHola = nombre => {
    return console.log(`Hola ${nombre}`)
}

// consoleHola('Messi')

const procesarEntrada = (comoImprimo) => {
    const nombreUsuario = prompt('Ingresa tu usuario')
    comoImprimo(nombreUsuario)
}

// procesarEntrada(alertHola)

// Ejemplo de donde los vamos a usar
const nombres = ["Dante","Carlos","Nelson","Seba"]

nombres.forEach((nombre) => {
    return console.log(nombre)
})


