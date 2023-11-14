// ### Ejercicio 1: Calculadora de Descuento
// Solicita al usuario el precio de un producto y un porcentaje de descuento. Calcula y muestra el precio con el descuento aplicado.

const precio = 500;
const descuento = 35;

// console.log(calcDescuento);
// console.log(precioConDescuento);

const calcularDescuento = (precio, dto) => {
  const calcDescuento = precio * (dto / 100);
  const precioConDescuento = precio - calcDescuento;

  return `El precio final del producto es ${precioConDescuento}, se desconto ${calcDescuento} del total`;
};

// ### Ejercicio 2: Determinar Número Positivo o Negativo
// Solicita al usuario un número y determina si es positivo, negativo o cero.

const positivoONegativo = (num) => {
  if (num > 0) {
    console.log(`El numero ${num} es positivo`);
  } else {
    console.log(`El numero ${num} es negativo`);
  }
};

// positivoONegativo(10)
// positivoONegativo(11)
// positivoONegativo(-11)

const positivoNegativo = (num) =>
  num > 0
    ? console.log(`El numero ${num} es positivo`)
    : console.log(`El numero ${num} es negativo`);

// positivoNegativo(17)
// positivoNegativo(-17)

// DIFERENCIA ENTRE CONSOLE LOG Y RETURN
// const suma = (a,b) => {
//   console.log(a + b)
//   // return a + b
// }

// const resultado1 = suma(2,2)
// console.log(resultado1)

// const resultado2 = suma(47,1)
// console.log(resultado2)

// const resultado3 = resultado1 + resultado2
// console.log(resultado3)

// ### Ejercicio 3: Categoría de Edad
// Solicita al usuario su edad y muestra un mensaje que indique en qué categoría de edad se encuentra: niño, adolescente, adulto, o adulto mayor.

const validarEdad = (edad) => {
  if (edad <= 12) {
    return `Eres un niño`;
  } else if (edad <= 18) {
    return `Eres un adolescente`;
  } else if (edad <= 55) {
    return `Eres un adulto`;
  } else {
    return `Eres un anciano`;
  }
};

// console.log(validarEdad(10));
// console.log(validarEdad(26));
// console.log(validarEdad(126));
// console.log(validarEdad(13));

// console.log(calcularDescuento(500,35))
// console.log(calcularDescuento(12309,5))

// ### Ejercicio 4: Verificación de Contraseña
// Solicita al usuario que ingrese una contraseña. Luego, verifica si la contraseña ingresada es igual a una contraseña predefinida y muestra un mensaje de acceso permitido o denegado.

// const userPassword = prompt('Ingresa la pass')
// const validPass = 'MessiCampeonDelMundo2022'

// === valida tipo de dato y valor | == valida el valor
// userPassword === validPass ? console.log(`Tas adentro`) : console.log('Anda pa lla')

// if(userPassword === validPass) {
//   console.log('Estas atroden')
// } else {
//   console.log('Sali de aca')
// }

// ### Ejercicio 5: Identificar Números Pares e Impares
// Escribe un programa que recorra los números del 1 a X numero. Por cada número, verifica si es par o impar, y muestra un mensaje que indique esta clasificación.

const verificarNumero = (numero) => {
  for (let i = 1; i <= numero; i++) {
    if (i % 2 === 0) {
      console.log(`El numero ${i} es par`);
    } else {
      console.log(`El numero ${i} es impar`);
    }
  }
};

// verificarNumero(10)
// verificarNumero(53)

// ### Ejercicio 6: Conversión de Edad a Días
// Escribe un programa que tome una edad en años como entrada y calcule la edad equivalente en días. Luego, muestra un mensaje que indique la edad original y su equivalente en días.

// console.log(36 * 365)
const calcularEdadEnDias = (edad) =>
  `Tenes ${edad * 365} dias en tus ${edad} años`;

// console.log(calcularEdadEnDias(36))

// ### Ejercicio 7: FizzBuzz
// Escribe un programa que recorra los números del 1 a X. Por cada número, verifica las siguientes condiciones:

