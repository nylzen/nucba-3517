//   const objMessi = {
//     id: 1,
//     nombre: "Lionel Messi",
//   }

//   const {nombre, id} = objMessi
//   console.log(nombre)
// //   const nombre = objMessi.nombre

const productos = [
  {
    id: 1,
    nombre: "Smartphone Galaxy S21",
    precio: 799.99,
    stock: 20,
    categorias: ["Electrónica", "Tecnología"],
  },
  {
    id: 2,
    nombre: "Camiseta de Algodón",
    precio: 19.99,
    stock: 50,
    categorias: ["Ropa"],
  },
  {
    id: 3,
    nombre: "Juego de Ollas de Acero Inoxidable",
    precio: 149.99,
    stock: 10,
    categorias: ["Hogar", "Cocina"],
  },
  {
    id: 4,
    nombre: "Smart TV 4K 55 pulgadas",
    precio: 699.99,
    stock: 15,
    categorias: ["Electrónica"],
  },
  {
    id: 5,
    nombre: "Zapatillas de Running Nike Air Max",
    precio: 129.99,
    stock: 30,
    categorias: ["Ropa", "Deportes"],
  },
  {
    id: 6,
    nombre: "Robot Aspiradora Inteligente",
    precio: 299.99,
    stock: 5,
    categorias: ["Hogar", "Tecnología"],
  },
  {
    id: 7,
    nombre: "Tablet Samsung Galaxy Tab A",
    precio: 199.99,
    stock: 25,
    categorias: ["Electrónica", "Tecnología"],
  },
  {
    id: 8,
    nombre: "Auriculares Inalámbricos Sony",
    precio: 89.99,
    stock: 40,
    categorias: ["Electrónica", "Tecnología"],
  },
  {
    id: 9,
    nombre: "Chaqueta Impermeable Columbia",
    precio: 79.99,
    stock: 20,
    categorias: ["Ropa", "Deportes"],
  },
  {
    id: 10,
    nombre: "Licuadora de Alta Potencia",
    precio: 49.99,
    stock: 0,
    categorias: ["Hogar", "Cocina"],
  },
];

// const productosIdPar = productos.filter((producto) => {
//     return producto.id % 2 === 0
// })
const productosIdPar = productos.filter((producto) => producto.id % 2 === 0);

// console.log(productosIdPar)

// 1. **Filtrar productos por categoría:**
//  Filtra los productos para obtener solo aquellos que pertenecen a la categoría "Ropa".

// const productosRopa = productos.filter((producto) => {
//     // console.log(producto.categorias)
//     // console.log(producto.categorias.includes('Ropa'))
//     return producto.categorias.includes('Ropa')
// })

const productosRopa = productos.filter((producto) =>
  producto.categorias.includes("Ropa")
);

// console.log(productosRopa);

// Agregar elemento a un array
// const num = [1, 2, 3];
// console.log(num);
// num.push("Messi");
// console.log(num);

// 2. Usando destructuring traer el nombre de los productos en un nuevo array

// const nombreProductos = productos.map((producto) => producto.nombre)
// const nombreProductos = productos.map((producto) => {
//     const { nombre } = producto
//     return nombre
// })

const nombreProductos = productos.map(({ nombre }) => nombre);
// console.log(nombreProductos)

// 3. **Encontrar productos agotados:**
// Encuentra y muestra los productos que tienen un stock igual a 0.

const productosAgotados = productos.filter((producto) => producto.stock === 0);
// console.log(productosAgotados)

// 4. **Calcular el valor total del inventario:**
// Calcula el valor total del inventario sumando el precio de todos los productos en stock.

const valorTotalInventario = productos.reduce((total, producto) => {
  // console.log({total})
  // console.log({producto})
  return Math.floor(total + producto.precio * producto.stock);
}, 0);

// console.log(`El valor total del invetario es: ${valorTotalInventario}`)

// const numeros = [1,2,3,4,5]
// console.log(numeros.reduce((acc, cur) => acc + cur))

// 5. **Encontrar productos de tecnología:**
// Encuentra y muestra los productos que pertenecen a la categoría "Tecnología".

