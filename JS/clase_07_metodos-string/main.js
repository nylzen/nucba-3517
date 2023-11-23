// const string = 'Hola Mundo'
// console.log(string)

// Metodos de string
// const miAuto = 'Es un Fiat'
// console.log(miAuto.length)



const validarDNI = (dni) => {
    if(dni.length === 8){
        console.log('Dni correcto')
    } else {
        console.log('Afuera')
    }
}

// validarDNI('11123123')
// validarDNI('123123')

// .toUpperCase / .toLowerCase
// const miString = 'Hola Messi'
// console.log(miString.toUpperCase())
// console.log(miString.toLowerCase())
// console.log(miString === 'Hola Messi')
// console.log(miString === 'hola messi')
// console.log(miString === 'HOLA MESSI')

// replace()
const string = 'Buenas buenas soy un string'
// const resultado = string.replace('o','MESSI')
// const resultado = string.replace('hola','chau')
// console.log(resultado) // ESTO NO ANDA PORQUE JS ES CASESENSITIVE

// *Solucion
// const resultado = string.toLowerCase().replace('buenas','chau')
// console.log(resultado)

// replaceAll()
const texto = 'Messi es el mejor futbolista del mundo porque Messi sabe cuanto pesa la del mundo'

// const resultado = texto.replaceAll('Messi','Dibu')
// console.log(resultado)

// .indexOf()
const textIndex = 'Hola Mundo'
// console.log(textIndex.toLowerCase().indexOf('hola'))
// console.log(textIndex.indexOf('Hola', 3))

// Pueden usar los metodos sin guardarlo en una variable
// console.log('Lionel Messi'.length)

// .trim()
const stringTrim = '                Hola              '
// console.log(stringTrim)
// console.log(stringTrim.trim())
// console.log(stringTrim.toLowerCase().trim() === 'hola')

// .split()
const stringSplit = 'Hola/Soy/Un/String'
// const resultado = stringSplit.split('/')
// const resultado = stringSplit.split('')
// console.log(resultado)

// const email = "lionelmessi@gmail.com"
// console.log(email.split('@')[0])

// Dar vuelta un string
// console.log(stringSplit.split("/").reverse().join(''))
const palabras = 'Messi es lo mas grande que hay'
// console.log(palabras.split(' ').reverse().join(''))

// .typeOf

// const color = 'Azul'
const color = 8;
const colores = ['Verde','Azul','Amarillo']
const number = 10;

// console.log(typeof color == number)
// console.log(typeof color == 'string')
// if(typeof color == 'string'){
//     console.log(color.toUpperCase()
// )}
// console.log(typeof colores)
// console.log(typeof number)

// repeat()
// const nombreRepeat = 'Dante'
// console.log(nombreRepeat.trim().repeat(7))

// charAt()
// console.log(nombreRepeat.charAt(2))
// console.log(nombreRepeat.charAt(4))

// .concat()
// const stringConcat = 'Hola'
// console.log(stringConcat.concat(nombreRepeat))
// console.log(stringConcat.concat(' Messi'))
// console.log(stringConcat.concat([1,2,3]))
// const result = stringConcat.concat([1,2,3])
// console.log(result)
// console.log(typeof result)

// const arrayConcat = [1,2,3]
// console.log(arrayConcat.concat([3,4,5]))
// console.log(arrayConcat)
// console.log([...arrayConcat, 1,2,3])
// console.log(arrayConcat)

// .startsWith()
const textoStart = 'Veamos la consola'
// const result = textoStart.startsWith('V')
// const result = textoStart.startsWith('Ve')
// const result = textoStart.startsWith('Veamos')
// const result = textoStart.startsWith('Veamos la')
// const result = textoStart.startsWith('veamos')
// console.log(textoStart.toUpperCase().startsWith('VEAMOS'))


// .endsWith()
const textoEnd = 'Metodos de string'
// console.log(textoEnd.endsWith('metodos'))
// console.log(textoEnd.endsWith('g'))
// console.log(textoEnd.endsWith('string'))
// console.log(textoEnd.toUpperCase().endsWith('STRING'))

// .includes()
const textoIncludes = 'Hola soy Messi'
// const result = textoIncludes.includes('soy') // true
// const result = textoIncludes.includes('hola') // false (case sensitive)
// console.log(result)

/*
 [x] 1. Crear una funcion que reciba 2 parametros 
 [x] 2. Un parametro va a ser un string
 [x] 3. EL segundo parametro va a ser una palabra a buscar dentro del primer string
 [] 4. El string tiene que encontrarse si esta en mayus o minus no importa como lo escriba
 [] 5. Si lo encuentra que imprima lo encontre
 [] 6. Si no lo encuentra que imprima no lo encontre
*/
// const hola = 'hola'
// const otrotexto = 'hola soy lionel andres messi cuccitini'

const checkString = (string, stringABuscar) => {
    const stringMinus = string.toLowerCase() // hola soy messi
    const stringABuscarMinus = stringABuscar.toLowerCase() // messi

    const estaEnElString = stringMinus.includes(stringABuscarMinus)

    if(estaEnElString){
        console.log(`Se encontro '${stringABuscar}' en el string: ${string}`)
    } else {
        console.log(`No se encontro '${stringABuscar}' en el string: ${string} `)
    }
}


// checkString('Hola soy messi', 'MESSI')
// checkString('Aguante messi', 'Cristiano')

// .slice()
const text2 = 'Veamos la consola'
// console.log(text2.length)
// console.log(text2.slice(0,7))
// console.log(text2.slice(7,9))
// console.log(text2.slice(10))
// console.log(text2.slice(4))

// Contar cuantas veces aparece una letra en un string
const textoEj = 'Hola soy UNA CADENA de tExto y soy DE NUcbA'
const letraABuscar = 'a'
// const cantidad = ? // DEBERIA DEVOLVER 5 CON LA A