// - Si el número es divisible solo por 3, muestra "Fizz".
// - Si el número es divisible solo por 5, muestra "Buzz".
// - Si el número es divisible por 3 y por 5, muestra "FizzBuzz".

// hacer la funcion que reciba el numero hasta donde recorrer
// recorrer los numeros con un for (hasta el numero pasado por parametro)
// dentro del for evaluar las condiciones
// - Si el número es divisible solo por 3, muestra "Fizz".
// - Si el número es divisible solo por 5, muestra "Buzz".
// - Si el número es divisible por 3 y por 5, muestra "FizzBuzz".

const fizzBuzz = (num) => {
  for (let i = 1; i <= num; i++) {
    if (i % 15 === 0) {
      console.log(`${i}: FizzBuzz`);
    } else if (i % 3 === 0) {
      console.log(`${i}: Fizz`);
    } else if (i % 5 === 0) {
      console.log(`${i}: Buzz`);
    }
  }
};

// fizzBuzz(60);

// ### Ejercicio 8: Tabla de Multiplicar Personalizada.

// Escribe un programa que tome un número como entrada y genere su tabla de multiplicar del 1 al 10. Para cada multiplicación, muestra un mensaje que indique la multiplicación en formato "número x multiplicador = resultado"

// Escribir la funcion que recibe un numero
//

const tablaMultiplicar = (num, tabla) => {
  for (let i = 1; i <= tabla; i++) {
    console.log(`${num} * ${i} = ${num * i}`);
  }
};

// const num = 5;
// const tabla = 100;

// for(let i = 1; i <= tabla; i++){
//   console.log(`${num} * ${i} = ${num * i}`)
//  }

// console.log(`1 x 1 = 1`)
// tablaMultiplicar(7, 10)
// tablaMultiplicar(21, 43)

// ### Ejercicio 9: Contador Regresivo Personalizado
// Escribe un funcion que tome un número como entrada y genere un contador regresivo desde ese número hasta 1. Muestra cada número del contador en una línea separada.

// const numero = 38

// for(let i = numero; i >= 1; i--){
//   console.log(i)
// }

// Lo pasamos a funcion

const contadorHaciaAtras = (num) => {
  for (let i = num; i >= 1; i--) {
    console.log(i);
  }
};

// contadorHaciaAtras(17)
// contadorHaciaAtras(10)

// ### Ejercicio 10: Sistema de velocidad
// Escribe una función que verifique la entrada/parámetro proporcionado:

// - Si la velocidad está por debajo del límite de velocidad de 70, imprime: 'Conduccion segura'.

// - Si la velocidad está por encima del límite de velocidad de 70, cada 5 kilómetros de exceso corresponde a un punto de penalización. Imprime: 'Límite de velocidad superado por Punto de Penalización' + Punto.

// - Si el conductor acumula más de 10 puntos de penalización, es decir, supera el límite de velocidad de 120, imprime: 'Licencia suspendida'.

// Escribamos la funcion
// Parametro = velocidad
// Guardar data de valor en variables  (limite, umbral de penalizacion)
// Calcular los puntos por exceso
// Validar la velocidad y dar los puntos correspondientes si se excede

const verificarVelocidad = (velocidad) => {
  const limiteVelocidad = 70;
  const umbralPenalizacion = 120;
  // const puntosPenalizacion = (velocidad - limiteVelocidad) / 5;
  const puntosPenalizacion = Math.floor((velocidad - limiteVelocidad) / 5)

  if(velocidad <= limiteVelocidad) {
    return `Conducción segura`
  } else if (velocidad <= umbralPenalizacion) {
    return `Limite de velocidad superado por Puntos de Penalizacion: ${puntosPenalizacion}`
  } else {
    return `Licencia supendida, tomate un bondi pa`
  }
}

console.log(verificarVelocidad(71))
console.log(verificarVelocidad(75))
console.log(verificarVelocidad(77))
console.log(verificarVelocidad(85))
console.log(verificarVelocidad(120))
console.log(verificarVelocidad(140))