// const filtrarProductos = productos.filter(producto => producto.categorias.includes('Tecnología'))
// console.log(filtrarProductos)
const productos2 = [
  {
    id: 1,
    nombre: "Smartphone Galaxy S21",
    precio: 799.99,
    stock: 20,
    categorias: ["Electrónica", "Tecnología"],
  },
  {
    id: 2,
    nombre: "Camiseta de Algodón",
    precio: 19.99,
    stock: 50,
    categorias: ["Ropa"],
  },
  {
    id: 3,
    nombre: "Juego de Ollas de Acero Inoxidable",
    precio: 149.99,
    stock: 10,
    categorias: ["Hogar", "Cocina"],
  },
];

const filtrarProductos = (array, categoria) => {
  return array.filter((producto) => {
    return producto.categorias.includes(categoria);
  });
};
// console.log(filtrarProductos(productos,'Ropa'))
// console.log(filtrarProductos(productos,'Cocina'))
// console.log(filtrarProductos(productos2,'Hogar'))

// 6. **Ordenar productos por precio:**
// Ordena los productos por precio de menor a mayor.

// const numeros2 = [1,2,3,10,20,30,17,14]
// console.log(numeros2.sort((a,b) => b - a))

// console.log(productosMenorAMayor)

const productoMenorAMayor = (array) => {
  const menorAMayor = array.sort((a, b) => a.precio - b.precio);
  const nombreOrdenado = menorAMayor.map(
    (producto) => `${producto.nombre}: ${producto.precio}`
  );

  return nombreOrdenado;
};

// console.log(productoMenorAMayor(productos))

// 7. **Modificar el precio de todos los productos:**
// Aumenta el precio de todos los productos en un 10%.

// const productosInflados = productos.map(producto => {
//     return {...producto, precioInflado: producto.precio * 1.1}
//     // return {...producto}
//     // return {...producto, precio: producto.precio * 1.1, nombreMessi: 'Messi'}
// })

const productosInflados = productos.map((producto) => ({
  ...producto,
  precioInflado: producto.precio * 1.1,
}));

// console.log(productosInflados)

// 8. **Encontrar productos que pertenecen a múltiples categorías:**
// Encuentra y muestra los productos que pertenecen a más de una categoría (por ejemplo, "Electrónica" y "Tecnología").
const multipleCategoria = productos.filter(
  (producto) => producto.categorias.length > 1
);

// console.log(multipleCategoria)

// 9. **Encontrar el producto más caro:**
// Encuentra el producto con el precio más alto.

// reduce (acumulador, iteracion) => devuelve un unico valor
const productoMasCaro = productos.reduce((productoMasCaro, producto) => {
  // return producto.precio > productoMasCaro.precio
  // ? producto
  // : productoMasCaro

  if (producto.precio > productoMasCaro.precio) {
    return producto;
  } else {
    return productoMasCaro;
  }
});

// console.log(productoMasCaro);

// 10. **Filtrar productos por precio:**
// Filtra los productos para obtener aquellos que tienen un precio menor o igual a $30.

// const productoMenorIgual30 = productos.filter(producto => producto.precio <= 30)
// console.log(productoMenorIgual30)

const productoMenorOIgual = (array, precio) => {
    return array.filter(producto => producto.precio >= 20 && producto.precio <= precio)
}

// console.log(productoMenorOIgual(productos, 50))
// console.log(productoMenorOIgual(productos, 150))

// 13. Hacer una función que devuelva un nuevo array con los productos actuales pero que aquellos que valgan mas de $300 tengan un descuento del 50%

const productosConDescuento = productos.map(producto => {
    return producto.precio > 300
        ? {...producto, precioDto: producto.precio * 0.5}
        : producto
})

// console.log(productosConDescuento)

// 11. Encontrar productos con nombres largos (más de 30 caracteres)
// const productoMas30Caracteres = productos.filter(productos => {
//     return productos.nombre.length > 30
// })

const productoMas30Caracteres = productos.filter(({nombre}) => nombre.length > 30).map(producto => `Los productos mas largos son ${producto.nombre}`)

// console.log(productoMas30Caracteres)

// 12. Encontrar productos con stock mínimo (menor o igual a 10 unidades)

const productoStockMinimo = productos.filter(({stock}) => stock <= 10)
// console.log(productoStockMinimo)