// Clousure / Clausura
const exterior = () => {
  const variableExterna = "Soy externa";

  function interior() {
    console.log(variableExterna);
  }

  return interior;
};

// console.log(exterior())
// const closure = exterior();
// console.log(closure())
// closure();

// Ejecutar la funcion sin guardarle en una variable
// exterior()()

function crearContador() {
  let contador = 0;

  function incrementar() {
    return contador++;
  }

  return incrementar;
}

const count = crearContador();
// console.log(count())
// console.log(count())

// Que es un closure?
/* 
 Es una funcion que se va a acordar de las variables externas y va a poder acceder a los valores de dichas variables;
*/

// Objetos
const jugadores = ["Messi", "DIbu"];
// console.log(jugadores)

let persona = {
  // propiedad: valor,
  // key: value,
  nombre: "Lionel",
  edad: 36,
  equipos: ["Barcelona", "Pechege", "Inter de Miami"],
  balonDOr: 8,
  trofeos: {
    seleccion: ["Mundial", "Finalissima", "Copa America"],
    barcelona: "Champions",
  },
  goles: 824,
  GOAT: true,
  saludar: function () {
    console.log(`Hola me llamo ${this.nombre}`);
    // console.log(this);
  },
  //   saludarConFlecha: () => {
  //     console.log(`Hola me llamo ${this.nombre}`);
  //   },
};

// Acceder a props
// console.log(persona)
// console.log(persona.nombre)
// console.log(persona.edad)
// console.log(persona.trofeos.seleccion[0])
// console.log(`La persona se llama ${persona.nombre} tiene ${persona.goles} goles y jugo en ${persona.equipos[2]}`)

// Agregar datos
// persona.pais = "Argentina"
// console.log(persona.pais)
// console.log(persona['nombre'])

// persona.saludarConFlecha();
// persona.saludar()

const vehiculo = {
    marca: 'Chevrolet',
    anio: 2023,
    modelo: 'Corsa',
    color: ['Rojo','Azul', 'Oro'],
    alPiso: true,
    acelerar: function(){
        console.log('Acelera + 10km')
    },
    frenar: function(){
        console.log('Frene')
    }
}

// console.log(vehiculo)
// console.log(vehiculo.acelerar())
// console.log(vehiculo.frenar())

// Object.entries
// console.log(Object.entries(persona))
// [['propiedad', 'valor'],['propiedad','valor', ...]]

// Object.values
// console.log(Object.values(persona))
// ['valor','valor','valor','valor',...]

// Object.keys
// console.log(Object.keys(persona))
// ['propiedad','propiedad', ...]

// const values = Object.values(persona)
// for(let i =0; i < values.length; i++){
//     console.log(values[i])
// }

// Spread operator
const numeros = [1,2,3]
const otroArray = ["Messi", 1,32,189, true]
// console.log(numeros.concat(otroArray))
// console.log(numeros)
// console.log(otroArray)

const arrayCombinado = ['estoy al inicio', ...numeros, 'MESSI', ...otroArray, 5]
// console.log(arrayCombinado)

const obj1 = {foo: 'bar', x: 10}
const obj2 = {foo: 'baz', y: 60}
// console.log(obj1, obj2)

// Si tenemos las mismas propiedades OJO porque el valor se pisa con el que llegue ultimo
const obj3 = {...obj1, ...obj2, foo: 'Messi', campeon: true}
// console.log(obj3)

const pepito = {...obj1, id: Date.now()}
// console.log(obj1)
// console.log(pepito)

// Rest Operator
const restOperator = (...rest) => {
    console.log(rest)
    console.log(`Valores del rest pueden ser de 0 a n ${rest}`)
}
// restOperator(1,2,'messi',3,4,5,6,8,9)

const otroRest = (a,b, ...args) => {
    console.log(a,b, args)
}

// otroRest(1,2, 2,3,23,41,234,1234,1234,1234,1234,1234,)


// Desestructuracion
const array = [1,2,3,4,5,6,7]
// const [a, b] = array
// console.log(a,b)
// console.log(primero, segundo)

const usuarioLogueado = {
    user: 'Messi',
    email: 'messi@messi.com',
    pass: 'messi123',
}

// console.log(usuarioLogueado.user)
// console.log(`Hola ${usuarioLogueado.user} tu mail es ${usuarioLogueado.email}`)

// const { user,email } = usuarioLogueado
// console.log(`Hola ${user} tu email es ${email}`)

// const funcionObj = (objeto) => {
//     return `Hola ${objeto.user} tu email es ${objeto.email}`
// }
// console.log(funcionObj(usuarioLogueado))

// const funcionObj = (objeto) => {
//     const {user, email} = objeto
//     return `Hola ${user} tu email es ${email}`
// }

// console.log(funcionObj(usuarioLogueado))

const funcionObj = ({user, email, pass}) => {

    return `Hola ${user} tu email es ${email} tu pass es ${pass}`
}

console.log(funcionObj(usuarioLogueado))

const string = 'Messi'
// console.log(string.toUpperCase())

// const hjola =new String('tuki')
// console.log(hjola)

const arr = [1,2,3,4,5,6,7,8,9,10]
const arr2 = [10,2,3,4,5,6,7,8,9,10]
// console.log(arr[0])


const multiArr = (array, num) => {
    for(let i =0; i < array.length; i++){
        console.log(array[i] * num)
    }
}

// multiArr(arr, 2)
// multiArr(arr2, 2)

